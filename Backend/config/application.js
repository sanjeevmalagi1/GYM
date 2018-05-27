var env =               process.env.NODE_ENV || 'development',
    mongoURL =          process.env.MONGO_URL,
    JWTSecret =         process.env.JWT_SECRET || 'dummysecret',
    packageJSON =       require('../package.json'),
    path =              require('path'),
    express =           require('express'),
    bodyParser =        require('body-parser'),
    mongoose =          require('mongoose'),
    cors =              require('cors'),
    winston =           require('winston'),
    expressValidator =  require('express-validator'),
    public =            __dirname + '/../public';

require('winston-loggly-bulk');
console.log(`Loading App in ${env} mode.`);

global.App = {
    app : express(),
    port : process.env.PORT || 8080,
    version : packageJSON.version,
    root : path.join(__dirname,'..'),
    env,
    JWTSecret,
    appPath : function(path){
        return `${this.root}/${path}`
    },
    require : function(path){
       return require(this.appPath(path))
    },
    connectMongoDB : ()=>{
            mongoose.connect(mongoURL);
            // Get Mongoose to use the global promise library
            mongoose.Promise = global.Promise;
            //Get the default connection
            var db = mongoose.connection;

            //Bind connection to error event (to get notification of connection errors)
            db.on('error', console.error.bind(console, 'MongoDB connection error:'));
            db.once('open', function() {
                console.log('Now we are connected with mongoDB');
            });
    },
    registerLoggy : function(){
        winston.add(winston.transports.Loggly, {
            token: "27cadf5c-9d87-45af-98c2-a6172891c38b",
            subdomain: "sanjeevmalagi",
            tags: ["Winston-NodeJS"],
            json:true
        });
    },
    start : function(){
        
        if(!this.started){
            this.started = true;

            this.connectMongoDB();
            this.registerLoggy();

            this.app.listen(this.port)
            console.log(`Running App Version : ${App.version} on port : ${App.port}`)
        }
        else{
            console.log("App is Already Running");
        }
    }
}

var User = App.require('models/user');
var APIs = App.require('api');

//Middlewares 
App.app.use(bodyParser.urlencoded({ extended: false }))
App.app.use(cors())
App.app.use(expressValidator())

App.app.use('/',express.static(public))
App.app.use('/api',APIs);
