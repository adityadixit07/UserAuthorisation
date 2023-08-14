// assets import
import SchoolLogo from "../../../assets/profile-img/school-logo.webp";

import { FaCircleNotch } from "react-icons/fa";
import { BiTimeFive } from "react-icons/bi";
import { MdAdd, MdLocationPin } from "react-icons/md";
import { IoBriefcase } from "react-icons/io5";
import { useState } from "react";
import { BsChevronDoubleDown, BsChevronDoubleUp } from "react-icons/bs";

const ExperienceDetails = () => {
  const [isDrop, setIsDrop] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  return (
    <>
      <div className="w-full flex  p-2 justify-between">
        <h1 className="text-2xl font-semibold flex items-baseline gap-2">
          <IoBriefcase size={22} />
          Experience
        </h1>
        <div className="flex items-center gap-4">
          <span
            className="cursor-pointer text-slate-700 hover:text-slate-800 bg-green-200 p-1 rounded-full"
            onClick={() => setIsEdit(!isEdit)}
          >
            <MdAdd size={18} />
          </span>
          <span
            className="cursor-pointer text-green-600 hover:text-green-400"
            onClick={() => setIsDrop(!isDrop)}
          >
            {isDrop ? (
              <BsChevronDoubleDown size={20} />
            ) : (
              <BsChevronDoubleUp size={20} />
            )}
          </span>
        </div>
      </div>
      <div
        className={`w-full ${isDrop ? "block" : "hidden"} ${
          isEdit ? "hidden" : "block"
        }`}
      >
        <div className="school-box-wrapper my-5 flex items-center p-2 px-3 flex-wrap">
          <div className="lg:w-2/12 sm:w-3/12 w-full">
            <div className="school-logo company-logo">
              <img src={SchoolLogo} alt="School Logo" />
            </div>
          </div>
          <div className="lg:w-10/12 sm:w-9/12 w-full px-2 lg:px-0">
            <div className="w-full flex lg:justify-between flex-wrap text-white">
              <span className="w-full lg:w-max">
                Senior Business Development Associate{" "}
              </span>
              <span className="w-full lg:w-max">3 years 5 months</span>
            </div>
            <div className="w-full flex lg:justify-between text-white mt-2 flex-wrap">
              <span className="flex items-center w-full lg:w-max">
                <FaCircleNotch /> &nbsp; BYJU’S
              </span>
              <span className="flex items-center exp-duration-box w-full lg:w-max">
                <span className="mr-2">Part Time</span>
                <BiTimeFive />
                <span className="bg-white exp-duration-txt ml-1 p-1 px-2 text-xs rounded-md">
                  Jun 2019-Nov 2022
                </span>
              </span>
            </div>
            <div className="w-full flex lg:justify-between text-white mt-2 flex-wrap">
              <span className="flex items-center w-full lg:w-max">
                <MdLocationPin /> &nbsp; Kolkata, India
              </span>
              <span className="gap-1 flex w-full lg:w-max">
                <span className="bg-green-600 p-1 px-2 rounded-md text-xs">
                  Education
                </span>
                <span className="bg-green-600 p-1 px-2 rounded-md text-xs">
                  Education
                </span>
                <span className="bg-green-600 p-1 px-2 rounded-md text-xs">
                  Education
                </span>
              </span>
            </div>
          </div>
        </div>
        <div className="school-box-wrapper my-5 flex items-center p-2 px-3 flex-wrap">
          <div className="lg:w-2/12 sm:w-3/12 w-full">
            <div className="school-logo company-logo">
              <img src={SchoolLogo} alt="School Logo" />
            </div>
          </div>
          <div className="lg:w-10/12 sm:w-9/12 w-full px-2 lg:px-0">
            <div className="w-full flex lg:justify-between flex-wrap text-white">
              <span className="w-full lg:w-max">
                Senior Business Development Associate{" "}
              </span>
              <span className="w-full lg:w-max">3 years 5 months</span>
            </div>
            <div className="w-full flex lg:justify-between text-white mt-2 flex-wrap">
              <span className="flex items-center w-full lg:w-max">
                <FaCircleNotch /> &nbsp; BYJU’S
              </span>
              <span className="flex items-center exp-duration-box w-full lg:w-max">
                <span className="mr-2">Part Time</span>
                <BiTimeFive />
                <span className="bg-white exp-duration-txt ml-1 p-1 px-2 text-xs rounded-md">
                  Jun 2019-Nov 2022
                </span>
              </span>
            </div>
            <div className="w-full flex lg:justify-between text-white mt-2 flex-wrap">
              <span className="flex items-center w-full lg:w-max">
                <MdLocationPin /> &nbsp; Kolkata, India
              </span>
              <span className="gap-1 flex w-full lg:w-max">
                <span className="bg-green-600 p-1 px-2 rounded-md text-xs">
                  Education
                </span>
                <span className="bg-green-600 p-1 px-2 rounded-md text-xs">
                  Education
                </span>
                <span className="bg-green-600 p-1 px-2 rounded-md text-xs">
                  Education
                </span>
              </span>
            </div>
          </div>
        </div>
        <div className="school-box-wrapper my-5 flex items-center p-2 px-3 flex-wrap">
          <div className="lg:w-2/12 sm:w-3/12 w-full">
            <div className="school-logo company-logo">
              <img src={SchoolLogo} alt="School Logo" />
            </div>
          </div>
          <div className="lg:w-10/12 sm:w-9/12 w-full px-2 lg:px-0">
            <div className="w-full flex lg:justify-between flex-wrap text-white">
              <span className="w-full lg:w-max">
                Senior Business Development Associate{" "}
              </span>
              <span className="w-full lg:w-max">3 years 5 months</span>
            </div>
            <div className="w-full flex lg:justify-between text-white mt-2 flex-wrap">
              <span className="flex items-center w-full lg:w-max">
                <FaCircleNotch /> &nbsp; BYJU’S
              </span>
              <span className="flex items-center exp-duration-box w-full lg:w-max">
                <span className="mr-2">Part Time</span>
                <BiTimeFive />
                <span className="bg-white exp-duration-txt ml-1 p-1 px-2 text-xs rounded-md">
                  Jun 2019-Nov 2022
                </span>
              </span>
            </div>
            <div className="w-full flex lg:justify-between text-white mt-2 flex-wrap">
              <span className="flex items-center w-full lg:w-max">
                <MdLocationPin /> &nbsp; Kolkata, India
              </span>
              <span className="gap-1 flex w-full lg:w-max">
                <span className="bg-green-600 p-1 px-2 rounded-md text-xs">
                  Education
                </span>
                <span className="bg-green-600 p-1 px-2 rounded-md text-xs">
                  Education
                </span>
                <span className="bg-green-600 p-1 px-2 rounded-md text-xs">
                  Education
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* experience */}
      <div
        className={`w-full p-4 rounded-lg  text-black ${
          isEdit ? "block" : "hidden"
        }`}
      >
        <div className="w-full mt-2">
          <div className="w-full">
            <label htmlFor="school-name" className="text-sm font-medium">
              Position
            </label>
            <input
              type="text"
              name="Position-name"
              placeholder="eg: Software Engineer"
              id="Position-name"
              className="border border-gray-400 focus:outline-none focus:border-green-700 placeholder:font-light placeholder:text-sm p-2 w-full"
            />
          </div>
          <div className="w-full mt-3 flex gap-3">
            <div className="w-8/12">
              <label htmlFor="company-name" className="text-sm font-medium">
                Company
              </label>
              <input
                type="text"
                name="board-name"
                id="board-name"
                placeholder="eg: Wipro Limited"
                className="border border-gray-400 focus:outline-none focus:border-green-700 placeholder:font-light placeholder:text-sm p-2 w-full"
              />
            </div>
            <div className="w-4/12">
              <label htmlFor="board-name" className="text-sm font-medium">
                Job Type
              </label>
              <select
                name="type"
                id="type"
                className="border border-gray-400 focus:outline-none focus:border-green-700 placeholder:font-light placeholder:text-sm p-2 w-full"
              >
                <option value="full-time">Full Time</option>
                <option value="part-time">Part Time</option>
                <option value="buisness">Buisness</option>
                <option value="self">self</option>
              </select>
            </div>
          </div>
          <div className="w-full mt-3 flex gap-3">
            <div className="w-4/12">
              <label htmlFor="location-name" className="text-sm font-medium">
                Location
              </label>
              <input
                type="text"
                name="location-name"
                id="location-name"
                placeholder="eg: Dehradun, Uttarakhand"
                className="border border-gray-400 p-2 w-full focus:outline-none focus:border-green-700 placeholder:font-light placeholder:text-sm"
              />
            </div>
            <div className="w-4/12">
              <label htmlFor="from-year" className="text-sm font-medium">
                Start
              </label>
              <input
                type="date"
                name="from-year"
                id="from-year"
                className="border border-gray-400 focus:outline-none focus:border-green-700 placeholder:font-light placeholder:text-sm p-2 w-full"
              />
            </div>
            <div className="w-4/12">
              <label htmlFor="end-year" className="text-sm font-medium">
                End
              </label>
              <input
                type="date"
                name="end-year"
                id="end-year"
                className="border border-gray-400 focus:outline-none focus:border-green-700 placeholder:font-light placeholder:text-sm p-2 w-full"
              />
            </div>
          </div>
          <div className="w-full">
            <button className="bg-green-700 text-white px-4 py-2 rounded-md mt-4">
              save
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExperienceDetails;
