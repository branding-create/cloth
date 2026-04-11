import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
    if (isTouchDevice) return;

    setVisible(true);
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    const over = () => setHovering(true);
    const out = () => setHovering(false);

    window.addEventListener("mousemove", move);
    document.querySelectorAll("a, button, [role='button']").forEach((el) => {
      el.addEventListener("mouseenter", over);
      el.addEventListener("mouseleave", out);
    });

    return () => {
      window.removeEventListener("mousemove", move);
      document.querySelectorAll("a, button, [role='button']").forEach((el) => {
        el.removeEventListener("mouseenter", over);
        el.removeEventListener("mouseleave", out);
      });
    };
  }, []);

  if (!visible) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 rounded-full bg-gold pointer-events-none z-[9999] mix-blend-difference"
        animate={{ x: pos.x - 6, y: pos.y - 6, scale: hovering ? 0.5 : 1 }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 rounded-full border border-gold pointer-events-none z-[9999] mix-blend-difference"
        animate={{ x: pos.x - 20, y: pos.y - 20, scale: hovering ? 1.5 : 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
      />
    </>
  );
}
