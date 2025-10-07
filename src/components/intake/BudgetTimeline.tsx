import { FormData } from "../ProjectIntake";
import { Label } from "../ui/label";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { IndianRupee, Calendar } from "lucide-react";

interface Props {
  formData: FormData;
  setFormData: (data: FormData) => void;
}

const budgetRanges = [
  { id: "15k-50k", label: "₹15,000 - ₹50,000", description: "Simple landing pages" },
  { id: "50k-150k", label: "₹50,000 - ₹1,50,000", description: "Custom websites & basic apps" },
  { id: "150k-350k", label: "₹1,50,000 - ₹3,50,000", description: "Advanced applications" },
  { id: "350k+", label: "₹3,50,000+", description: "Enterprise solutions" },
];

const timelines = [
  { id: "2-4weeks", label: "2-4 weeks", description: "Quick launch" },
  { id: "1-2months", label: "1-2 months", description: "Standard timeline" },
  { id: "2-3months", label: "2-3 months", description: "Complex projects" },
  { id: "3months+", label: "3+ months", description: "Large-scale development" },
];

export function BudgetTimeline({ formData, setFormData }: Props) {
  return (
    <div className="space-y-8">
      {/* Budget */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 mb-4">
          <IndianRupee className="w-5 h-5 text-violet-400" />
          <Label className="text-gray-300">Project Budget</Label>
        </div>
        <RadioGroup
          value={formData.budget}
          onValueChange={(value) => setFormData({ ...formData, budget: value })}
          className="space-y-3"
        >
          {budgetRanges.map((range) => (
            <div
              key={range.id}
              className={`flex items-center space-x-3 p-4 rounded-lg border transition-colors cursor-pointer ${
                formData.budget === range.id
                  ? "border-violet-500 bg-violet-500/10"
                  : "border-gray-700 bg-[#0E0E0E] hover:border-gray-600"
              }`}
              onClick={() => setFormData({ ...formData, budget: range.id })}
            >
              <RadioGroupItem value={range.id} id={range.id} />
              <div className="flex-1">
                <Label htmlFor={range.id} className="text-white cursor-pointer">
                  {range.label}
                </Label>
                <p className="text-sm text-gray-400 mt-1">{range.description}</p>
              </div>
            </div>
          ))}
        </RadioGroup>
      </div>

      {/* Timeline */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 mb-4">
          <Calendar className="w-5 h-5 text-teal-400" />
          <Label className="text-gray-300">Expected Timeline</Label>
        </div>
        <RadioGroup
          value={formData.timeline}
          onValueChange={(value) => setFormData({ ...formData, timeline: value })}
          className="space-y-3"
        >
          {timelines.map((timeline) => (
            <div
              key={timeline.id}
              className={`flex items-center space-x-3 p-4 rounded-lg border transition-colors cursor-pointer ${
                formData.timeline === timeline.id
                  ? "border-teal-500 bg-teal-500/10"
                  : "border-gray-700 bg-[#0E0E0E] hover:border-gray-600"
              }`}
              onClick={() => setFormData({ ...formData, timeline: timeline.id })}
            >
              <RadioGroupItem value={timeline.id} id={timeline.id} />
              <div className="flex-1">
                <Label htmlFor={timeline.id} className="text-white cursor-pointer">
                  {timeline.label}
                </Label>
                <p className="text-sm text-gray-400 mt-1">{timeline.description}</p>
              </div>
            </div>
          ))}
        </RadioGroup>
      </div>
    </div>
  );
}
