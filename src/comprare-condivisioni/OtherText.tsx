import { motion, useScroll, useSpring, MotionValue } from "framer-motion";
import { useRef } from "react";

interface Section {
  title: string;
  content: string[];
  image: {
    src: string;
    alt: string;
  };
}

const SECTIONS: Section[] = [
  {
    title: "Effettua degli acquisti congrui alla tua situazione",
    content: [
      'Oltre a **comprare condivisioni YouTube italiane e reali**, l"altro accorgimento consiste nello scegliere delle quantità che non risultino “stonate” con la tua attuale situazione.',
      'Non a caso, **questo è proprio un altro degli errori più comuni** che vengono commessi nel Social Media Marketing.',
      'Naturalmente, ci stiamo riferendo al **comprare quantità esagerate di interazioni social.**',
      'Insomma, se di media i tuoi video fanno 1000 condivisioni al mese, **sarebbe alquanto strano che, di colpo, ne facessero 100mila**. Non trovi?',
      'Di conseguenza, **la “chiave di volta” è rappresentata dalla pazienza e dalla pianificazione** della strategia a medio e a lungo termine.'
    ],
    image: {
      src: "/Comprare Views YouTube_dopo quanto tempo arrivano_ no background.png",
      alt: "Comprare Views YouTube_dopo quanto tempo arrivano",
    },
  },
  {
    title: "Spingi di più il lavoro organico",
    content: [
      "Per concludere questo mini-tutorial, oltre a **comprare condivisioni YouTube italiane e reali** seguendo un criterio logico di proporzionalità, devi pure spingere di più il lavoro organico.",
      "Purtroppo, esistono ancora diversi influencer e creator che **ragionano in questo modo: “Vabbè, ho appena comprato diverse interazioni, quindi mi rilasso e vedo un po' cosa succede”.**",
      "Ovviamente, **non è certo l'atteggiamento giusto. **",
      "Se vuoi davvero fare le “cose fatte bene”, l'unico modo per massimizzare le rendite e azzerare possibili rischi è proprio quello di **darci dentro con le pubblicazioni di qualità.**",
      'Così facendo, **gli algoritmi di YouTube considereranno l"incremento di interazioni ricevute più che “giustifico”**, se così possiamo dire.',
    ],
    image: {
      src: "/Quanto costa comprare Visualizzazioni YouTube_ no background.png",
      alt: "Quanto costa comprare Visualizzazioni YouTube?",
    },
  },
  {
    title: "Perché comprare condivisioni YouTube italiane e reali su GlowLikes",
    content: [
      "Ti stai chiedendo dove **comprare condivisioni YouTube italiane e reali** spendendo il giusto? Qui dai noi di GlowLikes!",
      "Infatti, i **punti di forza della nostra agenzia** sono:",
      "**1. Rapidità nelle consegne**",
      "**2. Servizio accurato**",
      "**3. Assistenza clienti sempre a disposizione**",
      'Noi di GlowLikes non vendiamo solo interazioni social di altissima qualità, ma **offriamo anche un servizio completo di prim"ordine a 360°.**',
      "on noi, i nostri clienti non hanno nulla di cui preoccuparsi, **se non fare un giro sul nostro store online e scegliere cosa comprare.**",
      "Tra l'altro, è pure uno dei più forniti di tutta Italia! **In GlowLike trovi condivisioni, certamente, ma puoi pure comprare commenti YouTube, visualizzazioni, follower** e tante altre interazioni ancora.",
      'Il tutto, naturalmente, **sempre con la medesima qualità** che ci contraddistingue dai nostri competitor.',
    ],
    image: {
      src: "/Comprare Views YouTube è legale_ no background.png",
      alt: "Comprare Views YouTube è legale",
    },
  },
  {
    title: "Rapidità nelle consegne",
    content: [
      "Oltre al rapporto qualità/prezzo, perché **comprare condivisioni YouTube italiane e reali** proprio su GlowLikes?",
      "Nel caso non lo sapessi, **siamo tra i più veloci ad effettuare le “consegne”** degli ordini.",
      'In pratica, **stiamo parlando di poche ore**, fino ad un massimo qualche giorno. Questo, però, solo per quegli acquisti davvero importanti.',
      "Da un lato, questo arco temporale **ci è necessario per poter effettivamente elaborare** tutte le interazioni social di altra qualità richieste dal cliente.",
      "Dall'altro, invece, **ne approfittiamo per “non dare nell'occhio”**. Infatti, come già discusso in precedenza, ricevere troppe interazioni (nell'ordine delle centinaia di migliaia) in un intervallo di tempo troppo ristretto potrebbe “mettere in allerta” gli algoritmi della piattaforma.",
      'Ad ogni modo, **questo è riferito solo agli ordini più “grossi”**.',
      'Per tutti gli altri, invece, **puoi contare sulla massima velocità e precisione** da parte nostra.',
      'Non a caso, questo è proprio **uno dei motivi per cui stiamo acquisendo sempre più clienti**, in special modo quelli che lavorano con il target “Italia”.',
    ],
    image: {
      src: "/Comprare Visualizzazioni YouTube_cosa non fare no background.png",
      alt: "Comprare Visualizzazioni YouTube_cosa non fare",
    },
  },
  {
    title: "Servizio accurato",
    content: [
      "In secondo luogo, **comprare condivisioni YouTube italiane e reali** da noi di GlowLikes ti offre tutta una serie di garanzie che non trovi dalle altre agenzie.",
      "Ad esempio, una volta piazzato l'ordine, **puoi monitorare la consegna in tempo reale, grazie ad un apposito contatore** presente all'interno della tua area personale.",
      'Non solo, nel caso delle condivisioni YouTube, **ti mettiamo a disposizione pure un pratico report grazie a cui puoi verificare le piattaforme** coinvolte dalle condivisioni stesse.',
      "Insomma, **così saprai sempre dove sono i tuoi contenuti** e, di conseguenza, capire meglio come impostare le prossime mosse.",
      "Detto ciò, stiamo parlando di un servizio tutt'altro che scontato, visto che **molte altre agenzie si limitano alla merita vendita**, lasciando i clienti un po' in balia di loro stessi e senza assegnare loro una propria area personale all'interno del sito.",
    ],
    image: {
      src: "/Comprare Visualizzazioni YouTube_cosa non fare no background.png",
      alt: "Comprare Visualizzazioni YouTube_cosa non fare",
    },
  },
  {
    title: "Assistenza clienti sempre a disposizione",
    content: [
      "Infine, se decidi di **comprare condivisioni YouTube italiane e reali** da noi di GlowLikes, sappi che potrai contare sul nostro centro assistenza clienti in qualsiasi momento.",
      "È vero, lavoriamo sempre al meglio, quindi **è davvero raro che accadano degli intoppi.** Tuttavia, possono sempre capitare.",
      'Ecco perché abbiamo deciso di offrire anche questo servizio. Ci teniamo davvero **che i nostri clienti siano tutelati a 360°.**',
      "Quindi, nel caso dovessi riscontrare un qualsivoglia problema, **tutto ciò che devi fare è entrare nella tua area personale e aprire un ticket.**",
      "Dopodiché, **saremo noi a contattarti fornendoti tutte le istruzioni per procedere. **Inoltre, sappi che ad ogni ordine viene assegnato un codice univoco che ricevi via e-mail.",
      'Di conseguenza, **non c"è nulla ad essere lasciato “al caso”**, visto che hai la possibilità di tracciare ogni singolo acquisto effettuato.',
      'Detto ciò, **siamo piuttosto celeri sia nella risposta, che nella risoluzione del problema** che, di solito, avviene in poche ore.',
    ],
    image: {
      src: "/Comprare Visualizzazioni YouTube_cosa non fare no background.png",
      alt: "Comprare Visualizzazioni YouTube_cosa non fare",
    },
  },
];

const renderContent = (content: string[]) => {
  return content.map((paragraph, idx) => {
    // Convert markdown-style bold to JSX
    const parts = paragraph.split(/(\*\*.*?\*\*)/g);
    const rendered = parts.map((part, i) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return <strong key={i}>{part.slice(2, -2)}</strong>;
      }
      return part;
    });

    return (
      <p key={idx} className="text-lg text-white/90 mb-4">
        {rendered}
      </p>
    );
  });
};

const ContentSection = ({
  section,
  index,
  progress,
}: {
  section: Section;
  index: number;
  progress: MotionValue<number>;
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isEven = index % 2 === 0;
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  const { scrollYProgress: sectionProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"],
  });

  // Always use useSpring, but configure it differently for mobile
  const smoothSectionProgress = useSpring(sectionProgress, {
    damping: isMobile ? 100 : 20,
    stiffness: isMobile ? 300 : 80,
    mass: isMobile ? 0.1 : 0.2,
    restDelta: isMobile ? 0.01 : 0.001
  });

  return (
    <motion.div
      ref={sectionRef}
      initial={{ opacity: 1, y: 0 }}
      className={`flex flex-col md:flex-row items-start gap-8 md:gap-16 relative ${
        isEven ? "pl-8" : "pr-8"
      }`}
      style={{
        transform: 'translateZ(0)',
        willChange: 'transform, opacity'
      }}
    >
      {/* Path animation optimization */}
      <div className={`absolute ${isEven ? "left-0" : "right-0"} top-0 h-[104%] w-full`}>
        <motion.svg
          width="100%"
          height="100%"
          viewBox="0 0 50 103"
          preserveAspectRatio="none"
          className={`absolute ${isEven ? "left-0" : "right-0"} top-0`}
          style={{ transform: 'translateZ(0)', willChange: 'transform' }}
        >
          <motion.path
            d={
              typeof window !== "undefined" && window.innerWidth < 768
                ? `M${isEven ? "0" : "50"} 0 L${isEven ? "0" : "50"} 103 L${
                    isEven ? "25" : "25"
                  } 103`
                : `M${isEven ? "0" : "50"} 0 L${isEven ? "0" : "50"} 101 L${
                    isEven ? "25" : "25"
                  } 101`
            }
            fill="none"
            strokeWidth="0.5"
            stroke="url(#gradient)"
            strokeLinecap="round"
            strokeMiterlimit="1"
            strokeLinejoin="round"
            style={{
              opacity: smoothSectionProgress,
              pathLength: smoothSectionProgress,
              transform: 'translateZ(0)',
              willChange: 'opacity, strokeDashoffset'
            }}
          />
          <defs>
            <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#A855F7" />
              <stop offset="50%" stopColor="#9333EA" />
              <stop offset="100%" stopColor="#7E22CE" />
            </linearGradient>
          </defs>
        </motion.svg>
      </div>

      {/* Content sections with optimized image loading */}
      <div className={`flex-1 ${!isEven ? "md:order-2" : ""}`}>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="text-3xl md:text-4xl font-bold text-center mb-16 text-glow"
          style={{ transform: 'translateZ(0)', willChange: 'transform' }}
        >
          {section.title}
        </motion.h2>
        {renderContent(section.content)}
      </div>

      <div className={`flex-1 ${!isEven ? "md:order-1" : ""}`}>
        <div className="relative aspect-video rounded-xl overflow-hidden">
          <img
            src={section.image.src}
            alt={section.image.alt}
            className="w-full h-full object-cover rounded-xl"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </motion.div>
  );
};

const OtherText = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={containerRef} className="w-full max-w-7xl mx-auto px-4 py-16">
      <div className="space-y-24">
        {SECTIONS.map((section, index) => (
          <ContentSection
            key={index}
            section={section}
            index={index}
            progress={new MotionValue()} // Placeholder since we're not using the global progress anymore
          />
        ))}
      </div>
    </section>
  );
};

export default OtherText;
