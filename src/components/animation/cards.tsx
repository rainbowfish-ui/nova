"use client";
import React, { useEffect } from "react";
import CardPopup from "./card-popup";
import { motion, useAnimate } from "motion/react";

const Cards = () => {
  const [scope, animate] = useAnimate();

  const animationFrame = async () => {
    await animate("#card-popup", { y: 200, rotate: -20 });
    await animate("#card-popup", { y: 0, rotate: -4 }, { duration: 0.5 });
    await animate("#card-popup", { opacity: 0 }, { duration: 0 });
  };

  useEffect(() => {
    animationFrame();
  }, []);
  return (
    <div
      className="size-full relative flex items-start justify-center"
      ref={scope}
    >
      <CardPopup />
      <motion.div></motion.div>
    </div>
  );
};

export default Cards;
