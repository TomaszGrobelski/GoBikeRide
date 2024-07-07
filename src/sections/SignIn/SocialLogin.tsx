import IconButton from '@/ui/atmos/IconButton';

const SocialLogin = () => {
  return (
    <div className='flex items-center gap-4'>
      <IconButton
        icon='ic:sharp-facebook'
        ariaLabel='Zaloguj się za pomocą Facebooka'
        color='#4267B2'
        size={50}
      />
      <IconButton
        icon='devicon:google'
        ariaLabel='Zaloguj się za pomocą Google'
        color='#4267B2'
        size={35}
      />
    </div>
  );
};

export default SocialLogin;
