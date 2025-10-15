import Image from "next/image";

const banners = [
  { src: "https://i.imgur.com/joKxQdy.png", alt: "Banner Bônus 1" },
  { src: "https://i.imgur.com/EENykAt.png", alt: "Banner Bônus 2" },
  { src: "https://i.imgur.com/ZO3PPCz.png", alt: "Banner Bônus 3" },
  { src: "https://i.imgur.com/SznFDcb.png", alt: "Banner Bônus 4" },
  { src: "https://i.imgur.com/ioOdH6P.png", alt: "Banner Bônus 5" },
  { src: "https://i.imgur.com/FkCB9vv.png", alt: "Banner Bônus 6" },
  { src: "https://i.imgur.com/f2d5hyJ.png", alt: "Banner Bônus 7" },
  { src: "https://i.imgur.com/s99O2g8.png", alt: "Banner Bônus 8" },
  { src: "https://i.imgur.com/MIfx0hg.png", alt: "Banner Bônus 9" },
  { src: "https://i.imgur.com/FWT7Zdc.png", alt: "Banner Bônus 10" },
  { src: "https://i.imgur.com/w8gk0uW.png", alt: "Banner Bônus 11" },
];

export function Benefits() {
  return (
    <section id="beneficios" className="bg-black/20 py-20 sm:py-32">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Além do acesso ao app, você ainda ganha 👇
          </h2>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
          {banners.map((banner, index) => (
            <div key={index} className="overflow-hidden rounded-lg">
              <Image
                src={banner.src}
                alt={banner.alt}
                width={600}
                height={600}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
