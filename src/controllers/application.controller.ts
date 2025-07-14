import { Request, Response, NextFunction } from 'express';
import { PrismaClient } from '@prisma/client';
import * as ApplicationService from '../services/application.service';

const prisma = new PrismaClient();

export const applyToJob = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { jobId, name, email, resumeLink, coverLetter } = req.body;

    const job = await prisma.job.findUnique({ where: { id: jobId } });
    if (!job) return res.status(404).json({ error: 'Job not found' });

    const application = await prisma.application.create({
      data: {
        jobId,
        name,
        email,
        resumeLink,
        coverLetter,
      },
    });

    res.status(201).json(application);
  } catch (error) {
    next(error);
  }
};

export const getApplicationsByJob = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const jobId = parseInt(req.params.id, 10);
    if (isNaN(jobId)) return res.status(400).json({ error: 'Invalid job ID' });

    const apps = await ApplicationService.getApplicationsForJob(jobId);
    res.status(200).json(apps);
  } catch (error) {
    next(error);
  }
};
