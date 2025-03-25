import { motion } from "framer-motion";

const WhyBuyViews = () => {
  return (
    <section className="relative w-full max-w-7xl mx-auto px-4 py-16 sm:py-24 overflow-hidden">
      {/* Background effects remain the same */}

      <div className="relative space-y-16 sm:space-y-24 md:space-y-32">
        {/* First Section */}
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
              Perché i nostri Like, Follower e Views sono i migliori
              </h2>

              {/* Mobile image section */}
              <div className="md:hidden mb-6 sm:mb-8">
                <div className="relative aspect-video rounded-lg sm:rounded-xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-primary/20 animate-gradient" />
                  <img
                    src="/Comprare Visualizzazioni YouTube_per quale motivo_ no background.png"
                    alt="Comprare Visualizzazioni YouTube_per quale motivo"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
              </div>

              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
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

          {/* Desktop image section */}
          <div className="flex-1 hidden md:block">
            <div className="relative aspect-video rounded-xl sm:rounded-2xl overflow-hidden shadow-lg sm:shadow-2xl ring-1 ring-white/10">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 via-transparent to-primary/30 animate-gradient" />
              {/* Image remains the same */}
              <img
                src="/Comprare Visualizzazioni YouTube_per quale motivo_ no background.png"
                alt="Comprare Visualizzazioni YouTube_per quale motivo"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>
        </motion.div>

        {/* Second Section - Apply same responsive changes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="flex flex-col md:flex-row items-center gap-8 sm:gap-12 md:gap-24 group"
        >
          <div className="flex-1 md:order-2 relative p-6 md:p-10 rounded-2xl bg-black/20 backdrop-blur-lg border border-white/10 shadow-2xl">
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/20 via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl" />
            <div className="relative z-10">
              {/* Content remains the same */}
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
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 via-transparent to-primary/30 animate-gradient" />
              {/* Image remains the same */}
              <img
                src="/Perche_comprare_Visualizzazioni_YouTube_da_noi_su_glowlikes_no_background.png"
                alt="Perché comprare Visualizzazioni YouTube da noi su glowlikes"
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
