import { motion } from 'framer-motion';

export default function BlurText({
  text = '',
  delay = 150,
  className = '',
  animateBy = 'words',
  direction = 'top',
  threshold = 0.1,
  onAnimationComplete,
}) {
  const elements = animateBy === 'words' ? text.split(' ') : text.split('');

  const defaultFrom =
    direction === 'top'
      ? { filter: 'blur(10px)', opacity: 0, y: -20 }
      : { filter: 'blur(10px)', opacity: 0, y: 20 };

  const defaultTo = { filter: 'blur(0px)', opacity: 1, y: 0 };

  return (
    <span className={`inline-flex flex-wrap ${className}`}>
      {elements.map((el, i) => (
        <motion.span
          key={i}
          initial={defaultFrom}
          whileInView={defaultTo}
          viewport={{ once: true, amount: threshold }}
          transition={{
            duration: 0.5,
            delay: (i * delay) / 1000,
            ease: [0.22, 1, 0.36, 1],
          }}
          onAnimationComplete={i === elements.length - 1 ? onAnimationComplete : undefined}
          className="inline-block"
        >
          {el}
          {animateBy === 'words' && i < elements.length - 1 && '\u00A0'}
        </motion.span>
      ))}
    </span>
  );
}
