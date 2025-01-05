import { Card, CardContent } from "@/components/ui/card";
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
                Comprare Visualizzazioni YouTube: per quale motivo?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Nel caso ti stessi chiedendo <strong>perché convenga comprare Views YouTube</strong>, la risposta è davvero semplice.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                In parole povere, <strong>servono per "amicarsi" i crawler della piattaforma stessa</strong>, ossia i "bot" che determinano la visibilità di ciascun canale e dei suoi rispettivi contenuti.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                Per certi versi, il mondo della rete <strong>non funziona in modo poi così diverso dalla "realtà" offline</strong>.
              
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
               
                Infatti, il <strong>meccanismo della vendita</strong> (e quindi anche del guadagno del venditore) è sempre lo stesso.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                Su "X" persone che vengono a conoscenza di una determinata offerta, <strong>una data percentuale decide di effettuare l'acquisto</strong>.
                Di conseguenza, più si amplia questo "bacino", maggiori saranno anche i guadagni finali.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                Ecco, <strong>comprare visualizzazioni YouTube serve proprio a questo</strong>, ossia "posare i primi mattoni" che costituiranno la solida base della tua attività.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              
                Arrivati a questo punto, potrebbe sorgerti spontanea una domanda: <strong>perché comprare views YouTube in modo pianificato</strong> e non attendere di ottenerle in modo puramente organico?
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              
               
                Andiamo subito al prossimo paragrafo per la risposta.
              </p>
            </div>
          </div>
          <div className="flex-1">
            <div className="relative aspect-video rounded-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-primary/20 animate-gradient" />
              <img
                src="viewsyoutube2019.png"
                alt="Comprare Visualizzazioni YouTube"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>
        </motion.div>

        {/* Second Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-center gap-8 md:gap-16 group"
        >
          <div className="flex-1 md:order-2 relative p-4 md:p-8 rounded-lg backdrop-blur-sm border border-primary/20">
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-glow hover:animate-glow">
                Perché comprare Visualizzazioni YouTube da noi su SocialX
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Ti invitiamo a <strong>comprare views YouTube reali ed italiane da noi perché siamo un'agenzia specializzata</strong> operante da diversi anni nel settore.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                Quindi, <strong>abbiamo letteralmente "esperienza da vendere"</strong> e, come ovvio, offriamo un regolare servizio comprensivo di tutte le garanzie del caso.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                Per quanto riguarda l'erogazione, <strong>ci serviamo dei migliori sistemi informatici per "produrre" interazioni social</strong> che, sul piano tecnico, sono indistinguibili da quelle che si acquisiscono in modo prettamente organico.
               
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
               
                Altre realtà, invece, <strong>rischiano di mettere nei guai i clienti</strong> proprio perché non sfruttano tali sistemi. Ecco perché è fondamentale rivolgersi solo ed esclusivamente ad agenzie specializzate come la nostra.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                Tutto qui? Ovviamente no, dal momento che, tra i nostri punti di forza, <strong>c'è anche il rapporto qualità/prezzo eccezionale</strong>, così come la possibilità di personalizzare i propri acquisti scegliendo il pacchetto più in linea con le proprie esigenze.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                Tra l'altro, sebbene vengano elaborati "a mano", <strong>i nostri servizi sono a disposizione 24 ore su 24, 7 giorni su 7.</strong>
              </p>
            </div>
          </div>
          <div className="flex-1 md:order-1">
            <div className="relative aspect-video rounded-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-primary/20 animate-gradient" />
              <img
                src="viewsyoutube2019.png"
                alt="Perché comprare Visualizzazioni YouTube da noi"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>
        </motion.div>

        {/* Italian Style Container - Where to Buy */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-2xl"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#009246] via-[#ffffff] to-[#ce2b37] opacity-20" />
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
          <div className="relative p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white drop-shadow-glow mb-12">
              Dove comprare Visualizzazioni YouTube italiane e reali
            </h2>
            <div className="space-y-6">
              <p className="text-lg text-white/90 leading-relaxed">
                Nonostante ci siano diverse agenzie che erogano tale servizio, se vuoi <strong>comprare views YouTube italiane e reali</strong> andando sul sicuro, rivolgiti pure a noi di SocialX.<br />
              </p>
              <p className="text-lg text-white/90 leading-relaxed">
                Oltre al <strong>rapporto qualità/prezzo imbattibile</strong>, c'è un altro importante motivo per cui conviene rivolgersi a noi.
              </p>
              <p className="text-lg text-white/90 leading-relaxed">
                Sebbene nei prossimi paragrafi avrai tutti i dettagli in merito, il <strong>comprare visualizzazioni YouTube è da considerarsi una</strong> <a href="https://www.treccani.it/vocabolario/borderline/">pratica quasi "borderline"</a> da condurre con la massima attenzione.<br />

              </p>
              <p className="text-lg text-white/90 leading-relaxed">
             
                Purtroppo, in giro ci sono <strong>agenzie che non riescono a garantire una reale sicurezza</strong> in merito all'erogazione del servizio.
              </p>
              <p className="text-lg text-white/90 leading-relaxed">
                In parole povere, <strong>comprando views di dubbia provenienza</strong>, si corre il serio rischio di venir intercettati dai crawler del social e subire pesanti penalizzazioni.
              </p>
              <p className="text-lg text-white/90 leading-relaxed">
                Al contrario, <strong>noi di SocialX prendiamo tutte le precauzioni del caso</strong>, in modo da offrire ai nostri clienti un servizio di qualità superiore, sicuro e affidabile al 100%.
              </p>
              <p className="text-lg text-white/90 leading-relaxed">
                Se hai già le idee chiare, non attendere oltre ed <strong>effettua il tuo primo acquisto con noi</strong>. In caso contrario, prosegui con la lettura per leggere anche gli altri nostri consigli.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyBuyViews;