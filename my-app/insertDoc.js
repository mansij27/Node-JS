var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017';
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db('mca3sem');
    var myobj = [{ sname: "Ajay", course: "mca", marks: { m1: 50, m2: 60, m3: 70 } },
        { sname: "Jay", course: "bca", marks: { m1: 57, m2: 63, m3: 74 } }
    ];
    dbo.collection("fsStud").insertMany(myobj, function(err, res) {
        if (err) throw err;
        console.log("Document created");
        db.close();
    });
});