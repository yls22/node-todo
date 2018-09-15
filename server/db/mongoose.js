var mongoose = require('mongoose');

//var mongoDB = 'mongodb://yls22:orang2289@ds149672.mlab.com:49672/todo';
mongoose.set('useFindAndModify', false);
mongoose.Promise = global.Promise;
mongoose.connect( process.env.MONGODB_URI, {useNewUrlParser: true});

module.exports =  {mongoose};