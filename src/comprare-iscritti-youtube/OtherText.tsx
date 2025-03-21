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
    title: "È legale comprare iscritti YouTube?",
    content: [
      'All"inizio avevamo già accennato alla questione, ma in questo paragrafo la affrontiamo nel dettaglio. Sì, **comprare follower YouTube è legale** e non comporta alcun rischio di carattere penale, civile o amministrativo.',
      'Quindi, stai pure tranquillo su questo fronte. Al tempo stesso, però, tieni presente che la **piattaforma appartiene a dei privati che possono imporre determinate “policy”.**',
      'Una di queste, prevede proprio la **messa al bando di tutti quei canali che hanno ottenuto interazioni social in modo non genuino.**',
      'In parole povere, **se vuoi comprare iscritti YouTube, fallo pure, ma senza farti beccare!** Certamente, rivolgersi ad agenzie come la nostra è il primo passo per fare le cose fatte bene.',
      'Nonostante ciò, ci sono altre azioni che puoi intraprendere per ridurre ulteriormente il rischio di essere “beccato” dai crawler di YouTube, a cominciare dalla **frequenza dei tuoi acquisti.**',
      'Trovi tutti i consigli utili nel prossimo sottoparagrafo.'
    ],
    image: {
      src: "/Comprare Views YouTube_dopo quanto tempo arrivano_ no background.png",
      alt: "Comprare Views YouTube_dopo quanto tempo arrivano",
    },
  },
  {
    title: "I rischi del comprare Follower YouTube senza una strategia",
    content: [
      "Se la piattaforma rileva attività sospette riconducibili al tuo canale, **vedrai che non ci metterà molto a notificarti i così detti “strike”.**",
      "In pratica, **sono degli avvertimenti che devi prendere assolutamente sul serio.** Infatti, ricevere diversi strike consecutivi ti espone al serio rischio di vedere il tuo canale cancellato.",
      "Sì, hai capito bene! Nessuno mette in dubbio che tu abbia investito tempo e fatica nella creazione dei video ma, avendoli caricati su YouTube, è lui che ha il “coltello dalla parte del manico”.",
      "Capisci bene che **se hai aperto un canale per avviare un business online**, non puoi certo permetterti che venga chiuso dall'oggi al domani.",
      'Tra i parametri vagliati di crawler per assegnare il grado di visibilità, **c"è anche la cosiddetta “anzianità” del canale.**',
      'Quindi, qualora venissi bannato, nessuno ti vieterebbe di aprire un nuovo canale. Peccato, però, che **sarebbe davvero dura ripartire da zero** e ottenere gli stessi numeri che si avevano prima.',
      'Senza contare il fatto che **anche l"URL del tuo canale sarà diverso.**'
    ],
    image: {
      src: "/Quanto costa comprare Visualizzazioni YouTube_ no background.png",
      alt: "Quanto costa comprare Visualizzazioni YouTube?",
    },
  },
  {
    title: "Comprare iscritti YouTube: ecco quanto costano",
    content: [
      "A seconda del pacchetto scelto, **comprare follower YouTube presso la nostra agenzia può andare da pochi centesimi,** fino a qualche centinaio di euro.",
      "Nel “mezzo”, comunque, **trovi anche tanti altri pacchetti con diversi importi progressivi**, quindi troverai sicuramente l'offerta più adatta alla tua situazione.",
      "Detto ciò, c'è un aspetto che vorremmo sottolineare, data la sua importanza. Più che di “costo” o di “prezzo” relativo al **comprare iscritti YouTube**, dovremmo parlare di “valore”.",
      "Infatti, **ciò che ti appresti a fare non è una “spesa” ma, bensì, un vero e proprio “investimento”** che, oltre a farti recuperare il capitale, ti consentirà pure di ottenere gli interessi.",
      "Ad ogni modo, come già ribadito in precedenza, **non comprare follower YouTube “a caso”**, dal momento che eventuali attività sospette vengono subito “adocchiate” dai crawler.",
      'Insomma, prendi in considerazione quei pacchetti il cui **numero di interazioni possa davvero simulare una sorta di “crescita” organica,** senza “aiutini” esterni.',
    ],
    image: {
      src: "/Comprare Views YouTube è legale_ no background.png",
      alt: "Comprare Views YouTube è legale",
    },
  },
  {
    title: "Comprare Follower YouTube italiani e reali troppo economici: conviene davvero?",
    content: [
      "Hai deciso di **comprare iscritti YouTube italiani e reali** e ti sono capitate sottomano diverse offerte “stracciate”? In tal caso, allora, è meglio evitare.",
      "Erogare tali servizi comporta, comunque, dei costi, **a cominciare dagli apparati informatici necessari per produrre materialmente le interazioni** destinate alla vendita.",
      'Ne abbiamo già parlato ma, data l"importanza di questo sottile aspetto, meglio ribadire il tutto “chiaro e forte”.',
      "Se non si adottano certe precauzioni, **i crawler di YouTube sono in grado di scovare i diversi indirizzi IP coinvolti** ed, eventualmente, individuare dei pattern comuni.",
      "Per sommi capi, **ricorda che qualsiasi bene o servizio è, in ogni caso, soggetto alle leggi del mercato,** quindi dei prezzi troppo bassi dovrebbe far sempre “rizzare le antenne”!",
      'Per carità, a volte può davvero trattarsi di un “affare d"oro”. In molti altri, però, **si tratta del solito “bidone” o “pacco”**, che dir si voglia.',
      'Inoltre, le agenzie che vendono interazioni social a prezzi stracciati, **solitamente non forniscono mai alcuna garanzia** in merito all"erogazione del servizio, a differenza nostra.',
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
