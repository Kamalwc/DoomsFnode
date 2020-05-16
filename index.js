var inq = require("inquirer");
var fs = require("fs");


//ask user questions 
var prompt = inq.prompt([
    {
        message:"Enter your Badge",
        name:"badge",
        type:"input"
    },
    {
        message:"Enter the title of your project",
        name:"title",
        type:"input"
    },
    {
        message:"Enter your project description",
        name:"description",
        type:"input"
    },
    {
        message:"Enter your table of contents separated by space", // separated by space 
        name:"table",
        type:"input"
    },
    {
        message:"Enter your steps to installation guide",
        name:"installation",
        type:"input"
    },
    {
        message:"Enter your usage description",
        name:"usage",
        type:"input"
    },
    {
        message:"Enter your license",
        name:"License",
        type:"input"
    },
    {
        message:"Enter your contribution guide",
        name:"contribute",
        type:"input"
    },
    {
        message:"Enter your test description",
        name:"test",
        type:"input"
    },
    {
        message:"Does your Github acount have a profile picture?",
        name:"profilePicture",
        type:"input"
    },
    {
        message:"Enter the email address associated with your Github account",
        name:"email",
        type:"input"
    }
]).then(function(data){
    const tableOfContents = data.table.split(" ");
    let list = ``;
    for( x in tableOfContents){
        list += `* ${tableOfContents[x]}
        `;
    }

    const readMe = `
    BADGES HERE
    # ${data.title}


    ## Decription
    ${data.description}

    ## Table of Contents //CREATE HYPER LINKS OUT OF THIS
        ${list}
    
    ## Installation
    ${data.installation}

    ## Usage
    ${data.usage}

    ## License
    ${data.license}

    ## Contributing
    ${data.contribute}

    ## Tests
    ${data.test}

    ## Questions
        * Profile Picture: ${data.profilePicture}
        * Github email address: ${data.email}
    `;
  
    fs.writeFile('USERREADME.md', readMe, (err) => {
            if (err) throw err;
            console.log('Readme Updated');
          });
})




