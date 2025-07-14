// src/services/job.service.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getJobs = async (type?: string) => {
  if (type) {
    return await prisma.job.findMany({
      where: {
        type: {
          equals: type,
          mode: 'insensitive',
        },
      },
    });
  }
  return await prisma.job.findMany();
};

export const getJobById = async (id: number) => {
  return await prisma.job.findUnique({
    where: { id },
    include: {
      applications: true, // Used for admin view
    },
  });
};
