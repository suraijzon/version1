import WebsiteMaintenance from '@/src/views/WebsiteMaintenance';

export const metadata = {
  title: 'Website Maintenance, Performance & Security Services',
  description:
    'Keep your website fast, secure, and up-to-date with proactive maintenance, performance audits, and security monitoring.',
  alternates: { canonical: 'https://zonzoctech.com/website-maintenance-performance-security' },
  openGraph: {
    title: 'Website Maintenance, Performance & Security Services',
    description:
      'Keep your website fast, secure, and up-to-date with proactive maintenance, performance audits, and security monitoring.',
    url: 'https://zonzoctech.com/website-maintenance-performance-security',
  },
};

export default function WebsiteMaintenancePage() {
  return <WebsiteMaintenance />;
}
