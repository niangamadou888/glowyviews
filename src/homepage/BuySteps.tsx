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
        Come acquistare Like, Follower e Views dal nostro store
        </h2>
        
        <p className="text-lg md:text-xl text-muted-foreground text-center mb-16 max-w-3xl mx-auto">
        Hai deciso di comprare le nostre interazioni? Allora <strong> ecco come procedere:</strong>.
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
          {[1, 2, 3, 4].map((step) => (
            <motion.div
              key={step}
              variants={stepVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="relative p-6 md:p-10 rounded-2xl bg-black/40 border border-primary/20 group hover:border-primary/40 transition-all duration-300"
              style={{
                transform: 'translateZ(0)',
                willChange: 'transform',
                boxShadow: '0 0 40px -10px rgba(var(--primary), 0.1)',
              }}
            >
              <div className="absolute -left-[15px] md:-left-6 -top-6 w-12 md:w-16 h-12 md:h-16 bg-gradient-to-br from-primary to-primary/70 rounded-2xl flex items-center justify-center text-lg md:text-2xl font-bold shadow-xl rotate-12 group-hover:rotate-0 transition-all duration-300">
                {step}
              </div>

              <div className="ml-6 md:ml-10">
                <h3 className="text-2xl md:text-3xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70 mb-4 group-hover:scale-105 transition-transform">
                  {getStepTitle(step)}
                </h3>
                <p className="text-base md:text-lg text-muted-foreground/90 leading-relaxed">
                  {getStepContent(step)}
                </p>
              </div>

              <motion.div
                className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/5 via-primary/20 to-primary/5 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: window.innerWidth > 768 ? 0.5 : 0.2 }}
                transition={{ duration: 0.8 }}
              />
            </motion.div>
          ))}
        </div>
        
        <p className="text-lg md:text-xl text-muted-foreground text-center mt-16 max-w-3xl mx-auto">
        Riceverai <strong> un'e-mail automatica con il numero dell'ordine </strong> e, tramite la tua area personale, potrai monitorare la consegna in tempo reale.
        </p>
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
  };
  return titles[step as keyof typeof titles];
};

const getStepContent = (step: number) => {
  const content = {
    1: (
      <>
        <strong>Inizia registrando il tuo account </strong> in modo da creare la tua area personale.
      </>
    ),
    2: (
      <>
        Dopodiché, vai alla {" "}
        <strong> sezione del nostro store online dedicata al social network </strong> di tuo interesse (YouTube, Instagram, TikTok, ecc.).
      </>
    ),
    3: (
      <>
        Successivamente, {" "}
        <strong> seleziona la tipologia di interazioni che ti servono </strong> (like, piuttosto che commenti, views, condivisioni e via discorrendo) e decidi la quantità.
      </>
    ),
    4: (
      <>
        Fatto? A questo punto, <strong> conferma l'ordine effettuando il pagamento, </strong> scegliendo tra i metodi che ti mettiamo a disposizione.
      </>
    ),
  };
  return content[step as keyof typeof content];
};

export default BuySteps;
