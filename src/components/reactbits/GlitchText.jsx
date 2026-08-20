export default function GlitchText({
  text = '',
  className = '',
}) {
  return (
    <span className={`relative inline-block group ${className}`}>
      <span className="relative z-10">{text}</span>
      <span
        aria-hidden="true"
        className="absolute inset-0 text-red-400 opacity-0 group-hover:opacity-70 group-hover:translate-x-0.5 transition-opacity pointer-events-none"
        style={{ clipPath: 'polygon(0 0, 100% 0, 100% 45%, 0 45%)' }}
      >
        {text}
      </span>
      <span
        aria-hidden="true"
        className="absolute inset-0 text-yellow-300 opacity-0 group-hover:opacity-80 group-hover:-translate-x-0.5 transition-opacity pointer-events-none"
        style={{ clipPath: 'polygon(0 55%, 100% 55%, 100% 100%, 0 100%)' }}
      >
        {text}
      </span>
    </span>
  );
}
