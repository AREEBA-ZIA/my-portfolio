"use client";

import Image from "next/image";
import { useRef } from "react";

const chips = [
  { t: "React", x: "-10%", y: "10%", z: 90, d: "0s" },
  { t: "Next.js", x: "80%", y: "2%", z: 120, d: "1.2s" },
  { t: "Figma", x: "92%", y: "60%", z: 70, d: "0.6s" },
  { t: "AI/ML", x: "-12%", y: "68%", z: 110, d: "1.8s" },
  { t: "TypeScript", x: "38%", y: "98%", z: 60, d: "0.9s" },
];

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);

  function onMove(e: React.PointerEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el || e.pointerType === "touch") return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.setProperty("--rx", `${(-y * 14).toFixed(2)}deg`);
    el.style.setProperty("--ry", `${(x * 18).toFixed(2)}deg`);
  }

  function onLeave() {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
  }

  return (
    <section
      id="top"
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      className="relative flex min-h-screen items-center overflow-hidden pt-24 pb-16"
    >
      <div className="floor" aria-hidden />
      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-16 px-6 md:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="rise text-muted" style={{ ["--i" as string]: 0 }}>
            Frontend developer in Lahore
          </p>
          <h1
            className="rise mt-3 font-display text-6xl font-extrabold leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl"
            style={{ ["--i" as string]: 1 }}
          >
            Areeba Zia
          </h1>
          <p
            className="rise mt-6 max-w-md text-lg leading-relaxed text-muted"
            style={{ ["--i" as string]: 2 }}
          >
            I build fast, polished web apps with React and Next.js, and I am studying Artificial
            Intelligence at UMT.
          </p>
          <div className="rise mt-8 flex flex-wrap gap-3" style={{ ["--i" as string]: 3 }}>
            <a
              href="#projects"
              className="rounded-xl bg-iris px-6 py-3 font-semibold text-white transition hover:brightness-110"
            >
              View projects
            </a>
            <a
              href="#contact"
              className="rounded-xl border border-white/20 px-6 py-3 font-semibold transition hover:border-ice hover:text-ice"
            >
              Get in touch
            </a>
          </div>
        </div>

        <div className="scene rise mx-auto" style={{ ["--i" as string]: 2 }}>
          <div ref={ref} className="stage h-[min(78vw,400px)] w-[min(78vw,400px)]">
            <div className="ring ring-c" aria-hidden />
            <div className="ring ring-a" aria-hidden />
            <div className="ring ring-b" aria-hidden />
            <div
              className="absolute inset-[16%] overflow-hidden rounded-full border border-white/15 shadow-[0_30px_80px_-20px_rgba(124,108,255,0.6)]"
              style={{ transform: "translateZ(60px)" }}
            >
              <Image
                src="/areeba.png"
                alt="Portrait of Areeba Zia"
                width={498}
                height={519}
                priority
                className="h-full w-full scale-[1.2] object-cover"
              />
            </div>
            {chips.map((c) => (
              <span
                key={c.t}
                className="chip"
                style={{ left: c.x, top: c.y, transform: `translateZ(${c.z}px)`, animationDelay: c.d }}
              >
                {c.t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}