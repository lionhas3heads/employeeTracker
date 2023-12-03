const connection = require('./connection');

module.exports = {
    findEmployees() {
        return connection.promise().query('SELECT * FROM employee')
    },
    findRoles() {
        return connection.promise().query('SELECT * FROM role')
    },
    findDepartments() {
        return connection.promise().query('SELECT * FROM department');
    },
};