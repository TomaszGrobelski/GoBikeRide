import { paths } from '@/routes/paths';

export const menuList = [
  {
    title: 'Główna',
    link: `${paths.dashboard.home}`,
    icon: 'flowbite:home-outline',
  },
  {
    title: 'Rowerownia',
    link: `${paths.dashboard.bike}`,
    icon: 'icon-park-outline:bike',
  },
  {
    title: 'Trasy',
    link: `${paths.dashboard.routes}`,
    icon: 'fluent:road-20-filled',
  },
  { title: 'Posty', link: `${paths.dashboard.posts}`, icon: 'jam:write' },
  {
    title: 'Użytkownicy',
    link: `${paths.dashboard.users}`,
    icon: 'clarity:users-line',
  },
  {
    title: 'Kontakt',
    link: `${paths.dashboard.contact}`,
    icon: 'grommet-icons:contact',
  },
  {
    title: 'Premium',
    link: `${paths.dashboard.premium}`,
    icon: 'fluent:premium-16-regular',
  },
];
