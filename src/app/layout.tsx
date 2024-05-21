import '../styles/global.css';

import { ThemeProvider } from 'next-themes';

export const metadata = {
  title: 'Bikers',
  description: 'Bikers - ',
  keywords: 'bike'
  // manifest: '/manifest.json',
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='pl' suppressHydrationWarning>
      <body>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
