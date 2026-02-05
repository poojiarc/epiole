import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Eye, Target, Check, Phone, Mail, Clock, MapPin, MessageCircle, Microscope, Shield, FlaskConical, Sparkles } from "lucide-react";
import Layout from "@/components/layout/Layout";
import ProductCard from "@/components/ProductCard";
import SectionHeading from "@/components/SectionHeading";
import { availableProducts, brandContent, companyInfo } from "@/data/products";
import brandGirl from "@/assets/brand-girl.jpeg";
import logo from "@/assets/logo.jpg";
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

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-hero-gradient section-padding overflow-hidden">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left: Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <span className="inline-block text-sm font-medium uppercase tracking-widest text-muted-foreground mb-4">
                Premium Derma-Pharmaceutical
              </span>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight mb-6">
                Science-Backed Skincare for{" "}
                <span className="text-bronze">Radiant Skin</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed text-justified mb-8">
                At EPIOLE TRANSDERMIC, we revolutionize skincare through cutting-edge transdermal 
                technology. Our clinically advanced formulations deliver active ingredients precisely 
                where they are needed most, ensuring optimal absorption and efficacy. Experience 
                dermatologist-trusted solutions that combine scientific innovation with the finest 
                ingredients for truly transformative results.
              </p>
              <div className="flex flex-wrap gap-4">
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

            {/* Right: Brand Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="order-1 lg:order-2"
            >
              <div className="relative">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-elevated">
                  <img
                    src={brandGirl}
                    alt="Epiole Transdermic - Premium Skincare"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Floating Logo Badge */}
                <div className="absolute -bottom-6 -left-6 bg-background p-4 rounded-xl shadow-card border border-bronze/20">
                  <img src={logo} alt="Epiole Logo" className="h-16 w-auto" />
                </div>
              </div>
            </motion.div>
          </div>
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
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full bg-bronze flex items-center justify-center">
                  <Eye className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-serif text-2xl md:text-3xl font-semibold text-foreground">
                  Our Vision
                </h3>
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
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full bg-bronze flex items-center justify-center">
                  <Target className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-serif text-2xl md:text-3xl font-semibold text-foreground">
                  Our Mission
                </h3>
              </div>
              <p className="text-foreground/80 leading-relaxed text-justified">
                {brandContent.mission}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Products Preview Section */}
      <section className="section-padding bg-muted/50">
        <div className="container-wide">
          <SectionHeading
            title="Our Products"
            subtitle="Discover our range of clinically advanced skincare solutions"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {availableProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              to="/products"
              className="inline-flex items-center gap-2 px-8 py-3 bg-bronze text-white font-medium rounded-lg hover:bg-bronze-light transition-colors"
            >
              View All Products
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </motion.div>
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

      {/* Epiole Vows Section */}
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
            {/* Phone */}
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

            {/* Email */}
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

            {/* Hours */}
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

            {/* WhatsApp */}
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
              <p className="text-white/90 text-sm">Chat with us now</p>
            </motion.a>
          </div>

          {/* Address */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto mt-8"
          >
            <div className="bg-card rounded-xl p-6 border border-bronze/20 shadow-card text-center">
              <div className="w-12 h-12 rounded-full bg-bronze/10 flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-bronze" />
              </div>
              <h4 className="font-serif text-lg font-semibold text-foreground mb-2">
                {companyInfo.parent}
              </h4>
              <p className="text-muted-foreground">
                {companyInfo.address.line1}, {companyInfo.address.line2}<br />
                {companyInfo.address.city}, {companyInfo.address.state}, {companyInfo.address.country} – {companyInfo.address.zip}
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
