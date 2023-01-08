const fs = require('fs');

fs.readFile('file1.txt',function(err,data){
    fs.appendFile('file3.txt',data,(err)=>{
        if(err){
            throw err;
        }
        console.log("file 1 is copied ");
    });
    
});
fs.readFile('file2.txt',function(err,data){
    fs.appendFile('file3.txt',data,(err)=>{
        if(err){
            throw err;
        }
        console.log("file 2 is copied ");
    });
    
});