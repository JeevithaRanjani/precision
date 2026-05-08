"use client";

import React, { useRef} from "react";
import Image from "next/image";
import Segment from "../segment/page";

const products = [
  { name: "Titanium Impeller", img: "/assets/products/p1.jpg" },
  { name: "Hydraulic Manifold", img: "/assets/products/p2.jpg" },
  { name: "Turbine Blade", img: "/assets/products/p3.jpg" },
  { name: "Cylinder Housing", img: "/assets/products/p4.jpg" },
  { name: "Precision Coupling", img: "/assets/products/p5.jpg" },
  { name: "Brass Valve Body", img: "/assets/products/p6.jpg" },
  { name: "Helical Gear Set", img: "/assets/products/p7.jpg" },
  { name: "Aerospace Bracket", img: "/assets/products/p8.jpg" },
  { name: "Pressure Flange", img: "/assets/products/p9.jpg" },
];


export default function ProductHero() {


  return (
    <>
      {/* 🔥 HERO SECTION */}
      <section className="relative w-full h-[90vh] overflow-hidden">

        <Image
          src="/assests/about/about-hero.jpg"
          alt="industrial"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>

        <div className="relative z-10 max-w-7xl mx-auto h-full flex flex-col justify-center px-6 md:px-16">
          <p className="text-blue-500 text-xs tracking-[6px] mb-6 flex items-center gap-3">
            <span className="w-10 h-[1px] bg-blue-500"></span>
            CATALOG • 12 COMPONENTS
          </p>

          <h1 className="text-[64px] text-white md:text-[80px] font-bold leading-[1.05]">
            Products & <span className="text-blue-500">Services</span>
          </h1>

          <p className="mt-6 text-gray-300 text-lg max-w-xl leading-relaxed">
            Twelve flagship components, four business segments, one obsession
            with sub-micron precision.
          </p>
        </div>

        {/* Shine */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-[-100%] w-[50%] h-full 
            bg-gradient-to-r from-transparent via-white/10 to-transparent 
            skew-x-12 animate-[shine_6s_linear_infinite]">
          </div>
        </div>

      </section>

      {/* 🔥 GRID SECTION */}
      <section className="bg-black text-white px-6 md:px-16 py-20">

        <div className="max-w-7xl mx-auto mb-16">
          <p className="text-blue-500 text-xs tracking-[4px] mb-4">
            / CATALOG
          </p>

          <h2 className="text-5xl font-bold">
            Twelve flagship <br />
            <span className="text-blue-500">Components.</span>
          </h2>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
          {products.map((item, i) => (
            <ProductCard key={i} item={item} />
          ))}
        </div>

      </section>

    {/* ================= Business Segments ================= */}

<Segment />
    </>
  );
}

function ProductCard({ item }: { item: { name: string; img: string } }) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect || !ref.current) return;

    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    ref.current.style.transform = `
      rotateX(${y * 12}deg)
      rotateY(${x * -12}deg)
      scale(1.04)
    `;
  };

  const reset = () => {
    if (!ref.current) return;
    ref.current.style.transform = "rotateX(0) rotateY(0) scale(1)";
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className="group relative border border-white/10 overflow-hidden transition-transform duration-300 bg-[#020617]"
    >
      <div className="relative h-[260px] overflow-hidden">

        <Image
          src={item.img}
          alt={item.name}
          fill
          className="object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition duration-500"
        />

        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition"></div>

        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 
          bg-gradient-to-tr from-blue-500/20 to-transparent blur-xl transition">
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-sm font-semibold">{item.name}</h3>
        <p className="text-xs text-gray-400">Precision Component</p>
      </div>
    </div>
  );
}