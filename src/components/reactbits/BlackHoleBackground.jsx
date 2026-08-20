import { useEffect, useRef } from 'react';

export default function BlackHoleBackground({
  starCount = 120,
  className = '',
}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Interactive Singularity (Black Hole)
    const singularity = {
      x: width / 2,
      y: height / 2,
      targetX: width / 2,
      targetY: height / 2,
      radius: 26,
      horizonRadius: 65,
      angle: 0,
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e) => {
      singularity.targetX = e.clientX;
      singularity.targetY = e.clientY;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    // Cosmic stars & stardust
    const count = Math.min(starCount, Math.floor((width * height) / 10000));
    const stars = Array.from({ length: count }).map(() => {
      const x = Math.random() * width;
      const y = Math.random() * height;
      return {
        x,
        y,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 1.8 + 0.5,
        color: Math.random() > 0.35 ? '250, 204, 21' : '255, 255, 255',
        alpha: Math.random() * 0.7 + 0.3,
        twinkleSpeed: Math.random() * 0.03 + 0.01,
      };
    });

    const render = () => {
      // Smooth singularity movement to cursor
      singularity.x += (singularity.targetX - singularity.x) * 0.06;
      singularity.y += (singularity.targetY - singularity.y) * 0.06;
      singularity.angle += 0.025;

      ctx.clearRect(0, 0, width, height);

      // 1. Draw Gravitational Lensing / Accretion Glow Aura
      const nebulaGlow = ctx.createRadialGradient(
        singularity.x,
        singularity.y,
        singularity.radius * 0.3,
        singularity.x,
        singularity.y,
        singularity.horizonRadius * 2.8
      );
      nebulaGlow.addColorStop(0, 'rgba(250, 204, 21, 0.3)');
      nebulaGlow.addColorStop(0.25, 'rgba(234, 179, 8, 0.15)');
      nebulaGlow.addColorStop(0.65, 'rgba(120, 53, 15, 0.04)');
      nebulaGlow.addColorStop(1, 'transparent');

      ctx.fillStyle = nebulaGlow;
      ctx.beginPath();
      ctx.arc(singularity.x, singularity.y, singularity.horizonRadius * 2.8, 0, Math.PI * 2);
      ctx.fill();

      // 2. Swirling Accretion Disk Rings
      ctx.save();
      ctx.translate(singularity.x, singularity.y);
      ctx.rotate(singularity.angle);
      for (let r = 0; r < 3; r++) {
        ctx.beginPath();
        ctx.ellipse(
          0,
          0,
          singularity.horizonRadius * (1 + r * 0.28),
          singularity.horizonRadius * (0.35 + r * 0.08),
          r * 0.6,
          0,
          Math.PI * 2
        );
        ctx.strokeStyle = `rgba(250, 204, 21, ${0.28 - r * 0.07})`;
        ctx.lineWidth = 1.6 - r * 0.4;
        ctx.stroke();
      }
      ctx.restore();

      // 3. Black Hole Singularity Core (Pitch Black Void)
      ctx.beginPath();
      ctx.arc(singularity.x, singularity.y, singularity.radius, 0, Math.PI * 2);
      ctx.fillStyle = 'rgb(9, 10, 13)';
      ctx.shadowBlur = 22;
      ctx.shadowColor = 'rgba(250, 204, 21, 0.85)';
      ctx.fill();
      ctx.shadowBlur = 0;

      // Event Horizon Photon Ring Rim
      ctx.beginPath();
      ctx.arc(singularity.x, singularity.y, singularity.radius, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(250, 204, 21, 0.95)';
      ctx.lineWidth = 2;
      ctx.stroke();

      // 4. Cosmic Stars & Gravitational Pull Dynamics
      for (let i = 0; i < stars.length; i++) {
        const s = stars[i];

        s.alpha += Math.sin(Date.now() * s.twinkleSpeed) * 0.008;
        s.alpha = Math.max(0.2, Math.min(0.9, s.alpha));

        const dx = singularity.x - s.x;
        const dy = singularity.y - s.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        const gravField = 250;
        if (dist < gravField) {
          const force = 1 - dist / gravField;
          const angle = Math.atan2(dy, dx);
          const swirlSpeed = 2.0 * force;

          // Spiral swirling motion into event horizon
          s.x += Math.cos(angle + Math.PI / 2) * swirlSpeed + (dx / dist) * force * 1.4;
          s.y += Math.sin(angle + Math.PI / 2) * swirlSpeed + (dy / dist) * force * 1.4;

          // Respawn star if consumed into black hole core
          if (dist < singularity.radius * 0.75) {
            s.x = Math.random() > 0.5 ? Math.random() * width : Math.random() > 0.5 ? 0 : width;
            s.y = Math.random() > 0.5 ? Math.random() * height : Math.random() > 0.5 ? 0 : height;
          }
        } else {
          s.x += s.vx;
          s.y += s.vy;

          if (s.x < 0) s.x = width;
          if (s.x > width) s.x = 0;
          if (s.y < 0) s.y = height;
          if (s.y > height) s.y = 0;
        }

        // Draw cosmic star
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${s.color}, ${s.alpha})`;
        ctx.fill();

        // Connect nearby cosmic stars with faint gravitational web lines
        for (let j = i + 1; j < stars.length; j++) {
          const s2 = stars[j];
          const sdx = s.x - s2.x;
          const sdy = s.y - s2.y;
          const sdist = Math.sqrt(sdx * sdx + sdy * sdy);

          if (sdist < 110) {
            const lineAlpha = (1 - sdist / 110) * 0.12;
            ctx.beginPath();
            ctx.moveTo(s.x, s.y);
            ctx.lineTo(s2.x, s2.y);
            ctx.strokeStyle = `rgba(234, 179, 8, ${lineAlpha})`;
            ctx.lineWidth = 0.5;
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
      cancelAnimationFrame(animationFrameId);
    };
  }, [starCount]);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 pointer-events-none z-[1] opacity-85 ${className}`}
    />
  );
}
