import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Lock, Mail, MessageSquare } from "lucide-react";

const trustPoints = [
  { icon: Mail, text: "Receba acesso imediato por e-mail" },
  { icon: MessageSquare, text: "Suporte 24h via WhatsApp" },
  { icon: Lock, text: "Pagamento único, sem mensalidade" },
];

const includedBenefits = [
  "Acesso completo ao App Promptify",
  "Curso 'Conteúdo com IA'",
  "+100 prompts prontos por categoria",
  "Acesso a ferramentas exclusivas de IA",
  "Novos prompts todos os dias",
  "Suporte prioritário via WhatsApp",
];

export function Offer() {
  return (
    <section id="oferta" className="py-20 sm:py-32 scroll-mt-20">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-headline text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl text-glow">
            ⚡ OFERTA LIMITADA
          </h2>
          <p className="mt-4 text-xl text-muted-foreground">
            É sua chance de dominar o Promptify com 70% OFF
          </p>
        </div>
        <Card className="mx-auto mt-12 max-w-lg border-2 border-primary bg-gradient-to-br from-white/10 to-transparent p-1 card-glow">
          <CardContent className="flex flex-col items-center p-8 text-center">
            <p className="text-xl text-muted-foreground line-through">De R$197 por</p>
            <p className="my-2 font-headline text-7xl font-bold">
              R$37
            </p>
            <div className="my-8 w-full space-y-3 text-left">
              {includedBenefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 flex-shrink-0 text-primary" />
                  <span className="text-muted-foreground">{benefit}</span>
                </div>
              ))}
            </div>
            <Button asChild size="lg" className="w-full text-lg font-bold button-glow bg-gradient-to-r from-primary to-accent text-primary-foreground">
              <Link href="https://checkout.imperiumpay.app/checkout/cmgubrw8a02lg7c53p4zu2g5a?offer=707M46F">
                💥 QUERO MEU ACESSO!
              </Link>
            </Button>
          </CardContent>
        </Card>
        <div className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-4">
          {trustPoints.map((point, index) => (
            <div key={index} className="flex items-center gap-3">
              <point.icon className="h-5 w-5 text-primary" />
              <span className="text-muted-foreground">{point.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
