import { motion } from "framer-motion";
import heroImg from "@/assets/hero-main.jpg";

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroImg} alt="DRESSYDREAMS Fashion" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-r from-deep-dark/90 via-deep-dark/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-deep-dark/80 via-transparent to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-20">
        <div className="max-w-2xl">
          <motion.div
            className="text-gold tracking-[0.2em] uppercase text-sm mb-6 font-body flex items-center gap-3"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            Free Delivery Across India
          </motion.div>

          <motion.h1
            className="font-heading text-5xl md:text-7xl lg:text-8xl leading-[0.95] mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <span className="text-primary-foreground">Unleash</span>
            <br />
            <span className="text-primary-foreground">Your </span>
            <span className="text-gradient-gold italic">Style</span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-primary-foreground/70 mb-10 max-w-lg font-body"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Customizable Hoodies, Tees & More — crafted for those who dare to be different.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <button className="px-8 py-4 bg-gold text-deep-dark font-bold tracking-wider uppercase text-sm hover:scale-105 transition-transform duration-300 animate-pulse-glow">
              Shop Now
            </button>
            <button className="px-8 py-4 border border-primary-foreground/30 text-primary-foreground tracking-wider uppercase text-sm hover:border-gold hover:text-gold transition-all duration-300">
              Customize Yours
            </button>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <span className="text-primary-foreground/50 text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-gold to-transparent" />
      </motion.div>
    </section>
  );
}
