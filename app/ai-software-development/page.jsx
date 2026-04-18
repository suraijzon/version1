import AISoftwareServices from '@/src/views/AISoftwareServices';

export const metadata = {
  title: 'AI Software Development Solutions | Smart Systems',
  description:
    'Build intelligent AI software solutions for automation, predictive analytics, and scalable digital transformation.',
  alternates: { canonical: 'https://zonzoctech.com/ai-software-development' },
  openGraph: {
    title: 'AI Software Development Solutions | Smart Systems',
    description:
      'Build intelligent AI software solutions for automation, predictive analytics, and scalable digital transformation.',
    url: 'https://zonzoctech.com/ai-software-development',
  },
};

export default function AiSoftwarePage() {
  return <AISoftwareServices />;
}
