import Link from "next/link";
import { Logo } from "@/components/logo";

export function Footer() {
  return (
    <footer className="border-t border-primary/10 bg-black">
      <div className="container flex flex-col items-center justify-between gap-6 px-4 py-8 sm:flex-row md:px-6">
        <Logo className="text-2xl" />
        <nav className="flex gap-4 sm:gap-6">
          <Link href="#" className="text-sm text-muted-foreground transition-colors hover:text-primary">
            Termos de uso
          </Link>
          <Link href="#" className="text-sm text-muted-foreground transition-colors hover:text-primary">
            Suporte
          </Link>
          <Link href="#oferta" className="text-sm text-muted-foreground transition-colors hover:text-primary">
            Acessar App
          </Link>
        </nav>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Promptify — Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
