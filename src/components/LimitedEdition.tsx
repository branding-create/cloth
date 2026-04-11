import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import limitedImg from "@/assets/limited-edition.jpg";

export default function LimitedEdition() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0">
        <img src={limitedImg} alt="" className="w-full h-full object-cover" loading="lazy" width={1280} height={720} />
        <div className="absolute inset-0 bg-deep-dark/70" />
      </div>

      <div className="container mx-auto px-6 py-32 relative z-10">
        <div className="max-w-2xl">
          <motion.p
            className="text-gold tracking-[0.3em] uppercase text-sm mb-4"
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
          >
            Exclusive
          </motion.p>
          <motion.h2
            className="font-heading text-4xl md:text-6xl text-primary-foreground mb-6"
            initial={{ opacity: 0, y: 40 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            Limited Edition <span className="italic text-gold">Drop</span>
          </motion.h2>
          <motion.p
            className="text-primary-foreground/70 text-lg mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
          >
            Only 100 pieces. Once they're gone, they're gone forever. Don't miss your chance to own a piece of exclusivity.
          </motion.p>
          <motion.button
            className="px-8 py-4 bg-gold text-deep-dark font-bold tracking-wider uppercase text-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
          >
            Shop Limited Edition
          </motion.button>
        </div>
      </div>
    </section>
  );
}
