import { useState } from 'react';

export default function ClickSpark({
  children,
  sparkColor = '#facc15',
  sparkRadius = 25,
  sparkCount = 8,
  duration = 400,
  className = '',
}) {
  const [sparks, setSparks] = useState([]);

  const handleClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const newSparks = Array.from({ length: sparkCount }).map((_, i) => {
      const angle = (i * 360) / sparkCount;
      const rad = (angle * Math.PI) / 180;
      return {
        id: Date.now() + Math.random(),
        x,
        y,
        dx: Math.cos(rad) * sparkRadius,
        dy: Math.sin(rad) * sparkRadius,
      };
    });

    setSparks((prev) => [...prev, ...newSparks]);

    setTimeout(() => {
      setSparks((prev) => prev.filter((s) => !newSparks.includes(s)));
    }, duration);
  };

  return (
    <div className={`relative inline-block overflow-hidden ${className}`} onClick={handleClick}>
      {children}
      {sparks.map((spark) => (
        <span
          key={spark.id}
          className="absolute rounded-full pointer-events-none"
          style={{
            left: spark.x,
            top: spark.y,
            width: '6px',
            height: '6px',
            backgroundColor: sparkColor,
            transform: `translate(${spark.dx}px, ${spark.dy}px) scale(0)`,
            transition: `transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1), opacity ${duration}ms ease`,
            opacity: 0,
            zIndex: 50,
            boxShadow: `0 0 8px ${sparkColor}`,
          }}
        />
      ))}
    </div>
  );
}
