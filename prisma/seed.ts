import { prisma } from '../src/lib/prisma'

async function seed() {
    await prisma.event.create({
        data: {
            id: 'bb05ccc2-8614-4bdb-8521-cadd17f55fe3',
            title: 'Unite Summit',
            slug: 'unite-summit',
            details: 'Um evento p/ devs apaixonados(as) por códigos!',
            maximumAttendees: 120,
        }
    })
}

seed().then(() => {
    console.log('Database seeded!')
    prisma.$disconnect()
})