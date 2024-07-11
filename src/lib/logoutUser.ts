'use server';

import { createServerClient } from '@/lib/supabase/server-client';

export async function logoutUser() {
  const supabase = createServerClient();

  const { error } = await supabase.auth.signOut();

  if (error) {
    return {
      success: false,
      message: error.message
    };
  }

  return {
    success: true,
    message: 'Wylogowanie zakończone sukcesem'
  };
}
