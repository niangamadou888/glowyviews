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
            Puoi comprare ore di visualizzazione YouTube anche per i tuoi video!
            </h2>
            <div className="space-y-6">
              <p className="text-lg text-white/90 leading-relaxed">
              È inutile girarci tanto attorno, quindi, certo che sì! <strong>Anche tu puoi comprare ore di visualizzazione YouTube</strong> per i tuoi video.<br />
              </p>
              <p className="text-lg text-white/90 leading-relaxed">
              Difatti, poco importa cosa trattano, da quanto sei sul “Tubo” e quali obiettivi vorresti raggiungere. <strong>L'unica cosa che ci interessa è l'URL dei video a cui far salire le ore di visualizzazione.</strong>

              </p>
              <p className="text-lg text-white/90 leading-relaxed">
              Per far questo, però, <strong>occorre che i tuoi video siano pubblici,</strong> dal momento che il conteggio non viene effettuato sui video privati o che, comunque, presentano delle limitazioni di visibilità.
              <br />

              </p>
              <p className="text-lg text-white/90 leading-relaxed">
              Inoltre, altra cosa molto importante, <strong>è fondamentale che non siano gli Shorts.</strong>
              </p>
              <p className="text-lg text-white/90 leading-relaxed">
              Per carità, anche loro contribuiscono allo “stato di salute” generale del canale, ma se sei interessato a questo specifico tipo di interazioni social, allora – tanto vale – <strong>prendere direttamente in considerazione l'idea di <a href="https://glowlikes.it/comprare-visualizzazioni-e-like-youtube-shorts/" className="mystyle">comprare visualizzazioni e Like YouTube Shorts</a> dall'apposita sezione</strong> del nostro store online.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DoveComprare;