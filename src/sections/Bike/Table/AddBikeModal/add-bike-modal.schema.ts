import * as z from 'zod';

export const schema = z.object({
  brand: z.string().min(1, 'Marka roweru jest wymagana'),
  model: z.string().min(1, 'Model roweru jest wymagana')
});
