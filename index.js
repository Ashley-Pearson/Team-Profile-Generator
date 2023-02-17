//packages
const inquirer = require('inquirer');
//required user modules
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const fs = require('fs');

//Initialize asking questions
const generateHtml = require('./src/generate-html');

//Start the questions
const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            question: 'What is your name?', 
        },
        {
            type: 'input',
            name: 'email',
            question: 'What is your email address?',
        },
        {
            type: 'input',
            name: 'id',
            question: 'What is your employee ID?'
        },
        {
            type: 'input',
            name: 'github',
            question: 'What is your Github user name?'
        },
        {
            type: 'input',
            name: 'role',
            question: 'What is your role? Pick one',
            choices: ['Intern', 'engineer', 'manager'],
        },
        {
            type: 'input',
            name: 'office',
            question: 'What is your office number?',           
        },
    ])
    //generate file
    .then((answers) => {
        const htmlPageContent = generateHTML(answers);
    
        fs.writeFile('index.html', htmlPageContent, (err) =>
          err ? console.log(err) : console.log('Success!')
        );
      });
}