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
    title: "Comprare commenti YouTube: amatori Vs professionisti",
    content: [
      "Prima di esaminare nel dettaglio tutti i risvolti attinenti il **comprare commenti YouTube reali ed italiani,** vogliamo fare una riflessione di carattere generale.",
  "All'interno del social in questione c'è un po' di tutto.",
  "Ci sono **coloro che lo utilizzano come “hobby”**, così come ci sono quelli che lo usano per lavorare, ma anche chi fa “50 e 50” (magari per ottenere solo una seconda entrata mensile).",
  "Capisci bene, dunque, che, nell'ambito di un'attività lavorativa in cui magari sono stati pure investiti dei capitali, non ci si può certo **permettere il “lusso” di attendere le tempistiche “fisiologiche”** di YouTube.",
  "Insomma, **l'approccio cambia in base proprio all'utilizzo** che se ne deve fare.",
  "Ecco perché i professionisti (cioè coloro che lavorano sulla piattaforma) sono **soliti ricorrere a determinate tecniche di Social Media Marketing.**",
  "È solo **grazie ad esse che si può “programmare” la propria attività** e, dunque, fissare sia gli obiettivi a breve, che a lungo termine."
],
    image: {
      src: "/Comprare Views YouTube_dopo quanto tempo arrivano_ no background.png",
      alt: "Comprare Views YouTube_dopo quanto tempo arrivano",
    },
  },
  {
    title: "Comprare commenti YouTube: “accendi” la miccia tra i tuoi follower",
    content: [
     "Tra tutte le diverse interazioni social, **comprare commenti YouTube può essere proprio la “miccia” in grado di accendere** la partecipazione dei tuoi follower o, più in generale, di chiunque possa essere interessato ai tuoi contenuti.",
  "Infatti, generalmente, **i commenti portano sempre ad un dibattito.**",
  "C'è chi la pensa in un modo, così come c'è chi la pensa in maniera completamente opposta.",
  "Per quanto possa far piacere ricevere ammirazione ed apprezzamento, **anche i commenti negativi possono comunque giocare a favore** del creator.",
  "Più se ne ricevono, **più il video e il canale vengono “movimentati”.**",
  "Senza contare il fatto che, comprando e postando i commenti giusti, **puoi “scatenare” una vera e propria “tempesta” di risposte** che, alla fine, altro non faranno che aumentare le possibilità di ottenere una migliore visibilità.",
  "Ora che hai compreso questi aspetti di carattere generale, probabilmente ti saranno venute in mente delle **domande più che legittime, come, ad esempio: “Posso comprare commenti YouTube anche per i miei video?”.**"
],
    image: {
      src: "/Quanto costa comprare Visualizzazioni YouTube_ no background.png",
      alt: "Quanto costa comprare Visualizzazioni YouTube?",
    },
  },
  {
    title: "Perché comprare commenti YouTube è perfettamente legale",
    content: [
      "A dispetto di tutte le fake news che circolano in rete, **comprare commenti YouTube è assolutamente legale**, dato che si tratta di un regolare servizio, erogato come tanti altri da agenzie specializzate.",
  "Infatti, qui in Europa, così come negli States e in tantissimi altri paesi del mondo, **non c'è alcuna norma penale che vieti la compravendita di interazioni social.**",
  "Pertanto, **non crearti dei problemi dove, sicuramente, non ci sono!**",
  "Certo, in alcuni casi ci si può imbattere in delle truffe ma, di questo, ne parleremo nella parte conclusiva.",
  "Insomma, ci sono in tutti settori, quindi **è ovvio che possano accadere anche nel contesto del Social Media Marketing.**",
  "Al tempo stesso, però, c'è un altro fattore da tenere conto.",
  "Infatti, **si tratterebbe di una pratica non ammessa dai termini e dalle condizioni di YouTube.**",
  "Di conseguenza, è importantissimo **prestare la massima attenzione ad alcuni dettagli che discuteremo nel prossimo sottoparagrafo.**"
],
    image: {
      src: "/Comprare Views YouTube è legale_ no background.png",
      alt: "Comprare Views YouTube è legale",
    },
  },
  {
    title: "La strategia da delineare prima di comprare commenti YouTube",
    content: [
    "Sicuramente avrai già **deciso di comprare commenti YouTube italiani e reali ma, prima di farlo, verifica alcuni parametri** relativi ai tuoi video.",
  "Di media, quanti commenti presentano?",
  "E ancora, qual è la loro natura?",
  "**Bisogna distinguere dai soliti: “Bravo”, “Grazie” e via dicendo, da quelli un po' più elaborati.**",
  "Perché è necessario avere queste risposte?",
  "Per prima cosa, **conoscere la media degli attuali commenti è l'unico modo per stabilire quanti comprarne.**",
  "Dopodiché, è importantissimo studiare la loro natura, proprio per **decidere quale “taglio” dare a quelli che comprerai** e che ti farai recapitare.",
  "Se scritti in modo efficace, vedrai che, oltre a movimentare i video sotto il profilo delle interazioni ricevute, **i commenti fungeranno anche da “moltiplicatore”.**",
  "Ciò accade proprio perché **viene “intavolata” una discussione** che, giorno dopo giorno, attirerà nuovi utenti che vi vogliono partecipare.",
  "Ci siamo! Abbiamo affrontato **tutti gli aspetti che riguardano questa branca del Social Media Marketing**, quindi non ci resta altro da fare che “passare al sodo”."
],
    image: {
      src: "/Comprare Visualizzazioni YouTube_cosa non fare no background.png",
      alt: "Comprare Visualizzazioni YouTube_cosa non fare",
    },
  },
  {
    title: "Comprare commenti YouTube è sicuro?",
    content: [
    "Dal momento che, come già chiarito in precedenza, **è una pratica del tutto legale, non c'è alcun rischio!**",
  "Inoltre, **con noi di GlowLikes non corri nemmeno il rischio** che il tuo canale venga penalizzato.",
  "Non siamo mica “nati ieri”, quindi **gli account che materialmente postano i commenti da te comprati non sono riconducibili a noi.**",
  "Magari non ne hai mai sentito parlare, ma **esistono diversi software in grado di generare nuovi indirizzi IP** che corrispondono – grosso modo – a dei nuovi utenti della rete, pur non essendoci dietro a loro alcun umano “in carne ed ossa”.",
  "Tranquillo, ti risparmiamo i dettagli tecnici, ma ci tenevamo a rassicurarti sul fatto che **con noi puoi andare sul sicuro**, anche perché forniamo tutte le garanzie del caso.",
  "Ad ogni modo, approfittiamo di questa parentesi per metterti in guardia dai **problemi in cui si può incappare quando ci si rivolge a rivenditori di dubbia serietà.**"
],
    image: {
      src: "/Comprare Visualizzazioni YouTube_cosa non fare no background.png",
      alt: "Comprare Visualizzazioni YouTube_cosa non fare",
    },
  },
  {
    title: "Non basta solo comprare commenti YouTube!",
    content: [
    "Siccome **noi di GlowLikes siamo professionali e ci teniamo davvero ai nostri clienti,** ecco alcuni consigli pratici da mettere in pratica **nel caso comprare commenti YouTube non desse i risultati sperati.**",
  "Francamente, a noi non interessa vendere tanto per guadagnare, perché **vogliamo davvero che i nostri clienti ricevano un valido aiuto** e riescano, dunque, a risolvere i loro problemi.",
  "Tornando a noi, **comprare commenti YouTube può essere sì una valida soluzione**, a patto che, parallelamente, venga pure condotta l'attività editoriale secondo certi criteri.",
  "Dai, parliamoci chiaro. **Se carichi video fatti male, è ovvio che nessuno ti lascerà mai dei commenti positivi** e costruttivi.",
  "Al massimo, potresti beccarti qualche insulto da parte dei soliti “hater” che non vedono l'ora di trovare qualcuno su cui sfogare le loro frustrazioni.",
  "**Qualità, certamente, ma anche quantità!** Per carità, non devi mica caricare decine e decine di video alla settimana.",
  "Almeno, però, pubblica con regolarità, in modo da **instaurare una sorta di appuntamento fisso con il tuo target.**",
  "Infine, lascia da parte la timidezza e, nel corso del video, **chiedi direttamente ed esplicitamente che ti venga lasciato un commento o qualsiasi altra interazione!**"
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
