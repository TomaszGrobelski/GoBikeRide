import * as z from 'zod';

export const tableRowSchema = z.object({
  name: z.string().min(1, 'Nazwa wymagana'),
  maintenanceDate: z.date({ required_error: 'Data wymagana' }),
  currentState: z.string().min(1, 'Stan wymagany'),
  currentMileageKm: z.number().min(1, 'Przebieg wymagany'),
  maintenanceCost: z.number().min(1, 'Koszt wymagany'),
});
