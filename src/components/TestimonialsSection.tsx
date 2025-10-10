import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    quote: "Bloomora transformed our vision into a stunning product. The attention to detail and speed of delivery was remarkable. Our conversion rates jumped by 40% in the first month.",
    name: "Priya Sharma",
    role: "Founder, TechVenture",
    company: "TechVenture",
    image: "https://images.unsplash.com/photo-1671450960874-0903baf942c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBlbnRyZXByZW5ldXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NTk4MDA5MDh8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 2,
    quote: "Working with Bloomora was seamless. They understood our startup's needs and delivered a full-stack solution that scaled perfectly with our growth.",
    name: "Arjun Mehta",
    role: "CEO, GrowthLabs",
    company: "GrowthLabs",
    image: "https://images.unsplash.com/photo-1713973724182-0fe31a59b445?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMGluZGlhfGVufDF8fHx8MTc1OTgwMDkwOHww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 3,
    quote: "The mobile app they built exceeded all expectations. Beautiful design, smooth performance, and delivered ahead of schedule. Highly recommended!",
    name: "Sanjay Kumar",
    role: "Founder, FinFlow",
    company: "FinFlow",
    image: "https://images.unsplash.com/photo-1687570461530-fd0051bb2aaf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwZm91bmRlciUyMHBvcnRyYWl0fGVufDF8fHx8MTc1OTgwMDkwOHww&ixlib=rb-4.1.0&q=80&w=1080"
  }
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 6000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const goToPrevious = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goToIndex = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  return (
    <section id="testimonials" className="py-16 sm:py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-[#0E0E0E] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl -translate-y-1/2" />
      
      <div className="max-w-5xl mx-auto relative">

        <div className="relative">
          {/* Carousel */}
          <div className="relative min-h-[400px] sm:min-h-[350px] flex items-center">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                initial={{ 
                  opacity: 0, 
                  x: direction > 0 ? 100 : -100,
                  filter: "blur(4px)"
                }}
                animate={{ 
                  opacity: 1, 
                  x: 0,
                  filter: "blur(0px)"
                }}
                exit={{ 
                  opacity: 0, 
                  x: direction > 0 ? -100 : 100,
                  filter: "blur(4px)"
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="w-full"
              >
                <div className="relative bg-gradient-to-br from-zinc-900/80 to-zinc-800/80 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 border border-zinc-700/50 backdrop-blur-sm overflow-hidden">
                  {/* Quote icon */}
                  <div className="absolute top-6 right-6 sm:top-8 sm:right-8 opacity-10">
                    <Quote className="w-16 h-16 sm:w-24 sm:h-24 text-violet-400" />
                  </div>

                  {/* Content */}
                  <div className="relative">
                    {/* Quote */}
                    <motion.p 
                      className="text-white italic text-lg sm:text-xl lg:text-2xl leading-relaxed mb-8 sm:mb-10 font-serif"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      "{testimonials[currentIndex].quote}"
                    </motion.p>

                    {/* Author */}
                    <motion.div 
                      className="flex items-center gap-4 sm:gap-6"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <div className="relative">
                        <ImageWithFallback
                          src={testimonials[currentIndex].image}
                          alt={testimonials[currentIndex].name}
                          className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover ring-2 ring-violet-500/30"
                        />
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-500/20 to-teal-500/20" />
                      </div>
                      <div>
                        <p className="text-white mb-1">{testimonials[currentIndex].name}</p>
                        <p className="text-violet-400 text-sm sm:text-base">{testimonials[currentIndex].role}</p>
                        <p className="text-gray-500 text-sm">{testimonials[currentIndex].company}</p>
                      </div>
                    </motion.div>
                  </div>

                  {/* Gradient accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-500 via-purple-500 to-teal-500" />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation - Desktop */}
          <div className="hidden sm:flex items-center justify-between absolute top-1/2 -translate-y-1/2 left-0 right-0 pointer-events-none px-4">
            <motion.button
              onClick={goToPrevious}
              whileHover={{ scale: 1.1, x: -4 }}
              whileTap={{ scale: 0.95 }}
              className="pointer-events-auto w-12 h-12 rounded-full bg-zinc-800/80 hover:bg-zinc-700 border border-zinc-700 flex items-center justify-center text-white transition-all duration-200 backdrop-blur-sm shadow-xl hover:shadow-violet-500/20"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>

            <motion.button
              onClick={goToNext}
              whileHover={{ scale: 1.1, x: 4 }}
              whileTap={{ scale: 0.95 }}
              className="pointer-events-auto w-12 h-12 rounded-full bg-zinc-800/80 hover:bg-zinc-700 border border-zinc-700 flex items-center justify-center text-white transition-all duration-200 backdrop-blur-sm shadow-xl hover:shadow-violet-500/20"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>

          {/* Controls - Mobile & Desktop */}
          <div className="flex items-center justify-center gap-4 mt-8 sm:mt-10">
            {/* Mobile Navigation */}
            <div className="flex sm:hidden gap-3">
              <motion.button
                onClick={goToPrevious}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-full bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 flex items-center justify-center text-white transition-colors duration-200"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </motion.button>

              <motion.button
                onClick={goToNext}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-full bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 flex items-center justify-center text-white transition-colors duration-200"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </motion.button>
            </div>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => goToIndex(index)}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className={`rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-gradient-to-r from-violet-500 to-purple-500 w-8 h-2"
                      : "bg-zinc-700 hover:bg-zinc-600 w-2 h-2"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
