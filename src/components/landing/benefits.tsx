import Image from "next/image";
import { BookOpen, Gift, Smartphone, Wand, Zap } from "lucide-react";

const banners = [
  { src: "https://i.imgur.com/joKxQdy.png", alt: "Banner Bônus 1" },
  { src: "https://i.imgur.com/ZO3PPCz.png", alt: "Banner Bônus 3" },
  { src: "https://i.imgur.com/SznFDcb.png", alt: "Banner Bônus 4" },
  { src: "https://i.imgur.com/pGhk9CB.png", alt: "Banner Bônus 5" },
  { src: "https://i.imgur.com/FkCB9vv.png", alt: "Banner Bônus 6" },
  { src: "https://i.imgur.com/f2d5hyJ.png", alt: "Banner Bônus 7" },
  { src: "https://i.imgur.com/s99O2g8.png", alt: "Banner Bônus 8" },
  { src: "https://i.imgur.com/MIfx0hg.png", alt: "Banner Bônus 9" },
  { src: "https://i.imgur.com/FWT7Zdc.png", alt: "Banner Bônus 10" },
  { src: "https://i.imgur.com/w8gk0uW.png", alt: "Banner Bônus 11" },
];

const benefitCards = [
  {
    icon: BookOpen,
    title: "Curso completo 'Conteúdo com IA'",
  },
  {
    icon: Zap,
    title: "+100 prompts prontos por categoria",
  },
  {
    icon: Smartphone,
    title: "Funciona no celular e no computador",
  },
  {
    icon: Gift,
    title: "Novos prompts todos os dias",
  },
  {
    icon: Wand,
    title: "Acesso a ferramentas exclusivas de IA",
  },
];

export function Benefits() {
  return (
    <section id="beneficios" className="bg-black/20 py-20 sm:py-32">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Além do acesso ao app, você ainda ganha 👇
          </h2>
        </div>
        <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-6 md:gap-8">
          {banners.map((banner, index) => (
            <div key={index} className="overflow-hidden rounded-lg">
              <Image
                src={banner.src}
                alt={banner.alt}
                width={600}
                height={600}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {benefitCards.map((card, index) => (
            <div
              key={index}
              className="flex items-center gap-4 rounded-xl border border-primary/20 bg-white/5 p-6 backdrop-blur-sm"
            >
              <div className="flex-shrink-0 rounded-lg bg-primary/10 p-3 text-primary">
                <card.icon className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold">{card.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
