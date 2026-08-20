export default function StarBorder({
  as: Component = 'div',
  className = '',
  color = '#facc15',
  speed = '5s',
  children,
  ...props
}) {
  return (
    <Component className={`relative inline-block overflow-hidden p-[1px] rounded-lg ${className}`} {...props}>
      <div
        className="absolute inset-[-100%] pointer-events-none"
        style={{
          background: `conic-gradient(from 0deg at 50% 50%, transparent 0%, transparent 75%, ${color} 100%)`,
          animation: `starRotate ${speed} linear infinite`,
        }}
      />
      <div className="relative w-full h-full rounded-[7px]">
        {children}
      </div>
      <style>{`
        @keyframes starRotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </Component>
  );
}
