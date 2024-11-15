import { supabase } from './supabase';

export const signInWithGoogle = async () => {
    try {
        const { data, error } = await supabase.auth.signInWithOAuth({
            provider: 'google',
        });

        if (error) {
            throw error;
        }
    } catch (error) {
        console.error('Błąd logowania przez Google:', error);
    }
};
