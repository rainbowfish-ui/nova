import Image from "next/image";
import React from "react";

const Card = ({
  className,
  id,
  imageUrl,
  name,
}: {
  className?: string;
  id?: string;
  imageUrl: string;
  name: string;
}) => {
  return (
    <div
      className={`w-52 h-40 p-1 rounded-lg bg-gray-100 overflow-hidden flex items-center justify-center shadow-md ${className} border`}
      id={id}
    >
      <Image
        src={imageUrl}
        alt={name}
        width={1}
        height={1}
        className="size-full object-cover rounded-md"
      />
    </div>
  );
};

export default Card;
