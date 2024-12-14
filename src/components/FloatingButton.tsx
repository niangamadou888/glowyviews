import { useEffect, useState } from "react";

const FloatingButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector("#hero");
      const footer = document.querySelector("footer");
      
      if (!heroSection || !footer) return;
      
      const heroBottom = heroSection.getBoundingClientRect().bottom;
      const footerTop = footer.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      // Show button after hero section and hide before footer
      setIsVisible(heroBottom < 0 && footerTop > windowHeight);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <a
      href="https://app.socialx.it/"
      className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50
                px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600
                text-white font-semibold text-lg
                transition-all duration-300
                hover:scale-105 hover:shadow-lg
                animate-glow"
      style={{
        boxShadow: "0 0 20px rgba(66, 153, 225, 0.5)",
      }}
    >
      Compra Visualizzazioni YouTube
    </a>
  );
};

export default FloatingButton;
