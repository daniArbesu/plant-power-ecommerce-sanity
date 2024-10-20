import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Navbar from '@/components/Navbar';
import { Outfit } from 'next/font/google';
import CartProvider from '@/providers/CartProvider';

const outfit = Outfit({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  variable: '--font-outfit',
});

const sabanaBlack = localFont({
  src: './fonts/SabanaBlack.woff2',
  variable: '--font-sabana-black',
  weight: '900',
});

export const metadata: Metadata = {
  title: 'Plant Power',
  description: 'E-commerce de suplementos alimentares',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${sabanaBlack.variable}`}>
        <CartProvider>
          <Navbar />
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
