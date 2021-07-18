//import packages; array of questions; init() => generateMarkdown 
// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const writeToFile = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    name: 'title',
    message: 'What is the title of your project? (Required)',
    validate: title => {
        if (title){
            return true;
        } else if(!title){
            console.log('Please enter required information');
            return false;
        }
    }
},
{   
    type: 'input',
    name: 'description',
    message: 'Please give a brief description of your project. (Required)',
    validate: description => {
        if (description){
            return true;
        } else if(!description){
            console.log('Please enter required information');
            return false;
        }
    }
},
{   
    type: 'input',
    name: 'installation',
    message: 'Please give instructions for how to install and run your project. (Required)',
    validate: installation => {
        if (installation){
            return true;
        } else if(!installation){
            console.log('Please enter required information');
            return false;
        }
    }
},
{   
    type: 'input',
    name: 'usage',
    message: 'Please give an example use-case for this project. (Required)',
    validate: usage => {
        if (usage){
            return true;
        } else if(!usage){
            console.log('Please enter required information');
            return false;
        }
    }
},
{   
    type: 'input',
    name: 'contributions',
    message: 'Who else worked on this project? Type their github username: (Optional)', 
},
{   
    type: 'input',
    name: 'tests',
    message: 'How was this project tested? (Required)',
    validate: tests => {
        if (tests){
            return true;
        } else if(!tests){
            console.log('Please enter required information');
            return false;
        }
    }
},
{   
    type: 'input',
    name: 'questionsgit',
    message: 'What is your github name? (Required)',
    validate: questionsgit => {
        if (questionsgit){
            return true;
        } else if(!questionsgit){
            console.log('Please enter required information');
            return false;
        }
    }
},
{   
    type: 'input',
    name: 'questionsemail',
    message: 'What is your email? (Required)',
    validate: questionsemail => {
        if (questionsemail){
            return true;
        } else if(!questionsemail){
            console.log('Please enter required information');
            return false;
        }
    }
},
{   
    type: 'rawlist',
    name: 'license',
    message: 'Which license does your project need? (Required)',
    choices: ['Apache License 2.0', 'GNU GPLv3', 'MIT', "I don't want to add a license"],
    validate: license => {
        if (license){
            return true;
        } else if(!license){
            console.log('Please enter required information');
            return false;
        }
    }
},
];

//  Create a function to initialize app and write a README file
function init() {
    inquirer.prompt(questions)
    .then(questions =>{

    const markupHtml = writeToFile(questions);
    fs.writeFile("./dist/README.md", markupHtml, err =>{
        if(err){
            console.log(err);
        } else{
            console.log('Its working its working!!');
        }
    })
    })
}

// Function call to initialize app
init();
