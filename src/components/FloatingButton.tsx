import { useEffect, useState } from "react";
import { ShoppingCart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const FloatingButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector("#hero");
      const footer = document.querySelector("footer");
      
      if (!heroSection || !footer) return;
      
      const heroRect = heroSection.getBoundingClientRect();
      const footerRect = footer.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Hide button when:
      // 1. Hero section is still partially visible (bottom > -100)
      // 2. Footer is coming into view (top < windowHeight + 100)
      const shouldHide = 
        heroRect.bottom > -100 || // Still on hero
        footerRect.top < (windowHeight + 100); // Near footer
      
      setIsVisible(!shouldHide);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const buttonVariants = {
    initial: { 
      y: 100,
      opacity: 0,
      scale: 0.8
    },
    animate: { 
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 12,
        mass: 0.8,
        duration: 0.5
      }
    },
    exit: {
      y: 100,
      opacity: 0,
      scale: 0.8,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.3
      }
    }
  };

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <div className="fixed bottom-4 md:bottom-6 left-0 right-0 flex justify-center items-center z-50 px-4">
          <motion.a
            href="https://app.glowlikes.it/"
            variants={buttonVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            whileHover={{ 
              scale: 1.05,
              transition: { 
                type: "spring", 
                stiffness: 400, 
                damping: 10 
              }
            }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center gap-2 
                      px-4 py-2.5 md:px-5 md:py-3 rounded-full 
                      bg-gradient-to-r from-blue-500 to-purple-600
                      text-white font-medium text-xs md:text-base
                      shadow-lg hover:shadow-xl
                      transition-shadow duration-300
                      focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
                      max-w-[90%] w-auto  animate-glow"
          >
            <ShoppingCart className="w-4 h-4 md:w-5 md:h-5" />
            <span>Acquista views</span>
          </motion.a>
        </div>
      )}
    </AnimatePresence>
  );
};

export default FloatingButton;
