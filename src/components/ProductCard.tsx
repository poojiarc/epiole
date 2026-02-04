import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
  index?: number;
}

const ProductCard = ({ product, index = 0 }: ProductCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Link
        to={`/products/${product.id}`}
        className="product-card block group"
      >
        {/* Image Container */}
        <div className="aspect-square overflow-hidden bg-muted">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Content */}
        <div className="p-5 md:p-6">
          {/* Category Badge */}
          <span className="inline-block text-xs font-medium uppercase tracking-wider text-muted-foreground mb-2">
            {product.category}
          </span>

          {/* Product Name */}
          <h3 className="font-serif text-lg md:text-xl font-semibold text-foreground mb-2 group-hover:text-sage-dark transition-colors">
            {product.name}
          </h3>

          {/* Short Description */}
          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
            {product.shortDescription}
          </p>

          {/* Learn More Link */}
          <span className="inline-flex items-center gap-2 text-sm font-medium text-foreground mt-4 group-hover:gap-3 transition-all">
            Learn More
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
          </span>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;
