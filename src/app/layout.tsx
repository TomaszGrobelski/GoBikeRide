import '../styles/global.css';

export const metadata = {
    title: 'Bikers',
    description: 'Bikers - ',
    keywords: 'bike',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='pl'>
            <body className='h-full'>{children}</body>
        </html>
    );
}
