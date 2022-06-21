import React from "react";
import lonelyGhost from "../imgs/lonelyghost.png";
import bubbles from "../imgs/bubbles.png";
import mns from "../imgs/mns.png";

export const Portfolio = () => {
  return (
    <div id="portfolio" className="flex flex-col items-center font-karla p-4 md:p-8">
      <h3 className="mt-8 text-3xl mb-8 font-medium">Portfolio</h3>
      <p className="text-center text-[15px] md:text-[16px] pt-2 mb-6 max-w-[750px]">
        I've built a lot of things in the blockchain space ranging from NFT games to
        DeFi applications like a DeFi staking app. Here are just a few of the project
        i've built.
      </p>
      <p className="italic pb-4 text-sm text-center">Note: Check my Github profile below for more projects</p>
      <ul className="flex flex-col justify-center md:flex-row md:flex-wrap">
        {/* Card 1 */}
        <div className="mx-auto border-solid- border-2 m-4 max-w-[350px] md:mx-4 shadow-lg">
          <div>
            <img src={lonelyGhost} alt="Lonely Ghost NFT Collection" />
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-center text-2xl mt-6">Lonely Ghosts</h3>
            <p className="text-[15px] p-4 text-center">
              An NFT collection of 1,000 cute lil' lonely ghosts. Adobe
              Illustrator used for the artwork, Hashlips Art Engine used to
              create random ghosts and IPFS for NFT storage.
            </p>
            <div className="">
              <a href="https://www.lonelyghosts.xyz/" target="_blank" rel="noreferrer">
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
            <img src={bubbles} alt="Bubbles of Polygon NFT Collection" />
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-center text-2xl mt-6">Bubbles of Polygon</h3>
            <p className="text-[15px] p-4 text-center">
              A quick build to learn more about randomness on the blockchain,
              get comfortable with Chainlink VRF, building on-chain svgs, and of
              course having some fun randomly generating some cool looking
              bubbles! 🧼⚡️🙂
            </p>
            <div className="">
              <a href="https://opensea.io/collection/bubbles-of-polygon" target="_blank" rel="noreferrer">
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
            <img src={mns} alt="Mango Name Service (MNS)" />
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-center text-2xl mt-6 p-4">
              Mango Name Service (MNS)
            </h3>
            <p className="text-[15px] p-4 text-center">
              A project inspired by Ethereum Name Service (ENS). Mint your
              .mango domain on the Polygon Mumbai testnet now!
            </p>
            <div className="">
              <a href="https://dns-dapp.vercel.app/" target="_blank" rel="noreferrer">
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
