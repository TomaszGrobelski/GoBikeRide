/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'randomuser.me',
      'www.pngwing.com',
      'zzntmujpyfyxzfyqwerd.supabase.co'
    ] // Chwilowe zezwolenie na pobranie zdjęć ze strony do wyświetlania avatarów w sekcji Czat.
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
  },
  async headers() {
    return [
      {
        // Matching all API routes
        source: "/api/:path*", // Możesz dostosować tę ścieżkę, aby odpowiadała Twoim potrzebom
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" }, // Zmień '*' na konkretny adres, jeśli chcesz ograniczyć dostęp
          { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
          { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
        ],
      },
    ];
  },
};

export default nextConfig;
