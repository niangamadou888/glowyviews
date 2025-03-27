import { motion } from "framer-motion";

const WhyBuyViews = () => {
  return (
    <section className="relative w-full max-w-7xl mx-auto px-4 py-16 sm:py-24 overflow-hidden bg-gradient-to-b from-background/80 to-background">
      {/* Decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
        <div className="absolute w-full h-full bg-[url('/grid.svg')] opacity-20" />
      </div>

      <div className="relative space-y-16 sm:space-y-24 md:space-y-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col md:flex-row items-center gap-8 sm:gap-12 md:gap-24 group"
        >
          <div className="flex-1 md:order-2 relative p-8 md:p-12 rounded-3xl bg-black/30 backdrop-blur-xl border border-white/20 shadow-[0_0_50px_-12px] shadow-primary/30">
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/30 via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-3xl" />
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-white via-primary/80 to-white bg-clip-text text-transparent">
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
            <motion.div 
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/20"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 via-transparent to-primary/40 animate-gradient" />
              <img
                src="/Perche_comprare_Visualizzazioni_YouTube_da_noi_su_glowlikes_no_background.png"
                alt="Perché comprare Visualizzazioni YouTube da noi su glowlikes"
                className="w-full h-full object-cover rounded-3xl transform hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyBuyViews;
