import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send } from "lucide-react";

interface Message {
  text: string;
  isBot: boolean;
}

const autoResponses: Record<string, string> = {
  price: "Hi 👋 Our hoodies start from ₹999 and tees from ₹599. Want to customize yours?",
  hoodie: "Our premium hoodies are ₹1,499 with full customization. Made with 100% organic cotton! 🔥",
  tee: "Oversized tees start at ₹999. Available in 50+ colors with custom print options! 👕",
  shipping: "We offer free shipping on orders above ₹1,500. Standard delivery takes 5-7 days.",
  custom: "You can customize any product with your own design! Use our online tool or WhatsApp us your artwork.",
  size: "We offer XS to 3XL. Check our size guide for detailed measurements!",
  return: "We have a 7-day return policy for quality issues. Exchanges available for sizing.",
};

function getBotReply(msg: string): string {
  const lower = msg.toLowerCase();
  for (const [key, reply] of Object.entries(autoResponses)) {
    if (lower.includes(key)) return reply;
  }
  return "Thanks for reaching out! 😊 Our team will get back to you shortly. You can also WhatsApp us at +91 62894 75102 for instant help!";
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { text: "Hey! 👋 Welcome to DRESSYDREAMS. How can I help you today?", isBot: true },
  ]);
  const [input, setInput] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const send = () => {
    if (!input.trim()) return;
    const userMsg = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { text: userMsg, isBot: false }]);

    setTimeout(() => {
      setMessages((prev) => [...prev, { text: getBotReply(userMsg), isBot: true }]);
    }, 1000);
  };

  return (
    <>
      {/* Toggle */}
      <AnimatePresence>
        {!open && (
          <motion.button
            className="fixed bottom-24 right-6 z-[90] w-14 h-14 rounded-full bg-gold flex items-center justify-center shadow-lg"
            onClick={() => setOpen(true)}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            whileHover={{ scale: 1.1 }}
          >
            <MessageCircle className="w-6 h-6 text-deep-dark" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed bottom-24 right-6 z-[90] w-[360px] max-w-[calc(100vw-48px)] bg-card border border-border rounded-sm shadow-2xl overflow-hidden flex flex-col"
            style={{ height: 480 }}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 bg-gold">
              <div>
                <p className="font-heading text-deep-dark text-lg">DRESSYDREAMS</p>
                <p className="text-deep-dark/70 text-xs">Typically replies instantly</p>
              </div>
              <button onClick={() => setOpen(false)}>
                <X className="w-5 h-5 text-deep-dark" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  className={`max-w-[80%] ${msg.isBot ? "mr-auto" : "ml-auto"}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div
                    className={`px-4 py-3 rounded-sm text-sm ${
                      msg.isBot
                        ? "bg-muted text-foreground"
                        : "bg-gold text-deep-dark"
                    }`}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}
              <div ref={bottomRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-border flex gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && send()}
                placeholder="Type a message..."
                className="flex-1 px-4 py-2 bg-muted rounded-sm text-foreground text-sm placeholder:text-muted-foreground focus:outline-none"
              />
              <button onClick={send} className="p-2 bg-gold rounded-sm hover:scale-105 transition-transform">
                <Send className="w-4 h-4 text-deep-dark" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
