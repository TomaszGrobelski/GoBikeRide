import { supabase } from '@/lib/supabase';

export const getCurrentUser = async () => {
  try {
    const {
      data: { user },
      error
    } = await supabase.auth.getUser();
    if (error) {
      throw error;
    }
    return user;
  } catch (error) {
    console.error('Error fetching user:', error);
    return null;
  }
};
