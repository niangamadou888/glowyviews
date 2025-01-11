import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";
import { Player } from "@lordicon/react";
import "lord-icon-element";
import qualityIcon from "../assets/icons/wired-flat-489-rocket-space-hover-flying.json";
import { Star } from "lucide-react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const playerRef = useRef<Player | null>(null);

  useEffect(() => {
    setIsVisible(true);
    playerRef.current?.playFromBeginning();
  }, []);

  const labels = ["Prezzi Bassi", "Utenti Reali", "Senza Cali", "100% Sicuro"];

  return (
    <div className="relative min-h-[100vh] flex items-center justify-center overflow-hidden pt-32 pb-20 md:py-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/10" />
      
      {/* Animated circles */}
      <div className={`absolute transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
        <div className="absolute top-1/4 -left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse delay-700" />
      </div>
      
      {/* Content */}
      <div className={`relative z-10 max-w-4xl mx-auto px-6 text-center transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h1 className="flex flex-col items-center justify-center text-4xl md:text-6xl font-bold mb-4 text-glow">
          <span className="mb-2 text-center whitespace-normal md:whitespace-nowrap">Comprare Visualizzazioni YouTube:</span>
          <span className="bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 bg-clip-text text-transparent inline-flex items-center gap-2 transform hover:scale-105 transition-transform text-center">
            Italiane e Reali
            <Player
              ref={playerRef}
              icon={qualityIcon}
              size={50}
              onComplete={() => playerRef.current?.playFromBeginning()}
            />
          </span>
        </h1>

        {/* Micro Labels */}
        <div className="flex flex-wrap justify-center gap-3 mb-6">
          {labels.map((label, index) => (
            <span
              key={index}
              className="px-4 py-2 text-sm font-medium bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-md 
              rounded-full border border-white/20 text-white/90 
              shadow-[0_0_15px_rgba(255,255,255,0.1)] 
              hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] 
              hover:border-white/30 
              hover:scale-105 
              hover:text-white 
              transition-all duration-300 ease-out
              flex items-center gap-2"
            >
              <Star className="w-3.5 h-3.5 text-primary/80" />
              {label}
            </span>
          ))}
        </div>

        <div className="flex justify-center mb-8">
        </div>
        
        <p className="text-[18px] md:text-[18px] text-white mb-10 max-w-3xl mx-auto">
        Se stai cercando di acquistare visualizzazioni YouTube, e' importante farlo nel modo giusto. Noi di SocialX offriamo Visualizzazioni YouTube 100% reali e da profili italiani, a prezzi accessibili. Acquista subito visualizzazioni in modo sicuro e confidenziale tramite la nostra piattaforma.
        </p>

        <Button size="lg" className="glow bg-primary hover:bg-primary/90 text-white animate-bounce text-[20px]">
          Inizia Ora
        </Button>

        {/* Rating Section */}
        <div className="mt-6 flex items-center justify-center gap-2 text-white/90">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <span className="font-semibold">4.9</span>
          <span className="text-white/70">•</span>
          <span className="text-white/70">200+ recensioni</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;