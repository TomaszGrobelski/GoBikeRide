'use server';

import { deleteUserAPI } from '@/api/profil/profilQueries';
import { createClient } from '@supabase/supabase-js';

import { removeAllCookies } from './supabase/server-client';

const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  process.env.NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY || '',
);

export async function deleteUser(userId: string): Promise<{ error: Error | null }> {
  const { error: authError } = await supabaseAdmin.auth.admin.deleteUser(userId);
  if (authError) {
    return { error: authError };
  }

  await deleteUserAPI({ userId });

  removeAllCookies();

  return { error: null };
}
