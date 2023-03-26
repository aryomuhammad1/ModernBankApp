import React from "react";
import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";
import FeatureCard from "./FeatureCard";

const Business = () => {
  return (
    <section className={`${layout.section}`}>
      <div className={`${layout.sectionInfo} relative md:max-w-[45%]`}>
        <div className="absolute z-[1] w-[90%] h-[90%] rounded-full blue__gradient md:blur-[250px] bottom-0 left-0 translate-x-[-70%] translate-y-[80%]" />
        <div className="absolute z-[1] w-[45%] h-[45%] rounded-full blue__gradient md:blur-[250px] bottom-48 left-0 translate-x-[-85%] translate-y-[80%]" />
        <h2 className="font-poppins font-semibold text-[48px] leading-[76.8px] text-white">
          You do the business, we'll handle the money.
        </h2>
        <p className={`${styles.paragraph} md:max-w-[85%] w-full mt-5`}>
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>
        <Button className={"mt-8 z-[5]"} />
      </div>
      <div
        className={`flex-1 ${styles.flexStart} flex-col md:mt-0 mt-14 md:pl-16`}
      >
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
