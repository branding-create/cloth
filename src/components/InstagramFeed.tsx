import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Instagram } from "lucide-react";
import hoodieImg from "@/assets/product-hoodie-1.jpg";
import teeImg from "@/assets/product-tee-1.jpg";
import hoodieImg2 from "@/assets/product-hoodie-2.jpg";
import heroSecondary from "@/assets/hero-secondary.jpg";
import fabricImg from "@/assets/fabric-quality.jpg";
import limitedImg from "@/assets/limited-edition.jpg";

const images = [hoodieImg, teeImg, hoodieImg2, heroSecondary, fabricImg, limitedImg];

export default function InstagramFeed() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-28" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
        >
          <p className="text-gold tracking-[0.3em] uppercase text-sm mb-3">Follow Us</p>
          <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-2">@DRESSYDREAMS</h2>
          <p className="text-muted-foreground">Comfort meet style! 👕 | Create Your Own Fashion</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
          {images.map((img, i) => (
            <motion.div
              key={i}
              className="aspect-square overflow-hidden relative group"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.1 }}
            >
              <img src={img} alt={`Instagram ${i + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
              <div className="absolute inset-0 bg-deep-dark/0 group-hover:bg-deep-dark/50 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <Instagram className="w-8 h-8 text-primary-foreground" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
