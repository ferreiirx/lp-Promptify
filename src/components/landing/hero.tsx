import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { WistiaPlayer } from './wistia-player';

export function Hero() {
  const heroMockup = PlaceHolderImages.find(p => p.id === 'hero-mockup');

  return (
    <section id="inicio" className="container flex flex-col items-center pt-20 pb-10 md:py-20">
      <div className="grid w-full grid-cols-1 items-center gap-12 md:grid-cols-2">
        {/* Conteúdo de Texto (Comum para mobile e desktop) */}
        <div className="flex flex-col items-center text-center md:items-start md:text-left">
          <h1 className="font-headline text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
            <span className="text-glow">⚡️ Crie vídeos com IA</span> em 1 clique.
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground md:text-xl">
            Transforme ideias em vídeos, posts e roteiros virais com apenas 1
            clique.
          </p>

          {/* Vídeo e CTA (Apenas Mobile) */}
          <div className="mt-6 w-full md:hidden">
            <div className="overflow-hidden rounded-xl border-2 border-primary/30 shadow-2xl shadow-primary/20">
               <WistiaPlayer mediaId="z8wdcq9z18" />
            </div>
            <p className="mt-6 text-center font-semibold text-white">
              Clique no botão abaixo para garantir seu acesso agora mesmo:
            </p>
            <Button
              asChild
              size="lg"
              className="mt-4 button-glow w-full bg-gradient-to-r from-primary to-accent text-primary-foreground text-lg font-bold"
            >
              <Link href="#oferta">
                💥 Quero acessar o Promptify agora!
              </Link>
            </Button>
          </div>

          {/* CTA (Apenas Desktop) */}
          <Button
            asChild
            size="lg"
            className="mt-8 hidden w-full button-glow sm:w-auto md:inline-flex bg-gradient-to-r from-primary to-accent text-primary-foreground text-lg font-bold"
          >
            <Link href="#oferta">
              💥 Quero acessar o Promptify agora!
            </Link>
          </Button>
        </div>

        {/* Imagem (Apenas Desktop) */}
        <div className="relative hidden h-full min-h-[300px] w-full items-center justify-center md:flex">
          {heroMockup && (
            <div
              className="animate-float w-full"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div
                className="transform-gpu transition-transform duration-500 ease-out hover:scale-105"
                style={{
                  transform:
                    'perspective(1200px) rotateY(-20deg) rotateX(10deg)',
                }}
              >
                <Image
                  src={heroMockup.imageUrl}
                  alt={heroMockup.description}
                  width={600}
                  height={450}
                  data-ai-hint={heroMockup.imageHint}
                  className="h-auto w-full rounded-xl shadow-2xl shadow-primary/20"
                  priority
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
