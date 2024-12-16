import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const BuySteps = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "85% start"]
  });

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
    <section
      className="relative w-full max-w-6xl mx-auto px-4 py-32 overflow-hidden reveal-on-scroll"
      ref={containerRef}
    >
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
        <p className="text-lg text-muted-foreground leading-relaxed ml-10 mb-10">
        <strong>Comprare views YouTube italiane e reali</strong> è semplicissimo, dal momento che devi solo seguire questi step: <br />
          </p>
        {/* Vertical Progress Line */}
        <div className="absolute left-[20px] top-0 bottom-0 w-1">
          <motion.div
            className="absolute top-[60px] left-0 w-full bg-gradient-to-b from-primary via-primary to-primary/30 rounded-full"
            style={{
              height: useTransform(scrollYProgress, [0, 0.85], ["0%", "100%"]),
              boxShadow: "0 0 20px var(--primary)",
            }}
          />
        </div>

        <div className="space-y-32">
          {/* Step 1 */}
          <motion.div
            ref={(el) => (stepsRef.current[0] = el)}
            className="relative p-8 rounded-lg backdrop-blur-sm border border-primary/20 transition-all duration-500 group reveal-on-scroll"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="absolute -left-4 -top-4 w-12 h-12 border-none bg-primary rounded-full flex items-center justify-center text-xl font-bold border-4 border-background glow z-10 group-[.active]:animate-step-pulse">
              1
            </div>
            <div className="ml-8">
              <h3 className="text-2xl font-semibold text-primary mb-4 group-[.active]:text-glow">
                Crea il tuo account
              </h3>
              <p className="text-lg text-muted-foreground">
                Per prima cosa, <strong>crea la tua area personale iscrivendoti a SocialX</strong> e
                recati nella sezione in cui sono presenti le nostre offerte
                commerciali.
              </p>
            </div>
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0 opacity-0 group-[.active]:opacity-100 transition-opacity duration-500 blur-xl" />
          </motion.div>

          {/* Step 2 */}
          <motion.div
            ref={(el) => (stepsRef.current[1] = el)}
            className="relative p-8 rounded-lg backdrop-blur-sm border border-primary/20 transition-all duration-500 group reveal-on-scroll"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="absolute -left-4 -top-4 w-12 h-12 border-none bg-primary rounded-full flex items-center justify-center text-xl font-bold border-4 border-background glow z-10 group-[.active]:animate-step-pulse">
              2
            </div>
            <div className="ml-8">
              <h3 className="text-2xl font-semibold text-primary mb-4 group-[.active]:text-glow">
                Scegli il pacchetto
              </h3>
              <p className="text-lg text-muted-foreground">
                Successivamente, <strong>passa al vaglio tutti i pacchetti che ti
                proponiamo</strong>, in modo da individuare subito quello più in linea con
                le tue esigenze e con il tuo budget.
              </p>
            </div>
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0 opacity-0 group-[.active]:opacity-100 transition-opacity duration-500 blur-xl" />
          </motion.div>

          {/* Step 3 */}
          <motion.div
            ref={(el) => (stepsRef.current[2] = el)}
            className="relative p-8 rounded-lg backdrop-blur-sm border border-primary/20 transition-all duration-500 group reveal-on-scroll"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="absolute -left-4 -top-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-xl border-none font-bold border-4 border-background glow z-10 group-[.active]:animate-step-pulse">
              3
            </div>
            <div className="ml-8">
              <h3 className="text-2xl font-semibold text-primary mb-4 group-[.active]:text-glow">
              Inserisci l'URL
              </h3>
              <p className="text-lg text-muted-foreground">
              Hai trovato il pacchetto che fa per te? Allora, non devi fare altro che <strong>selezionarlo e fornirci l'URL del video</strong> che vuoi “spingere”. Attenzione, però. Devi fornircelo in <strong>formato desktop (ossia “https://youtube.com/tuovideo) e NON in formato mobile (cioè “m.youtube.com/tuovideo”)</strong>. Inoltre, il video deve essere pubblico e non presentare alcuna limitazione.
              </p>
            </div>
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0 opacity-0 group-[.active]:opacity-100 transition-opacity duration-500 blur-xl" />
          </motion.div>

          <motion.div
            ref={(el) => (stepsRef.current[3] = el)}
            className="relative p-8 rounded-lg backdrop-blur-sm border border-primary/20 transition-all duration-500 group reveal-on-scroll"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="absolute -left-4 -top-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-xl font-bold border-4 border-background glow z-10 group-[.active]:animate-step-pulse border-none">
              4
            </div>
            <div className="ml-8">
              <h3 className="text-2xl font-semibold text-primary mb-4 group-[.active]:text-glow">
              Effettua il pagamento
              </h3>
              <p className="text-lg text-muted-foreground">
              A questo punto, <strong>procedi con il pagamento</strong> che puoi effettuare scegliendo tra diversi metodi: <strong>carte di debito/credito, bonifici ordinari e istantanei, PayPal</strong> e via dicendo.
              </p>
            </div>
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0 opacity-0 group-[.active]:opacity-100 transition-opacity duration-500 blur-xl" />
          </motion.div>

          <motion.div
            ref={(el) => (stepsRef.current[4] = el)}
            className="relative p-8 rounded-lg backdrop-blur-sm border border-primary/20 transition-all duration-500 group reveal-on-scroll"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="absolute -left-4 -top-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-xl font-bold border-4 border-background glow z-10 group-[.active]:animate-step-pulse border-none">
              5
            </div>
            <div className="ml-8">
              <h3 className="text-2xl font-semibold text-primary mb-4 group-[.active]:text-glow">
              Monitora i risultati
              </h3>
              <p className="text-lg text-muted-foreground">
              Infine, <strong>devi solo attendere che il nostro Staff elabori il tuo ordine</strong> e che lo “consegni” nel giro di pochissimi giorni lavorativi. In pratica, devi solo monitorare il contatore di views YouTube presente sul video di cui ci hai fornito l'URL.
              </p>
            </div>
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0 opacity-0 group-[.active]:opacity-100 transition-opacity duration-500 blur-xl" />
          </motion.div>

          {/* Add more steps directly here in the same pattern */}
          {/* Repeat for steps 3, 4, and 5 */}
        </div>
      </div>
    </section>
  );
};

export default BuySteps;
