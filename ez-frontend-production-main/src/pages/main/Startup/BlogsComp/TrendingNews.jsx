import { useState } from "react";
import { MdOutlineBookmarkAdd, MdOutlineBookmarkAdded } from "react-icons/md";

import TrendingData from "./trendingData.json";

const TrendingNews = () => {
  const [save, setsave] = useState(null);
  // const Trending = JSON.stringify(TrendingData);

  return (
    <>
      <div className="w-full h-6 md:h-14"></div>
      <section className="section4 mt-8 md:mt-24 flex flex-col gap-10 p-2">
        {TrendingData &&
          TrendingData.map((data, index) => (
            <div
              className="flex flex-col border-b-2 pb-5 bg-gray-50 p-3 rounded-md"
              key={data.id}
            >
              <div className="flex gap-3 items-center">
                <div className="w-8 h-8 overflow-hidden rounded-[9999px]  relative">
                  <img
                    src={
                      "https://images.unsplash.com/photo-1581382575275-97901c2635b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                    }
                    className=""
                    alt=""
                  />
                </div>
                <h4 className="font-semibold">{data.name}</h4>
              </div>
              <div className="flex justify-around items-center w-full">
                <div className="w-full md:w-2/3 flex flex-col gap-2 md:gap-3">
                  <h2 className="text-xl md:text-3xl font-semibold">
                    {data.heading}
                  </h2>
                  <p className="text-sm md:text-lg font-semibold text-slate-400">
                    {data.news}
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <h3 className="px-2 py-1 bg-slate-200 rounded-[10px] text-xs md:text-base text-slate-500">
                        {data.hashtag}
                      </h3>
                      <h3 className="text-xs md:text-sm font-medium text-slate-600">
                        {data.timing}
                      </h3>
                      <h4 className="text-xs font-medium text-slate-600">
                        {data.date}
                      </h4>
                    </div>
                    <span
                      className={`${
                        index === save ? "hidden" : "block"
                      } fill-slate-500 `}
                      onClick={() => setsave(index)}
                    >
                      <MdOutlineBookmarkAdd size={25} />
                    </span>
                    <span
                      className={`${index === save ? "block" : " hidden"}`}
                      size={25}
                      onClick={() => setsave(index)}
                    >
                      <MdOutlineBookmarkAdded size={25} />
                    </span>
                  </div>
                </div>
                <div className="w-52 h-52 overflow-hidden rounded-[10px] hidden md:block relative">
                  <img
                    src={
                      "https://images.unsplash.com/photo-1508385082359-f38ae991e8f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                    }
                    alt=""
                  />
                </div>
              </div>
            </div>
          ))}
      </section>
    </>
  );
};

export default TrendingNews;
