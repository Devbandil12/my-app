"use client";
import React, { useState } from "react";
import Card from "./Card";
import { motion, AnimatePresence } from "framer-motion";

const TABS = ["AI Powered", "Freelance"];

const projects = [
  {
    image: "/aic.png",
    link: "https://ai-cruiter-wheat.vercel.app/",
    name: "AiCruiter",
    label: "personal",
    categories: ["Full Stack", "AI Powered"],
    techUsed: [
      { image: "/nextwhite.webp", name: "nextjs" },
      { image: "/react.webp", name: "Reactjs" },
      { image: "/tailwind.svg", name: "tailwind" },
      { image: "/Ai.webp", name: "gemini Api" },
      { name: "drizzle Orm", image: "/sql.svg" },
    ],
    github: "https://github.com/devbandil12",
  },
  {
    image: "/notes.png",
    link: "https://make-it-easy-liard.vercel.app/",
    name: "Make it Easy",
    label: "Personal",
    categories: ["Full Stack", "AI Powered"],
    techUsed: [
      { image: "/Ai.webp", name: "gemini Api" },
      { image: "/nextwhite.webp", name: "nextjs" },
      { image: "/react.webp", name: "Reactjs" },
      { image: "/tailwind.svg", name: "tailwind" },
      { name: "drizzle Orm", image: "/sql.svg" },
    ],
    github: "https://github.com/devbandil12",
  },
  {
    image: "/f2.png",
    link: "https://devidaura.com",
    name: "DevidAura",
    label: "freelance",
    categories: ["Full Stack", "Freelance"],
    techUsed: [
      { image: "/react.webp", name: "Reactjs" },
      { image: "/cloudi.webp", name: "Cloudinary" },
      { image: "/tailwind.svg", name: "tailwind" },
      { name: "drizzle Orm", image: "/sql.svg" },
      { name: "Nodejs", image: "/nodejs.webp" },
    ],
    github: "https://github.com/devbandil12",
  },
  {
    image: "/chatbase.png",
    link: "https://dashboard-fawn-nine-78.vercel.app",
    name: "AI ChatBase",
    label: "Saas",
    categories: ["Full Stack", "AI Powered"],
    techUsed: [
      { image: "/nextwhite.webp", name: "Next.js" },
      { image: "/tailwind.svg", name: "Tailwind" },
      { image: "/mongodb.webp", name: "MongoDB" },
      { image: "/Ai.webp", name: "Gemini AI" },
      { image: "/Pinecone.svg", name: "Pinecone", fill: "white" },
    ],
    github: "https://github.com/devbandil12",
  },
];

function Cardlist() {
  const [activeTab, setActiveTab] = useState("All");

  const filtered =
    activeTab === "All"
      ? projects
      : projects.filter((p) => p.categories.includes(activeTab));

  const countFor = (tab) =>
    tab === "All"
      ? projects.length
      : projects.filter((p) => p.categories.includes(tab)).length;

  return (
    <div className="px-5 md:px-[5rem]">
      {/* Tabs */}
      <div className="flex justify-center mb-10">
        <div className="flex gap-1 bg-zinc-900 border border-zinc-800 rounded-full p-1">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className="relative flex items-center gap-1.5 px-4 py-1.5 text-sm font-medium rounded-full transition-colors duration-200 focus:outline-none"
            >
              {activeTab === tab && (
                <motion.span
                  layoutId="tab-pill"
                  className="absolute inset-0 bg-blue-600 rounded-full"
                  transition={{ type: "spring", stiffness: 380, damping: 34 }}
                />
              )}
              <span
                className={`relative z-10 ${
                  activeTab === tab ? "text-white" : "text-zinc-400 hover:text-zinc-200"
                }`}
              >
                {tab}
              </span>
              <span
                className={`relative z-10 text-xs px-1.5 py-0.5 rounded-full font-mono ${
                  activeTab === tab
                    ? "bg-white/20 text-white"
                    : "bg-zinc-800 text-zinc-500"
                }`}
              >
                {countFor(tab)}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-10">
        <AnimatePresence mode="popLayout">
          {filtered.map((val) => (
            <motion.div
              key={val.name}
              layout
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <Card data={val} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default Cardlist;
