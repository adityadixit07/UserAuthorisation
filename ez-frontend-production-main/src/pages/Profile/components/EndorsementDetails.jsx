import { BiDonateHeart } from "react-icons/bi";

import UserIcon from "../../../assets/profile-img/user-img.png";
import { useState } from "react";
import { BsChevronDoubleDown, BsChevronDoubleUp } from "react-icons/bs";
// import { EditAttributesSharp } from "@mui/icons-material";
import { FaEdit } from "react-icons/fa";

const TopToolDetails = () => {
  const [isDrop, setIsDrop] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  return (
    <>
      <div className="w-full flex  p-2 justify-between">
        <h1 className="text-2xl font-semibold flex items-baseline gap-2">
          <BiDonateHeart size={22} />
          Endorsement
        </h1>
        <div className="flex items-center gap-4">
          <span
            className="cursor-pointer text-slate-700 hover:text-slate-800 p-1 rounded-full"
            onClick={() => setIsEdit(!isEdit)}
          >
            <FaEdit size={18} />
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
      <div className={`w-full ${isDrop ? "block" : "hidden"}`}>
        <div className="endorse-box w-full p-3 my-5">
          <div className="w-full flex items-center gap-3">
            <div className="endorse-user-icon sm:h-8 h-full sm:w-8 w-12 border border-gray-300">
              <img src={UserIcon} alt="User Icon" className="w-full h-full" />
            </div>
            <div className="w-full flex flex-col">
              <span className="block text-sm font-medium">Suraj Aswal</span>
              <span className="text-xs text-green-700">
                Full Stack Developer
              </span>
            </div>
          </div>
          <div className="w-full mt-2">
            <p className="text-sm sm:text-base text-justify sm:h-12 h-10 endorse-txt">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime
              laudantium ipsam repellat. Ullam quas ducimus necessitatibus fuga
              molestiae nisi. Maxime laudantium ipsam repellat. Ullam quas
              ducimus necessitatibus fuga molestiae nisi. Lorem, ipsum dolor sit
              amet consectetur adipisicing elit. Maxime laudantium ipsam
              repellat. Ullam quas ducimus necessitatibus fuga molestiae nisi.
              Maxime laudantium ipsam repellat. Ullam quas ducimus
              necessitatibus fuga molestiae nisi.
            </p>
          </div>
        </div>
        <div className="endorse-box w-full p-3 my-5">
          <div className="w-full flex items-center gap-3">
            <div className="endorse-user-icon sm:h-8 h-full sm:w-8 w-12 border border-gray-300">
              <img src={UserIcon} alt="User Icon" className="w-full h-full" />
            </div>
            <div className="w-full flex flex-col">
              <span className="block text-sm font-medium">Suraj Aswal</span>
              <span className="text-xs text-green-700">
                Full Stack Developer
              </span>
            </div>
          </div>
          <div className="w-full mt-2">
            <p className="text-xs sm:text-base text-justify sm:h-12 h-10 endorse-txt">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime
              laudantium ipsam repellat. Ullam quas ducimus necessitatibus fuga
              molestiae nisi. Maxime laudantium ipsam repellat. Ullam quas
              ducimus necessitatibus fuga molestiae nisi. Lorem, ipsum dolor sit
              amet consectetur adipisicing elit. Maxime laudantium ipsam
              repellat. Ullam quas ducimus necessitatibus fuga molestiae nisi.
              Maxime laudantium ipsam repellat. Ullam quas ducimus
              necessitatibus fuga molestiae nisi.
            </p>
          </div>
        </div>
        <div className="endorse-box w-full p-3 my-5">
          <div className="w-full flex items-center gap-3">
            <div className="endorse-user-icon sm:h-8 h-full sm:w-8 w-12 border border-gray-300">
              <img src={UserIcon} alt="User Icon" className="w-full h-full" />
            </div>
            <div className="w-full flex flex-col">
              <span className="block text-sm font-medium">Suraj Aswal</span>
              <span className="text-xs text-green-700">
                Full Stack Developer
              </span>
            </div>
          </div>
          <div className="w-full mt-2">
            <p className="text-sm sm:text-base text-justify sm:h-12 h-10 endorse-txt">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime
              laudantium ipsam repellat. Ullam quas ducimus necessitatibus fuga
              molestiae nisi. Maxime laudantium ipsam repellat. Ullam quas
              ducimus necessitatibus fuga molestiae nisi. Lorem, ipsum dolor sit
              amet consectetur adipisicing elit. Maxime laudantium ipsam
              repellat. Ullam quas ducimus necessitatibus fuga molestiae nisi.
              Maxime laudantium ipsam repellat. Ullam quas ducimus
              necessitatibus fuga molestiae nisi.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopToolDetails;
