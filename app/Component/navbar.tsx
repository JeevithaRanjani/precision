/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();

const [openDropdown, setOpenDropdown] = useState<string | null>(null);

const menu = [
  { name: "Home", path: "/home" },
  { name: "About", path: "/about" },
  { name: "Infrastructure", path: "/infrastructure" },
  { name: "Products & Services", path: "/" },
  { name: "News & Events", path: "/news" },
  { name: "Contact Us", path: "/contact" },
];

const infrastructureList = [
  "Machining Infrastructure",
  "Fabrications",
  "CMM & Instruments",
  "Manufacturing solution & Exports",
  "Capabilities",
];

const productRoutes: Record<string, string> = {
  "Oil & Gas": "/oilgas",
  "Locomotive Industry": "/locomotive",
  "Heavy Engineering Industry": "/heavy",
  "Wind Sector Industry": "/wind",
  "Aerospace Industry": "/aerospace",
};

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl">
      
      <div className="
        flex items-center justify-between px-6 py-4
        rounded-[25px]
        backdrop-blur-xl
        bg-white dark:bg-black/40
        border border-black/10 dark:border-white/20
        shadow-[0_8px_30px_rgba(0,0,0,0.15)]
      ">
        
{/* Logo */}
<img
  src="/assests/home/high_logo4.png" // place your logo image inside the public folder
  alt="High Precision Logo"
  onClick={() => router.push("/")}
  className="h-18 w-65 cursor-pointer object-contain"
/>

        {/* Menu */}
<ul className="hidden md:flex items-center gap-3">
  {menu.map((item, i) => {

    const isInfrastructure = item.name === "Infrastructure";
    const isProducts = item.name === "Products & Services";

    if (isInfrastructure || isProducts) {
      const dropdownData = isInfrastructure
        ? infrastructureList
        : productRoutes ? Object.keys(productRoutes) : [];

      return (
        <li
          key={i}
          className="relative"
          onMouseEnter={() => setOpenDropdown(item.name)}
        
        >
          <div
            className="
            relative px-5 py-3 text-sm cursor-pointer
    rounded-full text-right group whitespace-nowrap
    text-black dark:text-white
    overflow-hidden
            "
          >
            <span className="relative z-8 flex items-center">
              {item.name} ▾
            </span>

            {/* Hover BG */}
            <span className="
            absolute -inset-1
      rounded-full
      opacity-0 group-hover:opacity-100
      bg-black/20 dark:bg-white/20
      transition-all duration-700
            "></span>

            {/* Shine */}
            <span className="
                 absolute inset-0
      bg-gradient-to-r from-transparent via-white/40 to-transparent
      dark:via-white/20
      translate-x-[-200%] group-hover:translate-x-[200%]
      transition duration-700
            "></span>
          </div>

          {/* 🔽 DROPDOWN */}
          {openDropdown === item.name && (
            <div className="
              absolute top-full left-0 mt-2 w-60
              rounded-xl backdrop-blur-xl
              bg-white/80 dark:bg-black/80
              border border-black/10 dark:border-white/20
              shadow-lg overflow-hidden
            "onMouseLeave={() => setOpenDropdown(null)}>
              {dropdownData.map((sub, idx) => (
             <div
  key={idx}
onClick={() => {
  const id = sub
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

  if (item.name === "Infrastructure") {
    router.push(`/infrastructure?tab=${id}`);
  }

  if (item.name === "Products & Services") {
    const path = productRoutes[sub];
    if (path) router.push(path);
  }

  setOpenDropdown(null);
}}
  className="
    px-4 py-3 text-sm cursor-pointer
    hover:bg-black/10 dark:hover:bg-white/10
    transition
  "
>
  {sub}
</div>
              ))}
            </div>
          )}
        </li>
      );
    }

    // NORMAL MENU
    return (
      <li
        key={i}
        onClick={() => router.push(item.path)}
        className="
          relative px-4 py-2 text-sm cursor-pointer 
          rounded-full group overflow-hidden whitespace-nowrap
          text-black dark:text-white
        "
      >
        <span className="relative z-10">{item.name}</span>

        <span className="
          absolute inset-0 rounded-full opacity-0 group-hover:opacity-100
          bg-black/10 dark:bg-white/10
          transition duration-400
        "></span>

        <span className="
          absolute inset-0 
          bg-gradient-to-r from-transparent via-white/40 to-transparent
          dark:via-white/20
          translate-x-[-100%] group-hover:translate-x-[100%]
          transition duration-700
        "></span>
      </li>
    );
  })}
</ul>

        {/* Button */}
        <button 
          onClick={() => router.push("/contact")}
          className="
          flex items-center gap-2 px-5 py-2 
          rounded-full text-sm font-medium whitespace-nowrap
          relative overflow-hidden group
          bg-black text-white 
          dark:bg-white dark:text-black
        ">
          <span className="relative z-10">Build Your Career ↗</span>

          <span className="
            absolute top-0 left-[-100%] w-full h-full
            bg-white/40 dark:bg-black/20
            skew-x-12 group-hover:left-[120%]
            transition-all duration-700
          "></span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;