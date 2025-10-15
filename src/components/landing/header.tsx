import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-primary/10 bg-black/30 backdrop-blur-lg">
      <div className="container flex h-20 items-center justify-between">
        <Link href="/">
          <Image
            src="https://i.imgur.com/T5k3Fpy.png"
            alt="Promptify Logo"
            width={160}
            height={40}
            className="w-40 h-auto"
          />
        </Link>
        <Button asChild className="button-glow bg-gradient-to-r from-primary to-accent text-primary-foreground font-bold">
          <Link href="#oferta">
            🔥 ACESSAR AGORA
          </Link>
        </Button>
      </div>
    </header>
  );
}
