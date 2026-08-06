import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SmoothScroll from '@/components/SmoothScroll';

export const metadata: Metadata = {
  title: 'Sbortix — Engineered Intelligence for Growth',
  description: 'Sbortix bridges the gap between complex data science and high-performance marketing. Enterprise intelligence engineered for modern growth teams.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light scroll-smooth">
      <head>
        <link rel="icon" href="/sbortix-logo.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;600;700&family=Space+Grotesk:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="selection:bg-primary-container selection:text-on-primary-container min-h-screen flex flex-col antialiased">
        <SmoothScroll>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
