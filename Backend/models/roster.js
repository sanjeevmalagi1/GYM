const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const rosterSchema = new Schema({
    user:{ type: Schema.Types.ObjectId, ref: 'users' },
    players:[{ type: Schema.Types.ObjectId, ref: 'footballers' }]
})

const Roster = mongoose.model('rosters', rosterSchema);

module.exports = Roster;