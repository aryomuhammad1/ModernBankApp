import React from "react";
import styles, { layout } from "../style";
import { bill } from "../assets";

const Billing = () => {
  return (
    <div className={`${layout.section}`}>
      <img src={bill} alt="bill" className={`w-[600px]`} />
      <div className={`${layout.sectionInfo} ml-20 px-20`}>
        <h2 className="font-poppins font-semibold text-[48px] leading-[76.8px] text-white">
          Easily control your billing & invoicing.
        </h2>
        <p className={`${styles.paragraph} mt-5`}>
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
          aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
          placerat.
        </p>
      </div>
    </div>
  );
};

export default Billing;
