import { BiDonateHeart } from "react-icons/bi";

import UserIcon from "../../../../assets/profile-img/user-img.png";
import { useState } from "react";

const TopToolDetails = () => {
  const [isDrop, setIsDrop] = useState(true);
  const [isEdit, setIsEdit] = useState(false);

  return (
    <>
      <div className="w-full flex  p-2 justify-between">
        <h1 className="text-2xl font-semibold flex items-baseline gap-2">
          <BiDonateHeart size={22} />
          Endorsement
        </h1>
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
