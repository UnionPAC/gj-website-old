import React from "react";
import kicks from "../imgs/kicks.png";
import habitTracker from "../imgs/habit-tracker.png";
import cryptoTracker from "../imgs/crypto-tracker.png";

export const Portfolio = () => {
  return (
    <div
      id="portfolio"
      className="flex flex-col items-center font-karla p-4 md:p-8"
    >
      <h3 className="mt-8 text-3xl mb-8 font-medium">Portfolio</h3>
      <p className="text-center text-[15px] md:text-[16px] pt-2 mb-6 max-w-[700px]">
        The thing that drives me the most about building is to be able to build
        something from nothing. I enjoy having a hand in the entire building
        process, front to back. Here are just a few of the projects i've built.
      </p>
      <p className="italic pb-4 text-sm text-center mb-4">
        Check my{" "}
        <a
          className="text-blue-600 underline"
          href="https://github.com/UnionPAC?tab=repositories"
        >
          Github
        </a>{" "}
        repos for more projects
      </p>
      <ul className="flex flex-col justify-center md:flex-row md:flex-wrap">
        {/* Card 1 */}
        <div className="mx-auto border-solid- border-2 m-4 max-w-[350px] md:mx-4 shadow-lg">
          <div>
            <img src={kicks} alt="KICKS E-commerce Shop" />
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-center text-2xl mt-6">
              KICKS: E-Commerce Shop
            </h3>
            <p className="text-[15px] p-6 text-center">
              A mock e-commerce platform for sneaker nerds! Built with Next.js,
              Material UI, Stripe for payments and Strapi for the backend.
            </p>
            <div className="">
              <a
                href="https://nextjs-kicks-ecommerce.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <button className="bg-blue-500 rounded px-4 py-2 my-4 mb-10 text-white">
                  View Project
                </button>
              </a>
              <a
                href="https://github.com/UnionPAC/nextjs-kicks-ecommerce"
                target="_blank"
                rel="noreferrer"
              >
                <button className="bg-gray-400 rounded px-4 py-2 my-4 mb-10 ml-5 text-white">
                  View Code
                </button>
              </a>
            </div>
          </div>
        </div>
        {/* Card 2 */}
        <div className="mx-auto border-solid- border-2 m-4 max-w-[350px] md:mx-4 shadow-lg">
          <div>
            <img src={habitTracker} alt="Habit Tracker" />
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-center text-2xl mt-6">Habit Tracker</h3>
            <p className="text-[15px] p-6 text-center">
              An application to help manage all of your habits, track your
              current and longest streaks and has user auth.
            </p>
            <div className="">
              <a
                href="https://habit-tracker-5ea4.onrender.com/login"
                target="_blank"
                rel="noreferrer"
              >
                <button className="bg-blue-500 rounded px-4 py-2 my-4 mb-10 text-white">
                  View Project
                </button>
              </a>
              <a
                href="https://github.com/UnionPAC/habit-tracker"
                target="_blank"
                rel="noreferrer"
              >
                <button className="bg-gray-400 rounded px-4 py-2 my-4 mb-10 ml-5 text-white">
                  View Code
                </button>
              </a>
            </div>
          </div>
        </div>
        {/* Card 3 */}
        <div className="mx-auto border-solid- border-2 m-4 max-w-[350px] md:mx-4 shadow-lg">
          <div>
            <img src={cryptoTracker} alt="Track the top 100 cryptocurrencies" />
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-center text-2xl mt-6">Crypto Tracker</h3>
            <p className="text-[15px] p-4 text-center">
              An app to track relevant financial info on the top 100
              cryptocurrencies using the CoinMarketCap API
            </p>
            <div className="">
              <a
                href="https://crypto-tracker-top-100.onrender.com/"
                target="_blank"
                rel="noreferrer"
              >
                <button className="bg-blue-500 rounded px-4 py-2 my-6 mb-10 text-white">
                  View Project
                </button>
              </a>
              <a
                href="https://github.com/UnionPAC/crypto-tracker"
                target="_blank"
                rel="noreferrer"
              >
                <button className="bg-gray-400 rounded px-4 py-2 my-4 mb-10 ml-5 text-white">
                  View Code
                </button>
              </a>
            </div>
          </div>
        </div>
      </ul>
    </div>
  );
};
