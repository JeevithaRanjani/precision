"use client";

import { Suspense } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { FaCogs, FaTools, FaRulerCombined, FaIndustry, FaRocket } from "react-icons/fa";
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

function InfrastructurePageContent() {
  const searchParams = useSearchParams();

  const tabs = [
    {
      name: "Machining Infrastructure",
      icon: <FaCogs />,
      image: "/assests/about/infra-machining.jpg",
      title: "Heavy & Precision Machining",
      desc: "Engineered machining floor for components up to 6 tons.",
      stats: [
        { label: "Max Weight", value: "6 Tons" },
        { label: "Tolerance", value: "±0.005 mm" },
        { label: "Machines", value: "12+" },
        { label: "Surface", value: "0.4 μm" },
      ],
      table: [
        ["CNC VMC", "2500 x 1200 mm", "04"],
        ["CNC HMC", "800 x 800 mm", "03"],
      ],
    },
    {
      name: "Fabrications",
      icon: <FaTools />,
      image: "/assests/about/infra-fabrication.jpg",
      title: "Advanced Fabrication",
      desc: "High strength fabrication with precision welding.",
      stats: [
        { label: "Capacity", value: "10 Tons" },
        { label: "Welding", value: "TIG/MIG" },
        { label: "Projects", value: "50+" },
        { label: "Accuracy", value: "High" },
      ],
      table: [["Laser Cutting", "10 mm", "02"]],
    },
    {
      name: "CMM & Instruments",
      icon: <FaRulerCombined />,
      image: "/assests/about/infra-capabilities.jpg",
      title: "Precision Measurement",
      desc: "Advanced metrology systems ensuring accuracy.",
      stats: [{ label: "Accuracy", value: "±2 μm" }],
      table: [["CMM Machine", "High Precision", "03"]],
    },
    {
      name: "Manufacturing solution & Exports",
      icon: <FaIndustry />,
      image: "/assests/home/infra-exports.jpg",
      title: "End-to-End Manufacturing",
      desc: "Complete solution from raw to finished product.",
      stats: [{ label: "Projects", value: "100+" }],
      table: [["Assembly Line", "Full Scale", "02"]],
    },
    {
      name: "Capabilities",
      icon: <FaRocket />,
      image: "/assests/home/infra-cmm.jpg",
      title: "Engineering Capabilities",
      desc: "High-end machining with multi-axis systems.",
      stats: [{ label: "Axis", value: "5 Axis" }],
      table: [["5 Axis CNC", "Advanced", "02"]],
    },
  ];

  const format = (str: string) =>
    str
      .toLowerCase()
      .replace(/&/g, "and")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");

  // ✅ NO useState, NO useEffect
  const tabParam = searchParams.get("tab");

  const activeIndex = tabs.findIndex(
    (t) => format(t.name) === tabParam
  );

  const activeTab = activeIndex === -1 ? 0 : activeIndex;
  const current = tabs[activeTab];

  return (
    <>
      {/* HERO */}
      <section className="relative w-full h-[90vh] overflow-hidden">
        <Image
          src="/assests/about/infra-capabilities.jpg"
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />

             <div className="relative z-10 max-w-7xl mx-auto h-full flex flex-col justify-center px-6 md:px-9">
          <p className="text-blue-500 text-[11px] font-mono tracking-[6px] mt-50 mb-6 flex items-center gap-3">
            <span className="w-10 h-[1px] bg-blue-500"></span>
            CATALOG • 12 COMPONENTS
          </p>

          <h1 className={`${spaceGrotesk.className} text-[54px] md:text-[80px] font-bold leading-[1.05]`}>
            Products & <span className=" text-shine text-blue-500">Services</span>
          </h1>

          <p className={`${spaceGrotesk.className} mt-6 text-gray-300 text-[16px] max-w-xl leading-relaxed`}>
            Twelve flagship components, four business segments, one obsession
            with sub-micron precision.
          </p>
        </div>
      </section>

      {/* MAIN */}
      <section className="bg-black text-white px-6 md:px-16 py-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-6">

          {/* SIDEBAR */}
          <div className="space-y-3">
            {tabs.map((tab, i) => {
              const id = format(tab.name);

              return (
                <div
                  key={i}
                  onClick={() => {
                    window.history.pushState(null, "", `?tab=${id}`);
                  }}
                  className={`flex items-center gap-3 p-4 border cursor-pointer transition
                    ${
                      i === activeTab
                        ? "border-blue-500 bg-blue-500/10"
                        : "border-white/10 hover:border-blue-500"
                    }`}
                >
                  <span className="text-blue-500">{tab.icon}</span>
                  {tab.name}
                </div>
              );
            })}
          </div>

          {/* CONTENT */}
          <div className="md:col-span-3">
            <div className="relative h-[400px] mb-6">
              <Image src={current.image} alt="" fill className="object-cover" />
              <div className="absolute bottom-6 left-6">
                <h3 className="text-blue-500 font-bold">{current.title}</h3>
                <p>{current.desc}</p>
              </div>
            </div>

            {/* STATS */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {current.stats.map((s, i) => (
                <div key={i} className="border border-white/10 p-4 text-center">
                  <h3 className="text-blue-500">{s.value}</h3>
                  <p className="text-gray-400 text-sm">{s.label}</p>
                </div>
              ))}
            </div>

            {/* TABLE */}
            <div className="mt-6 border border-white/10">
              <table className="w-full text-sm">
                <tbody>
                  {current.table.map((row, i) => (
                    <tr key={i} className="border-t border-white/10">
                      <td className="p-4">{row[0]}</td>
                      <td className="p-4 text-gray-400">{row[1]}</td>
                      <td className="p-4 text-right text-blue-500">{row[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

export default function InfrastructurePage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-black" />}>
      <InfrastructurePageContent />
    </Suspense>
  );
}