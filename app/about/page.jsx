import AboutUs from '@/src/views/AboutUs';

export const metadata = {
  title: 'About Zonzoctech | AI & Digital Growth Experts',
  description:
    'Discover how Zonzoctech combines AI, SEO, and web engineering to build high-performance digital ecosystems.',
  alternates: { canonical: 'https://zonzoctech.com/about' },
  openGraph: {
    title: 'About Zonzoctech | AI & Digital Growth Experts',
    description:
      'Discover how Zonzoctech combines AI, SEO, and web engineering to build high-performance digital ecosystems.',
    url: 'https://zonzoctech.com/about',
  },
};

export default function AboutPage() {
  return <AboutUs />;
}
