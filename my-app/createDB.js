var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017';
MongoClient.connect(url, function(err, dbClient) {
    if (err) throw err;
    var dbo = dbClient.db('mca2sem');
    dbo.createCollection('fsStud', function(err, res) {
        if (err) throw err;
        console.log("Collection created");
        dbClient.close();
    });
});