"use client";

import React from "react";
import Image from "next/image";
import { Space_Grotesk } from "next/font/google";
import {
  FiMapPin,
  FiPhone,
  FiMail,
  FiClock,
  FiFileText,
} from "react-icons/fi";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

 const contactInfo = [
    {
      icon: <FiFileText />,
      label: "HEADQUARTERS",
      value: "High Precision Industry Pvt. Ltd.",
    },
    {
      icon: <FiMapPin />,
      label: "ADDRESS",
      value:
        "SF No. 123, Kurichi Industrial Estate, Coimbatore — 641 021, Tamil Nadu, India",
    },
    {
      icon: <FiPhone />,
      label: "PHONE",
      value: "+91 422 000 0000",
    },
    {
      icon: <FiMail />,
      label: "EMAIL",
      value: "info@highprecisionindustry.com",
    },
    {
      icon: <FiClock />,
      label: "HOURS",
      value: "Mon — Sat · 09:00 – 18:00 IST",
    },
  ];

export default function ContactHero() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative w-full h-[90vh] overflow-hidden">

        {/* 🔥 Background Image */}
        <Image
          src="/assests/home/contact-hero.jpg"
          alt="contact"
          fill
          priority
          className="object-cover scale-105"
        />

        {/* 🔥 Dark Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* 🔥 Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/30 to-transparent"></div>

        {/* 🔥 Content */}
        <div className="relative z-10 max-w-7xl mx-auto h-full flex flex-col justify-center px-6 md:px-10">

          {/* TOP LABEL */}
          <p className="text-blue-500 text-[11px] font-mono tracking-[6px] mt-6 mb-6 flex items-center gap-3 uppercase">
            <span className="w-10 h-[1px] bg-blue-500"></span>
            GET IN TOUCH
          </p>

          {/* HEADING */}
          <h1
            className={`${spaceGrotesk.className} text-white text-[35px] md:text-[88px] font-bold leading-[1.02] max-w-4xl`}
          >
            Let’s Build <br />

            {/* 🔥 SHINE TEXT */}
            <span className="text-blue-500 text-shine">
              Precision Together
            </span>
          </h1>

          {/* DESCRIPTION */}
          <p
            className={`${spaceGrotesk.className} mt-6 text-gray-300 text-[12px] md:text-[18px] max-w-2xl leading-relaxed`}
          >
            Connect with our engineering experts for industrial solutions,
            manufacturing support, precision components, and technical consultation.
          </p>

          {/* CTA BUTTONS */}
          <div className="flex gap-4 mt-8">

  {/* 🔥 BUTTON 1 */}
  <button className="relative group px-5 py-2 rounded-full overflow-hidden border border-blue-500 text-blue-500 text-sm tracking-widest flex items-center gap-2">

    <span className="relative z-10 text-[12px] flex items-center gap-2 transition-colors duration-300 group-hover:text-white">
      CONTACT US
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
      VIEW LOCATION
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

        {/* 🔥 PREMIUM LIGHT SWEEP */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute top-0 left-[-100%] w-[45%] h-full
            bg-gradient-to-r from-transparent via-white/10 to-transparent
            skew-x-12 animate-[shine_7s_linear_infinite]"
          />
        </div>

        {/* 🔥 FLOATING BLUR */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"></div>

        <div className="absolute bottom-10 left-10 w-60 h-60 bg-cyan-400/10 rounded-full blur-3xl"></div>

      </section>

<section className="w-full bg-[#efefef] py-20 px-4 md:px-10 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-start">

          {/* LEFT PANEL */}
          <div className="border border-[#d6d6d6] bg-[#f3f3f3]">

            {contactInfo.map((item, i) => (
              <div
                key={i}
                className="flex gap-6 px-7 py-8 border-b border-[#d6d6d6] hover:bg-white transition-all duration-300"
              >
                {/* ICON */}
                <div
                  className="
                  min-w-[58px] h-[58px]
                  border border-[#cfcfcf]
                  flex items-center justify-center
                  text-[#7b7b88] text-[24px]
                  bg-[#f8f8f8]
                "
                >
                  {item.icon}
                </div>

                {/* TEXT */}
                <div>
                  <p
                    className="

                    text-[11px] font-mono
                    tracking-[4px]
                    uppercase
                    text-[#7c7c8a]
                    mb-3
                    font-mono
                  "
                  >
                    {item.label}
                  </p>

                  <h3
                    className={`${spaceGrotesk.className}
                    text-[18px]
                    font-bold
                    leading-[1.5]
                    text-[#0f172a]
                  `}
                  >
                    {item.value}
                  </h3>
                </div>
              </div>
            ))}

            {/* BOTTOM EMPTY AREA */}
            <div className=""></div>
          </div>

          {/* RIGHT PANEL */}
          <div
            className="
            relative overflow-hidden
            bg-[#03050a]
            border border-[#0f2747]
            p-8 md:p-14
          "
          >

            {/* GRID OVERLAY */}
            <div
              className="
              absolute inset-0 opacity-[0.07]
              [background-image:linear-gradient(#2563eb_1px,transparent_1px),linear-gradient(90deg,#2563eb_1px,transparent_1px)]
              [background-size:50px_50px]
            "
            ></div>

            {/* BLUE LIGHT */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-transparent to-transparent"></div>

            {/* TOP */}
            <div className="relative z-10 flex justify-between items-center mb-8">

              <p
                className="
                text-blue-500
                text-[11px]
                tracking-[6px]
                uppercase
                flex items-center gap-3
                font-mono
              "
              >
                <span className="w-10 h-[1px] bg-blue-500"></span>
                REQUEST A QUOTE
              </p>
            </div>

            {/* HEADING */}
            <h2
              className={`${spaceGrotesk.className}
              relative z-10
              text-white
              text-[35px]
              md:text-[64px]
              font-bold
              leading-[1.05]
              max-w-4xl
              mb-6
            `}
            >
              Tell us about your{" "}
              <span className="text-blue-500 text-shine">
                project.
              </span>
            </h2>

            {/* FORM */}
            <div className="relative z-3 grid md:grid-cols-2 gap-5">

              <Input label="FULL NAME" number="01" />
              <Input label="COMPANY" number="02" />

              <Input label="EMAIL" number="03" />
              <Input label="PHONE" number="04" />

              {/* SELECT */}
              <div className="border border-white/10 p-5 bg-black/20 backdrop-blur-md">
                <div className="flex justify-between items-center mb-4">
                  <p className="text-[10px] tracking-[3px] text-[#6c7382] uppercase font-mono">
                    INDUSTRY
                  </p>

                  <span className="text-[#5f6775] text-[10px]">05</span>
                </div>

                <select
                  className="
                  w-full bg-transparent
                  text-white
                  outline-none
                  text-[13px]
                  appearance-none
                "
                >
                  <option className="bg-black">Aerospace</option>
                  <option className="bg-black">Oil & Gas</option>
                  <option className="bg-black">Wind Sector</option>
                </select>
              </div>

              <Input
                label="QUANTITY / YEAR"
                number="06"
                placeholder=""
              />

              {/* TEXTAREA */}
              <div className="md:col-span-2 border border-white/10 p-5 bg-black/20 backdrop-blur-md">
                <div className="flex justify-between items-center mb-4">
                  <p className="text-[10px] tracking-[3px] text-[#6c7382] uppercase font-mono">
                    PROJECT BRIEF
                  </p>

                  <span className="text-[#5f6775] text-[10px]">07</span>
                </div>

                <textarea
                  rows={3}
                  className="
                  w-full bg-transparent
                  text-white
                  outline-none resize-none
                "
                />
              </div>
            </div>

            {/* BOTTOM */}
            <div className="relative z-10 mt-10 border-t border-white/10 pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">

              <p className="text-[#6d7684] text-[11px] tracking-[3px] uppercase font-mono">
                RESPONSE •{" "}
                <span className="text-blue-500">&lt; 24 HRS</span>
              </p>

              {/* BUTTON */}
                <button className="relative group px-5 py-2 rounded-half overflow-hidden border border-blue-500 text-blue-500 text-sm tracking-widest flex items-center gap-2">

    <span className="relative z-10 text-[12px] flex items-center gap-2 transition-colors duration-300 group-hover:text-white">
      TRANSMIT REQUEST
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
            </div>

            {/* CORNER BORDERS */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-blue-500"></div>
            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-blue-500"></div>
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-blue-500"></div>
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-blue-500"></div>
          </div>
        </div>
      </section>
    </>
  );
}

/* INPUT COMPONENT */
function Input({
  label,
  number,
  placeholder = "",
}: {
  label: string;
  number: string;
  placeholder?: string;
}) {
  return (
    <div className="border border-white/10 p-5 bg-black/20 backdrop-blur-md">

      <div className="flex justify-between items-center mb-4">
        <p className="text-[10px] tracking-[3px] text-[#6c7382] uppercase font-mono">
          {label}
        </p>

        <span className="text-[#5f6775] text-[10px]">
          {number}
        </span>
      </div>

      <input
        placeholder={placeholder}
        className="
        w-full bg-transparent
        text-white
        placeholder:text-[#5d6574]
        outline-none
        text-[20px]
      "
      />
    </div>
  );
}