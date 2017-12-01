var fs = require('fs');

fs.appendFile('Kumpulan Koding.txt', 'Hello World',function(err, data){
    if (err) throw err;
    console.log("Saved!");
});