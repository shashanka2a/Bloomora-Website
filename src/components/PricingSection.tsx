import { motion } from "motion/react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Check, Sparkles, Zap, Rocket } from "lucide-react";
import { Card3D } from "./3DCard";
import { MagneticButton } from "./MagneticButton";

const plans = [
  {
    id: 1,
    tier: "Landing Page",
    description: "3–5 sections, responsive",
    priceRange: "₹15,000 → ₹30,000",
    badge: null,
    badgeColor: "",
    icon: Sparkles,
    gradient: "from-blue-500/10 to-cyan-500/10",
    borderGradient: "from-blue-500/50 to-cyan-500/50",
    textGradient: "from-blue-300 to-cyan-300",
    features: [
      "Custom responsive design",
      "3-5 content sections",
      "Contact form integration",
      "SEO optimization",
      "2 rounds of revisions",
      "1 week delivery"
    ]
  },
  {
    id: 2,
    tier: "Basic App",
    description: "Functional prototype",
    priceRange: "₹85,000 → ₹1,20,000",
    badge: "Popular",
    badgeColor: "bg-gradient-to-r from-violet-600 to-purple-600",
    icon: Zap,
    gradient: "from-violet-500/10 to-purple-500/10",
    borderGradient: "from-violet-500/50 to-purple-500/50",
    textGradient: "from-violet-300 to-purple-300",
    features: [
      "Full mobile app design",
      "5-8 screens/features",
      "User authentication",
      "Database integration",
      "iOS & Android deployment",
      "4-6 weeks delivery"
    ],
    featured: true
  },
  {
    id: 3,
    tier: "Scalable App",
    description: "Full-stack w/ dashboard",
    priceRange: "₹2,00,000 → ₹4,00,000",
    badge: "For Scaleups",
    badgeColor: "bg-gradient-to-r from-teal-600 to-cyan-600",
    icon: Rocket,
    gradient: "from-teal-500/10 to-cyan-500/10",
    borderGradient: "from-teal-500/50 to-cyan-500/50",
    textGradient: "from-teal-300 to-cyan-300",
    features: [
      "Complete web/mobile platform",
      "Admin dashboard",
      "Real-time features",
      "Payment integration",
      "Analytics & monitoring",
      "8-12 weeks delivery"
    ]
  }
];

export function PricingSection() {
  return (
    <section id="pricing" className="py-16 sm:py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0A0A0A] to-[#0E0E0E] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-violet-500/10 to-transparent blur-3xl" />
      
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 mb-4">
              <span className="text-sm text-violet-400">Pricing</span>
            </div>
            <h2 className="text-white mb-4 sm:mb-6">Simple, Transparent Pricing</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
              Choose the package that fits your needs. All prices in INR, tailored for Indian startups.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            
            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <Card3D className="h-full">
                  <div className={`relative h-full rounded-2xl sm:rounded-3xl p-6 sm:p-8 border-2 transition-all duration-500 ${
                    plan.featured
                      ? `bg-gradient-to-br ${plan.gradient} border-violet-500/40 shadow-2xl shadow-violet-500/20 hover:shadow-violet-500/30 scale-100 lg:scale-105`
                      : `bg-zinc-900/30 border-zinc-800/50 hover:border-zinc-700/50 hover:bg-zinc-900/50`
                  } group`}>
                  
                  {/* Badge */}
                  {plan.badge && (
                    <div className={`absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2 px-4 sm:px-6 py-1.5 sm:py-2 rounded-full ${plan.badgeColor} text-white text-xs sm:text-sm shadow-lg`}>
                      {plan.badge}
                    </div>
                  )}

                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br ${plan.gradient} border border-white/10 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>

                  {/* Header */}
                  <div className="mb-6 sm:mb-8">
                    <h3 className="text-white mb-2">{plan.tier}</h3>
                    <p className="text-gray-400 text-sm mb-4">{plan.description}</p>
                    <div className="flex items-baseline gap-2">
                      <div
                        className={`${plan.id === 3 ? "text-xl sm:text-2xl md:text-3xl" : "text-2xl sm:text-3xl"} font-semibold bg-gradient-to-r ${plan.textGradient} bg-clip-text text-transparent whitespace-nowrap leading-none tracking-tight saturate-150 brightness-125 drop-shadow-[0_0_24px_rgba(167,139,250,0.45)]`}
                      >
                        {plan.priceRange}
                      </div>
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 sm:space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <motion.li 
                        key={featureIndex} 
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: featureIndex * 0.05 }}
                      >
                        <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-br from-violet-500/20 to-teal-500/20 flex items-center justify-center mt-0.5">
                          <Check className="w-3 h-3 sm:w-4 sm:h-4 text-violet-400" />
                        </div>
                        <span className="text-gray-300 text-sm sm:text-base leading-relaxed">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                    {/* CTA Button */}
                    <Button
                      className={`w-full group/button transition-all duration-300 ${
                        plan.featured
                          ? `bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white shadow-lg shadow-violet-500/25 hover:shadow-xl hover:shadow-violet-500/40`
                          : `bg-zinc-800 hover:bg-zinc-700 text-white`
                      }`}
                    >
                      <span className="relative z-10">Get Started</span>
                    </Button>

                    {/* Hover gradient border effect */}
                    {!plan.featured && (
                      <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-violet-500/0 via-purple-500/0 to-teal-500/0 group-hover:from-violet-500/10 group-hover:via-purple-500/10 group-hover:to-teal-500/10 transition-all duration-500 pointer-events-none" />
                    )}
                  </div>
                </Card3D>
              </motion.div>
            );
          })}
        </div>

        {/* Footer note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 sm:mt-16 text-center"
        >
          <div className="inline-block px-6 py-3 rounded-xl bg-zinc-900/50 border border-zinc-800">
            <p className="text-gray-400 text-sm sm:text-base">
              All projects include <span className="text-violet-400">source code</span>, <span className="text-violet-400">deployment support</span>, and <span className="text-violet-400">documentation</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
