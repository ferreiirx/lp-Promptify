import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section id="inicio" className="container flex items-center justify-center min-h-[calc(100vh-80px)] py-20">
      <div className="flex flex-col items-center text-center max-w-3xl">
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
    </section>
  );
}
