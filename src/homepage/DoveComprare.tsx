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
            Cresci organicamente grazie ai nostri Like, Follower, Views e moltissimi altri prodotti
            </h2>
            <div className="space-y-6">
              <p className="text-lg text-white/90 leading-relaxed">
              Paura delle truffe? Spaventato dai cali? <strong> Con noi di GlowLikes non hai nulla di cui temere! </strong> Nel giro di pochissimo tempo siamo diventati un importante punto di riferimento per tutto il mercato italiano.
<br />
              </p>
              <p className="text-lg text-white/90 leading-relaxed">
              Interazioni social di vario genere, <strong> tutte di altissima qualità e praticamente impossibili da rilevare, </strong> persino dalle piattaforme che sfruttano gli algoritmi più avanzati.

              </p>
              <p className="text-lg text-white/90 leading-relaxed">
              Qualità, certamente, ma molto, molto altro ancora! Offriamo un <strong> servizio di prim'ordine che mette il cliente al centro </strong> durante ogni singola fase.
              <br />

              </p>
              <p className="text-lg text-white/90 leading-relaxed">
              <strong> Sicurezza e velocità sono gli altri nostri punti di forza </strong> che ci pngono almeno 2 gradini al di sopra dei competitor.
              </p>
              <p className="text-lg text-white/90 leading-relaxed">
              Questioni tecniche a parte che vedremo in seguito, <strong>comprare spettatori diretta YouTube italiani e reali</strong> può dare una “marcia” in più alla tua tua strategia, proprio perché, a livello di metadati, danno al “Sig. YouTube” un messaggio più forte ed incisivo.
              </p>
              <p className="text-lg text-white/90 leading-relaxed">
              Hai necessità di <strong> promuovere le tue pagine social o di spingere su determinati prodotti/brand? </strong> Ecco cosa troverai nel nostro store online.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DoveComprare;