import { FormData } from "../ProjectIntake";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { FileText } from "lucide-react";

interface Props {
  formData: FormData;
  setFormData: (data: FormData) => void;
}

export function ProjectDescription({ formData, setFormData }: Props) {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 mb-2">
        <FileText className="w-5 h-5 text-violet-400" />
        <Label htmlFor="description" className="text-gray-300">
          Tell us about your project
        </Label>
      </div>
      <Textarea
        id="description"
        placeholder="Share your vision, goals, and any specific requirements you have in mind. The more details you provide, the better we can understand your needs.

Example: I want to build a SaaS platform for managing freelance projects. It should have user authentication, project tracking, invoicing, and team collaboration features..."
        value={formData.description}
        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
        className="min-h-[300px] bg-[#0E0E0E] border-gray-700 text-white placeholder:text-gray-600 focus:border-violet-500 resize-none"
      />
      <div className="flex items-center justify-between text-sm">
        <p className="text-gray-500">
          Don't worry if you're not sure about all the details yet
        </p>
        <span className="text-gray-600">{formData.description.length} characters</span>
      </div>
    </div>
  );
}
