import type { Metadata } from 'next';
import { Inter, Manrope } from 'next/font/google';
import TanStackProvider from '@/components/TanStackProvider/TanStackProvider';
import { ThemeProvider } from '@/components/ThemeProvider/ThemeProvider';
import { Toaster } from 'react-hot-toast';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
});

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-manrope',
});

export const metadata: Metadata = {
  title: 'TravelTrucks - Camper Rental',
  description: 'Find and rent the best camper vans for your ultimate road trip.',
  icons: {
    icon: '/truckIcon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <body>
        <ThemeProvider>
          <TanStackProvider>{children}</TanStackProvider>
          <Toaster position="top-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}
