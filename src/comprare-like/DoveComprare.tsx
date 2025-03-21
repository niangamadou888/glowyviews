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
            Dove comprare Like YouTube italiani e reali senza rischiare
            </h2>
            <div className="space-y-6">
              <p className="text-lg text-white/90 leading-relaxed">
              Per <strong>omprare Mi Piace YouTube italiani e reali devi andare alla sezione</strong> in cui è presente il nostro store online, da cui puoi effettuare tutti gli ordini che vuoi in qualsiasi momento.<br />
              </p>
              <p className="text-lg text-white/90 leading-relaxed">
              Inoltre, <strong>ci preme dissuaderti dal comprare Like YouTube presso marketplace</strong> internazionali o altri siti del genere.

              </p>
              <p className="text-lg text-white/90 leading-relaxed">
              Infatti, come già anticipato, <strong>c'è sempre il rischio che vengano interpretate dai crawler di YouTube come delle interazioni ottenute in modo non genuino</strong> e, dunque, passibili di penalizzazione.
              <br />

              </p>
              <p className="text-lg text-white/90 leading-relaxed">
              Ad ogni modo, ribadita nuovamente l'importanza di affidarsi a venditori seri, nell'apposita sezione troverai la <strong>nostra offerta organizzata in più pacchetti.</strong>
              </p>
              <p className="text-lg text-white/90 leading-relaxed">
              Ne abbiamo inseriti di diversi che, come vedrai, <strong>anno per ordine progressivo.</strong>v Abbiamo fatto così proprio per andare incontro ad ogni esigenza da parte dei nostri clienti.
              </p>
              <p className="text-lg text-white/90 leading-relaxed">
              Tra l’altro, tutto ciò vale anche per le ulteriori e numerose interazioni social disponibili, dato che, ad esempio, <strong>da noi puoi pure <a href="https://glowlikes.it/comprare-commenti-youtube/" className="mystyle">comprare commenti YouTube</a> con gli stessi medesimi standard qualitativi.</strong>
              </p>
              <p className="text-lg text-white/90 leading-relaxed">
              Tra loro <strong>c'è chi sta “partendo da zero”, ma anche chi vuole risolvere un fastidioso “stallo”</strong> che sta andando avanti da troppo tempo.
              </p>
              <p className="text-lg text-white/90 leading-relaxed">
              Tutto chiaro fino a qui? Se la risposta è “sì”, <strong>vediamo subito come procedere con l'ordine.</strong>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DoveComprare;