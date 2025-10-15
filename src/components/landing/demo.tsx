import Image from "next/image";
import { PlayCircle } from "lucide-react";
import { PlaceHolderImages } from '@/lib/placeholder-images';

const demoImage = PlaceHolderImages.find(p => p.id === 'demo-video');

export function Demo() {
  return (
    <section id="demonstracao" className="py-20 sm:py-32">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Veja como é fácil criar vídeos e conteúdos virais
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Assista a uma rápida demonstração da interface do Promptify e veja trechos de aulas e resultados gerados pela nossa IA.
          </p>
        </div>
        <div className="relative mt-16 mx-auto max-w-5xl">
          {demoImage && (
            <div className="group relative aspect-video w-full cursor-pointer overflow-hidden rounded-2xl border-2 border-primary/20 card-glow">
              <Image
                src={demoImage.imageUrl}
                alt={demoImage.description}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                data-ai-hint={demoImage.imageHint}
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute inset-0 flex items-center justify-center">
                <PlayCircle className="h-20 w-20 text-white/70 transition-all group-hover:h-24 group-hover:w-24 group-hover:text-white" />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
