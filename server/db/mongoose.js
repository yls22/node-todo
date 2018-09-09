var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI ||'mongodb://yls22:123456@ds149672.mlab.com:49672/todo',{useNewUrlParser: true});

module.exports =  {mongoose};