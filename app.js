const express = require("express"),
	  app = express(),
    path = require('path'),
    env = require(path.resolve( __dirname, "./.env" )),
		config = require(path.resolve( __dirname, "./config.json" )),
		tunnel = require('tunnel-ssh'),
		assert = require('assert'),
		MongoClient = require('mongodb').MongoClient;

require ('dotenv').load()

var PORT = process.env.PORT;
var WEBPORT = process.env.WEBPORT;

/*
change this to rmeote instance once local is working to `config.json` in production
*/
const urlMongo = 'mongodb://localhost:27017'
const dbName = 'bigchain'
let db = null;

MongoClient.connect(urlMongo, { useNewUrlParser: true }, function(err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to mongodb instance")
  let db = client.db(dbName);
	/*
	change to 'WEBPORT' in production
	*/
	app.listen(PORT, () => {
	  console.log(`express listening on port ${PORT}`)
		console.log(`connected to ${db.databaseName} database`)
	})
	require("./routes/test.js")(app, db), // checks which db you're connected to and console logs on GET/ to url
	require("./routes/assets.js")(app, db);
	/*
	add more routes per request
	*/
})
