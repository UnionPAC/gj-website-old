import React from "react";
import nftMarketplace from "../imgs/nft-marketplace.png";
import smartLottery from "../imgs/smart-lottery.png";
import todoList from "../imgs/todo-list.png";

export const Portfolio = () => {
  return (
    <div
      id="portfolio"
      className="flex flex-col items-center font-karla p-4 md:p-8"
    >
      <h3 className="mt-8 text-3xl mb-8 font-medium">Portfolio</h3>
      <p className="text-center text-[15px] md:text-[16px] pt-2 mb-6 max-w-[700px]">
        I've built a lot of things in the blockchain space ranging from NFT
        games to DeFi applications - like a DeFi staking app. Here are just a
        few of the projects i've built.
      </p>
      <p className="italic pb-4 text-sm text-center">
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
            <img src={nftMarketplace} alt="NFT Marketplace" />
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-center text-2xl mt-6">NFT Marketplace</h3>
            <p className="text-[15px] p-4 text-center">
              A place to buy and sell your favourite NFT's .. sign up and start
              listing NFTs now!
            </p>
            <div className="">
              <a
                href="https://nextjs-nft-marketplace-the-graph.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <button className="bg-blue-500 rounded px-4 py-2 my-6 text-white">
                  View Project
                </button>
              </a>
            </div>
          </div>
        </div>
        {/* Card 2 */}
        <div className="mx-auto border-solid- border-2 m-4 max-w-[350px] md:mx-4 shadow-lg">
          <div>
            <img src={smartLottery} alt="Decentralized Smart Lottery" />
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-center text-2xl mt-6">Smart Lottery</h3>
            <p className="text-[15px] p-4 text-center">
              A decentralized smart lottery that picks a random winner every
              hour, forever!
            </p>
            <div className="">
              <a
                href="https://snowy-haze-8992.on.fleek.co/"
                target="_blank"
                rel="noreferrer"
              >
                <button className="bg-blue-500 rounded px-4 py-2 my-6 text-white">
                  View Project
                </button>
              </a>
            </div>
          </div>
        </div>
        {/* Card 3 */}
        <div className="mx-auto border-solid- border-2 m-4 max-w-[350px] md:mx-4 shadow-lg">
          <div>
            <img src={todoList} alt="Mango Name Service (MNS)" />
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-center text-2xl mt-6 p-4">Web3 To-do List</h3>
            <p className="text-[15px] p-4 text-center">
              A classic to-do list but with a web3 twist. Has all create, read,
              update and delete functionality.
            </p>
            <div className="">
              <a
                href="https://web3-to-do-list.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <button className="bg-blue-500 rounded px-4 py-2 my-6 text-white">
                  View Project
                </button>
              </a>
            </div>
          </div>
        </div>
      </ul>
    </div>
  );
};
