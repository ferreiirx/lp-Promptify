import { WistiaPlayer } from "./wistia-player";

export function Video() {
  return (
    <section id="video" className="py-20 sm:py-32">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Veja como o Promptify funciona na prática
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Aperte o play e descubra como você pode criar conteúdo viral em segundos.
          </p>
        </div>
        <div className="mx-auto mt-12 max-w-2xl">
          <div className="overflow-hidden rounded-xl border-2 border-primary/30 shadow-2xl shadow-primary/20">
            <WistiaPlayer mediaId="z8wdcq9z18" />
          </div>
        </div>
      </div>
    </section>
  );
}
