import express from 'express';
import {  applyToJob, getApplicationsByJob } from '../controllers/application.controller';
import { applicationSchema } from '../validations/application.schema';
import { isAdmin } from '../middlewares/isAdmin';
import { validate } from '../middlewares/validate';

const router = express.Router();

// Public application submit
router.post('/', validate(applicationSchema), applyToJob);

// Admin route to get applications for a job
router.get('/job/:id', isAdmin, getApplicationsByJob);

export default router;
