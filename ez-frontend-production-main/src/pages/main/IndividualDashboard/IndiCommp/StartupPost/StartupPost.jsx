import React from "react";
import "./StartupPost.css";
import { BsFillPatchCheckFill} from "react-icons/bs";
import { FaChalkboardTeacher, FaUserCheck } from "react-icons/fa";
// import verified from "../../Assets/verified.png";
// import userpic from "../../Assets/sandipkundu.jpg";
import { BsFillTagsFill } from "react-icons/bs";
import { FaEye } from "react-icons/fa";
import { ImArrowUp } from "react-icons/im";
// import thoughticon from "../../Assets/Gender img/Vector.png"
// import UserActive from "./startupcomp/UserActive";
// import QAPage from "../../Pages/QA/QAPage"

const StartupPost = () => {
  return (
    <>
      <div className="my-10 bg-[#F5F5F5] rounded-[10px]">
        <div className="md:p-8 p-2 flex flex-col gap-8">

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-16 h-16 rounded-full overflow-hidden">
                {/* userpic */}
                <img src={""} alt="" className="w-full" />
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex gap-3">
                  <h2 className="text-[18px] font-bold">Sandip Kundu </h2>
                  <BsFillPatchCheckFill className="fill-green-400" size={25} />
                  <div className="flex flex-col items-center justify-start gap-0.5">
                    <span className="w-1.5 h-1.5 bg-black rounded-full"></span>
                    <span className="w-1.5 h-1.5 bg-black rounded-full"></span>
                    <span className="w-1.5 h-1.5 bg-black rounded-full"></span>
                  </div>
                </div>
                <div className="hidden md:flex gap-10">
                  <div className="flex gap-2">
                    <FaChalkboardTeacher className="fill-sky-400" />
                    <h5 className="text-[13px] font-normal">
                      Startup India Mentor
                    </h5>
                  </div>
                  <div className="flex gap-3 text-[9px]">
                    <span classsname=" ">#Venture Capital </span>
                    <span classsname="">#PE Funding </span>
                    <span classsname="">#Investments</span>
                  </div>
                </div>
                <h4 className="text-sm text-slate-500 font-normal">5h ago</h4>
              </div>
            </div>
            <div className="hidden md:flex gap-5 text-xs font-bold">
              <div className="flex flex-col gap-3">
                <div className="w-9 h-9 flex justify-center items-center rounded-full bg-green-500">
                  <FaUserCheck className="fill-white translate-x-0.5" size={25} />
                </div>
                <p className='text-center'>Follow</p>
              </div>
              <div className="flex flex-col gap-3">
                <div className="w-9 h-9 flex justify-center items-center rounded-full bg-green-500">
                  <ImArrowUp className="fill-white" size={25} />
                </div>
                <p className='text-center'>Upvote</p>
              </div>
            </div>
          </div>

          <p className="tracking-wide leading-loose text-justify text-base font-normal text-[#06501A]">
            There are 86,400 opportunities in a day. How is an entrepreneur
            using it ?- Is he just repeating the lies of a product which he
            himself doesnot believe Or -Is he trying to develop the product &
            taking it to a level where everybody is loving it. Makes a
            Difference .{" "}
          </p>
          <div className="flex gap-2 md:gap-9 text-sm font-normal items-center text-green-700">
            <BsFillTagsFill className="fill-green-400" size={30} />
            <span className="py-1 px-2 border border-slate-400 rounded-full">
              #economy
            </span>
            <span className="py-1 px-2 border border-slate-400 rounded-full">
              #recession
            </span>
            <span className="py-1 px-2 border border-slate-400 rounded-full">
              #funding{" "}
            </span>
          </div>

          <div className="w-full flex justify-between  px-2 ">
            <div className="flex gap-8 items-center">
              <div className="flex items-center">
                <div className="relative flex ">
                  <div className="w-9 h-9 rounded-full overflow-hidden -ml-2 border-2 border-slate-500">
                    {/* userpic */}
                    <img
                      src={""}
                      alt="User Icon"
                      className="bg-cover w-full h-full aspect-square"
                    />
                  </div>
                  <div className="w-9 h-9 rounded-full overflow-hidden -ml-2 border-2 border-slate-500">
                    {/* userpic */}
                    <img
                      src={""}
                      alt="User Icon"
                      className="bg-cover w-full h-full aspect-square "
                    />
                  </div>
                  <div className="w-9 h-9 rounded-full overflow-hidden -ml-2 border-2 border-slate-500">
                    {/* userpic */}
                    <img
                      src={""}
                      alt="User Icon"
                      className="bg-cover w-full h-full"
                    />
                  </div>
                </div>
                <div className="flex px-2 text-xs ">
                  <span className="flex">+ 1800 Others answered</span>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-bold">Participate  Now !!! </h3>
              </div>

            </div>
            <div className="hidden md:flex gap-5">
              <div className="flex flex-col items-center gap-1">
                <div className="w-8 h-8 flex justify-center items-center rounded-xl bg-green-500">
                  <FaEye className="fill-white" size={25} />
                </div>
                <p className="text-[10px] text-green-700">6754</p>
              </div>
              <div className="flex flex-col items-center  gap-1">
                <div className="w-8 h-8 flex justify-center items-center rounded-xl bg-[#FF9F45]">
                  thoughticon
                  <img src={""} className="" alt="" />
                </div>
                <p className="text-[10px] text-green-700">5472</p>
              </div>
              <div className="flex flex-col items-center  gap-1">
                <div className="w-8 h-8 flex justify-center items-center rounded-xl bg-green-500">
                  <ImArrowUp className="fill-white" size={20} />
                </div>
                <p className="text-[10px] text-green-700">5634</p>
              </div>

            </div>
          </div>
        </div>

        {/* here should be  */}


      </div>
    </>
  );
};

export default StartupPost;
