"use client";
import React from "react";
import { motion } from "motion/react";

const TextReveal = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={`relative overflow-hidden`}>
      <motion.div
        initial={{ opacity: 0, y: 75 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="text-center flex items-center justify-center"
      >
        {children}
      </motion.div>
    </div>
  );
};

export default TextReveal;
