import Answer from './classes/answer.ts'
import fs from 'node:fs'

export default function writeToEnv(answer: Answer) {
    try {
        validateUrl(answer)
        fs.writeFileSync('.env', `DATABASE_URL=${answer.conString}`)
    } catch (err: unknown) {
        const error: Error = err as Error
        console.log(error.message)
        throw Error(
            'Error happened during the creation of your environment please try again!'
        )
    }
}

function validateUrl(answer: Answer) {
    switch (answer.provider) {
        case 'sqlite':
            if (!answer.conString?.match('^file:.*(.)db$'))
                throw new Error(
                    'ConnectionString does not match selected databse provider.'
                )
            break
        default:
            break
    }
}
