import { useState } from "react";
// react icons
import { MdSearch, MdFilterAlt } from "react-icons/md";
import { BsCaretDownFill, BsRocketFill } from "react-icons/bs";
// import { BsRocketFill } from "react-icons/bs"

// QA CSS Module
import Style from "./QA.module.css";

function SearchBar() {
  // qa search term
  const [qaSearchTerm, setQaSearchTerm] = useState("");

  return (
    <>
      <div className="w-full">
        <div className="w-full flex flex-wrap md:flex-nowrap justify-between items-center">
          <div className={`${Style.lower_search_box}`}>
            <span className="absolute left-2 top-0">
              <MdSearch />
            </span>
            <input
              type="text"
              onChange={(e) => setQaSearchTerm(e.target.value)}
              placeholder="Search or Type your question"
              value={qaSearchTerm}
            />
            <span className="absolute right-0 top-0">
              <MdFilterAlt />
            </span>
          </div>
          <div className="w-full md:w-fit flex mt-3 md:mt-0  gap-3 flex-wrap">
            <button className="rounded-md p-2 px-4 flex items-center bg-gray-100 shadow-sm md:text-sm">
              Category &nbsp;
              <BsCaretDownFill />
            </button>

            <button className="rounded-md p-2 px-4 flex items-center bg-gray-100 shadow-sm md:text-sm">
              <BsRocketFill /> &nbsp; Startup Community &nbsp;
              <BsCaretDownFill />
            </button>

            <button className="rounded-md p-2 px-4 flex items-center bg-gray-100 shadow-sm md:text-sm">
              Experiences &nbsp;
              <BsCaretDownFill />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchBar;
