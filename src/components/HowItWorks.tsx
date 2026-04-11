import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const steps = [
  { num: "01", title: "Browse & Choose", desc: "Explore our curated collection of premium streetwear bases" },
  { num: "02", title: "Customize It", desc: "Use our design tool to add your unique touch — colors, text, artwork" },
  { num: "03", title: "We Craft It", desc: "Our artisans bring your design to life with premium materials" },
  { num: "04", title: "Delivered To You", desc: "Enjoy free shipping with premium eco-friendly packaging" },
];

export default function HowItWorks() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-28" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
        >
          <p className="text-gold tracking-[0.3em] uppercase text-sm mb-3">Process</p>
          <h2 className="font-heading text-4xl md:text-5xl text-foreground">How It Works</h2>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8 relative">
          {/* Connection line */}
          <div className="hidden md:block absolute top-12 left-[12%] right-[12%] h-px bg-border" />

          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              className="text-center relative"
              initial={{ opacity: 0, y: 40 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.2 }}
            >
              <div className="w-24 h-24 rounded-full border-2 border-gold flex items-center justify-center mx-auto mb-6 bg-background relative z-10">
                <span className="font-heading text-2xl text-gold">{step.num}</span>
              </div>
              <h3 className="font-heading text-xl text-foreground mb-2">{step.title}</h3>
              <p className="text-muted-foreground text-sm">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
