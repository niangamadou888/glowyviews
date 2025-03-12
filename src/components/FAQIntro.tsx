import { motion } from "framer-motion";

const FAQIntro = () => {
  return (
    <section className="w-full max-w-6xl mx-auto px-6 pt-16">
      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="text-3xl md:text-4xl font-bold mb-8 text-center"
        style={{ transform: 'translateZ(0)', willChange: 'transform' }}
      >
        Sezione F.A.Q.: rispondiamo insieme alle domande più comuni
      </motion.h2>
      
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
        className="space-y-6 max-w-4xl mx-auto"
        style={{ transform: 'translateZ(0)', willChange: 'transform' }}
      >
        <p className="text-lg text-muted-foreground">
          <strong>Ancora dubbi o perplessità?</strong> Dai, non preoccuparti, visto che abbiamo preparato questa sezione F.A.Q. proprio per far luce in merito a quegli aspetti ancora un po' "oscuri" diciamo così.
        </p>
        <p className="text-lg text-muted-foreground">
          È vero, il <strong>Social Media Marketing è una disciplina che esiste già da diversi anni</strong>, ma i "non addetti ai lavori" potrebbero ignorare alcuni fattori che noi diamo già per scontato.
        </p>
        <p className="text-lg text-muted-foreground">
          Proprio per questo, abbiamo deciso di <strong>ricercare le domande più cliccate in rete, ma anche di mettere insieme quelle che ci arrivano più frequentemente</strong> da parte dei nostri clienti o da possibili interessati.
        </p>
        <p className="text-lg text-muted-foreground">
          In fin dei conti, <strong>non c'è nulla di difficile da comprendere</strong>, dal momento che parliamo di argomenti che sono alla portata di chiunque.
        </p>
        <p className="text-lg text-muted-foreground">
          <strong>Semplicemente, appaiono un po' più complessi</strong> e, proprio per questo, richiedono maggiore focus e attenzione per comprenderli, tutto qui.
        </p>
      </motion.div>
    </section>
  );
};

export default FAQIntro;