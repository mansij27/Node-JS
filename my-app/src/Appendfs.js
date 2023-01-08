const fs= require('fs');
const data= "Some data to append";
fs.appendFile('file1.txt', data, (err) => {
    if(err){
        throw err;
    }
    console.log("File is updated");
});