import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';

import { ThemeScript } from '@/components/theme-script';

import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://asyafaris.vercel.app'),
  title: {
    default: 'Asya Ismatullah Faris | IT Project Manager & Product Owner',
    template: '%s | Asya Ismatullah Faris',
  },
  description:
    'Executive-style portfolio for Asya Ismatullah Faris, showcasing project leadership, product ownership, Agile delivery, and cross-functional execution.',
  keywords: [
    'Asya Ismatullah Faris',
    'IT Project Manager',
    'Product Owner',
    'PMO',
    'Agile',
    'Scrum',
    'Portfolio',
  ],
  openGraph: {
    title: 'Asya Ismatullah Faris | IT Project Manager & Product Owner',
    description:
      'Leading complex projects and delivering real business outcomes through disciplined execution, collaboration, and product thinking.',
    url: 'https://asyafaris.vercel.app',
    siteName: 'Asya Ismatullah Faris Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Asya Ismatullah Faris | IT Project Manager & Product Owner',
    description:
      'Leading complex projects and delivering real business outcomes through disciplined execution, collaboration, and product thinking.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background text-foreground">
        <ThemeScript />
        {children}
      </body>
    </html>
  );
}

