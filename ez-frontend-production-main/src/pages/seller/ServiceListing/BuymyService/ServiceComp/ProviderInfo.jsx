/* eslint-disable react/prop-types */
import { BsFillPatchCheckFill } from "react-icons/bs";
import { AiFillChrome } from "react-icons/ai";
import { TbWorld, TbMessages } from "react-icons/tb";
import { AiFillTwitterCircle } from "react-icons/ai";
import { ImFacebook2 } from "react-icons/im";
import { SiMicrosoftbing } from "react-icons/si";
import { FaYahoo } from "react-icons/fa";
import { HiPlusCircle } from "react-icons/hi";
function ProviderInfo({ user }) {
  return (
    <>
      <div className="w-full flex flex-col items-center px-2 py-2  md:py-10 md:px-6 bg-slate-50 gap-6 rounded-[10px] border-b-2 text-[90%] md:text-[100%]">
        <div className="flex w-auto h-auto">
          <div className="w-[120px] h-20 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white shadow-sm">
            <img
              className="bg-cover brightness-95"
              src={user?.avatar?.url}
              alt="My avatar"
            />
          </div>
        </div>

        <h1 className="text-2xl font-semibold">
          {user?.firstName + " " + user?.lastName}
        </h1>
        <div className="flex flex-col items-center gap-1 font-medium text-slate-500">
          <p className="flex flex-col items-center justify-center">
            {user?.bio}
          </p>
          <p>Company Name</p>
          <a
            href="https://react-icons.github.io/react-icons"
            className="text-decoration-text-decoration-underline"
          >
            Portfoliolink
          </a>
        </div>
        <p className="font-medium text-slate-500">Dehradun, India</p>
        <div className="flex justify-center gap-1 items-center">
          <BsFillPatchCheckFill className="fill-green-500" size={25} />
          <h2 className="text-sm font-semibold text-slate-600">
            ez verified Seller{" "}
          </h2>
        </div>
        <button
          className="w-full  bg-[#0B0B0B] opacity-900 backdrop-blur-lg p-3 text-white font-bold rounded-[10px] innershadow1 flex justify-evenly items-center"
          type="button"
        >
          Follow <HiPlusCircle size={25} />
        </button>
        <button
          className="w-full bg-[#221B1B] p-3 text-white font-bold rounded-[10px] innershadow2 flex justify-evenly items-center"
          type="button"
        >
          Send Enquiry <TbMessages className="fill-[#3DFB52]" size={25} />
        </button>
        <div className="w-full flex flex-col gap-1">
          <div className="flex justify-between items-center">
            <h4 className=" text-slate-600">Project views</h4>
            <span className="font-medium">84,392</span>
          </div>
          <div className="flex justify-between items-center">
            <h4 className=" text-slate-600">Appreciation</h4>
            <span className="font-medium">392</span>
          </div>
          <div className="flex justify-between items-center">
            <h4 className=" text-slate-600">Followers</h4>
            <span className="font-medium">4392</span>
          </div>
          <div className="flex justify-between items-center">
            <h4 className=" text-slate-600">Following</h4>
            <span className="font-medium">684</span>
          </div>
        </div>
        <div className="w-full">
          <h5 className="py-2 font-semibold text-slate-400 text-sm">
            ON THE WEB
          </h5>
          <div className="flex gap-5 items-center w-full">
            <AiFillChrome className="p-1 rounded-full border " size={35} />
            <TbWorld className="p-1 rounded-full border" size={35} />
            <AiFillTwitterCircle
              className="p-1 rounded-full border"
              size={35}
            />
            <ImFacebook2 className="p-1 rounded-full border" size={30} />
            <SiMicrosoftbing className="p-1 rounded-full border" size={30} />
            <FaYahoo className="p-1 rounded-full border" size={30} />
          </div>
        </div>
      </div>
    </>
  );
}

export default ProviderInfo;
