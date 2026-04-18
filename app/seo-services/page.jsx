import SEOServices from '@/src/views/SEOServices';

export const metadata = {
  title: 'SEO Services That Drive Traffic, Leads & Revenue',
  description:
    'Professional SEO services including technical SEO, content strategy, AI SEO, and link building.',
  alternates: { canonical: 'https://zonzoctech.com/seo-services' },
  openGraph: {
    title: 'SEO Services That Drive Traffic, Leads & Revenue',
    description:
      'Professional SEO services including technical SEO, content strategy, AI SEO, and link building.',
    url: 'https://zonzoctech.com/seo-services',
  },
};

export default function SeoServicesPage() {
  return <SEOServices />;
}
