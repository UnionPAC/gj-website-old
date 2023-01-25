import React from "react";
import abc from "../imgs/abc.jpeg";
import aguilas from "../imgs/aguilas.jpeg";
import alberta from "../imgs/alberta.jpeg";
import buddha from "../imgs/buddha.jpeg";
import india from "../imgs/india.jpeg";
import lumbini from "../imgs/lumbini.jpeg";
import picoNorte from "../imgs/pico-norte.jpeg";
import venice from "../imgs/venice.png";

export const Interests = () => {
  return (
    <div
      id="interests"
      className="flex flex-col items-center font-karla p-4 md:p-8 mb-[150px]"
    >
      <h3 className="mt-8 text-3xl mb-4 font-medium">Interests</h3>
      <p>Some of my favourite things to do!</p>
      <ul className="text-center my-4 max-w-[700px]">
        <li className="m-4 py-2 md:py-3 md:mb-6 px-8 md:px-20 bg-[#02C39A] text-white rounded-full">
          Climbing
        </li>
        <li className="m-4 py-2 md:py-3 md:mb-6 px-8 md:px-20 bg-[#00A896] text-white rounded-full">
          Traveling
        </li>
        <li className="m-4 py-2 md:py-3 md:mb-6 px-8 md:px-20 bg-[#028090] text-white rounded-full">
          Reading
        </li>
        <li className="m-4 py-2 md:py-3 md:mb-6 px-8 md:px-20 bg-[#05668D] text-white rounded-full">
          Guitar
        </li>
      </ul>
      <ul className="mt-6 p-4 mx-auto max-w-[700px] text-center">
        <li className="py-4">
          <span className="font-medium text-[17px] mr-2">
            📚 Favourite recent read:{" "}
          </span>
          1Q84 <span className="italic">(Haruki Murakami)</span>
        </li>
        <li className="py-4">
          <span className="font-medium text-[17px] mr-2">
            🎧 What i'm jamming rn:{" "}
          </span>
          King Buffalo {"&"} Clairo{" "}
        </li>
        <li className="py-4">
          <span className="font-medium text-[17px] mr-2">
            💭 Great memory:{" "}
          </span>
          Did a 2 month backpack trip through India, Nepal {"&"} Sri Lanka.
          While in Nepal, I trekked to the Annapurna Base Camp (ABC).
        </li>
      </ul>
      <div className="hidden lg:grid gap-4 grid-cols-4 grid-rows-2 items-end mt-[-80px] w-[70%]">
        <img src={lumbini} alt="Annapurna Base Camp" />
        <img src={aguilas} alt="" />
        <img src={alberta} alt="" />
        <img src={india} alt="" />
        <img src={venice} alt="" />
        <img src={buddha} alt="" />
        <img src={abc} alt="" />
        <img src={picoNorte} alt="" />
      </div>
    </div>
  );
};
