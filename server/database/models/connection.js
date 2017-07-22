var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/test1');
mongoose.connect('mongodb://test1User:admin@ds139262.mlab.com:39262/test1',
{
    useMongoClient: true
}
);


var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("connected");
    // we're connected!
});

module.exports=mongoose;