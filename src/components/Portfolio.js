import React from "react";
import picOfMe from '../imgs/cover.jpeg'

export const Portfolio = () => {
  return (
    <div id="portfolio" className="flex flex-col items-center font-karla">
      <h3 className="md:text-4xl mt-4 text-3xl mb-8">🗂 Portfolio</h3>
      <ul>
        <div className="w-[90%] mx-auto border-solid- border-2 p-2">
          <div>
            <img src={picOfMe} alt="picture of me" />
          </div>
          <div>
            <h3 className="text-center">Title</h3>
            <p>A description about how i made the project</p>
          </div>
        </div>
      </ul>
    </div>
  );
};
