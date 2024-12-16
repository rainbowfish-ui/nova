"use client";
import React from "react";
import { motion } from "motion/react";
import Card from "../landing-page/hero/card";

const CardPopup = () => {
  return (
    <motion.div
      className={`absolute w-fit`}
      id="card-popup"
      initial={{ y: 200, rotate: -20, scale: 1.05 }}
    >
      <Card name="card1" />
    </motion.div>
  );
};

export default CardPopup;
