import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Check } from "lucide-react";

const tiers = [
  {
    name: "Basic Tee",
    price: "₹999",
    features: ["100% Organic Cotton", "Custom Print (1 Side)", "Standard Colors", "Free Shipping 1,500+"],
  },
  {
    name: "Premium Hoodie",
    price: "₹1,499",
    popular: true,
    features: ["Premium Heavy Cotton", "Custom Print (Both Sides)", "All Color Options", "Free Shipping", "Premium Packaging"],
  },
  {
    name: "Full Custom Set",
    price: "₹2,999",
    features: ["Hoodie + Tee + Jogger", "Full Customization", "Priority Production", "Free Express Shipping", "VIP Packaging", "Design Assistance"],
  },
];

export default function PricingOffers() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-28 bg-secondary/30" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
        >
          <p className="text-gold tracking-[0.3em] uppercase text-sm mb-3">Pricing</p>
          <h2 className="font-heading text-4xl md:text-5xl text-foreground">Choose Your Style</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              className={`p-8 rounded-sm border ${tier.popular ? "border-gold bg-card glow-gold" : "border-border bg-card"} relative`}
              initial={{ opacity: 0, y: 40 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -8 }}
            >
              {tier.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-deep-dark text-xs px-4 py-1 font-bold tracking-wider uppercase">
                  Most Popular
                </span>
              )}
              <h3 className="font-heading text-2xl text-foreground mb-2">{tier.name}</h3>
              <p className="text-gold font-heading text-4xl mb-6">{tier.price}</p>
              <ul className="space-y-3 mb-8">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-muted-foreground text-sm">
                    <Check className="w-4 h-4 text-gold flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-3 font-bold tracking-wider uppercase text-sm transition-transform hover:scale-[1.02] ${
                  tier.popular ? "bg-gold text-deep-dark" : "border border-gold text-gold hover:bg-gold hover:text-deep-dark"
                }`}
              >
                Order Now
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
