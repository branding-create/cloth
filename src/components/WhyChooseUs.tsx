import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Shield, Truck, Recycle, Star, Headphones, Gem } from "lucide-react";

const features = [
  { icon: Gem, title: "Premium Fabric", desc: "100% organic cotton, ethically sourced" },
  { icon: Shield, title: "Quality Guarantee", desc: "Every piece inspected before shipping" },
  { icon: Truck, title: "Free Delivery", desc: "100% Free Shipping all across India" },
  { icon: Star, title: "5-Star Rated", desc: "Loved by 10,000+ customers worldwide" },
  { icon: Recycle, title: "Sustainable", desc: "Eco-friendly materials and processes" },
  { icon: Headphones, title: "24/7 Support", desc: "Always here to help you out" },
];

export default function WhyChooseUs() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-28 bg-secondary/30" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
        >
          <p className="text-gold tracking-[0.3em] uppercase text-sm mb-3">Why Us</p>
          <h2 className="font-heading text-4xl md:text-5xl text-foreground">The DRESSYDREAMS Difference</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              className="p-8 bg-card border border-border rounded-sm hover:border-gold/30 transition-all duration-500 group"
              initial={{ opacity: 0, y: 40 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8, boxShadow: "0 20px 40px hsl(33 30% 63% / 0.1)" }}
            >
              <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mb-5 group-hover:bg-gold/20 transition-colors">
                <f.icon className="w-6 h-6 text-gold" />
              </div>
              <h3 className="font-heading text-xl text-foreground mb-2">{f.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
