import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/SectionHeading";
import { companyInfo } from "@/data/products";
import { Beaker, Award, Users, Heart, Atom, ShieldCheck, Stethoscope, BarChart3 } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Atom,
      title: "NDDS Technology",
      description: "Advanced Novel Drug Delivery Systems for precise, targeted ingredient release."
    },
    {
      icon: ShieldCheck,
      title: "Pharmaceutical Integrity",
      description: "Every formulation meets pharmaceutical-grade quality, safety, and stability standards."
    },
    {
      icon: Stethoscope,
      title: "Dermatologist Collaboration",
      description: "Co-developed and validated by leading dermatologists and clinical researchers."
    },
    {
      icon: BarChart3,
      title: "Clinical Performance",
      description: "Evidence-based actives delivering measurable, predictable therapeutic results."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-sage-gradient section-padding">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-block text-sm font-medium uppercase tracking-widest text-muted-foreground mb-4">
              About Us
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight mb-6">
              Pioneering the Future of Skincare
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Where cutting-edge science meets clinical excellence
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Profile */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <SectionHeading
            title="Our Story"
            subtitle="A commitment to dermatological excellence"
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="prose prose-lg max-w-none"
          >
            <p className="text-muted-foreground leading-relaxed text-justified mb-6">
              EPIOLE TRANSDERMIC, the flagship brand of Curetique Life Sciences Private Limited, represents the forefront of derma pharmaceutical innovation, delivering clinically engineered solutions for both skin and hair care.
Founded with a vision to transform topical therapy through advanced Novel Drug Delivery Systems (NDDS), we bridge the gap between pharmaceuticals and everyday personal care. Our philosophy is simple yet powerful true efficacy is not defined by ingredients alone, but by how effectively they reach the biological layers where they create measurable change.
            </p>
            
            <p className="text-muted-foreground leading-relaxed text-justified mb-6">
              This scientific approach led us to develop proprietary delivery platforms that enhance penetration, improve bioavailability, and enable controlled, targeted release of active ingredients within the skin and scalp. By optimizing absorption and stability, our systems ensure superior performance with minimal irritation and consistent therapeutic outcomes
            </p>

            <p className="text-muted-foreground leading-relaxed text-justified mb-6">
              Today, our comprehensive portfolio addresses a wide spectrum of dermatological and trichological concerns including acne, pigmentation, hydration, barrier repair, sun protection, hair fall control, scalp health, and hair density improvement. Each formulation is built on evidence based actives, advanced delivery technologies, and pharmaceutical grade manufacturing standards Developed through extensive research, rigorous testing, and close collaboration with dermatologists and healthcare professionals, our products deliver professional grade efficacy with everyday usability..
            </p>

            <p className="text-muted-foreground leading-relaxed text-justified mb-10">
              At EPIOLE TRANSDERMIC, we believe that effective care should be accessible, reliable, and rooted in science. We are committed to the highest standards of quality, safety, and clinical performance in everything we create.
Pharmaceutical integrity. Clinical precision. Visible results.
We don’t create cosmetics.
We engineer therapeutic skin and hair solutions.
            </p>

            {/* Closing Highlight */}
            <div className="border-l-4 border-bronze pl-6 py-2">
              <p className="font-serif text-lg md:text-xl font-semibold text-foreground leading-relaxed mb-2">
                Pharmaceutical integrity.<br />
                Clinical precision.<br />
                Visible results.
              </p>
              <p className="text-bronze font-medium italic mt-4">
                We don't create cosmetics.<br />
                We engineer therapeutic skin and hair solutions.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-muted/50">
        <div className="container-wide">
          <SectionHeading
            title="Our Core Pillars"
            subtitle="The principles that guide everything we do"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-background rounded-xl p-6 border border-border text-center"
                >
                  <div className="w-14 h-14 rounded-full bg-bronze/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-bronze" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Research Focus */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <SectionHeading
            title="Research & Development"
            subtitle="Innovation at the core of everything we create"
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-clinical-gradient rounded-2xl p-8 md:p-12 border border-border"
          >
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-2">
                  100%
                </div>
                <p className="text-muted-foreground">Clinically Tested Products</p>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-2">
                  8+
                </div>
                <p className="text-muted-foreground">Product Categories</p>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-2">
                  Advanced
                </div>
                <p className="text-muted-foreground">NDDS Technology</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
