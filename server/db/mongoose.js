var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://yls22:orang2289@ds149672.mlab.com:49672/todo?', {useNewUrlParser: true, authMechanism: 'ScramSHA1'});

module.exports =  {mongoose};