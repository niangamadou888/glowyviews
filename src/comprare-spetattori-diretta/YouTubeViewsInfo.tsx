import { motion } from "framer-motion";

const YouTubeViewsInfo = () => {
  return (
    <section className="relative w-full max-w-7xl mx-auto px-4 py-16 overflow-hidden">
  {/* Background Effect */}
  <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

  {/* Animated Glow */}
  <div className="absolute inset-0">
    <div className="absolute inset-0 bg-primary/10 blur-3xl animate-pulse" />
  </div>
      <div className="relative space-y-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ 
            duration: 0.4,
            ease: "easeOut",
            willChange: "transform, opacity"
          }}
          className="flex flex-col md:flex-row items-center gap-8 md:gap-16 group"
          style={{ 
            transform: "translateZ(0)",
            willChange: "transform"
          }}
        >
          {/* Content Section */}
          <div className="flex-1 relative p-4 md:p-8 rounded-lg backdrop-blur-sm border border-primary/20">
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-glow hover:animate-glow">
              GlowLikes: la migliore agenzia italiana dove comprare spettatori diretta YouTube
              </h2>

              {/* Image Section for mobile */}
              <div className="md:hidden mb-8">
                <div className="relative aspect-video rounded-xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-primary/20 animate-gradient" />
                  <img
                    src="/Tutti i vantaggi del comprare Visualizzazioni YouTube no background.png"
                    alt="Tutti i vantaggi del comprare Visualizzazioni YouTube"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
              </div>
              <p className="text-lg text-muted-foreground">
              <strong>Comprare spettatori diretta YouTube italiani e reali su GlowLikes</strong> è in assoluto la scelta migliore, in virtù dei punti di forza che ci contraddistinguono:
              </p>
              <p className="text-lg text-muted-foreground ">
              <strong>Rapporto qualità/prezzo:</strong> produrre e distribuire interazioni social di alta qualità ha, comunque, dei costi. Tuttavia, noi di GlowLikes possiamo fornirti quelle che hanno il miglior rapporto qualità/prezzo di tutto il mercato italiano.
              </p>
              <p className="text-lg text-muted-foreground">
              <strong>Praticità:</strong> qui su GlowLikes puoi comprare tutte le interazioni social che vuoi, in qualsiasi momento. Devo solo entrare nella tua area personale e andare diretto al nostro store online, sempre aperto e disponibile 24 ore su 24, 7 giorni su 7.
</p>
              <p className="text-lg text-muted-foreground">
              <strong>Affidabilità:</strong> consegniamo gli ordini con la massima puntualità e, nel caso ci sorgesse un qualsiasi problema, puoi sempre contattare il centro assistenza clienti per ricevere aiuto immediato. Tranquillo, a tutti gli ordini che piazzerai verrà assegnato un codice univoco, quindi avrai sempre un riscontro per ogni acquisto effettuato.
              </p>
            </div>
          </div>

          {/* Image Section for desktop */}
          <div className="flex-1 hidden md:block">
            <div className="relative aspect-video rounded-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-primary/20 animate-gradient" />
              <img
                src="/Tutti i vantaggi del comprare Visualizzazioni YouTube no background.png"
                alt="Tutti i vantaggi del comprare Visualizzazioni YouTube"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ 
            duration: 0.4,
            ease: "easeOut",
            willChange: "transform, opacity"
          }}
          className="flex flex-col md:flex-row items-center gap-8 md:gap-16 group"
          style={{ 
            transform: "translateZ(0)",
            willChange: "transform"
          }}
        >
          {/* Content Section */}
          <div className="flex-1 md:order-2 relative p-4 md:p-8 rounded-lg backdrop-blur-sm border border-primary/20">
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-glow hover:animate-glow">
              Cosa fare in aggiunta al comprare spettatori diretta YouTube
              </h2>

              {/* Image Section for mobile */}
              <div className="md:hidden mb-8">
                <div className="relative aspect-video rounded-xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-primary/20 animate-gradient" />
                  <img
                    src="/Per quali video si possono comprare Visualizzazioni YouTube_ no background.png"
                    alt="Per quali video si possono comprare Visualizzazioni YouTube?"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
              </div>
              <p className="text-lg text-muted-foreground">
              Ecco cosa fare quando <strong>comprare spettatori diretta YouTube</strong> non basta:
              </p>
              <p className="text-lg text-muted-foreground">
              <strong>Migliora la qualità audio-video:</strong> la creatività è un fattore essenziale ma, al tempo stesso, anche la qualità audio-video non è da sottovalutare. Per quanto il contenuto in sé possa essere interessante, immagina di fare una diretta in cui gli utenti sentono male e/o appari in video a scatti. In questi casi, non c'è da stupirsi se nessuno ti segue.
              </p>
              <p className="text-lg text-muted-foreground">
              <strong>Prova diversi formati:</strong> le dirette non vanno alla grande? Allora prova a “stuzzicare” l'interesse del tuo target pubblicando, magari, qualche Shorts. Sono l'ideale per condensare argomenti complessi in pochi secondi e, dunque, intercettare i possibili interessati a seguire una diretta. A proposito, <strong>da noi puoi pure</strong> <a href="https://socialx.it/comprare-visualizzazioni-e-like-youtube-shorts" className="mystyle">comprare visualizzazioni e like YouTube Shorts</a>, nel caso volessi spingere anche su questo “fronte”.
              </p>
              <p className="text-lg text-muted-foreground">
              <strong>Crea un piano editoriale:</strong> dare una certa regolarità alla pubblicazione dei propri contenuti è, senz'altro, un ottimo sistema per ottenere follower “organici”. A maggior ragione, ciò vale per le dirette. A tal proposito, devi assicurarti che il tuo target sia effettivamente disponibile a seguirti. Quindi, non è solo importante scegliere con cura il giorno della settimana, ma bisogna anche individuare l'orario più adatto.
              </p>
              <p className="text-lg text-muted-foreground">
              <strong>Sfrutta le collaborazioni:</strong> infine, un altro metodo per acquisire follower e altre interazioni in modo organico è quello di collaborare con altri YouTuber, magari ritenuti più visibili e “autorevoli”. Trattando argomenti affini, vedrai che qualcuno dei suoi follower inizierà a seguire pure te.
              </p>

            </div>
          </div>

          {/* Image Section for desktop */}
          <div className="flex-1 md:order-1 hidden md:block">
            <div className="relative aspect-video rounded-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-primary/20 animate-gradient" />
              <img
                src="/Per quali video si possono comprare Visualizzazioni YouTube_ no background.png"
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

export default YouTubeViewsInfo;