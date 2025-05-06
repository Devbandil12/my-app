"use client";
import React from "react";
import Techstackbutton from "./Techstackbutton";
import { motion } from "framer-motion";
import { StarsIcon } from "lucide-react";
function Biography() {
  const Backend = [
    { name: "Javascript", icon: "/js.jfif" },
    { name: "React.js", icon: "/react.webp" },
    { name: "Next.js", icon: "/nextwhite.webp" },
    { name: "Tailwind CSS", icon: "/tailwind.svg" },
    { name: "SQL", icon: "/sql.svg" },
    { name: "Node.js", icon: "/nodejs.webp" },
    { name: "MongoDB", icon: "/mongodb.webp" },
    { name: "Express.js", icon: "/express.webp" },
    { name: "Redux", icon: "/redux.webp" },
    { name: "Git", icon: "/github.svg" },
    { name: "Docker", icon: "/docker-icon.webp" },
    { name: "Postman", icon: "/postman.webp" },
    { name: "GSAP", icon: "/Gsap.webp" },
  ];

  return (
    <div className=" h-screen w-full mt-[30rem] md:mt-[20rem]  text-white">
      {/* Biography Section */}

      {/* Tech Stack Section */}

      <div className=" mb-5 flex items-center justify-center flex-col ">
        <div className=" w-fitmt-[10rem] mb-3 ">
          <h2 className="text-2xl md:text-5xl w-full  font-bold text-center">
            MY <span className=" text-blue-500">Skills</span>
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
            className=" h-[5px] mt-1  bg-blue-500 w-full md:-ml-[1.5rem] -ml-[0.7rem]"
          ></motion.div>
        </div>

        <p className=" flex items-center justify-center gap-3 text-gray-400 mb-5">
          Here are some skills in which i am pro <StarsIcon />
        </p>
      </div>

      <Techstackbutton data={Backend} />
    </div>
  );
}

export default Biography;
