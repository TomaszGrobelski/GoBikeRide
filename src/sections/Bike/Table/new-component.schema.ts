import * as z from 'zod';

export const schema = z.object({
  name: z.string().min(1, 'Nazwa wymagana'),
  maintenanceDate: z.date({ required_error: 'Data wymagana' }),
  currentState: z.string().min(1, 'Stan wymagany'),
  currentMileageKm: z.string().min(1, 'Przebieg wymagany'),
  maintenanceCost: z.string().min(1, 'Koszt wymagany'),
});
