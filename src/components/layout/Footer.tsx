import { Link } from "react-router-dom";
import { Home, Info, ShoppingBag, Rocket, Phone, Facebook, Instagram, Linkedin, MessageCircle } from "lucide-react";
import logo from "@/assets/logo.jpg";
import { companyInfo } from "@/data/products";

const quickLinks = [
  { name: "Home", path: "/", icon: Home },
  { name: "About Us", path: "/about", icon: Info },
  { name: "Products", path: "/products", icon: ShoppingBag },
  { name: "Upcoming Products", path: "/upcoming", icon: Rocket },
  { name: "Contact Us", path: "/contact", icon: Phone },
];

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container-wide section-padding-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <img
                src={logo}
                alt="Epiole Transdermic Logo"
                className="h-12 w-auto brightness-0 invert"
              />
              <div className="flex flex-col">
                <span className="brand-name brand-name-main text-xl text-primary-foreground leading-tight">
                  EPIOLE
                </span>
                <span className="brand-name brand-name-sub text-[0.65rem] text-primary-foreground/70 leading-tight">
                  TRANSDERMIC
                </span>
              </div>
            </Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed max-w-md text-justified">
              Premium derma-pharmaceutical solutions backed by science. We combine cutting-edge 
              transdermal technology with clinically proven ingredients to deliver skincare 
              that truly works.
            </p>
            
            {/* Social Icons */}
            <div className="flex items-center gap-4 mt-6">
              <a
                href={companyInfo.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href={companyInfo.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={companyInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={companyInfo.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center hover:bg-green-700 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Quick Links</h4>
            <nav className="space-y-2">
              {quickLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    <Icon className="w-4 h-4" />
                    {link.name}
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-sm text-primary-foreground/70">
              <p>
                <span className="block text-primary-foreground font-medium">Phone</span>
                {companyInfo.phone}
              </p>
              <p>
                <span className="block text-primary-foreground font-medium">Email</span>
                {companyInfo.email}
              </p>
              <p>
                <span className="block text-primary-foreground font-medium">Hours</span>
                {companyInfo.businessHours}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/60">
              © {new Date().getFullYear()} {companyInfo.parent}. All rights reserved.
            </p>
            <p className="text-sm text-primary-foreground/60">
              Premium Derma-Pharmaceutical Solutions
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
