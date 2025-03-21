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
        Comprare spettatori diretta YouTube su GlowLikes: store online aperto 24/7
        </h2>

        <p className="text-lg md:text-xl text-muted-foreground text-center mb-16 max-w-3xl mx-auto">
        Se hai deciso di  <strong>comprare spettatori diretta YouTube italiani e reali</strong> qui da noi su GlowLikes, ecco i passi da seguire:
        </p>

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
          {[1, 2, 3, 4, 5, 6].map((step) => (
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
  };
  return titles[step as keyof typeof titles];
};

const getStepContent = (step: number) => {
  const content = {
    1: (
      <>
        Nel caso dovessi ancora farlo, non perdere altro tempo ed{" "}
        <strong> iscriviti subito sulla nostra piattaforma, </strong> in modo da creare la tua area personale.
      </>
    ),
    2: (
      <>
        Fatto questo, recati nello store online in cui sono presenti le interazioni e cerca, per l'appunto, la sezione dedicata agli  {" "}
        <strong>spettatori diretta YouTube.</strong>
      </>
    ),
    3: (
      <>
        A questo punto,{" "}
        <strong>devi selezionare il pacchetto</strong>che ritieni più indicato per la tua situazione. Si va da quelli di pochi euro, fino a quelli più “impegnativi”, economicamente parlando.
      </>
    ),
    4: (
      <>
        Una volta individuato quello di tuo interesse, prosegui fornendo tutti i dati relativi alla diretta streaming in questione. Ad esempio, <strong> devi fornirci l'URL del video</strong>(con questo formato “https://youtube.com/tuadiretta” e non con questo “m.youtube.com/tuadiretta”),  <strong>così come l'orario della stessa </strong>(a tal proposito, devi effettuare l'ordine almeno 24 ore prima della diretta).
      </>
    ),
    5: (
      <>
        Ci siamo quasi, visto che adesso devi solo {" "}
        <strong>
        “concretizzare” l'ordine effettuando il pagamento
        </strong>{" "}
        tramite carta di debito/credito, PayPal, bonifico o qualsiasi altro metodo che preferisci.
      </>
    ),
    6: (
      <>
        Completato anche quest'ultimo step,  {" "}
        <strong>
        riceverai via e-mail la conferma dell'ordine.
        </strong>
      </>
    ),
  };
  return content[step as keyof typeof content];
};

export default BuySteps;
