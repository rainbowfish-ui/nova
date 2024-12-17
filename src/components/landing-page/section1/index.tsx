import React from "react";
import { Meow_Script } from "next/font/google";
import Image from "next/image";

const meowScript = Meow_Script({
  weight: ["400"],
  subsets: ["latin"],
});

const Section1 = () => {
  return (
    <div className="h-fit w-full flex items-center justify-start flex-col">
      <div
        className={`w-full min-h-96 flex items-center justify-center flex-col px-40 ${meowScript.className}`}
      >
        <div className="w-full h-72 flex items-center justify-center gap-6 -rotate-3 translate-y-10 translate-x-16">
          <div className="bg-gray-100 w-96 h-full rounded-lg shadow-xl border p-1">
            <Image
              src="/web7.webp"
              width={1}
              height={1}
              alt="phone1"
              className="size-full object-cover rounded-md"
            />
          </div>
          <div className="w-[50%] h-full rounded-md flex items-start justify-start">
            <p className="w-[60%] text-2xl drop-shadow-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
              pariatur!
            </p>
          </div>
        </div>
        <div className="w-full h-72 flex items-center justify-center gap-6 rotate-3  -translate-x-16 -translate-y-10">
          <div className="w-[50%] h-full rounded-md flex items-end justify-end ">
            <p className="w-[60%] text-2xl drop-shadow-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
              pariatur!
            </p>
          </div>
          <div className="bg-gray-100 w-96 h-full rounded-lg shadow-xl border p-1">
            <Image
              src="/web8.webp"
              width={1}
              height={1}
              alt="phone1"
              className="size-full object-fill rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
