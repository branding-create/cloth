import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ArrowRight } from "lucide-react";
import mensImg from "@/assets/mens-collection.jpg";
import womensImg from "@/assets/womens-collection.jpg";

const categories = [
  { name: "Men's Collection", image: mensImg },
  { name: "Women's Collection", image: womensImg },
];

export default function GenderCategories() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-28" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
        >
          <p className="text-gold tracking-[0.3em] uppercase text-sm mb-3">Shop By Category</p>
          <h2 className="font-heading text-4xl md:text-5xl text-foreground">For Everyone</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.name}
              className="relative aspect-[4/3] overflow-hidden rounded-sm group"
              initial={{ opacity: 0, y: 40 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.2 }}
            >
              <img
                src={cat.image}
                alt={cat.name}
                loading="lazy"
                width={1024}
                height={768}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-dark/80 via-deep-dark/20 to-transparent z-10" />
              <div className="absolute bottom-8 left-8 z-20">
                <h3 className="font-heading text-3xl md:text-4xl text-primary-foreground mb-4">{cat.name}</h3>
                <button className="flex items-center gap-2 text-gold text-sm tracking-wider uppercase group-hover:gap-4 transition-all">
                  Explore <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
