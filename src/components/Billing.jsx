import React from "react";
import styles, { layout } from "../style";
import { bill, google, apple } from "../assets";

const Billing = () => {
  return (
    <div className={`${layout.section}`}>
      <div
        className={`${styles.flexCenter} md:justify-start w-[100%] md:w-[52%] relative`}
      >
        <div className="absolute z-[1] w-[60%] h-[60%] rounded-full pink__gradient md:blur-[350px] bottom-0 left-0 translate-x-[-60%]" />
        <img src={bill} alt="bill" className="md:w-[90%] w-[80%] z-[5]" />
      </div>
      <div className={`${layout.sectionInfo} mt-6 md:mt-0 md:pr-10 `}>
        <h2 className="font-poppins font-semibold text-[48px] leading-[76.8px] text-white">
          Easily control your <br /> billing & invoicing.
        </h2>
        <p className={`${styles.paragraph} max-w-[90%] mt-5`}>
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
          aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
          placerat.
        </p>
        <div className={`${styles.flexStart} mt-8`}>
          <img
            src={apple}
            alt="apple"
            className="w-[128.86px] h-[42.05px] cursor-pointer"
          />
          <img
            src={google}
            alt="google"
            className="w-[128.86px] h-[42.05px] ml-8 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Billing;
