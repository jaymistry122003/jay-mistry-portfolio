export default function Beams({
  className = '',
  beamColor = 'rgba(234, 179, 8, 0.12)',
}) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none -z-10 ${className}`}>
      <div
        className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] opacity-40"
        style={{
          backgroundImage: `repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 60px,
            ${beamColor} 60px,
            ${beamColor} 62px
          )`,
          animation: 'beamMove 20s linear infinite',
        }}
      />
      <style>{`
        @keyframes beamMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(60px, 60px); }
        }
      `}</style>
    </div>
  );
}
