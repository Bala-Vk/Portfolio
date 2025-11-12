import { motion, useReducedMotion } from "framer-motion";

export default function Reveal({ children }: { children: React.ReactNode }) {
  const prefersReducedMotion = useReducedMotion();
  if (prefersReducedMotion) return <>{children}</>;
  return (
    <motion.div
      initial={{ y: 16, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}


