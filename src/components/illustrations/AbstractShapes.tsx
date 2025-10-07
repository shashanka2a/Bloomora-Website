import { motion } from "motion/react";

export function AbstractShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating geometric shapes */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-64 h-64"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <svg viewBox="0 0 200 200" className="w-full h-full opacity-10">
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: "#8B5CF6", stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: "#14B8A6", stopOpacity: 1 }} />
            </linearGradient>
          </defs>
          <polygon points="100,10 40,180 190,60 10,60 160,180" fill="url(#grad1)" />
        </svg>
      </motion.div>

      <motion.div
        className="absolute top-1/2 right-1/4 w-48 h-48"
        animate={{
          rotate: [0, -360],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <svg viewBox="0 0 200 200" className="w-full h-full opacity-10">
          <defs>
            <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: "#EC4899", stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: "#8B5CF6", stopOpacity: 1 }} />
            </linearGradient>
          </defs>
          <circle cx="100" cy="100" r="80" fill="none" stroke="url(#grad2)" strokeWidth="3" />
          <circle cx="100" cy="100" r="60" fill="none" stroke="url(#grad2)" strokeWidth="2" />
          <circle cx="100" cy="100" r="40" fill="none" stroke="url(#grad2)" strokeWidth="1" />
        </svg>
      </motion.div>

      <motion.div
        className="absolute bottom-1/4 left-1/3 w-56 h-56"
        animate={{
          rotate: [0, 180, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <svg viewBox="0 0 200 200" className="w-full h-full opacity-10">
          <defs>
            <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: "#14B8A6", stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: "#06B6D4", stopOpacity: 1 }} />
            </linearGradient>
          </defs>
          <path
            d="M100,20 L180,100 L100,180 L20,100 Z"
            fill="none"
            stroke="url(#grad3)"
            strokeWidth="2"
          />
          <path
            d="M100,50 L150,100 L100,150 L50,100 Z"
            fill="url(#grad3)"
            opacity="0.5"
          />
        </svg>
      </motion.div>
    </div>
  );
}
