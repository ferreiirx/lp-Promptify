import { FileText, Wand2, ArrowRight, Video, ArrowDown } from "lucide-react";

const steps = [
  {
    icon: FileText,
    title: "1. Escolha um Prompt",
    description: "Selecione um dos nossos prompts prontos no app.",
  },
  {
    icon: Wand2,
    title: "2. Gere o Conteúdo",
    description: "A IA cria o roteiro, a narração e as cenas para você.",
  },
  {
    icon: Video,
    title: "3. Exporte e Publique",
    description: "Baixe seu vídeo em alta qualidade e viralize.",
  },
];

export function Demo() {
  return (
    <section id="demonstracao" className="py-20 sm:py-32">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-white sm:text-4xl">
            É fácil como 1, 2, 3...
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Siga estes passos simples para transformar suas ideias em vídeos incríveis em questão de segundos.
          </p>
        </div>
        <div className="relative mt-16">
          <div className="grid grid-cols-1 items-start gap-16 md:grid-cols-3 md:gap-16">
            {steps.map((step, index) => (
              <div key={index} className="relative flex flex-col items-center text-center">
                <div className="flex flex-col items-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-primary/30 bg-white/5 backdrop-blur-sm card-glow">
                    <step.icon className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="mt-6 text-xl font-bold">{step.title}</h3>
                  <p className="mt-2 text-muted-foreground">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <>
                    <ArrowRight className="absolute top-8 -right-8 hidden text-primary/30 md:block" size={48} />
                    <ArrowDown className="absolute left-1/2 -bottom-10 -translate-x-1/2 text-primary/30 md:hidden" size={48} />
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
