import React from "react";
import styles from "../style";

const Button = ({ className }) => {
  return (
    <div
      className={` ${
        className || ""
      } font-poppins font-medium px-6 py-5 rounded-[10px] bg-blue-gradient text-lg text-primary cursor-pointer`}
    >
      Get Started
    </div>
  );
};

export default Button;
