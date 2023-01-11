const mongoose=require('mongoose');
const ConnectionString = process.env.MONGO_URI;
mongoose.set('strictQuery', true);
mongoose.connect(ConnectionString, {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', function (err) { throw err }); 
db.once('open', function callback() {
   console.log('connected to mongodb database!');
});

module.exports = db;