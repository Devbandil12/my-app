"use client";
import { Button } from "@/components/ui/button";
import {
  ChevronRight,
  Contact,
  ExternalLink,
  SquareArrowOutUpRight,
} from "lucide-react";
import { motion, useSpring } from "framer-motion";
import React, { useState } from "react";
import Link from "next/link";
import { Typewriter } from "../_components/Navbar";
import Cardlist from "../Projects/_components/Cardlist";
import Biography from "../About/_components/Biography";
import Achievement from "../Achievements/page";
import SparklesText from "@/components/Stars";

const Page = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const springX = useSpring(cursorPosition.x, { stiffness: 150, damping: 20 });
  const springY = useSpring(cursorPosition.y, { stiffness: 150, damping: 20 });

  const handleMouseMove = (e) => {
    setCursorPosition({ x: springX, y: springY });
  };

  return (
    <div className=" pt-10">
      <div
        className="p-5 md:p-10 min-h-screen bg-black text-white flex flex-col items-center justify-center gap-10 overflow-hidden"
        onMouseMove={handleMouseMove}
      >
        {/* Heading */}
        <div className="hover:border-t-[1px] transition-all  hove border-b-[1px]  border-b-blue-500  rounded-3xl  duration-50 hover:border-b-0 transition-all">
          <p className=" p-1 border-[1px] border-gray-500 flex items-center justify-center gap-1 px-2 rounded-3xl text-[10px] ">
            <SparklesText
              icon={true}
              sparklesCount={5}
              text="Available for freelance"
              className="text-white text-xs font-normal px-3"
            />
          </p>
        </div>
        <div className="text-center">
          <h1 className="text-3xl md:text-7xl font-bold leading-tight">
            <span className="text-gray-400">Hi i am </span>
            <span className=" text-blue-500"> Dev Bandil</span>
          </h1>
        </div>

        {/* Description + Image */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-5 max-w-4xl w-full text-center md:text-left">
          <motion.p
            className=" max-w-[25rem] text-sm  text-white px-2 md:px-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            I am a 20-year-old B.Tech student and aspiring full-stack developer,
            skilled in Next.js and the MERN stack, with a passion for building
            creative and efficient applications. Currently, I am focused on
            honing my development skills and exploring new skills.
          </motion.p>

          <img
            src="/profile.jpg"
            alt="Dev Bandil"
            className="w-52 h-52 md:w-40 md:h-40 rounded-full object-cover "
          />
        </div>

        {/* Typewriter + Buttons */}
        <motion.div className="text-center md:text-left">
          <Typewriter text="Full-stack Web Developer" speed={80} />

          <motion.div className=" flex items-center justify-center flex-col md:flex-row gap-5 mt-5 ">
            <Link
              href="https://drive.google.com/file/d/1OY7bZBwp-6gfwz9_CQmJmnBemcp9aoVN/view"
              target="_blank"
            >
              <Button className="flex  items-center bg-blue-500 hover:bg-blue-500 gap-2 px-6 py-3 rounded-xl ">
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
      <div
        id="Projects"
        className=" mt-[15rem] md:mt-[15rem] lg:mt-0 h-screen text-white flex items-center justify-center flex-col bg-black"
      >
        <div className=" w-fit  mt-[10rem] mb-3 ">
          <h2 className="text-2xl md:text-5xl w-full  font-bold text-center">
            MY <span className=" text-blue-500">Projects</span>
          </h2>
          <motion.div
            initial={{
              width: 0,
            }}
            whileInView={{
              width: "120%",
            }}
            transition={{
              duration: 1,
              ease: "easeIn",
            }}
            viewport={{ once: true, amount: 0.3 }}
            className=" h-[5px] mt-1  bg-blue-500 w-full md:-ml-[1.5rem] -ml-[1rem]"
          ></motion.div>
        </div>
        <h2 className=" text-center mb-2 max-w-[24rem] text-gray-500 ">
          Some of my project that showcase my interest and skills, adding full
          stack + freelance projects{" "}
        </h2>

        <div className=" w-full flex items-center justify-center flex-col md:mt-[3rem]">
          <Cardlist />
          <Link target="_blank" href={"https://github.com/devbandil12"}>
            <Button className=" p-2 mt-10 flex items-center justify-center hover:scale-105 transition-all duration-75 hover:bg-blue-600 bg-blue-600 text-white ">
              View all Projects
              <ExternalLink />
            </Button>
          </Link>
        </div>
      </div>
      <div id="Skills" className=" h-screen  mt-[20rem] md:mt-16 w-full ">
        <Biography />
      </div>

      <div id="Achievements" className=" h-screen mt-[30rem] md:mt-[10rem]">
        <Achievement />
      </div>
      <div className="  border-t-[2px] flex justify-around  text-white text-sm md:text-xl mt-[65rem] md:mt-[23rem] p-10">
        <h2>2025 © All Rights Reserved</h2>
        <h2>Crafted with ❤️ by Dev</h2>
      </div>
    </div>
  );
};

export default Page;
