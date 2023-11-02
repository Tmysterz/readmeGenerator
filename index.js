// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');
const { generateMarkdown } = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input

const questions = inquirer.prompt([
    {
        type: "input",
        message: "What is your Github username?",
        name: "username",
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email",
    },
    {
        type: "input",
        message: "What is your projects name?",
        name: "projectName",
    },
    {
        type: "input",
        message: "Please write a short description of your project",
        name: "description",
    },
    {
        type: "input",
        message: "Please write about the use of your project",
        name: "usage",
    },
    // {
    //     type: "input",
    //     message: "What kind of license should your project have?",
    //     name: "license",
    // },
    {
        type: "list",
        message: "What kind of license should your project have?",
        choices: ["MIT", "APACHE2.0", "GPL3.0", "BSD3", "None"],
        name: "license",
    },
    {
        type: "input",
        message: "What command should be run to install dependencies?",
        name: "install",
    },
    {
        type: "input",
        message: "What command should be done to run tests?",
        name: "tests",
    },
    {
        type: "input",
        message: "What does the user need to know about contributing to the repo",
        name: "contributing",
    },
    
]).then(responses => {
    console.log(responses)

    writeToFile("newREADME.md", responses)


})


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    
    console.log(data)
    
    fs.writeFile(fileName, generateMarkdown(data), (err) => {
        err ? console.error(err) : console.log('Successfully created README.md!')
    })
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();


// TO DO 

// how to add license link 