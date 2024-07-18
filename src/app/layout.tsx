import '../styles/global.css';

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
      <body>{children}</body>
    </html>
  );
}
