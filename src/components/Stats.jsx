import React from "react";
import { stats } from "../constants";
import styles from "../style";

const Stats = () => (
  <section
    className={`${styles.flexCenter} ss:flex-row flex-col items-center sm:mb-20 mb-6`}
  >
    {stats.map((stat) => {
      return (
        <div
          key={stat.id}
          className={`flex-1 flex justify-start items-center md:flex-row flex-col py-3`}
        >
          <h4 className="font-poppins font-semibold xs:text-[40.89px] text-[30.89px] xs:leading-[53.16px] leading-[43.16px] text-white mr-4">
            {stat.value}
          </h4>
          <p className="font-poppins font-normal xs:text-[20.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px] uppercase text-gradient">
            {stat.title}
          </p>
        </div>
      );
    })}
  </section>
);

export default Stats;
