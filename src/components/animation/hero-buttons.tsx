"use client";
import React from "react";
import { motion } from "motion/react";
import { BsArrowRight } from "react-icons/bs";
import TextReveal from "./text-reveal";

const HeroButtons = () => {
  return (
    <div className="size-full flex flex-col items-center justify-center">
      <div className="flex items-center justify-center gap-4">
        <motion.button
          className="bg-[#2c2c2c] text-white z-10 px-10 py-1.5 rounded-full"
          type="button"
          id="get-started-button"
          initial={{ opacity: 0, y: 200 }}
        >
          Get Started
        </motion.button>
        <motion.button
          className="bg-[#f6f6f6] z-10 pl-10 pr-5 py-1.5 rounded-full ml-4 flex items-center justify-center gap-4"
          type="button"
          id="explore-button"
          initial={{ opacity: 0, y: 200 }}
        >
          Explore
          <span className="p-1.5 rounded-full bg-[#2c2c2c] text-white">
            <BsArrowRight />
          </span>
        </motion.button>
      </div>
      <motion.div id="subtitle" initial={{ y: 150, opacity: 0 }}>
        <TextReveal>
          <p className="text-xs text-center">
            The first step in crafting the life you want is to get rid of
            everything you don't.
          </p>
        </TextReveal>
      </motion.div>
    </div>
  );
};

export default HeroButtons;
