import React from "react";
import styles, { layout } from "../style";
import { feedback } from "../constants";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  return (
    <section className={`${styles.paddingY} mt-20`}>
      <div className="flex-1 flex md:flex-row flex-col ">
        <h2 className="font-poppins font-semibold text-[48px] leading-[76.8px] md:max-w-[45%] text-white md:pr-10 pr-0">
          What people are saying about us
        </h2>
        <div className={`${styles.flexStart} flex-col `}>
          <p
            className={`${styles.paragraph} md:max-w-[65%] w-full md:ml-16 md:mt-5`}
          >
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </p>
        </div>
      </div>
      <div className="flex-1 flex flex-wrap flex-row lg:gap-12 gap-0 md:mt-16 mt-10 z-[5] relative">
        <div className="absolute z-[1] w-[150%] md:h-[260%] h-[200%] rounded-full blue__gradient md:blur-[260px] xxs:blur-[300px] top-0 right-0 md:translate-x-[85%] translate-x-[55%] md:translate-y-[-40%] translate-y-[-35%]" />
        {feedback.map((feed) => {
          return (
            <TestimonialCard
              key={feed.id}
              content={feed.content}
              name={feed.name}
              title={feed.title}
              img={feed.img}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Testimonials;
