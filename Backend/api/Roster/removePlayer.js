const check =   require('express-validator').check;
const mongoose = require('mongoose');

const Roster = App.require('models/roster')

module.exports = async function(req,res){
    try {
    
        const params = {
            id : req.params.authData._id,
            playerId : req.body.playerId
        };

        function removePlayer() {
            const condition = {
                user : params.id
            };
            const updation = {
                $pull: { players: mongoose.Types.ObjectId(params.playerId) }
            };
            
            return Roster.findOneAndUpdate(condition,updation,{ 'new': true })
                    .populate('players')        
                    .exec();
        }

        const roster = await removePlayer();
        res.send({
            roster
        });
        
    } catch (error) {
        console.error(error);
        res.status(504).send("Somethins went wrong")
    }
    
}