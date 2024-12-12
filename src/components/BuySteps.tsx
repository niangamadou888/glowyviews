import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const steps = [
  {
    title: "Crea il tuo account",
    description: "Registrati su SocialX per accedere a tutti i nostri servizi"
  },
  {
    title: "Scegli il pacchetto",
    description: "Seleziona il numero di visualizzazioni che desideri acquistare"
  },
  {
    title: "Inserisci l'URL",
    description: "Fornisci il link del video YouTube in formato desktop"
  },
  {
    title: "Effettua il pagamento",
    description: "Scegli il metodo di pagamento che preferisci"
  },
  {
    title: "Monitora i risultati",
    description: "Osserva la crescita delle tue visualizzazioni"
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
    <section className="relative w-full max-w-6xl mx-auto px-4 py-32 overflow-hidden">
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
              className="relative p-8 rounded-lg backdrop-blur-sm border border-primary/20 transition-all duration-500 group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {/* Step Number */}
              <div className="absolute -left-4 -top-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-xl font-bold border-4 border-background glow">
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