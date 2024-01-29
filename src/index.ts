import inquirer from 'inquirer'
import { generatePrompt } from './prompt.ts'
import Answer from './classes/answer'
import writeToEnv from './writeEnv'

const main = async () => {
    console.log(
        "Welcome to DatabaseBench! A small CLI tool that let's you test your database server performance!"
    )
    const answers: Answer = await inquirer.prompt(generatePrompt())
    writeToEnv(answers)
}

main()
