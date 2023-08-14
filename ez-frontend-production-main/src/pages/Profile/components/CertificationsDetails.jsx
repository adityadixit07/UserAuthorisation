import { useState } from "react";

// import {FaGraduationCap} from "react-icons/fa";
import { BiCheckShield } from "react-icons/bi";
import { BsChevronDoubleDown, BsChevronDoubleUp } from "react-icons/bs";
import { MdAdd } from "react-icons/md";

const CertificationsDetails = () => {
  const [isDrop, setIsDrop] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  return (
    <>
      <div className="w-full flex  p-2 justify-between">
        <h1 className="text-2xl font-semibold flex items-baseline gap-2">
          <BiCheckShield size={22} />
          Certification
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
      {/* University Information */}
      <div
        className={`w-full ${isDrop ? "block" : "hidden"} ${
          isEdit ? "hidden" : "block "
        }`}
      >
        <div className="w-full bg-slate-300 text-black rounded-md  my-4 flex p-3 justify-between items-center">
          <div className="school-name">
            <div className="text-gray-700 text-lg">MERN Hackathon 2.0</div>
            <div className="text-gray-500 text-sm">
              Issue ID: 8fdv8fvyfdy8fyvdd8vd
            </div>
          </div>
          <div className="school-desc">
            <div className="text-center bg-teal-400 p-1 px-3 rounded-md text-white">
              View
            </div>
          </div>
        </div>
        <div className="w-full bg-slate-300 text-black rounded-md  my-4 flex p-3 justify-between items-center">
          <div className="school-name">
            <div className="text-gray-700 text-lg">MERN Hackathon 2.0</div>
            <div className="text-gray-500 text-sm">
              Issue ID: 8fdv8fvyfdy8fyvdd8vd
            </div>
          </div>
          <div className="school-desc">
            <div className="text-center bg-teal-400 p-1 px-3 rounded-md text-white">
              View
            </div>
          </div>
        </div>
        <div className="w-full bg-slate-300 text-black rounded-md  my-4 flex p-3 justify-between items-center">
          <div className="school-name">
            <div className="text-gray-700 text-lg">MERN Hackathon 2.0</div>
            <div className="text-gray-500 text-sm">
              Issue ID: 8fdv8fvyfdy8fyvdd8vd
            </div>
          </div>
          <div className="school-desc">
            <div className="text-center bg-teal-400 p-1 px-3 rounded-md text-white">
              View
            </div>
          </div>
        </div>
      </div>

      {/* cert */}
      <div
        className={`w-full p-4 rounded-lg  text-black ${
          isEdit ? "block" : "hidden "
        }`}
      >
        <div className="w-full mt-4">
          <div className="w-full">
            <label htmlFor="Certificate-name" className="text-sm font-medium">
              Certificate Title
            </label>
            <input
              type="text"
              name="Certificate-name"
              placeholder="eg: MERN Stack Live Workshop"
              id="Certificate-name"
              className="border border-gray-400 focus:outline-none focus:border-green-700 placeholder:font-light placeholder:text-sm p-2 w-full"
            />
          </div>
          <div className="w-full mt-3 flex gap-3">
            <div className="w-full">
              <label htmlFor="company-name" className="text-sm font-medium">
                Issuer
              </label>
              <input
                type="text"
                name="board-name"
                id="board-name"
                placeholder="eg: Learn with Earn Coaching"
                className="border border-gray-400 focus:outline-none focus:border-green-700 placeholder:font-light placeholder:text-sm p-2 w-full"
              />
            </div>
          </div>
          <div className="w-full mt-3 flex gap-3">
            <div className="w-full">
              <label htmlFor="certificate-id" className="text-sm font-medium">
                Certificate ID
              </label>
              <input
                type="text"
                name="certificate-id"
                id="certificate-id"
                placeholder="eg: 1234567890"
                className="border border-gray-400 focus:outline-none focus:border-green-700 placeholder:font-light placeholder:text-sm p-2 w-full"
              />
            </div>
          </div>
          <div className="w-full mt-3 flex gap-3">
            <div className="w-full">
              <label htmlFor="certificate-file" className="text-sm font-medium">
                Certificate
              </label>
              <input
                type="file"
                name="certificate-file"
                id="certificate-file"
                placeholder="eg: 1234567890"
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

export default CertificationsDetails;
