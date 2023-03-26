import React from "react";
import { logo, instagram, facebook, twitter, linkedin } from "../assets";
import styles from "../style";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <div className="pt-16">
      <div className="flex flex-1 flex-col ss:flex-row items-start py-8">
        <div>
          <img src={logo} alt="logo" />
          <p className={`${styles.paragraph} ss:max-w-[60%] mt-6 ss:mb-0 mb-8`}>
            A new way to make the payments easy, reliable and secure.
          </p>
        </div>
        <div
          className={`flex-[1.5] flex flex-wrap flex-row justify-between ss:min-w-[40%] w-full`}
        >
          {footerLinks.map((footerLink) => {
            return (
              <div className="lg:mb-0 mb-8">
                <p className={`${styles.paragraph} text-white`}>
                  {footerLink.title}
                </p>
                <ul className={`flex-1 ${styles.flexStart} flex-col mt-4`}>
                  {footerLink.links.map((link, index) => {
                    return (
                      <a
                        href={link.link}
                        className={`${styles.paragraph} xxs:text-[16px] ${
                          index !== footerLink.links.length - 1
                            ? "mb-2"
                            : "mb-0"
                        }`}
                      >
                        {link.name}
                      </a>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex-1 flex flex-row justify-between py-6 border-t-[1px] border-[#3F3E45]">
        <p className={`${styles.paragraph} mr-12`}>
          Copyright Ⓒ 2022 HooBank. All Rights Reserved.
        </p>
        <div className="flex flex-row flex-wrap">
          {socialMedia.map((socmed) => {
            return (
              <a href={`${socmed.link}`}>
                <img
                  src={`${socmed.icon}`}
                  alt={`${socmed.icon}`}
                  className="pr-8 cursor-pointer"
                />
              </a>
            );
          })}
          {/* <img
            src={instagram}
            alt="instagram"
            className="pr-8 cursor-pointer"
          />
          <img src={facebook} alt="facebook" className="pr-8 cursor-pointer" />
          <img src={twitter} alt="twitter" className="pr-8 cursor-pointer" />
          <img src={linkedin} alt="linkedin" className="pr-8 cursor-pointer" /> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
