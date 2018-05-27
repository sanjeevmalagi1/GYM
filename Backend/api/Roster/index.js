var express = require('express');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

var router = express.Router();
var Auth = App.require('api/auth');
var User = App.require('models/user');

const JWRSecret = App.JWTSecret;

const addPlayer = App.require('api/Roster/addPlayer')
const removePlayer = App.require('api/Roster/removePlayer')
const getRoster = App.require('api/Roster/getRoster')

router.route('/')
    .post(Auth.checkAuth,addPlayer)
    .delete(Auth.checkAuth,removePlayer)
    .get(Auth.checkAuth,getRoster)
    
module.exports = router;