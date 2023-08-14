import { useState } from "react";

import { BiWorld } from "react-icons/bi";
import { BsChevronDoubleDown, BsChevronDoubleUp } from "react-icons/bs";

const LanguagesDetails = () => {
  const [isDrop, setIsDrop] = useState(false);

  return (
    <>
      <div className="w-full flex  p-2 justify-between border-b">
        <h1 className="text-xl font-semibold flex items-baseline gap-2">
          <BiWorld size={18} />
          Languages
        </h1>
        <span
          className="cursor-pointer text-green-600 hover:text-green-400"
          onClick={() => setIsDrop(!isDrop)}
        >
          {!isDrop ? (
            <BsChevronDoubleDown size={18} />
          ) : (
            <BsChevronDoubleUp size={18} />
          )}
        </span>
      </div>
      <div
        className={`w-full mt-4  ${
          !isDrop ? "flex flex-wrap gap-3" : "hidden"
        }`}
      >
        <div className="skill-box p-1 px-2">
          <span className="block text-sm text-white">Hindi</span>
          <span className="block text-xs text-gray-50">Level: Native</span>
        </div>
        <div className="skill-box p-1 px-2">
          <span className="block text-sm text-white">Hindi</span>
          <span className="block text-xs text-gray-50">Level: Native</span>
        </div>
        <div className="skill-box p-1 px-2">
          <span className="block text-sm text-white">Hindi</span>
          <span className="block text-xs text-gray-50">Level: Native</span>
        </div>
        <div className="skill-box p-1 px-2">
          <span className="block text-sm text-white">Hindi</span>
          <span className="block text-xs text-gray-50">Level: Native</span>
        </div>
      </div>
    </>
  );
};

export default LanguagesDetails;
