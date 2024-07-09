'use server';

import { LoginFormSchema } from '@/sections/SignIn/form.schema';
import * as z from 'zod';

import { createServerClient } from '@/lib/supabase/server-client';

export async function signInAction(formData: z.infer<typeof LoginFormSchema>) {
  const supabase = createServerClient();

  const signInResult = await supabase.auth.signInWithPassword({
    email: formData.email,
    password: formData.password
  });

  if (signInResult.error) {
    return {
      success: false,
      message: signInResult.error.message
    };
  }

  return {
    success: true,
    message: 'Sign in successful'
  };
}
