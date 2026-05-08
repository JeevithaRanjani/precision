"use client";

import React from "react";
import Image from "next/image";
import { Space_Grotesk } from "next/font/google";


const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const news = [
  {
    title: "AS9100 Rev D recertification awarded for fifth consecutive cycle",
    img: "/assests/about/news-5.jpg",
    tag: "CERTIFICATION",
    date: "04 FEB 2026",
    read: "3 MIN READ",
  },
  {
    title: "High Precision exhibits at IMTEX 2026 — Hall 3, Booth A-12",
    img: "/assests/about/news-4.jpg",
    tag: "EVENT",
    date: "21 JAN 2026",
    read: "4 MIN READ",
  },
  {
    title: "Strategic partnership signed with leading European wind OEM",
    img: "/assests/about/news-2.jpg",
    tag: "PRESS",
    date: "08 JAN 2026",
    read: "2 MIN READ",
  },
  {
    title: "Cryogenic valve program enters qualification with launch customer",
    img: "/assests/about/news-3.jpg",
    tag: "R&D",
    date: "15 DEC 2025",
    read: "6 MIN READ",
  },
];


export default function NewsHero() {
  return (
    <>
      {/* 🔥 HERO SECTION */}
      <section className="relative w-full h-[75vh] overflow-hidden">

        <Image
          src="/assests/about/news-hero.jpg" // ✅ fixed path
          alt="news"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/30 to-transparent"></div>

        <div className="relative z-10 h-full flex items-end md:items-center px-6 md:px-16 pb-20 md:pb-0">
          <div className="max-w-4xl">

           <p className="text-blue-500 text-[11px] font-mono tracking-[5px] mt-60 mb-6 flex items-center gap-3">
  <span className="w-12 h-[1px] bg-blue-500"></span>
  NEWSROOM • 2026
</p>

           <h1
  className={`${spaceGrotesk.className} text-[45px] text-white md:text-[80px] mt-10 font-bold leading-[1.05]`}
>
  News & <span className="text-shine text-blue-500">Events</span>
</h1>

          </div>
        </div>

        {/* Shine */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-[-100%] w-[50%] h-full 
            bg-gradient-to-r from-transparent via-white/10 to-transparent 
            skew-x-12 animate-[shine_6s_linear_infinite]">
          </div>
        </div>

      </section>

      {/* 🔥 FEATURED STORY */}
      <section className="bg-black text-white px-6 md:px-16 py-20">

        <div className="max-w-7xl mx-auto">

          <p className="text-blue-500 text-xs tracking-[5px] mb-10 flex items-center gap-3">
            <span className="text-[11px] font-mono w-10 h-[1px] bg-blue-500"></span>
            FEATURED STORY
          </p>

          <div className="grid md:grid-cols-2 gap-10 items-center">

            {/* IMAGE */}
            <div className="relative h-[350px] md:h-[450px] overflow-hidden border border-white/10">

              <Image
                src="/assests/about/news-1.jpg"
                alt="featured"
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-black/20"></div>

            </div>

            {/* CONTENT */}
            <div>

              <div className="flex items-center gap-4 text-xs text-gray-400 mb-6">
                <span className="border border-blue-500 text-blue-500 px-3 py-1">
                  MILESTONE
                </span>
                <span>📅 12 MAR 2026</span>
                <span>⏱ 5 MIN</span>
              </div>

              <h2 className="text-[34px] md:text-[42px] font-bold leading-tight mb-6">
                <span className="text-shine text-blue-500">
                  High Precision unveils
                </span>{" "}
                next-generation 5-axis machining center
              </h2>

              <p className="text-gray-400 leading-relaxed mb-8 max-w-lg">
                A new flagship machine pushes our tolerance below ±2 microns across titanium and steel.
              </p>

             <button className="relative group px-4 py-2 rounded-full overflow-hidden border border-blue-500 text-blue-500 text-sm tracking-widest flex items-center gap-3">

  {/* TEXT */}
  <span className="relative z-10 text-[12px] flex items-center gap-2 transition-colors duration-300 group-hover:text-white">
    READ FULL STORY
    <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
  </span>

  {/* HOVER BG FILL */}
  <span className="absolute inset-0 bg-blue-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></span>

  {/* SHINE EFFECT */}
  <span className="absolute top-0 left-[-100%] w-full h-full 
    bg-gradient-to-r from-transparent via-white/40 to-transparent 
    skew-x-12 group-hover:left-[120%] transition-all duration-700">
  </span>

</button>

            </div>

          </div>

        </div>
      </section>

       <section className="bg-[#f3f3f3] px-6 md:px-16 py-20">

      {/* 🔥 HEADER */}
      <div className="max-w-7xl mx-auto mb-12">
        <p className="text-blue-500 text-[11px] font-mono text-xs tracking-[5px] mb-4">
          / LATEST UPDATES
        </p>

        <h2 className={`${spaceGrotesk.className} text-[45px] font-bold text-black`}>
          All the <span className="text-shine text-blue-500">Recent moves.</span>
        </h2>
      </div>

      {/* 🔥 GRID */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6">

        {news.map((item, i) => (
          <NewsCard key={i} item={item} />
        ))}

      </div>
    </section>

    </>
  );
}

function NewsCard({ item }: { item: { title: string; img: string; tag: string; date: string; read: string; featured?: boolean } }) {
  return (
    <div
      className={`
        group border overflow-hidden transition duration-300
        ${item.featured ? "bg-black text-white" : "bg-white text-black"}
      `}
    >

      <div className="flex flex-col md:flex-row">

        {/* IMAGE */}
        <div className="relative w-full md:w-[40%] h-[200px]">

          <Image
            src={item.img}
            alt=""
            fill
            className="
              object-cover
              grayscale brightness-75
              group-hover:grayscale-0 group-hover:brightness-100
              transition duration-500
            "
          />

        </div>

        {/* CONTENT */}
        <div className="p-6 flex flex-col justify-between">

          {/* META */}
          <div className="flex items-center gap-3 text-xs mb-3">
            <span className="border border-blue-500 text-blue-500 px-2 py-1">
              {item.tag}
            </span>
            <span className="text-gray-400">{item.date}</span>
          </div>

          {/* TITLE */}
          <h3 className="text-lg font-semibold leading-snug group-hover:text-blue-500 transition">
            {item.title}
          </h3>

          {/* FOOTER */}
          <div className="flex items-center gap-3 text-xs mt-4 text-gray-400">
            <span>⏱ {item.read}</span>
            <span className="group-hover:translate-x-1 transition">→</span>
          </div>

        </div>

      </div>
    </div>
  );
}