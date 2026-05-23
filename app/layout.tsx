import type { Metadata } from 'next';
import './globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    default: 'Deafinitely Able Travel',
    template: '%s | Deafinitely Able Travel',
  },
  description:
    'High-end, independent travel for the deaf and hard-of-hearing community. Curated guides, city directories, and digital tools for seamless journeys.',
  openGraph: {
    siteName: 'Deafinitely Able Travel',
    type: 'website',
  },
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
