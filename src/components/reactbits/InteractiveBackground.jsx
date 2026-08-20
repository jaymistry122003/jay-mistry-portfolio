import { useEffect, useRef } from 'react';

export default function InteractiveBackground({
  particleCount = 175,
  particleColor = '234, 179, 8',
  maxDistance = 125,
  mouseRadius = 220,
  className = '',
}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationFrameId;
    let width = window.innerWidth;
    let height = window.innerHeight;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const setupCanvas = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    setupCanvas();

    const mouse = {
      x: width / 2,
      y: height / 2,
      targetX: width / 2,
      targetY: height / 2,
      active: false,
    };

    const handleResize = () => {
      setupCanvas();
    };

    const handleMouseMove = (e) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
    };

    window.addEventListener('resize', handleResize, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave, { passive: true });

    // High density particles scaled to screen size
    const count = Math.min(200, Math.max(100, Math.floor((width * height) / 7500)));
    const maxDistSq = maxDistance * maxDistance;
    const mouseRadiusSq = mouseRadius * mouseRadius;

    const particles = Array.from({ length: count }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.75,
      vy: (Math.random() - 0.5) * 0.75,
      baseRadius: Math.random() * 1.5 + 1.0,
      radius: Math.random() * 1.5 + 1.0,
      alpha: Math.random() * 0.5 + 0.3,
    }));

    const render = () => {
      // Smooth lerp mouse tracking
      mouse.x += (mouse.targetX - mouse.x) * 0.1;
      mouse.y += (mouse.targetY - mouse.y) * 0.1;

      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Gather & attract particles around cursor
        if (mouse.active) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const distSq = dx * dx + dy * dy;

          if (distSq < mouseRadiusSq) {
            const dist = Math.sqrt(distSq);
            const force = (1 - dist / mouseRadius) * 0.16;
            p.x += dx * force * 0.09;
            p.y += dy * force * 0.09;
            p.radius = p.baseRadius * (1 + (1 - dist / mouseRadius) * 1.4);
          } else {
            p.radius = p.baseRadius;
          }
        } else {
          p.radius = p.baseRadius;
        }

        // Draw particle node
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${particleColor}, ${p.alpha})`;
        ctx.fill();

        // Connect nearby floating particles with web lines (Optimized with distSq check)
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const distSq = dx * dx + dy * dy;

          if (distSq < maxDistSq) {
            const dist = Math.sqrt(distSq);
            const alpha = (1 - dist / maxDistance) * 0.22;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(${particleColor}, ${alpha})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }

        // Connect particles directly to the mouse cursor
        if (mouse.active) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const distSq = dx * dx + dy * dy;

          if (distSq < mouseRadiusSq) {
            const dist = Math.sqrt(distSq);
            const alpha = (1 - dist / mouseRadius) * 0.42;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(${particleColor}, ${alpha})`;
            ctx.lineWidth = 0.85;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [particleCount, particleColor, maxDistance, mouseRadius]);

  return (
    <canvas
      ref={canvasRef}
      style={{ willChange: 'transform' }}
      className={`fixed inset-0 pointer-events-none z-[1] opacity-80 ${className}`}
    />
  );
}
