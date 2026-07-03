import type { Metadata } from 'next';
import { Sora, Inter } from 'next/font/google';
import './globals.css';

const display = Sora({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-display',
  display: 'swap',
});

const sans = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Fast Group | Enterprise Solutions Across 10 Divisions',
  description:
    'Fast Group is a diversified enterprise group operating 10 divisions and 19 specialized services spanning technology, real estate, hospitality, logistics, education, and more.',
  keywords: [
    'Fast Group',
    'Fast IT Solutions',
    'enterprise solutions',
    'software development',
    'digital marketing',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body className="min-h-screen bg-brand-950 font-sans text-slate-100 antialiased">
        {children}
      </body>
    </html>
  );
}
