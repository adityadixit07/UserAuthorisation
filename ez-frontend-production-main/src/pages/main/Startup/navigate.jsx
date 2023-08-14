import React from "react";
import { BsFillChatDotsFill } from "react-icons/bs";
import { AiFillWechat, AiFillBell, AiFillQuestionCircle } from "react-icons/ai";
import { MdEventAvailable } from "react-icons/md";
import { FaBook } from "react-icons/fa";
import '../Startup/Startup.css';

  

export default function Navigate() {
  return (
    <>
      <div className="flex flex-row gap-[1rem] overflow-x-auto justify-evenly max-w-[1440px] h-[80px] bg-[#002D0A] items-center ge">
        <button className="py-[0.8rem] px-[1.14rem] rounded-[10px] text-[17px] bg-white text-[#003902] flex gap-3s">
          <BsFillChatDotsFill size={34} className="p-[1px]" />
          #Overview
        </button>
        <button className=" py-[14px] px-[1.14rem] rounded-[10px] text-[17px] bg-white text-[#003902] flex gap-3">
          <AiFillWechat size={34} className="p-[1px]" />
          #Discussions
        </button>
        <button className="py-[0.8rem] px-[1.14rem] rounded-[10px] text-[17px] bg-white text-[#003902] flex gap-3 ">
          <AiFillBell size={34} className="p-[1px]" />
          #Update
        </button>
        <button className="py-[0.8rem] px-[1.14rem] rounded-[10px] text-[17px] bg-white text-[#003902] flex gap-3">
          <MdEventAvailable size={34} className="p-[1px]" />
          #Events
        </button>
        <button className=" py-[0.8rem] px-[1.14rem] rounded-[10px] text-[17px] bg-white text-[#003902] flex gap-3">
          <AiFillQuestionCircle size={34} className="p-[1px]" />
          #Q&AForum
        </button>
        <button className=" py-[0.8rem] px-[1.14rem] rounded-[10px] text-[17px] bg-white text-[#003902] flex gap-3">
          <FaBook size={34} className="p-[1px]" />
          #Resources
        </button>
      </div>
      <div className='eyeOpen'>
      </div>
    </>
  );
}
