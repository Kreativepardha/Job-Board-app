import { z } from 'zod';

export const applicationSchema = z.object({
  jobId: z.number(),
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email'),
  resumeLink: z.string().url('Invalid URL'),
  coverLetter: z.string().min(10, 'Cover letter too short'),
});
