"use client";
import React from "react";
import { motion } from "motion/react";
import Card from "../landing-page/hero/card";
import HeroButtons from "./hero-buttons";

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
        <HeroButtons />
      </motion.div>
    </div>
  );
};

export default Cards;
