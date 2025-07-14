import express from 'express';
import { getAllJobs, getJobById } from '../controllers/job.controller';

const router = express.Router();

router.get('/', getAllJobs);
router.get('/:id', getJobById);

export default router;
