import { Header } from '@/components/landing/header';
import { Hero } from '@/components/landing/hero';
import { Benefits } from '@/components/landing/benefits';
import { Demo } from '@/components/landing/demo';
import { Testimonials } from '@/components/landing/testimonials';
import { Offer } from '@/components/landing/offer';
import { Guarantee } from '@/components/landing/guarantee';
import { Faq } from '@/components/landing/faq';
import { Footer } from '@/components/landing/footer';
import { Video } from '@/components/landing/video';

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-gradient-to-br from-[#1E0A40] via-[#0D122B] to-black text-white">
      <Header />
      <main className="flex-1">
        <Hero />
        <Video />
        <Benefits />
        <Demo />
        <Testimonials />
        <Offer />
        <Guarantee />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}
