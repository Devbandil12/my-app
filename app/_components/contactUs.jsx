"use client";
import { Mail, Github, Linkedin } from "lucide-react";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const ContactMe = () => {
  return (
    <div className="w-full py-20 bg-black text-white flex flex-col items-center gap-6">
      <div>
        <h2 className="text-3xl md:text-5xl font-bold text-center">
          Contact <span className="text-blue-500">Me</span>
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
      <p className="text-gray-400 text-center max-w-lg">
        I am always open to new opportunities, collaborations, and freelance
        work. Reach out to me through any of the platforms below.
      </p>

      <div className="flex gap-6 mt-4">
        {[
          {
            href: "mailto:devbandil120@gmail.com?subject=Hello&body=I%20would%20like%20to%20connect%20with%20you.",
            icon: <Mail size={24} />,
            label: "Email",
          },
          {
            href: "https://github.com/devbandil12",
            icon: <Github size={24} />,
            label: "GitHub",
          },
          {
            href: "https://www.linkedin.com/in/devbandil",
            icon: <Linkedin size={24} />,
            label: "LinkedIn",
          },
        ].map((item, index) => (
          <Link
            key={index}
            href={item.href}
            target="_blank"
            aria-label={item.label}
          >
            <div className="p-4 rounded-full bg-white text-black hover:scale-110 transition-all duration-300 cursor-pointer group relative">
              <div className="absolute inset-0 rounded-full  opacity-0 group-hover:opacity-100 transition-all duration-300 bg-blue-500"></div>
              <div className="relative z-10 group-hover:text-white">
                {item.icon}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ContactMe;
