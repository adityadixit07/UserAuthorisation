import "./css/Marketplace.css";
import DashboardBar from "../../components/DashboardBar/DashboardBar";
import mob from "../../assets/mobile.png";
import design from "../../assets/design.png";
import slide from '../../assets/explore-icons/phillip-goldsberry-fZuleEfeA1Q-unsplash (1).jpg'
import {
  AiFillRightCircle,
  AiFillStar,
  AiOutlineAppstoreAdd,
} from "react-icons/ai";
// import design from "../../assets/design.png";
import slider from "../../assets/design.png";
import t1 from "../../assets/t1.png";
import t2 from "../../assets/t2.png";
import t3 from "../../assets/t3.png";
import { FaMicrophone } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { lazy } from "react";
import PopularEzer from "../main/IndividualDashboard/commp/PopularEzer.jsx";
import { useSelector } from "react-redux";
const Footer = lazy(() => import("../Landing/components/footer.jsx"));
import React from "react";
import "../main/IndividualDashboard/IndividualDashboard.css";
import { FaRegEye, FaChevronCircleRight } from "react-icons/fa";
import ezer from "../../assets/indiDashboard/mastercard.png";
import stock from "../../assets/stock.svg";
import mastercard from "../../assets/indiDashboard/mastercard.png";
import { HiSquares2X2 } from "react-icons/hi2";
import coins from "../../assets/coins.svg";
import popServices1 from "../../assets/popServices1.svg";
import popServices2 from "../../assets/popServices2.svg";
import popServices3 from "../../assets/popServices3.svg";
import CourtCircle from "../../assets/CourtCircle.svg";
import EzCircle from "../../assets/EzCircle.svg";
import balaanceCircle from "../../assets/balaanceCircle.svg";
// import { BiSolidLock } from "react-icons/Bi";
import ImageSlider from './../../components/ImageSlider/ImageSlider';

function Marketplace() {
  const { user } = useSelector((state) => state.user);

  return (
    <>
     <div className="overflow-x-hidden ">
     <div className="">
        <div>
          <div className=" ">
            <div>
              <p className=" text-2xl md:text-3xl  font-bold lg:text-4xl">
                Night or Day, <br />
                &rdquo;eZ&ldquo; Services always on the way.
              </p>
            </div>
            <div className="flex mt-5">
              <div className="flex  mt-2 ">
                <div>
                  <div className="mt-5 flex items-center gap-3 text-[#C0FFD6] w-[400px] md:w-[550px] lg:w-[600px] h-[60px]  rounded-[5px] placeholder-                           [#C0FFD6] placeholder-style">
                    <div className=" flex flex-col gap-5 mb-5 mt-5">
                      <div className="flex  items-center gap-3 text-[#C0FFD6] w-[400px] md:w-[550px] lg:w-[600px] h-[60px] bg-[#62CB99] rounded-[5px] placeholder-[#C0FFD6] placeholder-style">
                        <input
                          className=" text-[#C0FFD6] w-[400px] md:w-[550px] lg:w-[600px] h-[60px] bg-[#62CB99] rounded-[5px] placeholder-[#C0FFD6] placeholder-style font-semibold p-5 font-semibold p-5"
                          type="text"
                          placeholder="Demand Anything - You Demand We Supply "
                        />
                        <FaMicrophone className="fill-white w-10 h-5 " />
                        <FaSearch className="fill-white w-10 h-5 mr-2" />
                      </div>
                      <div className="">
                        <div className="gap-2 flex">
                          <p className=" border-[.5px] p-1 border-black font-semibold rounded-lg ">
                            Website Design
                          </p>
                          <p className="border-[.5px] p-1 border-black font-semibold rounded-lg">
                            T-shirt printing
                          </p>
                          <p className="border-[.5px] p-1 border-black font-semibold rounded-lg">
                            Company Regn
                          </p>
                          <p className="border-[.5px] p-1 border-black font-semibold rounded-lg">
                            Interior Design
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className=" lg:ml-5 mt-5 lg:mt-0 custom-margin  ">
                      <button className="drop-shadow-custom py-1 px-1 rounded-[10px] lg:w-[146px] lg:h-[60px]  bg-[#387759] text-white border-4 border-green-300 shadow-sm  w-[100px] h-[50px] ">
                        <p className="text-[15px] lg:text-[25px] ">eZ KARO!</p>
                      </button>
                      <p className="opacity-20 text-base font-bold text-gray-500  mt-[7px] text-[11px] lg:text-[17px]">
                        [Create Demand]
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" hidden flex-wrap text-[#300707] ">
              <div className="  box-custom mt-2  md:mt-0  rounded-[10px] py-1 px-2 text-[#300707] text-[17px] leading-[26px] font-bold text-center mr-[21px] ">
                Website Design
              </div>
              <div className="  box-custom mt-2  md:mt-0  rounded-[10px] py-1 px-2  text-[#300707] text-[17px] leading-[26px] font-bold text-center  mr-[21px] ">
                T-Shirt Printing
              </div>
              <div className="  box-custom mt-2  md:mt-0  rounded-[10px] py-1 px-2 text-[#300707] text-[17px] leading-[26px] font-bold text-center  mr-[21px] ">
                Company Regn
              </div>
              <div className="  box-custom mt-2  md:mt-0  rounded-[10px] py-1 px-2 text-[#300707] text-[17px] leading-[26px] font-bold text-center  mr-[21px] ">
                Interior Design
              </div>
            </div>


 {/* slider */}

 
<div id="indicators-carousel" class="relative w-full" data-carousel="static">
    <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
        <div class="hidden duration-700 ease-in-out" data-carousel-item="active">
            <img src={slide} class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src={slide} class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src={slide} class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src={slide} class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src={slide} class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
    </div>
    <div class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
        <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
    </div>
    <button type="button" class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
            </svg>
            <span class="sr-only">Previous</span>
        </span>
    </button>
    <button type="button" class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
            </svg>
            <span class="sr-only">Next</span>
        </span>
    </button>
</div>




    
    




            <div className="flex ml-[55px] md:ml-[180px] lg:ml-[8px] ">
              <button className="w-[300px] h-[59px] mt-[69px] flex items-center justify-center bg-[#3F3F3F] rounded-full drop-shadow-custom2 mb-[23px]">
                <span className="w-[221px] h-[30px] bg-[#ffffff] flex items-center justify-center ml-[10px] rounded-[7px] font-bold text-[#003902] text-[21px] leading-[22.5px]">
                  Assured Service
                </span>
              </button>
            </div>
            <div className="bg-[#EFEFEF] w-[430px] h-[200px] mt-[50px] flex flex-row justify-between md:w-[700px] md:h-[300px] lg:w-[883px] lg:h-[348px] rounded-[10px]">
              <div className="flex flex-col pl-[100px] pt-[50px] md:pt-[70px] lg:pt-[50px] md:pl-[200px] lg:pl-[41px] items-center">
                <h2 className=" text-center text-shadow-custom text-[10px] font-bold leading-[20px] text-[#146B1E] md:text-[20px] md:leading-[40px] lg:text-[39px] lg:leading-[60px] ">
                  Grow your Business with
                  <br /> eZ Consulting
                </h2>
                <p className=" mt-[10px] text-[9px] font-normal  md:text-[13px] lg:text-[18px] text-[#146B1E]   ">
                  “eZ helps brands grow faster, better !
                </p>
                <button className="  mt-[11px] w-[100px] h-[50px] md:w-[150px] md:h-[70px] lg:w-[223px] lg:h-[50px]  md:text-[20px] lg:text-[24px] rounded-[15px] bg-[#1DB86D] text-[white] text-[13px]   ">
                  Book 1:1 Call
                </button>
              </div>
              <div>
                <img
                  src={mob}
                  alt="Image 2"
                  className=" md:w-[230px] md:h-[300px] lg:w-[373px] lg:h-[343px]   w-[150px] h-[200px] "
                />
              </div>
            </div>

            <div className="flex flex-col justify-between  mt-[155px] ml-[15px]">
              <p className="leading-[45px] text-[30px] font-bold text-shadow-custom1">
                What&apos;s on your mind?
              </p>
            </div>
            <div className="flex flex-wrap md:flex-nowrap lg:flex-nowrap justify-between ">
              <div className="flex flex-col text-center mr-[59px]">
                <div>
                  <img
                    className=" w-[100px] md:w-[200px] lg:w-[250px] mt-[45px]"
                    src={t2}
                  />
                </div>
                <h3 className="mt-[40px] text-[#220303] text-[21px] font-normal ">
                  eZ Professional
                </h3>
              </div>
              <div className="flex flex-col text-center mr-[59px]">
                <div>
                  <img
                    className=" w-[100px] md:w-[200px] lg:w-[250px] mt-[45px]  "
                    src={CourtCircle}
                  />
                </div>
                <h3 className="mt-[40px] text-[#220303] text-[21px] font-normal ">
                  eZ Digital
                </h3>
              </div>
              <div className="flex flex-col text-center mr-[59px] ">
                <div>
                  <img
                    className=" w-[100px] md:w-[200px] lg:w-[250px] mt-[50px]  "
                    src={balaanceCircle}
                  />
                </div>
                <h3 className="mt-[40px] text-[#220303] text-[21px] font-normal ">
                  eZ Legal
                </h3>
              </div>
              <div className="flex flex-col text-center mr-[59px] ">
                <div>
                  <img
                    className=" w-[100px] md:w-[200px] lg:w-[250px] mt-[45px]  "
                    src={EzCircle}
                  />
                </div>
                <h3 className="mt-[40px] text-[#220303] text-[21px] font-normal ">
                  eZ Personal
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full ml-auto mr-[8%]">
        <div className="mt-[50px] ">
          <div className="flex items-center gap-4 py-5">
            <div className="flex justify-center items-center gap-5">
              <span className="bg-gray-200  fill-black">
                <HiSquares2X2 />
              </span>
              <div className="flex flex-col">
                <h1 className="font-bold text-4xl md:text-[20px]">
                  POPULAR SERVICES
                </h1>
                <h4 className="text-sm mt-2 md:text-base font-normal text-slate-800">
                  Find anything you are looking for from mentors to industry
                  professionals to founders and investors
                </h4>
              </div>
            </div>
          </div>
          <div className="flex popularEzer items-center overflow-x-auto md:p-3 p-2 gap-5">
            {[
              { name: "Pathikrit Pal", profession: "Data Scientist" },
              { name: "Kashish Malhotra", profession: "Business Consultant" },
              { name: "Md Faizan Arbani", profession: "Career Coach" },
            ].map((data, index) => {
              return (
                <div
                  key={index}
                  className="min-w-[250px] md:min-w-[300px]   flex flex-col items-center rounded-xl  p-4 backdrop-blur border"
                >
                  <div className="w-full shadower rounded-[10px] overflow-hidden">
                    <img
                      src={popServices1}
                      className="aspect-square w-full bg-cover bg-center"
                      alt=""
                    />
                  </div>

                  <button className="mt-5 p-4 flex gap-2 items-center font-bold text-green-600 rounded-2xl shadow-lg">
                    Pitch Deck Services
                  </button>
                </div>
              );
            })}
          </div>
        </div>
        <div className="">
          <div className="flex items-center gap-4 py-5">
            <div className="flex justify-center items-center gap-5">
              <span className="bg-gray-200  fill-black">
                <HiSquares2X2 />
              </span>
              <div className="flex flex-col">
                <h1 className="font-bold text-4xl md:text-[20px]">
                  1:1 Consulting
                </h1>

                <h4 className="text-sm mt-2 md:text-base font-normal text-slate-800">
                  Check out Profile Inspirations from the network
                </h4>
              </div>
            </div>
          </div>
          <div className="flex popularEzer items-center overflow-x-auto md:p-3 p-2 gap-5">
            {[
              { name: "Pathikrit Pal", profession: "Data Scientist" },
              { name: "Kashish Malhotra", profession: "Business Consultant" },
              { name: "Md Faizan Arbani", profession: "Career Coach" },
            ].map((data, index) => {
              return (
                <div
                  key={index}
                  className="min-w-[250px] md:min-w-[300px]   flex flex-col items-center rounded-xl  p-4 backdrop-blur border"
                >
                  <div className="w-full shadower rounded-[10px] overflow-hidden">
                    {/* ezer */}
                    <img
                      src={ezer}
                      className="aspect-square w-full bg-cover bg-center"
                      alt=""
                    />
                  </div>
                  <div className="w-[50%]  p-4">
                    <img
                      src={mastercard}
                      className="w-full h-full bg-center aspect-auto"
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col items-center p-3">
                    <h3 className="text-xl md:text-2xl font-bold">
                      {data.name}
                    </h3>
                    <h2 className=" md:text-2xl font-normal">
                      {data.profession}
                    </h2>
                  </div>
                  <button className="p-2.5 flex gap-2 items-center bg-green-700 rounded-[10px] text-white">
                    <FaRegEye />
                    View Profile
                  </button>
                </div>
              );
            })}
          </div>
        </div>
        <div className="mt-[155px] ml-[5rem]">
          <div className="flex items-center  gap-5 mb-5">
            <span className="  fill-black bg-gray-400 rounded-3xl p-2">
              <HiSquares2X2 className="w-10 h-10" />
            </span>

            <div>
              <h2 className="font-bold text-[20px]">
                Explore Digital Products{" "}
              </h2>
              <p>
                Find anything you are looking for from mentors to industry
                professionals to founders and investors{" "}
              </p>
            </div>
          </div>
          <div className="bg-gray-100 p-3 w-1/3">
            <img src={stock} alt="" />
            <div>
              <div className="flex flex-col mt-4 items-center">
                <h3 className="font-bold text-[20px] ">
                  Stock Market Investing
                </h3>
                <p>How to Invest? </p>
              </div>
              <div className="mt-4 flex items-center justify-center gap-2 mb-8">
                <AiFillStar className="text-[#3DF554] text-3xl" />
                <div className="profileLocationButton bg-[white] text-[black] rounded-xl p-2 font-bold flex shadow-md">
                  <span className="mx-1 ">4.0</span>
                  <AiFillStar className="text-[#3DF554] text-xl" />
                  <AiFillStar className="text-[#3DF554] text-xl" />
                  <AiFillStar className="text-[#3DF554] text-xl" />
                  <AiFillStar className="text-[#3DF554] text-xl" />
                  <AiFillStar className="text-[#A7A7A7] text-xl" />
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-3 items-center">
              <img src={coins} />
            </div>
            <div className="flex justify-center">
              <button className="flex gap-3 items-center justify-center bg-black  rounded-lg p-2 font-normal text-white">
                Buy Services
                {/* <BiSolidLock className="fill-white" /> */}
              </button>
            </div>
          </div>
        </div>
      </div>

     </div>

      {user?.role !== "seller" && (
        <div className="mt-[155px]">
          <PopularEzer className="w-full ml-auto" />
        </div>
      )}

      {/* <div className="w-full bg-gray-100 mt-[30px]">
        <Footer />
      </div> */}
    </>
  );
}

export default Marketplace;
