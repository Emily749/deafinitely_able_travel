import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Concierge',
  description: 'Curated city directories for deaf and hard-of-hearing travellers.',
};

export default function ConciergeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
