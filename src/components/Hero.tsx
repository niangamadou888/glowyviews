import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative min-h-[80vh] flex items-center justify-center overflow-hidden py-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/10" />
      
      {/* Animated circles */}
      <div className={`absolute transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
        <div className="absolute top-1/4 -left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse delay-700" />
      </div>
      
      {/* Content */}
      <div className={`relative z-10 max-w-4xl mx-auto px-6 text-center transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h1 className="text-4xl md:text-6xl font-bold mb-8 text-glow">
          Comprare Visualizzazioni YouTube: Italiane e Reali
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">
          Se stai cercando di acquistare visualizzazioni YouTube, e' importante farlo nel modo giusto. Noi di SocialX offriamo Visualizzazioni YouTube 100% reali e da profili italiani, a prezzi accessibili.
        </p>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-12">
          Acquista subito visualizzazioni in modo sicuro e confidenziale tramite la nostra piattaforma.
        </p>

        <Button size="lg" className="glow bg-primary hover:bg-primary/90 text-white animate-bounce">
          Inizia Ora
        </Button>
      </div>
    </div>
  );
};

export default Hero;