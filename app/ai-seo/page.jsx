import AiSeoServices from '@/src/views/AiSeoServices';

export const metadata = {
  title: 'AI SEO Services | Intelligent Search Optimization',
  description:
    'Leverage artificial intelligence to optimize content, technical SEO, and entity authority for next-generation search engines.',
  alternates: { canonical: 'https://zonzoctech.com/ai-seo' },
  openGraph: {
    title: 'AI SEO Services | Intelligent Search Optimization',
    description:
      'Leverage artificial intelligence to optimize content, technical SEO, and entity authority for next-generation search engines.',
    url: 'https://zonzoctech.com/ai-seo',
  },
};

export default function AiSeoPage() {
  return <AiSeoServices />;
}
