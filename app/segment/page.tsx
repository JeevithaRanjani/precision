"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function Segment() {

  const [activeIndustry, setActiveIndustry] = useState(0);
  const panelRef = useRef<HTMLDivElement>(null);

  // ✅ industries data (YOU MISSED THIS)
  const industries = [
    {
      id: "BS-01",
      name: "Heavy Engineering",
      image: "/assests/home/infra-exports.jpg",
      desc: "End-to-end precision manufacturing up to 10 tons.",
    },
    {
      id: "BS-02",
      name: "Wind Energy",
      image: "/assests/home/seg-wind.jpg",
      desc: "High-performance renewable energy components.",
    },
    {
      id: "BS-03",
      name: "Aerospace",
      image: "/assests/home/seg-loco.jpg",
      desc: "Precision aerospace-grade manufacturing.",
    },
    {
      id: "BS-04",
      name: "Oil & Gas",
      image: "/assests/home/seg-oilgas.jpg",
      desc: "Durable components for harsh environments.",
    },
    {
      id: "BS-05",
      name: "Locomotive",
      image: "/assests/home/seg-loco.jpg",
      desc: "Heavy-duty railway components.",
    },
    {
      id: "BS-06",
      name: "General Manufacturing",
      image: "/assests/home/hero-machine (2).jpg",
      desc: "Versatile industrial machining.",
    },
  ];

  return (
    <>
      {/* ================= Business Segments ================= */}

<section className="bg-[#f5f5f5] text-black py-20 px-20">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="flex justify-between items-start mb-12">
          <div>
            <p className="text-[11px] font-mono text-blue-500 text-sm tracking-widest mb-4">
              / BUSINESS SEGMENTS 
            </p>

            <h2 className={ `${spaceGrotesk.className} text-5xl font-bold` }>
              Industries we <span className="text-blue-500">power.</span>
            </h2>
          </div>

        </div>

        {/* CONTENT */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* LEFT LIST */}
<div className="border-l border-gray-300">

  {industries.map((item, i) => (
    <div
      key={i}
      onMouseEnter={() => setActiveIndustry(i)}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;

        e.currentTarget.style.setProperty("--x", `${x}%`);
        e.currentTarget.style.setProperty("--y", `${y}%`);
      }}
      className={`
        relative group overflow-hidden
        flex justify-between items-center px-6 py-5 cursor-pointer
        border-b border-gray-200

        transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]

        ${activeIndustry === i
          ? "bg-white shadow-md scale-[1.01]"
          : "hover:bg-white"}
      `}
    >

      {/* 🔥 DIRECTIONAL LIGHT (premium effect) */}
      <div className="
        absolute inset-0 opacity-0 group-hover:opacity-100
        transition duration-300
        bg-[radial-gradient(circle_at_var(--x)_var(--y),rgba(37,99,235,0.15),transparent_60%)]
      "></div>

      {/* 🔥 LEFT ACTIVE GLOW BAR */}
      <div className={`
        absolute left-0 top-0 h-full w-[3px]
        transition-all duration-300
        ${activeIndustry === i
          ? "bg-blue-500 shadow-[0_0_15px_rgba(37,99,235,0.6)]"
          : "bg-transparent"}
      `}></div>

      {/* 🔥 LIGHT SWEEP */}
      <div className="
        absolute inset-0 opacity-0 group-hover:opacity-100
        transition duration-500
        bg-gradient-to-r from-transparent via-white/40 to-transparent
        translate-x-[-120%] group-hover:translate-x-[120%]
      "></div>

      {/* CONTENT */}
      <div className="flex gap-4 items-center relative z-10">
        <span className="text-xs text-gray-400 tracking-widest">
          {item.id}
        </span>

        <h4 className={`
          text-[18px] transition-all duration-300
          ${activeIndustry === i
            ? "text-blue-600 translate-x-1"
            : "text-gray-800 group-hover:translate-x-1"}
        `}>
          {item.name}
        </h4>
      </div>

      {/* ARROW */}
      <span className={`
        relative z-10 text-gray-400 transition-all duration-300
        ${activeIndustry === i
          ? "text-blue-500 translate-x-2"
          : "group-hover:text-blue-500 group-hover:translate-x-2"}
      `}>
        ↗
      </span>

    </div>
  ))}

</div>

          {/* RIGHT IMAGE PANEL */}

<div
  ref={panelRef}
  className="relative h-[450px] overflow-hidden rounded-lg border border-gray-200 bg-white group smooth"
  onMouseMove={(e) => {
    const panel = panelRef.current;
    if (!panel) return;

    const rect = panel.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    panel.style.setProperty("--x", `${x}%`);
    panel.style.setProperty("--y", `${y}%`);

    // 🔥 3D tilt
    const rotateX = (y - 50) / 10;
    const rotateY = (x - 50) / -10;

    panel.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  }}
  onMouseLeave={() => {
    const panel = panelRef.current;
    if (!panel) return;
    panel.style.transform = `rotateX(0deg) rotateY(0deg)`;
  }}
>
  {/* IMAGE LAYER */}
  {industries.map((item, i) => (
    <Image
      key={i}
      src={item.image}
      alt=""
      fill
      className={`
        object-cover fade-img
        ${activeIndustry === i ? "opacity-100" : "opacity-0"}
      `}
    />
  ))}

  {/* LIGHT FOLLOW */}
  <div className="light-follow"></div>

  {/* DEPTH SHADOW */}
  <div className="absolute inset-0 shadow-[inset_0_-120px_120px_rgba(0,0,0,0.25)]"></div>

  {/* CONTENT */}
  <div className="absolute bottom-10 left-10 max-w-md">
    <h3 className="text-3xl font-semibold mb-3 text-white smooth">
      {industries[activeIndustry].name}
    </h3>

    <p className="text-white mb-5 text-sm leading-relaxed smooth">
      {industries[activeIndustry].desc}
    </p>

    <div className="flex gap-2">
      {["MACHINING", "ASSEMBLY", "FABRICATION"].map((tag) => (
        <span
          key={tag}
          className="
            px-3 py-1 text-xs border border-gray-300 text-white
            hover:bg-blue-600 hover:text-white hover:border-blue-600
            transition
          "
        >
          {tag}
        </span>
      ))}
    </div>
  </div>
</div>
        </div>
      </div>
    </section>
    </>
  );
}