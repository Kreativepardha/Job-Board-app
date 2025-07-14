import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  await prisma.job.createMany({
    data: [
      { title: 'Frontend Developer', company: 'TechNova', location: 'Remote', description: 'React + TS', type: 'Full-Time' },
      { title: 'Backend Developer', company: 'InnovaCore', location: 'Bangalore', description: 'Node.js dev needed', type: 'Part-Time' },
      { title: 'UI/UX Designer', company: 'Designly', location: 'Mumbai', description: 'Strong Figma skills', type: 'Remote' }
    ]
  });
}

main()
  .catch(e => console.error(e))
  .finally(() => prisma.$disconnect());
