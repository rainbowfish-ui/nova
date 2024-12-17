"use client";
import React from "react";
import { motion } from "motion/react";
import Card from "../landing-page/hero/card";
import { BsArrowRight } from "react-icons/bs";

const cards = [
  { name: "card1", imageUrl: "/web1.webp" },
  { name: "card2", imageUrl: "/web2.webp" },
  { name: "card3", imageUrl: "/web3.webp" },
  { name: "card4", imageUrl: "/web4.webp" },
  { name: "card5", imageUrl: "/web5.webp" },
  { name: "card6", imageUrl: "/web6.webp" },
];

const Cards = () => {
  return (
    <div className="size-full relative flex items-end justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        id="cards-container"
        className="flex w-full h-fit relative justify-center"
      >
        {cards.reverse().map(({ imageUrl, name }) => {
          return (
            <Card
              className="absolute rotate-[-4deg]"
              id={name}
              name={name}
              imageUrl={imageUrl}
              key={name}
            />
          );
        })}

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
      </motion.div>
    </div>
  );
};

export default Cards;
