import React from "react";
import styles from "../style";

const FeatureCard = ({ icon, title, content }) => {
  return (
    <div
      className={`flex-1 ${styles.flexCenter} flex-row flew-nowrap p-4 feature-card rounded-[20px] md:w-[570px] w-full mb-1`}
    >
      <div className={`${styles.flexCenter} p-5 rounded-full bg-dimBlue`}>
        <img
          src={`${icon}`}
          alt={`${icon}`}
          className="max-w-[38.4px] max-h-[38.4px] "
        />
      </div>
      <div className={`${styles.paragraph} ml-6`}>
        <p className="font-semibold text-white">{title}</p>
        <p className="text-[16px]">{content}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
