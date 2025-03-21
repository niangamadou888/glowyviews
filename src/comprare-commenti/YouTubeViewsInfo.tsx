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
              Alcuni consigli per scrivere commenti YouTube efficaci
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
              Comprare i commenti YouTube è solo il primo passo, dal momento che occorre anche che siano realizzati tenendo conto di queste “Best Practice”:
              </p>
              <p className="text-lg text-muted-foreground ">
              <strong>Stile e toni consoni:</strong> ogni commento commissionato deve presentare, per l'appunto, un tono e uno stile consono al topic trattato nel video, così come al tuo target. Ad esempio, se tratti temi “leggeri”, evita di scrivere in modo formale da “boomer”.
              </p>
              <p className="text-lg text-muted-foreground">
              <strong>Brevità:</strong> ricorda, i tuoi commenti devono essere come una sorta di “scintilla”, ovvero spingere altri utenti a rispondere, oppure a lasciare un nuovo commento al video.
</p>
              <p className="text-lg text-muted-foreground">
              <strong>Imparzialità:</strong> non scrivere commenti in cui ti “auto-celebri” perché, altrimenti, verresti subito “beccato” dagli altri utenti e faresti solo una figura patetica.
              </p>
              <p className="text-lg text-muted-foreground">
              <strong>Inserisci domande:</strong> nella comunicazione in generale, le domande hanno un forte potere perché lasciano la conversazione aperta. Sfruttale a tuo vantaggio dunque, in modo da stimolare una qualsivoglia reazione da parte di chi vede il video e legge i commenti. Nessuno ti vieta, poi, di inserire delle domande con un leggero “tono provocatorio”.
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
              Non comprare commenti YouTube da rivenditori di dubbia serietà
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
              <strong>Comprare commenti YouTube è del tutto sicuro,</strong> a patto di rivolgersi ad agenzie come la nostra. Infatti, c'è sempre il rischio di incorrere in:
              </p>
              <p className="text-lg text-muted-foreground">
              <strong>Truffe vere e proprie:</strong> ti sarai già, senz'altro, reso conto del fatto che a noi non servono certo i dati sensibili del tuo canale per erogare il nostro servizio. A tal proposito, in giro per la rete ci sono truffatori che, sfruttando l'ignoranza dei malcapitati, raccolgono dati sensibili utilizzando come “copertura” proprio l'erogazione di servizi di Social Media Marketing.
              </p>
              <p className="text-lg text-muted-foreground">
              <strong>Interazioni sospette:</strong> in questo caso, potrebbero venirti effettivamente recapitati i commenti che hai comprato. Peccato, però, che proverebbero da “bot” già “schedati” dai crawler di YouTube. Di conseguenza, il tuo video potrebbe subire delle sgradite penalizzazioni, dal momento che verrebbe identificata da YouTube come pratica non contemplata dalla sua policy. Nel casi peggiori, però, potresti “giocarti” persino la chiusura definitiva del canale. Quindi, è inutile rischiare quando puoi affidarti a noi di GlowLikes senza pensieri.
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