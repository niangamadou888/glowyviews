import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const DoveComprare = () => {
  return (
    <section className="relative w-full max-w-7xl mx-auto px-4 py-16 overflow-hidden">
      <div className="relative space-y-24">
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="relative overflow-hidden rounded-2xl border border-white/30 transition-all duration-200 hover:border-white/70 hover:shadow-[0_0_15px_rgba(255,255,255,0.3)]"
          style={{
            transform: 'translateZ(0)',
            willChange: 'transform, opacity'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#009246] via-[#ffffff] to-[#ce2b37] opacity-20" />
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
          <div className="relative p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white drop-shadow-glow mb-12">
              Dove comprare Visualizzazioni YouTube italiane e reali
            </h2>
            <div className="space-y-6">
              <p className="text-lg text-white/90 leading-relaxed">
                Nonostante ci siano diverse agenzie che erogano tale servizio, se vuoi <strong>comprare views YouTube italiane e reali</strong> andando sul sicuro, rivolgiti pure a noi di glowlikes.<br />
              </p>
              <p className="text-lg text-white/90 leading-relaxed">
                Oltre al <strong>rapporto qualità/prezzo imbattibile</strong>, c'è un altro importante motivo per cui conviene rivolgersi a noi.
              </p>
              <p className="text-lg text-white/90 leading-relaxed">
                Sebbene nei prossimi paragrafi avrai tutti i dettagli in merito, il <strong>comprare visualizzazioni YouTube è da considerarsi una</strong> <a href="https://www.treccani.it/vocabolario/borderline/" className='mystyle'>pratica quasi "borderline"</a> da condurre con la massima attenzione.<br />

              </p>
              <p className="text-lg text-white/90 leading-relaxed">
             
                Purtroppo, in giro ci sono <strong>agenzie che non riescono a garantire una reale sicurezza</strong> in merito all'erogazione del servizio.
              </p>
              <p className="text-lg text-white/90 leading-relaxed">
                In parole povere, <strong>comprando views di dubbia provenienza</strong>, si corre il serio rischio di venir intercettati dai crawler del social e subire pesanti penalizzazioni.
              </p>
              <p className="text-lg text-white/90 leading-relaxed">
                Al contrario, <strong>noi di glowlikes prendiamo tutte le precauzioni del caso</strong>, in modo da offrire ai nostri clienti un servizio di qualità superiore, sicuro e affidabile al 100%.
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

export default DoveComprare;