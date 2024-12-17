import TextReveal from "@/components/animation/text-reveal";
import React from "react";

const Heading = () => {
  return (
    <div className="min-h-64 size-full flex items-center justify-center">
      <TextReveal>
        <h2 className="text-6xl text-center leading-tight drop-shadow-lg">
          A place to display your <br /> masterpiece
        </h2>
      </TextReveal>
    </div>
  );
};

export default Heading;
