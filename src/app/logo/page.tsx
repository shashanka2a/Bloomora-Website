import type { Metadata } from "next";
import { Logo } from "@/components/Logo";

export const metadata: Metadata = {
  title: "Bloomora Logo — Brand Assets",
  description: "Bloomora lotus and wordmark lockups for brand usage.",
};

export default function LogoPage() {
  return (
    <main className="min-h-screen bg-[#0E0E0E] flex items-center justify-center px-6 py-16">
      <div className="max-w-5xl w-full space-y-12">
        <div className="flex flex-col items-center gap-6">
          <Logo variant="lockup" size={64} showGlow animated accessibleTitle="Bloomora logo lockup" />
          <p className="text-gray-400 text-sm">Primary lockup for dark surfaces</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
            <div className="flex items-center justify-between mb-4">
              <span className="text-white">Dark Surface</span>
              <span className="text-gray-400 text-xs">Brand Gradient</span>
            </div>
            <div className="flex items-center gap-6">
              <Logo variant="lotus" size={56} showGlow on="dark" />
              <Logo variant="lockup" size={40} on="dark" />
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 p-6 bg-white">
            <div className="flex items-center justify-between mb-4">
              <span className="text-black">Light Surface</span>
              <span className="text-zinc-600 text-xs">Mono (Violet)</span>
            </div>
            <div className="flex items-center gap-6">
              <Logo variant="lotus" size={56} colorScheme="violet" on="light" />
              <Logo variant="lockup" size={40} colorScheme="mono" on="light" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-white/10 p-6 bg-[#0A0A0A]">
            <p className="text-white mb-4">Sizes</p>
            <div className="flex items-center gap-6 flex-wrap">
              <Logo variant="lotus" size={24} />
              <Logo variant="lotus" size={32} />
              <Logo variant="lotus" size={40} />
              <Logo variant="lotus" size={56} />
              <Logo variant="lotus" size={72} />
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 p-6 bg-[#0A0A0A]">
            <p className="text-white mb-4">Badges</p>
            <div className="flex items-center gap-6">
              <Logo variant="lotus" size={48} badge />
              <Logo variant="lotus" size={48} badge border />
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 p-6 bg-[#0A0A0A]">
            <p className="text-white mb-4">Color Schemes</p>
            <div className="flex items-center gap-6 flex-wrap">
              <Logo variant="lotus" size={40} colorScheme="brand" />
              <Logo variant="lotus" size={40} colorScheme="mono" />
              <Logo variant="lotus" size={40} colorScheme="monoInverted" />
              <Logo variant="lotus" size={40} colorScheme="violet" />
              <Logo variant="lotus" size={40} colorScheme="teal" />
              <Logo variant="lotus" size={40} colorScheme="outline" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}


