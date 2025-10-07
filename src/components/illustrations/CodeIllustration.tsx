import { motion } from "motion/react";

export function CodeIllustration() {
  return (
    <div className="relative w-full h-full">
      <svg viewBox="0 0 400 300" className="w-full h-full">
        <defs>
          <linearGradient id="codeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: "#8B5CF6", stopOpacity: 0.8 }} />
            <stop offset="100%" style={{ stopColor: "#14B8A6", stopOpacity: 0.8 }} />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Code window */}
        <motion.rect
          x="50"
          y="40"
          width="300"
          height="220"
          rx="12"
          fill="rgba(27, 27, 27, 0.8)"
          stroke="url(#codeGrad)"
          strokeWidth="2"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        />

        {/* Window dots */}
        {[0, 1, 2].map((i) => (
          <motion.circle
            key={i}
            cx={70 + i * 20}
            cy="60"
            r="4"
            fill={["#FF5F57", "#FFBD2E", "#28CA42"][i]}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 + i * 0.1 }}
          />
        ))}

        {/* Code lines */}
        {[0, 1, 2, 3, 4].map((i) => (
          <motion.line
            key={i}
            x1="70"
            y1={90 + i * 30}
            x2={150 + Math.random() * 150}
            y2={90 + i * 30}
            stroke="url(#codeGrad)"
            strokeWidth="3"
            strokeLinecap="round"
            filter="url(#glow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.6 }}
            transition={{ delay: 0.5 + i * 0.1, duration: 0.8 }}
          />
        ))}

        {/* Floating brackets */}
        <motion.text
          x="320"
          y="100"
          fontSize="40"
          fill="url(#codeGrad)"
          filter="url(#glow)"
          animate={{
            y: [100, 90, 100],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {"{ }"}
        </motion.text>

        <motion.text
          x="20"
          y="200"
          fontSize="30"
          fill="url(#codeGrad)"
          filter="url(#glow)"
          animate={{
            y: [200, 210, 200],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        >
          {"< />"}
        </motion.text>
      </svg>
    </div>
  );
}
