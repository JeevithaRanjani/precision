"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FiMapPin,
  FiPhone,
  FiMail,
} from "react-icons/fi";
import {
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function Footer() {
  return (
    <>
      <footer className="relative bg-black overflow-hidden border-t border-white/10">

        {/* GRID OVERLAY */}
        <div
          className="
          absolute inset-0 opacity-[0.03]
          [background-image:linear-gradient(#2563eb_1px,transparent_1px),linear-gradient(90deg,#2563eb_1px,transparent_1px)]
          [background-size:60px_60px]
        "
        ></div>

        {/* TOP BORDER LIGHT */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/40 to-transparent"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 py-20">

          {/* MAIN GRID */}
          <div className="grid md:grid-cols-4 gap-16">

            {/* LEFT SIDE */}
            <div>

              {/* LOGO */}
              <div className="w-[240px] h-[65px] bg-[#ececec] relative mb-10 overflow-hidden">

                {/* Replace with your logo */}
                <Image
                  src="/assests/home/high_logo4.png"
                  alt="logo"
                  fill
                  className="object-contain"
                />

              </div>

              {/* DESC */}
              <p
                className={`${spaceGrotesk.className}
                text-[16px]
                leading-[2]
                text-[#b7bcc6]
                max-w-sm
                mb-10
              `}
              >
                Renowned manufacturers of heavy engineering and precision
                machined parts since 1991. ISO 9001:2015 certified.
              </p>

              {/* SOCIAL */}
              <div className="flex gap-4">

                <SocialIcon icon={<FaLinkedinIn />} />
                <SocialIcon icon={<FaYoutube />} />
                <SocialIcon icon={<FaInstagram />} />

              </div>
            </div>

            {/* EXPLORE */}
            <div>

              <SmallTitle title="EXPLORE" />

              <FooterLinks
                links={[
                  "Home",
                  "About",
                  "Infrastructure",
                  "Products",
                  "News",
                ]}
              />
            </div>

            {/* CAPABILITIES */}
            <div>

              <SmallTitle title="CAPABILITIES" />

              <FooterLinks
                links={[
                  "CNC Machining",
                  "Fabrications",
                  "CMM & Inspection",
                  "Manufacturing Solutions",
                  "Exports",
                ]}
              />
            </div>

            {/* CONTACT */}
            <div>

              <SmallTitle title="CONTACT DESK" />

              <div className="space-y-8">

                {/* ADDRESS */}
                <ContactItem
                  icon={<FiMapPin />}
                  text="Kurichi Industrial Estate, Coimbatore — 641 021, Tamil Nadu, India"
                />

                {/* PHONE */}
                <ContactItem
                  icon={<FiPhone />}
                  text="+91 422 000 0000"
                />

                {/* EMAIL */}
                <ContactItem
                  icon={<FiMail />}
                  text="info@highprecisionindustry.com"
                />
              </div>
            </div>
          </div>

          {/* BOTTOM */}
          <div
            className="
            mt-20 pt-8
            border-t border-white/10
            flex flex-col md:flex-row
            justify-between items-center
            gap-5
          "
          >

            <p className="text-[#727b88] text-[13px] tracking-[2px] uppercase font-mono">
              © 2026 HIGH PRECISION INDUSTRY
            </p>

            <p className="text-[#5f6774] text-[12px] tracking-[3px] uppercase font-mono">
              Blackstone Infomatics
            </p>
          </div>
        </div>

        {/* LIGHT SWEEP */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="
            absolute top-0 left-[-100%]
            w-[40%] h-full
            bg-gradient-to-r from-transparent via-white/5 to-transparent
            skew-x-12
            animate-[shine_10s_linear_infinite]
          "
          ></div>
        </div>
      </footer>
    </>
  );
}

/* SMALL TITLE */
function SmallTitle({ title }: { title: string }) {
  return (
    <p
      className="
      text-blue-500
      text-[11px]
      tracking-[5px]
      uppercase
      font-mono
      mb-10
      flex items-center gap-3
    "
    >
      <span className="w-2 h-2 rounded-full bg-blue-500"></span>
      {title}
    </p>
  );
}

/* LINKS */
function FooterLinks({ links }: { links: string[] }) {
  return (
    <div className="space-y-7">
      {links.map((link, i) => (
        <Link
          key={i}
          href="#"
          className="
          block
          text-white
          text-[15px]
          hover:text-blue-500
          transition-all duration-300
          hover:translate-x-1
        "
        >
          {link}
        </Link>
      ))}
    </div>
  );
}

/* CONTACT ITEM */
function ContactItem({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) {
  return (
    <div className="flex items-start gap-4">

      <div className="text-blue-500 text-[22px] mt-1">
        {icon}
      </div>

      <p
        className="
        text-[#d0d4db]
        text-[16px]
        leading-[2]
        font-mono
      "
      >
        {text}
      </p>
    </div>
  );
}

/* SOCIAL ICON */
function SocialIcon({
  icon,
}: {
  icon: React.ReactNode;
}) {
  return (
    <button
      className="
      group
      w-[52px] h-[52px]
      border border-white/10
      flex items-center justify-center
      text-[#8d95a3]
      hover:text-white
      hover:border-blue-500
      relative overflow-hidden
      transition-all duration-300
    "
    >

      <span className="relative z-10 text-[18px]">
        {icon}
      </span>

      {/* BG */}
      <span
        className="
        absolute inset-0
        bg-blue-500
        scale-y-0
        origin-bottom
        group-hover:scale-y-100
        transition-transform duration-300
      "
      ></span>
    </button>
  );
}