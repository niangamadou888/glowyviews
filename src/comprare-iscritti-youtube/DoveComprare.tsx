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
            Dove comprare iscritti YouTube italiani e reali senza rischiare
            </h2>
            <div className="space-y-6">
              <p className="text-lg text-white/90 leading-relaxed">
              Ovviamente, <strong>i follower YouTube si comprano presso agenzie specializzate, proprio come la nostra.</strong><br />
              </p>
              <p className="text-lg text-white/90 leading-relaxed">
              Probabilmente, avrai pure <strong>già sentito parlare di siti come Fiverr</strong> in cui i rispettivi inserzionisti mettono in vendita tale tipo di interazioni.

              </p>
              <p className="text-lg text-white/90 leading-relaxed">
              Sebbene ci siano venditori validi, nella stragrande maggioranza dei casi <strong>si rischia di ottenere iscritti che possono destare “sospetto”,</strong> magari a causa di indirizzi IP altamente “improbabili”.
              <br />

              </p>
              <p className="text-lg text-white/90 leading-relaxed">
              Ad esempio, dall'India o, comunque, da altri <strong>paesi che poco avrebbero a che fare con un tuo business qui in Italia </strong>o in Europa.
              </p>
              <p className="text-lg text-white/90 leading-relaxed">
              <strong>Se ne compri qualcuno, non succede nulla </strong>e ci rimetti davvero poco, visti i loro costi bassissimi.
              </p>
              <p className="text-lg text-white/90 leading-relaxed">
              Al contrario, <strong> grandi quantità di tali interazioni potrebbero metterti in “cattiva luce” </strong>e farti rischiare delle penalizzazioni da parte della piattaforma, dal momento che questa attività non sarebbe consentita (tranquillo, ti spieghiamo tutto nei prossimi paragrafi).
              </p>
              <p className="text-lg text-white/90 leading-relaxed">
              Inoltre, i nostri servizi sono tutti automatizzati, quindi <strong> puoi comprare iscritti YouTube dall'apposita sezione in ogni momento. </strong>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DoveComprare;