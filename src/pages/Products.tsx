import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import ProductCard from "@/components/ProductCard";
import SectionHeading from "@/components/SectionHeading";
import { availableProducts } from "@/data/products";

const Products = () => {
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
              Our Collection
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight mb-6">
              Products
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Discover our complete range of clinically advanced skincare solutions, 
              each formulated with precision to address specific skin concerns.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {availableProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Quality Promise */}
      <section className="section-padding-sm bg-sage-gradient">
        <div className="container-narrow text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Quality You Can Trust
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto text-justified">
              Every EPIOLE TRANSDERMIC product undergoes rigorous dermatological testing 
              and is formulated with the highest quality, clinically proven ingredients. 
              We never compromise on safety, efficacy, or quality.
            </p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Products;
