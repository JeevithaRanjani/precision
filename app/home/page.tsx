"use client";

import { useCallback, useEffect, useRef, useState, type MouseEvent } from "react";
import Image from "next/image";
import { Award, Wrench,  ShieldCheck, BadgeCheck, Settings, Truck, Target, Factory, TrendingUp } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const slides = [
  {
    id: 1,
    title1: "World-Leading Precision",
    title2: "Tools Manufacturer",
    desc: "Over 30 years of expertise in Heavy Engineering.",
    image: "/assests/home/hero-slide-1.jpg",
  },
  {
    id: 2,
    title1: "Trusted and Reliable",
    title2: "Precision Partner",
    desc: "One-stop precision solution for machining and manufacturing needs.",
    image: "/assests/home/hero-slide-2.jpg",
  },
  {
    id: 3,
    title1: "World-Leading precision",
    title2: "parts manufacturers",
    desc: "40+ tailored-made heavy machineries as per customer's specifications.",
    image: "/assests/home/hero-slide-3.jpg",
  },
];

type Product = {
  id: number;
  image: string;
  name: string;
  desc: string;
};


const products: Product[] = [
  {
    id: 1,
    image: "/assests/home/product-oilgas.jpg",
    name: "Turbine Spindle",
    desc: "High-precision spindle for heavy machining applications.",
  },
  {
    id: 2,
    image: "/assests/home/product-casting.jpg",
    name: "Rotary Assembly",
    desc: "Durable rotary assembly designed for extreme operating conditions.",
  },
  {
    id: 3,
    image: "/assests/home/product-gear.jpg",
    name: "CNC Tooling",
    desc: "Precision CNC tooling engineered for aerospace and defence.",
  },
   {
    id: 4,
    image: "/assests/home/product-locomotive.jpg",
    name: "CNC Tooling",
    desc: "Precision CNC tooling engineered for aerospace and defence.",
  },
   {
    id: 5,
    image: "/assests/home/product-aerospace.jpg",
    name: "CNC Tooling",
    desc: "Precision CNC tooling engineered for aerospace and defence.",
  },
];

const data = [
  {
    id: 1,
    tab: "01 · MACHINING",
    title: "Machining Infrastructure",
    image: "/assests/home/qa-cmm.jpg",
    desc: "From raw material to machined components and assemblies — light to heavy duty machines for turning, milling, boring, drilling and complex profile machining.",
    number: "01",
    stats: [
      { value: "6 Tons", label: "MAX WEIGHT" },
      { value: "12+", label: "OPERATIONS" },
      { value: "±0.005mm", label: "TOLERANCE" },
    ],
  },
  {
    id: 2,
    tab: "02 · FABRICATION",
    title: "Fabrication Facility",
    image: "/assests/home/seg-oilgas.jpg",
    desc: "Advanced welding and fabrication setups for precision structures and industrial assemblies.",
    number: "02",
    stats: [
      { value: "10 Tons", label: "CAPACITY" },
      { value: "8+", label: "PROCESSES" },
      { value: "±0.01mm", label: "ACCURACY" },
    ],
  },
  {
    id: 3,
    tab: "03 · GLOBAL REACH",
    title: "Global Operations",
    image: "/assests/home/seg-wind.jpg",
    desc: "Serving clients worldwide with export-ready engineering and quality standards.",
    number: "03",
    stats: [
      { value: "15+", label: "COUNTRIES" },
      { value: "100+", label: "CLIENTS" },
      { value: "ISO", label: "CERTIFIED" },
    ],
  },
];

const industries = [
  {
    id: "BS-01",
    name: "Heavy Engineering",
    image: "/assests/home/hero-machine (2).jpg",
    desc: "End-to-end precision manufacturing for heavy industries — turnkey machined assemblies up to 10 tons.",
  },
  {
    id: "BS-02",
    name: "Wind Energy",
    image: "/assests/home/seg-wind.jpg",
    desc: "High-performance components for renewable energy systems.",
  },
  {
    id: "BS-03",
    name: "Aerospace",
    image: "/assests/home/hero-slide-2.jpg",
    desc: "Precision aerospace-grade manufacturing solutions.",
  },
  {
    id: "BS-04",
    name: "Oil & Gas",
    image: "/assests/home/seg-oilgas.jpg",
    desc: "Durable components for harsh oil & gas environments.",
  },
  {
    id: "BS-05",
    name: "Locomotive",
    image: "/assests/home/seg-loco.jpg",
    desc: "Heavy-duty railway and locomotive components.",
  },
  {
    id: "BS-06",
    name: "General Manufacturing",
    image: "/assests/home/product-casting.jpg",
    desc: "Versatile machining for industrial applications.",
  },
];

const features = [
  {
    id: "01",
    icon: Target,
    title: "ISO 9001:2015 certified",
    desc: "Align the operating environment of the organization & Quality Management System with strategic direction of the organization.",
  },
  {
    id: "02",
    icon:  ShieldCheck,
    title: "Light to heavy machining",
    desc: "Strive continually to meet the customer requirements and minimize the risks of its operations from all activities at the premises.",
  },
  {
    id: "03",
    icon: BadgeCheck ,
    title: "Castings, forgings & fabrication",
    desc: "Any components manufactured by us goes through strict quality checks & standards right from raw material to end product in accordance to our Quality management systems and our customers’ requirements.",
  },
  {
    id: "04",
    icon: Settings,
    title: "Strict quality checks",
    desc: "High precision industry has capabitiy to manufacture & perform precision machining from light to heavy machining comprising various metal removal process for commonly used metals to exotic materials of diffrent shapes and sizes.",
  },
  {
    id: "05",
    icon: Truck,
    title: "Two machining divisions",
    desc: "Deliver Fabricated & Machined components to our customers with Quality and on time delivery",
  },
  {
    id: "06",
    icon: Factory,
    title: "On-time delivery",
    desc: "The company is well equipped with two Machining Divisions spread over an area of 400 sq. mt.",
  },
    {
    id: "07",
    icon: TrendingUp ,
    title: "On-time delivery",
    desc: "Satisfy with the applicable requirements of its operations in line with standards and practices to continually improve the effectiveness of our Quality Management System.",
  },
    {
    id: "08",
    icon: Wrench ,
    title: "On-time delivery",
    desc: "High precision industry can manufacture components & Sub-assemblies out of castings, forging & fabrication for both domestic & international markets.",
  },
    {
    id: "09",
    icon: Award ,
    title: "On-time delivery",
    desc: "Our Quality management system is in compliance with ISO 9001:2015 certified.",
  },
];

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
};

 const qualityChecks = [
    {
      id: "01",
      title: "Raw material verification",
      desc: "Mill certificates, PMI and chemistry validated on every heat.",
    },
    {
      id: "02",
      title: "In-process inspection",
      desc: "First-article approval and SPC throughout the cycle.",
    },
    {
      id: "03",
      title: "Dimensional metrology",
      desc: "CMM, laser tracker and surface profilometry to ±5µm.",
    },
    {
      id: "04",
      title: "Final & NDT",
      desc: "Visual, DPT, MPI, UT and radiography per customer spec.",
    },
  ];

export default function Home() {
  const [current, setCurrent] = useState(0);
  const [activeIndustry, setActiveIndustry] = useState(0);
  const [activeInfrastructure, setActiveInfrastructure] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // 🔥 Mouse 3D Tilt
  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect || !ref.current) return;

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = ((y / rect.height) - 0.5) * 20;
    const rotateY = ((x / rect.width) - 0.5) * -20;

    ref.current.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const resetTilt = () => {
    if (!ref.current) return;
    ref.current.style.transform = `rotateX(0deg) rotateY(0deg)`;
  };


  // 🔥 AUTO SLIDE
 const [index, setIndex] = useState(0);

  const visibleCards = 3;
  const maxIndex = products.length - visibleCards;


// 👉 NEXT
const nextSlide = useCallback(() => {
  setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
}, [maxIndex]);

// 👉 PREV
const prevSlide = useCallback(() => {
  setIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
}, [maxIndex]);

// 🔥 AUTO SLIDE
useEffect(() => {
  const interval = setInterval(() => {
    nextSlide();
  }, 3000);

  return () => clearInterval(interval);
}, [nextSlide]);

 

  return (
    <>
      {/* 🔥 HERO SECTION */}
      <div className="w-full h-screen bg-black text-white relative">

        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
              index === current ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            {/* Background */}
            <div
              className="absolute w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            ></div>

            {/* Overlay */}
            <div className="absolute w-full h-full bg-black/60"></div>

            {/* Content */}
            <div className="relative z-20 max-w-6xl mx-auto h-full flex flex-col justify-center">
              <p className="text-blue-500 tracking-widest text-[11px] font-mono mb-3">
                ISO 9001:2015 CERTIFIED
              </p>

              <h1 className={`${spaceGrotesk.className} text-6xl font-bold leading-tight`}>
                {slide.title1} <br />
<span className="text-shine">
  {slide.title2}
</span>
              </h1>

              <p className={`${spaceGrotesk.className} mt-6 text-gray-300 max-w-xl text-lg`}>
                {slide.desc}
              </p>

              <div className="flex gap-4 mt-8">

  {/* 🔥 BUTTON 1 */}
  <button className="relative group px-5 py-2 rounded-full overflow-hidden border border-blue-500 text-blue-500 text-sm tracking-widest flex items-center gap-2">

    <span className="relative z-10 text-[12px] flex items-center gap-2 transition-colors duration-300 group-hover:text-white">
      EXPLORE CAPABILITIES
      <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
    </span>

    {/* BG FILL */}
    <span className="absolute inset-0 bg-blue-600 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></span>

    {/* SHINE */}
    <span className="absolute top-0 left-[-100%] w-full h-full 
      bg-gradient-to-r from-transparent via-white/40 to-transparent 
      skew-x-12 group-hover:left-[120%] transition-all duration-700">
    </span>

  </button>


  {/* 🔥 BUTTON 2 */}
  <button className="relative group px-5 py-2 rounded-full overflow-hidden border border-gray-400 text-gray-300 text-sm tracking-widest flex items-center gap-2">

    <span className="relative z-10 text-[12px] flex items-center gap-2 transition-colors duration-300 group-hover:text-black">
      VIEW PROJECTS
      <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
    </span>

    {/* BG FILL */}
    <span className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></span>

    {/* SHINE */}
    <span className="absolute top-0 left-[-100%] w-full h-full 
      bg-gradient-to-r from-transparent via-black/20 to-transparent 
      skew-x-12 group-hover:left-[120%] transition-all duration-700">
    </span>

  </button>

</div>
            </div>
          </div>
        ))}

        {/* Indicators */}
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-2 z-30">
          {slides.map((_, i) => (
            <div
              key={i}
              className={`w-8 h-1 ${
                i === current ? "bg-blue-500" : "bg-gray-500"
              }`}
            ></div>
          ))}
        </div>

        {/* 🔁 MARQUEE */}
        <div className="absolute bottom-0 w-full bg-black border-t border-gray-800 py-3 overflow-hidden z-30">
          <div className={`${spaceGrotesk.className} flex whitespace-nowrap animate-marquee text-lg tracking-widest text-gray-300`}>
            <span className="mx-6">ENGINEERING</span>
            <span className="mx-6">GLOBAL EXPORTS</span>
            <span className="mx-6 text-blue-500">ISO 9001:2015</span>
            <span className="mx-6">SINCE 1991</span>
            <span className="mx-6 text-blue-500">COIMBATORE · INDIA</span>

            {/* duplicate */}
            <span className="mx-6">ENGINEERING</span>
            <span className="mx-6">GLOBAL EXPORTS</span>
            <span className="mx-6 text-blue-500">ISO 9001:2015</span>
            <span className="mx-6">SINCE 1991</span>
            <span className="mx-6 text-blue-500">COIMBATORE · INDIA</span>
          </div>
        </div>
      </div>

      {/* ✅ ABOUT SECTION */}
      <section className="w-full bg-[#f5f5f5] text-black">
        <div className="max-w-7xl mx-auto px-9 py-20 grid md:grid-cols-2 gap-10 items-center">

          {/* LEFT */}
          <div>
            <p className="text-blue-500 tracking-widest text-[11px] font-mono mb-8">
              — ABOUT / 01
            </p>

            <h2 className={`${spaceGrotesk.className} text-4xl font-bold leading-tight`}>
              WE ARE COMMITTED TO <br />
              <span className="text-shine text-blue-500">DELIVERING EXCELLENCE.</span>
            </h2>

            <p className={`${spaceGrotesk.className} mt-6 text-black text-lg max-w-xl`}>
              Be the reference for developing and unlocking brand potential in the world.
            </p>

            <p className={`${spaceGrotesk.className} mt-6 text-gray-600 text-sm max-w-xl`}>
              High Precision Industry are the renowned manufacturers of heavy engineering machine shops in Coimbatore. Since 1991, we have carved a niche for quality, durability, and precision in both domestic and international markets.
            </p>

            <div className="border-t border-gray-300 my-8"></div>

            <div className="flex gap-12">
              <div>
                <h3 className="text-[31px] font-mono font-bold text-blue-500">30+</h3>
                <p className={`${spaceGrotesk.className} text-xs text-gray-500`}>YEARS</p>
              </div>
              <div>
                <h3 className="text-[31px] font-mono font-bold text-blue-500">100+</h3>
                <p className={`${spaceGrotesk.className} text-xs text-gray-500`}>CLIENTS</p>
              </div>
              <div>
                <h3 className="text-[31px] font-mono font-bold text-blue-500">0.005mm</h3>
                <p className={`${spaceGrotesk.className} text-xs text-gray-500`}>TOLERANCE</p>
              </div>
            </div>
          </div>

{/* RIGHT */}
  <div
      className="relative flex justify-center items-center perspective-[1000px]"
      onMouseMove={handleMouseMove}
      onMouseLeave={resetTilt}
    >

      {/* GRID */}
      <div className="absolute inset-0 opacity-20 
        [background-image:linear-gradient(#00000020_1px,transparent_1px),linear-gradient(90deg,#00000020_1px,transparent_1px)]
        [background-size:40px_40px]"></div>

      {/* MAIN WRAPPER */}
      <div
        ref={ref}
        className="relative transition-transform duration-300 ease-out"
      >

        {/* OUTER RING */}
        <div className="relative w-[360px] h-[360px] md:w-[450px] md:h-[450px] rounded-full border border-blue-400 flex items-center justify-center">

          {/* ROTATING RING */}
          <div className="absolute w-[82%] h-[82%] rounded-full border border-gray-300 rotate-slow"></div>

          {/* PULSE GLOW */}
          <div className="absolute w-[75%] h-[75%] rounded-full bg-blue-500/30 blur-3xl glow-pulse"></div>

          {/* INNER DARK CIRCLE */}
          <div className="relative w-[260px] h-[260px] md:w-[300px] md:h-[300px] rounded-full bg-[#020617] flex items-center justify-center shadow-[0_0_60px_rgba(0,0,255,0.3)] overflow-hidden">

            {/* LIGHT SWEEP */}
            <div className="light-sweep"></div>

            {/* IMAGE (reverse rotation) */}
            <div className="relative w-[70%] h-[70%] rotate-reverse">
              <Image
                src="/assests/home/product-turbine.jpg"
                alt="turbine"
                fill
                className="object-contain drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)] rotate-slow"
              />
            </div>

          </div>
        </div>
      </div>

      {/* LABEL */}
      {/* <p className="absolute bottom-[-25px] text-xs tracking-widest text-gray-500">
        X-SERIES TURBINE SPINDLE / TI-6AL-4V
      </p> */}
    </div>
        </div>
      </section>

        {/* ================= CATALOG ================= */}
  <section className="bg-black text-white px-20 py-20">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="flex justify-between items-center mb-10">
          <div>
            <p className="text-blue-500 text-[12px] font-mono tracking-widest mb-8">
              — OUR PRODUCTS / 02
            </p>

            <h2 className={`${spaceGrotesk.className} text-4xl font-bold`}>
              HIGH PRECISION  <span className="text-shine text-blue-500">SOLUTIONS</span>
            </h2>

            <p className={`${spaceGrotesk.className} mt-4 text-gray-400 max-w-lg`}>
              Rapid development timeline and consistent delivery performance during volume ramp-ups are our speciality.
            </p>
          </div>

          {/* ARROWS */}
          <div className="flex gap-3">
            <button
              onClick={prevSlide}
              className="w-10 h-10 border border-gray-700 flex items-center justify-center hover:bg-white hover:text-black transition"
            >
              ←
            </button>

            <button
              onClick={nextSlide}
              className="w-10 h-10 bg-blue-600 flex items-center justify-center hover:bg-blue-700 transition"
            >
              →
            </button>
          </div>
        </div>

        {/* SLIDER VIEWPORT */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${index * (100 / visibleCards)}%)`,
            }}
          >
            {products.map((item) => (
              <div
                key={item.id}
                className="w-1/3 px-4 flex-shrink-0 group"
              >
                {/* IMAGE */}
                <div className="relative overflow-hidden border border-gray-800">

                  <Image
                    src={item.image}
                    alt={item.name}
                    width={400}
                    height={400}
                    className="
                      w-full h-[350px] object-cover
                      grayscale brightness-75
                      group-hover:grayscale-0 group-hover:brightness-100
                      transition duration-500
                    "
                  />

                  {/* BLUE GLOW */}
                  <div className="
                    absolute inset-0 opacity-0
                    group-hover:opacity-100
                    bg-blue-500/20 blur-2xl
                    transition duration-500
                  "></div>

                </div>

                {/* TEXT */}
                <h3 className={`${spaceGrotesk.className} mt-4 text-lg font-semibold group-hover:text-blue-500`}>
                  {item.name}
                </h3>

                <p className={`${spaceGrotesk.className} text-gray-400 text-sm`}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* ================= Business Segments ================= */}

<section className="bg-[#f5f5f5] text-black py-20 px-20">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="flex justify-between items-start mb-12">
          <div>
            <p className="text-blue-500 text-[12px] font-mono tracking-widest mb-4">
              — BUSINESS SEGMENTS / 03
            </p>

            <h2 className={`${spaceGrotesk.className} text-5xl font-bold`}>
              Industries We <span className="text-shine text-blue-500">Power.</span>
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

        <h4 className={` ${spaceGrotesk.className}
          text-lg transition-all duration-300
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
    <h3 className={`${spaceGrotesk.className} text-[24px] font-mono font-semibold mb-3 text-white smooth`}>
      {industries[activeIndustry].name}
    </h3>

    <p className={`${spaceGrotesk.className} text-white mb-5 text-sm leading-relaxed smooth`}>
      {industries[activeIndustry].desc}
    </p>

    <div className={`${spaceGrotesk.className} flex gap-2`}>
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
      
        {/* ================= Infrastructure ================= */}

    <section className="bg-black text-white py-20 px-20">
      <div className="max-w-7xl mx-auto">

        {/* TOP */}
        <p className="text-blue-500 text-[12px] font-mono tracking-widest mb-4">
          — INFRASTRUCTURE / 04
        </p>

        <h2 className={`${spaceGrotesk.className} text-5xl font-bold mb-10`}>
          Consistency In <span className="text-shine text-blue-500">Quality.</span>
        </h2>

        {/* TABS */}
        <div className={`${spaceGrotesk.className} flex gap-4 mb-10`}>
          {data.map((item, i) => (
            <button
              key={i}
              onClick={() => setActiveInfrastructure(i)}
              className={`
                px-6 py-3 border text-sm tracking-widest transition
                ${activeInfrastructure === i
                  ? "bg-blue-600 border-blue-600"
                  : "border-gray-700 hover:border-white"}
              `}
            >
              {item.tab}
            </button>
          ))}
        </div>

        {/* CONTENT */}
        <div className="grid md:grid-cols-2 gap-16 items-center">

          <div className="relative w-full h-full">

  {/* IMAGE */}
<Image
  src={data[activeInfrastructure].image}
  alt="infrastructure"
  width={800}
  height={500}
  className="w-full h-full object-cover"
/>

  {/* DARK OVERLAY */}
  <div className="absolute inset-0 bg-black/0"></div>

  {/* BLUE TOP GLOW */}
  <div className="absolute top-0 left-0 w-full h-[3px] bg-blue-500 blur-md"></div>

  {/* OPTIONAL NUMBER WATERMARK */}
  {/* <h1 className="absolute inset-0 flex items-center justify-center text-[120px] font-bold text-blue-900/20">
    {data[activeInfrastructure].number}
  </h1> */}

          </div>

          {/* RIGHT CONTENT */}
          <div>
            <h3 className={`${spaceGrotesk.className} text-3xl font-semibold mb-6`}>
              {data[activeInfrastructure].title}
            </h3>

            <p className={`${spaceGrotesk.className} text-gray-400 mb-10 leading-relaxed`}>
              {data[activeInfrastructure].desc}
            </p>

            {/* STATS */}
            <div className={`${spaceGrotesk.className} flex gap-6 flex-wrap`}>
              {data[activeInfrastructure].stats.map((stat, i) => (
                <div
                  key={i}
                  className="border border-gray-800 px-6 py-5 min-w-[150px]"
                >
                  <h4 className="text-blue-500 text-xl font-bold">
                    {stat.value}
                  </h4>
                  <p className="text-xs text-gray-500 tracking-widest mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>

    {/* ================= Why Us ================= */}

    <section className="relative px-20 md:px-20 py-20 bg-white overflow-hidden">

        {/* Background Glow */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute w-[500px] h-[500px] bg-blue-500/10 blur-[120px] top-[-100px] left-[-100px]" />
          <div className="absolute w-[400px] h-[400px] bg-purple-500/10 blur-[120px] bottom-[-100px] right-[-100px]" />
        </div>

  <p className="text-blue-500 text-[12px] font-mono tracking-widest mb-4">
            — WHY US / 05
          </p>

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="grid md:grid-cols-2 gap-10 mb-16 relative z-10"
        >
          <h1 className={`${spaceGrotesk.className} text-5xl md:text-6xl font-bold text-black`}>
            Committed to <span className="text-shine text-blue-500">Precision.</span>
          </h1>
{/* 
          <p className={`${spaceGrotesk.className} text-gray-600 text-lg leading-relaxed`}>
            Six commitments that align our operating environment and Quality
            Management System with every project we deliver.
          </p> */}
        </motion.div>

        {/* GRID */}
          <motion.div
    variants={container}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    className="relative z-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
  >
    {features.map((f, i) => {
      const Icon = f.icon;

      return (
        <motion.div
          key={f.id}
          variants={item}
          whileHover={{
            y: -8,
          }}
          transition={{ duration: 0.3 }}
          className="group relative rounded-3xl border border-gray-200/70 bg-white/80 backdrop-blur-xl p-8 overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_60px_rgba(59,130,246,0.15)] transition-all duration-500"
        >
          {/* HOVER GRADIENT */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
            <div className="absolute inset-0 bg-linear-to-br from-blue-500/10 via-transparent to-cyan-400/10" />
          </div>

          {/* TOP */}
          <div className="relative z-10 flex items-start justify-between mb-10">
            {/* ICON */}
            <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center group-hover:scale-110 transition duration-300">
              <Icon className="w-7 h-7 text-blue-500" />
            </div>

            {/* NUMBER */}
            <span className="text-5xl font-bold text-gray-100 group-hover:text-blue-100 transition duration-500">
              {f.id}
            </span>
          </div>

          {/* CONTENT */}
          <div className="relative z-10">
            <h3
              className={`${spaceGrotesk.className} text-xl font-semibold text-black mb-4`}
            >
              {f.title}
            </h3>

            <p className="text-gray-600 leading-relaxed text-sm">
              {f.desc}
            </p>
          </div>

          {/* BOTTOM LINE */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 1, delay: i * 0.1 }}
            className="absolute bottom-0 left-0 h-1 bg-linear-to-r from-blue-500 to-cyan-400 rounded-full"
          />
        </motion.div>
      );
    })}
  </motion.div>

      </section>

 <section className="bg-black text-white px-6 md:px-20 py-20">

      {/* TOP HEADER */}
      <p className="text-blue-500 text-[12px] font-mono tracking-widest mb-4">
        — QUALITY ASSURANCE / 06
      </p>

      <div className="flex flex-col md:flex-row justify-between items-start mb-12 gap-6">
        <h1 className={`${spaceGrotesk.className} text-4xl md:text-6xl font-bold leading-tight`}>
          Inspected at every <span className="text-shine text-blue-500">Micron.</span>
        </h1>

        {/* BADGES */}
        <div className="flex mt-6 mr-35 flex-wrap gap-3 text-[13px] font-mono">
          {["ISO 9001:2015", "AS9100D READY", "API 6A", "PED 2014/68/EU"].map(
            (b, i) => (
              <div
                key={i}
                className="border border-gray-700 px-3 py-1 rounded-md text-gray-300"
              >
                ✓ {b}
              </div>
            )
          )}
        </div>

{/* <p className="text-gray-400 max-w-md">
         To be a world-class conglomerate requires commitment, perseverance and quality-rich delivery to customers. Our steadfast focus in this direction has helped us to achieve many awards, certifications and accolades.
        </p> */}

      </div>

      

      {/* MAIN GRID */}
      <div className="grid md:grid-cols-2 gap-10">

        {/* LEFT SIDE IMAGES */}
        <div className="grid grid-cols-2 gap-4">

          {/* BIG IMAGE */}
          <div className="col-span-1 row-span-2 relative h-[400px]">
            <Image
              src="/assests/home/cert-iso.jpg"
              alt=""
              fill
              className="object-cover"
            />
          </div>

          {/* TOP SMALL IMAGE */}
          <div className="relative h-[400px]">
            <Image
              src="/assests/home/cert-iso.jpg"
              alt=""
              fill
              className="object-cover"
            />
          </div>

          {/* BOTTOM METRIC BOX */}
          {/* <div className="bg-[#0b0b0b] border border-gray-800 flex flex-col justify-center p-6">
            <h2 className="text-4xl font-bold text-blue-500">±5µm</h2>
            <p className="text-xs text-gray-400 mt-2">TOLERANCE</p>
            <p className="text-sm mt-2 text-gray-300">
              Held consistently in production.
            </p>
          </div> */}
        </div>

        {/* RIGHT SIDE LIST */}
        <div className="flex flex-col justify-center">
          {qualityChecks.map((qualityChecks, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.2 }}
              className="py-6 border-b border-gray-800 group"
            >
              <div className="flex items-start gap-4">
                
                {/* NUMBER */}
                <span className="text-blue-500 mt-1 font-mono text-[14px] font-mono">
                  {qualityChecks.id}
                </span>

                <div>
                  {/* TITLE */}
                  <h3 className={`${spaceGrotesk.className} text-lg  font-semibold flex items-center gap-2`}>
                    {qualityChecks.title}
                    <span className="w-2 h-2 bg-blue-500 rounded-full group-hover:scale-125 transition" />
                  </h3>

                  {/* DESC */}
                  <p className={`${spaceGrotesk.className} text-gray-400 text-sm mt-1`}>
                    {qualityChecks.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    </>
  );
}