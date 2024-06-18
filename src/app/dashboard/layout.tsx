'use client';

import DashboardLoyout from '@/loyout/DashboardLoyout/DashboardLoyout';
import DateLocalizationProvider from '@/ui/providers/LocalizationProvider';
import { QueryClientProvider } from 'react-query';

import queryClient from '@/lib/queryClient';

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <QueryClientProvider client={queryClient}>
      <DateLocalizationProvider>
        <DashboardLoyout>{children}</DashboardLoyout>;
      </DateLocalizationProvider>
    </QueryClientProvider>
  );
};

export default Layout;
