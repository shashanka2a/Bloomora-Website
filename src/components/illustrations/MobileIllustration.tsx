import { motion } from "motion/react";

export function MobileIllustration() {
  return (
    <div className="relative w-full h-full">
      <svg viewBox="0 0 200 400" className="w-full h-full">
        <defs>
          <linearGradient id="phoneGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: "#8B5CF6", stopOpacity: 0.8 }} />
            <stop offset="100%" style={{ stopColor: "#14B8A6", stopOpacity: 0.8 }} />
          </linearGradient>
          <filter id="phoneShadow">
            <feGaussianBlur in="SourceAlpha" stdDeviation="5" />
            <feOffset dx="0" dy="4" result="offsetblur" />
            <feComponentTransfer>
              <feFuncA type="linear" slope="0.3" />
            </feComponentTransfer>
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Phone body */}
        <motion.rect
          x="40"
          y="40"
          width="120"
          height="320"
          rx="20"
          fill="rgba(27, 27, 27, 0.9)"
          stroke="url(#phoneGrad)"
          strokeWidth="3"
          filter="url(#phoneShadow)"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        />

        {/* Notch */}
        <motion.rect
          x="70"
          y="50"
          width="60"
          height="8"
          rx="4"
          fill="#0E0E0E"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.3, duration: 0.4 }}
        />

        {/* Screen content - animated bars */}
        {[0, 1, 2].map((i) => (
          <motion.rect
            key={i}
            x="55"
            y={90 + i * 40}
            width={80 + Math.random() * 30}
            height="20"
            rx="10"
            fill="url(#phoneGrad)"
            opacity="0.3"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 0.3 }}
            transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
          />
        ))}

        {/* Bottom app bar */}
        <motion.rect
          x="55"
          y="320"
          width="90"
          height="25"
          rx="12"
          fill="url(#phoneGrad)"
          opacity="0.4"
          initial={{ y: 340, opacity: 0 }}
          animate={{ y: 320, opacity: 0.4 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        />

        {/* Floating notification */}
        <motion.g
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <motion.rect
            x="180"
            y="100"
            width="80"
            height="40"
            rx="8"
            fill="rgba(139, 92, 246, 0.9)"
            animate={{
              y: [100, 95, 100],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.circle
            cx="200"
            cy="120"
            r="3"
            fill="white"
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.g>
      </svg>
    </div>
  );
}
