import { useEffect, useState, useRef } from "react";
import { ShoppingCart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";import { FaYoutube } from "react-icons/fa";
import { Player } from "@lordicon/react";
import youtubeIcon from "../assets/icons/wired-flat-2547-logo-youtube-hover-pinch.json";

const FloatingButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const youtubeIconRef = useRef<Player | null>(null);

  useEffect(() => {
    // Check if mobile on mount and resize
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);

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
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkMobile);
    };
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

  const barVariants = {
    initial: {
      y: 50,
      opacity: 0
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 12
      }
    },
    exit: {
      y: 50,
      opacity: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  // Add useEffect for animation when the button becomes visible
  useEffect(() => {
    if (youtubeIconRef.current) {
      if (isVisible) {
        // Play animation when component mounts
        youtubeIconRef.current.playFromBeginning();
      }
    }
  }, [isVisible]);

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <div className={`fixed bottom-4 md:bottom-6 left-0 right-0 flex justify-center items-center z-50 px-4 
          ${!isMobile ? "md:px-8 md:justify-center" : ""}`}>
          {!isMobile ? (
            <motion.div
              variants={barVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="w-full max-w-lg mx-auto flex items-center justify-between bg-white/90 backdrop-blur-sm rounded-lg shadow-lg px-5 py-3"
            >
              <div className="flex items-center gap-3">
                <div 
                  className="flex-shrink-0"
                  onMouseEnter={() => youtubeIconRef.current?.playFromBeginning()}
                >
                  <Player
                    ref={youtubeIconRef}
                    icon={youtubeIcon}
                    size={28}
                    state="morph"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm">Boost Your YouTube Views</h4>
                  <p className="text-xs text-gray-600">Get more engagement today</p>
                </div>
              </div>
              
              <motion.a
                href="https://app.glowlikes.it/"
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
                  px-4 py-2 rounded-md
                  bg-gradient-to-r from-blue-500 to-purple-600
                  text-white font-medium text-sm
                  shadow-md hover:shadow-lg
                  transition-shadow duration-300
                  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                <ShoppingCart className="w-4 h-4" />
                <span>Acquista views</span>
              </motion.a>
            </motion.div>
          ) : (
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
                px-4 py-2.5 rounded-md
                bg-gradient-to-r from-blue-500 to-purple-600
                text-white font-medium text-xs
                shadow-lg hover:shadow-xl
                transition-shadow duration-300
                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
                max-w-[90%] w-auto animate-glow"
            >
              <ShoppingCart className="w-4 h-4" />
              <span>Acquista views</span>
            </motion.a>
          )}
        </div>
      )}
    </AnimatePresence>
  );
};

export default FloatingButton;