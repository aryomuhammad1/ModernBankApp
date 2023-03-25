import React from "react";
import styles, { layout } from "../style";
import { feedback } from "../constants";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  return (
    <section className={`${styles.paddingY} mt-20`}>
      <div className="flex-1 flex flex-row ">
        <h2 className="font-poppins font-semibold text-[48px] leading-[76.8px] max-w-[45%] text-white pr-10">
          What people are saying about us
        </h2>
        <div className={`${styles.flexStart} flex-col `}>
          <p className={`${styles.paragraph} md:max-w-[80%] w-full mt-5`}>
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </p>
        </div>
      </div>
      <div className="flex-1 flex flex-row gap-8 mt-14 z-[5] relative">
        <div className="absolute z-[1] w-[100%] h-[260%] rounded-full blue__gradient md:blur-[200px] top-0 right-0 translate-x-[85%] translate-y-[-50%]" />
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
