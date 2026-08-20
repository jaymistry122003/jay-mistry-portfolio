export default function InfiniteScroll({
  items = [],
  speed = 35,
  direction = 'left',
  className = '',
}) {
  return (
    <div className={`relative overflow-hidden w-full ${className}`}>
      <div
        className="flex w-max gap-3 py-1"
        style={{
          animation: `infiniteMarquee ${speed}s linear infinite ${direction === 'right' ? 'reverse' : 'normal'}`,
        }}
      >
        {[...items, ...items, ...items].map((item, idx) => (
          <div key={idx} className="flex-shrink-0">
            {typeof item === 'string' ? (
              <span className="px-3.5 py-1.5 rounded-md text-xs font-mono font-semibold bg-[#161924] text-yellow-400 border border-yellow-500/30 whitespace-nowrap">
                {item}
              </span>
            ) : (
              item
            )}
          </div>
        ))}
      </div>
      <style>{`
        @keyframes infiniteMarquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
      `}</style>
    </div>
  );
}
