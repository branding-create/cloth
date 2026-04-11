import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import fabricImg from "@/assets/fabric-quality.jpg";

const qualities = [
  { label: "Cotton Purity", value: "100%" },
  { label: "Thread Count", value: "300+" },
  { label: "Shrink Resistance", value: "Pre-Shrunk" },
  { label: "Color Fastness", value: "Grade 5" },
];

export default function FabricShowcase() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-28" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            className="order-2 lg:order-1 relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="aspect-video rounded-sm overflow-hidden">
              <img src={fabricImg} alt="Premium Fabric" className="w-full h-full object-cover" loading="lazy" width={1280} height={720} />
            </div>
          </motion.div>

          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 60 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="text-gold tracking-[0.3em] uppercase text-sm mb-4">Craftsmanship</p>
            <h2 className="font-heading text-4xl md:text-5xl mb-6 text-foreground">
              Premium <span className="italic text-gold">Quality</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-10">
              We source the finest organic cotton and use state-of-the-art printing technology to ensure every piece feels as luxurious as it looks.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {qualities.map((q, i) => (
                <motion.div
                  key={q.label}
                  className="p-4 border border-border rounded-sm"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1 }}
                >
                  <p className="text-gold font-heading text-2xl">{q.value}</p>
                  <p className="text-muted-foreground text-sm">{q.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
