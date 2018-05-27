var winston = require('winston');

const logRequest = (req, res, next) => {
    var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
    winston.log('info',fullUrl)
    next()
}

module.exports = { 
    logRequest 
}