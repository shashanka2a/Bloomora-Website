"use client";
import { Logo } from "@/components/Logo";
import { useRef } from "react";

export default function LogoPage() {
  const svgRefs = useRef<Record<string, SVGSVGElement | null>>({});

  const setSvgRef = (key: string) => (el: SVGSVGElement | null) => {
    svgRefs.current[key] = el;
  };

  function downloadPngByKey(key: string, filename: string, scale = 4) {
    const svg = svgRefs.current[key];
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
          <Logo variant="lockup" size={64} showGlow animated accessibleTitle="Bloomora logo lockup" svgRef={setSvgRef("lockup-primary")} />
          <div className="flex items-center gap-3">
            <button onClick={() => downloadPngByKey("lockup-primary", "bloomora-lockup.png")} className="px-3 py-1.5 rounded-md bg-white/10 text-white text-sm border border-white/20 hover:bg-white/15">Download PNG</button>
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
              <div className="flex items-center gap-2">
                <Logo variant="lotus" size={56} showGlow on="dark" svgRef={setSvgRef("lotus-dark")} />
                <button onClick={() => downloadPngByKey("lotus-dark", "bloomora-lotus-dark.png")} className="px-3 py-1.5 rounded-md bg-white/10 text-white text-sm border border-white/20 hover:bg-white/15">Download</button>
              </div>
              <div className="flex items-center gap-2">
                <Logo variant="lockup" size={40} on="dark" svgRef={setSvgRef("lockup-dark")} />
                <button onClick={() => downloadPngByKey("lockup-dark", "bloomora-lockup-dark.png")} className="px-3 py-1.5 rounded-md bg-white/10 text-white text-sm border border-white/20 hover:bg-white/15">Download</button>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 p-6 bg-white">
            <div className="flex items-center justify-between mb-4">
              <span className="text-black">Light Surface</span>
              <span className="text-zinc-600 text-xs">Mono (Violet)</span>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Logo variant="lotus" size={56} colorScheme="violet" on="light" svgRef={setSvgRef("lotus-light-violet")} />
                <button onClick={() => downloadPngByKey("lotus-light-violet", "bloomora-lotus-violet-light.png")} className="px-3 py-1.5 rounded-md bg-zinc-900/5 text-zinc-900 text-sm border border-zinc-300 hover:bg-zinc-900/10">Download</button>
              </div>
              <div className="flex items-center gap-2">
                <Logo variant="lockup" size={40} colorScheme="mono" on="light" svgRef={setSvgRef("lockup-light-mono")} />
                <button onClick={() => downloadPngByKey("lockup-light-mono", "bloomora-lockup-mono-light.png")} className="px-3 py-1.5 rounded-md bg-zinc-900/5 text-zinc-900 text-sm border border-zinc-300 hover:bg-zinc-900/10">Download</button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-white/10 p-6 bg-[#0A0A0A]">
            <p className="text-white mb-4">Sizes</p>
            <div className="flex items-center gap-6 flex-wrap">
              {[
                { s: 24, key: "size-24" },
                { s: 32, key: "size-32" },
                { s: 40, key: "size-40" },
                { s: 56, key: "size-56" },
                { s: 72, key: "size-72" },
              ].map((item) => (
                <div key={item.key} className="flex items-center gap-2">
                  <Logo variant="lotus" size={item.s} svgRef={setSvgRef(item.key)} />
                  <button onClick={() => downloadPngByKey(item.key, `bloomora-lotus-${item.s}.png`)} className="px-2 py-1 rounded-md bg-white/10 text-white text-xs border border-white/20 hover:bg-white/15">PNG</button>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 p-6 bg-[#0A0A0A]">
            <p className="text-white mb-4">Badges</p>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Logo variant="lotus" size={48} badge svgRef={setSvgRef("badge")} />
                <button onClick={() => downloadPngByKey("badge", "bloomora-badge.png")} className="px-2 py-1 rounded-md bg-white/10 text-white text-xs border border-white/20 hover:bg-white/15">PNG</button>
              </div>
              <div className="flex items-center gap-2">
                <Logo variant="lotus" size={48} badge border svgRef={setSvgRef("badge-border")} />
                <button onClick={() => downloadPngByKey("badge-border", "bloomora-badge-border.png")} className="px-2 py-1 rounded-md bg-white/10 text-white text-xs border border-white/20 hover:bg-white/15">PNG</button>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 p-6 bg-[#0A0A0A]">
            <p className="text-white mb-4">Color Schemes</p>
            <div className="flex items-center gap-6 flex-wrap">
              {[
                { scheme: "brand", key: "scheme-brand" },
                { scheme: "mono", key: "scheme-mono" },
                { scheme: "monoInverted", key: "scheme-mono-inv" },
                { scheme: "violet", key: "scheme-violet" },
                { scheme: "teal", key: "scheme-teal" },
                { scheme: "outline", key: "scheme-outline" },
              ].map((item) => (
                <div key={item.key} className="flex items-center gap-2">
                  <Logo variant="lotus" size={40} colorScheme={item.scheme as any} svgRef={setSvgRef(item.key)} />
                  <button onClick={() => downloadPngByKey(item.key, `bloomora-${item.scheme}.png`)} className="px-2 py-1 rounded-md bg-white/10 text-white text-xs border border-white/20 hover:bg-white/15">PNG</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}


