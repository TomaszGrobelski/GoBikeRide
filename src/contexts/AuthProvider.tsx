import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

import { supabase } from '@/lib/supabase';

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthProvider = ({ children }: AuthProviderProps) => {
  const router = useRouter();
  useEffect(() => {
    const checkSession = async () => {
      const accessToken = Cookies.get('my-access-token');
      const refreshToken = Cookies.get('my-refresh-token');

      if (accessToken && refreshToken) {
        try {
          const { data: session, error } = await supabase.auth.getSession();
          if (error) {
            router.push('/sign-in');
          } else if (session) {
            console.log('Sesja jest aktywna:', session);
          }
        } catch (error) {
          router.push('/sign-in');
        }
      } else {
        router.push('/sign-in');
      }
    };

    checkSession();
  }, [router]);

  return <div>{children}</div>;
};

export default AuthProvider;
