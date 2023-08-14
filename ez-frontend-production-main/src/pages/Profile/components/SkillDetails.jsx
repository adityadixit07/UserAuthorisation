import { useState } from "react";

import { BiGitPullRequest } from "react-icons/bi";
import { BsChevronDoubleDown, BsChevronDoubleUp } from "react-icons/bs";

const SkillDetails = () => {
  const [isDrop, setIsDrop] = useState(false);

  return (
    <>
      <div className="w-full flex  p-2 justify-between border-b">
        <h1 className="text-xl font-semibold flex items-baseline gap-2">
          <BiGitPullRequest size={18} />
          Skills
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
          <span className="block text-sm text-white">Github</span>
          <span className="block text-xs text-gray-50">Level: Advanced</span>
        </div>
        <div className="skill-box p-1 px-2">
          <span className="block text-sm text-white">Github</span>
          <span className="block text-xs text-gray-50">Level: Advanced</span>
        </div>
        <div className="skill-box p-1 px-2">
          <span className="block text-sm text-white">Github</span>
          <span className="block text-xs text-gray-50">Level: Advanced</span>
        </div>
        <div className="skill-box p-1 px-2">
          <span className="block text-sm text-white">Github</span>
          <span className="block text-xs text-gray-50">Level: Advanced</span>
        </div>
        <div className="skill-box p-1 px-2">
          <span className="block text-sm text-white">Github</span>
          <span className="block text-xs text-gray-50">Level: Advanced</span>
        </div>
        <div className="skill-box p-1 px-2">
          <span className="block text-sm text-white">Github</span>
          <span className="block text-xs text-gray-50">Level: Advanced</span>
        </div>
        <div className="skill-box p-1 px-2">
          <span className="block text-sm text-white">Github</span>
          <span className="block text-xs text-gray-50">Level: Advanced</span>
        </div>
        <div className="skill-box p-1 px-2">
          <span className="block text-sm text-white">Github</span>
          <span className="block text-xs text-gray-50">Level: Advanced</span>
        </div>
        <div className="skill-box p-1 px-2">
          <span className="block text-sm text-white">Github</span>
          <span className="block text-xs text-gray-50">Level: Advanced</span>
        </div>
      </div>
    </>
  );
};

export default SkillDetails;
