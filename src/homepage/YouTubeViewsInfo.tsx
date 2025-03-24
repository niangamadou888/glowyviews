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
              Consegne super rapide
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
              Nel Social Media Marketing <strong> può capitare di ritrovarsi all'ultimo momento. </strong> Insomma, la “vita digitale” scorre velocissima e non sempre si riesce a stare al passo con le scadenze.
              </p>
              <p className="text-lg text-muted-foreground ">
              Abbiamo pensato anche a questo, non a caso <strong> i nostri tempi medi di consegna sono di poche ore. </strong> Esatto, hai capito benissimo!
              </p>
              <p className="text-lg text-muted-foreground">
              Ad esempio, <strong> se decidi di <a href="https://glowlikes.it/comprare-like-x/" className="mystyle">comprare Like X</a> in mattinata, di sicuro li ricevi tutti entro l'ora di pranzo </strong> o, mal che vada, il primo pomeriggio.
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
              Servizio di assistenza
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
              Infine, <strong> siamo tra le pochissime agenzie ad offrire un reale e valido servizio di assistenza </strong> clienti.
              </p>
              <p className="text-lg text-muted-foreground">
              Tuttavia, come avrai modo di constatare in prima persona,  <strong> difficilmente ne avrai bisogno </strong> perché lavoriamo sempre in modo impeccabile.
              </p>
              <p className="text-lg text-muted-foreground">
              Comunque sia, qualora dovesse sorgere un problema, <strong> ti basta aprire un ticket direttamente dalla tua area personale </strong> e attendere di essere ricontattato dal nostro Staff che provvederà ad una celere risoluzione.
              </p>
              <p className="text-lg text-muted-foreground">
              <strong>Ad ogni ordine viene assegnato un codice univoco, </strong> quindi non hai nulla di che temere in tal senso.
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