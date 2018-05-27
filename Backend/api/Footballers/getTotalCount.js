const check =   require('express-validator').check;

const Footballers = App.require('models/footballer')

module.exports = async function(req,res){
    try {
    
        function getFootballersCount() {
            return Footballers.count()
                    .exec()
                    .then(function(count){
                        return count;
                    })
                    .catch(function(e){
                        return e;
                    })
        }

        const count = await getFootballersCount();
        res.send({
            count
        });
        
    } catch (error) {
        console.error(error);
        res.status(504).send("Somethins went wrong")
    }
    
}