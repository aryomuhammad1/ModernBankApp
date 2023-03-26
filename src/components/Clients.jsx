import React from "react";
import { airbnb, binance, coinbase, dropbox } from "../assets";
import styles from "../style";

const Clients = () => {
  return (
    <section className="flex-1 flex ss:flex-row flex-col gap-14 justify-around items-center py-12">
      <img
        src={airbnb}
        alt="airbnb"
        className="md:w-[192.25px] sm:w-[135px] ss:w-[100px] w-[150px]"
      />
      <img
        src={binance}
        alt="binance"
        className="md:w-[192.25px] sm:w-[135px] ss:w-[100px] w-[150px]"
      />
      <img
        src={coinbase}
        alt="coinbase"
        className="md:w-[192.25px] sm:w-[135px] ss:w-[100px] w-[150px]"
      />
      <img
        src={dropbox}
        alt="dropbox"
        className="md:w-[192.25px] sm:w-[135px] ss:w-[100px] w-[150px]"
      />
    </section>
  );
};

export default Clients;
