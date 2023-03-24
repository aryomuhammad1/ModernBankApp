import React from "react";
import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";
import FeatureCard from "./FeatureCard";

const Business = () => {
  return (
    <section className={`${layout.section}`}>
      <div className={`${layout.sectionInfo} `}>
        <h2 className="font-poppins font-semibold text-[48px] leading-[76.8px] text-white">
          You do the business,
          <br /> we'll handle the money.
        </h2>
        <p className={`${styles.paragraph} md:max-w-[85%] w-full mt-5`}>
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>
        <Button text="Get Started" />
      </div>
      <div className={`flex-1 ${styles.flexStart} flex-col md:mt-0 mt-14`}>
        {features.map((feature) => {
          return (
            <FeatureCard
              key={feature.id}
              icon={feature.icon}
              title={feature.title}
              content={feature.content}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Business;
