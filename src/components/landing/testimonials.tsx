import Image from "next/image";
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { PlaceHolderImages } from '@/lib/placeholder-images';

const testimonials = [
  {
    name: "Julia Alves",
    role: "Social Media",
    text: "O Promptify mudou meu jogo! Crio posts virais em minutos. É como ter uma equipe de criação no bolso.",
    rating: 5.0,
    avatarId: "testimonial-avatar-1"
  },
  {
    name: "Marcos Andrade",
    role: "Infoprodutor",
    text: "Incrível! As ideias de roteiros para vídeos são ouro puro. Minhas vendas aumentaram depois que comecei a usar.",
    rating: 4.9,
    avatarId: "testimonial-avatar-2"
  },
  {
    name: "Carla Pires",
    role: "Empreendedora",
    text: "Nunca foi tão fácil criar conteúdo. A ferramenta é super intuitiva e os prompts são muito criativos.",
    rating: 5.0,
    avatarId: "testimonial-avatar-3"
  },
];

export function Testimonials() {
  return (
    <section id="depoimentos" className="bg-black/20 py-20 sm:py-32">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-white sm:text-4xl">
            O que nossos usuários estão dizendo 💫
          </h2>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => {
            const avatar = PlaceHolderImages.find(p => p.id === testimonial.avatarId);
            return (
              <Card key={testimonial.name} className="flex flex-col border-primary/20 bg-white/5 backdrop-blur-sm">
                <CardContent className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`h-5 w-5 ${i < Math.floor(testimonial.rating) ? 'text-primary fill-primary' : 'text-primary/50'}`} />
                    ))}
                    <span className="font-bold">{testimonial.rating.toFixed(1)}/5.0</span>
                  </div>
                  <blockquote className="mt-4 flex-1 text-lg text-white">
                    "{testimonial.text}"
                  </blockquote>
                  <div className="mt-6 flex items-center gap-4">
                    {avatar && (
                      <Image
                        src={avatar.imageUrl}
                        alt={avatar.description}
                        width={48}
                        height={48}
                        data-ai-hint={avatar.imageHint}
                        className="rounded-full"
                      />
                    )}
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
