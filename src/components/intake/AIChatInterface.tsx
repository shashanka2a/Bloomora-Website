import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FormData } from "../ProjectIntake";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { ScrollArea } from "../ui/scroll-area";
import { Progress } from "../ui/progress";
import {
  ArrowLeft,
  Send,
  Bot,
  User,
  Users,
  Sparkles,
  Palette,
  Code,
  Target,
  CheckCircle2,
  MessageSquare,
} from "lucide-react";

interface Props {
  formData: FormData;
  onBack: () => void;
}

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

interface Topic {
  id: string;
  title: string;
  icon: any;
  completed: boolean;
  questions: string[];
  currentQuestionIndex: number;
}

export function AIChatInterface({ formData, onBack }: Props) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [currentTopicIndex, setCurrentTopicIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const [topics, setTopics] = useState<Topic[]>([
    {
      id: "target-audience",
      title: "Target Audience",
      icon: Users,
      completed: false,
      currentQuestionIndex: 0,
      questions: [
        `Hi ${formData.name.split(" ")[0]}! 👋 I'm your AI project assistant. Let's dive deeper into your ${formData.projectType} project.\n\nFirst, let's talk about your target audience. Who are you building this for? (e.g., age group, profession, location)`,
        "What specific problem does your product solve for them?",
        "What's their current alternative or how do they solve this problem today?",
      ],
    },
    {
      id: "core-features",
      title: "Core Features",
      icon: Sparkles,
      completed: false,
      currentQuestionIndex: 0,
      questions: [
        "Great insights! Now let's talk about features. What are the 3-5 must-have features for your MVP?",
        "Are there any advanced features you'd like to add in future phases?",
        "Do you need user authentication and different user roles?",
      ],
    },
    {
      id: "design-ux",
      title: "Design & UX",
      icon: Palette,
      completed: false,
      currentQuestionIndex: 0,
      questions: [
        "Let's discuss design. Do you have any brand colors or design preferences?",
        "Are there any websites or apps whose design you admire and would like to reference?",
        "What kind of feel are you going for? (e.g., professional, playful, minimal, bold)",
      ],
    },
    {
      id: "platform-tech",
      title: "Platform & Tech",
      icon: Code,
      completed: false,
      currentQuestionIndex: 0,
      questions: [
        "Which platforms do you need to support? (Web, iOS, Android, or all?)",
        "Do you need any third-party integrations? (e.g., payment gateways, analytics, email services)",
        "Will you need a content management system (CMS) or admin dashboard?",
      ],
    },
    {
      id: "success-goals",
      title: "Success Goals",
      icon: Target,
      completed: false,
      currentQuestionIndex: 0,
      questions: [
        "Almost done! What does success look like for this project in the first 3 months?",
        "Do you have any specific metrics or KPIs you'll be tracking?",
        "Is there a specific launch date or event you're targeting?",
      ],
    },
  ]);

  useEffect(() => {
    // Send first question
    sendAssistantMessage(topics[0].questions[0]);
  }, []);

  useEffect(() => {
    // Auto-scroll to bottom
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const sendAssistantMessage = (content: string) => {
    setIsTyping(true);
    setTimeout(() => {
      const message: Message = {
        id: Date.now().toString(),
        role: "assistant",
        content,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, message]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000); // Random delay between 1-2 seconds
  };

  const handleSendMessage = () => {
    if (!inputValue.trim() || isTyping) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: inputValue,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");

    // Update current topic
    const currentTopic = topics[currentTopicIndex];
    const nextQuestionIndex = currentTopic.currentQuestionIndex + 1;

    if (nextQuestionIndex < currentTopic.questions.length) {
      // More questions in current topic
      setTopics((prev) =>
        prev.map((t, i) =>
          i === currentTopicIndex ? { ...t, currentQuestionIndex: nextQuestionIndex } : t
        )
      );
      sendAssistantMessage(currentTopic.questions[nextQuestionIndex]);
    } else {
      // Complete current topic
      setTopics((prev) =>
        prev.map((t, i) => (i === currentTopicIndex ? { ...t, completed: true } : t))
      );

      // Move to next topic
      if (currentTopicIndex < topics.length - 1) {
        const nextTopicIndex = currentTopicIndex + 1;
        setCurrentTopicIndex(nextTopicIndex);
        sendAssistantMessage(topics[nextTopicIndex].questions[0]);
      } else {
        // All topics completed
        sendAssistantMessage(
          `Perfect! 🎉 We've covered everything. I'll compile all this information and our team will reach out to you at ${formData.email} within 24 hours with a detailed proposal and project timeline.\n\nThank you for choosing Bloomora!`
        );
      }
    }
  };

  const completedTopics = topics.filter((t) => t.completed).length;
  const progress = (completedTopics / topics.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0E0E0E] via-[#1B1B1B] to-[#0E0E0E] flex flex-col">
      {/* Header */}
      <div className="border-b border-gray-800 bg-[#1B1B1B]/80 backdrop-blur-lg sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-4">
            <Button
              onClick={onBack}
              variant="ghost"
              className="text-gray-400 hover:text-white"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Form
            </Button>
            <div className="flex items-center gap-2">
              <Bot className="w-5 h-5 text-violet-400" />
              <span className="text-white">AI Project Assistant</span>
            </div>
          </div>

          {/* Progress */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">
                {completedTopics} of {topics.length} topics completed
              </span>
              <span className="text-gray-400">{Math.round(progress)}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          {/* Topics */}
          <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
            {topics.map((topic, index) => {
              const Icon = topic.icon;
              const isCurrent = index === currentTopicIndex;
              const isCompleted = topic.completed;

              return (
                <div
                  key={topic.id}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg whitespace-nowrap text-sm ${
                    isCompleted
                      ? "bg-green-500/20 text-green-400 border border-green-500/30"
                      : isCurrent
                      ? "bg-violet-500/20 text-violet-400 border border-violet-500/30"
                      : "bg-gray-800/50 text-gray-500 border border-gray-700"
                  }`}
                >
                  {isCompleted ? (
                    <CheckCircle2 className="w-4 h-4" />
                  ) : (
                    <Icon className="w-4 h-4" />
                  )}
                  <span>{topic.title}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-hidden">
        <ScrollArea className="h-full">
          <div ref={scrollRef} className="max-w-3xl mx-auto px-4 py-8 space-y-6">
            {messages.map((message) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex gap-4 ${
                  message.role === "user" ? "flex-row-reverse" : "flex-row"
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                    message.role === "assistant"
                      ? "bg-gradient-to-br from-violet-500 to-teal-500"
                      : "bg-gray-700"
                  }`}
                >
                  {message.role === "assistant" ? (
                    <Bot className="w-5 h-5 text-white" />
                  ) : (
                    <User className="w-5 h-5 text-white" />
                  )}
                </div>
                <div
                  className={`flex-1 max-w-xl ${
                    message.role === "user" ? "text-right" : "text-left"
                  }`}
                >
                  <div
                    className={`inline-block px-6 py-4 rounded-2xl whitespace-pre-wrap ${
                      message.role === "assistant"
                        ? "bg-[#1B1B1B] border border-gray-800 text-gray-200"
                        : "bg-gradient-to-r from-violet-500 to-teal-500 text-white"
                    }`}
                  >
                    {message.content}
                  </div>
                  <div className="text-xs text-gray-500 mt-2">
                    {message.timestamp.toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Typing Indicator */}
            <AnimatePresence>
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex gap-4"
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-500 to-teal-500 flex items-center justify-center flex-shrink-0">
                    <Bot className="w-5 h-5 text-white" />
                  </div>
                  <div className="bg-[#1B1B1B] border border-gray-800 px-6 py-4 rounded-2xl">
                    <div className="flex gap-1">
                      <motion.div
                        className="w-2 h-2 bg-violet-400 rounded-full"
                        animate={{ y: [0, -8, 0] }}
                        transition={{ repeat: Infinity, duration: 0.6, delay: 0 }}
                      />
                      <motion.div
                        className="w-2 h-2 bg-violet-400 rounded-full"
                        animate={{ y: [0, -8, 0] }}
                        transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }}
                      />
                      <motion.div
                        className="w-2 h-2 bg-violet-400 rounded-full"
                        animate={{ y: [0, -8, 0] }}
                        transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }}
                      />
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </ScrollArea>
      </div>

      {/* Input Area */}
      <div className="border-t border-gray-800 bg-[#1B1B1B]/80 backdrop-blur-lg">
        <div className="max-w-3xl mx-auto px-4 py-4">
          <div className="flex gap-3">
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  handleSendMessage();
                }
              }}
              placeholder="Type your answer..."
              disabled={isTyping}
              className="flex-1 bg-[#0E0E0E] border-gray-700 text-white placeholder:text-gray-600 focus:border-violet-500"
            />
            <Button
              onClick={handleSendMessage}
              disabled={!inputValue.trim() || isTyping}
              className="bg-gradient-to-r from-violet-500 to-teal-500 text-white hover:from-violet-600 hover:to-teal-600 px-6"
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>
          <p className="text-xs text-gray-500 mt-2 text-center">
            Press Enter to send • Shift + Enter for new line
          </p>
        </div>
      </div>
    </div>
  );
}
