// src/controllers/job.controller.ts
import { Request, Response, NextFunction } from 'express';
import * as JobService from '../services/job.service';

export const getAllJobs = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { type } = req.query;

    const jobs = await JobService.getJobs(typeof type === 'string' ? type : undefined);
    res.status(200).json(jobs);
  } catch (error) {
    next(error);
  }
};

export const getJobById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = parseInt(req.params.id, 10);
    if (isNaN(id)) return res.status(400).json({ error: 'Invalid job ID' });

    const job = await JobService.getJobById(id);
    if (!job) return res.status(404).json({ error: 'Job not found' });

    res.status(200).json(job);
  } catch (error) {
    next(error);
  }
};
