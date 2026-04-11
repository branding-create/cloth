import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function BrandIntro() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-32 overflow-hidden" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Marquee */}
        <div className="overflow-hidden mb-20">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...Array(8)].map((_, i) => (
              <span key={i} className="font-heading text-6xl md:text-8xl text-muted-foreground/10 mx-8 tracking-wider">
                DRESSYDREAMS
              </span>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="text-gold tracking-[0.3em] uppercase text-sm mb-4">Established 2025</p>
            <h2 className="font-heading text-4xl md:text-5xl mb-6 text-foreground">
              Where Comfort
              <br />
              <span className="italic text-gold">Meets Luxury</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              DRESSYDREAMS is more than a fashion brand — it's a movement. We believe your clothes should speak your language. 
              Every piece is designed to be customized, ensuring you wear your identity with pride.
            </p>
            <div className="flex gap-12">
              {[
                { num: "10K+", label: "Happy Customers" },
                { num: "500+", label: "Custom Designs" },
                { num: "100%", label: "Premium Quality" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-heading text-3xl text-gold">{stat.num}</p>
                  <p className="text-muted-foreground text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 60 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="aspect-[3/4] bg-muted rounded-sm overflow-hidden">
              <img
                src={"/placeholder.svg"}
                alt="DRESSYDREAMS Collection"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-gold p-6">
              <p className="text-deep-dark font-heading text-2xl">Since</p>
              <p className="text-deep-dark font-heading text-4xl">2025</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
