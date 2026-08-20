export default function Aurora({
  colorStops = ['#eab308', '#facc15', '#854d0e'],
  className = '',
}) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none -z-10 ${className}`}>
      <div
        className="absolute -inset-[30%] opacity-25 blur-[70px]"
        style={{
          backgroundImage: `radial-gradient(ellipse at 30% 20%, ${colorStops[0]} 0%, transparent 55%),
                            radial-gradient(ellipse at 70% 60%, ${colorStops[1]} 0%, transparent 50%),
                            radial-gradient(ellipse at 40% 90%, ${colorStops[2]} 0%, transparent 60%)`,
          animation: 'auroraFlow 14s ease-in-out infinite alternate',
        }}
      />
      <style>{`
        @keyframes auroraFlow {
          0% { transform: scale(1) rotate(0deg) translateY(0); }
          50% { transform: scale(1.12) rotate(4deg) translateY(-20px); }
          100% { transform: scale(1.05) rotate(-4deg) translateY(15px); }
        }
      `}</style>
    </div>
  );
}
