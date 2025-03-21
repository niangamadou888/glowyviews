import { Card, CardContent } from "@/youtube-views-components/ui/card";
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
            Comprare commenti YouTube: prova altre strategie di Social Media Marketing
            </h2>
            <div className="space-y-6">
              <p className="text-lg text-white/90 leading-relaxed">
              Non serve essere degli esperti per comprendere che il <strong>Social Media Marketing non si riduce al solo comprare commenti YouTube.</strong><br />
              </p>
              <p className="text-lg text-white/90 leading-relaxed">
              Difatti, vi sono anche altre numerose tecniche che rientrano in tale categoria, così come vi sono altre interazioni che si possono acquistare, sempre direttamente dal nostro store online.

              </p>
              <p className="text-lg text-white/90 leading-relaxed">
              Ad esempio, <strong>perché non valuti anche di <a href="https://glowlikes.it/comprare-visualizzazioni-youtube/" className="mystyle">comprare visualizzazioni YouTube</a>?</strong> Se hai il canale aperto da poco, potrebbe essere un'ottima soluzione per far passare le acquisizioni dei commenti come puramente organiche.
              <br />

              </p>
              <p className="text-lg text-white/90 leading-relaxed">
              Insomma, non sarebbe un po' strano <strong>vedere un numero di commenti superiori al numero delle visualizzazioni?</strong>
              </p>
              <p className="text-lg text-white/90 leading-relaxed">
              <strong>Per non parlare, poi, del <a href="https://glowlikes.it/comprare-like-youtube/" className="mystyle">comprare Like YouTube</a>, un'altra delle tante strategie</strong> rientranti in tale ambito.
              </p>
              <p className="text-lg text-white/90 leading-relaxed">
              Come vedi tu stesso, <strong>hai diverse “armi” a tua disposizione per poter far dare al tuo canale quella spinta</strong> che stavi cercando. Si tratta solo di studiare come attuarle in sinergia, al fine di ottimizzare ogni singolo sforzo.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DoveComprare;