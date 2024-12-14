import React from "react";
import Logo from "./logo";
import NavItems from "./navitems";
import SigninButton from "./signin-button";

const Navbar = () => {
  return (
    <div className="w-full h-12 flex items-center justify-between px-20 sticky top-0">
      <Logo />
      <NavItems />
      <SigninButton />
    </div>
  );
};

export default Navbar;
