import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Como recebo o acesso?",
    answer: "O envio é automático por e-mail logo após a confirmação do pagamento. Você receberá um link para criar sua conta e acessar todo o conteúdo.",
  },
  {
    question: "Funciona no celular?",
    answer: "Sim! O Promptify é 100% online e responsivo, funcionando perfeitamente em computadores, tablets e celulares.",
  },
  {
    question: "Tenho suporte?",
    answer: "Sim! Oferecemos suporte prioritário e atendimento direto via WhatsApp para todos os nossos usuários.",
  },
  {
    question: "O pagamento é único?",
    answer: "Sim, o valor da oferta é um pagamento único que garante seu acesso ao App e ao curso, incluindo todas as futuras atualizações.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="bg-black/20 py-20 sm:py-32">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Perguntas Frequentes
          </h2>
        </div>
        <Accordion type="single" collapsible className="mx-auto mt-12 w-full max-w-3xl">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="mb-4 rounded-lg border-primary/20 bg-white/5 px-6 backdrop-blur-sm">
              <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
