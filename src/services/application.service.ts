import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getApplicationsForJob = async (jobId: number) => {
  return await prisma.application.findMany({
    where: { jobId },
    orderBy: { id: 'desc' }
  });
};
