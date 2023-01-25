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
        <p className="pt-6 p-2 leading-8 text-[14px] md:text-[16px] tracking-wider">
          Above everything else, I have a passion for creating things. I
          absolutely love the adventure and sense of satisfaction that comes
          along with the process of building; to see something come to life,
          when previously there was nothing.
        </p>
        <p className=" p-2 leading-8 text-[14px] md:text-[16px] tracking-wider">
          When I was little I wanted to be an inventor, but now seeing that such
          a profession is a rarity these days, I had to find my version of a
          modern inventor. For me, this was the entrepreneur or startup founder. While I
          do have certain specialized skills, I am, at heart, a generalist. I
          have always been curious and relentlessly asking why, often at the
          expense of others' sanity. Whatever the project, I take interest in
          all the elements that go into it, because to me it is important to see
          the big picture; how everything works together.
        </p>
        <p className=" p-2 leading-8 text-[14px] md:text-[16px] tracking-wider">
          I studied business and finance at university. Afterwards, I started my
          own business called Koji Street, which was a marketplace for
          independent artists and fashion designers. I worked on that for about
          a year and a half, and while I learned many things and made a lot of
          progress, ultimately I ended up hitting a wall I felt I wouldn’t be
          able to overcome, and decided to move on.
        </p>
        <p className=" p-2 leading-8 text-[14px] md:text-[16px] tracking-wider">
          Since then, I have been learning web development, blockchain
          development, and various other technologies. From learning and
          building for a while now, I have taken a liking to front-end
          development. I think this is because naturally I like being able to
          see things come to life, also I really like design.
        </p>
        <p className=" p-2 leading-8 text-[14px] md:text-[16px] tracking-wider">
          Currently, I am working on side projects that interest me, exploring
          and staying up to date with different technologies, and am looking to
          join a team building something cool that excites me!{" "}
        </p>
      </div>
    </div>
  );
};
