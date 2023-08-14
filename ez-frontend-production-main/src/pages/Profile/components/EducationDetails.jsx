import { useState } from "react";
import { FaSchool } from "react-icons/fa";
import { MdSchool, MdAdd } from "react-icons/md";

// assets import
import SchoolLogo from "../../../Assets/profile-img/school-logo.webp";
import { IoSchoolSharp } from "react-icons/io5";
import { BsChevronDoubleDown, BsChevronDoubleUp } from "react-icons/bs";

const EducationDetails = () => {
  const [isDrop, setIsDrop] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  return (
    <>
      <div className="w-full flex  p-2 justify-between">
        <h1 className="text-2xl font-semibold flex items-baseline gap-2">
          <IoSchoolSharp size={22} />
          Education
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
        <div className="bio-second-header flex items-center mt-4">
          <div className="bio-second-header-icon ml-6">
            <FaSchool />
          </div>
          <div className="introduction p-1 px-2 ml-5">High School</div>
        </div>
        <div className="school-box-wrapper mt-3 flex items-center p-2 px-3">
          <div className="lg:w-2/12 w-3/12">
            <div className="school-logo">
              <img src={SchoolLogo} alt="School Logo" />
            </div>
          </div>
          <div className="lg:w-10/12 w-9/12 flex flex-col lg:flex-row px-2 lg:px-0">
            <div className="school-name w-full lg:w-8/12">
              <div className="college-name">ABC Public School</div>
              <div className="university-name">ABC Public School</div>
            </div>
            <div className="school-desc w-full lg:w-4/12 mt-2 lg:mt-0">
              <div className="qualification flex">
                <div className="course bg-white px-1 text-blue-600	">
                  High School
                </div>
                <div className="year lg:ml-14 md:ml-3 ml-1 bg-white px-1 text-lime-500">
                  2016
                </div>
              </div>
              <div className="mt-2 hidden lg:flex">
                <div className="bio-second-header-icon bio-second-header-icon-inside">
                  <MdSchool />
                </div>
                <div className="introduction introduction-inside px-2 ml-2">
                  School
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="school-box-wrapper mt-3 flex items-center p-2 px-3">
          <div className="lg:w-2/12 w-3/12">
            <div className="school-logo">
              <img src={SchoolLogo} alt="School Logo" />
            </div>
          </div>
          <div className="lg:w-10/12 w-9/12 flex flex-col lg:flex-row px-2 lg:px-0">
            <div className="school-name w-full lg:w-8/12">
              <div className="college-name">ABC Public School</div>
              <div className="university-name">ABC Public School</div>
            </div>
            <div className="school-desc w-full lg:w-4/12 mt-2 lg:mt-0">
              <div className="qualification flex">
                <div className="course bg-white px-1 text-blue-600	">
                  Intermediate
                </div>
                <div className="year lg:ml-14 md:ml-3 ml-1 bg-white px-1 text-lime-500">
                  2018
                </div>
              </div>
              <div className="mt-2 hidden lg:flex">
                <div className="bio-second-header-icon bio-second-header-icon-inside">
                  <MdSchool />
                </div>
                <div className="introduction introduction-inside px-2 ml-2">
                  School
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* University Information */}
        <div className="bio-second-header flex items-center mt-8">
          <div className="bio-second-header-icon ml-6">
            <MdSchool />
          </div>
          <div className="introduction p-1 px-2 ml-5">University</div>
        </div>
        <div className="school-box-wrapper mt-3 flex items-center p-2 px-3">
          <div className="lg:w-2/12 w-3/12">
            <div className="school-logo">
              <img src={SchoolLogo} alt="School Logo" />
            </div>
          </div>
          <div className="lg:w-10/12 w-9/12 flex flex-col lg:flex-row px-2 lg:px-0">
            <div className="school-name w-full lg:w-8/12">
              <div className="college-name">ABC Institute of Technology</div>
              <div className="university-name">ABC University</div>
            </div>
            <div className="school-desc w-full lg:w-4/12 mt-2 lg:mt-0">
              <div className="qualification flex">
                <div className="course bg-white px-1 text-blue-600	">BCA</div>
                <div className="year lg:ml-14 md:ml-3 ml-1 bg-white px-1 text-lime-500">
                  2021
                </div>
              </div>
              <div className="mt-2 hidden lg:flex">
                <div className="bio-second-header-icon bio-second-header-icon-inside">
                  <MdSchool />
                </div>
                <div className="introduction introduction-inside px-2 ml-2">
                  College
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="school-box-wrapper mt-3 flex items-center p-2 px-3">
          <div className="lg:w-2/12 w-3/12">
            <div className="school-logo">
              <img src={SchoolLogo} alt="School Logo" />
            </div>
          </div>
          <div className="lg:w-10/12 w-9/12 flex flex-col lg:flex-row px-2 lg:px-0">
            <div className="school-name w-full lg:w-8/12">
              <div className="college-name">ABC Institute of Technology</div>
              <div className="university-name">ABC University</div>
            </div>
            <div className="school-desc w-full lg:w-4/12 mt-2 lg:mt-0">
              <div className="qualification flex">
                <div className="course bg-white px-1 text-blue-600	">MCA</div>
                <div className="year lg:ml-14 md:ml-3 ml-1 bg-white px-1 text-lime-500">
                  2023
                </div>
              </div>
              <div className="mt-2 hidden lg:flex">
                <div className="bio-second-header-icon bio-second-header-icon-inside">
                  <MdSchool />
                </div>
                <div className="introduction introduction-inside px-2 ml-2">
                  College
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* education */}
      <div
        className={`w-full p-4 rounded-lg  text-black ${
          isEdit ? "block" : "hidden"
        }`}
      >
        <div className="w-full mt-4">
          <div className="w-full">
            <label htmlFor="school-name" className="text-sm font-medium">
              Institute/ School
            </label>
            <input
              type="text"
              name="school-name"
              id="school-name"
              className="border border-gray-400 focus:outline-none focus:border-green-700 placeholder:font-light placeholder:text-sm p-2 w-full"
            />
          </div>
          <div className="w-full mt-3 flex gap-3">
            <div className="w-8/12">
              <label htmlFor="board-name" className="text-sm font-medium">
                Board/ University
              </label>
              <input
                type="text"
                name="board-name"
                id="board-name"
                className="border border-gray-400 focus:outline-none focus:border-green-700 placeholder:font-light placeholder:text-sm p-2 w-full"
              />
            </div>
            <div className="w-4/12">
              <label htmlFor="board-name" className="text-sm font-medium">
                Type
              </label>
              <select
                name="type"
                id="type"
                className="border border-gray-400 focus:outline-none focus:border-green-700 placeholder:font-light placeholder:text-sm p-2 w-full"
              >
                <option value="school">School</option>
                <option value="college">College</option>
                <option value="university">University</option>
              </select>
            </div>
          </div>
          <div className="w-full mt-3 flex gap-3">
            <div className="w-4/12">
              <label htmlFor="degree-name" className="text-sm font-medium">
                Degree
              </label>
              <input
                type="text"
                name="degree-name"
                id="degree-name"
                className="border border-gray-400 focus:outline-none focus:border-green-700 placeholder:font-light placeholder:text-sm p-2 w-full"
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

export default EducationDetails;
