"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SparklesText from "@/components/Stars";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const Achievement = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const isInView1 = useInView(ref1, { once: true });
  const isInView2 = useInView(ref2, { once: true });
  const isInView3 = useInView(ref3, { once: true });

  return (
    <div className="p-10 bg-black text-white">
      {/* Heading */}
      <motion.div
        className="relative flex items-center justify-center"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
      >
        <SparklesText
          text="Achievements"
          className="p-5 text-white"
          Crown={true}
        />
      </motion.div>

      {/* First Achievement Block */}
      <motion.div
        ref={ref1}
        className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10"
        initial="hidden"
        whileInView={isInView1 ? "visible" : "hidden"}
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        <motion.div variants={fadeInUp}>
          <h2 className="text-2xl rounded-xl p-2 text-slate-200 w-fit underline-wave">
            🎓 Bhopal Award
          </h2>
          <ul className="list-disc text-xl my-5 pl-5 text-slate-100 space-y-2">
            <li>Scored 93% in 10th-grade board exams (Bhopal Board).</li>
            <li>Awarded for sincerity by my school.</li>
            <li>Secured 89% in 12th-grade Bhopal Board exams.</li>
            <li>Demonstrated consistent academic dedication.</li>
          </ul>
        </motion.div>

        <motion.div
          className="w-80 h-80 lg:ml-56 border-white border-[0.2rem] rounded-full grid place-items-center"
          variants={fadeInUp}
        >
          <img src="/hero.png" alt="" className="w-72 h-72 rounded-full" />
        </motion.div>
      </motion.div>

      {/* Second Achievement Block */}
      <motion.div
        ref={ref2}
        className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-20"
        initial="hidden"
        whileInView={isInView2 ? "visible" : "hidden"}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.3,
            },
          },
        }}
      >
        {/* Desktop Image */}
        <motion.div
          className="hidden md:grid w-80 h-80 border-white border-[0.2rem] rounded-full place-items-center"
          variants={fadeInUp}
        >
          <img
            src="/achieve.png"
            alt="Achievement"
            className="w-72 h-72 object-cover rounded-full"
          />
        </motion.div>

        {/* Content */}
        <motion.div className="my-10" variants={fadeInUp}>
          <h2 className="text-2xl text-slate-200 my-2 underline underline-offset-4 decoration-blue-500">
            📸 Content Creation Award
          </h2>
          <p className="text-slate-200 leading-relaxed">
            Built a creative community of 200,000+ followers through engaging
            content. Though I stepped back for academics, the experience taught
            me storytelling, engagement, and consistency. A chapter that shaped
            my creative journey.
          </p>

          {/* Mobile Image */}
          <div className="block md:hidden mt-10">
            <div className="w-80 h-80 border-white border-[0.2rem] rounded-full grid place-items-center">
              <img
                src="/achieve.png"
                alt="Achievement"
                className="w-72 h-72 object-cover rounded-full"
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Achievement;
