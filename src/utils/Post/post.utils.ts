import { supabase } from '@/lib/supabase';

export const uploadImage = async (
  userId: string | undefined,
  file: File,
): Promise<string | null> => {
  if (!userId) return null;

  const uniqueFileName = `${Date.now()}-${file.name}`;
  const filePath = `${userId}/${uniqueFileName}`;

  const { data, error } = await supabase.storage
    .from('Posts') 
    .upload(filePath, file);

  if (error) {
    console.error('Error uploading image:', error);
    return null;
  }

  // Zwróć URL do przesłanego obrazu
  return `https://zzntmujpyfyxzfyqwerd.supabase.co/storage/v1/object/public/${data.fullPath}`;
};
