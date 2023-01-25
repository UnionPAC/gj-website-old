import React, { useState, useEffect } from "react";
import moment from "moment";

export const Blog = () => {
  const [mediumData, setMediumData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(
      "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/@geoff_jamieson/feed"
    )
      .then((res) => res.json())
      .then((response) => {
        setMediumData(response.items);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  const finalData = mediumData.slice(0, 3);

  return (
    <div id="blog" className="flex flex-col items-center font-karla p-4 md:p-8">
      <h3 className="mt-8 text-3xl mb-4 font-medium">Blog</h3>
      <p className="text-center text-[15px] md:text-[16px] pt-4 max-w-[700px]">
        Sometimes I like writing about things that I like 🤷‍♀️ check em' out if you're
        interested!
      </p>
      {isLoading && (
        <p className="text-2xl my-10 tracking-widest">
          Fetching Medium Data ...
        </p>
      )}
      <ul className="flex flex-col my-10 mx-auto">
        {finalData.map((article) => (
          <a href={article.link} target="_blank" rel="noreferrer" key={article.guid} >
            <div className="flex justify-around items-end my-3 text-sm pb-6 mb-6 border-b-2 border-gray-100 md:text-base">
              <div className="flex flex-col w-[70%] p-2">
                <div className="text-stone-600 text-sm">
                  Published:{" "}
                  {moment(article.pubDate).format("dddd, MMMM Do YYYY")}
                </div>
                <h3 className="font-medium text-lg md:text-2xl py-2">{article.title}</h3>
                <p className="max-w-[650px]">{article.description.slice(99, 220)}{" ..."}</p>
              </div>
              <div className="w-[100px] h-[100px] p-2 md:w-[115px] md:h-[115px]">
                <img
                  src={article.thumbnail}
                  alt="img"
                  className="w-full h-full"
                />
              </div>
            </div>
          </a>
        ))}
      </ul>
    </div>
  );
};
