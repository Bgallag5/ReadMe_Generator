//import packages; array of questions; init() => generateMarkdown 



// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const writeToFile = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
    validate: title => {
        if (title){
            return true;
        } else if(!title){
            console.log('Please enter your name');
            return false;
        }
    }
}];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
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
