'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.AskProvider = void 0
const AskProvider = () => {
    const inquirer = require('inquirer')
    inquirer
        .prompt([
            {
                name: 'provider',
                type: 'list',
                message: 'Choose provider:',
                choices: ['sqlite', 'postgres'],
            },
            {
                name: 'conString',
                message: 'What is your connection string?',
                type: 'input',
            },
        ])
        .then((answer) => {
            console.log(answer.provider)
            console.log(answer.conString)
        })
}
exports.AskProvider = AskProvider
