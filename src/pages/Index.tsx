import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Eye, Target, Check, Phone, Mail, Clock, MessageCircle, Microscope, Shield, FlaskConical, Sparkles, Atom, Crosshair, Rocket, Brain, Dna } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/SectionHeading";
import { brandContent, companyInfo } from "@/data/products";
import heroBanner from "@/assets/hero-banner.jpg";
import epioleVowsImg from "@/assets/epiole-vows.jpg";

const Index = () => {
  const vowsContent = [
    {
      icon: Microscope,
      title: "Clinical Precision",
      description: "Every Epiole formulation is built with dermatologically proven actives, selected at optimal concentrations for efficacy and safety. Each ingredient has a role. Nothing is random."
    },
    {
      icon: Shield,
      title: "Barrier Respect Philosophy",
      description: "Healthy skin starts with a strong barrier. Our products are designed to repair, protect, and strengthen the skin's natural defense system making them suitable even for compromised and sensitive skin."
    },
    {
      icon: Check,
      title: "Prescription Grade Trust",
      description: "Epiole Transdermic products are created to support clinical practice. Reliable. Predictable. Results driven. Because dermatologists deserve formulations they can trust."
    },
    {
      icon: FlaskConical,
      title: "Transparent Science",
      description: "We believe confidence comes from clarity. Our labels, claims, and formulations are honest, evidence based, and easy to understand for doctors and patients alike."
    }
  ];

  const missionIcons = [
    { icon: Atom, label: "NDDS Technology" },
    { icon: FlaskConical, label: "Clinical Research" },
    { icon: Crosshair, label: "Targeted Efficacy" },
  ];

  const visionIcons = [
    { icon: Rocket, label: "Innovation" },
    { icon: Brain, label: "Precision Delivery" },
    { icon: Dna, label: "Future Science" },
  ];

  return (
    <Layout>
      {/* Hero Banner */}
      <section className="overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <img
            src={heroBanner}
            alt="Epiole Transdermic Product Range"
            className="w-full h-auto object-cover"
          />
        </motion.div>
      </section>

      {/* Hero Text Section */}
      <section className="bg-hero-gradient section-padding overflow-hidden relative">
        <div className="absolute inset-0 bg-pattern-dots opacity-40" />
        <div className="container-wide relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-block text-sm font-medium uppercase tracking-widest text-muted-foreground mb-4">
              Premium Derma-Pharmaceutical Solutions
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight mb-6">
              Science-Backed Care for{" "}
              <span className="text-bronze">Skin & Hair</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed text-justified max-w-3xl mx-auto mb-10">
              At EPIOLE TRANSDERMIC, we engineer clinically advanced formulations powered by
              Novel Drug Delivery Systems (NDDS). Our dermatologist-trusted solutions deliver
              active ingredients precisely where they are needed most — ensuring optimal
              absorption, targeted efficacy, and measurable results.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/products"
                className="inline-flex items-center justify-center px-6 py-3 bg-bronze text-white font-medium rounded-lg hover:bg-bronze-light transition-colors"
              >
                Explore Products
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center justify-center px-6 py-3 border border-foreground text-foreground font-medium rounded-lg hover:bg-foreground hover:text-primary-foreground transition-colors"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Our Vision */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-bronze/10 to-accent rounded-2xl p-8 md:p-10 border border-bronze/20"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-full bg-bronze flex items-center justify-center">
                  <Eye className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-serif text-2xl md:text-3xl font-semibold text-foreground">
                  Our Vision
                </h3>
              </div>
              <div className="flex gap-3 mb-6">
                {visionIcons.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="flex items-center gap-1.5 text-xs text-muted-foreground bg-background/60 rounded-full px-3 py-1.5 border border-border">
                      <Icon className="w-3.5 h-3.5 text-bronze" />
                      {item.label}
                    </div>
                  );
                })}
              </div>
              <p className="text-foreground/80 leading-relaxed text-justified">
                {brandContent.vision}
              </p>
            </motion.div>

            {/* Our Mission */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-sage to-background rounded-2xl p-8 md:p-10 border border-border"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-full bg-bronze flex items-center justify-center">
                  <Target className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-serif text-2xl md:text-3xl font-semibold text-foreground">
                  Our Mission
                </h3>
              </div>
              <div className="flex gap-3 mb-6">
                {missionIcons.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="flex items-center gap-1.5 text-xs text-muted-foreground bg-background/60 rounded-full px-3 py-1.5 border border-border">
                      <Icon className="w-3.5 h-3.5 text-bronze" />
                      {item.label}
                    </div>
                  );
                })}
              </div>
              <p className="text-foreground/80 leading-relaxed text-justified">
                {brandContent.mission}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Epiole Vows Section */}
      <section className="section-padding bg-background relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url(${epioleVowsImg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/85 to-background/95" />
        <div className="container-wide relative z-10">
          <SectionHeading
            title="Epiole Vows"
            subtitle="At Epiole Transdermic, we believe skin health begins beneath the surface. Our formulations are designed to work through the skin barrier, targeting concerns at their biological root not masking symptoms."
          />

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {vowsContent.map((vow, index) => {
              const Icon = vow.icon;
              return (
                <motion.div
                  key={vow.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-card/90 backdrop-blur-sm rounded-xl p-6 border border-bronze/20 shadow-card"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-bronze/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-bronze" />
                    </div>
                    <div>
                      <h4 className="font-serif text-lg font-semibold text-foreground mb-2">
                        {vow.title}
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed text-justified">
                        {vow.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* The Epiole Promise */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <SectionHeading
            title="The Epiole Promise"
            subtitle="Our commitment to quality, safety, and efficacy"
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Dermatologist Tested", desc: "All products clinically tested for safety" },
                { title: "Paraben Free", desc: "Free from harmful preservatives" },
                { title: "Cruelty Free", desc: "Never tested on animals" },
                { title: "SLS Free", desc: "Gentle formulations for all skin types" },
              ].map((vow, index) => (
                <motion.div
                  key={vow.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-6 bg-card rounded-xl border border-bronze/20"
                >
                  <div className="w-12 h-12 rounded-full bg-bronze/10 flex items-center justify-center mx-auto mb-4">
                    <Check className="w-6 h-6 text-bronze" />
                  </div>
                  <h4 className="font-serif text-lg font-semibold text-foreground mb-2">
                    {vow.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">{vow.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="section-padding bg-gradient-to-br from-bronze/10 to-sage/50">
        <div className="container-wide">
          <SectionHeading
            title="Contact Us"
            subtitle="Get in touch with our team for any inquiries"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <motion.a
              href={`tel:${companyInfo.phone.replace(/[^+\d]/g, "")}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="bg-card rounded-xl p-6 border border-bronze/20 shadow-card hover:shadow-elevated transition-all group"
            >
              <div className="w-12 h-12 rounded-full bg-bronze/10 flex items-center justify-center mb-4 group-hover:bg-bronze/20 transition-colors">
                <Phone className="w-6 h-6 text-bronze" />
              </div>
              <h4 className="font-serif text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                <Phone className="w-4 h-4 text-bronze" />
                Phone
              </h4>
              <p className="text-muted-foreground">{companyInfo.phone}</p>
            </motion.a>

            <motion.a
              href={`mailto:${companyInfo.email}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-card rounded-xl p-6 border border-bronze/20 shadow-card hover:shadow-elevated transition-all group"
            >
              <div className="w-12 h-12 rounded-full bg-bronze/10 flex items-center justify-center mb-4 group-hover:bg-bronze/20 transition-colors">
                <Mail className="w-6 h-6 text-bronze" />
              </div>
              <h4 className="font-serif text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                <Mail className="w-4 h-4 text-bronze" />
                Email
              </h4>
              <p className="text-muted-foreground text-sm break-all">{companyInfo.email}</p>
            </motion.a>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-card rounded-xl p-6 border border-bronze/20 shadow-card"
            >
              <div className="w-12 h-12 rounded-full bg-bronze/10 flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-bronze" />
              </div>
              <h4 className="font-serif text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                <Clock className="w-4 h-4 text-bronze" />
                Business Hours
              </h4>
              <p className="text-muted-foreground text-sm">{companyInfo.businessHours}</p>
            </motion.div>

            <motion.a
              href={companyInfo.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-emerald-600 rounded-xl p-6 shadow-card hover:bg-emerald-700 transition-all group"
            >
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-4 group-hover:bg-white/30 transition-colors">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-serif text-lg font-semibold text-white mb-2 flex items-center gap-2">
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </h4>
              <p className="text-white/80 text-sm">Chat with us directly</p>
            </motion.a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
