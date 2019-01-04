/*
this is an example config some details will need changing
*/

var config = {
    username : 'root',
    host: '188.166.15.225',
    privateKey:require('fs').readFileSync('id_rsa'),
    port:22,
    dstPort:27010,
    localPort: 2000
};

var server = tunnel(config, function (error, server) {

    if(error){
        console.log("SSH connection error: " + error);
    }

    mongoose.connect('mongodb://127.0.0.1:2000/mysuperdb');

    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'DB connection error:'));
    db.once('open', function() {
        console.log("DB connection successful");
    });

});
