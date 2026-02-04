import { motion } from "framer-motion";
import { Rocket, FlaskConical } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/SectionHeading";
import { upcomingProducts } from "@/data/products";

const UpcomingProducts = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-sage-gradient section-padding-sm border-b border-border">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-block text-sm font-medium uppercase tracking-widest text-muted-foreground mb-4">
              Innovation in Progress
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight mb-6">
              Upcoming Products
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Discover what's next in our research and development pipeline.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Coming Soon Content */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          {upcomingProducts.length > 0 ? (
            <>
              <SectionHeading
                title="In Development"
                subtitle="These products are currently in our R&D stage"
              />
              
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {upcomingProducts.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-card rounded-2xl overflow-hidden border border-border shadow-card"
                  >
                    {/* Product Image */}
                    <div className="aspect-[4/3] overflow-hidden bg-muted relative">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover opacity-90"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
                      <div className="absolute top-4 right-4 bg-foreground text-primary-foreground px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                        <FlaskConical className="w-3 h-3" />
                        R&D Stage
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <span className="inline-block text-xs font-medium uppercase tracking-wider text-muted-foreground mb-2">
                        {product.category}
                      </span>
                      <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                        {product.name}
                      </h3>
                      <p className="text-sm text-sage-dark font-medium mb-3">
                        {product.tagline}
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {product.shortDescription}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl mx-auto text-center py-16"
            >
              <div className="w-24 h-24 rounded-full bg-accent flex items-center justify-center mx-auto mb-8">
                <Rocket className="w-12 h-12 text-accent-foreground" />
              </div>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
                Coming Soon
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our team is working on exciting new formulations. 
                Stay tuned for groundbreaking skincare innovations that will 
                continue our legacy of clinical excellence.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* R&D Notice */}
      <section className="section-padding-sm bg-muted/50">
        <div className="container-narrow text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-background rounded-2xl p-8 border border-border"
          >
            <FlaskConical className="w-10 h-10 text-sage-dark mx-auto mb-4" />
            <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
              Research & Development
            </h3>
            <p className="text-muted-foreground leading-relaxed text-justified max-w-2xl mx-auto">
              All upcoming products undergo rigorous clinical testing and development 
              before launch. Our commitment to quality means we never rush to market. 
              Each formulation is perfected to meet our exacting standards of efficacy, 
              safety, and dermatological excellence.
            </p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default UpcomingProducts;
