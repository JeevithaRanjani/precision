"use client";

import React, { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import { Award, Wrench,  ShieldCheck, BadgeCheck, Settings, Truck, Target, Factory, TrendingUp } from "lucide-react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { Space_Grotesk } from "next/font/google";
import { title } from "process";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function About() {

  const router = useRouter(); // ✅ FIXED (inside component)

  const [current, setCurrent] = useState(0);

  const slides = [
    {
      id: 1,
      image: "/assests/about/about-hero.jpg",
      title1: "Heavy engineering,",
      title2: "measured in microns.",
      desc: "Delivering high-quality machining solutions with global standards.",
    },
  ];

    // 🔥 Mouse 3D Tilt
    const ref = useRef<HTMLDivElement>(null);

  // 🔥 Mouse 3D Tilt
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
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

 

 const traits = [
  {
    id: "01",
    title: "We are experienced",
    desc: "Each of our advisors has a long track record that attests to the experience and expertise.",
  },
  {
    id: "02",
    title: "We are rigorous",
    desc: "Our hands-on, pragmatic approach seeks to fulfill each company's specific needs.",
  },
  {
    id: "03",
    title: "We are efficient",
    desc: "Satisfaction rates among our clients testify to contributions that are both real and decisive.",
  },
];

const leaders = [
  {
    id: "01",
    name: "T.S. KUTTAN",
    role: "MANAGING DIRECTOR",
    title: "FOUNDER",
    desc: "A mechanical engineer who founded the firm in 1986. His vision grew the company exponentially.",
    img: "/assests/about/mgmt-nithish.jpg",
  },
  {
    id: "02",
    name: "NITHISH KUTTAN",
    role: "JOINT MANAGING DIRECTOR",
    title: "CO-FOUNDER",
    desc: "Mechanical engineer & MBA. Leading marketing & operations with innovation.",
    img: "/assests/about/mgmt-kuttan.jpg",
  },
];
  
const data = [
  {
    id: "01",
    title: "VISION",
    desc: "Improve our image globally and achieve exponential growth through world-class products and service.",
    icon: "🎯",
  },
  {
    id: "02",
    title: "MISSION",
    desc: "Strive to produce high-quality customised products with responsive service and reasonable cost.",
    icon: "⚙️",
  },
  {
    id: "03",
    title: "QUALITY POLICY",
    desc: "Align operations with strategic direction and deliver fabricated & machined components on time.",
    icon: "🛡️",
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

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

const fadeItem = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0 },
};

  return (
    <>

                    {/* ABOUT SECTION */}

      <div className="w-full h-screen bg-black text-white relative">


        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute top-0 left-0 w-full h-full ${
              index === current ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <div
              className="absolute w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            ></div>

            <div className="absolute w-full h-full bg-black/60"></div>

            <div className="relative z-20 max-w-6xl mx-auto h-full flex flex-col justify-center">

                       {/* ✅ BREADCRUMB */}
        {/* <div className="absolute top-38 left-8 z-30 text-sm tracking-widest text-white/80 flex items-center gap-3">
          
          <span 
            onClick={() => router.push("/")}
            className="cursor-pointer hover:text-blue-400 transition"
          >
            HOME
          </span>

          <span>/</span>

          <span className="text-blue-400">
            ABOUT
          </span>
        </div> */}
              
              <p className="text-blue-500 tracking-widest text-[11px] font-mono mb-3">
                — ABOUT / 2026
              </p>

              <h1 className={`${spaceGrotesk.className} text-6xl font-bold leading-tight`}>
                {slide.title1} <br />
                <span className=" text-shine text-blue-500">{slide.title2}</span>
              </h1>

              <p className="mt-6 text-gray-300 max-w-xl text-lg">
                {slide.desc}
              </p>

            </div>
          </div>
        ))}

        {/* 🔁 MARQUEE */}
        <div className="absolute bottom-0 w-full bg-black border-t border-gray-800 py-3 overflow-hidden z-30">
          <div className="flex whitespace-nowrap animate-marquee text-sm tracking-widest text-gray-300">
            <span className="mx-6">ENGINEERING</span>
            <span className="mx-6">GLOBAL EXPORTS</span>
            <span className="mx-6 text-blue-500">ISO 9001:2015</span>
            <span className="mx-6">SINCE 1991</span>
            <span className="mx-6 text-blue-500">COIMBATORE · INDIA</span>

            <span className="mx-6">ENGINEERING</span>
            <span className="mx-6">GLOBAL EXPORTS</span>
            <span className="mx-6 text-blue-500">ISO 9001:2015</span>
            <span className="mx-6">SINCE 1991</span>
            <span className="mx-6 text-blue-500">COIMBATORE · INDIA</span>
          </div>
        </div>

      </div>

                    {/* ABOUT US */}
 <section className="w-full bg-[#f5f5f5] text-black">
      <div className="max-w-7xl mx-auto px-9 py-18 grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT */}
        <div>
          <p className="text-blue-500 tracking-widest text-[11px] font-mono mb-4">
            — ABOUT / 01
          </p>

          <h2 className={`${spaceGrotesk.className} text-4xl font-bold leading-tight`}>
            WE ARE COMMITTED TO <br />
            <span className="text-blue-500">DELIVERING EXCELLENCE.</span>
          </h2>

          <p className={`${spaceGrotesk.className} mt-6 text-black text-lg max-w-xl`}>
            Be the reference for developing and unlocking brand potential in the world.
          </p>

          <p className={`${spaceGrotesk.className} mt-6 text-gray-600 text-lg max-w-xl`}>
            High Precision Industry are the renowned manufacturers of heavy engineering machine shops in Coimbatore.
          </p>

          <div className="border-t border-gray-300 my-8"></div>

          <div className="flex gap-12">
            <div>
              <h3 className="text-3xl font-bold text-blue-500">30+</h3>
              <p className="text-xs text-gray-500">YEARS</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-blue-500">100+</h3>
              <p className="text-xs text-gray-500">CLIENTS</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-blue-500">0.005mm</h3>
              <p className="text-xs text-gray-500">TOLERANCE</p>
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
            className="relative transition-transform duration-300 ease-out will-change-transform"
          >

            <div className="relative w-[360px] h-[360px] md:w-[450px] md:h-[450px] rounded-full border border-blue-400 flex items-center justify-center">

              <div className="absolute w-[82%] h-[82%] rounded-full border border-gray-300 animate-spin"></div>

              <div className="absolute w-[75%] h-[75%] rounded-full bg-blue-500/30 blur-3xl"></div>

              <div className="relative w-[260px] h-[260px] md:w-[300px] md:h-[300px] rounded-full bg-[#020617] flex items-center justify-center overflow-hidden">

                <div className="relative w-[70%] h-[70%]">
                  <Image
                    src="/assests/about/about-component.jpg"
                    alt="turbine"
                    fill
                className="object-contain drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)] rotate-slow"
                  />
                </div>

              </div>
            </div>
          </div>
        </div>

      </div>
    </section>

  <section className="bg-black text-white px-6 md:px-16 py-24 relative overflow-hidden">

      {/* 🔵 Top Content */}
      <div className="grid md:grid-cols-2 gap-12 mb-20">
        
        {/* LEFT */}
        <div>
          <p className="text-[11px] font-mono tracking-widest text-blue-500 mb-6">
            — WHO WE ARE / 02
          </p>

          <h1 className={`${spaceGrotesk.className} text-5xl md:text-7xl font-bold leading-tight`}>
            A comprehensive <br />
            precision <br />
            <span className="text-shine text-blue-500">solution.</span>
          </h1>
        </div>

        {/* RIGHT */}
        <div className="text-gray-400 mt-15 mb-10 text-lg leading-relaxed">
          We provide a comprehensive solution for all types of precision heavy
          engineering spare parts. Strict adherence to total quality with years
          of experience puts us in a niche of innovative cost-cutting,
          efficient use of material and manpower, and constant upgradation of
          techniques and technology.
        </div>
      </div>

      {/* 🔥 TRAITS */}
      <div className="grid md:grid-cols-3 gap-10">
        {traits.map((item, index) => (
          <TiltCard key={index} item={item} />
        ))}
      </div>
    </section>

  <section className="bg-[#f3f3f3] px-6 md:px-16 py-24">
      
      {/* HEADER */}
      <div className="grid md:grid-cols-2 gap-12 mb-20">
        <div>
          <p className="text-[11px] font-mono tracking-widest text-blue-500 mb-4">
            — LEADERSHIP / 03
          </p>

          <h1 className={`${spaceGrotesk.className} text-5xl md:text-7xl font-bold text-black`}>
            Our <span className="text-shine text-blue-500">management.</span>
          </h1>

          <p className={`${spaceGrotesk.className} mt-6 text-gray-600 text-lg leading-relaxed`}>
            A team of experienced engineers — over a decade in the field —
            headed by our founder with 40+ years of experience.
          </p>
        </div>
      </div>

      {/* CARDS */}
      <div className="grid md:grid-cols-2 gap-12">
        {leaders.map((item, i) => (
          <PremiumCard key={i} item={item} />
        ))}
      </div>
    </section>

 <section className="bg-black text-white py-24 px-6 md:px-16">

      {/* TOP */}
      <div className="text-center mb-20">
        <p className="text-xs tracking-[4px] text-blue-500 mb-6">
          — HIGH PRECISION EXPERIENCE / 04 —
        </p>

        <h1 className="text-4xl md:text-6xl font-bold leading-tight max-w-4xl mx-auto">
          The <span className="text-blue-500">energy of a start-up</span> <br />
          combined with many years of experience.
        </h1>
      </div>

      {/* CARDS */}
      <div className="grid md:grid-cols-3 gap-10">
        {data.map((item, i) => (
          <Premium key={i} item={item} />
        ))}
      </div>
    </section>

    {/* ================= Why Us ================= */}

    <section className="relative px-20 md:px-20 py-20 bg-white overflow-hidden">

        {/* Background Glow */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute w-[500px] h-[500px] bg-blue-500/10 blur-[120px] top-[-100px] left-[-100px]" />
          <div className="absolute w-[400px] h-[400px] bg-purple-500/10 blur-[120px] bottom-[-100px] right-[-100px]" />
        </div>

  <p className="text-blue-500 text-[11px] font-mono tracking-widest mb-4">
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
            Committed to <span className="text-shine text-blue-500">precision.</span>
          </h1>

          {/* <p className={`${spaceGrotesk.className} text-gray-600 text-lg leading-relaxed`}>
            Six commitments that align our operating environment and Quality
            Management System with every project we deliver.
          </p> */}
        </motion.div>

        {/* GRID */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          className="grid md:grid-cols-3 border border-gray-200 relative z-10"
        >
          {features.map((f, i) => {
            const Icon = f.icon;

            return (
           <motion.div
  key={f.id}
  variants={fadeItem}
  initial="hidden"
  animate="show"
  whileHover={{ y: -10, scale: 1.02 }}
                className="relative p-10 border border-gray-200 bg-white/70 backdrop-blur-xl group transition duration-300 overflow-hidden"
              >
                {/* Animated Gradient Hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/40 via-transparent to-blue-500/40" />
                </div>

                {/* BIG NUMBER */}
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: i * 0.2 }}
                  className="absolute top-4 right-6 text-7xl font-bold text-grey-500 group-hover:scale-110 transition"
                >
                  {f.id}
                </motion.span>

                {/* ICON */}
                <div className="mb-6 relative z-10">
                  <Icon className="w-9 h-9 text-gray-700 group-hover:text-blue-500 transition" />
                </div>

                {/* TITLE */}
                {/* <h3 className="text-lg font-semibold mb-3 relative z-10">
                  {f.title}
                </h3> */}

                {/* DESC */}
                <p className={`${spaceGrotesk.className} text-black mt-15 text-sm leading-relaxed relative z-10`}>
                  {f.desc}
                </p>

                {/* Bottom Accent Line */}
                {["01", "03", "05", "07", "09"].includes(f.id) && (
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 1 }}
                    className="absolute bottom-0 left-0 h-[3px] bg-blue-500"
                  />
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </section>

    </>
  );
}

function TiltCard({ item }: { item: { id: string; title: string; desc: string } }) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: { clientX: number; clientY: number; }) => {
    const card = ref.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const midX = rect.width / 2;
    const midY = rect.height / 2;

    const rotateX = ((y - midY) / midY) * 10;
    const rotateY = ((x - midX) / midX) * -10;

    card.style.transform = `
      perspective(1000px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale(1.05)
    `;
  };

  const reset = () => {
    if (ref.current) {
      ref.current.style.transform =
        "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";
    }
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      className="relative p-8 rounded-2xl bg-gradient-to-br from-[#0a0a0a] to-[#111] border border-white/10 
                 transition-all duration-300 shadow-xl hover:shadow-blue-500/20"
    >
      {/* Glow */}
      <div className="absolute inset-0 rounded-2xl bg-blue-500/5 blur-2xl opacity-0 hover:opacity-100 transition"></div>

      {/* Number */}
      <span className="absolute right-6 top-6 text-6xl font-bold text-white/10">
        {item.id}
      </span>

      <p className="text-[11px] font-mono text-blue-500 mb-4 tracking-widest">
        / TRAIT {item.id}
      </p>

      <h3 className={`${spaceGrotesk.className} text-xl font-semibold mb-4`}>
        {item.title}
      </h3>

      <p className={`${spaceGrotesk.className} text-gray-400 text-sm leading-relaxed`}>
        {item.desc}
      </p>
    </motion.div>
  );
}

/* ========================= */
/* 🔥 ULTRA CARD */
/* ========================= */
    
function PremiumCard({ item }: { item: {
    name: string;
    img: string | StaticImport; id: string; role :string; title: string; desc: string 
} }) {
  const ref = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: { clientX: number; clientY: number; }) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect || !ref.current || !glowRef.current || !imgRef.current) return;

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = ((y - rect.height / 2) / rect.height) * 12;
    const rotateY = ((x - rect.width / 2) / rect.width) * -12;

    // 3D Tilt
    ref.current.style.transform =
      `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.04)`;

    // Glow follows mouse
    glowRef.current.style.background = `
      radial-gradient(circle at ${x}px ${y}px, rgba(59,130,246,0.25), transparent 40%)
    `;

    // Parallax image move
    imgRef.current.style.transform =
      `translateX(${rotateY * 2}px) translateY(${rotateX * 2}px) scale(1.08)`;
  };

  const reset = () => {
    if (!ref.current || !glowRef.current || !imgRef.current) return;

    ref.current.style.transform =
      "perspective(1200px) rotateX(0) rotateY(0) scale(1)";

    glowRef.current.style.background = "transparent";

    imgRef.current.style.transform = "translate(0,0) scale(1)";
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className="relative overflow-hidden bg-black text-white rounded-2xl border border-white/10 transition duration-300"
    >
      {/* 🔵 GLOW FOLLOW */}
      <div
        ref={glowRef}
        className="absolute inset-0 opacity-80 transition pointer-events-none"
      />

      {/* IMAGE */}
<div className="relative h-[520px] overflow-hidden">
        <div ref={imgRef} className="absolute inset-0 transition duration-300">
          <Image
            src={item.img}
            alt={item.name}
            fill
    className="object-cover object-[center_20%]"
          />
        </div>

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />

        {/* NUMBER */}
        <span className="absolute top-6 left-6 text-blue-500 text-xs tracking-widest">
          / {item.id}
        </span>
      </div>

      {/* CONTENT */}
      <div className="p-7 border-t border-white/10 backdrop-blur-md bg-black/40">
        <p className="text-[11px] font-mono text-blue-500 tracking-widest mb-2">
          {item.role}
        </p>

        <h2 className={`${spaceGrotesk.className} text-2xl font-bold mb-3 tracking-wide`}>
          {item.name}
        </h2>

        <p className={`${spaceGrotesk.className} text-gray-400 text-sm leading-relaxed`}>
          {item.desc}
        </p>
      </div>

      {/* 🔥 BORDER GLOW */}
      <div className="absolute inset-0 rounded-2xl border border-transparent hover:border-blue-500/40 transition" />
    </motion.div>
  );
}

/* ========================= */
/* 🔥 PREMIUM CARD */
/* ========================= */

function Premium({ item }: { item: { id: string; title: string; desc: string; icon: string } }) {
  const ref = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: { clientX: number; clientY: number; }) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect || !ref.current || !glowRef.current) return;

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = ((y - rect.height / 2) / rect.height) * 10;
    const rotateY = ((x - rect.width / 2) / rect.width) * -10;

    // 3D tilt
    ref.current.style.transform =
      `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;

    // Glow follow
    glowRef.current.style.background = `
      radial-gradient(circle at ${x}px ${y}px, rgba(59,130,246,0.25), transparent 40%)
    `;
  };

  const reset = () => {
    if (!ref.current || !glowRef.current) return;

    ref.current.style.transform =
      "perspective(1000px) rotateX(0) rotateY(0) scale(1)";

    glowRef.current.style.background = "transparent";
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className="relative group p-8 border border-white/10 bg-[#0a0a0a] transition duration-300"
    >
      {/* 🔵 GLOW */}
      <div
        ref={glowRef}
        className="absolute inset-0 opacity-80 pointer-events-none transition"
      />

      {/* 🔥 BORDER ANIMATION */}
      <div className="absolute inset-0 border border-transparent group-hover:border-blue-500/40 transition"></div>

      {/* ICON */}
      <div className="w-12 h-12 border border-blue-500 flex items-center justify-center text-blue-500 mb-6">
        {item.icon}
      </div>

      {/* NUMBER */}
      <p className="text-[14px] font-mono text-blue-500 mb-2">/ {item.id}</p>

      {/* TITLE */}
      <h3 className={`${spaceGrotesk.className} text-xl font-bold mb-4`}>
        {item.title}
      </h3>

      {/* DESC */}
      <p className={`${spaceGrotesk.className} text-gray-400 text-sm leading-relaxed`}>
        {item.desc}
      </p>
    </motion.div>
  );
}   