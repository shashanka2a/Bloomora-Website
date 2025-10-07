import { FormData } from "../ProjectIntake";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { User, Mail, Building2 } from "lucide-react";

interface Props {
  formData: FormData;
  setFormData: (data: FormData) => void;
}

export function PersonalDetails({ formData, setFormData }: Props) {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="name" className="text-gray-300">
          Full Name
        </Label>
        <div className="relative">
          <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
          <Input
            id="name"
            type="text"
            placeholder="Rahul Sharma"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="pl-11 bg-[#0E0E0E] border-gray-700 text-white placeholder:text-gray-600 focus:border-violet-500"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email" className="text-gray-300">
          Email Address
        </Label>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
          <Input
            id="email"
            type="email"
            placeholder="rahul@company.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="pl-11 bg-[#0E0E0E] border-gray-700 text-white placeholder:text-gray-600 focus:border-violet-500"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="company" className="text-gray-300">
          Company Name
        </Label>
        <div className="relative">
          <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
          <Input
            id="company"
            type="text"
            placeholder="Your Startup Pvt. Ltd."
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            className="pl-11 bg-[#0E0E0E] border-gray-700 text-white placeholder:text-gray-600 focus:border-violet-500"
          />
        </div>
      </div>
    </div>
  );
}
