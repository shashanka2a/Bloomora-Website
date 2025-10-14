import type { Metadata } from "next";
import { Logo } from "@/components/Logo";

export const metadata: Metadata = {
  title: "Bloomora Logo — Brand Assets",
  description: "Bloomora lotus and wordmark lockups for brand usage.",
};

export default function LogoPage() {
  return (
    <main className="min-h-screen bg-[#0E0E0E] flex items-center justify-center px-6 py-16">
      <div className="max-w-4xl w-full">
        <div className="flex flex-col items-center gap-10">
          <Logo variant="lockup" size={56} showGlow animated />

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full">
            <div className="flex flex-col items-center gap-4 rounded-2xl border border-white/10 p-6 bg-white/5">
              <Logo variant="lotus" size={64} showGlow />
              <span className="text-gray-300 text-sm">Lotus</span>
            </div>

            <div className="flex flex-col items-center gap-4 rounded-2xl border border-white/10 p-6 bg-white/5">
              <Logo variant="wordmark" />
              <span className="text-gray-300 text-sm">Wordmark</span>
            </div>

            <div className="flex flex-col items-center gap-4 rounded-2xl border border-white/10 p-6 bg-white/5">
              <Logo variant="lockup" size={40} />
              <span className="text-gray-300 text-sm">Lockup</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}


