import { Header } from '@/components/landing/header';
import { Hero } from '@/components/landing/hero';
import { Benefits } from '@/components/landing/benefits';
import { Demo } from '@/components/landing/demo';
import { Testimonials } from '@/components/landing/testimonials';
import { Offer } from '@/components/landing/offer';
import { Faq } from '@/components/landing/faq';
import { Footer } from '@/components/landing/footer';

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-gradient-to-br from-[#1E0A40] via-[#0D122B] to-black text-white">
      <Header />
      <main className="flex-1">
        <Hero />
        <Benefits />
        <Demo />
        <Testimonials />
        <Offer />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}
