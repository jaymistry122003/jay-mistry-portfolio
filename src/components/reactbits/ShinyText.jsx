export default function ShinyText({
  text = '',
  disabled = false,
  speed = 4,
  className = '',
}) {
  return (
    <span
      className={`inline-block bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-amber-100 to-yellow-400 ${className}`}
      style={{
        backgroundSize: '200% 100%',
        animation: disabled ? 'none' : `shinySweep ${speed}s ease-in-out infinite`,
      }}
    >
      {text}
      <style>{`
        @keyframes shinySweep {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>
    </span>
  );
}
