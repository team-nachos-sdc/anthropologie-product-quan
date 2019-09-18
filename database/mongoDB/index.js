const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/fec', {useNewUrlParser: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('db connected successfully!')
});

module.exports = db;


