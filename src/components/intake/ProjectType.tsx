import { FormData } from "../ProjectIntake";
import { motion } from "motion/react";
import { Globe, Smartphone, Box, ShoppingCart, Layers, Zap } from "lucide-react";

interface Props {
  formData: FormData;
  setFormData: (data: FormData) => void;
}

const projectTypes = [
  {
    id: "landing-page",
    label: "Landing Page",
    description: "Marketing or product landing page",
    icon: Globe,
  },
  {
    id: "website",
    label: "Custom Website",
    description: "Multi-page website with custom design",
    icon: Layers,
  },
  {
    id: "saas",
    label: "SaaS Platform",
    description: "Software-as-a-Service application",
    icon: Zap,
  },
  {
    id: "mobile-app",
    label: "Mobile App",
    description: "iOS/Android native or hybrid app",
    icon: Smartphone,
  },
  {
    id: "ecommerce",
    label: "E-commerce",
    description: "Online store with payment integration",
    icon: ShoppingCart,
  },
  {
    id: "custom",
    label: "Custom Solution",
    description: "Full-stack custom application",
    icon: Box,
  },
];

export function ProjectType({ formData, setFormData }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {projectTypes.map((type) => {
        const Icon = type.icon;
        const isSelected = formData.projectType === type.id;

        return (
          <motion.button
            key={type.id}
            onClick={() => setFormData({ ...formData, projectType: type.id })}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`relative p-6 rounded-xl border-2 transition-all text-left ${
              isSelected
                ? "border-violet-500 bg-violet-500/10"
                : "border-gray-700 bg-[#0E0E0E] hover:border-gray-600"
            }`}
          >
            <div className="flex items-start gap-4">
              <div
                className={`p-3 rounded-lg ${
                  isSelected
                    ? "bg-gradient-to-br from-violet-500 to-teal-500"
                    : "bg-gray-800"
                }`}
              >
                <Icon className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-white mb-1">{type.label}</h3>
                <p className="text-sm text-gray-400">{type.description}</p>
              </div>
            </div>
            {isSelected && (
              <motion.div
                layoutId="selected-indicator"
                className="absolute top-4 right-4 w-5 h-5 rounded-full bg-gradient-to-br from-violet-500 to-teal-500 flex items-center justify-center"
              >
                <div className="w-2 h-2 rounded-full bg-white" />
              </motion.div>
            )}
          </motion.button>
        );
      })}
    </div>
  );
}
