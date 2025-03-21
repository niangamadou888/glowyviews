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
            Scegli condivisioni italiane e reali
            </h2>
            <div className="space-y-6">
              <p className="text-lg text-white/90 leading-relaxed">
              Il primo accorgimento da prendere consiste proprio nel <strong>comprare condivisioni YouTube italiane e reali</strong>.<br />
              </p>
              <p className="text-lg text-white/90 leading-relaxed">
              Come mai? Beh, perché <strong>sono le uniche che riescono ad “ingannare” gli algoritmi</strong> della piattaforma.

              </p>
              <p className="text-lg text-white/90 leading-relaxed">
              Molto banalmente, queste interazioni social di altissima qualità <strong>vengono scambiate per delle acquisizioni organiche a tutti gli effetti.</strong>
              <br />

              </p>
              <p className="text-lg text-white/90 leading-relaxed">
              Quando leggi in giro di strategie di Social Media Marketing finite male, <strong>9 volte su 10 la causa del disastro sta nell'aver scelto delle pessime interazioni generiche</strong>, prodotte dai soliti “bot”.
              </p>
              <p className="text-lg text-white/90 leading-relaxed">
              Anni fa potevano anche passare ma, al giorno d'oggi, <strong>vengono individuate praticamente subito.</strong>
              </p>
              <p className="text-lg text-white/90 leading-relaxed">
              Certo, costano leggermente di più (da noi di GlowLikes nemmeno tanto), ma almeno <strong>portano a dei risultati concreti senza metterti nei casini.</strong>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DoveComprare;