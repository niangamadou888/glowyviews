import { Mail, Phone, MapPin, Shield, FileText, RefreshCw, ScrollText, Eye, ThumbsUp, UserPlus, MessageCircle, Share2 } from "lucide-react";
import { Link } from "react-router-dom";
import { FaCcVisa } from "react-icons/fa";
import { RiMastercardFill } from "react-icons/ri";
import { SiAmericanexpress } from "react-icons/si";
import { FaStripeS } from "react-icons/fa";
import { FaBitcoin } from "react-icons/fa";
import { useState, useRef } from "react";
import { Player } from "@lordicon/react";
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
            <h3 className="text-3xl font-bold text-primary text-glow mb-4 relative">
              <span className="relative z-10">GlowyViews</span>
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20 blur-lg opacity-50" />
            </h3>
            <p className="text-muted-foreground/80 leading-relaxed">
              Boost your social media presence with our premium YouTube views service. We provide high-quality engagement that helps you grow.
            </p>
            <Link
              to="/login"
              className="group relative inline-flex items-center px-6 py-3 text-sm bg-primary/10 text-primary rounded-md hover:bg-primary/20 transition-colors duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg" />
              <span className="relative">Log In</span>
            </Link>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-primary relative inline-block">
              <span className="relative z-10">Services</span>
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20 blur-lg opacity-50" />
            </h4>
            <ul className="space-y-2">
              {Object.entries(services).map(([serviceName, service]) => (
                <li key={serviceName} className="space-y-2">
                  <button
                    onClick={() => toggleService(serviceName)}
                    onMouseEnter={() => service.ref.current?.playFromBeginning()}
                    className={`group relative flex items-center justify-between w-full px-4 py-2 text-left text-muted-foreground hover:text-${service.color}-500 hover:bg-${service.color}-500/30 hover:shadow-[0_0_25px_rgba(239,68,68,0.5)] transition-all duration-300 backdrop-blur-sm hover:backdrop-blur-md rounded-lg border border-transparent hover:border-${service.color}-500/50 hover:scale-105 active:scale-95`}
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
                            className={`text-muted-foreground/80 hover:text-${service.color}-500 transition-colors duration-300 hover:translate-x-2 transform inline-flex items-center space-x-2 text-sm`}
                          >
                            {item.icon}
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
            <h4 className="text-xl font-semibold text-primary relative inline-block">
              <span className="relative z-10">Quick Links</span>
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20 blur-lg opacity-50" />
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
                    className="relative inline-flex items-center space-x-2 text-muted-foreground/80 hover:text-primary transition-colors duration-300 hover:translate-x-2 transform"
                  >
                    <span className="text-muted-foreground/60 group-hover:text-primary transition-colors duration-300">{link.icon}</span>
                    <span className="relative">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-primary relative inline-block">
              <span className="relative z-10">Contact Us</span>
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20 blur-lg opacity-50" />
            </h4>
            <div className="space-y-4">
              <a href="mailto:info@glowyviews.com" className="flex items-center space-x-3 text-muted-foreground/80 hover:text-primary transition-colors duration-300 group">
                <Mail className="h-5 w-5 group-hover:animate-bounce" />
                <span className="relative">info@glowyviews.com</span>
              </a>
              <a href="tel:+1234567890" className="flex items-center space-x-3 text-muted-foreground/80 hover:text-primary transition-colors duration-300 group">
                <Phone className="h-5 w-5 group-hover:animate-bounce" />
                <span className="relative">+1 (234) 567-890</span>
              </a>
              <div className="flex items-center space-x-3 text-muted-foreground/80 group">
                <MapPin className="h-5 w-5 group-hover:animate-bounce" />
                <span className="relative">123 Social Street, Digital City</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="relative pt-8 border-t border-primary/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground/70 text-sm">
              2024 GlowyViews. All rights reserved.
            </p>
            <div className="flex items-center space-x-3">
              <Shield className="h-5 w-5 text-green-500" />
              <div className="text-left">
                <h4 className="text-sm font-semibold text-muted-foreground/80">SSL Secure Payment</h4>
                <p className="text-xs text-muted-foreground/60">Your payment is protected by 256-bit SSL encryption</p>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <FaCcVisa className="h-8 w-auto text-muted-foreground/60 hover:text-primary/80 transition-colors duration-300" />
              <RiMastercardFill className="h-8 w-auto text-muted-foreground/60 hover:text-primary/80 transition-colors duration-300" />
              <SiAmericanexpress className="h-8 w-auto text-muted-foreground/60 hover:text-primary/80 transition-colors duration-300" />
              <FaStripeS className="h-8 w-auto text-muted-foreground/60 hover:text-primary/80 transition-colors duration-300" />
              <FaBitcoin className="h-8 w-auto text-muted-foreground/60 hover:text-primary/80 transition-colors duration-300" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;