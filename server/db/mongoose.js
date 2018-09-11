var mongoose = require('mongoose');

var mongoDB = 'mongodb://yls22:orang2289@ds149672.mlab.com:49672/todo';

mongoose.Promise = global.Promise;
mongoose.connect( mongoDB, {useNewUrlParser: true});

module.exports =  {mongoose};

//process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp'