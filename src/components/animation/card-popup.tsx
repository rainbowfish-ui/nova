"use client";
import React from "react";
import { motion } from "motion/react";

const CardPopup = () => {
  return (
    <motion.div
      className={`absolute w-fit`}
      id="card-popup"
      initial={{ y: 200, rotate: -20 }}
    >
      <div>
        <div className="size-52 rounded-lg bg-gray-300"></div>
      </div>
    </motion.div>
  );
};

export default CardPopup;
