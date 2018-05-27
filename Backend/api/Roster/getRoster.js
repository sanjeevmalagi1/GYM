const check =   require('express-validator').check;
const mongoose = require('mongoose');

const Roster = App.require('models/roster')

module.exports = async function(req,res){
    try {
    
        const params = {
            id : req.params.authData._id,
        };

        console.log(req.params.authData._id);
        

        function getRoster() {
            return Roster.find({user : params.id })
                    .populate('players')
                    .exec()
                    .then(function(roster){
                        return roster;
                    })
                    .catch(function(e){
                        return e;
                    })
        }

        const roster = await getRoster();
        res.send({
            roster
        });
        
    } catch (error) {
        console.error(error);
        res.status(504).send("Somethins went wrong")
    }
    
}