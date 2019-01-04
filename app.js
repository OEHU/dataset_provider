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
change this to rmeote instance once moving to production to link to `config.json`
*/
const urlMongo = 'mongodb://localhost:27017'
const dbName = 'bigchain'
let db = null;

MongoClient.connect(urlMongo, { useNewUrlParser: true }, function(err, client) {
  assert.equal(null, err);
  console.log("connected successfully to mongodb instance")
  let db = client.db(dbName);

	/*
	define different collections to search thru for speed optimization:
	&& make line 20 = 'this.db' & change other stuff accordingly
	*/
	self.db = client.db(dbName);
	self.assetCollection = self.db.collection('assets');
	            self.metadataCollection = self.db.collection('metadata');
	            self.transactionCollection = self.db.collection('transactions');

	/*
	change to 'WEBPORT' in production
	*/
	app.listen(PORT, () => {
		console.log(`connected to ${db.databaseName} database`) // check connects to correct db
		console.log(`express app listening on port ${PORT}`)
	})
	require("./routes/test.js")(app, db), // checks which db you're connected to and console logs on GET/ to url
	/*
	pass other ob objects into dataset.js route
	*/
	require("./routes/dataset.js")(app, db); // takes params from POST/ req and responds w dataset download
})
