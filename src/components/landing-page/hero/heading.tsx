import TextReveal from "@/components/animation/text-reveal";
import React from "react";

const Heading = () => {
  return (
    <div className="min-h-64 size-full flex items-center justify-center">
      <TextReveal>
        <h2 className="text-6xl text-center leading-tight drop-shadow-lg w-[70%] text-center">
          A place to display your masterpiece
        </h2>
      </TextReveal>
    </div>
  );
};

export default Heading;
