// TODO: Include packages needed for this application
import fs from 'fs';
import inquirer from 'inquirer';
import generateMarkdown from './utils/generateMarkdown.js';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// TODO: Create an array of questions for user input
const questions = [
        {
            type: 'input',
            message: 'What would you like your repository title to be?',
            name: 'title',
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
            message: 'Please provide the image you want to use as the screenshot:',
            name: 'screenshot',
        },
        {
            type: 'input',
            message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the devlopment environment running.',
            name: 'require',
        },
        {
            type: 'input',
            message: 'Provide instructions and examples for use.',
            name: 'usage',
        },
        {
            type: 'input',
            message: 'How would you test this project?',
            name: 'test',
        },       
        {
            type: 'input',
            message: 'List your contributors:',
            name: 'contributors',
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

// Define the path for the 'dist' directory
const distDir = path.join(process.cwd(), 'dist');

// Create the 'dist' directory
fs.mkdir(distDir, { recursive: true }, (err) => {
    if (err) {
        console.error('Error creating dist directory:', err);
    } else {
        console.log('dist directory created successfully!');
    }
});
writeToFile("dist/README.md", generateMarkdown({...responses}));
    });
}

// Function call to initialize app
init();
