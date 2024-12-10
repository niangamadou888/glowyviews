import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/10" />
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-glow">
          Comprare Visualizzazioni YouTube: Italiane e Reali
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          Se stai cercando di acquistare visualizzazioni YouTube, e' importante farlo nel modo giusto. Noi di SocialX offriamo Visualizzazioni YouTube 100% reali e da profili italiani, a prezzi accessibili.
        </p>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-8">
          Acquista subito visualizzazioni in modo sicuro e confidenziale tramite la nostra piattaforma.
        </p>

        <Button size="lg" className="glow bg-primary hover:bg-primary/90 text-white">
          Inizia Ora
        </Button>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
    </div>
  );
};

export default Hero;