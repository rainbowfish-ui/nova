import CardPopup from "@/components/animation/card-popup";
import React from "react";

const CardsContainer = () => {
  return (
    <div className="min-h-96 flex items-start justify-center">
      <CardPopup>
        <div className="size-52 rounded-lg bg-gray-300"></div>
      </CardPopup>
    </div>
  );
};

export default CardsContainer;
