import CTA from '@/components/CTA';
import Features from '@/components/Features';
import Header from '@/components/Header';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <Features />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
