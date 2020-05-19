export const generateMarkdown = (data) =>{
    return( `# ${data.title} 

## Badges
![badmath](${data.badge})

## ${"Decription"} ${data.description}

## Table of Contents 
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)


    
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
* Do you have a Profile Picture?: ${data.profilePicture}
* My Github email address: [My Email](${data.email})`);
}