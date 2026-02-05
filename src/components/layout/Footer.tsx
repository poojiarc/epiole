import { Link } from "react-router-dom";
import { Home, Info, ShoppingBag, Rocket, Phone, Mail, Clock, MapPin, Facebook, Instagram, Linkedin, MessageCircle } from "lucide-react";
import logo from "@/assets/logo.jpg";
import { companyInfo } from "@/data/products";

const quickLinks = [
  { name: "Home", path: "/", icon: Home },
  { name: "About Us", path: "/about", icon: Info },
  { name: "Products", path: "/products", icon: ShoppingBag },
  { name: "Upcoming Products", path: "/upcoming", icon: Rocket },
  { name: "Contact Us", path: "/contact", icon: Phone },
];

const socialLinks = [
  { icon: Facebook, name: "Facebook", href: companyInfo.social.facebook },
  { icon: Instagram, name: "Instagram", href: companyInfo.social.instagram },
  { icon: Linkedin, name: "LinkedIn", href: companyInfo.social.linkedin },
];

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container-wide section-padding-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2 md:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <img
                src={logo}
                alt="Epiole Transdermic Logo"
                className="h-12 w-auto object-contain"
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
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4 flex items-center gap-2">
              <ShoppingBag className="w-4 h-4 text-bronze-light" />
              Quick Links
            </h4>
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
            <h4 className="font-serif text-lg font-semibold mb-4 flex items-center gap-2">
              <Phone className="w-4 h-4 text-bronze-light" />
              Contact
            </h4>
            <div className="space-y-3 text-sm text-primary-foreground/70">
              <p>
                <span className="flex items-center gap-2 text-primary-foreground font-medium mb-1">
                  <Phone className="w-3.5 h-3.5" />
                  Phone
                </span>
                {companyInfo.phone}
              </p>
              <p>
                <span className="flex items-center gap-2 text-primary-foreground font-medium mb-1">
                  <Mail className="w-3.5 h-3.5" />
                  Email
                </span>
                {companyInfo.email}
              </p>
              <p>
                <span className="flex items-center gap-2 text-primary-foreground font-medium mb-1">
                  <Clock className="w-3.5 h-3.5" />
                  Hours
                </span>
                {companyInfo.businessHours}
              </p>
            </div>
          </div>

          {/* Follow Us On */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4 flex items-center gap-2">
              <MessageCircle className="w-4 h-4 text-bronze-light" />
              Follow Us On
            </h4>
            <div className="space-y-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-full bg-primary-foreground/10 flex items-center justify-center group-hover:bg-primary-foreground/20 transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    {social.name}
                  </a>
                );
              })}
              <a
                href={companyInfo.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors group"
              >
                <div className="w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center group-hover:bg-emerald-700 transition-colors">
                  <MessageCircle className="w-4 h-4" />
                </div>
                WhatsApp
              </a>
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
