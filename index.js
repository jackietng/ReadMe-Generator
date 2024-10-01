// TODO: Include packages needed for this application
import fs from 'fs';
import inquirer from 'inquirer';
import generateMarkdown from './utils/generateMarkdown.js';

// TODO: Create an array of questions for user input
const questions = [
        {
          type: 'input',
          message: 'What would you like your repository title to be?',
          name: 'title',
        },
        {
          type: 'input',
          message: 'What would you like your project name to be?',
          name: 'name',
        },
        {
          type: 'input',
          message: 'Please provide a description of your application:',
          name: 'description',
        },
        {
            type: 'input',
            message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the devlopment environment running.',
            name: 'install',
        },
        {
            type: 'input',
            message: 'Provide instructions and examples for use. Include screenshots as needed.',
            name: 'usage',
        },
        {
          type: 'input',
          message: 'How would you test this project?',
          name: 'test',
        },       
        {
            type: 'input',
            message: 'List your collaborates',
            name: 'credits',
        },
        {
            type: 'list',
            message: 'Choose your license for your project.',
            name: 'license',
            choices: [
                { value: 'Apache' },   
                { value: 'BSD3' },  
                { value: 'LGPL' },  
                { value: 'MIT' },  
                { value: 'MPL' }, 
                { value: 'None' }, 
            ]
        },
        {
            type: 'input',
            message: 'Enter your GitHub username:',
            name: 'github',
        },
        {
          type: 'input',
          message: 'Enter your email:',
          name: 'email',
      },
      {
        type: 'input',
        message: 'Where is this application deployed at?',
        name: 'deploy',
    },
 ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((responses) => {
        console.log("Creating Professional README.md File...");
        writeToFile(".dis/README.md", generateMarkdown({...responses}));
    });
}

// Function call to initialize app
init();
