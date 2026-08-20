import { useState, useEffect, useRef } from 'react';

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?';

export default function DecryptText({
  text = '',
  speed = 35,
  maxIterations = 8,
  className = '',
  animateOnView = true,
}) {
  const [displayText, setDisplayText] = useState(text);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  const animate = () => {
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText(
        text
          .split('')
          .map((char, index) => {
            if (char === ' ') return ' ';
            if (index < iteration) {
              return text[index];
            }
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join('')
      );

      if (iteration >= text.length) {
        clearInterval(interval);
        setDisplayText(text);
      }
      iteration += 1 / maxIterations;
    }, speed);
  };

  useEffect(() => {
    if (!animateOnView) {
      animate();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          animate();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [text]);

  return (
    <span ref={ref} className={className} onMouseEnter={animate}>
      {displayText}
    </span>
  );
}
