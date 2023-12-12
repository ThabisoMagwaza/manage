import CTA from '@/components/CTA';
import Features from '@/components/Features';
import Header from '@/components/Header';
import Testimonials from '@/components/Testimonials';

export default function Home() {
  return (
    <main>
      <Header />
      <Features />
      <Testimonials />
      <CTA />
    </main>
  );
}
