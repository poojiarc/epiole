import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Check, Beaker, Sparkles } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { products } from "@/data/products";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <Layout>
        <div className="section-padding container-narrow text-center">
          <h1 className="font-serif text-3xl font-semibold text-foreground mb-4">
            Product Not Found
          </h1>
          <p className="text-muted-foreground mb-8">
            The product you're looking for doesn't exist.
          </p>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-foreground font-medium hover:gap-3 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Products
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Breadcrumb */}
      <section className="bg-muted/50 py-4 border-b border-border">
        <div className="container-wide">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Products
          </Link>
        </div>
      </section>

      {/* Product Hero */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            {/* Product Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="aspect-square rounded-2xl overflow-hidden bg-muted shadow-card sticky top-24">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Product Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span className="inline-block text-sm font-medium uppercase tracking-widest text-muted-foreground mb-3">
                {product.category}
              </span>
              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-3">
                {product.name}
              </h1>
              <p className="text-lg text-sage-dark font-medium mb-6">
                {product.tagline}
              </p>
              <p className="text-muted-foreground leading-relaxed text-justified mb-8">
                {product.description}
              </p>

              {/* Key Benefits */}
              <div className="mb-8">
                <h3 className="font-serif text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-sage-dark" />
                  Key Benefits
                </h3>
                <ul className="space-y-3">
                  {product.keyBenefits.map((benefit, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.2 + index * 0.05 }}
                      className="flex items-start gap-3"
                    >
                      <span className="w-5 h-5 rounded-full bg-accent flex-shrink-0 flex items-center justify-center mt-0.5">
                        <Check className="w-3 h-3 text-accent-foreground" />
                      </span>
                      <span className="text-muted-foreground">{benefit}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Ingredients Section */}
      <section className="section-padding bg-sage-gradient">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-10">
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-3 flex items-center justify-center gap-3">
                <Beaker className="w-6 h-6 text-sage-dark" />
                Key Ingredients
              </h2>
              <p className="text-muted-foreground">
                Clinically proven actives that power this formulation
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {product.keyIngredients.map((ingredient, index) => (
                <motion.div
                  key={ingredient.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-background rounded-xl p-6 border border-border"
                >
                  <h4 className="font-serif text-lg font-semibold text-foreground mb-2">
                    {ingredient.name}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed text-justified">
                    {ingredient.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Full Ingredients */}
      {product.fullIngredients && (
        <section className="section-padding-sm bg-background">
          <div className="container-narrow">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="font-serif text-xl font-semibold text-foreground mb-4">
                Full Ingredient List (INCI)
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed bg-muted/50 rounded-lg p-4 border border-border">
                {product.fullIngredients}
              </p>
            </motion.div>
          </div>
        </section>
      )}
    </Layout>
  );
};

export default ProductDetail;
