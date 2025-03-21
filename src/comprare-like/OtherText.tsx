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
    title: "Perché i creator decidono di comprare ore di visualizzazione YouTube",
    content: [
      'I creator decidono di **comprare ore di visualizzazione YouTube** non tanto per farsi “belli” con gli amici, quanto per un motivo piuttosto pratico.',
      'Come già saprai, **la piattaforma offre una programma di partnership**, tale per cui gli Youtuber ricevono una percentuale in base alle visualizzazioni realizzate.',
      'Questo, però, non **è un “processo” automatico. Prima di tutto, **è il creator stesso che deve richiedere esplicitamente la monetizzazione.**',
      'In aggiunta, occorre anche che vengano rispettati determinati parametri. Tra questi, **c"è l"aver “accumulato” almeno 4000 ore di visualizzazione totale negli ultimi 12 mesi** solari.',
      'Ora, capisci come mai ci sono così tanti utenti che vogliono **comprare ore di visualizzazione YouTube?**',
      'Immagina di voler attivare la monetizzazione ma, per tutta una serie di fattori, di **non riuscire a raggiungere la maledetta soglia delle 4000 ore** di video guardati.',
      'Esatto, tutto ciò che pubblicheresti **non ti frutterebbe nemmeno 1 centesimo.**',
      'Ora che appare più evidente la motivazione di fondo che alimenta questo mercato, starai sicuramente pensando **se anche tu puoi usufruire di tale servizio**, giusto? Allora vai subito al prossimo paragrafo per conoscere la risposta.'
    ],
    image: {
      src: "/Comprare Views YouTube_dopo quanto tempo arrivano_ no background.png",
      alt: "Comprare Views YouTube_dopo quanto tempo arrivano",
    },
  },
  {
    title: "Puoi comprare ore di visualizzazione YouTube, basta non farsi beccare",
    content: [
      "La soluzione al problema di cui sopra è proprio questa, ovvero **puoi tranquillamente comprare ore di visualizzazione YouTube, basta non farsi intercettare dai crawler.**",
      "In che modo, dunque? Beh, questo è il nostro “pane quotidiano”. In virtù di ciò, **sfruttiamo i migliori sistemi informatici tali per cui ogni interazione acquistata verrà, poi, “consegnata”, da un account reale**, ovvero dotato di un suo proprio indirizzo IP.",
      "Ecco perché le **nostre ore di visualizzazione, così come i commenti, i like e via dicendo non vengono considerate come “spam”** o simili.",
      "A questo punto, però, entri “in gioco” anche tu. Per quanto possiamo fornirti tutte le garanzie del caso, consigliamo di **comprare ore di visualizzazione YouTube in modo “graduale”**, al fine di simulare la loro acquisizione come un processo puramente organico.",
      'Per certi versi, **uno dei “segreti” del Social Media Marketing è proprio questo, ossia la pazienza** e procedere passo dopo passo.'
    ],
    image: {
      src: "/Quanto costa comprare Visualizzazioni YouTube_ no background.png",
      alt: "Quanto costa comprare Visualizzazioni YouTube?",
    },
  },
  {
    title: "Comprare Mi Piace YouTube: le tempistiche di GlowLikes",
    content: [
    "Dopo aver visto come **comprare Like YouTube italiani e reali in pochi minuti**, sorge spontanea una nuova domanda, sempre legittima e azzeccata.",
    "**Quali sono le nostre tempistiche di consegna?** Starai, senz'altro, pensando: **“Ok, compro i Like oggi, ma quanto devo aspettare?”.**",
    "Beh, **tutto dipende da quale pacchetto hai scelto**. Di norma, più è alto il numero di Mi Piace comprati, maggiore sarà anche il tempo di consegna che, però, **non supera 3-4 giorni lavorativi.**",
    "In questo modo, infatti, **cerchiamo di simulare un'acquisizione organica**, senza destare inutili sospetti.",
    "Al contrario, **i pacchetti più economici riusciamo a consegnarli anche in poche ore**, a condizione che l'ordine non sia stato effettuato durante un giorno festivo.",
    "In ogni caso, **puoi monitorare la progressione dell’ordine dando uno sguardo al contatore** presente nella tua area personale GlowLikes."
  ],
    image: {
      src: "/Comprare Views YouTube è legale_ no background.png",
      alt: "Comprare Views YouTube è legale",
    },
  },
  {
    title: "Rilassati, comprare Mi Piace YouTube è perfettamente legale",
    content: [
    "Non hai nulla di cui preoccuparti, **dato che comprare Like su YouTube è un'attività perfettamente legale.**",
    "Non a caso, la compravendita di interazioni social è **uno dei tanti servizi offerti da regolari agenzie, che operano alla “luce del sole”**, proprio come noi di GlowLikes.",
    "Tra l'altro, offriamo pure tutte le garanzie del caso, **quindi, davvero, è tutto ok!** L'unico “punto oscuro”, se così lo vogliamo chiamare, sta nel fatto che si tratta di una pratica non ammessa dai termini e condizioni di YouTube.",
    "In altre parole, **si può comprare qualunque interazione**, a patto, però, di non venir “pizzicati” dai crawler della piattaforma.",
    "Qui, entriamo in gioco noi, dal momento che **siamo in possesso dei mezzi informatici grazie a cui possiamo erogare i Like in piena sicurezza **per il compratore finale.",
    "Insomma, **YouTube li scambia – a tutti gli effetti – per dei Mi Piace ottenuti in modo genuino.**",
    "Fatta luce anche su questa “spinosa” questione, vediamo subito **se anche per te è il caso di comprare Like YouTube.**"
  ],
    image: {
      src: "/Comprare Visualizzazioni YouTube_cosa non fare no background.png",
      alt: "Comprare Visualizzazioni YouTube_cosa non fare",
    },
  },
  {
    title: "Comprare Like YouTube: la verità che nessuno racconta",
    content: [
    "Probabilmente, anche a te è venuto da ridere quando, per la prima volta, sei venuto a sapere della possibilità di **comprare Mi Piace YouTube.**",
    "Come già brevemente accennato poco fa, **non lo si fa certo per il solo gusto di vantare dei numeri.** Anzi, in questo caso, l'ego non c'entra proprio nulla.",
    "Un conto è avere un canale YouTube per passione ma, ben altro, è **averne uno impiegato nell'ambito della propria attività** lavorativa.",
    "Di conseguenza, è **necessario che questo raggiunga determinate “performance”**, in modo da assicurare un ritorno economico.",
    "Chi lavora già in tale ambito **sa benissimo quanto le interazioni social rappresentino un forte indicatore** del successo di un canale.",
    "Il Social Media Marketing, dunque, è nato proprio per questo motivo, ovvero fornire quel **“know-how” necessario per raggiungere determinati obiettivi** con metodo e non solo grazie alla fortuna o all’infinita pazienza.",
    "Chiarito questo importante aspetto, ti starai domandando *come il comprare Like YouTube possa essere d'aiuto** in tutto ciò, vero? La domanda è più che legittima ma, prima, daremo la risposta ad un'altra. È legale tale attività?"
  ],
    image: {
      src: "/Comprare Visualizzazioni YouTube_cosa non fare no background.png",
      alt: "Comprare Visualizzazioni YouTube_cosa non fare",
    },
  },
  {
    title: "Comprare Mi Piace YouTube: non lasciamo mai soli i nostri clienti!",
    content: [
    "Questo è, indubbiamente, un altro nostro punto di forza, ma abbiamo preferito **riservargli un paragrafo a parte.**",
    "Quando parliamo di **comprare Like YouTube italiani e reali** non intendiamo qualcosa tipo le patate vendute “un tanto al chilo” al mercato.",
    "**Parliamo di un servizio completo** che, ovviamente, include anche l'assistenza clienti.",
    "Ammettiamo che, fino ad oggi, è successo molto di rado.",
    "Tuttavia, se noti che le interazioni acquistate dovessero tardare ad arrivare, **contatta il nostro Staff comunicando il numero** e gli altri estremi dell'ordine!",
    "In questo modo, **potremo risalire velocemente al problema** tecnico che ha causato il disservizio e quindi, risolverlo in men che non si dica.",
    "Non solo, se dovessi avere una situazione particolare e, dunque, necessitare di un servizio personalizzato, **scrivici pure parlandoci delle tue esigenze.**",
    "Vedrai, **troveremo sempre un punto di incontro** e, di sicuro, con noi riuscirai a raggiungere gli obiettivi che ti sei prefissato."
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
