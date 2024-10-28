import { z } from 'zod';

export const socialMediaSchema = z.object({
  instagram: z.string().url().optional().or(z.literal('')), 
  facebook: z.string().url().optional().or(z.literal('')), 
  twitter: z.string().url().optional().or(z.literal('')), 
});
