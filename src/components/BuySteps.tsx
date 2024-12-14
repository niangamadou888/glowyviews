import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const steps = [
  {
    title: "Crea il tuo account",
    description: "Per prima cosa, crea la tua area personale iscrivendoti a SocialX e recati nella sezione in cui sono presenti le nostre offerte commerciali."
  },
  {
    title: "Scegli il pacchetto",
    description: "Successivamente, passa al vaglio tutti i pacchetti che ti proponiamo, in modo da individuare subito quello più in linea con le tue esigenze e con il tuo budget."
  },
  {
    title: "Inserisci l'URL",
    description: "Hai trovato il pacchetto che fa per te? Allora, non devi fare altro che selezionarlo e fornirci l'URL del video che vuoi “spingere”. Attenzione, però. Devi fornircelo in formato desktop (ossia “https://youtube.com/tuovideo) e NON in formato mobile (cioè “m.youtube.com/tuovideo”). Inoltre, il video deve essere pubblico e non presentare alcuna limitazione."
  },
  {
    title: "Effettua il pagamento",
    description: "A questo punto, procedi con il pagamento che puoi effettuare scegliendo tra diversi metodi: carte di debito/credito, bonifici ordinari e istantanei, PayPal e via dicendo."
  },
  {
    title: "Monitora i risultati",
    description: "Infine, devi solo attendere che il nostro Staff elabori il tuo ordine e che lo “consegni” nel giro di pochissimi giorni lavorativi. In pratica, devi solo monitorare il contatore di views YouTube presente sul video di cui ci hai fornito l'URL."
  }
];

const BuySteps = () => {
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = stepsRef.current.map((step, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        },
        { threshold: 0.5 }
      );

      if (step) {
        observer.observe(step);
      }

      return observer;
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <section className="relative w-full max-w-6xl mx-auto px-4 py-32 overflow-hidden reveal-on-scroll">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      {/* Animated Glow */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-primary/10 blur-3xl animate-pulse" />
      </div>

      <div className="relative">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-glow mb-24">
          Come comprare Visualizzazioni YouTube italiane e reali
        </h2>

        <div className="space-y-32">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              ref={(el) => (stepsRef.current[index] = el)}
              className="relative p-8 rounded-lg backdrop-blur-sm border border-primary/20 transition-all duration-500 group reveal-on-scroll"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {/* Connecting Lines */}
              {index < steps.length - 1 && (
                <div className="absolute left-[20px] bottom-[-32px] w-[2px] h-[32px] bg-primary/50 glow" />
              )}

              {/* Step Number */}
              <div className="absolute -left-4 -top-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-xl font-bold border-4 border-background glow z-10">
                {index + 1}
              </div>

              {/* Content */}
              <div className="ml-8">
                <h3 className="text-2xl font-semibold text-primary mb-4 group-[.active]:text-glow">
                  {step.title}
                </h3>
                <p className="text-lg text-muted-foreground">
                  {step.description}
                </p>
              </div>

              {/* Border Glow Effect */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0 opacity-0 group-[.active]:opacity-100 transition-opacity duration-500 blur-xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BuySteps;