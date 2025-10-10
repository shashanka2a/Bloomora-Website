import { motion } from "motion/react";
import { Button } from "./ui/button";
import { MessageCircle, Calendar, ArrowRight } from "lucide-react";
import { MagneticButton } from "./MagneticButton";
import { LiquidBlob } from "./illustrations/LiquidBlob";

interface FinalCTAProps {
  onStartProject?: () => void;
}

export function FinalCTA({ onStartProject }: FinalCTAProps) {
  return (
    <section id="contact" className="relative py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Enhanced gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-900 via-purple-800 to-pink-700" />
      
      {/* Liquid blobs */}
      <LiquidBlob className="top-0 left-0 w-[800px] h-[800px]" color="pink" />
      <LiquidBlob className="bottom-0 right-0 w-[700px] h-[700px]" color="violet" />
      
      {/* Animated gradient orbs */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-pink-500/30 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-1/4 right-1/4 w-80 h-80 sm:w-[28rem] sm:h-[28rem] bg-violet-500/30 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.4, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      
      {/* Overlay for depth */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Grain texture */}
      <div className="absolute inset-0 opacity-[0.015] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')]" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6 sm:mb-8">
            <span className="text-sm text-white/90">Ready to get started?</span>
          </div>

          <h2 className="text-white mb-4 sm:mb-6 px-4">
            <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight">
              Let's build something
            </span>
            <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight mt-2">
              <span className="italic bg-gradient-to-r from-pink-200 via-purple-200 to-violet-200 bg-clip-text text-transparent">
                iconic
              </span>{" "}
              together.
            </span>
          </h2>
          
          <p className="text-white/80 mb-10 sm:mb-12 max-w-2xl mx-auto text-base sm:text-lg md:text-xl leading-relaxed px-4">
            Whether you're launching your first product or scaling to millions of users, we're here to bring your vision to life.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
            <a href="https://wa.me/918179504333?text=Hi%20Bloomora%2C%20I%27d%20like%20to%20discuss%20a%20new%20project." target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <MagneticButton
                className="w-full bg-green-600 hover:bg-green-700 text-white px-8 py-6 gap-2 shadow-lg shadow-green-500/25 hover:shadow-xl hover:shadow-green-500/40 transition-all duration-300 group"
              >
                <MessageCircle className="w-5 h-5" />
                Message on WhatsApp
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </MagneticButton>
            </a>

            <a href="https://calendly.com/5ha5hank/availability" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <MagneticButton
                variant="outline"
                className="w-full border-2 border-white/30 bg-white text-black hover:bg-white/90 hover:border-white/40 px-8 py-6 gap-2 transition-all duration-300 group"
              >
                <Calendar className="w-5 h-5" />
                Start Your Project
              </MagneticButton>
            </a>
          </div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 sm:mt-16 flex flex-wrap justify-center gap-6 sm:gap-8 text-white/70 text-sm"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-400" />
              <span>Available for new projects</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-violet-400" />
              <span>Response within 24 hours</span>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-teal-400" />
              <span>Free consultation</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
