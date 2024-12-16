"use client";
import React from "react";
import { motion } from "motion/react";
import Card from "../landing-page/hero/card";

const Cards = () => {
  return (
    <div className="size-full relative flex items-start justify-center bg-red-500">
      <motion.div
        initial={{ opacity: 0 }}
        id="cards-container"
        className="flex size-full relative bg-red-50 justify-center"
      >
        <Card className="absolute rotate-[-4deg]" id="card6" name="card6" />
        <Card className="absolute rotate-[-4deg]" id="card5" name="card5" />
        <Card className="absolute rotate-[-4deg]" id="card4" name="card4" />
        <Card className="absolute rotate-[-4deg]" id="card3" name="card3" />
        <Card className="absolute rotate-[-4deg]" id="card2" name="card2" />
        <Card className="absolute rotate-[-4deg]" id="card1" name="card1" />
      </motion.div>
    </div>
  );
};

export default Cards;
