import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
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
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform">
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-primary">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Services', 'Blog', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    to="#" 
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:translate-x-2 transform inline-block"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-primary">Our Services</h4>
            <ul className="space-y-2">
              {['YouTube Views', 'Instagram Followers', 'Facebook Likes', 'Twitter Engagement'].map((service) => (
                <li key={service}>
                  <Link 
                    to="#" 
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:translate-x-2 transform inline-block"
                  >
                    {service}
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
              © 2024 GlowyViews. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="#" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link to="#" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
                Terms of Service
              </Link>
              <Link to="#" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;