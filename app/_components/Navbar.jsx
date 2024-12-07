"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";

function Navbar() {
  const [toggle, setToggle] = useState(false);
  const path = usePathname();

  console.log(path);

  return (
    <div className="w-full text-white  flex font-medium justify-between items-center pt-10 px-10">
      <div className=" hidden md:block ">
        <div className="flex items-center justify-center gap-10 ml-20">
          {["Home", "About", "Projects", "Achievements"].map((val, ind) => {
            return (
              <Link
                href={"/" + val}
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
      <div className="block md:hidden">
        <button
          className="w-12 h-12 bg-gray-700 rounded-lg flex justify-center items-center"
          onClick={() => setToggle(true)}
        >
          <HiMenuAlt4 className="text-2xl text-white" />
        </button>

        {/* Sliding Menu */}
        {toggle && (
          <motion.div
            className="fixed inset-0 bg-gray-800 bg-opacity-90 flex flex-col items-center justify-center z-50"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {/* Close Button */}
            <button
              className="absolute top-5 right-5 w-12 h-12 bg-gray-700 rounded-lg flex justify-center items-center"
              onClick={() => setToggle(false)}
            >
              <HiX className="text-2xl text-white" />
            </button>

            {/* Navigation Links */}
            <ul className="flex flex-col items-center gap-8 text-lg text-white">
              {["Home", "About", "Projects", "Contact"].map((item, index) => (
                <li key={index}>
                  <a
                    href={`/${item}`}
                    onClick={() => setToggle(false)}
                    className="hover:text-green-400 transition"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>

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
            className="w-10 cursor-pointer  bg-white rounded-full border border-white hover:translate-y-2 transition-all"
          />
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
