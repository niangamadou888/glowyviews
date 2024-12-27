import { Card, CardContent } from "@/components/ui/card";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

const OtherText = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    damping: 30,
    stiffness: 100,
    mass: 0.5,
  });

  const sections = [
    { start: 0, end: 0.25 },
    { start: 0.25, end: 0.5 },
    { start: 0.5, end: 0.75 },
    { start: 0.75, end: 1 },
  ];

  return (
    <section ref={containerRef} className="w-full max-w-7xl mx-auto px-4 py-16">
      <div className="space-y-24">
        {/* First Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col md:flex-row items-start gap-8 md:gap-16 relative pl-8"
        >
          <div className="absolute left-0 top-0 h-[104%] w-full">
            <motion.svg
              width="100%"
              height="100%"
              viewBox="0 0 50 103"
              preserveAspectRatio="none"
              className="absolute left-0 top-0 animate-glow"
            >
              <motion.path
                d={
                  typeof window !== "undefined" && window.innerWidth < 768
                    ? "M0 0 L0 103 L25 103"
                    : "M0 0 L0 101 L25 101"
                }
                fill="none"
                strokeWidth="0.5"
                stroke="url(#gradient)"
                strokeLinecap="round"
                strokeMiterlimit="1"
                strokeLinejoin="round"
                style={{
                  opacity: useTransform(
                    smoothProgress,
                    [sections[0].start, sections[0].end],
                    [0, 1]
                  ),
                  pathLength: useTransform(
                    smoothProgress,
                    [sections[0].start, sections[0].end],
                    [0, 1]
                  ),
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
          {/* Content Section */}
          <div className="flex-1 relative">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-glow hover:animate-glow">
              Comprare Views YouTube: dopo quanto tempo arrivano?
            </h2>
            <p className="text-lg text-white/90 mb-4">
              Come già brevemente accennato, una volta{" "}
              <strong>comprate le visualizzazioni YouTube</strong>, queste
              “arrivano” sul tuo video nel giro di qualche giorno lavorativo.{" "}
              <br />
            </p>
            <p className="text-lg text-white/90 mb-4">
              Chiaramente, non possiamo dare delle tempistiche precise
              generalizzate, dal momento che{" "}
              <strong>ogni ordine è da considerarsi un “caso a sé”.</strong>
            </p>
            <p className="text-lg text-white/90 mb-4">
              Ad esempio, se hai deciso di{" "}
              <strong>comprare visualizzazioni YouTube italiane e reali</strong>{" "}
              incluse nei pacchetti meno “corposi” (quindi, sulle 100, 200 Views
              al colpo), puoi tranquillamente ottenerle nel giro di poche ore.
              <br />
              Al contrario,{" "}
              <strong>
                per i pacchetti che ne comprendono migliaia, ci prendiamo
                qualche giorno
              </strong>
              . Da un lato, il tempo ci serve per erogare “materialmente”
              l'ordine.
            </p>
            <p className="text-lg text-white/90">
              Dall'altro, invece,{" "}
              <strong>
                “spalmare” queste interazioni nel corso di diversi giorni
              </strong>{" "}
              è il modo migliore per farle passare come acquisite in modo
              organico. <br />
              Quindi, riassumendo, le nostre{" "}
              <strong>
                tempistiche di consegna variano sempre in base all'entità
              </strong>{" "}
              dell'ordine. <br />
              In ogni caso, per eventuali dubbi o perplessità legati
              all'acquisto,{" "}
              <strong>
                c'è sempre il nostro servizio assistenza clienti
              </strong>{" "}
              pronto a darti tutti i chiarimenti e specifiche che desideri.{" "}
              <br />
            </p>
          </div>

          {/* Image Section */}
          <div className="flex-1 md:self-start">
            <div className="relative aspect-video rounded-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-primary/20 animate-gradient" />
              <img
                src="YouTube-Thumbnail_1.webp"
                alt="Tutti i vantaggi del comprare Visualizzazioni YouTube"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>
        </motion.div>

        {/* Second Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col md:flex-row items-center gap-8 md:gap-16 relative pr-8 md:pl-8"
        >
          <div className="absolute right-0 top-0 h-[107%] w-full md:left-0">
            <motion.svg
              width="100%"
              height="100%"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              className="absolute right-0 top-0 md:left-0 animate-glow"
            >
              <motion.path
                d="M100 0 L100 95 L50 95"
                fill="none"
                strokeWidth="0.7"
                stroke="url(#gradient)"
                strokeLinecap="round"
                opacity={useTransform(
                  smoothProgress,
                  [sections[1].start, sections[1].end],
                  [0, 1]
                )}
                style={{
                  pathLength: useTransform(
                    smoothProgress,
                    [sections[1].start, sections[1].end],
                    [0, 1]
                  ),
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

          {/* Content Section */}
          <div className="flex-1 relative md:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-glow hover:animate-glow">
              Quanto costa comprare Visualizzazioni YouTube?
            </h2>
            <p className="text-lg text-white/90 mb-4">
              Come hai già intuito,{" "}
              <strong>
                comprare views YouTube italiane e reali può avere un costo
                variabile
              </strong>
              , a seconda del pacchetto selezionato. <br />
            </p>
            <p className="text-lg text-white/90 mb-4">
              Se fai un giro nella sezione specifica dedicata agli acquisti,{" "}
              <strong>noterai che te ne proponiamo di diversi</strong>,
              organizzati secondo un ordine progressivo.
            </p>
            <p className="text-lg text-white/90 mb-4">
              In particolare, dunque, puoi{" "}
              <strong>
                comprare visualizzazioni YouTube partendo da 2-3 euro, fino ad
                arrivare a diverse centinaia
              </strong>{" "}
              per quelli più corposi. <br />
              Ovviamente,{" "}
              <strong>
                sei sempre tu a decidere l'entità dei tuoi acquisti
              </strong>
              , semplicemente scegliendo il pacchetto che ritieni più opportuno
              per quella che è la tua situazione.
            </p>

            <p className="text-lg text-white/90 mb-4">
              Per chiudere questo breve paragrafo, vorremmo{" "}
              <strong>
                darti qualche consiglio in merito agli investimenti più
                importanti.
              </strong>
            </p>

            <p className="text-lg text-white/90 mb-4">
              Naturalmente, più è corposo il pacchetto, minore è il prezzo
              dell'interazione “cadauna”. Quindi, nel caso te ne servissero
              parecchie,{" "}
              <strong>
                fai un unico grosso ordine, senza comprare pacchetti di media
                entità
              </strong>{" "}
              di volta in volta.
            </p>

            <p className="text-lg text-white/90">
              In caso,{" "}
              <strong>
                puoi sempre accordarti con il nostro Staff per una consegna
                “diluita”
              </strong>{" "}
              nel tempo, proprio evitare ciò di cui parliamo nel paragrafo
              successivo.
            </p>
          </div>

          {/* Image Section */}
          <div className="flex-1 md:order-1">
            <div className="relative aspect-video rounded-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-primary/20 animate-gradient" />
              <img
                src="cf948d2f-adf9-4327-889d-4606e6185e72.jpeg"
                alt="Per quali video si possono comprare Visualizzazioni YouTube?"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>
        </motion.div>

        {/* Third Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col md:flex-row items-start gap-8 md:gap-16 relative pl-8"
        >
          <div className="absolute left-0 top-0 h-[107%] w-full ">
            <motion.svg
              width="100%"
              height="100%"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              className="absolute left-0 top-0 animate-glow"
            >
              <motion.path
                d="M0 0 L0 95 L50 95"
                fill="none"
                strokeWidth="0.7"
                stroke="url(#gradient)"
                strokeLinecap="round"
                opacity={useTransform(
                  smoothProgress,
                  [sections[2].start, sections[2].end],
                  [0, 1]
                )}
                style={{
                  pathLength: useTransform(
                    smoothProgress,
                    [sections[2].start, sections[2].end],
                    [0, 1]
                  ),
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
          {/* Content Section */}
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-glow hover:animate-glow">
              Comprare Views YouTube è legale?
            </h2>
            <p className="text-lg text-white/90 mb-4">
              Sì, <strong>comprare visualizzazioni YouTube è sicuro</strong>{" "}
              perché è una pratica perfettamente legale sia in Italia, che negli
              altri paesi del mondo. <br />
            </p>
            <p className="text-lg text-white/90 mb-4">
              Di conseguenza,{" "}
              <strong>
                ricorre a tali servizi non ti espone ad alcun problema
              </strong>{" "}
              nei confronti delle Istituzioni.
            </p>
            <p className="text-lg text-white/90 mb-4">
              Al tempo stesso, però,{" "}
              <strong>c'è un aspetto di vitale importanza</strong> di cui devi
              tenere conto. <br />
              Infatti, sebbene sia una pratica legale, il{" "}
              <strong>
                comprare views YouTube o, più in generale, “manipolare”
                l'acquisizione di ogni interazione social
              </strong>
              , non è ammesso dai termini e condizioni della piattaforma.
            </p>

            <p className="text-lg text-white/90 mb-4">
              Ecco perché{" "}
              <strong>
                non bisogna mai effettuare acquisti del genere alla leggera
              </strong>{" "}
              ma, anzi, pianificare una strategia efficace.
            </p>

            <p className="text-lg text-white/90 mb-4">
              Per certi versi, lo{" "}
              <strong>
                stesso numero di interazioni comprate può dare risultati diversi
              </strong>{" "}
              proprio a seconda di come vengono gestite.
            </p>
            <p className="text-lg text-white/90 mb-4">
              Il “segreto” del successo sta proprio nel{" "}
              <strong>
                far passare le acquisizioni come una “conseguenza organica”
              </strong>{" "}
              della tua attività di YouTuber.
            </p>
            <p className="text-lg text-white/90">
              Insomma, sarebbe come dire ai crawler della piattaforma:{" "}
              <strong>
                “Ehi! Guarda che mi arrivano tante visualizzazioni perché carico
                ottimi contenuti e piaccio al pubblico!”.
              </strong>
            </p>
          </div>

          {/* Image Section */}
          <div className="flex-1">
            <div className="relative aspect-video rounded-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-primary/20 animate-gradient" />
              <img
                src="trueview.webp"
                alt="Tutti i vantaggi del comprare Visualizzazioni YouTube"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>
        </motion.div>

        {/* Fourth Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col md:flex-row items-center gap-8 md:gap-16 relative pr-8 md:pl-8"
        >
          <div className="absolute right-0 top-0 h-[107%] w-full md:left-0">
            <motion.svg
              width="100%"
              height="100%"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              className="absolute right-0 top-0 md:left-0 animate-glow"
            >
              <motion.path
                d="M100 0 L100 95 L50 95"
                fill="none"
                strokeWidth="0.7"
                stroke="url(#gradient)"
                strokeLinecap="round"
                opacity={useTransform(
                  smoothProgress,
                  [sections[3].start, sections[3].end],
                  [0, 1]
                )}
                style={{
                  pathLength: useTransform(
                    smoothProgress,
                    [sections[3].start, sections[3].end],
                    [0, 1]
                  ),
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
          {/* Content Section */}
          <div className="flex-1 md:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-glow hover:animate-glow">
              Comprare Visualizzazioni YouTube: cosa non fare
            </h2>
            <p className="text-lg text-white/90 mb-4">
              Se hai deciso di <strong>comprare views YouTube</strong>, ricorda
              che l'unica cosa che non devi fare è proprio quella di esagerare.
              <br />
            </p>
            <p className="text-lg text-white/90 mb-4">
              Ci rimetteresti solo i soldi investiti nell'acquisto. Infatti,{" "}
              <strong>
                ogni attività anomala viene rilevata dal sistema di crawling
              </strong>{" "}
              e strettamente monitorata.
            </p>
            <p className="text-lg text-white/90 mb-4">
              Cosa intendiamo per “attività anomala”? Ad esempio,{" "}
              <strong>
                400mila o 500mila views YouTube arrivate in un paio di giorni
              </strong>
              , su un canale aperto settimana scorsa e con soli 2 video
              caricati, pure di dubbia qualità. <br />
              Ecco, devi evitare proprio questo. Naturalmente,{" "}
              <strong>tutti devono prestare la massima attenzione</strong>,
              anche chi ha canali ben avviati.
            </p>
            s
            <p className="text-lg text-white/90 mb-4">
              Come già consigliato poco fa, se vuoi{" "}
              <strong>
                comprare visualizzazioni YouTube reali ed italiane in quantità
                elevata
              </strong>
              , mettiti d'accordo con il nostro Staff per poterli ricevere un
              po' alla volta e non destare sospetti.
            </p>
            <p className="text-lg text-white/90">
              A tal proposito, ti{" "}
              <strong>
                consigliamo pure di realizzare una sorta di “scaletta”
              </strong>
              , proprio per programmare l'erogazione delle interazioni, al fine
              di renderle più genuine possibili.
            </p>
          </div>

          {/* Image Section */}
          <div className="flex-1 md:order-1">
            <div className="relative aspect-video rounded-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-primary/20 animate-gradient" />
              <img
                src="Come-guadagnare-su-YouTube-Quello-che-devi-sapere.jpg"
                alt="Per quali video si possono comprare Visualizzazioni YouTube?"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OtherText;
