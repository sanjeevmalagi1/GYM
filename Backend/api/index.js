var express = require('express');
var router = express.Router();

var logger = App.require('api/log.js')

router.use('/User', logger.logRequest, App.require('api/User'));
router.use('/Footballers', logger.logRequest, App.require('api/Footballers'));
router.use('/Roster', logger.logRequest, App.require('api/Roster'));

router.route('/')
    .get((req,res)=>{
        res.send("I am serving API here...")
    });
      
module.exports = router;