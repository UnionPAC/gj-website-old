import React from "react";

export const Footer = () => {
  return (
    <div
      id="contact"
      className="flex flex-col md:flex-row-reverse md:justify-around  justify-center items-center bg-[#030303] py-6 text-white pb-8 md:pb-4"
    >
      <ul className="text-3xl pt-4 pb-10 md:pb-6">
        <a href="https://github.com/UnionPAC">
          <i className="fa-brands fa-github px-2 md:mx-6 hover:scale-110" />
        </a>
        <a href="https://medium.com/@geoff_jamieson">
          <i className="fa-brands fa-medium px-2 md:px-6 hover:scale-110" />
        </a>
        <a href="https://www.linkedin.com/in/geoff-jamieson-815175216/">
          <i className="fa-brands fa-linkedin px-2 md:px-6 hover:scale-110" />
        </a>
        <a href="https://twitter.com/unionpac_">
          <i className="fa-brands fa-twitter px-2 md:px-6 hover:scale-110" />
        </a>
      </ul>
      <div className="flex justify-center items-center">
        <p className="text-[12px] lg:text-[14px] mb-2 md:mb-0">
          Website built by Geoff Jamieson
        </p>
      </div>
    </div>
  );
};
