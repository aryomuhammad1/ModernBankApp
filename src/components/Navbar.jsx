import React from "react";

import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  return (
    <nav className="w-full py-6 flex justify-between items-center navbar">
      <img src={logo} alt="HooBank" className="w-[124px] h-[32px]" />
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => {
          return (
            <li
              key={nav.id}
              className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${
                index === navLinks.length - 1 ? "mr-0" : "mr-10"
              }`}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
