import express from 'express';
import { applicationSchema } from '../validations/application.schema';
import jobRoutes from './job.routes'
import applicationRoutes from './application.route'


const router = express.Router();

router.get('/health', (req, res) => {
  res.json({
    message: 'Welcome to Job Board API',
    routes: [
      '/api/v1/jobs',
      '/api/v1/applications'
    ]
  });
});

router.use('/jobs', jobRoutes);
router.use('/applications', applicationRoutes);


export default router;
