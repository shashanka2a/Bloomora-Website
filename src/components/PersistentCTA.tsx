"use client";
import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { ArrowRight, MessageCircle, Calendar } from "lucide-react";
import { MagneticButton } from "./MagneticButton";

export function PersistentCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 200px
      setIsVisible(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed bottom-6 right-6 z-50 flex flex-col gap-3"
        >
          {/* Calendly CTA */}
          <motion.a
            href="https://calendly.com/5ha5hank/availability"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group"
          >
            <div className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white px-6 py-4 rounded-2xl shadow-2xl shadow-violet-500/25 hover:shadow-violet-500/40 transition-all duration-300 btn-magnetic backdrop-blur-sm border border-white/10"
              style={{
                boxShadow: '0 0 30px rgba(139, 92, 246, 0.3), 0 0 60px rgba(139, 92, 246, 0.1)',
                animation: 'pulse-glow 3s ease-in-out infinite'
              }}
            >
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5" />
                <span className="font-medium">Book a Call</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <ArrowRight className="w-4 h-4" />
                </motion.div>
              </div>
              {/* Enhanced glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 to-teal-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
            </div>
          </motion.a>

          {/* WhatsApp CTA */}
          <motion.a
            href="https://wa.me/918179504333?text=Hi%20Bloomora%2C%20I%27d%20like%20to%20discuss%20a%20new%20project."
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group"
          >
            <div className="bg-green-600 hover:bg-green-700 text-white px-6 py-4 rounded-2xl shadow-2xl shadow-green-500/25 hover:shadow-green-500/40 transition-all duration-300 btn-magnetic backdrop-blur-sm border border-white/10"
              style={{
                boxShadow: '0 0 20px rgba(34, 197, 94, 0.3), 0 0 40px rgba(34, 197, 94, 0.1)',
              }}
            >
              <div className="flex items-center gap-3">
                <MessageCircle className="w-5 h-5" />
                <span className="font-medium">WhatsApp</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <ArrowRight className="w-4 h-4" />
                </motion.div>
              </div>
              {/* Enhanced glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
            </div>
          </motion.a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
