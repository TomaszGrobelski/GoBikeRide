import { useRouter } from 'next/router';
import IconButton from '@/ui/atmos/IconButton';

import { signInWithGoogle } from '@/lib/signInWithGoogle';

const SocialLogin = () => {
  // const router = useRouter();

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle(
        // router
      );
    } catch (error) {
      console.error('Błąd logowania przez Google:', error);
    }
  };

  return (
    <div className='flex items-center gap-4'>
      <IconButton
        icon='ic:sharp-facebook'
        ariaLabel='Zaloguj się za pomocą Facebooka'
        color='#4267B2'
        size={50}
      />
      <IconButton
        onClick={handleGoogleSignIn}
        icon='devicon:google'
        ariaLabel='Zaloguj się za pomocą Google'
        color='#4267B2'
        size={35}
      />
    </div>
  );
};

export default SocialLogin;
