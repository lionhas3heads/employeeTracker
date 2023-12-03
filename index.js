const inquirer = require('inquirer');
const query = require('./db/queries');

const mainPrompts = [
    {
        type: 'list',
        name: 'userChoice',
        message: 'Hello! What would you like to do?',
        choices: [
            'VIEW_EMPLOYEES',
            'VIEW_ROLES',
            'VIEW DEPARTMENTS',
            'ADD_DEPARTMENT',
            'ADD_EMPLOYEE',
            'ADD_ROLE',
            'UPDATE_EMPLOYEE',
            'QUIT'

        ],
    },
];

function viewEmployees() {
    query.findEmployees().then(([res]) => {
        console.table(res);
        loadMainPrompts();
    });
}

function viewRoles() {
    querry.findRoles().then( ([res]) => {
        console.table(res);
        loadMainPrompts();
    });
}

function viewDepartments() {
    query.findDepartments().then( ([res]) => {
        console.table(res);
        loadMainPrompts();
    });
}

function loadMainPrompts() {
    inquirer.prompt(mainPrompts).then((answer) => {
        const { userChoice } = answer;
        switch (userChoice) {
            case 'VIEW_EMPLOYEES':
                viewEmployees();
                break;
            case 'VIEW_ROLES':
                viewRoles();
                break;
            case 'VIEW_DEPARTMENTS':
                viewDepartments();
                break;
            default:
                console.log('Goodbye');
                process.exit();
                break;
        }
    });
}

loadMainPrompts();