import Link from "next/link";
import React from "react";

const items = [
  {
    name: "Pricing",
    route: "#",
  },
  {
    name: "Contact",
    route: "#",
  },
  {
    name: "Solution",
    route: "#",
  },
  {
    name: "E-commerce",
    route: "#",
  },
];

const NavItems = () => {
  return (
    <div className="h-full flex items-center gap-10">
      {items.map(({ name, route }) => {
        return (
          <Link href={route} key={name}>
            {name}
          </Link>
        );
      })}
    </div>
  );
};

export default NavItems;
