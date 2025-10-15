import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from '@/lib/placeholder-images';

const heroImage = PlaceHolderImages.find(p => p.id === 'hero-mockup');

export function Hero() {
  return (
    <section id="inicio" className="container grid min-h-[calc(100vh-80px)] grid-cols-1 items-center gap-12 py-20 md:grid-cols-2">
      <div className="flex flex-col items-center text-center md:items-start md:text-left order-2 md:order-1">
        <Image
          src="https://i.imgur.com/33IOykN.png"
          alt="Selo de Garantia"
          width={200}
          height={50}
          className="mb-4"
        />
        <h1 className="font-headline text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
          <span className="text-glow">⚡️ Esse novo Aplicativo de Inteligência Artificial</span> Cria Vídeos em apenas 1 clique.
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground md:text-xl">
          Mesmo sem entender nada de IA. Modelos prontos, simples e rápidos. 
          <br className="hidden sm:block" />
          🚀 Transforme ideias em vídeos, posts e roteiros virais com apenas 1 clique.
        </p>
        <Button asChild size="lg" className="mt-8 button-glow bg-gradient-to-r from-primary to-accent text-primary-foreground text-lg font-bold">
          <Link href="#oferta">
            💥 Quero acessar o Promptify agora!
          </Link>
        </Button>
      </div>
      <div className="relative flex h-full min-h-[300px] w-full items-center justify-center order-1 md:order-2">
        {heroImage && (
          <div className="animate-float" style={{ transformStyle: 'preserve-3d' }}>
            <div className="transform-gpu transition-transform duration-500 ease-out hover:scale-105" style={{ transform: 'perspective(1200px) rotateY(-20deg) rotateX(10deg)' }}>
              <Image
                src={heroImage.imageUrl}
                alt={heroImage.description}
                width={600}
                height={450}
                data-ai-hint={heroImage.imageHint}
                className="rounded-xl shadow-2xl shadow-primary/20"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
