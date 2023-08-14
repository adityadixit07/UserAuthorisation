import React from "react";
import img from "../../../assets/cardImg.svg";
import coins from "../../../assets/coins.svg";
import { HiInformationCircle } from "react-icons/hi";
import { MdOutlineFormatLineSpacing } from "react-icons/md";
import { MdStarRate } from "react-icons/md";
import { HiOutlineStar } from "react-icons/hi";
import { AiFillRightCircle } from "react-icons/ai";
import { MdVerified } from "react-icons/md";
import { VscVerifiedFilled } from "react-icons/vsc";

function ServicesCards() {
  return (
    <div className="flex w-2/3 gap-4 p-5">
      {/* Card 1 */}
      <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/3">
        <div className="shadow-lg">
          <img src={img} alt="Card Img" />
          <p className="text-bold">
            I will design responsive website UI UX design in figma
          </p>
        </div>
        <div className="flex">
          <HiInformationCircle className="fill-[gray] " />
          <button className="bg-gray-300">Designing</button>
        </div>
        <div className="flex gap-3">
          <MdOutlineFormatLineSpacing className="fill-[gray]" />
          <button className="shadow-lg">#ui/ux</button>
          <button className="shadow-lg">#design</button>
          <button className="shadow-lg">#appdesign</button>
          <button className="shadow-lg">#ui/ux</button>
          <button className="shadow-lg">#design</button>
        </div>
        <div className="flex">
          <HiOutlineStar className="fill-[green]" />
          <button className="flex">
            4.0 <MdStarRate className="fill-[green]" />
          </button>
          <p>(102)</p>
        </div>
        <div className="flex">
          <img src={coins} alt="" />
          <span>Rs. 19,024</span>
          <div>
            <MdVerified className="fill-[green]"/>
            eZ Assured
          </div>
          </div>
          <div >
            <button className="flex bg-green-300 rounded-lg">
              Buy Services <AiFillRightCircle className="fill-white"/>
            </button>
        
        </div>
      </div>

      {/* Card 2 */}
      <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/3">
        <div className="shadow-lg">
          <img src={img} alt="Card Img" />
          <p className="text-bold">
            I will design responsive website UI UX design in figma
          </p>
        </div>
        <div className="flex">
          <HiInformationCircle className="fill-[gray] " />
          <button className="bg-gray-300">Designing</button>
        </div>
        <div className="flex flex-wrap gap-3">
          <MdOutlineFormatLineSpacing className="fill-[gray]" />
          <button className="shadow-lg">#ui/ux</button>
          <button className="shadow-lg">#design</button>
          <button className="shadow-lg">#appdesign</button>
          <button className="shadow-lg">#ui/ux</button>
          <button className="shadow-lg">#design</button>
        </div>
        <div className="flex">
          <HiOutlineStar className="fill-[green]" />
          <button className="flex">
            4.0 <MdStarRate className="fill-[green]" />
          </button>
          <p>(102)</p>
        </div>
        <div className="flex">
          <img src={coins} alt="" />
          <span>Rs. 19,024</span>
          <div>
            <MdVerified className="fill-[green]"/>
            eZ Assured
          </div>
          </div>
          <div >
            <button className="flex bg-green-300 rounded-lg">
              Buy Services <AiFillRightCircle className="fill-white"/>
            </button>
        
        </div>
      </div>
      {/* Card 3 */}
      <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/3">
        <div className="shadow-lg p-2">
          <img src={img} alt="Card Img" />
          <p className="text-bold">
            I will design responsive website UI UX design in figma
          </p>
        </div>
        <div className="flex">
          <HiInformationCircle className="fill-[gray] " />
          <button className="bg-gray-300">Designing</button>
        </div>
        <div className="flex flex-wrap gap-3">
          <MdOutlineFormatLineSpacing className="fill-[gray]" />
          <button className="shadow-lg">#ui/ux</button>
          <button className="shadow-lg">#design</button>
          <button className="shadow-lg">#appdesign</button>
          <button className="shadow-lg">#ui/ux</button>
          <button className="shadow-lg">#design</button>
        </div>
        <div className="flex">
          <HiOutlineStar className="fill-[green]" />
          <button className="flex">
            4.0 <MdStarRate className="fill-[green]" />
          </button>
          <p>(102)</p>
        </div>
        <div className="flex items-center">
          <img src={coins} alt="" />
          <span className="font-bold mr-5">Rs. 19,024</span>
          <div className="flex flex-col  items-center"> 
            <MdVerified className="fill-[green]"/>
            eZ Assured
          </div>
          </div>
          <div >
            <button className="flex bg-green-300 rounded-lg">
              Buy Services <AiFillRightCircle className="fill-white"/>
            </button>
        
        </div>
      </div>
    </div>
  );
}

export default ServicesCards;
