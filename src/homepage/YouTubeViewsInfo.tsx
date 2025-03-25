import { motion } from "framer-motion";

const YouTubeViewsInfo = () => {
  return (
    <section className="relative w-full max-w-7xl mx-auto px-4 py-24 overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-primary/10 to-background" />

      {/* Updated Animated Glow */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-primary/5 blur-[100px] animate-pulse" />
      </div>

      <div className="relative space-y-32">
        {/* First Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ 
            duration: window.innerWidth > 768 ? 0.4 : 0,
            ease: "easeOut"
          }}
          className="flex flex-col md:flex-row items-center gap-12 md:gap-24 group"
        >
          <div className="flex-1 md:order-2 relative p-6 md:p-10 rounded-2xl bg-black/20 backdrop-blur-lg border border-white/10 shadow-2xl">
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/20 via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl" />
            <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-glow hover:animate-glow">
              Interazioni geo-targettizzate
              </h2>

              {/* Image Section for mobile */}
              <div className="md:hidden mb-8">
                <div className="relative aspect-video rounded-xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-primary/20 animate-gradient" />
                  <img
                    src="/Comprare Visualizzazioni YouTube_per quale motivo_ no background.png"
                    alt="Comprare Visualizzazioni YouTube_per quale motivo"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed">
              Se sei arrivato nella nostra agenzia, <strong> significa che hai bisogno di interazioni social geo-targettizzate, </strong>ossia quelle provenienti dall'Italia.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              Qualcosa ci dice che <strong> hai già provato con quelle generiche, </strong>salvo ottenere pessimi risultati.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              Beh, <strong> non c'è nulla di cui stupirsi.  </strong> Sono finiti i tempi in cui, per diventare popolare, bastavano anche i bot provenienti da chissà dove.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              Oggi la situazione è ben diversa. Quindi, se vuoi diventare un punto di riferimento per la community italiana, <strong> prova a <a href="https://glowlikes.it/comprare-condivisioni-facebook/" className="mystyle">comprare condivisioni Facebook</a> italiane e constata tu stesso la differenza. </strong>
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              E ancora, <strong> perché non <a href="https://glowlikes.it/comprare-commenti-tiktok/" className="mystyle">comprare commenti TikTok</a> reali? </strong> Si tratta di un'altra tipologia di interazioni da non sottovalutare.
              </p>
            </div>
          </div>

          {/* Image Section for desktop */}
          <div className="flex-1 md:order-1 hidden md:block">
            <div className="relative aspect-video rounded-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-primary/20 animate-gradient" />
              <img
                src="/Comprare Visualizzazioni YouTube_per quale motivo_ no background.png"
                alt="Comprare Visualizzazioni YouTube_per quale motivo"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>
        </motion.div>

        {/* Second Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="flex flex-col md:flex-row items-center gap-8 sm:gap-12 md:gap-24 group"
        >
          <div className="flex-1 relative p-4 sm:p-6 md:p-10 rounded-xl sm:rounded-2xl bg-black/20 backdrop-blur-lg border border-white/10 shadow-2xl w-full">
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/20 via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl" />
            <div className="relative z-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-16 text-glow hover:animate-glow">
                Consegne super rapide
              </h2>

              {/* Image Section for mobile */}
              <div className="md:hidden mb-6 sm:mb-8">
                <div className="relative aspect-video rounded-lg sm:rounded-xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-primary/20 animate-gradient" />
                  <img
                    src="/Tutti i vantaggi del comprare Visualizzazioni YouTube no background.png"
                    alt="Tutti i vantaggi del comprare Visualizzazioni YouTube"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
              </div>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
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

          {/* Image Section for desktop - similar changes for other sections */}
          <div className="flex-1 hidden md:block">
            <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg sm:shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-primary/20 animate-gradient" />
              <img
                src="/Tutti i vantaggi del comprare Visualizzazioni YouTube no background.png"
                alt="Tutti i vantaggi del comprare Visualizzazioni YouTube"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>
        </motion.div>

        {/* Third Section - Apply same changes as above */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="flex flex-col md:flex-row items-center gap-12 md:gap-24 group"
        >
          <div className="flex-1 md:order-2 relative p-6 md:p-10 rounded-2xl bg-black/20 backdrop-blur-lg border border-white/10 shadow-2xl">
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/20 via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl" />
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
          <div className="flex-1 hidden md:block">
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