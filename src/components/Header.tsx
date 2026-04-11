import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon, ShoppingBag } from "lucide-react";

interface Props {
  isDark: boolean;
  toggleTheme: () => void;
}

const navLinks = ["Collections", "Customize", "About", "Reviews", "Contact"];

export default function Header({ isDark, toggleTheme }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
          scrolled ? "glass-strong py-3" : "py-6 bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <button onClick={() => scrollTo("hero")} className="flex items-center p-1 rounded-full bg-white/5 border border-white/10 hover:border-gold/50 transition-colors">
            <img src="/logo.png" alt="DRESSY DREAMS" className="h-10 md:h-12 w-auto object-contain rounded-full" />
          </button>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => scrollTo(link.toLowerCase())}
                className="text-sm tracking-wider text-muted-foreground hover:text-gold transition-colors duration-300 uppercase"
              >
                {link}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-muted transition-colors"
            >
              {isDark ? <Sun className="w-5 h-5 text-gold" /> : <Moon className="w-5 h-5 text-foreground" />}
            </button>
            <button className="relative p-2">
              <ShoppingBag className="w-5 h-5 text-foreground" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-gold rounded-full text-[10px] flex items-center justify-center text-primary-foreground font-bold">
                0
              </span>
            </button>
            <button className="md:hidden p-2" onClick={() => setMobileOpen(true)}>
              <Menu className="w-6 h-6 text-foreground" />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-[200] bg-background flex flex-col items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              className="absolute top-6 right-6 p-2"
              onClick={() => setMobileOpen(false)}
            >
              <X className="w-8 h-8 text-foreground" />
            </button>
            {navLinks.map((link, i) => (
              <motion.button
                key={link}
                onClick={() => scrollTo(link.toLowerCase())}
                className="font-heading text-3xl tracking-wider text-foreground hover:text-gold transition-colors py-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                {link}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
