import Hero from '@/components/Hero';
import FeaturedJournal from '@/components/FeaturedJournal';
import ConciergeTeaser from '@/components/ConciergeTeaser';
import Manifesto from '@/components/Manifesto';

export default function Home() {
  return (
    <>
      <Hero />
      <Manifesto />
      <FeaturedJournal />
      <ConciergeTeaser />
    </>
  );
}
