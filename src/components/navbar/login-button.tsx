import Link from "next/link";
import React from "react";
import { RiLoginCircleFill } from "react-icons/ri";

const LoginButton = () => {
  return (
    <Link href="#" className="px-6 py-1 flex items-center gap-1">
      <RiLoginCircleFill />
      login
    </Link>
  );
};

export default LoginButton;
