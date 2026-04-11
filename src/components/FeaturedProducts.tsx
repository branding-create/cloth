import { useState } from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ShoppingBag, Eye, Heart } from "lucide-react";
import hoodieImg from "@/assets/product-hoodie-1.jpg";
import teeImg from "@/assets/product-tee-1.jpg";
import joggerImg from "@/assets/product-jogger-1.jpg";

const products = [
  { id: 1, name: "Shadow Hoodie", price: "₹1,499", category: "Hoodies", image: hoodieImg },
  { id: 2, name: "Urban Oversized Tee", price: "₹999", category: "T-Shirts", image: teeImg },
  { id: 3, name: "Street Joggers", price: "₹1,299", category: "Bottoms", image: joggerImg },
];

function ProductCard({ product, index }: { product: typeof products[0]; index: number }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [showQuick, setShowQuick] = useState(false);

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -20;
    setTilt({ x: y, y: x });
  };

  return (
    <motion.div
      className="group relative"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
    >
      <motion.div
        className="relative overflow-hidden bg-card rounded-sm"
        style={{ transformStyle: "preserve-3d", perspective: 1000 }}
        animate={{ rotateX: tilt.x, rotateY: tilt.y }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        onMouseMove={handleMouse}
        onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      >
        <div className="aspect-[4/5] overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            loading="lazy"
            width={800}
            height={1000}
          />
        </div>

        {/* Overlay actions */}
        <div className="absolute inset-0 bg-deep-dark/0 group-hover:bg-deep-dark/40 transition-all duration-500 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100">
          <button
            onClick={() => setShowQuick(true)}
            className="p-3 bg-primary-foreground rounded-full hover:bg-gold transition-colors"
          >
            <Eye className="w-5 h-5 text-deep-dark" />
          </button>
          <button className="p-3 bg-primary-foreground rounded-full hover:bg-gold transition-colors">
            <Heart className="w-5 h-5 text-deep-dark" />
          </button>
          <button className="p-3 bg-gold rounded-full hover:scale-110 transition-transform">
            <ShoppingBag className="w-5 h-5 text-deep-dark" />
          </button>
        </div>

        <span className="absolute top-4 left-4 bg-gold text-deep-dark text-xs px-3 py-1 font-bold tracking-wider uppercase">
          New
        </span>
      </motion.div>

      <div className="mt-4 flex justify-between items-start">
        <div>
          <p className="text-xs text-muted-foreground tracking-wider uppercase">{product.category}</p>
          <h3 className="font-heading text-lg text-foreground mt-1">{product.name}</h3>
        </div>
        <p className="text-gold font-bold text-lg">{product.price}</p>
      </div>

      {/* Quick View Modal */}
      {showQuick && (
        <div className="fixed inset-0 z-[300] bg-deep-dark/80 flex items-center justify-center p-6" onClick={() => setShowQuick(false)}>
          <motion.div
            className="bg-card max-w-2xl w-full p-8 rounded-sm grid md:grid-cols-2 gap-8"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            onClick={(e) => e.stopPropagation()}
          >
            <img src={product.image} alt={product.name} className="w-full aspect-square object-cover rounded-sm" loading="lazy" />
            <div className="flex flex-col justify-center">
              <p className="text-gold text-xs tracking-widest uppercase mb-2">{product.category}</p>
              <h3 className="font-heading text-3xl text-foreground mb-2">{product.name}</h3>
              <p className="text-gold text-2xl font-bold mb-4">{product.price}</p>
              <p className="text-muted-foreground text-sm mb-6">Premium quality streetwear crafted with 100% organic cotton. Fully customizable with your own designs.</p>
              <button className="w-full py-3 bg-gold text-deep-dark font-bold tracking-wider uppercase text-sm hover:scale-[1.02] transition-transform">
                Add to Cart
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </motion.div>
  );
}

export default function FeaturedProducts() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="collections" className="py-28 bg-secondary/30" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-gold tracking-[0.3em] uppercase text-sm mb-3">Handpicked</p>
          <h2 className="font-heading text-4xl md:text-5xl text-foreground">Featured Products</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
