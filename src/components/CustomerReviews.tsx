import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Star } from "lucide-react";

const reviews = [
  { name: "Arjun M.", text: "The hoodie quality is insane! Feels like a luxury brand at an affordable price. The customization tool is so easy to use.", rating: 5 },
  { name: "Priya S.", text: "I designed my own oversized tee and it came out exactly as I imagined. DRESSYDREAMS is now my go-to brand!", rating: 5 },
  { name: "Rahul K.", text: "Fast delivery, premium packaging, and the fabric quality is top-notch. Will definitely order again!", rating: 5 },
  { name: "Ananya D.", text: "Love the aesthetic and the customization options. Every piece feels unique and personal.", rating: 5 },
  { name: "Vikram R.", text: "Best streetwear brand in India. The attention to detail is incredible. 10/10 recommend!", rating: 5 },
  { name: "Sneha P.", text: "The joggers are so comfortable! Wore them all week. Quality is unmatched at this price point.", rating: 5 },
];

export default function CustomerReviews() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="reviews" className="py-28 bg-secondary/30 overflow-hidden" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
        >
          <p className="text-gold tracking-[0.3em] uppercase text-sm mb-3">Testimonials</p>
          <h2 className="font-heading text-4xl md:text-5xl text-foreground">What Our Customers Say</h2>
        </motion.div>
      </div>

      {/* Auto-scrolling marquee */}
      <div className="overflow-hidden">
        <motion.div
          className="flex gap-6"
          animate={{ x: [0, -1800] }}
          transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
        >
          {[...reviews, ...reviews].map((review, i) => (
            <div key={i} className="min-w-[350px] bg-card border border-border p-8 rounded-sm flex-shrink-0">
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">"{review.text}"</p>
              <p className="font-heading text-foreground">{review.name}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
