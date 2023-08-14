import React from "react";
import "./ProfileBox.css";
import { FaPlusCircle } from "react-icons/fa"

const tabData = [
  { bgcol: "bg-[#cbc5f9]", text: "Update Bio" },
  { bgcol: "bg-[#FFF3FC]", text: "Update Education" },
  { bgcol: "bg-[#F3F9FF]", text: "Update Experience" },
  { bgcol: "bg-[#FFF7F3]", text: "Update Skills" },
];

const ProfileBoxUpdate = () => {
  return (
    <div className="p-2 md:p-0 mb-5">
      <div className="w-full bg-green-100 md:w-[70%] !p-2 mt-4 rounded-[15px]">
        <div className="flex flex-col md:flex-row h-full justify-between p-2 gap-2 md:gap-5 bg-white rounded-[15px]">
          {
            tabData.map((data, index) => {
              return (
                <div
                  key={index}
                  className={`w-[100%] md:[50%] h-[125px] rounded-[10px] ${data.bgcol} relative flex items-center flex-col justify-end p-3 text-[12px] font-normal `}
                >
                  <FaPlusCircle className="absolute right-5 top-[30%] fill-[#4d38e9]" size={25} />
                  <p className="items-start text-base w-full md:items-baseline">
                    {data.text}
                  </p>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  );
};

export default ProfileBoxUpdate;
