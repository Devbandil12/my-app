import React from "react";
import Card from "./Card";
import { motion } from "framer-motion";

function Cardlist() {
  const projects = [
    {
      image: "/aic.png",
      link: "https://ai-cruiter-wheat.vercel.app/",
      name: "AiCruiter",
      label: "personal",
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
      name: "DevidAura ",
      label: "freelance",
      techUsed: [
        { image: "/react.webp", name: "Reactjs" },
        { image: "/cloudi.webp", name: "Cloudinary" },
        { image: "/tailwind.svg", name: "tailwind" },
        { name: "drizzle Orm", image: "/sql.svg" },
        { name: "Nodejs", image: "/nodejs.webp" },
      ],
      github: "https://github.com/devbandil12",
    },
  ];

  return (
    <div className="mt-[4rem] md:mt-0 grid grid-cols-1 md:grid-cols-3 px-5 md:px-[5rem] gap-10">
      {projects.map((val, ind) => (
        <motion.div
          key={ind}
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: ind * 0.2, ease: "easeOut" }}
        >
          <Card data={val} />
        </motion.div>
      ))}
    </div>
  );
}

export default Cardlist;
