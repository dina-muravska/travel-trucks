import type { Metadata } from 'next';
import { Inter, Manrope } from 'next/font/google';
import TanStackProvider from '@/components/TanStackProvider/TanStackProvider';
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <body>
        <TanStackProvider>{children}</TanStackProvider>
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
