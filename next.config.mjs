/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'randomuser.me',
      'www.pngwing.com',
      'zzntmujpyfyxzfyqwerd.supabase.co'
    ] // Chwilowe zezwolenie na pobranie zdj ze strony do wysweitlania avatarw w sekcji Czat.
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/auth/sign-in',
        permanent: true
      },
      {
        source: '/sign-in',
        destination: '/auth/sign-in',
        permanent: true
      },
      {
        source: '/sign-up',
        destination: '/auth/sign-up',
        permanent: true
      }
    ];
  }
};

export default nextConfig;
