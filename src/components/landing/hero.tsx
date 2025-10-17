import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Hero() {
  const heroMockup = PlaceHolderImages.find(p => p.id === 'hero-mockup');

  return (
    <section id="inicio" className="container flex flex-col items-center py-20">
      <div className="grid w-full grid-cols-1 items-center gap-12 md:grid-cols-2">
        <div className="flex flex-col items-center text-center md:items-start md:text-left">
          <h1 className="font-headline text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
            <span className="text-glow">⚡️ Crie vídeos com IA</span> em 1 clique.
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground md:text-xl">
            Transforme ideias em vídeos, posts e roteiros virais com apenas 1
            clique.
          </p>

          <Button
            asChild
            size="lg"
            className="mt-8 button-glow w-full sm:w-auto bg-gradient-to-r from-primary to-accent text-primary-foreground text-lg font-bold"
          >
            <Link href="#oferta">
              💥 Quero acessar o Promptify agora!
            </Link>
          </Button>
        </div>

        <div className="relative flex h-full min-h-[300px] w-full items-center justify-center">
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
                  className="w-full h-auto rounded-xl shadow-2xl shadow-primary/20"
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
