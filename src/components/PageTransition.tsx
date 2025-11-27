import { motion } from "framer-motion";
import { type ReactNode } from "react";

interface PageTransitionProps {
  children: ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  return (
    <motion.div
      initial={{ y: "120vh", rotate: 36 }}
      exit={{ y: "-150vh", rotate: 36 }}
      animate={{ y: 0, rotate: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      style={{ 
        position: "absolute", 
        width: "100%", 
        minHeight: "100vh",
        transformOrigin: "center center"
      }}
    >
      {children}
    </motion.div>
  );
}