const check =   require('express-validator').check;

const Footballers = App.require('models/footballer')

module.exports = async function(req,res){
    try {
    
        const params = {
            limit : parseInt(req.query.limit),
            offset : parseInt(req.query.offset)
        };

        function getFootballers() {
            return Footballers.find()
                    .skip(params.offset)
                    .limit(params.limit)
                    .exec()
                    .then(function(footballers){
                        return footballers;
                    })
                    .catch(function(e){
                        return e;
                    })
        }

        const footballers = await getFootballers();
        res.send({
            footballers
        });
        
    } catch (error) {
        console.error(error);
        res.status(504).send("Somethins went wrong")
    }
    
}