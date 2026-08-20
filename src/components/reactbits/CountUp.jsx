import { useEffect, useRef, useState } from 'react';

export default function CountUp({
  to = 0,
  from = 0,
  duration = 1.8,
  className = '',
  suffix = '',
  prefix = '',
  decimals = 0,
}) {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let startTimestamp = null;
          const target = typeof to === 'number' ? to : parseFloat(to) || 0;
          const start = typeof from === 'number' ? from : parseFloat(from) || 0;

          const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
            const easeProgress = 1 - Math.pow(1 - progress, 3);
            const currentVal = start + (target - start) * easeProgress;
            setCount(currentVal);
            if (progress < 1) {
              window.requestAnimationFrame(step);
            }
          };
          window.requestAnimationFrame(step);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [to, from, duration]);

  const formattedCount = decimals > 0 ? count.toFixed(decimals) : Math.round(count).toLocaleString();

  return (
    <span ref={ref} className={className}>
      {prefix}
      {formattedCount}
      {suffix}
    </span>
  );
}
