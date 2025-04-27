"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";

function Navbar() {
  const [toggle, setToggle] = useState(false);
  const path = usePathname();

  return (
    <div className="w-full text-white bg-black flex font-medium justify-between items-center pt-10 px-10">
      <div className=" hidden md:block ">
        <div className="flex items-center justify-center gap-10 ml-20">
          {["Home", "Skills", "Projects", "Achievements"].map((val, ind) => {
            return (
              <Link
                href={"#" + val}
                key={ind}
                className={`${
                  path != "/" + val
                    ? " hover: underline-slide  "
                    : "underline decoration-2"
                } `}
              >
                {val == "Projects" ? (
                  <li className="flex cursor-pointer  hover:scale-105 transition-all  items-center font-medium  justify-center gap-1.5">
                    <motion.div
                      className=" w-2 h-2 bg-green-500 rounded-full shadow-lg pointer-events-none"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.8, 1, 0.8],
                      }}
                      transition={{
                        duration: 0.6,
                        repeat: Infinity,
                        repeatType: "loop",
                      }}
                    />
                    <h2> {val}</h2>
                  </li>
                ) : (
                  <>
                    <h2 className=" ">{val}</h2>
                  </>
                )}
              </Link>
            );
          })}
        </div>
      </div>

      <div className="hidden md:block">
        <div className="flex justify-center items-center gap-10">
          <Link href={"https://www.linkedin.com/in/dev-bandil"}>
            <img
              src="/linkedin.svg"
              alt=""
              className="w-10 cursor-pointer bg-white rounded-xl hover:-translate-y-2 transition-all"
            />
          </Link>
          <Link href={"https://www.github.com/devbandil12"}>
            <img
              src="/github.svg"
              alt=""
              className="w-10 cursor-pointer  bg-white rounded-full border border-white hover:-translate-y-2 transition-all"
            />
          </Link>
        </div>
      </div>
      <div className="block md:hidden underline"></div>
    </div>
  );
}

export default Navbar;

export function Typewriter({ text = "", speed = 100 }) {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [index, text, speed]);

  return (
    <div className="text-3xl font-bold text-white ">
      {displayedText.substring(0, 11)}
      <span className=" text-blue-500">
        {" "}
        {displayedText.substring(11, 24)}
        {"    "}
      </span>
      <span className="animate-pulse text-2xl text-blue-500">|</span>
    </div>
  );
}
