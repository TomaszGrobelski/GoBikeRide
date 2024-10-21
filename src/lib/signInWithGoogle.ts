// import { NextRouter, Router } from 'next/router';
import { paths } from '@/routes/paths';

import { supabase } from './supabase';

// https://console.cloud.google.com/apis/credentials/oauthclient/131952431977-0c78f03but2cnlr6jlgn01br3l5jdo5b.apps.googleusercontent.com?hl=pl&project=promotopia-419406

export const signInWithGoogle = async () =>
  // router: NextRouter
  {
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
      });
      console.log('Logowanie przez google');

      if (error) {
        throw error;
      }

      // router.push(paths.dashboard.home);
    } catch (error) {
      console.error('Błąd logowania przez Google:', error);
    }
  };
