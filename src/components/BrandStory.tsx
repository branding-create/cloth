import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import brandStoryImg from "@/assets/brand-story.jpg";

export default function BrandStory() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-28 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0">
        <img src={brandStoryImg} alt="" className="w-full h-full object-cover" loading="lazy" width={1280} height={720} />
        <div className="absolute inset-0 bg-deep-dark/85" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.p
            className="text-gold tracking-[0.3em] uppercase text-sm mb-4"
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
          >
            Our Story
          </motion.p>
          <motion.h2
            className="font-heading text-4xl md:text-6xl text-primary-foreground mb-8"
            initial={{ opacity: 0, y: 40 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            Born from a <span className="italic text-gold">Dream</span>
          </motion.h2>
          <motion.p
            className="text-primary-foreground/70 text-lg leading-relaxed mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
          >
            What started as a passion project in a small studio has grown into a community of dreamers 
            who believe fashion should be personal. Every stitch, every color, every design at DRESSYDREAMS 
            is a celebration of individuality.
          </motion.p>
          <motion.p
            className="text-primary-foreground/70 text-lg leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 }}
          >
            We don't just make clothes. We make statements. We make identities. We make dreams wearable.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
