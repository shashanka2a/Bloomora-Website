import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Home, Briefcase, Code, Users, DollarSign, MessageSquare } from "lucide-react";
import { LotusLogo } from "./LotusLogo";

const navItems = [
  { id: "hero", label: "Home", icon: Home },
  { id: "work", label: "Work", icon: Briefcase },
  { id: "services", label: "Services", icon: Code },
  { id: "testimonials", label: "Reviews", icon: Users },
  { id: "pricing", label: "Pricing", icon: DollarSign },
  { id: "contact", label: "Contact", icon: MessageSquare },
];

export function FloatingNav() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show nav after scrolling 100px
      setIsVisible(window.scrollY > 100);

      // Detect active section
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed top-6 left-1/2 -translate-x-1/2 z-50 hidden lg:block"
        >
          <div className="bg-[#1B1B1B]/80 backdrop-blur-xl border border-white/10 rounded-2xl px-2 py-2 shadow-2xl shadow-black/20">
            <div className="flex items-center gap-1">
              {/* Logo */}
              <div className="px-3 py-2">
                <LotusLogo size={28} />
              </div>
              
              {/* Separator */}
              <div className="w-px h-8 bg-white/10" />
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;

                return (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="relative px-4 py-2.5 rounded-xl transition-colors duration-200 group"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute inset-0 bg-gradient-to-r from-violet-600 to-purple-600 rounded-xl"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    <div className="relative flex items-center gap-2">
                      <Icon className={`w-4 h-4 transition-colors ${
                        isActive ? "text-white" : "text-gray-400 group-hover:text-white"
                      }`} />
                      <span className={`text-sm transition-colors ${
                        isActive ? "text-white" : "text-gray-400 group-hover:text-white"
                      }`}>
                        {item.label}
                      </span>
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
