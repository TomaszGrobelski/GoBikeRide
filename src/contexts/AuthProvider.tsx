import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

import { supabase } from '@/lib/supabase';

interface AuthProviderProps {
  children: React.ReactNode;
}
// NIE DZIAŁA Bo ciasteczka httpOnlly wiec JS nie może ich odczytać.

const AuthProvider = ({ children }: AuthProviderProps) => {
  const router = useRouter();

  const redirectToSignIn = () => {
    router.push('/sign-in');
  };

  useEffect(() => {
    const checkSession = async () => {
      const authToken = Cookies.get('sb-zzntmujpyfyxzfyqwerd-auth-token');

      console.log(authToken);
      if (authToken) {
        try {
          const { data: session, error } = await supabase.auth.getSession();
          if (error || !session) {
            redirectToSignIn();
          } else {
            console.log('Sesja jest aktywna:', session);
          }
        } catch (error) {
          console.error('Błąd podczas pobierania sesji:', error);
          redirectToSignIn();
        }
      } else {
        redirectToSignIn();
      }
    };

    checkSession();
  }, [router]);

  return <div>{children}</div>;
};

export default AuthProvider;
