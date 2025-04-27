import { Code, ExternalLink } from "lucide-react";
import React from "react";

const Card = ({ data }) => {
  return (
    <div className="group  border-b-[2px]   border-gray-500 border-1 shadow-[inset_0_2px_10px_rgba(255,255,255,0.05)] rounded-2xl overflow-hidden bg-gradient-to-br  from-zinc-900 to-black text-white hover:shadow-blue-500/20 hover:scale-105 transition-transform duration-300 ">
      {/* Image Section */}
      <div className="relative overflow-hidden">
        <img
          src={data.image || "/ai lms.png"}
          alt={`${data.name}'s Project`}
          className="w-full  h-48 object-cover opacity-80 transition-transform duration-300 group-hover:scale-105 "
        />

        {/* Top-right icons */}
        <div className="absolute bottom-3 right-3 flex items-center gap-2">
          {/* GitHub */}
          <a
            href={data.github}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black/60 opacity-0 group-hover:opacity-100 backdrop-blur-md hover:bg-blue-600 hover:text-white p-2 rounded-full transition-colors"
            title="View Code"
          >
            <Code size={18} />
          </a>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-5 flex flex-col gap-4">
        {/* Name + Visit Icon */}
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold tracking-wide group-hover:text-blue-400">
            {data.name}
          </h2>
          <a
            href={data.link}
            target="_blank"
            rel="noopener noreferrer"
            title="Visit Project"
            className="text-gray-400 hover:text-blue-400 transition-colors"
          >
            <ExternalLink size={18} />
          </a>
        </div>

        {/* Skills */}
        <div className="flex flex-wrap gap-2 text-sm">
          {data?.techUsed?.map((skill, index) => (
            <span
              key={index}
              className="flex items-center gap-1 bg-zinc-800 px-2 py-1 rounded-full shadow-sm"
            >
              <img src={skill?.image} alt={skill?.name} className="w-4 h-4" />
              <span>{skill?.name}</span>
            </span>
          ))}
        </div>

        {/* Description */}
        <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
          {data.desc}
        </p>
      </div>
    </div>
  );
};

export default Card;
