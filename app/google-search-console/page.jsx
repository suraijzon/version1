import GoogleSearchConsole from '@/src/views/GoogleSearchConsole';

export const metadata = {
  title: 'Google Search Console Optimization Services',
  description:
    'Professional Google Search Console setup, indexing fixes, performance tracking, and advanced search visibility insights.',
  alternates: { canonical: 'https://zonzoctech.com/google-search-console' },
  openGraph: {
    title: 'Google Search Console Optimization Services',
    description:
      'Professional Google Search Console setup, indexing fixes, performance tracking, and advanced search visibility insights.',
    url: 'https://zonzoctech.com/google-search-console',
  },
};

export default function GoogleSearchConsolePage() {
  return <GoogleSearchConsole />;
}
