"use client";

const energyIcons = [
  { name: "drill.svg", top: "20%", left: "30%" },
  { name: "oil-container.svg", top: "25%", left: "70%" },
  { name: "oil-platform.svg", top: "75%", left: "25%" },
  { name: "ship-with-cargo-on-sea.svg", top: "80%", left: "65%" },
  { name: "sea-waves.svg", top: "50%", left: "15%" },
  { name: "oil-platform-v2.svg", top: "50%", left: "85%" },
];

export default function TransitionBackground() {
  return (
    <div className="absolute inset-0 w-screen h-screen bg-[#F2F4F1] overflow-hidden">
      {/* Blueprint Grid Lines (Animated) */}
      <style>
        {`
          @keyframes transition-drift {
            0% { transform: translate(0, 0); }
            50% { transform: translate(-15px, 8px); }
            100% { transform: translate(0, 0); }
          }
          .animate-topo {
            animation: transition-drift 8s ease-in-out infinite;
          }
        `}
      </style>
      <svg
        className="absolute inset-0 w-full h-full opacity-35"
        preserveAspectRatio="xMidYMid slice"
      >
        <pattern
          id="topo-transition"
          x="0"
          y="0"
          width="900"
          height="300"
          patternUnits="userSpaceOnUse"
        >
          <g className="animate-topo">
            {[
              "M0,60 Q225,20 450,60 Q675,100 900,60",
              "M0,100 Q225,60 450,100 Q675,140 900,100",
              "M0,30 Q225,-10 450,30 Q675,70 900,30",
              "M0,140 Q225,100 450,140 Q675,180 900,140",
              "M0,180 Q225,140 450,180 Q675,220 900,180",
              "M0,220 Q225,180 450,220 Q675,260 900,220",
            ].map((d, i) => (
              <path
                key={i}
                d={d}
                stroke="#0b1f10"
                fill="none"
                strokeWidth="2"
                opacity={0.3 - i * 0.04}
              />
            ))}
          </g>
        </pattern>
        <rect width="100%" height="100%" fill="url(#topo-transition)" />
      </svg>

      {/* Conspiracy Web Lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        {energyIcons.map((icon, i) => (
          <line
            key={i}
            x1="50%"
            y1="50%"
            x2={icon.left}
            y2={icon.top}
            stroke="#13642C"
            strokeWidth="2"
            strokeDasharray="6,4"
            opacity="0.4"
          />
        ))}
      </svg>

      {/* Energy Icons */}
      {energyIcons.map((icon, i) => (
        <div
          key={i}
          className="absolute w-12 h-12 md:w-20 md:h-20 bg-[#13642C]/10 rounded-full flex items-center justify-center -translate-x-1/2 -translate-y-1/2"
          style={{ top: icon.top, left: icon.left }}
        >
          <div
            className="w-1/2 h-1/2 bg-[#13642C]"
            style={{
              WebkitMaskImage: `url('/svgs/${icon.name}')`,
              maskImage: `url('/svgs/${icon.name}')`,
              WebkitMaskSize: "contain",
              maskSize: "contain",
              WebkitMaskRepeat: "no-repeat",
              maskRepeat: "no-repeat",
              WebkitMaskPosition: "center",
              maskPosition: "center",
            }}
          />
        </div>
      ))}

      {/* Central Logo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 md:w-48 md:h-48 bg-white/80 rounded-full flex items-center justify-center border-4 border-[#13642C]/20">
        <img src="/logo.png" alt="Cypress Energy" className="w-[70%] h-auto object-contain" />
      </div>
    </div>
  );
}
