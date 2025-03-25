import { Card, CardContent } from "@/youtube-views-components/ui/card";
import { motion } from "framer-motion";

const DoveComprare = () => {
  return (
    <section className="relative w-full max-w-7xl mx-auto px-4 py-16">
      <div className="relative">
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="relative rounded-3xl bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 p-1"
        >
          <div className="relative rounded-3xl bg-black/90 p-8 md:p-12 backdrop-blur-xl">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/10 via-transparent to-blue-500/10" />
            <h2 className="relative text-3xl md:text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400 mb-12">
              Cresci organicamente grazie ai nostri Like, Follower, Views e moltissimi altri prodotti
            </h2>
            <div className="relative space-y-6 text-lg">
              <p className="text-gray-300 leading-relaxed">
                Paura delle truffe? Spaventato dai cali? <strong className="text-blue-400"> Con noi di GlowLikes non hai nulla di cui temere! </strong> Nel giro di pochissimo tempo siamo diventati un importante punto di riferimento per tutto il mercato italiano.
              </p>
              <p className="text-lg text-white/90 leading-relaxed">
                Interazioni social di vario genere, <strong className="text-blue-400"> tutte di altissima qualità e praticamente impossibili da rilevare, </strong> persino dalle piattaforme che sfruttano gli algoritmi più avanzati.
              </p>
              <p className="text-lg text-white/90 leading-relaxed">
                Qualità, certamente, ma molto, molto altro ancora! Offriamo un <strong className="text-blue-400"> servizio di prim'ordine che mette il cliente al centro </strong> durante ogni singola fase.
                <br />
              </p>
              <p className="text-lg text-white/90 leading-relaxed">
                <strong className="text-blue-400"> Sicurezza e velocità sono gli altri nostri punti di forza </strong> che ci pngono almeno 2 gradini al di sopra dei competitor.
              </p>
              <p className="text-lg text-white/90 leading-relaxed">
                Questioni tecniche a parte che vedremo in seguito, <strong className="text-blue-400">comprare spettatori diretta YouTube italiani e reali</strong> può dare una “marcia” in più alla tua tua strategia, proprio perché, a livello di metadati, danno al “Sig. YouTube” un messaggio più forte ed incisivo.
              </p>
              <p className="text-lg text-white/90 leading-relaxed">
                Hai necessità di <strong className="text-blue-400"> promuovere le tue pagine social o di spingere su determinati prodotti/brand? </strong> Ecco cosa troverai nel nostro store online.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DoveComprare;