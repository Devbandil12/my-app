import { Code, ExternalLink } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

const labelColor = {
  personal: "bg-blue-600/40 text-blue-800 border-blue-500/30",
  Personal: "bg-blue-600/20 text-blue-400 border-blue-500/30",
  freelance: "bg-purple-600/40 text-purple-900 border-purple-500/30",
  Freelance: "bg-purple-600/40 text-purple-900 border-purple-500/30",
  Saas: "bg-emerald-600/20 text-emerald-400 border-emerald-500/30",
};

const Card = ({ data }) => {
  return (
    <motion.div className="group relative flex flex-col border border-zinc-800 rounded-2xl overflow-hidden bg-gradient-to-b from-zinc-900 to-black text-white transition-all duration-500 hover:border-blue-500/40 hover:shadow-[0_0_32px_rgba(59,130,246,0.12)]">
      {/* Image */}
      <div className="relative overflow-hidden h-48 shrink-0">
        <img
          src={data.image || "/ai lms.png"}
          alt={`${data.name} preview`}
          className="w-full h-full object-cover opacity-75 transition-transform duration-500 group-hover:scale-105 group-hover:opacity-90"
        />

        {/* bottom fade */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />

        {/* label badge */}
        <span
          className={cn(
            "absolute top-3 left-3 text-xs font-medium px-2.5 py-0.5 rounded-full border backdrop-blur-sm capitalize",
            labelColor[data.label] ?? "bg-zinc-800/80 text-zinc-300 border-zinc-700"
          )}
        >
          {data.label}
        </span>

        {/* hover action icons */}
        <div className="absolute bottom-3 right-3 flex items-center gap-2 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          <a
            href={data.github}
            target="_blank"
            rel="noopener noreferrer"
            title="View code"
            className="bg-black/70 backdrop-blur-md hover:bg-blue-600 p-2 rounded-full transition-colors"
          >
            <Code size={15} />
          </a>
          <a
            href={data.link}
            target="_blank"
            rel="noopener noreferrer"
            title="Live demo"
            className="bg-black/70 backdrop-blur-md hover:bg-blue-600 p-2 rounded-full transition-colors"
          >
            <ExternalLink size={15} />
          </a>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col gap-3">
        {/* title row */}
        <div className="flex items-start justify-between gap-2">
          <h2 className="text-base font-semibold tracking-wide group-hover:text-blue-400 transition-colors leading-snug">
            {data.name}
          </h2>
          <a
            href={data.link}
            target="_blank"
            rel="noopener noreferrer"
            title="Live demo"
            className="text-zinc-500 hover:text-blue-400 transition-colors mt-0.5 shrink-0"
          >
            <ExternalLink size={15} />
          </a>
        </div>

        <div className="h-px bg-zinc-800 group-hover:bg-blue-500/25 transition-colors" />

        {/* tech badges */}
        <div className="flex flex-wrap gap-1.5">
          {data?.techUsed?.map((skill, index) => (
            <span
              key={index}
              className="flex items-center gap-1.5 bg-zinc-800/80 hover:bg-zinc-700 px-2.5 py-1 rounded-full text-xs text-zinc-300 transition-colors"
            >
              <img
                src={skill?.image}
                alt={skill?.name}
                className="w-3.5 h-3.5 object-contain"
                style={skill?.fill ? { filter: "brightness(0) saturate(100%) invert(1)" } : undefined}
              />
              {skill?.name}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
