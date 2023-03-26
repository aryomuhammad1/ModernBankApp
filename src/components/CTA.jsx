import React from "react";
import styles from "../style";
import Button from "./Button";

const CTA = () => {
  return (
    <section
      className={`${styles.paddingY} ${styles.flexCenter} ss:flex-row flex-col lg:gap-48 gap-10 bg-black-gradient-2 rounded-[20px] my-16`}
    >
      <div className="ss:max-w-[50%] max-w-[85%]">
        <h2 className="font-poppins font-semibold text-[48px] leading-[76.8px] text-white">
          Let's try our service now!
        </h2>
        <p className={`${styles.paragraph} md:max-w-[75%] w-full mt-5`}>
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
      <div className={`${styles.flexCenter} flex-col`}>
        <Button />
      </div>
    </section>
  );
};

export default CTA;
