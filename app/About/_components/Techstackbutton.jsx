"use client";

import React, { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const Techstackbutton = ({ data }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { threshold: 0.2 });
  const controls = useAnimation();

  const containerVariants = {
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
      className="grid grid-cols-2 px-5 w-full md:grid-cols-5 md:px-[5rem] gap-5"
    >
      {data?.map((tech, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.3,
          }}
          className="flex flex-col justify-center items-center gap-y-5 p-2 py-8 rounded-2xl border-gray-600 border-[0.5px] bg-gray-800 shadow-md cursor-pointer"
        >
          {tech?.name === "Express.js" ? (
            <h2 className="font-light text-4xl font-serif mt-3 text-gray-100">
              EX
            </h2>
          ) : (
            <img
              src={tech?.icon}
              alt={tech?.name}
              className="w-[3rem] h-[3rem]"
            />
          )}
          <h2 className="text-lg font-semibold text-white">{tech?.name}</h2>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Techstackbutton;
