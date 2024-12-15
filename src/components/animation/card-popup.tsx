"use client";
import React from "react";
import { motion } from "motion/react";

const CardPopup = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={`relative w-fit`}>
      <motion.div
        initial={{ y: 200, rotate: -20 }}
        animate={{ y: 0, rotate: -4 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default CardPopup;
