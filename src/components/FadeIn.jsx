import { motion } from 'framer-motion';

export default function FadeIn({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.8, type: 'spring', stiffness: 60, damping: 20 }}
    >
      {children}
    </motion.div>
  );
}
