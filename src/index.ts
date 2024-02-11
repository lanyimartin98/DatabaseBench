import inquirer from 'inquirer'
import { generatePrompt } from './prompt.ts'
import Answer from './classes/answer.ts'
import writeToEnv from './writeEnv.ts'
import { exec } from 'child_process'
import { generateTestData } from './generateTestData.ts'

const main = async () => {
    console.log(
        "Welcome to DatabaseBench! A small CLI tool that let's you test your database server performance!"
    )
    const answers: Answer = await inquirer.prompt(generatePrompt())
    try {
        writeToEnv(answers)
    } catch (err: unknown) {
        const error: Error = err as Error
        console.log(error.message)
    }
    try {
        await exec('npx prisma db push')
    } catch (err: unknown) {
        console.log(err)
    }
    await generateTestData();
}

main()
