import ScrollToTop from "@/src/components/ScrollToTop"; 

// 1. IMPORT YOUR NEW FONT (e.g., Plus_Jakarta_Sans instead of Inter)
import { Plus_Jakarta_Sans, Syne, DM_Sans } from 'next/font/google'; 
import { AuthProvider } from '@/src/context/AuthContext';
import WhatsappFloat from '@/src/components/WhatsappFloat';
import '@/src/index.css';
import '@/src/App.css';
import '@/src/styles/service-shared.css';
import "@/src/styles/navbar.css";

// 2. CONFIGURE THE NEW FONT
// Keep the variable as '--font-b' so any CSS relying on your old body variable won't break
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-b', 
  display: 'swap',
});

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-h', 
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-dm', 
  display: 'swap',
});

export const metadata = {
  title: {
    default: 'ZonzocTech | AI Web Development, SEO & Digital Growth Agency',
    template: '%s | ZonzocTech',
  },
  description:
    'ZonzocTech builds high-converting websites, drives targeted traffic, and automates businesses with AI. Serving UK and US clients.',
  metadataBase: new URL('https://zonzoctech.com'),
  icons: {
    icon: '/zonzotech-favicon5.png?v=2', 
    shortcut: '/zonzotech-favicon5.png?v=2', 
    apple: '/zonzotech-favicon5.png?v=2',    
  },
  openGraph: {
    siteName: 'ZonzocTech',
    images: [{ url: '/zonzotech-favicon5.png?v=2' }],
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function RootLayout({ children }) {
  return (
    // 3. INJECT THE NEW FONT'S VARIABLE
    <html lang="en" className={`${plusJakartaSans.variable} ${syne.variable} ${dmSans.variable}`}>
      <head>
        <link rel="icon" href="/zonzotech-favicon5.png?v=2" type="image/png" />
      </head>
      {/* 4. APPLY THE NEW FONT CLASS TO THE BODY */}
      <body className={plusJakartaSans.className}>
        <AuthProvider>
          {children}
          <WhatsappFloat />
          <ScrollToTop /> 
        </AuthProvider>
      </body>
    </html>
  );
}