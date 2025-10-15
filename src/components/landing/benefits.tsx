import { BookOpenText, Gift, Puzzle, Smartphone, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";
import type { LucideIcon } from "lucide-react";

const benefits = [
  { icon: BookOpenText, text: "Curso completo 'Conteúdo com IA'" },
  { icon: Zap, text: "+100 prompts prontos por categoria" },
  { icon: Smartphone, text: "Funciona no celular e no computador" },
  { icon: Gift, text: "Novos prompts todos os dias" },
  { icon: Puzzle, text: "Acesso a ferramentas exclusivas de IA" },
];

function IconWrapper({ icon: Icon }: { icon: LucideIcon }) {
  return (
    <div className="rounded-lg bg-primary/10 p-3">
      <Icon className="h-8 w-8 text-primary" />
    </div>
  );
}

export function Benefits() {
  return (
    <section id="beneficios" className="bg-black/20 py-20 sm:py-32">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Além do acesso ao app, você ainda ganha 👇
          </h2>
        </div>
        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <Card key={index} className="flex transform-gpu items-center gap-4 border-primary/20 bg-white/5 p-6 backdrop-blur-sm transition-all hover:-translate-y-2 hover:border-primary/40 hover:bg-white/10">
              <IconWrapper icon={benefit.icon} />
              <p className="text-lg font-semibold">{benefit.text}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
