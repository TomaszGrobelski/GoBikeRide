'use client';

import DashboardLoyout from '@/loyout/DashboardLoyout/DashboardLoyout';
import { QueryClientProvider } from 'react-query';

import queryClient from '@/lib/queryClient';

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <QueryClientProvider client={queryClient}>
      <DashboardLoyout>{children}</DashboardLoyout>;
    </QueryClientProvider>
  );
};

export default Layout;
