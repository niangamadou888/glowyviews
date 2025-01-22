import { Mail, Phone, MapPin, Shield } from "lucide-react";
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
        'YouTube Views',
        'YouTube Likes',
        'YouTube Subscribers',
        'YouTube Comments',
        'YouTube Shares'
      ]
    },
    Instagram: {
      icon: instagramIcon,
      ref: instagramIconRef,
      color: 'pink',
      items: [
        'Instagram Followers',
        'Instagram Likes',
        'Instagram Views'
      ]
    },
    Twitter: {
      icon: twitterIcon,
      ref: twitterIconRef,
      color: 'blue',
      items: [
        'Twitter Followers',
        'Twitter Likes',
        'Twitter Retweets'
      ]
    },
    TikTok: {
      icon: tiktokIcon,
      ref: tiktokIconRef,
      color: 'purple',
      items: [
        'TikTok Followers',
        'TikTok Likes',
        'TikTok Views'
      ]
    }
  };

  return (
    <footer className="w-full bg-secondary/50 backdrop-blur-sm border-t border-primary/20">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-primary text-glow mb-4">GlowyViews</h3>
            <p className="text-muted-foreground">
              Boost your social media presence with our premium YouTube views service.
            </p>
            <Link
              to="/login"
              className="inline-block px-4 py-2 text-sm bg-purple-600 text-white rounded-md hover:bg-purple-500 transition-colors duration-300 shadow-[0_0_5px_#8b5cf6,0_0_15px_#8b5cf6,0_0_30px_#8b5cf6]"
            >
              Log In
            </Link>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-primary">Services</h4>
            <ul className="space-y-2">
              {Object.entries(services).map(([serviceName, service]) => (
                <li key={serviceName} className="space-y-2">
                  <button
                    onClick={() => toggleService(serviceName)}
                    onMouseEnter={() => service.ref.current?.playFromBeginning()}
                    className={`group relative flex items-center justify-between w-full px-4 py-2 text-left text-muted-foreground hover:text-${service.color}-500 transition-colors duration-300 rounded-lg hover:bg-${service.color}-500/20`}
                  >
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
                        <li key={item}>
                          <Link
                            to={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                            className={`text-muted-foreground hover:text-${service.color}-500 transition-colors duration-300 hover:translate-x-2 transform inline-block text-sm group`}
                          >
                            <div className={`absolute inset-0 -z-10 bg-gradient-to-r from-${service.color}-500/10 via-${service.color}-500/50 to-${service.color}-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg`} />
                            {item}
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
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-primary">Quick Links</h4>
            <ul className="space-y-2">
              {['Privacy Policy', 'Refund Policy', 'Terms of Service'].map((links) => (
                <li key={links}>
                  <Link 
                    to={`/${links.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:translate-x-2 transform inline-block"
                  >
                    {links}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-primary">Contact Us</h4>
            <div className="space-y-3">
              <a href="mailto:info@glowyviews.com" className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors duration-300 group">
                <Mail className="h-5 w-5 group-hover:animate-bounce" />
                <span>info@glowyviews.com</span>
              </a>
              <a href="tel:+1234567890" className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors duration-300 group">
                <Phone className="h-5 w-5 group-hover:animate-bounce" />
                <span>+1 (234) 567-890</span>
              </a>
              <div className="flex items-center space-x-3 text-muted-foreground group">
                <MapPin className="h-5 w-5 group-hover:animate-bounce" />
                <span>123 Social Street, Digital City</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-sm">
              2024 GlowyViews. All rights reserved.
            </p>
            <div className="flex items-center space-x-2">
              <Shield className="h-5 w-5 text-green-500" />
              <div className="text-left">
                <h4 className="text-sm font-semibold text-muted-foreground">SSL Pagamento Sicuro</h4>
                <p className="text-xs text-muted-foreground">Il tuo pagamento è protetto da criptografia SSL a 256-bit</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
            <FaCcVisa  className="h-8 w-auto opacity-75 hover:opacity-100 transition-opacity"/>
            <RiMastercardFill className="h-8 w-auto opacity-75 hover:opacity-100 transition-opacity" />
            <SiAmericanexpress className="h-8 w-auto opacity-75 hover:opacity-100 transition-opacity" />
            <FaStripeS className="h-8 w-auto opacity-75 hover:opacity-100 transition-opacity" />
            <FaBitcoin className="h-8 w-auto opacity-75 hover:opacity-100 transition-opacity" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;