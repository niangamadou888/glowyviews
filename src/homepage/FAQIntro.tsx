import { motion, useReducedMotion } from "framer-motion";

const FAQIntro = () => {
  const shouldReduceMotion = useReducedMotion();

  const initialAnimation = shouldReduceMotion ? {} : {
    opacity: 0,
    y: 15
  };

  const fadeAnimation = shouldReduceMotion ? {} : {
    opacity: 0
  };

  return (
    <section className="w-full max-w-6xl mx-auto px-6 pt-16">
      <motion.h2
        initial={initialAnimation}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="text-3xl md:text-4xl font-bold mb-8 text-center"
        style={{ transform: 'translateZ(0)', willChange: 'transform' }}
      >
        Sezione F.A.Q.
      </motion.h2>
      
      <motion.div 
        initial={fadeAnimation}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
        className="space-y-6 max-w-4xl mx-auto"
        style={{ transform: 'translateZ(0)', willChange: 'transform' }}
      >
        <p className="text-lg text-muted-foreground">
          <strong>Dubbi o perplessità?</strong> Non preoccuparti, in questa sezione F.A.Q. abbiamo selezionate le domande che riceviamo più spesso.
        </p>
      </motion.div>
    </section>
  );
};

export default FAQIntro;