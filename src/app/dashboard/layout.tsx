'use client';

import DateLocalizationProvider from '@/contexts/LocalizationProvider';
import DashboardLoyout from '@/loyout/DashboardLoyout/DashboardLoyout';
import { QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from 'next-themes';

import queryClient from '@/lib/queryClient';

type Props = {
    children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
    return (
        <QueryClientProvider client={queryClient}>
            <DateLocalizationProvider>
                <ThemeProvider attribute='class' defaultTheme='light' enableSystem>
                    <DashboardLoyout>{children}</DashboardLoyout>
                </ThemeProvider>
            </DateLocalizationProvider>
        </QueryClientProvider>
    );
};

export default Layout;
