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
            Comprare Visualizzazioni e Like YouTube Shorts: le altre nostre imperdibili offerte
            </h2>
            <div className="space-y-6">
              <p className="text-lg text-white/90 leading-relaxed">
              Poteva, forse, un'<strong>agenzia specializzata in Social Media Marketing</strong> come la nostra offrire solo visualizzazioni e like YouTube Shorts italiani e reali?
<br />
              </p>
              <p className="text-lg text-white/90 leading-relaxed">
              Ovviamente no, infatti <strong>la nostra offerta complessiva ha come “bersaglio” tutte le principali interazioni social</strong> che, nel loro complesso, determinano il successo di un canale e dei contenuti che racchiude.

              </p>
              <p className="text-lg text-white/90 leading-relaxed">
              Ad esempio, <strong>da noi puoi pure <a href="https://glowlikes.it/comprare-spettatori-diretta-youtube/" className="mystyle">comprare spettatori diretta YouTube</a>, così come tutte le ore di visualizzazione che vuoi</strong>, nel caso volessi “sbloccare” la monetizzazione dei tuoi video.
              <br />

              </p>
              <p className="text-lg text-white/90 leading-relaxed">
              Insomma, qualunque sia l'interazione social di tuo interesse, <strong>sicuramente la trovi nel nostro store online.</strong>
              </p>
              <p className="text-lg text-white/90 leading-relaxed">
              Tutto ciò che devi fare è <strong>entrare nella tua area personale e cercare il servizio</strong> di cui hai bisogno.
              </p>
              <p className="text-lg text-white/90 leading-relaxed">
              Senza contare il fatto che, indipendentemente dal pacchetto che sceglierai, <strong>l'acquisto avviene sempre con la massima praticità e rapidità.</strong>
              </p>
              <p className="text-lg text-white/90 leading-relaxed">
              A proposito, un'altra <strong>tecnica che vorremmo suggerirti consiste nel <a href="https://glowlikes.it/comprare-commenti-youtube/" className="mystyle">comprare commenti YouTube</a></strong> perché, se scritti in un certo modo, possono realmente fungere da “calamita” per nuovi utenti che vogliono aggiungersi alla discussione, mentre in sottofondo c'è il tuo video che “gira”.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DoveComprare;