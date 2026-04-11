import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Palette, Type, Shirt, Sparkles } from "lucide-react";
import heroSecondary from "@/assets/hero-secondary.jpg";

const steps = [
  { icon: Shirt, title: "Choose Your Base", desc: "Pick from hoodies, tees, joggers & more" },
  { icon: Palette, title: "Select Colors", desc: "Over 50 premium color options available" },
  { icon: Type, title: "Add Your Design", desc: "Upload artwork or use our design templates" },
  { icon: Sparkles, title: "Get It Delivered", desc: "Premium packaging, delivered to your door" },
];

export default function CustomizeSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="customize" className="py-28" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="text-gold tracking-[0.3em] uppercase text-sm mb-4">Design Your Own</p>
            <h2 className="font-heading text-4xl md:text-5xl mb-6 text-foreground">
              Create Your
              <br />
              <span className="italic text-gold">Masterpiece</span>
            </h2>
            <p className="text-muted-foreground mb-10 leading-relaxed">
              Express yourself with our custom design tool. Choose your base, pick colors, add your artwork, and we'll craft it with premium materials.
            </p>

            <div className="space-y-6">
              {steps.map((step, i) => (
                <motion.div
                  key={step.title}
                  className="flex items-start gap-4 p-4 rounded-sm hover:bg-muted/50 transition-colors group"
                  initial={{ opacity: 0, x: -30 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.15 }}
                >
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors">
                    <step.icon className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg text-foreground">{step.title}</h3>
                    <p className="text-muted-foreground text-sm">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.button
              className="mt-10 px-8 py-4 bg-gold text-deep-dark font-bold tracking-wider uppercase text-sm hover:scale-105 transition-transform"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Start Designing
            </motion.button>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 60 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="aspect-[3/4] rounded-sm overflow-hidden">
              <img
                src={heroSecondary}
                alt="Custom Design Preview"
                className="w-full h-full object-cover"
                loading="lazy"
                width={1280}
                height={1600}
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-card border border-border p-6 rounded-sm shadow-2xl">
              <p className="text-gold font-heading text-xl">∞ Possibilities</p>
              <p className="text-muted-foreground text-sm">Your imagination is the limit</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
