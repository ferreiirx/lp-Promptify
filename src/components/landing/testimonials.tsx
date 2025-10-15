import Image from "next/image";

const testimonials = [
  {
    src: "https://i.imgur.com/x5wuFfr.png",
    alt: "Depoimento de cliente 1",
  },
  {
    src: "https://i.imgur.com/59YyMEM.jpeg",
    alt: "Depoimento de cliente 2",
  },
  {
    src: "https://i.imgur.com/mXjMJli.png",
    alt: "Depoimento de cliente 3",
  },
  {
    src: "https://i.imgur.com/QoUKn5l.png",
    alt: "Depoimento de cliente 4",
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
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((testimonial) => (
            <div key={testimonial.alt} className="overflow-hidden rounded-lg border-primary/20 bg-white/5 backdrop-blur-sm">
              <Image
                src={testimonial.src}
                alt={testimonial.alt}
                width={300}
                height={550}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
