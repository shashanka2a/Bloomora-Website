import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, ArrowLeft, Sparkles, X } from "lucide-react";
import { Button } from "./ui/button";
import { PersonalDetails } from "./intake/PersonalDetails";
import { ProjectType } from "./intake/ProjectType";
import { BudgetTimeline } from "./intake/BudgetTimeline";
import { ProjectDescription } from "./intake/ProjectDescription";
import { AIChatInterface } from "./intake/AIChatInterface";
import { Progress } from "./ui/progress";

export interface FormData {
  // Personal Details
  name: string;
  email: string;
  company: string;
  // Project Type
  projectType: string;
  // Budget & Timeline
  budget: string;
  timeline: string;
  // Project Description
  description: string;
}

interface ProjectIntakeProps {
  onClose?: () => void;
}

export function ProjectIntake({ onClose }: ProjectIntakeProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [showChat, setShowChat] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    projectType: "",
    budget: "",
    timeline: "",
    description: "",
  });

  const steps = [
    { title: "Personal Details", component: PersonalDetails },
    { title: "Project Type", component: ProjectType },
    { title: "Budget & Timeline", component: BudgetTimeline },
    { title: "Project Description", component: ProjectDescription },
  ];

  const CurrentStepComponent = steps[currentStep].component;
  const progress = ((currentStep + 1) / steps.length) * 100;

  const canProceed = () => {
    switch (currentStep) {
      case 0:
        return formData.name && formData.email && formData.company;
      case 1:
        return formData.projectType;
      case 2:
        return formData.budget && formData.timeline;
      case 3:
        return formData.description;
      default:
        return false;
    }
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Completed form, move to AI chat
      setShowChat(true);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  if (showChat) {
    return <AIChatInterface formData={formData} onBack={() => setShowChat(false)} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0E0E0E] via-[#1B1B1B] to-[#0E0E0E] flex items-center justify-center p-4 sm:p-6">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/20 rounded-full blur-[120px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-teal-500/15 rounded-full blur-[100px]"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-3xl relative"
      >
        {/* Close button */}
        {onClose && (
          <motion.button
            onClick={onClose}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="absolute -top-2 -right-2 sm:top-0 sm:right-0 z-50 w-10 h-10 rounded-full bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 flex items-center justify-center text-white transition-colors duration-200"
          >
            <X className="w-5 h-5" />
          </motion.button>
        )}

        {/* Header */}
        <div className="text-center mb-6 sm:mb-8">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="inline-flex items-center gap-2 mb-4"
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-violet-500 to-teal-500 flex items-center justify-center shadow-lg shadow-violet-500/25">
              <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
          </motion.div>
          <h1 className="text-white mb-2 text-2xl sm:text-3xl">Start Your Project</h1>
          <p className="text-gray-400 text-sm sm:text-base">
            Tell us about your vision, and we'll help bring it to life
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-6 sm:mb-8">
          <div className="flex justify-between mb-3">
            <span className="text-sm text-gray-400">
              Step {currentStep + 1} of {steps.length}
            </span>
            <span className="text-sm text-violet-400">{Math.round(progress)}%</span>
          </div>
          <Progress value={progress} className="h-2 mb-4" />
          
          {/* Step indicators - responsive */}
          <div className="hidden sm:flex justify-between">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`flex-1 text-center ${
                  index < steps.length - 1 ? "border-r border-gray-800" : ""
                }`}
              >
                <div
                  className={`text-xs transition-colors ${
                    index <= currentStep ? "text-violet-400" : "text-gray-600"
                  }`}
                >
                  {step.title}
                </div>
              </div>
            ))}
          </div>

          {/* Mobile step indicator */}
          <div className="sm:hidden text-center">
            <div className="text-sm text-violet-400">
              {steps[currentStep].title}
            </div>
          </div>
        </div>

        {/* Form Card */}
        <motion.div
          className="bg-[#1B1B1B]/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 border border-gray-800 shadow-2xl"
          layout
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-white mb-6 sm:mb-8 text-xl sm:text-2xl">
                {steps[currentStep].title}
              </h2>
              <CurrentStepComponent formData={formData} setFormData={setFormData} />
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex gap-3 sm:gap-4 mt-8">
            {currentStep > 0 && (
              <Button
                onClick={handleBack}
                variant="outline"
                className="flex-1 bg-transparent border-gray-700 text-gray-300 hover:bg-gray-800 hover:border-gray-600 transition-all duration-200"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                <span className="hidden sm:inline">Back</span>
                <span className="sm:hidden">Back</span>
              </Button>
            )}
            <Button
              onClick={handleNext}
              disabled={!canProceed()}
              className={`flex-1 bg-gradient-to-r from-violet-600 to-teal-600 hover:from-violet-700 hover:to-teal-700 text-white disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-violet-500/25 hover:shadow-xl hover:shadow-violet-500/40 transition-all duration-300 ${
                currentStep === 0 ? "w-full" : ""
              }`}
            >
              <span className="hidden sm:inline">
                {currentStep === steps.length - 1 ? "Continue to AI Assistant" : "Next"}
              </span>
              <span className="sm:hidden">
                {currentStep === steps.length - 1 ? "AI Assistant" : "Next"}
              </span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </motion.div>

        {/* Helper Text */}
        <p className="text-center text-gray-500 text-xs sm:text-sm mt-6">
          🔒 Your information is secure and will only be used to understand your project needs
        </p>
      </motion.div>
    </div>
  );
}
