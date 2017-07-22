var mongoose = require('./connection');
mongoose.Promise = require('bluebird');
var Schema = mongoose.Schema;


var simpleSchema = new Schema({
    name: String,
    subject: String
}, { collection: 'demoData'});

var simpleData = mongoose.model('simpleData', simpleSchema);

// categoriesData.options.toObject.retainKeyOrder=true;

module.exports = simpleData;