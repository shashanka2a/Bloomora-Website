import { motion, AnimatePresence } from "motion/react";
import { Monitor, Smartphone, Boxes, ChevronDown } from "lucide-react";
import { useState } from "react";

const services = [
  {
    id: 1,
    icon: Monitor,
    title: "Landing Pages",
    price: "starting ₹15,000",
    description: "High-converting landing pages that tell your story and drive action.",
    tech: "Next.js • Tailwind • Motion • Vercel",
    deliverables: ["Responsive design", "SEO optimized", "Analytics setup", "1-week delivery"]
  },
  {
    id: 2,
    icon: Smartphone,
    title: "Mobile Apps",
    price: "starting ₹85,000",
    description: "Native-quality mobile apps for iOS and Android that users love.",
    tech: "Flutter • Firebase • iOS & Android",
    deliverables: ["Cross-platform", "Push notifications", "Offline support", "App store deployment"]
  },
  {
    id: 3,
    icon: Boxes,
    title: "Full-stack Products",
    price: "starting ₹2,00,000",
    description: "Complete web applications with robust backends and scalable infrastructure.",
    tech: "Next.js • Supabase • PostgreSQL • AI Integration",
    deliverables: ["Custom backend", "Admin dashboard", "Real-time features", "3-month support"]
  }
];

export function ServicesSection() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <section id="services" className="py-16 sm:py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0A0A0A] to-[#0E0E0E] relative overflow-hidden">
      <div className="max-w-5xl mx-auto">

        <div className="space-y-4 sm:space-y-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isExpanded = expandedId === service.id;
            
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredId(service.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="relative group"
              >
                <button
                  onClick={() => setExpandedId(isExpanded ? null : service.id)}
                  className="w-full text-left"
                >
                  <div className="relative flex items-center gap-4 sm:gap-6 p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl border-2 border-zinc-800/50 bg-zinc-900/30 hover:bg-zinc-900/50 hover:border-violet-500/30 transition-all duration-300 cursor-pointer overflow-hidden">
                    {/* Gradient background on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-r from-violet-500/5 via-purple-500/5 to-teal-500/5 opacity-0 ${hoveredId === service.id ? 'opacity-100' : ''} transition-opacity duration-500`} />
                    
                    {/* Icon */}
                    <motion.div 
                      className="relative flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-violet-600/10 to-teal-600/10 flex items-center justify-center border border-violet-500/20 group-hover:border-violet-500/40 transition-all duration-300"
                      whileHover={{ rotate: [0, -5, 5, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-violet-400 group-hover:text-violet-300 transition-colors duration-300" />
                      
                      {/* Glow effect */}
                      <div className={`absolute inset-0 rounded-xl sm:rounded-2xl bg-violet-500/20 blur-xl opacity-0 ${hoveredId === service.id ? 'opacity-100' : ''} transition-opacity duration-500`} />
                    </motion.div>

                    {/* Content */}
                    <div className="relative flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-4 mb-1 sm:mb-2">
                        <h3 className="text-white group-hover:text-violet-300 transition-colors duration-300">
                          {service.title}
                        </h3>
                        <span className="text-violet-400 whitespace-nowrap text-sm sm:text-base">
                          {service.price}
                        </span>
                      </div>
                      <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    {/* Expand indicator */}
                    <motion.div
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0 w-8 h-8 rounded-full bg-white/5 flex items-center justify-center"
                    >
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    </motion.div>
                  </div>
                </button>

                {/* Expanded content */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 sm:px-6 lg:px-8 py-4 sm:py-6 bg-zinc-900/50 border-x-2 border-b-2 border-violet-500/20 rounded-b-xl sm:rounded-b-2xl">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                          <div>
                            <h4 className="text-violet-400 mb-2 sm:mb-3 text-sm uppercase tracking-wider">
                              Tech Stack
                            </h4>
                            <p className="text-gray-300 text-sm sm:text-base">
                              {service.tech}
                            </p>
                          </div>
                          <div>
                            <h4 className="text-violet-400 mb-2 sm:mb-3 text-sm uppercase tracking-wider">
                              What's Included
                            </h4>
                            <ul className="space-y-1.5 sm:space-y-2">
                              {service.deliverables.map((item, i) => (
                                <motion.li
                                  key={i}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: i * 0.1 }}
                                  className="flex items-center gap-2 text-gray-300 text-sm sm:text-base"
                                >
                                  <div className="w-1.5 h-1.5 rounded-full bg-violet-400" />
                                  {item}
                                </motion.li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 sm:mt-16 text-center"
        >
          <p className="text-gray-400 mb-6 text-sm sm:text-base">
            Need something custom? Let's discuss your unique requirements.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 text-white hover:from-violet-700 hover:to-purple-700 transition-all duration-300 shadow-lg shadow-violet-500/25 hover:shadow-xl hover:shadow-violet-500/40"
          >
            Schedule a Consultation
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
