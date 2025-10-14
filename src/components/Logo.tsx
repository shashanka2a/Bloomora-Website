"use client";
import { motion } from "motion/react";
import React from "react";

type LogoVariant = "lotus" | "wordmark" | "lockup";

interface LogoProps {
  variant?: LogoVariant;
  size?: number;
  showGlow?: boolean;
  animated?: boolean;
  className?: string;
  style?: React.CSSProperties;
  title?: string;
  "aria-label"?: string;
}

export function Logo({
  variant = "lockup",
  size = 40,
  showGlow = false,
  animated = true,
  className,
  style,
  title,
  "aria-label": ariaLabel,
}: LogoProps) {
  const lotus = (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial={animated ? { opacity: 0, scale: 0.9 } : false}
      animate={animated ? { opacity: 1, scale: 1 } : undefined}
      transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
      className={className}
      style={style}
      title={title}
      aria-label={ariaLabel}
    >
      <defs>
        <linearGradient id="lotus-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B5CF6" />
          <stop offset="100%" stopColor="#14B8A6" />
        </linearGradient>
        {showGlow && (
          <filter id="lotus-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        )}
      </defs>

      <g filter={showGlow ? "url(#lotus-glow)" : undefined}>
        <circle cx="16" cy="16" r="3" fill="url(#lotus-gradient)" />
        <path d="M16 26 C12 22, 12 18, 16 14 C20 18, 20 22, 16 26" fill="url(#lotus-gradient)" opacity="0.9" />
        <path d="M16 14 C12 10, 12 6, 16 2 C20 6, 20 10, 16 14" fill="url(#lotus-gradient)" opacity="0.9" />
        <path d="M6 20 C2 18, 0 14, 4 10 C8 12, 10 16, 6 20" fill="url(#lotus-gradient)" opacity="0.9" />
        <path d="M26 20 C30 18, 32 14, 28 10 C24 12, 22 16, 26 20" fill="url(#lotus-gradient)" opacity="0.9" />
      </g>
    </motion.svg>
  );

  const Wordmark = ({ height = size * 0.6 }: { height?: number }) => (
    <motion.span
      initial={animated ? { opacity: 0, y: 6 } : false}
      animate={animated ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1], delay: 0.05 }}
      className="inline-flex items-center tracking-tight font-medium"
      style={{ fontSize: Math.max(14, height), lineHeight: 1 }}
    >
      <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-teal-400 bg-clip-text text-transparent">Bloomora</span>
    </motion.span>
  );

  if (variant === "lotus") return lotus;
  if (variant === "wordmark") return <Wordmark />;

  return (
    <div className="inline-flex items-center gap-2">
      {lotus}
      <Wordmark />
    </div>
  );
}


