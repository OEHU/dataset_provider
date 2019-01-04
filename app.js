const express = require("express"),
	  app = express(),
    mongoose = require('mongoose'),
    path = require('path'),
    env = require(path.resolve( __dirname, "./.env" )),
		tunnel = require('tunnel-ssh');

require ('dotenv').load()

var PORT = process.env.PORT;
var WEBPORT = process.env.WEBPORT;

/*
change this to node instance once local is working < --- cf. './ssh_tunnel_rough.js'
mongoose.connect('mongodb://root@188.166.15.225:27017/bigchain', { useNewUrlParser: true } );
*/
mongoose.connect('mongodb://localhost/bigchain', {useNewUrlParser: true});

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("connection to mongo open")
});

/*
check which db you're connected to and console log it
*/

require("./routes/test.js")(app)
// more routes in here

/*
CHANGE TO WEBPORT IN PRODUCTION
*/
app.listen(PORT, () => {
  console.log(`express listening on port ${PORT}`)
});
