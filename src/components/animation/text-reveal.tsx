"use client";
import React from "react";
import { delay, motion } from "framer-motion";

const TextReveal = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={`relative overflow-hidden w-fit`}>
      <motion.div
        initial={{ opacity: 0, y: 75 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default TextReveal;
