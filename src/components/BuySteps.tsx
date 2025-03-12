import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const BuySteps = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 20,
    restDelta: 0.005,
  });

  // Add this line to define lineProgress
  const lineProgress = useTransform(smoothProgress, [0, 1], [0, 1], {
    clamp: true,
  });

  // Optimized animation variants
  const stepVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      transition: { duration: 0.4, ease: "easeOut" },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section
      className="relative mt-20 md:mt-40 w-full max-w-6xl mx-auto px-4 py-24 md:py-32 overflow-hidden"
      ref={containerRef}
    >
      {/* Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

      {/* Glow Effect */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-primary/10 blur-3xl"
          style={{
            animation: "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
          }}
        />
      </div>

      <div className="relative">
        {/* Optimized progress line */}
        <div className="absolute left-[7px] top-[0px] bottom-0 w-[3px] md:w-1 bg-primary/10">
          <motion.div
            className="absolute top-0 left-0 w-full bg-gradient-to-b from-primary via-primary to-primary/30"
            style={{
              height: useTransform(lineProgress, (v) => `${v * 100}%`),
              transform: 'translateZ(0)',
              willChange: 'transform',
            }}
          />
        </div>

        <div className="space-y-20 md:space-y-28">
          {[1, 2, 3, 4, 5].map((step) => (
            <motion.div
              key={step}
              variants={stepVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="relative p-4 md:p-8 rounded-lg backdrop-blur-sm border border-primary/20 group"
              style={{
                transform: 'translateZ(0)',
                willChange: 'transform',
              }}
            >
              <div className="absolute -left-[10px] md:-left-4 -top-4 w-8 md:w-12 h-8 md:h-12 bg-primary rounded-full flex items-center justify-center text-base md:text-xl font-bold glow z-10">
                {step}
              </div>

              <div className="ml-4 md:ml-8">
                <h3 className="text-xl md:text-2xl font-semibold text-primary mb-4 group-hover:text-glow transition-all">
                  {getStepTitle(step)}
                </h3>
                <p className="text-base md:text-lg text-muted-foreground">
                  {getStepContent(step)}
                </p>
              </div>

              <motion.div
                className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0 blur-xl"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Helper functions
const getStepTitle = (step: number) => {
  const titles = {
    1: "Crea il tuo account",
    2: "Scegli il pacchetto",
    3: "Inserisci l'URL",
    4: "Effettua il pagamento",
    5: "Monitora i risultati",
  };
  return titles[step as keyof typeof titles];
};

const getStepContent = (step: number) => {
  const content = {
    1: (
      <>
        Per prima cosa,{" "}
        <strong>crea la tua area personale iscrivendoti a glowlikes</strong> e
        recati nella sezione in cui sono presenti le nostre offerte commerciali.
      </>
    ),
    2: (
      <>
        Successivamente,{" "}
        <strong>passa al vaglio tutti i pacchetti che ti proponiamo</strong>, in
        modo da individuare subito quello più in linea con le tue esigenze e con
        il tuo budget.
      </>
    ),
    3: (
      <>
        Hai trovato il pacchetto che fa per te? Allora, non devi fare altro che{" "}
        <strong>selezionarlo e fornirci l'URL del video</strong> che vuoi
        "spingere". Attenzione, però. Devi fornircelo in{" "}
        <strong>
          formato desktop (ossia "https://youtube.com/tuovideo) e NON in formato
          mobile (cioè "m.youtube.com/tuovideo")
        </strong>
        . Inoltre, il video deve essere pubblico e non presentare alcuna
        limitazione.
      </>
    ),
    4: (
      <>
        A questo punto, <strong>procedi con il pagamento</strong> che puoi
        effettuare scegliendo tra diversi metodi:{" "}
        <strong>
          carte di debito/credito, bonififi ordinari e istantanei, PayPal
        </strong>{" "}
        e via dicendo.
      </>
    ),
    5: (
      <>
        Infine,{" "}
        <strong>
          devi solo attendere che il nostro Staff elabori il tuo ordine
        </strong>{" "}
        e che lo "consegni" nel giro di pochissimi giorni lavorativi. In
        pratica, devi solo monitorare il contatore di views YouTube presente sul
        video di cui ci hai fornito l'URL.
      </>
    ),
  };
  return content[step as keyof typeof content];
};

export default BuySteps;
