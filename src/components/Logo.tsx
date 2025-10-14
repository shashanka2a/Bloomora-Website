"use client";
import { motion } from "motion/react";
import React from "react";

type LogoVariant = "lotus" | "wordmark" | "lockup";
type LogoColorScheme = "brand" | "mono" | "monoInverted" | "violet" | "teal" | "outline";

interface LogoProps {
  variant?: LogoVariant;
  size?: number;
  showGlow?: boolean;
  animated?: boolean;
  className?: string;
  style?: React.CSSProperties;
  accessibleTitle?: string;
  "aria-label"?: string;
  colorScheme?: LogoColorScheme;
  on?: "dark" | "light" | "color";
  lockupGap?: number;
  wordmarkSize?: number;
  badge?: boolean;
  border?: boolean;
  svgRef?: React.Ref<SVGSVGElement>;
  renderAs?: "html" | "svg"; // when lockup, allow single-SVG export with wordmark
}

export function Logo({
  variant = "lockup",
  size = 40,
  showGlow = false,
  animated = true,
  className,
  style,
  accessibleTitle,
  "aria-label": ariaLabel,
  colorScheme = "brand",
  on = "dark",
  lockupGap = 8,
  wordmarkSize,
  badge = false,
  border = false,
  svgRef,
  renderAs = "html",
}: LogoProps) {
  const isDark = on === "dark";

  const palette = {
    violet: "#8B5CF6",
    teal: "#14B8A6",
    white: "#FFFFFF",
    black: "#0A0A0A",
  } as const;

  const getFill = (): { fill?: string; stroke?: string; strokeWidth?: number } => {
    switch (colorScheme) {
      case "mono":
        return { fill: isDark ? palette.white : palette.black };
      case "monoInverted":
        return { fill: isDark ? palette.black : palette.white };
      case "violet":
        return { fill: palette.violet };
      case "teal":
        return { fill: palette.teal };
      case "outline":
        return { stroke: isDark ? palette.white : palette.black, strokeWidth: 1.5 };
      default:
        return {}; // brand uses gradient
    }
  };

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
      aria-label={ariaLabel}
      ref={svgRef as any}
    >
      {accessibleTitle ? <title>{accessibleTitle}</title> : null}
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
      {badge ? (
        <circle cx="16" cy="16" r="14" fill={isDark ? "#ffffff0A" : "#0000000A"} />
      ) : null}

      {border ? (
        <circle cx="16" cy="16" r="15.5" fill="none" stroke={isDark ? "#FFFFFF20" : "#00000020"} />
      ) : null}

      <g filter={showGlow ? "url(#lotus-glow)" : undefined}>
        {colorScheme === "outline" ? (
          <>
            <circle cx="16" cy="16" r="3" {...getFill()} fill="none" />
            <path d="M16 26 C12 22, 12 18, 16 14 C20 18, 20 22, 16 26" {...getFill()} fill="none" />
            <path d="M16 14 C12 10, 12 6, 16 2 C20 6, 20 10, 16 14" {...getFill()} fill="none" />
            <path d="M6 20 C2 18, 0 14, 4 10 C8 12, 10 16, 6 20" {...getFill()} fill="none" />
            <path d="M26 20 C30 18, 32 14, 28 10 C24 12, 22 16, 26 20" {...getFill()} fill="none" />
          </>
        ) : (
          <>
            <circle cx="16" cy="16" r="3" fill={colorScheme === "brand" ? "url(#lotus-gradient)" : getFill().fill} />
            <path d="M16 26 C12 22, 12 18, 16 14 C20 18, 20 22, 16 26" fill={colorScheme === "brand" ? "url(#lotus-gradient)" : getFill().fill} opacity="0.9" />
            <path d="M16 14 C12 10, 12 6, 16 2 C20 6, 20 10, 16 14" fill={colorScheme === "brand" ? "url(#lotus-gradient)" : getFill().fill} opacity="0.9" />
            <path d="M6 20 C2 18, 0 14, 4 10 C8 12, 10 16, 6 20" fill={colorScheme === "brand" ? "url(#lotus-gradient)" : getFill().fill} opacity="0.9" />
            <path d="M26 20 C30 18, 32 14, 28 10 C24 12, 22 16, 26 20" fill={colorScheme === "brand" ? "url(#lotus-gradient)" : getFill().fill} opacity="0.9" />
          </>
        )}
      </g>
    </motion.svg>
  );

  const Wordmark = ({ height = wordmarkSize ?? size * 0.6 }: { height?: number }) => (
    <motion.span
      initial={animated ? { opacity: 0, y: 6 } : false}
      animate={animated ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1], delay: 0.05 }}
      className="inline-flex items-center tracking-tight font-medium"
      style={{ fontSize: Math.max(14, height), lineHeight: 1 }}
    >
      {colorScheme === "brand" ? (
        <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-teal-400 bg-clip-text text-transparent">Bloomora</span>
      ) : (
        <span style={{ color: getFill().fill ?? (isDark ? palette.white : palette.black) }}>Bloomora</span>
      )}
    </motion.span>
  );

  if (variant === "lotus") return lotus;
  if (variant === "wordmark") return <Wordmark />;

  // Lockup as single SVG for export-friendly rendering (includes wordmark as SVG text)
  if (variant === "lockup" && renderAs === "svg") {
    const wmSize = wordmarkSize ?? size * 0.6;
    const gap = lockupGap;
    // Approximate wordmark width: factor based on glyphs; tuned for Geist
    const wordmarkApproxWidth = wmSize * 6.2;
    const totalWidth = Math.round(size + gap + wordmarkApproxWidth);
    const totalHeight = Math.round(size);
    const textY = Math.round(size * 0.68); // baseline alignment

    return (
      <motion.svg
        width={totalWidth}
        height={totalHeight}
        viewBox={`0 0 ${totalWidth} ${totalHeight}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        initial={animated ? { opacity: 0, y: 4 } : false}
        animate={animated ? { opacity: 1, y: 0 } : undefined}
        transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
        className={className}
        style={style}
        aria-label={ariaLabel}
        ref={svgRef as any}
      >
        {accessibleTitle ? <title>{accessibleTitle}</title> : null}
        <defs>
          <linearGradient id="lotus-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#14B8A6" />
          </linearGradient>
        </defs>
        {/* Lotus at left */}
        <g transform={`translate(0, ${Math.max(0, (totalHeight - size) / 2)})`}>
          {/* Reuse lotus shapes at original coordinates scaled to size 32→size */}
          <g transform={`scale(${size / 32})`}>
            {colorScheme === "outline" ? (
              <>
                <circle cx="16" cy="16" r="3" stroke={getFill().stroke} strokeWidth={getFill().strokeWidth} fill="none" />
                <path d="M16 26 C12 22, 12 18, 16 14 C20 18, 20 22, 16 26" stroke={getFill().stroke} strokeWidth={getFill().strokeWidth} fill="none" />
                <path d="M16 14 C12 10, 12 6, 16 2 C20 6, 20 10, 16 14" stroke={getFill().stroke} strokeWidth={getFill().strokeWidth} fill="none" />
                <path d="M6 20 C2 18, 0 14, 4 10 C8 12, 10 16, 6 20" stroke={getFill().stroke} strokeWidth={getFill().strokeWidth} fill="none" />
                <path d="M26 20 C30 18, 32 14, 28 10 C24 12, 22 16, 26 20" stroke={getFill().stroke} strokeWidth={getFill().strokeWidth} fill="none" />
              </>
            ) : (
              <>
                <circle cx="16" cy="16" r="3" fill={colorScheme === "brand" ? "url(#lotus-gradient)" : getFill().fill} />
                <path d="M16 26 C12 22, 12 18, 16 14 C20 18, 20 22, 16 26" fill={colorScheme === "brand" ? "url(#lotus-gradient)" : getFill().fill} opacity="0.9" />
                <path d="M16 14 C12 10, 12 6, 16 2 C20 6, 20 10, 16 14" fill={colorScheme === "brand" ? "url(#lotus-gradient)" : getFill().fill} opacity="0.9" />
                <path d="M6 20 C2 18, 0 14, 4 10 C8 12, 10 16, 6 20" fill={colorScheme === "brand" ? "url(#lotus-gradient)" : getFill().fill} opacity="0.9" />
                <path d="M26 20 C30 18, 32 14, 28 10 C24 12, 22 16, 26 20" fill={colorScheme === "brand" ? "url(#lotus-gradient)" : getFill().fill} opacity="0.9" />
              </>
            )}
          </g>
        </g>
        {/* Wordmark on the right */}
        <g transform={`translate(${size + gap},0)`}>
          {colorScheme === "brand" ? (
            <>
              <defs>
                <linearGradient id="wordmark-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#8B5CF6" />
                  <stop offset="100%" stopColor="#14B8A6" />
                </linearGradient>
              </defs>
              <text x="0" y={textY} fontFamily="Geist, system-ui, sans-serif" fontSize={wmSize} fontWeight={600} fill="url(#wordmark-gradient)">
                Bloomora
              </text>
            </>
          ) : (
            <text x="0" y={textY} fontFamily="Geist, system-ui, sans-serif" fontSize={wmSize} fontWeight={600} fill={getFill().fill ?? (isDark ? palette.white : palette.black)}>
              Bloomora
            </text>
          )}
        </g>
      </motion.svg>
    );
  }

  return (
    <div className="inline-flex items-center" style={{ gap: lockupGap }}>
      {lotus}
      <Wordmark />
    </div>
  );
}


