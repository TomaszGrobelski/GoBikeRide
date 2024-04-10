'use client';
import DashboardLoyout from '@/loyout/DashboardLoyout/DashboardLoyout';

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return <DashboardLoyout>{children}</DashboardLoyout>;
};

export default Layout;
