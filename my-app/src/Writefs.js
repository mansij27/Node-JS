const fs= require('fs');
const data= "This is the new content of the file"

fs.writeFile('file2.txt', data, (err) => {
    if(err){
        throw err;
    }
    console.log("Data written successfully");
});