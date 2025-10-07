import { motion } from "motion/react";

export function DataVisualization() {
  return (
    <div className="relative w-full h-full">
      <svg viewBox="0 0 400 300" className="w-full h-full">
        <defs>
          <linearGradient id="dataGrad1" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" style={{ stopColor: "#8B5CF6", stopOpacity: 0.8 }} />
            <stop offset="100%" style={{ stopColor: "#A78BFA", stopOpacity: 0.3 }} />
          </linearGradient>
          <linearGradient id="dataGrad2" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" style={{ stopColor: "#14B8A6", stopOpacity: 0.8 }} />
            <stop offset="100%" style={{ stopColor: "#2DD4BF", stopOpacity: 0.3 }} />
          </linearGradient>
        </defs>

        {/* Axis */}
        <motion.line
          x1="50"
          y1="250"
          x2="350"
          y2="250"
          stroke="rgba(255,255,255,0.2)"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1 }}
        />
        <motion.line
          x1="50"
          y1="250"
          x2="50"
          y2="50"
          stroke="rgba(255,255,255,0.2)"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        />

        {/* Bars */}
        {[120, 180, 90, 200, 150, 210].map((height, i) => (
          <motion.rect
            key={i}
            x={80 + i * 45}
            y={250 - height}
            width="30"
            height={height}
            rx="4"
            fill={i % 2 === 0 ? "url(#dataGrad1)" : "url(#dataGrad2)"}
            initial={{ height: 0, y: 250 }}
            animate={{ height, y: 250 - height }}
            transition={{ delay: 0.4 + i * 0.1, duration: 0.6, ease: "easeOut" }}
          />
        ))}

        {/* Trend line */}
        <motion.path
          d="M 80,200 Q 150,150 220,180 T 340,100"
          stroke="#EC4899"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.8 }}
          transition={{ delay: 1.2, duration: 1.5, ease: "easeInOut" }}
        />

        {/* Data points */}
        {[
          { x: 80, y: 200 },
          { x: 150, y: 150 },
          { x: 220, y: 180 },
          { x: 290, y: 120 },
          { x: 340, y: 100 },
        ].map((point, i) => (
          <motion.circle
            key={i}
            cx={point.x}
            cy={point.y}
            r="6"
            fill="#EC4899"
            stroke="rgba(236,72,153,0.3)"
            strokeWidth="8"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1.2 + i * 0.1, duration: 0.4 }}
          />
        ))}
      </svg>
    </div>
  );
}
