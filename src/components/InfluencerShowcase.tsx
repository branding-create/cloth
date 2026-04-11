import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Instagram } from "lucide-react";

const influencers = [
  { name: "Aarav Style", handle: "@aaravstyle", followers: "120K" },
  { name: "Nisha Trends", handle: "@nishatrends", followers: "85K" },
  { name: "Street Vikas", handle: "@streetvikas", followers: "200K" },
  { name: "Meera Fits", handle: "@meerafits", followers: "150K" },
];

export default function InfluencerShowcase() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-28 bg-secondary/30" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
        >
          <p className="text-gold tracking-[0.3em] uppercase text-sm mb-3">Community</p>
          <h2 className="font-heading text-4xl md:text-5xl text-foreground">Loved by Creators</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {influencers.map((inf, i) => (
            <motion.div
              key={inf.name}
              className="bg-card border border-border rounded-sm p-6 text-center group hover:border-gold/30 transition-all"
              initial={{ opacity: 0, y: 40 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -8 }}
            >
              <div className="w-20 h-20 rounded-full bg-muted mx-auto mb-4 flex items-center justify-center">
                <Instagram className="w-8 h-8 text-gold" />
              </div>
              <h3 className="font-heading text-lg text-foreground">{inf.name}</h3>
              <p className="text-gold text-sm">{inf.handle}</p>
              <p className="text-muted-foreground text-sm mt-1">{inf.followers} followers</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
