import { motion, AnimatePresence } from "framer-motion";

interface Props {
  isLoading: boolean;
}

export default function LoadingScreen({ isLoading }: Props) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[10000] flex items-center justify-center bg-deep-dark"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <motion.div className="text-center">
            <motion.h1
              className="font-heading text-5xl md:text-7xl tracking-wider text-gold"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              DRESSY
            </motion.h1>
            <motion.h1
              className="font-heading text-5xl md:text-7xl tracking-wider text-primary-foreground"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            >
              DREAMS
            </motion.h1>
            <motion.div
              className="mt-8 h-0.5 bg-gold mx-auto"
              initial={{ width: 0 }}
              animate={{ width: 120 }}
              transition={{ duration: 1.2, delay: 0.6, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
