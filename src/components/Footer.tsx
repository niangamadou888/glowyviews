
import { Mail, Phone, MapPin, Shield, FileText, RefreshCw, ScrollText, Eye, ThumbsUp, UserPlus, MessageCircle, Share2 } from "lucide-react";
import { Link } from "react-router-dom";
import { FaCcVisa } from "react-icons/fa";
import { RiMastercardFill } from "react-icons/ri";
import { SiAmericanexpress } from "react-icons/si";
import { MdOutlineContactPhone } from "react-icons/md";
import { FaBitcoin } from "react-icons/fa";
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Player } from "@lordicon/react";
import { FaEthereum } from "react-icons/fa";
import youtubeIcon from "../assets/icons/wired-flat-2547-logo-youtube-hover-pinch.json";
import instagramIcon from "../assets/icons/wired-flat-2542-logo-instagram-hover-pinch.json";
import twitterIcon from "../assets/icons/wired-flat-2714-logo-x-hover-pinch.json";
import tiktokIcon from "../assets/icons/wired-flat-2546-logo-tiktok-hover-pinch.json";

const Footer = () => {
  const [expandedService, setExpandedService] = useState<string | null>(null);
  const youtubeIconRef = useRef<Player | null>(null);
  const instagramIconRef = useRef<Player | null>(null);
  const twitterIconRef = useRef<Player | null>(null);
  const tiktokIconRef = useRef<Player | null>(null);

  const toggleService = (service: string) => {
    if (expandedService === service) {
      setExpandedService(null);
    } else {
      setExpandedService(service);
    }
  };

  const services = {
    YouTube: {
      icon: youtubeIcon,
      ref: youtubeIconRef,
      color: 'red',
      items: [
        { name: 'YouTube Views', icon: <Eye className="h-4 w-4" /> },
        { name: 'YouTube Likes', icon: <ThumbsUp className="h-4 w-4" /> },
        { name: 'YouTube Subscribers', icon: <UserPlus className="h-4 w-4" /> },
        { name: 'YouTube Comments', icon: <MessageCircle className="h-4 w-4" /> },
        { name: 'YouTube Shares', icon: <Share2 className="h-4 w-4" /> }
      ]
    },
    Instagram: {
      icon: instagramIcon,
      ref: instagramIconRef,
      color: 'pink',
      items: [
        { name: 'Instagram Followers', icon: <UserPlus className="h-4 w-4" /> },
        { name: 'Instagram Likes', icon: <ThumbsUp className="h-4 w-4" /> },
        { name: 'Instagram Views', icon: <Eye className="h-4 w-4" /> }
      ]
    },
    Twitter: {
      icon: twitterIcon,
      ref: twitterIconRef,
      color: 'blue',
      items: [
        { name: 'Twitter Followers', icon: <UserPlus className="h-4 w-4" /> },
        { name: 'Twitter Likes', icon: <ThumbsUp className="h-4 w-4" /> },
        { name: 'Twitter Retweets', icon: <Share2 className="h-4 w-4" /> }
      ]
    },
    TikTok: {
      icon: tiktokIcon,
      ref: tiktokIconRef,
      color: 'purple',
      items: [
        { name: 'TikTok Followers', icon: <UserPlus className="h-4 w-4" /> },
        { name: 'TikTok Likes', icon: <ThumbsUp className="h-4 w-4" /> },
        { name: 'TikTok Views', icon: <Eye className="h-4 w-4" /> }
      ]
    }
  };

  return (
    <footer className="relative w-full bg-background/50 backdrop-blur-md border-t border-primary/20">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-primary/10" />
      <div className="relative max-w-7xl mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-primary mb-4">
              <span><span className="text-white">Glow</span>Likes</span>
            </h3>
            <p className="text-white leading-relaxed">
              Potenzia i tuoi profili social con i nostri servizi premium. Garantiamo interazioni di qualità e reali che ti aiutano a crescere, in modo sicuro.
            </p>
            <Button size="lg" className="glow bg-primary hover:bg-primary/90 text-white text-[20px]">
              Accedi
            </Button>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-primary">
              <span>Servizi</span>
            </h4>
            <ul className="space-y-2">
              {Object.entries(services).map(([serviceName, service]) => (
                <li key={serviceName} className="space-y-2">
                  <button
                    onClick={() => toggleService(serviceName)}
                    onMouseEnter={() => service.ref.current?.playFromBeginning()}
                    className={`group relative flex items-center justify-between w-full px-4 py-2 text-left text-white hover:text-${service.color}-500 hover:bg-${service.color}-500/30 hover:shadow-[0_0_25px_rgba(239,68,68,0.5)] transition-all duration-300 backdrop-blur-sm hover:backdrop-blur-md rounded-lg border border-transparent hover:border-${service.color}-500/50 hover:scale-105 active:scale-95`}
                  >
                    <div className={`absolute inset-0 -z-10 bg-gradient-to-r from-${service.color}-500/10 via-${service.color}-500/50 to-${service.color}-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg`} />
                    <div className="flex items-center space-x-2">
                      <Player
                        ref={service.ref}
                        icon={service.icon}
                        size={24}
                        state="morph"
                      />
                      <span>{serviceName}</span>
                    </div>
                    <span className="text-lg">{expandedService === serviceName ? '-' : '+'}</span>
                  </button>
                  {expandedService === serviceName && (
                    <ul className="pl-4 space-y-2 animate-slideDown">
                      {service.items.map((item) => (
                        <li key={item.name}>
                          <Link
                            to={`/${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                            className={`text-white hover:text-${service.color}-500 transition-colors duration-300 inline-flex items-center space-x-2 text-sm group`}
                          >
                            <span className="group-hover:animate-bounce">{item.icon}</span>
                            <span>{item.name}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-primary">
              <span>Link Utili</span>
            </h4>
            <ul className="space-y-3">
              {[
                { name: 'Privacy Policy', icon: <FileText className="h-4 w-4" /> },
                { name: 'Refund Policy', icon: <RefreshCw className="h-4 w-4" /> },
                { name: 'Terms of Service', icon: <ScrollText className="h-4 w-4" /> }
              ].map((link) => (
                <li key={link.name} className="group">
                  <Link 
                    to={`/${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                    className="relative inline-flex items-center space-x-2 text-white hover:text-primary transition-colors duration-300 group"
                  >
                    <span className="text-white/60 group-hover:text-primary transition-colors duration-300 group-hover:animate-bounce">{link.icon}</span>
                    <span className="relative">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-primary">
              <span>Contattaci</span>
            </h4>
            <div className="space-y-4">
              <a href="mailto:info@glowyviews.com" className="flex items-center space-x-3 text-white hover:text-primary transition-colors duration-300 group">
                <Mail className="h-5 w-5 text-white/60 group-hover:text-primary group-hover:animate-bounce" />
                <span className="relative">supporto@glowlikes.it</span>
              </a>
              <a className="flex items-center space-x-3 text-white hover:text-primary transition-colors duration-300 group">
              <MdOutlineContactPhone className="h-5 w-5 text-white/60 group-hover:text-primary group-hover:animate-bounce" />
                <span className="relative">Modulo di contatto</span>
              </a>
              <Link to="/contact">
                <Button 
                  className="w-full mt-4 bg-primary hover:bg-primary/90 text-white transition-all duration-300 shadow-lg hover:shadow-primary/20 hover:scale-105 active:scale-95"
                >
                  Contattaci
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="relative pt-8 border-t border-primary/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/70 text-sm">
              &copy; 2024 GlowLikes. Tutti i diritti riservati.
            </p>
            <div className="flex items-center space-x-3">
              <Shield className="h-5 w-5 text-green-500" />
              <div className="text-left">
                <h4 className="text-sm font-semibold text-white/80">Pagamento Sicuro</h4>
                <p className="text-xs text-white/60">I dati di pagamento sono criptati e protetti da tecnologia SSL</p>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <FaCcVisa className="h-8 w-auto text-white/60 hover:text-primary/80 transition-colors duration-300" />
              <RiMastercardFill className="h-8 w-auto text-white/60 hover:text-primary/80 transition-colors duration-300" />
              <SiAmericanexpress className="h-8 w-auto text-white/60 hover:text-primary/80 transition-colors duration-300" />
              <FaEthereum className="h-8 w-auto text-white/60 hover:text-primary/80 transition-colors duration-300" />
              <FaBitcoin className="h-8 w-auto text-white/60 hover:text-primary/80 transition-colors duration-300" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
