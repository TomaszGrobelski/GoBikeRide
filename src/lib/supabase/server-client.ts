import { cookies } from 'next/headers';
import { createServerClient as createSupabaseServerClient } from '@supabase/ssr';

export function createServerClient() {
  const cookieStore = cookies();

  const supabase = createSupabaseServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) => {
              const cookieOptions = {
                ...options,
                // httpOnly: true,
                // secure: process.env.NODE_ENV === 'production'   // Zakomentowane, bo nie działało na Vercel ale powinno być true...
              };
              cookieStore.set(name, value, cookieOptions);
            });
          } catch {
            
          }
        }
      }
    }
  );

  return supabase;
}
