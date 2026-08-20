import { useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export default function CosmicUniverseBackground({ className = '' }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth Framer Motion spring physics for mouse parallax
  const springConfig = { damping: 30, stiffness: 90 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Subtle parallax translation & 3D tilt (max 35px shift)
  const translateX = useTransform(smoothX, [-0.5, 0.5], [-35, 35]);
  const translateY = useTransform(smoothY, [-0.5, 0.5], [-35, 35]);
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [8, -8]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-8, 8]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = e.clientX / innerWidth - 0.5;
      const y = e.clientY / innerHeight - 0.5;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className={`fixed inset-0 pointer-events-none z-[0] overflow-hidden ${className}`}>
      
      {/* 1. Large Background Cosmic Black Hole Structure (Framer Motion Parallax & Rotation) */}
      <motion.div
        className="absolute top-[-5%] right-[-5%] sm:top-[2%] sm:right-[5%] w-[420px] h-[420px] sm:w-[540px] sm:h-[540px] rounded-full flex items-center justify-center opacity-75"
        style={{
          x: translateX,
          y: translateY,
          rotateX,
          rotateY,
          perspective: 1000,
        }}
      >
        {/* Outer Cosmic Nebula Glow Aura */}
        <div
          className="absolute inset-[-40px] rounded-full blur-[80px] opacity-40 pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(250, 204, 21, 0.25) 0%, rgba(234, 179, 8, 0.12) 45%, rgba(120, 53, 15, 0.05) 70%, transparent 100%)',
          }}
        />

        {/* Outer Rotating Accretion Ring 1 */}
        <motion.div
          className="absolute inset-0 rounded-full border border-yellow-500/30"
          style={{
            background: 'conic-gradient(from 0deg, transparent 0%, rgba(250, 204, 21, 0.35) 25%, transparent 50%, rgba(234, 179, 8, 0.25) 75%, transparent 100%)',
            boxShadow: '0 0 50px rgba(234, 179, 8, 0.15)',
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        />

        {/* Counter-Rotating Accretion Ring 2 */}
        <motion.div
          className="absolute inset-[35px] rounded-full border border-amber-400/25"
          style={{
            background: 'conic-gradient(from 180deg, transparent 0%, rgba(234, 179, 8, 0.3) 30%, transparent 60%, rgba(250, 204, 21, 0.2) 90%, transparent 100%)',
          }}
          animate={{ rotate: -360 }}
          transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
        />

        {/* Inner Photon Ring */}
        <motion.div
          className="absolute inset-[90px] sm:inset-[110px] rounded-full border-2 border-yellow-400/80 shadow-[0_0_30px_rgba(250,204,21,0.6)]"
          animate={{ scale: [1, 1.03, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Cosmic Black Hole Singularity Core Void */}
        <div className="w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] rounded-full bg-[#090a0d] border border-yellow-500/40 shadow-[inset_0_0_40px_rgba(0,0,0,0.95),0_0_30px_rgba(234,179,8,0.25)] relative z-10 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(234,179,8,0.12),transparent_70%)]" />
        </div>
      </motion.div>

      {/* 2. Secondary Ambient Background Cosmos Glow (Left Side Balance) */}
      <motion.div
        className="absolute bottom-[10%] left-[-5%] w-[320px] h-[320px] sm:w-[400px] sm:h-[400px] rounded-full blur-[90px] opacity-25 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(234, 179, 8, 0.2) 0%, rgba(180, 83, 9, 0.08) 50%, transparent 80%)',
          x: useTransform(smoothX, [-0.5, 0.5], [20, -20]),
          y: useTransform(smoothY, [-0.5, 0.5], [20, -20]),
        }}
      />

      {/* 3. Twinkling Background Starfield Layer */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute top-[15%] left-[20%] w-1 h-1 bg-yellow-300 rounded-full animate-ping" style={{ animationDuration: '3s' }} />
        <div className="absolute top-[35%] left-[75%] w-1.5 h-1.5 bg-white rounded-full animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute top-[65%] left-[15%] w-1 h-1 bg-yellow-200 rounded-full animate-ping" style={{ animationDuration: '5s' }} />
        <div className="absolute top-[80%] left-[80%] w-1.5 h-1.5 bg-yellow-400 rounded-full animate-pulse" style={{ animationDuration: '3.5s' }} />
        <div className="absolute top-[25%] left-[45%] w-1 h-1 bg-white rounded-full opacity-60" />
        <div className="absolute top-[75%] left-[55%] w-1 h-1 bg-yellow-400 opacity-70" />
      </div>

    </div>
  );
}
