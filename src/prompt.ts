export const generatePrompt = () => {
    return [
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
    ]
}
