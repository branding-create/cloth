import { Instagram, Facebook, MessageCircle, Send, Heart } from "lucide-react";
import { PolicyDialog } from "./PolicyDialog";
import { policies } from "@/lib/policies";

const links = {
  Shop: ["Hoodies", "T-Shirts", "Joggers", "Accessories", "Limited Edition"],
  Company: ["About Us", "Our Story", "Careers", "Press", "Blog"],
  Support: ["Contact Us", "FAQs", "Shipping", "Returns", "Size Guide"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
};

const socialLinks = [
  { name: "Facebook", Icon: Facebook, href: "https://www.facebook.com/profile.php?id=61581030164098" },
  { name: "Instagram", Icon: Instagram, href: "https://www.instagram.com/_dressy.dreams_?igsh=cGpxZmx0em9rMXJw" },
  { name: "WhatsApp", Icon: MessageCircle, href: "https://whatsapp.com/channel/0029Vb7aluR6hENyEQUT1Z42" },
  { name: "Telegram", Icon: Send, href: "#" },
  { name: "Pinterest", Icon: Heart, href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-deep-dark py-20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-5 gap-12 mb-16">
          <div className="md:col-span-1">
            <div className="mb-6 inline-block p-1 rounded-full bg-white/5 border border-white/10">
              <img src="/logo.png" alt="DRESSY DREAMS" className="h-16 w-auto object-contain rounded-full" />
            </div>
            <p className="text-primary-foreground/50 text-sm leading-relaxed mb-6">
              Comfort meets style. Unleash your style with customizable hoodies, tees & more.
            </p>
            <div className="flex gap-4">
              {socialLinks.map(({ name, Icon, href }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center hover:border-gold hover:bg-gold/10 transition-all"
                  title={name}
                >
                  <Icon className="w-4 h-4 text-primary-foreground/60 hover:text-gold" />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <h4 className="font-heading text-lg text-primary-foreground mb-4">{title}</h4>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item}>
                    {policies[item] ? (
                      <PolicyDialog title={item} triggerText={item} content={policies[item]} />
                    ) : (
                      <a href="#" className="text-primary-foreground/50 text-sm hover:text-gold transition-colors">
                        {item}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/40 text-sm">© 2025 DRESSYDREAMS. All rights reserved.</p>
          <p className="text-primary-foreground/40 text-sm">
            Made with ❤️ in India | #DRESSYDREAMS
          </p>
        </div>
      </div>
    </footer>
  );
}
