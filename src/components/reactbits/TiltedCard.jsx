import { useRef, useState } from 'react';

export default function TiltedCard({
  children,
  className = '',
  maxTilt = 8,
  scale = 1.015,
  speed = 300,
}) {
  const ref = useRef(null);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0, s: 1 });

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const ry = (mouseX / width - 0.5) * maxTilt * 2;
    const rx = -(mouseY / height - 0.5) * maxTilt * 2;

    setTilt({ rx, ry, s: scale });
  };

  const handleMouseLeave = () => {
    setTilt({ rx: 0, ry: 0, s: 1 });
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`transition-transform ease-out ${className}`}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg) scale3d(${tilt.s}, ${tilt.s}, ${tilt.s})`,
        transitionDuration: `${speed}ms`,
      }}
    >
      {children}
    </div>
  );
}
