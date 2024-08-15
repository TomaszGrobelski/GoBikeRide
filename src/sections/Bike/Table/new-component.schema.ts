import * as z from 'zod';

export const schema = z.object({
  name: z.string().min(1, 'Nazwa jest wymagana'),
  maintenanceDate: z
    .date()
    .min(new Date(), 'Data konserwacji nie może być z przyszłości'),
  currentState: z.string().min(1, 'Stan jest wymagany'),
  currentMileageKm: z.string().min(1, 'Przebieg jest wymagany'),
  maintenanceCost: z.string().min(1, 'Koszt konserwacji jest wymagany'),
});
