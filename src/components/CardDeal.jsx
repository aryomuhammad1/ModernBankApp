import React from "react";
import styles, { layout } from "../style";
import { card } from "../assets";
import Button from "./Button";

const CardDeal = () => {
  return (
    <section className={`${layout.section}`}>
      <div className={`${layout.sectionInfo} mt-14 ss:mt-0 md:max-w-[45%]`}>
        <h2 className="font-poppins font-semibold text-[48px] leading-[76.8px] text-white">
          Find a better card deal in few easy steps.
        </h2>
        <p className={`${styles.paragraph} md:max-w-[80%] w-full mt-5`}>
          Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
          aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
        </p>
        <Button className={"mt-8 z-[5]"} />
      </div>
      <div
        className={`${styles.flexCenter} md:justify-start w-[100%] md:w-[48%] md:pl-20`}
      >
        <img src={card} alt="card" className="md:w-[90%] w-[80%]" />
      </div>
    </section>
  );
};

export default CardDeal;
