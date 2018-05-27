var express = require('express');

var router = express.Router();
var User = App.require('models/user');
var auth = App.require('api/auth');

const getFootballers = App.require('api/Footballers/getFootballers');
const getFootballer = App.require('api/Footballers/getFootballer');
const getTotalCount = App.require('api/Footballers/getTotalCount');


router.get('/',getFootballers);
router.get('/totalCount',getTotalCount);
router.get('/:footballerId',getFootballer);

module.exports = router;