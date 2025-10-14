"use client";
import { Logo } from "@/components/Logo";
import { useRef } from "react";

export default function LogoPage() {
  const svgRefs = useRef<Record<string, SVGSVGElement | null>>({});

  const setSvgRef = (key: string) => (el: SVGSVGElement | null) => {
    svgRefs.current[key] = el;
  };

  function downloadPngByKey(
    key: string,
    filename: string,
    options: { scale?: number; width?: number; background?: string } = {}
  ) {
    const { scale = 4, width, background } = options;
    const svg = svgRefs.current[key];
    if (!svg) return;
    const svgData = new XMLSerializer().serializeToString(svg);
    const svgBlob = new Blob([svgData], { type: "image/svg+xml;charset=utf-8" });
    const url = URL.createObjectURL(svgBlob);
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement("canvas");
      // Prefer explicit width if provided; otherwise scale intrinsic size
      if (width) {
        const aspect = img.height / img.width;
        canvas.width = Math.round(width);
        canvas.height = Math.round(width * aspect);
      } else {
        canvas.width = Math.round(img.width * scale);
        canvas.height = Math.round(img.height * scale);
      }
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      // Optional background (useful for light variants)
      if (background) {
        ctx.fillStyle = background;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }
      if (width) {
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      } else {
        ctx.scale(scale, scale);
        ctx.drawImage(img, 0, 0);
      }
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
          <Logo variant="lockup" size={64} showGlow animated accessibleTitle="Bloomora logo lockup" svgRef={setSvgRef("lockup-primary")} renderAs="svg" />
          <div className="flex items-center gap-3">
            <button onClick={() => downloadPngByKey("lockup-primary", "bloomora-lockup@4x.png", { scale: 4 })} className="px-3 py-1.5 rounded-md bg-white/10 text-white text-sm border border-white/20 hover:bg-white/15">PNG 4x</button>
            <button onClick={() => downloadPngByKey("lockup-primary", "bloomora-lockup@8x.png", { scale: 8 })} className="px-3 py-1.5 rounded-md bg-white/10 text-white text-sm border border-white/20 hover:bg-white/15">PNG 8x</button>
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
                <button onClick={() => downloadPngByKey("lotus-dark", "bloomora-lotus-dark@4x.png", { scale: 4 })} className="px-3 py-1.5 rounded-md bg-white/10 text-white text-sm border border-white/20 hover:bg-white/15">PNG 4x</button>
                <button onClick={() => downloadPngByKey("lotus-dark", "bloomora-lotus-dark@8x.png", { scale: 8 })} className="px-3 py-1.5 rounded-md bg-white/10 text-white text-sm border border-white/20 hover:bg-white/15">PNG 8x</button>
              </div>
              <div className="flex items-center gap-2">
                <Logo variant="lockup" size={40} on="dark" svgRef={setSvgRef("lockup-dark")} renderAs="svg" />
                <button onClick={() => downloadPngByKey("lockup-dark", "bloomora-lockup-dark@4x.png", { scale: 4 })} className="px-3 py-1.5 rounded-md bg-white/10 text-white text-sm border border-white/20 hover:bg-white/15">PNG 4x</button>
                <button onClick={() => downloadPngByKey("lockup-dark", "bloomora-lockup-dark@8x.png", { scale: 8 })} className="px-3 py-1.5 rounded-md bg-white/10 text-white text-sm border border-white/20 hover:bg-white/15">PNG 8x</button>
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
                <button onClick={() => downloadPngByKey("lotus-light-violet", "bloomora-lotus-violet-light@4x.png", { scale: 4, background: "#FFFFFF" })} className="px-3 py-1.5 rounded-md bg-zinc-900/5 text-zinc-900 text-sm border border-zinc-300 hover:bg-zinc-900/10">PNG 4x</button>
                <button onClick={() => downloadPngByKey("lotus-light-violet", "bloomora-lotus-violet-light@8x.png", { scale: 8, background: "#FFFFFF" })} className="px-3 py-1.5 rounded-md bg-zinc-900/5 text-zinc-900 text-sm border border-zinc-300 hover:bg-zinc-900/10">PNG 8x</button>
              </div>
              <div className="flex items-center gap-2">
                <Logo variant="lockup" size={40} colorScheme="mono" on="light" svgRef={setSvgRef("lockup-light-mono")} renderAs="svg" />
                <button onClick={() => downloadPngByKey("lockup-light-mono", "bloomora-lockup-mono-light@4x.png", { scale: 4, background: "#FFFFFF" })} className="px-3 py-1.5 rounded-md bg-zinc-900/5 text-zinc-900 text-sm border border-zinc-300 hover:bg-zinc-900/10">PNG 4x</button>
                <button onClick={() => downloadPngByKey("lockup-light-mono", "bloomora-lockup-mono-light@8x.png", { scale: 8, background: "#FFFFFF" })} className="px-3 py-1.5 rounded-md bg-zinc-900/5 text-zinc-900 text-sm border border-zinc-300 hover:bg-zinc-900/10">PNG 8x</button>
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
                  <button onClick={() => downloadPngByKey(item.key, `bloomora-lotus-${item.s}@4x.png`, { scale: 4 })} className="px-2 py-1 rounded-md bg-white/10 text-white text-xs border border-white/20 hover:bg-white/15">4x</button>
                  <button onClick={() => downloadPngByKey(item.key, `bloomora-lotus-${item.s}@8x.png`, { scale: 8 })} className="px-2 py-1 rounded-md bg-white/10 text-white text-xs border border-white/20 hover:bg-white/15">8x</button>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 p-6 bg-[#0A0A0A]">
            <p className="text-white mb-4">Badges</p>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Logo variant="lotus" size={48} badge svgRef={setSvgRef("badge")} />
                <button onClick={() => downloadPngByKey("badge", "bloomora-badge@4x.png", { scale: 4 })} className="px-2 py-1 rounded-md bg-white/10 text-white text-xs border border-white/20 hover:bg-white/15">4x</button>
                <button onClick={() => downloadPngByKey("badge", "bloomora-badge@8x.png", { scale: 8 })} className="px-2 py-1 rounded-md bg-white/10 text-white text-xs border border-white/20 hover:bg-white/15">8x</button>
              </div>
              <div className="flex items-center gap-2">
                <Logo variant="lotus" size={48} badge border svgRef={setSvgRef("badge-border")} />
                <button onClick={() => downloadPngByKey("badge-border", "bloomora-badge-border@4x.png", { scale: 4 })} className="px-2 py-1 rounded-md bg-white/10 text-white text-xs border border-white/20 hover:bg-white/15">4x</button>
                <button onClick={() => downloadPngByKey("badge-border", "bloomora-badge-border@8x.png", { scale: 8 })} className="px-2 py-1 rounded-md bg-white/10 text-white text-xs border border-white/20 hover:bg-white/15">8x</button>
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
                  <button onClick={() => downloadPngByKey(item.key, `bloomora-${item.scheme}@4x.png`, { scale: 4, background: item.scheme === "mono" || item.scheme === "violet" ? "#FFFFFF" : undefined })} className="px-2 py-1 rounded-md bg-white/10 text-white text-xs border border-white/20 hover:bg-white/15">4x</button>
                  <button onClick={() => downloadPngByKey(item.key, `bloomora-${item.scheme}@8x.png`, { scale: 8, background: item.scheme === "mono" || item.scheme === "violet" ? "#FFFFFF" : undefined })} className="px-2 py-1 rounded-md bg-white/10 text-white text-xs border border-white/20 hover:bg-white/15">8x</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}


