import { motion } from "motion/react";

interface LotusLogoProps {
  className?: string;
  animated?: boolean;
  size?: number;
}

export function LotusLogo({ className = "", animated = false, size = 40 }: LotusLogoProps) {
  const petals = [
    { d: "M20 35 C15 30, 15 25, 20 20 C25 25, 25 30, 20 35", delay: 0 },
    { d: "M20 20 C15 15, 15 10, 20 5 C25 10, 25 15, 20 20", delay: 0.1 },
    { d: "M8 28 C3 25, 1 20, 5 15 C10 18, 13 23, 8 28", delay: 0.2 },
    { d: "M32 28 C37 25, 39 20, 35 15 C30 18, 27 23, 32 28", delay: 0.3 },
    { d: "M12 18 C8 14, 6 9, 10 5 C14 8, 16 13, 12 18", delay: 0.4 },
    { d: "M28 18 C32 14, 34 9, 30 5 C26 8, 24 13, 28 18", delay: 0.5 },
  ];

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="lotus-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B5CF6" />
          <stop offset="50%" stopColor="#A78BFA" />
          <stop offset="100%" stopColor="#14B8A6" />
        </linearGradient>
        <linearGradient id="lotus-gradient-reverse" x1="100%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#14B8A6" />
          <stop offset="50%" stopColor="#A78BFA" />
          <stop offset="100%" stopColor="#8B5CF6" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>

      {/* Center circle */}
      {animated ? (
        <motion.circle
          cx="20"
          cy="20"
          r="4"
          fill="url(#lotus-gradient)"
          filter="url(#glow)"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        />
      ) : (
        <circle
          cx="20"
          cy="20"
          r="4"
          fill="url(#lotus-gradient)"
          filter="url(#glow)"
        />
      )}

      {/* Petals */}
      {petals.map((petal, index) => {
        const isEven = index % 2 === 0;
        const gradient = isEven ? "url(#lotus-gradient)" : "url(#lotus-gradient-reverse)";
        
        return animated ? (
          <motion.path
            key={index}
            d={petal.d}
            fill={gradient}
            opacity="0.85"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.85 }}
            transition={{ 
              duration: 0.5, 
              delay: petal.delay,
              ease: [0.33, 1, 0.68, 1]
            }}
            style={{ transformOrigin: "20px 20px" }}
          />
        ) : (
          <path
            key={index}
            d={petal.d}
            fill={gradient}
            opacity="0.85"
          />
        );
      })}
    </svg>
  );
}

// Favicon version (simpler, more visible at small sizes)
export function LotusFavicon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="favicon-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B5CF6" />
          <stop offset="100%" stopColor="#14B8A6" />
        </linearGradient>
      </defs>
      
      {/* Simplified lotus for favicon */}
      <circle cx="16" cy="16" r="3" fill="url(#favicon-gradient)" />
      <path d="M16 26 C12 22, 12 18, 16 14 C20 18, 20 22, 16 26" fill="url(#favicon-gradient)" opacity="0.9" />
      <path d="M16 14 C12 10, 12 6, 16 2 C20 6, 20 10, 16 14" fill="url(#favicon-gradient)" opacity="0.9" />
      <path d="M6 20 C2 18, 0 14, 4 10 C8 12, 10 16, 6 20" fill="url(#favicon-gradient)" opacity="0.9" />
      <path d="M26 20 C30 18, 32 14, 28 10 C24 12, 22 16, 26 20" fill="url(#favicon-gradient)" opacity="0.9" />
    </svg>
  );
}
