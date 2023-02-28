import React from "react";

export const Footer = () => {
  return (
    <div
      id="contact"
      className="flex flex-col md:flex-row-reverse md:justify-around  justify-center items-center bg-[#030303] py-4 text-white pb-8 md:pb-4"
    >
      <ul className="text-3xl pt-4 pb-10 md:pb-6">
        <a href="https://github.com/UnionPAC" target='_blank' rel="noreferrer">
          <i className="fa-brands fa-github px-2 md:mx-6 hover:scale-110" />
        </a>
        <a href="https://medium.com/@geoff_jamieson" target='_blank' rel="noreferrer">
          <i className="fa-brands fa-medium px-2 md:px-6 hover:scale-110" />
        </a>
        <a href="https://www.linkedin.com/in/geoff-jamieson-4b1b94255/" target='_blank' rel="noreferrer">
          <i className="fa-brands fa-linkedin px-2 md:px-6 hover:scale-110" />
        </a>
        <a href="https://twitter.com/unionpac_" target='_blank' rel="noreferrer">
          <i className="fa-brands fa-twitter px-2 md:px-6 hover:scale-110" />
        </a>
      </ul>
      <div className="flex justify-center items-center">
        <p className="text-[12px] lg:text-[15px] mb-2 md:mb-0 tracking-wide">
          Website built by Geoff Jamieson
        </p>
      </div>
    </div>
  );
};
