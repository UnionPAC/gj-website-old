import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

export const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-28 max-w-[1400px] mx-auto my-4 px-6">
      {/* Top Nav Bar */}
      <a href="/">
        <h1 className="text-5xl p-6 font-extrabold font-shadowsIntoLight">
          Geoff Jamieson
        </h1>
      </a>

      <ul className="hidden font-karla text-[17px] md:flex">
        <li className="p-3 m-3 border-b-4 border-transparent hover:border-b-gray-200">
          <a href="#about">about</a>
        </li>
        <li className="p-3 m-3 border-b-4 border-transparent hover:border-b-gray-200 tracking-wider">
          <a href="#portfolio">portfolio</a>
        </li>
        <li className="p-3 m-3 border-b-4 border-transparent hover:border-b-gray-200 tracking-wider">
          <a href="https://blog.geoffjamieson.com/" target='_blank' rel="noreferrer">blog</a>
        </li>
        <li className="p-3 m-3 border-b-4 border-transparent hover:border-b-gray-200 tracking-wider">
          <a href="#interests">interests</a>
        </li>
        <li className="p-3 m-3 border-b-4 border-transparent hover:border-b-gray-200 tracking-wider">
          <a href="#contact">contact</a>
        </li>
      </ul>

      {}
      <div onClick={handleNav} className="block md:hidden">
        {nav ? (
          <AiOutlineClose
            size={25}
            className="fixed top-8 right-6 bg-black text-white rounded"
          />
        ) : (
          <AiOutlineMenu size={25} className="absolute top-8 right-6" />
        )}
      </div>

      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[80%] h-full bg-[#000300] text-white ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="text-4xl font-bold font-shadowsIntoLight m-8 text-center">
          Geoff Jamieson
        </h1>
        <ul className="font-karla text-center mx-8">
          <li className="p-6 border-b-2 border-gray-800">
            <a
              onClick={() => {
                setNav(!nav);
              }}
              href="#about"
            >
              About
            </a>
          </li>
          <li className="p-6 border-b-2 border-gray-800">
            <a
              onClick={() => {
                setNav(!nav);
              }}
              href="#portfolio"
            >
              Portfolio
            </a>
          </li>
          <li className="p-6 border-b-2 border-gray-800">
            <a
              onClick={() => {
                setNav(!nav);
              }}
              href="#blog"
            >
              Blog
            </a>
          </li>
          <li className="p-6 border-b-2 border-gray-800">
            <a
              onClick={() => {
                setNav(!nav);
              }}
              href="#interests"
            >
              Interests
            </a>
          </li>
          <li className="p-6 border-b-2 border-gray-800">
            <a
              onClick={() => {
                setNav(!nav);
              }}
              href="#contact"
            >
              Contact
            </a>
          </li>
          <div className="fixed bottom-4 w-[60%] p-2">
            <p className="text-2xl">👻 ⚡️</p>
            <p className="text-[13px] italic">
              Website created by Geoff Jamieson
            </p>
          </div>
        </ul>
      </div>
    </div>
  );
};
