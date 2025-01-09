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
    title: "Comprare Views YouTube: dopo quanto tempo arrivano?",
    content: [
      'Come già brevemente accennato, una volta **comprate le visualizzazioni YouTube**, queste "arrivano" sul tuo video nel giro di qualche giorno lavorativo.',
      'Chiaramente, non possiamo dare delle tempistiche precise generalizzate, dal momento che **ogni ordine è da considerarsi un "caso a sé".**',
      'Ad esempio, se hai deciso di **comprare visualizzazioni YouTube italiane e reali** incluse nei pacchetti meno "corposi" (quindi, sulle 100, 200 Views al colpo), puoi tranquillamente ottenerle nel giro di poche ore.',
      'Al contrario, **per i pacchetti che ne comprendono migliaia, ci prendiamo qualche giorno**. Da un lato, il tempo ci serve per erogare "materialmente" l\'ordine.',
      'Dall\'altro, invece, **"spalmare" queste interazioni nel corso di diversi giorni** è il modo migliore per farle passare come acquisite in modo organico.',
      "Quindi, riassumendo, le nostre **tempistiche di consegna variano sempre in base all'entità** dell'ordine.",
      "In ogni caso, per eventuali dubbi o perplessità legati all'acquisto, **c'è sempre il nostro servizio assistenza clienti** pronto a darti tutti i chiarimenti e specifiche che desideri.",
    ],
    image: {
      src: "YouTube-Thumbnail_1.webp",
      alt: "Tutti i vantaggi del comprare Visualizzazioni YouTube",
    },
  },
  {
    title: "Quanto costa comprare Visualizzazioni YouTube?",
    content: [
      "Come hai già intuito, **comprare views YouTube italiane e reali può avere un costo variabile**, a seconda del pacchetto selezionato.",
      "Se fai un giro nella sezione specifica dedicata agli acquisti, **noterai che te ne proponiamo di diversi**, organizzati secondo un ordine progressivo.",
      "In particolare, dunque, puoi **comprare visualizzazioni YouTube partendo da 2-3 euro, fino ad arrivare a diverse centinaia** per quelli più corposi.",
      "Ovviamente, **sei sempre tu a decidere l'entità dei tuoi acquisti**, semplicemente scegliendo il pacchetto che ritieni più opportuno per quella che è la tua situazione.",
      "Per chiudere questo breve paragrafo, vorremmo **darti qualche consiglio in merito agli investimenti più importanti.**",
      'Naturalmente, più è corposo il pacchetto, minore è il prezzo dell\'interazione "cadauna". Quindi, nel caso te ne servissero parecchie, **fai un unico grosso ordine, senza comprare pacchetti di media entità** di volta in volta.',
      'In caso, **puoi sempre accordarti con il nostro Staff per una consegna "diluita"** nel tempo, proprio evitare ciò di cui parliamo nel paragrafo successivo.',
    ],
    image: {
      src: "cf948d2f-adf9-4327-889d-4606e6185e72.jpeg",
      alt: "Per quali video si possono comprare Visualizzazioni YouTube?",
    },
  },
  {
    title: "Comprare Views YouTube è legale?",
    content: [
      "Sì, **comprare visualizzazioni YouTube è sicuro** perché è una pratica perfettamente legale sia in Italia, che negli altri paesi del mondo.",
      "Di conseguenza, **ricorre a tali servizi non ti espone ad alcun problema** nei confronti delle Istituzioni.",
      "Al tempo stesso, però, **c'è un aspetto di vitale importanza** di cui devi tenere conto.",
      'Infatti, sebbene sia una pratica legale, il **comprare views YouTube o, più in generale, "manipolare" l\'acquisizione di ogni interazione social**, non è ammesso dai termini e condizioni della piattaforma.',
      "Ecco perché **non bisogna mai effettuare acquisti del genere alla leggera** ma, anzi, pianificare una strategia efficace.",
      "Per certi versi, lo **stesso numero di interazioni comprate può dare risultati diversi** proprio a seconda di come vengono gestite.",
      'Il "segreto" del successo sta proprio nel **far passare le acquisizioni come una "conseguenza organica"** della tua attività di YouTuber.',
      'Insomma, sarebbe come dire ai crawler della piattaforma: **"Ehi! Guarda che mi arrivano tante visualizzazioni perché carico ottimi contenuti e piaccio al pubblico!".**',
    ],
    image: {
      src: "trueview.webp",
      alt: "Tutti i vantaggi del comprare Visualizzazioni YouTube",
    },
  },
  {
    title: "Comprare Visualizzazioni YouTube: cosa non fare",
    content: [
      "Se hai deciso di **comprare views YouTube**, ricorda che l'unica cosa che non devi fare è proprio quella di esagerare.",
      "Ci rimetteresti solo i soldi investiti nell'acquisto. Infatti, **ogni attività anomala viene rilevata dal sistema di crawling** e strettamente monitorata.",
      'Cosa intendiamo per "attività anomala"? Ad esempio, **400mila o 500mila views YouTube arrivate in un paio di giorni**, su un canale aperto settimana scorsa e con soli 2 video caricati, pure di dubbia qualità.',
      "Ecco, devi evitare proprio questo. Naturalmente, **tutti devono prestare la massima attenzione**, anche chi ha canali ben avviati.",
      "Come già consigliato poco fa, se vuoi **comprare visualizzazioni YouTube reali ed italiane in quantità elevata**, mettiti d'accordo con il nostro Staff per poterli ricevere un po' alla volta e non destare sospetti.",
      'A tal proposito, ti **consigliamo pure di realizzare una sorta di "scaletta"**, proprio per programmare l\'erogazione delle interazioni, al fine di renderle più genuine possibili.',
    ],
    image: {
      src: "Come-guadagnare-su-YouTube-Quello-che-devi-sapere.jpg",
      alt: "Per quali video si possono comprare Visualizzazioni YouTube?",
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

  // Calculate section-specific scroll progress
  const { scrollYProgress: sectionProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"],
  });

  // Smooth out the section progress
  const smoothSectionProgress = useSpring(sectionProgress, {
    damping: 30,
    stiffness: 100,
    mass: 0.5,
  });

  return (
    <motion.div
      ref={sectionRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`flex flex-col md:flex-row items-start gap-8 md:gap-16 relative ${
        isEven ? "pl-8" : "pr-8"
      }`}
    >
      <div
        className={`absolute ${
          isEven ? "left-0" : "right-0"
        } top-0 h-[104%] w-full`}
      >
        <motion.svg
          width="100%"
          height="100%"
          viewBox="0 0 50 103"
          preserveAspectRatio="none"
          className={`absolute ${
            isEven ? "left-0" : "right-0"
          } top-0 animate-glow`}
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

      <div className={`flex-1 ${!isEven ? "md:order-2" : ""}`}>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-glow hover:animate-glow">
          {section.title}
        </h2>
        {renderContent(section.content)}
      </div>

      <div className={`flex-1 ${!isEven ? "md:order-1" : ""}`}>
        <div className="relative aspect-video rounded-xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-primary/20 animate-gradient" />
          <img
            src={section.image.src}
            alt={section.image.alt}
            className="w-full h-full object-cover rounded-xl"
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
