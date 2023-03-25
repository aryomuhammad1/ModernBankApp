import React from "react";
import styles from "../style";
import { quotes } from "../assets";

const TestimonialCard = ({ content, name, title, img }) => {
  return (
    <div
      className={`${styles.flexStart} flex-col feature-card rounded-[20px] py-16 px-10`}
    >
      <img src={quotes} alt="quotes" className="w-[42.6px] h-[27.6px]" />
      <p
        className={`${styles.paragraph} max-w-[290px] min-h-[128px] mt-8 text-white`}
      >
        {content}
      </p>
      <div className="flex flex-row mt-6">
        <img src={img} alt="profile" className="w-[62px] h-[62px]" />
        <div className={`${styles.flexStart} flex-col ml-4`}>
          <p className={`${styles.paragraph} text-white text-xl`}>{name}</p>
          <p className={`${styles.paragraph} text-base`}>{title}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
