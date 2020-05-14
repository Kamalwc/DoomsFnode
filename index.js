var inq = require("inquirer");
var fs = require("fs");


//ask user questions 
var prompt = inq.prompt([
    {
        message:"Whats your favorite Manga?",
        name:"FavManga",
        type:"input"
    }
]).then(function(data){
    console.log(data.FavManga);
})

// generate the readme file 
// data will be the read me file
fs.writeFile('message.txt', data, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });


