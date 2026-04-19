import { AuthProvider } from '@/src/context/AuthContext';
import WhatsappFloat from '@/src/components/WhatsappFloat';
import '@/src/index.css';
import '@/src/App.css';

export const metadata = {
  title: {
    default: 'ZonzocTech | AI Web Development, SEO & Digital Growth Agency',
    template: '%s | ZonzocTech',
  },
  description:
    'ZonzocTech builds high-converting websites, drives targeted traffic, and automates businesses with AI. Serving UK and US clients.',
  metadataBase: new URL('https://zonzoctech.com'),
  openGraph: {
    siteName: 'ZonzocTech',
    images: [{ url: '/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body>
        <AuthProvider>
          {children}
          <WhatsappFloat />
        </AuthProvider>
      </body>
    </html>
  );
}
