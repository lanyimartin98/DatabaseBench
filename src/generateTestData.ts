import { PrismaClient } from '@prisma/client'
import { Console } from 'node:console';
const prisma = new PrismaClient();

const createRecords = async () => {
    const test = await prisma.test.create({
        data: {
          string: 'Test',
          int: 1,
          date: new Date().toISOString(),
          boolean: true
        },
      })
    console.log('Start')
}

export const generateTestData = async () => {
    console.log('Generation started...')
    createRecords()
        .then(async () => {
            await prisma.$disconnect()
        })
        .catch(async (e) => {
            console.error(e)
            await prisma.$disconnect()
            process.exit(1)
        })
        console.log('Generation done!')
}
