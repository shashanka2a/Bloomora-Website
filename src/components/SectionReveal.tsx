import { useRef } from "react";
import { motion, useInView } from "motion/react";

interface SectionRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function SectionReveal({ children, className = "", delay = 0 }: SectionRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.33, 1, 0.68, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
