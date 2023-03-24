import React from "react";
import styles from "../style";

const Button = (props) => {
  return (
    <div className="font-poppins font-medium px-5 py-4 rounded-[10px] bg-blue-gradient text-primary mt-8 z-[5">
      {props.text}
    </div>
  );
};

export default Button;
