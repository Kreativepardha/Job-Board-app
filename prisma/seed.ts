// prisma/seed.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.job.createMany({
    data: [
      {
        title: 'Frontend Developer',
        company: 'TechNova',
        location: 'Remote',
        description: 'React + TS',
        type: 'remote',
      },
      {
        title: 'Backend Developer',
        company: 'InnovaCore',
        location: 'Bangalore',
        description: 'Node.js dev needed',
        type: 'full-time',
      },
      {
        title: 'UI/UX Designer',
        company: 'Designly',
        location: 'Mumbai',
        description: 'Strong Figma skills',
        type: 'part-time',
      },
    ],
  });
  console.log('✅ Seeded jobs');
}

main()
  .catch((e) => {
    console.error('❌ Seed error:', e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
