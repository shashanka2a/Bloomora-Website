import { motion } from "motion/react";

interface LiquidBlobProps {
  className?: string;
  color?: string;
}

export function LiquidBlob({ className = "", color = "violet" }: LiquidBlobProps) {
  const colors = {
    violet: ["#8B5CF6", "#A78BFA"],
    teal: ["#14B8A6", "#2DD4BF"],
    pink: ["#EC4899", "#F472B6"],
    purple: ["#9333EA", "#A855F7"],
  };

  const [start, end] = colors[color as keyof typeof colors] || colors.violet;

  return (
    <div className={`absolute ${className}`}>
      <svg viewBox="0 0 400 400" className="w-full h-full">
        <defs>
          <linearGradient id={`blobGrad-${color}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: start, stopOpacity: 0.3 }} />
            <stop offset="100%" style={{ stopColor: end, stopOpacity: 0.1 }} />
          </linearGradient>
          <filter id={`blur-${color}`}>
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" />
          </filter>
        </defs>
        <motion.path
          d="M200,50 C250,50 300,100 300,150 C300,200 250,250 200,250 C150,250 100,200 100,150 C100,100 150,50 200,50 Z"
          fill={`url(#blobGrad-${color})`}
          filter={`url(#blur-${color})`}
          animate={{
            d: [
              "M200,50 C250,50 300,100 300,150 C300,200 250,250 200,250 C150,250 100,200 100,150 C100,100 150,50 200,50 Z",
              "M200,50 C270,60 310,120 300,170 C290,220 230,260 180,250 C130,240 90,180 100,130 C110,80 150,40 200,50 Z",
              "M200,50 C230,50 280,90 290,140 C300,190 270,240 220,250 C170,260 120,220 110,170 C100,120 140,50 200,50 Z",
              "M200,50 C250,50 300,100 300,150 C300,200 250,250 200,250 C150,250 100,200 100,150 C100,100 150,50 200,50 Z",
            ],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </svg>
    </div>
  );
}
