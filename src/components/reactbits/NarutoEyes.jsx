import { useEffect, useRef, useState } from 'react';

export default function NarutoEyes({
  className = '',
  eyeSize = 110,
}) {
  const leftEyeRef = useRef(null);
  const rightEyeRef = useRef(null);

  const [leftPupilPos, setLeftPupilPos] = useState({ x: 0, y: 0 });
  const [rightPupilPos, setRightPupilPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX: mouseX, clientY: mouseY } = e;
      const maxMove = eyeSize * 0.28;

      if (leftEyeRef.current) {
        const rect = leftEyeRef.current.getBoundingClientRect();
        const eyeX = rect.left + rect.width / 2;
        const eyeY = rect.top + rect.height / 2;

        const angle = Math.atan2(mouseY - eyeY, mouseX - eyeX);
        const dist = Math.min(Math.hypot(mouseX - eyeX, mouseY - eyeY), maxMove);

        setLeftPupilPos({
          x: Math.cos(angle) * dist,
          y: Math.sin(angle) * dist,
        });
      }

      if (rightEyeRef.current) {
        const rect = rightEyeRef.current.getBoundingClientRect();
        const eyeX = rect.left + rect.width / 2;
        const eyeY = rect.top + rect.height / 2;

        const angle = Math.atan2(mouseY - eyeY, mouseX - eyeX);
        const dist = Math.min(Math.hypot(mouseX - eyeX, mouseY - eyeY), maxMove);

        setRightPupilPos({
          x: Math.cos(angle) * dist,
          y: Math.sin(angle) * dist,
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [eyeSize]);

  const irisDiameter = `${eyeSize * 0.52}px`;

  return (
    <div className={`flex items-center justify-center gap-8 sm:gap-14 select-none pointer-events-none ${className}`}>
      
      {/* LEFT NARUTO SHARP EYE (SHARINGAN STYLE) */}
      <div
        ref={leftEyeRef}
        className="relative flex items-center justify-center overflow-hidden bg-[#090a0d] border-2 sm:border-3 border-yellow-400/80 shadow-[0_0_35px_rgba(234,179,8,0.4)]"
        style={{
          width: `${eyeSize * 1.65}px`,
          height: `${eyeSize}px`,
          clipPath: 'polygon(0% 50%, 25% 10%, 75% 0%, 100% 50%, 75% 90%, 25% 100%)',
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0.92)_100%)] pointer-events-none z-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-red-950/45 via-yellow-500/15 to-red-950/45" />

        {/* IRIS & PUPIL (TRACKS CURSOR) */}
        <div
          className="absolute rounded-full flex items-center justify-center transition-transform duration-75 ease-out z-10"
          style={{
            width: irisDiameter,
            height: irisDiameter,
            transform: `translate(${leftPupilPos.x}px, ${leftPupilPos.y}px)`,
            background: 'radial-gradient(circle, #ef4444 0%, #dc2626 50%, #991b1b 75%, #450a0a 100%)',
            boxShadow: '0 0 20px #ef4444, inset 0 0 10px #facc15',
          }}
        >
          <div className="absolute inset-1 rounded-full border border-black/90 flex items-center justify-center">
            {/* 3 Tomoe Marks */}
            <div className="absolute top-1 w-2.5 h-2.5 bg-black rounded-full shadow-[0_0_5px_#facc15]" />
            <div className="absolute bottom-1.5 left-1 w-2.5 h-2.5 bg-black rounded-full shadow-[0_0_5px_#facc15]" />
            <div className="absolute bottom-1.5 right-1 w-2.5 h-2.5 bg-black rounded-full shadow-[0_0_5px_#facc15]" />
            
            <div className="w-5 h-5 rounded-full bg-black border border-red-500/80 flex items-center justify-center shadow-inner">
              <div className="w-1.5 h-1.5 bg-white rounded-full translate-x-0.5 -translate-y-0.5 opacity-90 shadow-[0_0_4px_#ffffff]" />
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT NARUTO SHARP EYE (SHARINGAN STYLE) */}
      <div
        ref={rightEyeRef}
        className="relative flex items-center justify-center overflow-hidden bg-[#090a0d] border-2 sm:border-3 border-yellow-400/80 shadow-[0_0_35px_rgba(234,179,8,0.4)]"
        style={{
          width: `${eyeSize * 1.65}px`,
          height: `${eyeSize}px`,
          clipPath: 'polygon(0% 50%, 25% 0%, 75% 10%, 100% 50%, 75% 100%, 25% 90%)',
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0.92)_100%)] pointer-events-none z-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-red-950/45 via-yellow-500/15 to-red-950/45" />

        {/* IRIS & PUPIL (TRACKS CURSOR) */}
        <div
          className="absolute rounded-full flex items-center justify-center transition-transform duration-75 ease-out z-10"
          style={{
            width: irisDiameter,
            height: irisDiameter,
            transform: `translate(${rightPupilPos.x}px, ${rightPupilPos.y}px)`,
            background: 'radial-gradient(circle, #ef4444 0%, #dc2626 50%, #991b1b 75%, #450a0a 100%)',
            boxShadow: '0 0 20px #ef4444, inset 0 0 10px #facc15',
          }}
        >
          <div className="absolute inset-1 rounded-full border border-black/90 flex items-center justify-center">
            {/* 3 Tomoe Marks */}
            <div className="absolute top-1 w-2.5 h-2.5 bg-black rounded-full shadow-[0_0_5px_#facc15]" />
            <div className="absolute bottom-1.5 left-1 w-2.5 h-2.5 bg-black rounded-full shadow-[0_0_5px_#facc15]" />
            <div className="absolute bottom-1.5 right-1 w-2.5 h-2.5 bg-black rounded-full shadow-[0_0_5px_#facc15]" />
            
            <div className="w-5 h-5 rounded-full bg-black border border-red-500/80 flex items-center justify-center shadow-inner">
              <div className="w-1.5 h-1.5 bg-white rounded-full translate-x-0.5 -translate-y-0.5 opacity-90 shadow-[0_0_4px_#ffffff]" />
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
