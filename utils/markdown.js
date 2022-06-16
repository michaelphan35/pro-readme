// Function to create markdown file //

module.exports = markdownData => {

    
    
return `
#${markdownData.title}
    
    
## Table of Contents
-[Description](#description)<br/>
-[Installation](#installation)<br/>
-[Usage](#usage)<br/>
-[License](#license)<br/>
-[Contribution](#contribution)<br/>
-[Questions](#questions)<br/>
    
## Description
${markdownData.description}

## Installation
${markdownData.installation}

## Usage
${markdownData.usageIbfo}

## License
${markdownData.license}
    
## Contribution
${markdownData.contributions}

## Questions
${markdownData.github}
${markdownData.email}
`
};
