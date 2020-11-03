const inquirer = require("inquirer")
const fs = require("fs")
const axios = require("axios")
const generateMarkdown = require("./utils/generateMarkdown")


    function getUser(userName) {
        return axios
            .get(
                `https://api.github.com/users/${userName}`
            )
            
            .catch(err => {
                console.log(`User not found`);
                process.exit(1);
            });
    }

// array of questions for user
function userInputs() {
    inquirer
    .prompt([
{
    type: "input",
    name: "userName",
    message: "What is your Github username?",
    validate: function (input){
        if(input.length < 1){
            return console.log("You must input a valid Github username.")
    } else {
        return true
        }
    }
},
{
    type: "input",
    name: "repo",
    message: "What is the name of your Github Repo?",
    validate: function (input){
        if(input.length < 1){
            return console.log("You must input a valid Github repo.")
        } else {
            return true
        }   
    }
},
{
    type: "input",
    name: "projectName",
    message: "What is the title of your project?",
    validate: function (input){
        if(input.length < 1){
            return console.log("You must input a valid title.")
    } else {
        return true
        }
    }
},
{
    type: "input",
    name: "description",
    massage: "Please write a description of your project.",
    validate: function (input){
        if(input.length < 1){
            return console.log("You must input a valid description.")
    } else {
        return true
        }
    }
},
{
    type: "input",
    name: "Installation",
    message: "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running."
},
{
    type: "input",
    name: "Usage",
    message:"Provide instructions and examples for use. Include screenshots as needed.",
},
{
    type: "input",
    name: "contributing",
    message: "List your collaborators, if any, with links to their GitHub profiles.",
},
{
    type: "list",
    name: "License",
    message: "Choose a license.",
    choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
},


    ])
    .then((inquirerResponses) => {

        console.log(inquirerResponses)
        getUser(inquirerResponses.userName)
            .then((githubResponse) => {
                inquirerResponses.avatarURL = githubResponse.data.avatar_url
                // Parse the README details to create markdown version
                let markdownReadme = generateMarkdown(inquirerResponses);
                // Parse the markdown README version to write it to file
                writeToFile('README.md', markdownReadme);
            })
    })


};

// function to write README file
function writeToFile(file, data) {
    fs.writeFile(file, data, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("Success!");
    })
}


userInputs();