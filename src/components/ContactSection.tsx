import { useState } from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Mail, Phone, MapPin, CheckCircle2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";

export default function ContactSection() {
  const { ref, isVisible } = useScrollAnimation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    
    try {
      const response = await fetch("https://formsubmit.co/ajax/dressydreams23@gmail.com", {
        method: "POST",
        headers: {
          'Accept': 'application/json'
        },
        body: formData
      });
      
      if (response.ok) {
        setShowThankYou(true);
        form.reset();
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
    <section id="contact" className="py-28 bg-secondary/30" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
          >
            <p className="text-gold tracking-[0.3em] uppercase text-sm mb-4">Get In Touch</p>
            <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-6">Let's Talk</h2>
            <p className="text-muted-foreground mb-10">Have a question or want to collaborate? We'd love to hear from you.</p>

            <div className="space-y-6">
              {[
                { icon: Mail, text: "dressydreams23@gmail.com" },
                { icon: Phone, text: "+91 62894 75102" },
                { icon: MapPin, text: "Bangalore, India" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-gold" />
                  </div>
                  <span className="text-foreground">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.form
            className="space-y-6"
            initial={{ opacity: 0, x: 40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            onSubmit={handleSubmit}
          >
            {/* FormSubmit configurations */}
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_subject" value="New Lead from Dressy Dreams Website!" />

            <div className="grid sm:grid-cols-2 gap-6">
              <input
                name="name"
                required
                placeholder="Name"
                className="px-6 py-4 bg-card border border-border rounded-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold transition-colors"
              />
              <input
                name="phone"
                required
                type="tel"
                placeholder="Phone Number"
                maxLength={10}
                pattern="[0-9]{10}"
                title="Please enter exactly 10 digits"
                onInput={(e) => {
                  const target = e.target as HTMLInputElement;
                  target.value = target.value.replace(/[^0-9]/g, '');
                }}
                className="px-6 py-4 bg-card border border-border rounded-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold transition-colors"
              />
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              <input
                name="email"
                required
                placeholder="Email"
                type="email"
                className="px-6 py-4 bg-card border border-border rounded-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold transition-colors"
              />
              <input
                name="subject"
                required
                placeholder="Subject"
                className="px-6 py-4 bg-card border border-border rounded-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold transition-colors"
              />
            </div>
            <textarea
              name="message"
              required
              placeholder="Your message..."
              rows={5}
              className="w-full px-6 py-4 bg-card border border-border rounded-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold transition-colors resize-none"
            />
            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="px-10 py-4 bg-gold text-deep-dark font-bold tracking-wider uppercase text-sm disabled:opacity-70 disabled:cursor-not-allowed"
              whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
              whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </motion.button>
          </motion.form>
        </div>
      </div>

      {/* Thank You Popup */}
      <Dialog open={showThankYou} onOpenChange={setShowThankYou}>
        <DialogContent className="sm:max-w-md bg-deep-dark border-gold/20 text-center py-12">
          <div className="flex flex-col items-center gap-4">
            <CheckCircle2 className="w-16 h-16 text-gold mb-2" />
            <DialogTitle className="text-3xl text-gold font-heading">Thank You!</DialogTitle>
            <p className="text-primary-foreground/70 text-lg max-w-sm mt-2">
              Your message has been sent successfully. Our team will read it and get back to you shortly at the provided email.
            </p>
            <button 
              onClick={() => setShowThankYou(false)}
              className="mt-6 px-10 py-3 bg-white/5 border border-white/10 hover:border-gold/50 rounded-full text-foreground transition-all"
            >
              Close
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
