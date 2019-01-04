const express = require("express"),
	  app = express(),
    path = require('path'),
    env = require(path.resolve( __dirname, "./.env" )),
		tunnel = require('tunnel-ssh'),
		assert = require('assert'),
		MongoClient = require('mongodb').MongoClient;

require ('dotenv').load()

var PORT = process.env.PORT;
var WEBPORT = process.env.WEBPORT;

/*
change this to rmeote instance once local is working < --- cf. './ssh_tunnel_rough.js'
*/
const urlMongo = 'mongodb://localhost:27017'
const dbName = 'bigchain'

MongoClient.connect(urlMongo, function(err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to mongodb instance")
  const db = client.db(dbName);
	console.log(db.databaseName);
  // const collection = db.collection('assets');
})

require("./routes/test.js")(app) // checks which db you're connected to and console log it
// more routes in here

/*
change to 'WEBPORT' in production
*/
app.listen(PORT, () => {
  console.log(`express listening on port ${PORT}`)
});
