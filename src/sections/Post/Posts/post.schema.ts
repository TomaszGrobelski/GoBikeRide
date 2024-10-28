import { z } from 'zod';

export const postSchema = z.object({
  description: z
    .string()
    .min(5, 'Opis musi mieć co najmniej 5 znaków')
    .nonempty('Opis jest wymagany'),
  imageFile: z
    .instanceof(File)
    .refine(
      (file) => file.size <= 5 * 1024 * 1024,
      'Zbyt duży plik, maksymalny rozmiar to 5 MB',
    )
    .refine((file) => !!file, 'Obraz jest wymagany'),
});

export const updateSchema = z.object({
  description: z
    .string()
    .min(5, 'Opis musi mieć co najmniej 5 znaków')
    .nonempty('Opis jest wymagany')
});
