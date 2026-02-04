import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin, MessageCircle } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { companyInfo } from "@/data/products";

const Contact = () => {
  const contactItems = [
    {
      icon: Phone,
      title: "Phone",
      content: companyInfo.phone,
      href: `tel:${companyInfo.phone.replace(/[^+\d]/g, "")}`
    },
    {
      icon: Mail,
      title: "Email",
      content: companyInfo.email,
      href: `mailto:${companyInfo.email}`
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: companyInfo.businessHours,
      href: null
    }
  ];

  const socialLinks = [
    { icon: Facebook, name: "Facebook", href: companyInfo.social.facebook },
    { icon: Instagram, name: "Instagram", href: companyInfo.social.instagram },
    { icon: Linkedin, name: "LinkedIn", href: companyInfo.social.linkedin },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-clinical-gradient section-padding-sm border-b border-border">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-block text-sm font-medium uppercase tracking-widest text-muted-foreground mb-4">
              Get In Touch
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight mb-6">
              Contact Us
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Have questions about our products? We're here to help.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Details */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-8">
                Contact Information
              </h2>

              <div className="space-y-6">
                {contactItems.map((item, index) => {
                  const Icon = item.icon;
                  const content = item.href ? (
                    <a
                      href={item.href}
                      className="text-foreground hover:text-sage-dark transition-colors"
                    >
                      {item.content}
                    </a>
                  ) : (
                    <span className="text-foreground">{item.content}</span>
                  );

                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
                      className="flex items-start gap-4"
                    >
                      <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-accent-foreground" />
                      </div>
                      <div>
                        <h3 className="font-medium text-muted-foreground text-sm mb-1">
                          {item.title}
                        </h3>
                        <p className="text-lg">{content}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Address */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="mt-8"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-medium text-muted-foreground text-sm mb-1">
                      Address
                    </h3>
                    <p className="text-lg text-foreground">
                      {companyInfo.parent}
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-1">
                      {companyInfo.address.line1}<br />
                      {companyInfo.address.line2}<br />
                      {companyInfo.address.city}, {companyInfo.address.state}<br />
                      {companyInfo.address.country} – {companyInfo.address.zip}
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Social Links & WhatsApp */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-8">
                Follow Us On
              </h2>

              {/* Social Icons */}
              <div className="flex flex-wrap gap-4 mb-10">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-5 py-3 bg-muted rounded-lg hover:bg-accent transition-colors group"
                    >
                      <Icon className="w-5 h-5 text-muted-foreground group-hover:text-accent-foreground" />
                      <span className="font-medium text-foreground">{social.name}</span>
                    </a>
                  );
                })}
              </div>

              {/* WhatsApp CTA */}
              <div className="bg-sage-gradient rounded-2xl p-8">
                <h3 className="font-serif text-xl font-semibold text-foreground mb-4">
                  Chat with Us on WhatsApp
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  For quick inquiries and support, reach out to us directly on WhatsApp.
                </p>
                <a
                  href={companyInfo.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  Chat on WhatsApp
                </a>
              </div>

              {/* Company Info Box */}
              <div className="mt-8 bg-muted/50 rounded-xl p-6 border border-border">
                <h4 className="font-serif text-lg font-semibold text-foreground mb-2">
                  {companyInfo.name}
                </h4>
                <p className="text-sm text-muted-foreground">
                  A brand of {companyInfo.parent}
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Premium Derma-Pharmaceutical Solutions
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
