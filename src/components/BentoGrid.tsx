import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Jose Kitchen",
    outcome: "WhatsApp Ordering",
    delivery: "3 week delivery",
    image: "https://images.unsplash.com/photo-1700628785251-2c3c084bec23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXhpY2FuJTIwZm9vZCUyMHJlc3RhdXJhbnR8ZW58MXx8fHwxNzU5ODIzMDM1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    link: "https://www.josekitchen.com/",
    logo: "🌮",
    tech: ["Next.js", "WhatsApp API", "Food Delivery"]
  },
  {
    id: 2,
    title: "LoveBytes",
    outcome: ".edu verification",
    delivery: "6 week delivery",
    image: "https://images.unsplash.com/photo-1736220689286-7348211abe3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWdlJTIwc3R1ZGVudHMlMjBkYXRpbmd8ZW58MXx8fHwxNzU5ODIzMDM1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    link: "https://www.lovebytes.xyz/",
    logo: "💕",
    tech: ["React", "ZK Proofs", "Sonic Tech"]
  },
  {
    id: 3,
    title: "SnapEvent",
    outcome: "Real-time booking",
    delivery: "5 week delivery",
    image: "https://images.unsplash.com/photo-1750233894598-6b7db500a3e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldmVudCUyMHBob3RvZ3JhcGh5JTIwY2FtZXJhfGVufDF8fHx8MTc1OTgyMzAzNnww&ixlib=rb-4.1.0&q=80&w=1080",
    link: "https://snapevent.in/",
    logo: "📸",
    tech: ["Next.js", "Real-time", "Booking"]
  },
  {
    id: 4,
    title: "PayFlow",
    outcome: "Real-time rates",
    delivery: "8 week delivery",
    image: "https://images.unsplash.com/photo-1526841803814-753ac32aa9e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb25leSUyMHRyYW5zZmVyJTIwcGF5bWVudHxlbnwxfHx8fDE3NTk4MjMwMzZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    link: "https://www.payflow.cash/",
    logo: "💸",
    tech: ["Fintech", "Payment Gateway", "Security"]
  }
];

export function BentoGrid() {
  return (
    <section id="work" className="py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-[#0A0A0A] relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 mb-6 backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-2 h-2 rounded-full bg-gradient-to-r from-violet-500 to-purple-500"
              />
              <span className="text-sm text-violet-400">Portfolio</span>
            </motion.div>
            <h2 className="text-white mb-6">Our Work</h2>
            <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Explore our portfolio of exceptional digital products crafted for ambitious founders.
            </p>
          </motion.div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <motion.a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: [0.33, 1, 0.68, 1]
              }}
              className="group relative block"
            >
              {/* Card Container */}
              <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl h-[380px] sm:h-[420px] bg-gradient-to-br from-zinc-900/90 to-zinc-800/90 backdrop-blur-sm border border-zinc-800/50 hover:border-violet-500/30 transition-all duration-500">
                {/* Background Image */}
                <div className="absolute inset-0">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-20 group-hover:opacity-30 group-hover:scale-105 transition-all duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/90" />
                </div>

                {/* Shimmer effect on hover */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none"
                  initial={false}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full"
                    animate={{
                      x: ["-100%", "200%"],
                    }}
                    transition={{
                      duration: 1.5,
                      ease: "easeInOut",
                      repeat: Infinity,
                      repeatDelay: 3,
                    }}
                  />
                </motion.div>

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col p-6 sm:p-8">
                  {/* Top Section - Logo & External Link */}
                  <div className="flex items-start justify-between mb-auto">
                    <motion.div 
                      className="text-4xl sm:text-5xl"
                      whileHover={{ 
                        scale: 1.15,
                        rotate: [0, -8, 8, -8, 0],
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      {project.logo}
                    </motion.div>

                    <motion.div 
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center group-hover:bg-violet-500/20 group-hover:border-violet-500/40 transition-all duration-300"
                      whileHover={{ scale: 1.1, rotate: 45 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </motion.div>
                  </div>

                  {/* Bottom Section - Project Info */}
                  <div className="space-y-4 sm:space-y-5">
                    {/* Title */}
                    <motion.h3 
                      className="text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-violet-400 group-hover:to-teal-400 group-hover:bg-clip-text transition-all duration-300"
                    >
                      {project.title}
                    </motion.h3>
                    
                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <motion.span
                          key={i}
                          className="text-xs px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-gray-400 backdrop-blur-sm"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.1 * i }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                    
                    {/* Outcome & Delivery */}
                    <div className="flex items-center gap-3 pt-2">
                      <span className="text-sm px-3 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 backdrop-blur-sm">
                        {project.outcome}
                      </span>
                      <span className="text-sm text-gray-500">
                        {project.delivery}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Corner glow effect */}
                <div className="absolute top-0 left-0 w-40 h-40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-violet-500/15 to-transparent blur-2xl" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16 sm:mt-20"
        >
          <p className="text-gray-400 mb-5">
            Interested in seeing more of our work?
          </p>
          <motion.a
            href="mailto:hello@bloomora.dev"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-violet-600/10 to-teal-600/10 border border-violet-500/20 text-violet-400 hover:from-violet-600/20 hover:to-teal-600/20 hover:border-violet-500/40 transition-all duration-300 backdrop-blur-sm"
          >
            Request Full Portfolio
            <ExternalLink className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
