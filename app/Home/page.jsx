"use client";
import { Button } from "@/components/ui/button";
import { Contact, SquareArrowOutUpRight } from "lucide-react";
import { motion, useSpring } from "framer-motion";
import React, { useState } from "react";
import Link from "next/link";
import { Typewriter } from "../_components/Navbar";

const Page = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const springX = useSpring(cursorPosition.x, { stiffness: 150, damping: 20 });
  const springY = useSpring(cursorPosition.y, { stiffness: 150, damping: 20 });

  const handleMouseMove = (e) => {
    setCursorPosition({ x: springX, y: springY });
  };

  return (
    <div
      className="p-5 md:p-10 min-h-screen bg-black text-white flex flex-col items-center justify-center gap-10 overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Heading */}
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          <span className="text-gray-400">Hi i am </span>
          <span className="text-blue-500">Dev Bandil.</span>
        </h1>
      </div>

      {/* Description + Image */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-10 max-w-4xl w-full text-center md:text-left">
        <motion.p
          className="text-base text-white px-2 md:px-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          I am a 20-year-old B.Tech student and aspiring full-stack developer,
          skilled in Next.js and the MERN stack, with a passion for building
          creative and efficient applications. Currently, I am focused on honing
          my development skills and exploring new skills.
        </motion.p>

        <img
          src="/profile.jpg"
          alt="Dev Bandil"
          className="w-52 h-52 md:w-48 md:h-48 rounded-full object-cover "
        />
      </div>

      {/* Typewriter + Buttons */}
      <motion.div className="text-center md:text-left">
        <Typewriter text="Full-stack Web Developer" speed={80} />

        <motion.div className="flex flex-col sm:flex-row items-center  justify-center md:justify-start ml-12 gap-4 mt-6">
          <Link
            href="https://drive.google.com/file/d/1MfptVUBynyKFBanjaXKUgjE_SrxTDW34/view"
            target="_blank"
          >
            <Button className="flex items-center bg-blue-500 hover:bg-blue-500 gap-2 px-6 py-3 rounded-xl ">
              Resume <SquareArrowOutUpRight />
            </Button>
          </Link>

          <Link
            href="mailto:devbandil120@gmail.com?subject=Hello&body=I would like to connect with you."
            target="_blank"
          >
            <Button className="flex text-black items-center hover:bg-white gap-2 px-6 py-3 rounded-xl bg-white">
              hire me <Contact />
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Page;
