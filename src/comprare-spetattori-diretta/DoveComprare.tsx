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
            Dove si possono comprare spettatori diretta YouTube italiani e reali?
            </h2>
            <div className="space-y-6">
              <p className="text-lg text-white/90 leading-relaxed">
              In rete ci sono diverse agenzie che vendono interazioni social, ma sono davvero poche quelle da cui puoi <strong>comprare spettatori diretta YouTube italiani e reali</strong>.
<br />
              </p>
              <p className="text-lg text-white/90 leading-relaxed">
              Non a caso, produrre tale tipo di interazioni richiede, comunque, uno sforzo maggiore.

              </p>
              <p className="text-lg text-white/90 leading-relaxed">
              Ad esempio, noi di GlowLikes siamo tra queste e, modestamente, <strong>ciò è proprio uno dei tanti punti di forza che ci contraddistingue</strong> dai competitor.
              <br />

              </p>
              <p className="text-lg text-white/90 leading-relaxed">
              Infatti, tanto nel Social Media Marketing, quanto in qualsiasi altro ambito, <strong>ciò che conta non è solo la quantità, ma anche la qualità.</strong>
              </p>
              <p className="text-lg text-white/90 leading-relaxed">
              Questioni tecniche a parte che vedremo in seguito, <strong>comprare spettatori diretta YouTube italiani e reali</strong> può dare una “marcia” in più alla tua tua strategia, proprio perché, a livello di metadati, danno al “Sig. YouTube” un messaggio più forte ed incisivo.
              </p>
              <p className="text-lg text-white/90 leading-relaxed">
              Prima di andare dritti al tutorial il cui ti spieghiamo come effettuare il tuo primo ordine, ecco <strong>tutti i motivi per cui affidarsi a noi di GlowLikes.</strong>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DoveComprare;