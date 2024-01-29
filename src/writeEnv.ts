import Answer from './classes/answer'
import fs from 'node:fs'

export default function writeToEnv(answer: Answer) {
    try {
        fs.writeFileSync(
            '.env',
            `DATABASE_PROVIDER=${answer.provider}\nDATABASE_URL=${answer.conString}`
        )
    } catch (err) {
        console.error(err)
    }
}
