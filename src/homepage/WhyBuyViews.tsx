import { motion } from "framer-motion";

const WhyBuyViews = () => {
  return (
    <section className="relative w-full max-w-7xl mx-auto px-4 py-16 overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

      {/* Animated Glow */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-primary/10 blur-3xl animate-pulse" />
      </div>

      <div className="relative space-y-24">
        {/* First Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-center gap-8 md:gap-16 group"
        >
          <div className="flex-1 relative p-4 md:p-8 rounded-lg backdrop-blur-sm border border-primary/20">
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-glow hover:animate-glow">
              Perché i nostri Like, Follower e Views sono i migliori
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
              Arrivati a questo punto, siamo sicuri che <strong> stai pensando: “Non siete mica gli unici, in giro ci sono anche altre agenzie... perché dovrei scegliere voi?”.</strong>
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              Assolutamente sì, al momento c'è una buona dose di offerta, ma... <strong> non sempre è tutto oro ciò che luccica! </strong> </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              Prima di tutto, <strong> bisogna vedere cosa offrono e a che prezzo. </strong> In secondo luogo, poi, anche la qualità del servizio nel suo complesso ha la sua importanza.</p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              Quindi, ecco i <strong> nostri punti forza che ci rendono unici </strong> in tutto e per tutto:</p>
            </div>
          </div>

          {/* Image Section for desktop */}
          <div className="flex-1 hidden md:block">
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
          transition={{ 
            duration: window.innerWidth > 768 ? 0.4 : 0,
            ease: "easeOut",
            willChange: "transform, opacity"
          }}
          className="flex flex-col md:flex-row items-center gap-8 md:gap-16 group"
          style={{ 
            transform: "translateZ(0)",
            willChange: "transform"
          }}
        >
          <div className="flex-1 md:order-2 relative p-4 md:p-8 rounded-lg backdrop-blur-sm border border-primary/20">
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-glow hover:animate-glow">
              Prodotti di alta qualità
              </h2>

              {/* Image Section for mobile */}
              <div className="md:hidden mb-8">
                <div className="relative aspect-video rounded-xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-primary/20 animate-gradient" />
                  <img
                    src="/Perche_comprare_Visualizzazioni_YouTube_da_noi_su_glowlikes_no_background.png"
                    alt="Perché comprare Visualizzazioni YouTube da noi su glowlikes"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed">
              L'acquisto di interazioni è un investimento a tutti gli effetti. <strong> Che senso avrebbe offrire dei prodotti di scarsa qualità che verrebbero subito rilevati e cancellati </strong>dagli algoritmi? Nessuno, ovviamente.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              Di conseguenza abbiamo <strong> deciso di puntare alla qualità.</strong>
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              Ad esempio <strong> nel nostro store online puoi <a href="https://glowlikes.it/comprare-follower-instagram/" className="mystyle">comprare follower Instagram</a> reali e verificati, </strong>in  tutto e per tutto identici a quelli di carattere puramente organico.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              <strong> Nessuno si accorgerà del tuo investimento, </strong>nemmeno i seguaci “in carne ed ossa”.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              Lo stesso, ovviamente,  <strong> vale anche nel caso volessi <a href="https://glowlikes.it/comprare-iscritti-youtube/" className="mystyle">comprare iscritti YouTube</a>, Facebook o qualsiasi altro nostro prodotto.</strong>
              </p>
            </div>
          </div>

          {/* Image Section for desktop */}
          <div className="flex-1 md:order-1 hidden md:block">
            <div className="relative aspect-video rounded-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-primary/20 animate-gradient" />
              <img
                src="/Perche_comprare_Visualizzazioni_YouTube_da_noi_su_glowlikes_no_background.png"
                alt="Perché comprare Visualizzazioni YouTube da noi su glowlikes"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>
        </motion.div>

        {/* First Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-center gap-8 md:gap-16 group"
        >
          <div className="flex-1 relative p-4 md:p-8 rounded-lg backdrop-blur-sm border border-primary/20">
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
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
          <div className="flex-1 hidden md:block">
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

        
      </div>
    </section>
  );
};

export default WhyBuyViews;
