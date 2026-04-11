import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

function getTimeLeft() {
  const target = new Date();
  target.setDate(target.getDate() + 3);
  target.setHours(23, 59, 59);
  const diff = target.getTime() - Date.now();
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export default function CountdownTimer() {
  const [time, setTime] = useState(getTimeLeft);
  const { ref, isVisible } = useScrollAnimation();

  useEffect(() => {
    const interval = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(interval);
  }, []);

  const blocks = [
    { label: "Days", value: time.days },
    { label: "Hours", value: time.hours },
    { label: "Minutes", value: time.minutes },
    { label: "Seconds", value: time.seconds },
  ];

  return (
    <section className="py-28 bg-secondary/30" ref={ref}>
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
        >
          <p className="text-gold tracking-[0.3em] uppercase text-sm mb-3">Flash Sale Ends In</p>
          <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-4">Don't Miss Out</h2>
          <p className="text-muted-foreground mb-12">Up to 40% off on selected items</p>
        </motion.div>

        <div className="flex justify-center gap-4 md:gap-8">
          {blocks.map((b, i) => (
            <motion.div
              key={b.label}
              className="bg-card border border-border p-6 md:p-8 rounded-sm min-w-[80px] md:min-w-[120px]"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.1 }}
            >
              <p className="font-heading text-3xl md:text-5xl text-gold">{String(b.value).padStart(2, "0")}</p>
              <p className="text-muted-foreground text-xs md:text-sm mt-2 tracking-wider uppercase">{b.label}</p>
            </motion.div>
          ))}
        </div>

        <motion.button
          className="mt-12 px-10 py-4 bg-gold text-deep-dark font-bold tracking-wider uppercase text-sm"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          Shop The Sale
        </motion.button>
      </div>
    </section>
  );
}
