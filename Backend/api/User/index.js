var express = require('express');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

var router = express.Router();
var User = App.require('models/user');
var auth = App.require('api/auth');

const JWRSecret = App.JWTSecret;

const signup = App.require('api/User/signup')
const login = App.require('api/User/login')

router.post('/signup',signup)
router.post('/login',login)

router.route('/')
    .get((req,res)=>{
        res.send("You have hit User API endpoint!")
    })

    

module.exports = router;