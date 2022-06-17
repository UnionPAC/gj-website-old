import React from "react";

export const Showcase = () => {
  return (
    <div
      id="showcase"
      className="font-karla flex flex-col items-center justify-center p-4 h-[400px] w-[100%]"
    >
      <h3 className="text-5xl mb-8">Hey, I'm Geoff 👋</h3>
      <ul className="list-disc w-[250px] md:w-[400px] md:ml-20">
        <li className="md:text-lg">Entrepreneur</li>
        <li className="md:text-lg">Blockchain Developer</li>
        <li className="md:text-lg">
          Super passionate about creating things and solving problems!
        </li>
      </ul>
    </div>
  );
};
