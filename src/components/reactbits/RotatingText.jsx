import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function RotatingText({
  texts = [],
  mainClassName = '',
  initial = { y: '100%', opacity: 0 },
  animate = { y: 0, opacity: 1 },
  exit = { y: '-100%', opacity: 0 },
  transition = { type: 'spring', damping: 25, stiffness: 300 },
  rotationInterval = 2500,
}) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    if (texts.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % texts.length);
    }, rotationInterval);
    return () => clearInterval(interval);
  }, [texts, rotationInterval]);

  return (
    <span className={`relative inline-block overflow-hidden align-bottom ${mainClassName}`}>
      <AnimatePresence mode="wait">
        <motion.span
          key={currentTextIndex}
          initial={initial}
          animate={animate}
          exit={exit}
          transition={transition}
          className="inline-block"
        >
          {texts[currentTextIndex]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
