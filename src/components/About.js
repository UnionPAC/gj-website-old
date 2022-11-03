import React from "react";
import coverImg from "../imgs/cover.jpeg";

export const About = () => {
  return (
    <div
      id="about"
      className="flex flex-col items-center p-4 md:p-8 font-karla"
    >
      <h3 className="text-3xl mt-4 font-medium pt-4 pb-10">About</h3>
      <div className="md:max-w-[800px]">
        <img
          src={coverImg}
          alt="Me hiking at Lake Louise 🇨🇦"
          className="md:max-w-[600px] mb-4 mx-auto shadow"
        />
        <p className=" p-6 leading-8 text-[14px] md:text-[16px] tracking-wider">
          I went to school for business & finance but after graduating realized
          that I was mostly interested in building and creating things 🛠 I built
          a startup called Koji Street, which was a marketplace for independent
          fashion designers and artists. I worked on that for about a year and a
          half until I felt like I was hitting a wall I couldn't overcome. I
          realized a huge issue in that startup was my lack of technical ability
          to build out product, so I decided to teach myself how to code.{" "}
          <br></br>I first learned Web Development and then decided that I
          wanted to be a builder in the CBW (Crypto, Blockchain and Web3) 🦄
          space because it was so innovative and fast paced! I have learned
          Solidity, hardhat and ethers.js, Chainlink, and many other awesome
          technologies along my way. So far, I have mainly built for EVM based
          chains like Ethereum mainnet, testnets, Polygon and more. <br></br>{" "}
          ⭐️ Right now my goal is to get a job in the CWB space as a Blockchain
          Developer or Solidity Engineer. Besides that I want to continue to
          solidify my Solidity & coding knowledge, work on side project ideas,
          and be more active in crypto/ web3 communities!
        </p>
      </div>
    </div>
  );
};
