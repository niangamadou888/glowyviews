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

  // Optimized animation variants with mobile considerations
  const stepVariants = {
    hidden: {
      opacity: window.innerWidth > 768 ? 0 : 1,
      y: window.innerWidth > 768 ? 20 : 0,
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
      className="relative mt-18 md:mt-40 w-full max-w-6xl mx-auto px-4 py-20 md:py-32 overflow-hidden"
      ref={containerRef}
    >
      {/* Background Effect - Simplified for mobile */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

      {/* Glow Effect - Only on desktop */}
      <div className="hidden md:block absolute inset-0">
        <div
          className="absolute inset-0 bg-primary/10 blur-3xl"
          style={{
            animation: "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
          }}
        />
      </div>

      

      <div className="relative">

        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-glow text-center">
        Ecco come comprare ore di visualizzazione YouTube
        </h2>

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
          {[1, 2, 3, 4, 5, 6, 7].map((step) => (
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
                whileInView={{ opacity: window.innerWidth > 768 ? 1 : 0.3 }}
                transition={{ duration: window.innerWidth > 768 ? 0.6 : 0 }}
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
    1: "",
    3: "",
    2: "",
    4: "",
    5: "",
    6: "",
    7: "",
  };
  return titles[step as keyof typeof titles];
};

const getStepContent = (step: number) => {
  const content = {
    1: (
      <>
        <strong>Tutto inizia con l'iscrizione a GlowLikes, </strong>per cui devi fornire una e-mail e impostare una password a tua scelta.
      </>
    ),
    2: (
      <>
        Dopodiché, una volta dentro alla tua area personale,  {" "}
        <strong>recati nella sezione in cui è presente lo store online</strong>con tutte le interazioni social disponibili per l'acquisto.
      </>
    ),
    3: (
      <>
        Arrivato fino a qui, dunque, dovrai {" "}
        <strong>selezionare proprio “comprare ore di visualizzazione YouTube”</strong>e fornire i parametri di tuo gradimento. Devi, quindi, impostare il numero di visualizzazioni, così come la durata espressa in minuti.
      </>
    ),
    4: (
      <>
        Il più è stato fatto, quindi adesso<strong>devi solo fornire l'URL del video di cui vuoi che salgano proprio le ore di visualizzazione.</strong> Ovviamente, può essere anche più di un video alla volta. L'unica cosa che ti chiediamo, però, è di <strong>inserire l'URL con questo formato “https://youtube.com/tuovideo” e non con questo “m.youtube.com/tuovideo”.</strong>
      </>
    ),
    5: (
      <>
        <strong>
        Adesso, devi solo effettuare il pagamento, 
        </strong>{" "}
        scegliendo il metodo che ti è più congeniale. Puoi farlo tramite carte di debito/credito, PayPal, ma anche bonifico SEPA.
      </>
    ),
    6: (
      <>
        La tua parte l'hai fatta, quindi, da adesso in poi,  {" "}
        <strong>
        andiamo avanti noi, “recapitandoti” le ore acquistate nel giro di pochissimi giorni 
        </strong>{" "}
        lavorativi.
      </>
    ),
    7: (
      <>
        Se vuoi,  {" "}
        <strong>
        puoi monitorare la lavorazione dell’ordine in tempo reale, 
        </strong>{" "}
        semplicemente dando uno sguardo al contatore presente nella tua area personale.
      </>
    ),
  };
  return content[step as keyof typeof content];
};

export default BuySteps;
