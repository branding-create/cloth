import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "How does the customization process work?", a: "Simply choose your base product, select colors, upload your design or use our templates, and we'll craft it for you. The entire process takes just a few minutes!" },
  { q: "What materials do you use?", a: "We use 100% organic cotton sourced from sustainable farms. Our fabric is pre-shrunk, color-fast, and incredibly soft to the touch." },
  { q: "How long does delivery take?", a: "Standard delivery takes 5-7 business days. Express delivery is available for 2-3 business days. Free shipping on orders above ₹1,500." },
  { q: "Can I return or exchange my custom order?", a: "We offer a 7-day return policy for quality issues. Since custom items are made-to-order, exchanges are available only for sizing issues." },
  { q: "Do you ship internationally?", a: "Yes! We ship worldwide. International delivery typically takes 10-15 business days depending on your location." },
  { q: "What sizes are available?", a: "We offer sizes from XS to 3XL. Check our size guide for detailed measurements. Custom sizing is available for bulk orders." },
];

export default function FAQSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-28" ref={ref}>
      <div className="container mx-auto px-6 max-w-3xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
        >
          <p className="text-gold tracking-[0.3em] uppercase text-sm mb-3">FAQ</p>
          <h2 className="font-heading text-4xl md:text-5xl text-foreground">Got Questions?</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border border-border rounded-sm px-6 bg-card">
                <AccordionTrigger className="font-heading text-lg text-foreground hover:text-gold transition-colors">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
