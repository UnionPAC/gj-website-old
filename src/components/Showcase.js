import React from "react";

export const Showcase = () => {
  return (
    <div
      id="showcase"
      className="font-karla flex flex-col items-center justify-center p-4 h-[400px] w-[100%]"
    >
      <h3 className="text-5xl mb-10">Hey, I'm Geoff 👋</h3>
      <ul className="list-disc w-[250px] md:w-[400px] md:ml-20">
        <li className="md:text-lg pb-2">startup founder</li>
        <li className="md:text-lg pb-2">web developer</li>
        <li className="md:text-lg pb-2">blockchain enthusiast</li>
        <li className="md:text-lg pb-2">
          super passionate about building things!
        </li>
      </ul>
    </div>
  );
};
