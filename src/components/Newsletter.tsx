import { useState } from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function Newsletter() {
  const { ref, isVisible } = useScrollAnimation();
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("https://formsubmit.co/ajax/dressydreams23@gmail.com", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: "New Newsletter Subscriber!",
          email: email,
          _template: "table"
        })
      });
      
      if (response.ok) {
        setSubmitted(true);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("Network error. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-28 bg-secondary/30" ref={ref}>
      <div className="container mx-auto px-6 max-w-2xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
        >
          <p className="text-gold tracking-[0.3em] uppercase text-sm mb-3">Stay Updated</p>
          <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-4">Join the Dream</h2>
          <p className="text-muted-foreground mb-10">
            Subscribe for exclusive drops, early access, and special discounts.
          </p>

          {submitted ? (
            <motion.p
              className="text-gold font-heading text-xl"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              Welcome to the family! 🎉
            </motion.p>
          ) : (
            <form
              className="flex flex-col sm:flex-row gap-4"
              onSubmit={handleSubmit}
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="flex-1 px-6 py-4 bg-card border border-border rounded-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold transition-colors"
                required
              />
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-4 bg-gold text-deep-dark font-bold tracking-wider uppercase text-sm disabled:opacity-70 disabled:cursor-not-allowed"
                whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              >
                {isSubmitting ? "Subscribing..." : "Subscribe"}
              </motion.button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
