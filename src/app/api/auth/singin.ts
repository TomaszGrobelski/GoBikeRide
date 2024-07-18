'use server';

import { LoginFormSchema } from '@/sections/SignIn/form.schema';
import * as z from 'zod';

import { createServerClient } from '@/lib/supabase/server-client';

export async function signInAction(formData: z.infer<typeof LoginFormSchema>) {
  const supabase = createServerClient();

  const { data, error } = await supabase.auth.signInWithPassword({
    email: formData.email,
    password: formData.password
  });

  if (error) {
    return {
      success: false,
      message: error.message
    };
  }
  console.log('Sign in result:', data);
  return {
    success: true,
    message: 'Sign in successful',
    session: data.session
  };
}
