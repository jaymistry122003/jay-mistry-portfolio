import { useEffect, useState } from 'react';

export default function ScrollProgress({ className = '' }) {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = height > 0 ? (scrollTop / height) * 100 : 0;
      setScrollPercentage(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 h-[2.5px] bg-yellow-400 z-50 transition-all duration-150 shadow-[0_0_10px_#facc15] pointer-events-none ${className}`}
      style={{ width: `${scrollPercentage}%` }}
    />
  );
}
