import ContactPage from '@/src/views/ContactPage';

export const metadata = {
  title: 'Contact Zonzoctech | Start Your Digital Growth',
  description:
    'Speak with our AI and SEO experts to discuss your project and start your digital growth journey today.',
  alternates: { canonical: 'https://zonzoctech.com/contact' },
  openGraph: {
    title: 'Contact Zonzoctech | Start Your Digital Growth',
    description:
      'Speak with our AI and SEO experts to discuss your project and start your digital growth journey today.',
    url: 'https://zonzoctech.com/contact',
  },
};

export default function ContactPageRoute() {
  return <ContactPage />;
}
