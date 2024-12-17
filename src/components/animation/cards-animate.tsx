"use client";
import React, { useEffect } from "react";
import CardPopup from "./card-popup";
import { useAnimate } from "motion/react";
import Cards from "./cards";

const CardsAnimate = () => {
  const [scope, animate] = useAnimate();

  const animationFrame = async ({ screenWidth }: { screenWidth: number }) => {
    await animate("#card-popup", { opacity: 1 }, { duration: 0.2 });
    await animate("#card-popup", { y: 200, rotate: -20 });
    await animate("#card-popup", { y: 0, rotate: -4 }, { duration: 0.5 });
    await animate("#card-popup", { scale: 1 }, { duration: 0.4 });
    animate("#card-popup", { opacity: 0 }, { duration: 0 });
    await animate("#cards-container", { opacity: 1 }, { duration: 0 });
    await animate("#cards-container", { opacity: 1 }, { duration: 0 });

    animate(
      "#card1",
      {
        y: 80,
        x: ((screenWidth / 2) * 70) / 100,
        rotate: 16,
        zIndex: 1,
      },
      { duration: 0.5 }
    );
    animate(
      "#card2",
      { y: 18, x: ((screenWidth / 2) * 42) / 100, rotate: 10 },
      { duration: 0.5 }
    );
    animate(
      "#card3",
      { y: -10, x: ((screenWidth / 2) * 14) / 100, rotate: 6 },
      { duration: 0.5 }
    );
    animate(
      "#card4",
      { y: -15, x: -((screenWidth / 2) * 14) / 100, rotate: -4 },
      { duration: 0.5 }
    );
    animate(
      "#card5",
      { y: 18, x: -((screenWidth / 2) * 42) / 100, rotate: -10 },
      { duration: 0.5 }
    );
    await animate(
      "#card6",
      { y: 80, x: -((screenWidth / 2) * 70) / 100, rotate: -20 },
      { duration: 0.5 }
    );
    animate("#get-started-button", { y: 250, opacity: 1 }, { duration: 0.5 });
    animate(
      "#explore-button",
      { y: 250, opacity: 1 },
      { duration: 0.5, delay: 0.3 }
    );
  };

  useEffect(() => {
    if (window !== undefined) animationFrame({ screenWidth: innerWidth });
  }, []);
  return (
    <div
      className="size-full relative flex items-start justify-center"
      ref={scope}
    >
      <CardPopup />
      <Cards />
    </div>
  );
};

export default CardsAnimate;
