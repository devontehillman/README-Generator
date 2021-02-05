// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const markdown = require('./utils/generateMarkdown.js');



// TODO: Create an array of questions for user input
const questions = ["Title of project" ,"Description", "Table of Contents", 
"Installation", "Usage", "License", "Contributing", "Tests", "Questions"];

// TODO: Create a function to write README file
//function writeToFile('README.MD', data) {}

// TODO: Create a function to initialize app
function init() {}

//Function call to initialize app
inquirer.prompt([
    {
    type: 'input',
    name: 'title',
    message: questions[0],
    },
    {
    type: 'input',
    name: 'description',
    message: questions[1],
    },
    {
    type: 'input',
    name: 'contents',
    message: questions[2],
    },
    {
    type: 'input',
    name: 'installation',
    message: questions[3],
    },
    {
    type: 'input',
    name: 'usage',
    message: questions[4],
    },
    {
    type: 'checkbox',
    message: questions[5],
    name: 'license',
    choices: ['No License','Apache','BSD 3','BSD 2','GPL','LGPL','MIT','MOZILLA',
    'Common Development and Distribution License','Eclipse Public'],
    },
    {
        type: 'input',
    name: 'contributing',
    message: questions[6],
    },
    {
        type: 'input',
    name: 'tests',
    message: questions[7],
    },
    {
        type: 'input',
    name: 'questions',
    message: questions[8],
    }
]) .then (data => {
    
//const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;
     let file = markdown.generateMarkdown(data);
    
    fs.writeFile('README.MD', file , (err) =>
    err ? console.log(err) : console.log('Success!'));
  });
  //init();

