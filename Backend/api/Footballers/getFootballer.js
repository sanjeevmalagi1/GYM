const check =   require('express-validator').check;

const Footballer = App.require('models/footballer')

module.exports = async function(req,res){
    try {
    
        const params = {
            id : req.params.footballerId
        };

        function getFootballer() {
            return Footballer.find({_id : params.id})
                    .exec()
                    .then(function(footballer){
                        return footballer;
                    })
                    .catch(function(e){
                        return e;
                    })
        }

        const footballer = await getFootballer();
        res.send({
            footballer
        });
        
    } catch (error) {
        console.error(error);
        res.status(504).send("Somethins went wrong")
    }
    
}