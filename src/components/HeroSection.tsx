import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";
import { MagneticButton } from "./MagneticButton";
import { RevealText } from "./RevealText";
// Simplified hero: removed decorative shapes/particles for a cleaner look
import { LotusLogo } from "./LotusLogo";

interface HeroSectionProps {
  onStartProject?: () => void;
}

export function HeroSection({ onStartProject }: HeroSectionProps) {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const scrollToWork = () => {
    const workSection = document.querySelector('#work');
    workSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Seamless gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0E0E0E] via-[#1A1A1A] to-[#0E0E0E]" />
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
            }}
            animate={{
              y: [0, -100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>
      
      {/* Enhanced glow effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 via-transparent to-teal-500/5" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse" />

      {/* Content */}
      <motion.div 
        className="relative z-10 max-w-6xl mx-auto text-center"
      >
        {/* Animated Lotus Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0, y: -50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ 
            duration: 1, 
            ease: [0.33, 1, 0.68, 1],
            delay: 0.2
          }}
          className="mb-8 flex justify-center"
        >
          <div className="relative">
            <LotusLogo size={80} animated />
          </div>
        </motion.div>

        {/* Floating badge with enhanced animation */}
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1], delay: 0.4 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 mb-8 group hover:bg-white/10 transition-all duration-300 cursor-default"
        >
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          >
            <Sparkles className="w-4 h-4 text-violet-400" />
          </motion.div>
          <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
            Crafting digital excellence since 2024
          </span>
          <motion.div
            className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-500/0 via-violet-500/10 to-violet-500/0"
            animate={{
              x: ["-100%", "100%"],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </motion.div>

        {/* Main heading with reveal animation */}
        <div className="mb-6 sm:mb-8 px-4">
          <motion.h1 
            className="text-white leading-[1.1] tracking-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
              className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-3"
            >
              We design & develop
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
              className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
            >
              websites & apps that{" "}
              <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-teal-400 bg-clip-text text-transparent text-glow text-neon">bloom</span>
            </motion.div>
          </motion.h1>
        </div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2, ease: [0.33, 1, 0.68, 1] }}
          className="text-gray-400 mb-10 sm:mb-12 max-w-2xl mx-auto text-base sm:text-lg md:text-xl leading-relaxed px-4 text-center"
        >
          Full-stack design & development agency — we build websites and apps that convert.
        </motion.p>

        {/* CTA Buttons with magnetic effect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4, ease: [0.33, 1, 0.68, 1] }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4"
        >
          <MagneticButton
            onClick={onStartProject}
            className="w-full sm:w-64 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white px-8 py-6 relative group overflow-hidden shadow-lg shadow-violet-500/25 hover:shadow-xl hover:shadow-violet-500/40 transition-all duration-300"
          >
            <span className="relative z-10 flex items-center gap-2">
              Start Your Project
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowRight className="w-5 h-5" />
              </motion.div>
            </span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-teal-500 to-violet-500"
              initial={{ x: "-100%" }}
              whileHover={{ x: "0%" }}
              transition={{ duration: 0.5 }}
            />
          </MagneticButton>
          
          <MagneticButton
            onClick={scrollToWork}
            variant="outline"
            className="w-full sm:w-64 border-2 border-white/20 bg-white text-black hover:bg-white/90 hover:border-white/30 px-8 py-6 group relative transition-all duration-300"
          >
            <span className="relative z-10">View Our Work</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-violet-500/0 via-purple-500/10 to-teal-500/0 opacity-0 group-hover:opacity-100 rounded-lg"
              animate={{
                x: ["-100%", "100%"],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </MagneticButton>
        </motion.div>

        {/* Animated scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            <div className="w-6 h-10 border-2 border-white/20 rounded-full flex items-start justify-center p-2 backdrop-blur-sm">
              <motion.div 
                className="w-1.5 h-1.5 bg-gradient-to-b from-violet-400 to-teal-400 rounded-full"
                animate={{
                  opacity: [1, 0.3, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
            <div className="absolute inset-0 rounded-full bg-violet-500/20 blur-xl" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
