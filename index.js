import inq from 'inquirer'; 
import fs  from 'fs';
import { questions }  from './questions.js';
import { generateMarkdown } from './generateMarkdown.js'

var prompt = inq.prompt(questions).then(function(data){
    // const tableOfContents = data.table.split(" ");
    // let list = ``;
    // for( x in tableOfContents){
    //     list += `* ${tableOfContents[x]}
    //     `;
    // }

    let readMe = generateMarkdown(data);
    
    fs.writeFile('USERREADME.md',readMe, (err) => {
            if (err) throw err;
            console.log('Readme Updated');
    });
})

// add jenkins build badge to your read me 
// rename the repo
// finalize and submit hw 

// express the classwork
