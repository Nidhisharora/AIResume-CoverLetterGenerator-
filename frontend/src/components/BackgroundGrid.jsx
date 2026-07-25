export default function BackgroundGrid() {
  const size = 100;

  return (
    <div className="fixed inset-0 -z-20 bg-[#080a0c]">
      <svg
        className="absolute inset-0 h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="grid" width={size} height={size} patternUnits="userSpaceOnUse">
            <line x1="0.5" y1="0" x2="0.5" y2={size} stroke="rgba(255,255,255,0.035)" strokeWidth="1" />
            <line x1="0" y1="0.5" x2={size} y2="0.5" stroke="rgba(255,255,255,0.035)" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  );
}