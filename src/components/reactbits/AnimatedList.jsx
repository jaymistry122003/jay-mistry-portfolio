import { motion } from 'framer-motion';

export default function AnimatedList({
  children,
  className = '',
  delay = 0.1,
}) {
  return (
    <div className={className}>
      {Array.isArray(children)
        ? children.map((child, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.4, delay: idx * delay, ease: [0.22, 1, 0.36, 1] }}
            >
              {child}
            </motion.div>
          ))
        : children}
    </div>
  );
}
