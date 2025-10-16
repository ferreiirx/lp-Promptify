import Image from "next/image";

export function Guarantee() {
  return (
    <section id="garantia" className="bg-black/20 py-20 sm:py-32">
      <div className="container">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-8 text-center md:flex-row">
          <Image
            src="https://i.imgur.com/d5uxGRR.png"
            alt="Selo de Garantia de 30 dias"
            width={200}
            height={200}
            className="flex-shrink-0"
          />
          <div>
            <h2 className="font-headline text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-left">
              Risco Zero por 30 Dias
            </h2>
            <p className="mt-4 text-lg text-muted-foreground md:text-left">
              Sua satisfação é nossa prioridade. Se por qualquer motivo você
              não estiver 100% satisfeito com o Promptify, basta nos enviar
              um e-mail dentro de 30 dias e nós devolveremos cada centavo do seu
              investimento, sem perguntas ou burocracia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
