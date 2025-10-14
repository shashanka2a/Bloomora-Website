"use client";
import { Logo } from "@/components/Logo";
import { useRef } from "react";

export default function LogoPage() {
  const lotusRef = useRef<SVGSVGElement | null>(null);
  const lockupRef = useRef<SVGSVGElement | null>(null);

  function downloadPng(ref: React.RefObject<SVGSVGElement | null>, filename: string, scale = 4) {
    const svg = ref.current;
    if (!svg) return;
    const svgData = new XMLSerializer().serializeToString(svg);
    const svgBlob = new Blob([svgData], { type: "image/svg+xml;charset=utf-8" });
    const url = URL.createObjectURL(svgBlob);
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = img.width * scale;
      canvas.height = img.height * scale;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      ctx.scale(scale, scale);
      ctx.drawImage(img, 0, 0);
      URL.revokeObjectURL(url);
      canvas.toBlob((blob) => {
        if (!blob) return;
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = filename;
        link.click();
        URL.revokeObjectURL(link.href);
      }, "image/png");
    };
    img.src = url;
  }
  return (
    <main className="min-h-screen bg-[#0E0E0E] flex items-center justify-center px-6 py-16">
      <div className="max-w-5xl w-full space-y-12">
        <div className="flex flex-col items-center gap-4">
          <Logo variant="lockup" size={64} showGlow animated accessibleTitle="Bloomora logo lockup" svgRef={lockupRef} />
          <div className="flex items-center gap-3">
            <button onClick={() => downloadPng(lockupRef, "bloomora-lockup.png")} className="px-3 py-1.5 rounded-md bg-white/10 text-white text-sm border border-white/20 hover:bg-white/15">Download PNG</button>
          </div>
          <p className="text-gray-400 text-sm">Primary lockup for dark surfaces</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
            <div className="flex items-center justify-between mb-4">
              <span className="text-white">Dark Surface</span>
              <span className="text-gray-400 text-xs">Brand Gradient</span>
            </div>
            <div className="flex items-center gap-6">
              <Logo variant="lotus" size={56} showGlow on="dark" svgRef={lotusRef} />
              <button onClick={() => downloadPng(lotusRef, "bloomora-lotus-dark.png")} className="px-3 py-1.5 rounded-md bg-white/10 text-white text-sm border border-white/20 hover:bg-white/15">Download PNG</button>
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


