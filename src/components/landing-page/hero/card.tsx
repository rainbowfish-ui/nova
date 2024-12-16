import React from "react";

const Card = ({
  className,
  id,
  name,
}: {
  className?: string;
  id?: string;
  name: string;
}) => {
  return (
    <div
      className={`size-52 rounded-lg bg-gray-300 flex items-center justify-center shadow-md ${className}`}
      id={id}
    >
      {name}
    </div>
  );
};

export default Card;
