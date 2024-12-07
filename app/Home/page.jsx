"use client";
import { Button } from "@/components/ui/button";
import { Contact, SquareArrowOutUpRight } from "lucide-react";
import { motion, useSpring } from "framer-motion";
import React, { useState } from "react";

const Page = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  // Spring animations for smooth movement
  const springX = useSpring(cursorPosition.x, { stiffness: 150, damping: 20 });
  const springY = useSpring(cursorPosition.y, { stiffness: 150, damping: 20 });

  const handleMouseMove = (e) => {
    setCursorPosition({ x: springX, y: springY });
  };

  return (
    <div
      className="p-10 h-screen text-white flex flex-col md:flex-row items-center justify-center gap-10 overflow-hidden relative"
      onMouseMove={handleMouseMove}
    >
      {/* Animated Dot */}

      {/* Profile Image */}
      <motion.img
        src="/main.webp"
        alt="Developer Image"
        className="w-[18rem] md:w-[30rem] rounded-full shadow-lg shadow-black"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        whileHover={{ scale: 1.05 }}
      />

      {/* Text Content */}
      <motion.div
        className="text-center md:text-left md:p-10"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h2
          className="text-xl font-bold md:text-5xl md:font-black tracking-tight text-slate-200 bg-clip-text"
          whileHover={{ scale: 1.02 }}
        >
          Unleashing Possibilities through Code: The Full Stack Journey.👨🏻‍💻
        </motion.h2>
        <motion.p
          className="mt-5 text-sm md:text-base text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          As a skilled full-stack developer, I am dedicated to turning ideas
          into innovative web applications. Explore my latest projects and
          articles, showcasing my expertise in various latest technologies.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex flex-col md:flex-row gap-5 mt-5 justify-center md:justify-start"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
        >
          <Button className="flex items-center gap-2 px-5 py-3 ">
            Resume <SquareArrowOutUpRight />
          </Button>
          <Button className="flex items-center gap-2 px-5 py-3 ">
            Contact <Contact />
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Page;
