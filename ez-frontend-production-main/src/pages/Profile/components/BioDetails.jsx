import { useState } from "react";
import { BsChevronDoubleDown, BsChevronDoubleUp } from "react-icons/bs";
import { FaUserGraduate } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";

const BioDetails = () => {
  const [isDrop, setIsDrop] = useState(true);
  const [isEdit, setIsEdit] = useState(false);
  return (
    <>
      <div className="w-full flex  p-2 justify-between">
        <h1 className="text-2xl font-semibold flex items-baseline gap-2">
          <FaUserGraduate size={20} />
          About Me
        </h1>
        <div className="flex items-center gap-4">
          <span
            className="cursor-pointer text-slate-700 hover:text-slate-800"
            onClick={() => setIsEdit(!isEdit)}
          >
            <FaRegEdit size={20} />
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
        className={`profile-description transition-all mt-4 py-3 px-4 ${
          isDrop ? "block" : "hidden"
        } ${isEdit ? "hidden" : "block"}`}
      >
        <p className="text-justify">
          Hi, I'm Suraj Aswal, a passionate MERN (MongoDB, Express.js, React.js,
          Node.js) stack developer with 1 years of experience. I specialize in
          building robust and scalable web applications with a strong focus on
          front-end development. Throughout my career, I have worked on various
          projects, ranging from small startups to large enterprise solutions. I
          have a deep understanding of the MERN stack and its components,
          allowing me to develop end-to-end solutions that deliver exceptional
          user experiences. In terms of front-end development, I have extensive
          experience with React.js, Redux, and related libraries. I have a keen
          eye for design and UI/UX principles, ensuring that the applications I
          develop are not only functional but also visually appealing and
          user-friendly.
        </p>
      </div>

      {/* about me */}
      <div
        className={`w-full mt-4 p-3 rounded-lg  text-black ${
          isEdit ? "block" : "hidden"
        }`}
      >
        <div className="w-full">
          <textarea
            name="about"
            id="about"
            className="border border-gray-400 focus:outline-none focus:border-green-700 placeholder:font-light placeholder:text-sm p-2 w-full"
          ></textarea>
          <button className="bg-green-700 hover:bg-green-600 px-4 text-white p-2 rounded mt-2">
            save
          </button>
        </div>
      </div>
    </>
  );
};

export default BioDetails;
