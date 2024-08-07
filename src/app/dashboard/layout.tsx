'use client';

import DashboardLoyout from '@/loyout/DashboardLoyout/DashboardLoyout';
import DateLocalizationProvider from '@/ui/providers/LocalizationProvider';
import { ThemeProvider } from 'next-themes';
import { QueryClientProvider } from '@tanstack/react-query';

import queryClient from '@/lib/queryClient';

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <QueryClientProvider client={queryClient}>
      <DateLocalizationProvider>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          <DashboardLoyout>{children}</DashboardLoyout>;
        </ThemeProvider>
      </DateLocalizationProvider>
    </QueryClientProvider>
  );
};

export default Layout;
