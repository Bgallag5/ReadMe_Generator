// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

//license and link info found at https://choosealicense.com/ 
// badgde info found at https://shields.io/ -- 'https://img.shields.io/badge/<LABEL>-<MESSAGE>-<COLOR>'  --  %20 represents a space in the link
function renderLicenseBadge(questions) { 
  let license = questions.license;
if(license == 'Apache License 2.0'){
  return `
  [![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0) 
`
} else if(license == 'GNU GPLv3'){
  return `
  [![License](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0.html)
`
} else if(license == 'MIT'){
  return `
  [![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
`
} else if (license == "I don't want to add a license"){
  return " ";
}

}

// Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(questions) {
let license = questions.license;
if(license == 'Apache License 2.0'){
  return `
  A permissive license whose main conditions require preservation of copyright and license notices. Contributors provide an express grant of patent rights. Licensed works, modifications, and larger works may be distributed under different terms and without source code.`
} else if(license == 'GNU GPLv3'){
  return `
  Permissions of this strong copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights.`
} else if(license == 'MIT'){
  return `
  A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.`
} else if (license == "I don't want to add a license"){
  return " ";
}

}

//  Create a function to generate markdown for README; Title, Description, Table of contents, Installation, Usage, License, Contributing, Tests, Questions. 
function generateMarkdown(questions) {
  return `
  ${renderLicenseBadge(questions)}

 # Title  
 # ${questions.title}

  -[Description](#description)
  -[Installation](#installation)
  -[Usage](#usage)
  -[Contributions](#contributions)
  -[License](#license)

  ## Description  
  ${questions.description}

  ## Installation
  ${questions.installation}

  ## Usage 
  ${questions.usage}

  ## Contributions
  [${questions.contributions} GitHub](https://github.com/${questions.contributions})

  ## Tests
  ${questions.tests}

  ## Questions?
  Check out my [Github](https://github.com/${questions.questionsgit})
  ...or email me @ ${questions.questionsemail}

  ## License  
  ${renderLicenseSection(questions)}
 

`;
}

module.exports = generateMarkdown;



//Ape A permissive license whose main conditions require preservation of copyright and license notices. Contributors provide an express grant of patent rights. Licensed works, modifications, and larger works may be distributed under different terms and without source code.
//GPN Permissions of this strong copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights.
//MIT   A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.