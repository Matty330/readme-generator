import inquirer from 'inquirer';

function promptUser() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: "What's the title of your project?",
            validate: (input) => input ? true : 'Title cannot be empty!',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of your project:',
            validate: (input) => input ? true : 'Description cannot be empty!',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Provide installation instructions:',
            validate: (input) => input ? true : 'Installation instructions cannot be empty!',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide usage information:',
            validate: (input) => input ? true : 'Usage information cannot be empty!',
        },
        {
            type: 'list',
            name: 'license',
            message: 'Choose a license for your project:',
            choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3-Clause', 'None'],
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Provide contribution guidelines:',
            validate: (input) => input ? true : 'Contribution guidelines cannot be empty!',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Provide test instructions:',
            validate: (input) => input ? true : 'Test instructions cannot be empty!',
        },
        {
            type: 'input',
            name: 'github',
            message: "What's your GitHub username?",
            validate: (input) => input ? true : 'GitHub username cannot be empty!',
        },
        {
            type: 'input',
            name: 'email',
            message: "What's your email address?",
            validate: (input) => input ? true : 'Email address cannot be empty!',
        },
    ]);
}

export default promptUser;
