import React from "react";
import { AiFillStar } from "react-icons/ai";
import {
  FaChalkboardTeacher,
  FaHandPointRight,
  FaIndustry,
} from "react-icons/fa";
import { GiSandsOfTime, GiTeacher, GiTwoCoins } from "react-icons/gi";
import { BiPhoneCall } from "react-icons/bi";
import { MdDesignServices, MdOutlineDraw } from "react-icons/md";
import { RxSketchLogo } from "react-icons/rx";
import { BsFilePdf, BsJournalBookmark } from "react-icons/bs";

import img from "../../../assets/cardImg.svg";
import coins from "../../../assets/coins.svg";
import videoCam from "../../../assets/serviceListingCamera.svg";
import timer from "../../../assets/serviceListingTimer.svg";
import iLogo from "../../../assets/profile-img/i-logo.svg";
import digitalProductThumbnail1 from "../../../assets/digitalProductThumbnail.png"
import digitalProductThumbnail2 from "../../../assets/digitalProductThumbnail.png"
import digitalProductThumbnail3 from "../../../assets/digitalProductThumbnail.png"
import serviceListingCheck from "../../../assets/serviceListingCheck.svg"
import workshopsEventThumbnail from "../../../assets/workshopsEventThumbnail.png"
import skillsLogo from "../../../assets/profile-img/skills-logo.svg"

import { HiInformationCircle } from "react-icons/hi";
import { MdOutlineFormatLineSpacing } from "react-icons/md";
import { MdStarRate } from "react-icons/md";
import { HiOutlineStar } from "react-icons/hi";
import { AiFillRightCircle } from "react-icons/ai";
import { MdVerified } from "react-icons/md";
import { VscVerifiedFilled } from "react-icons/vsc";
import { BsFillStarFill } from "react-icons/bs"
import { useNavigate } from "react-router-dom";

function ServiceListingTypes({ componentToShow }) {
  const smallButtonsConsultation = [
    {
      id: 1,
      icon: <BiPhoneCall />,
      label: "Short Calls",
      link: "shortcalls",
    },
    {
      id: 2,
      icon: <GiTeacher />,
      label: "Mentoring Calls",
      link: "mentoring",
    },
    {
      id: 3,
      icon: <FaIndustry />,
      label: "Industry-specific",
      link: "industryspecific",
    },
    {
      id: 4,
      icon: <FaChalkboardTeacher />,
      label: "Coaching sessions",
      link: "coachingsessions",
    },
  ];
  const smallButtonsService = [
    {
      id: 1,
      icon: <FaHandPointRight />,
      label: "Packages",
      link: "packages",
    },
    {
      id: 2,
      icon: <MdDesignServices />,
      label: "Sponsors",
      link: "sponsors",
    },
    {
      id: 3,
      icon: <RxSketchLogo />,
      label: "Logo",
      link: "logo",
    },
    {
      id: 4,
      icon: <MdOutlineDraw />,
      label: "Illustration",
      link: "illustration",
    },
  ];
  const smallButtonsDigitalProduct = [
    {
      id: 1,
      icon: <BsFilePdf />,
      label: "Resources",
      link: "resources",
    },
    {
      id: 2,
      icon: <GiTeacher />,
      label: "Tutorials",
      link: "tutorials",
    },
    {
      id: 3,
      icon: <FaIndustry />,
      label: "Industries Specific",
      link: "industriesspecific",
    },
    {
      id: 4,
      icon: <BsJournalBookmark />,
      label: "Courses",
      link: "courses",
    },
  ];
  const smallButtonsWorkshops = [
    {
      id: 1,
      icon: <FaHandPointRight />,
      label: "This week",
      link: "thisweek",
    },
    {
      id: 2,
      icon: <FaHandPointRight />,
      label: "This month",
      link: "thismonth",
    },
    {
      id: 3,
      icon: <FaHandPointRight />,
      label: "Next month",
      link: "nextmonth",
    },
  ];

  const digitalProduct_Resources_Members = [
    {
      id: 1,
      title: "Consulting casebook",
      domain: "Consulting",
      topics: [
        "How to solve case studies during the interview",
        "How to solve case studies during the interview",
        "How to solve case studies during the interview",
      ],
      price: 19265,
      rating: 4.0,
      reviews: 102,
      thumbnail: <img src={digitalProductThumbnail1} />
    },
    {
      id: 2,
      title: "Law casebook",
      domain: "Law",
      topics: [
        "How to solve case studies in the court",
        "How to solve case studies in the court",
        "How to solve case studies in the court",
      ],
      price: 20000,
      rating: 5.0,
      reviews: 200,
      thumbnail: <img src={digitalProductThumbnail2} />
    },
    {
      id: 3,
      title: "IT casebook",
      domain: "Technology",
      topics: [
        "How to solve case studies in the office",
        "How to solve case studies in the office",
        "How to solve case studies in the office",
      ],
      price: 30000,
      rating: 4,
      reviews: 250,
      thumbnail: <img src={digitalProductThumbnail3} />
    },
  ]

  const workshops_ThisWeek_Members = [
    {
      id: 1,
      thumbnail: <img className="rounded" src={workshopsEventThumbnail} />,
      tags: [
        "ui/ux", "design", "appdesign",
      ],
      title: "Workshop on Data Science Certification from IIT Madras",
      date: "June 30",
      time: "4:52 PM",
      domain: "Technology",
      price: "Free",
    },
    {
      id: 2,
      thumbnail: <img className="rounded" src={workshopsEventThumbnail} />,
      tags: [
        "blockchain", "etherium",
      ],
      title: "Blockchain Workshop | Cryptocurrencies | Bitcoin",
      date: "Video on demand",
      time: "",
      domain: "Technology",
      price: 899,
    },
  ]

  const navigate = useNavigate();
  const goToBuyMyServicesPage = () => {
    // console.log("go")
    navigate("buymyservice");
  }

  return (
    <>
      {/* 1:1 Consultation */}
      <div className={`${componentToShow == 1 ? "block" : "hidden"}`}>
        {/* small square buttons */}
        <div className="flex flex-row justify-between">
          {smallButtonsConsultation.map((item, index) => {
            return (
              <a href={`#${item.link}`} className="" key={item.id}>
                <div className="flex flex-col items-center justify-start">
                  <div className="w-[80px] h-[80px] bg-gray-200 rounded flex justify-center items-center text-5xl">
                    {item.icon}
                  </div>
                  <p className="font-bold">{item.label}</p>
                </div>
              </a>
            );
          })}
        </div>

        {/* main content for buttons */}
        <div className="pb-20">
          {/* Short calls */}
          <div id={smallButtonsConsultation[0].link} className="mt-14">
            {/* header */}
            <div className="flex flex-row gap-3 mb-8 items-center">
              <span className="lg:text-5xl">{smallButtonsConsultation[0].icon}</span>
              <h2 className="font-bold text-[#003902] text-2xl">
                {smallButtonsConsultation[0].label}
              </h2>
            </div>
            {/* members */}
            <div className="flex flex-row overflow-w-auto gap-2">
              {/* quick call */}
              <div className="border border-[rgb(192,197,197)] w-[40%] aspect-square rounded flex flex-col items-start justify-between py-2 px-4">
                <h3 className="font-bold text-[#003902] text-xl">Quick Call</h3>
                <div className="flex flex-row gap-3 items-center">
                  <img src={videoCam} />
                  <div>1:1 Call</div>
                  <img src={timer} />
                  <div>10 mins</div>
                </div>
                <div className="flex flex-row gap-3 items-center">
                  <img src={coins} />
                  <div>250</div>
                </div>
                <button className="flex gap-3 items-center bg-green-500 rounded-lg p-2 font-semibold text-white">
                  Buy Services <AiFillRightCircle className="fill-white" />
                </button>
              </div>
              {/* short call */}
              <div className="border border-[rgb(192,197,197)] w-[40%] aspect-square rounded flex flex-col items-start justify-between py-2 px-4">
                <h3 className="font-bold text-[#003902] text-xl">Short Call</h3>
                <div className="flex flex-row gap-3 items-center">
                  <img src={videoCam} />
                  <div>1:1 Call</div>
                  <img src={timer} />
                  <div>30 mins</div>
                </div>
                <div className="flex flex-row gap-3 items-center">
                  <img src={coins} />
                  <div>500</div>
                </div>
                <button className="flex gap-3 items-center bg-green-500 rounded-lg p-2 font-semibold text-white">
                  Buy Services <AiFillRightCircle className="fill-white" />
                </button>
              </div>
            </div>
          </div>
          {/* Mentoring Calls */}
          <div id={smallButtonsConsultation[1].link} className="mt-14">
            {/* header */}
            <div className="flex flex-row gap-3 mb-8 items-center">
              <span className="lg:text-5xl">{smallButtonsConsultation[1].icon}</span>
              <h2 className="font-bold text-[#003902] text-2xl">
                {smallButtonsConsultation[1].label}
              </h2>
            </div>
            {/* members */}
            <div className="flex flex-col overflow-w-auto gap-2">
              {/* member 1 */}
              <div className="border border-[rgb(192,197,197)] w-[100%] aspect-[3/1] rounded flex flex-col items-start justify-between py-2 px-4">
                <h3 className="font-bold text-[#003902] text-xl">
                  How to crack CAT/XAT?
                </h3>
                <div className="flex flex-row gap-3 items-center">
                  <img src={videoCam} />
                  <div>1:1 Call</div>
                  <img src={timer} />
                  <div>45 mins</div>
                </div>
                <div className="flex flex-row gap-3 items-center">
                  <img src={coins} />
                  <div>750</div>
                </div>
                <div className="flex flex-row gap-3 items-center">
                  <div>CAT Preparation</div>
                  <div>XAT Preparation</div>
                </div>
                <button className="flex gap-3 items-center bg-green-500 rounded-lg p-2 font-semibold text-white">
                  Buy Services <AiFillRightCircle className="fill-white" />
                </button>
              </div>
              {/* member 2 */}
              <div className="border border-[rgb(192,197,197)] w-[100%] aspect-[3/1] rounded flex flex-col items-start justify-between py-2 px-4">
                <h3 className="font-bold text-[#003902] text-xl">
                  How to crack CAT/XAT?
                </h3>
                <div className="flex flex-row gap-3 items-center">
                  <img src={videoCam} />
                  <div>1:1 Call</div>
                  <img src={timer} />
                  <div>45 mins</div>
                </div>
                <div className="flex flex-row gap-3 items-center">
                  <img src={coins} />
                  <div>750</div>
                </div>
                <div className="flex flex-row gap-3 items-center">
                  <div>CAT Preparation</div>
                  <div>XAT Preparation</div>
                </div>
                <button className="flex gap-3 items-center bg-green-500 rounded-lg p-2 font-semibold text-white">
                  Buy Services <AiFillRightCircle className="fill-white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>



      {/* Service */}
      <div className={`${componentToShow == 2 ? "block" : "hidden"}`}>
        {/* small square buttons */}
        <div className="flex flex-row justify-between overflow-x-auto w-full gap-4">
          {smallButtonsService.map((item, index) => {
            return (
              <a href={`#${item.link}`} className="" key={item.id}>
                <div className="flex flex-col items-center justify-start">
                  <div className="w-[80px] h-[80px] bg-gray-200 rounded flex justify-center items-center text-3xl">
                    {item.icon}
                  </div>
                  <p className="font-bold">{item.label}</p>
                </div>
              </a>
            );
          })}
        </div>

        {/* main content for buttons */}
        <div className="pb-20">
          {/* Packages */}
          <div id={smallButtonsService[0].link} className="mt-14">
            {/* header */}
            <div className="flex flex-row gap-3 mb-8 items-center">
              <span className="lg:text-5xl">{smallButtonsService[0].icon}</span>
              <h2 className="font-bold text-[#003902] text-2xl">
                {smallButtonsService[0].label}
              </h2>
            </div>
            {/* members (cards) */}
            <div className="flex  gap-4 p-5">
              {/* card-1 */}
              <div className="w-1/4 shadow-xl rounded-lg p-2 lg:w-1/3">
                <div className="shadow-lg mb-3 flex flex-col items-center p-2 ">
                  <img src={img} alt="Card Img" />
                  <p className="font-bold ">
                    I will design responsive website UI UX design in figma
                  </p>
                </div>
                <div className="flex mb-3">
                  <HiInformationCircle className="fill-[#CACACA] w-[2rem] h-[2rem] " />
                  <button className="bg-[#CACACA] p-1 rounded-xl text-white font-bold">Designing</button>
                </div>
                <div className="flex flex-wrap gap-3 mb-3">
                  <MdOutlineFormatLineSpacing className="fill-[gray]" />
                  <button className="shadow-lg">#ui/ux</button>
                  <button className="shadow-lg">#design</button>
                  <button className="shadow-lg">#appdesign</button>
                  <button className="shadow-lg">#ui/ux</button>
                  <button className="shadow-lg">#design</button>
                </div>
                <div className="flex items-center">
                  <BsFillStarFill className="fill-[green]" />
                  <button className="flex items-center shadow-xl rounded-lg px-2 py-1 ">
                    4.0 <MdStarRate className="fill-[green]" />
                    <MdStarRate className="fill-[green]" />
                    <MdStarRate className="fill-[green]" />
                    <MdStarRate className="fill-[green]" />
                    <MdStarRate className="fill-[green]" />
                  </button>
                  <p>(102)</p>
                </div>
                <div className="flex items-center">
                  <img src={coins} alt="" />
                  <span className="font-bold text-green-700 mr-5">Rs. 19,024</span>
                  <div className=" flex flex-col items-center text-gray-600 font-semibold">
                    <MdVerified className="fill-[green]" />
                    eZ Assured
                  </div>
                </div>
                <div>
                  <button onClick={goToBuyMyServicesPage} className="flex gap-3 items-center bg-green-500 rounded-lg p-2 font-semibold text-white">
                    Buy Services <AiFillRightCircle className="fill-white" />
                  </button>
                </div>
              </div>
              {/* card-2 */}
              <div className="w-1/4 shadow-xl rounded-lg p-2 lg:w-1/3">
                <div className="shadow-lg mb-3 flex flex-col items-center p-2 ">
                  <img src={img} alt="Card Img" />
                  <p className="font-bold ">
                    I will design responsive website UI UX design in figma
                  </p>
                </div>
                <div className="flex mb-3">
                  <HiInformationCircle className="fill-[#CACACA] w-[2rem] h-[2rem] " />
                  <button className="bg-[#CACACA] p-1 rounded-xl text-white font-bold">Designing</button>
                </div>
                <div className="flex flex-wrap gap-3 mb-3">
                  <MdOutlineFormatLineSpacing className="fill-[gray]" />
                  <button className="shadow-lg">#ui/ux</button>
                  <button className="shadow-lg">#design</button>
                  <button className="shadow-lg">#appdesign</button>
                  <button className="shadow-lg">#ui/ux</button>
                  <button className="shadow-lg">#design</button>
                </div>
                <div className="flex items-center">
                  <BsFillStarFill className="fill-[green]" />
                  <button className="flex items-center shadow-xl rounded-lg px-2 py-1 ">
                    4.0 <MdStarRate className="fill-[green]" />
                    <MdStarRate className="fill-[green]" />
                    <MdStarRate className="fill-[green]" />
                    <MdStarRate className="fill-[green]" />
                    <MdStarRate className="fill-[green]" />
                  </button>
                  <p>(102)</p>
                </div>
                <div className="flex items-center">
                  <img src={coins} alt="" />
                  <span className="font-bold text-green-700 mr-5">Rs. 19,024</span>
                  <div className=" flex flex-col items-center text-gray-600 font-semibold">
                    <MdVerified className="fill-[green]" />
                    eZ Assured
                  </div>
                </div>
                <div>
                  <button onClick={goToBuyMyServicesPage} className="flex gap-3 items-center bg-green-500 rounded-lg p-2 font-semibold text-white">
                    Buy Services <AiFillRightCircle className="fill-white" />
                  </button>
                </div>
              </div>
              {/* card-3 */}
              <div className="w-1/4 shadow-xl rounded-lg p-2 lg:w-1/3">
                <div className="shadow-lg mb-3 flex flex-col items-center p-2 ">
                  <img src={img} alt="Card Img" />
                  <p className="font-bold ">
                    I will design responsive website UI UX design in figma
                  </p>
                </div>
                <div className="flex mb-3">
                  <HiInformationCircle className="fill-[#CACACA] w-[2rem] h-[2rem] " />
                  <button className="bg-[#CACACA] p-1 rounded-xl text-white font-bold">Designing</button>
                </div>
                <div className="flex flex-wrap gap-3 mb-3">
                  <MdOutlineFormatLineSpacing className="fill-[gray]" />
                  <button className="shadow-lg">#ui/ux</button>
                  <button className="shadow-lg">#design</button>
                  <button className="shadow-lg">#appdesign</button>
                  <button className="shadow-lg">#ui/ux</button>
                  <button className="shadow-lg">#design</button>
                </div>
                <div className="flex items-center">
                  <BsFillStarFill className="fill-[green]" />
                  <button className="flex items-center shadow-xl rounded-lg px-2 py-1 ">
                    4.0 <MdStarRate className="fill-[green]" />
                    <MdStarRate className="fill-[green]" />
                    <MdStarRate className="fill-[green]" />
                    <MdStarRate className="fill-[green]" />
                    <MdStarRate className="fill-[green]" />
                  </button>
                  <p>(102)</p>
                </div>
                <div className="flex items-center">
                  <img src={coins} alt="" />
                  <span className="font-bold text-green-700 mr-5">Rs. 19,024</span>
                  <div className=" flex flex-col items-center text-gray-600 font-semibold">
                    <MdVerified className="fill-[green]" />
                    eZ Assured
                  </div>
                </div>
                <div>
                  <button onClick={goToBuyMyServicesPage} className="flex gap-3 items-center bg-green-500 rounded-lg p-2 font-semibold text-white">
                    Buy Services <AiFillRightCircle className="fill-white" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



      {/* Digital products */}
      <div className={`${componentToShow == 3 ? "block" : "hidden"}`}>
        {/* small square buttons */}
        <div className="flex flex-row justify-between overflow-x-auto w-full gap-4">
          {smallButtonsDigitalProduct.map((item, index) => {
            return (
              <a href={`#${item.link}`} className="" key={item.id}>
                <div className="flex flex-col items-center justify-start">
                  <div className="w-[80px] h-[80px] bg-gray-200 rounded flex justify-center items-center text-3xl">
                    {item.icon}
                  </div>
                  <p className="font-bold">{item.label}</p>
                </div>
              </a>
            );
          })}
        </div>

        {/* main content for buttons */}
        <div className="pb-20">
          {/* Resources */}
          <div id={smallButtonsDigitalProduct[0].link} className="mt-14">
            {/* header */}
            <div className="flex flex-row gap-3 mb-8 items-center">
              <span className="lg:text-5xl">{smallButtonsDigitalProduct[0].icon}</span>
              <h2 className="font-bold text-[#003902] text-2xl">
                {smallButtonsDigitalProduct[0].label}
              </h2>
            </div>
            {/* members (cards) */}
            <div className="flex flex-row flex-wrap gap-2">
              {
                digitalProduct_Resources_Members.map((data, index) => (
                  <div key={data.id} className="resourcesCard w-[45%] rounded flex flex-col items-stretch py-2 px-1">
                    {data.thumbnail}
                    <div className="p-0 pt-0">
                      {/* card heading */}
                      <div className="py-4 px-2 mt-1 border rounded border-[rgb(247,247,247)]">
                        <h2 className="font-bold text-2xl">{data.title}</h2>
                      </div>

                      {/* domain and rating div */}
                      <div className="px-2 flex flex-row flex-wrap items-center justify-between">
                        {/* domain */}
                        <div className="mt-4 flex flex-row gap-2 items-center">
                          <img src={iLogo} className="saturate-0 h-6" />
                          <p className="bg-[#B5B5B5] text-white font-bold py-1 px-2 rounded-2xl">{data.domain}</p>
                        </div>
                        {/* rating */}
                        <div className="mt-4 flex justify-center items-center gap-2">
                          <AiFillStar className="text-[#3DF554] text-3xl" />
                          <div className="profileLocationButton bg-[white] text-[black] rounded-2xl p-2 font-bold flex">
                            <span className="me-1">{data.rating}</span>
                            <AiFillStar className="text-[#3DF554] text-xl" />
                            <AiFillStar className="text-[#3DF554] text-xl" />
                            <AiFillStar className="text-[#3DF554] text-xl" />
                            <AiFillStar className="text-[#3DF554] text-xl" />
                            <AiFillStar className="text-[#A7A7A7] text-xl" />
                          </div>
                          <p>({data.reviews})</p>
                        </div>
                      </div>

                      {/* topics div */}
                      <div className="mt-4 px-2">
                        {
                          data.topics.map((topic, topicId) => (
                            <div key={data.id.toString() + topicId.toString()} className="flex flex-row items-center">
                              <img src={serviceListingCheck} className="h-6 me-1" />
                              <ul className="p-0 m-0">
                                <li className="m-0 p-0 my-2">{topic}</li>
                              </ul>
                            </div>
                          ))
                        }
                      </div>

                      {/* price */}
                      <div className="flex flex-row mt-4 px-2">
                        <img src={coins} className="me-4" />
                        <p className="text-2xl font-bold text-[#146B1E]">Rs. {data.price}</p>
                      </div>

                      {/* buy button */}
                      <div className="mt-4 px-2">
                        <button className="flex gap-3 items-center bg-green-500 rounded-lg p-2 font-semibold text-white">
                          Buy Now <AiFillRightCircle className="fill-white" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              }

            </div>
          </div>
        </div>
      </div>


      {/* Workshops */}
      <div className={`${componentToShow == 4 ? "block" : "hidden"}`}>
        {/* small square buttons */}
        <div className="flex flex-row justify-between overflow-x-auto w-full gap-4">
          {smallButtonsWorkshops.map((item, index) => {
            return (
              <a href={`#${item.link}`} className="" key={item.id}>
                <div className="flex flex-col items-center justify-start">
                  <div className="w-[80px] h-[80px] bg-gray-200 rounded flex justify-center items-center text-3xl">
                    {item.icon}
                  </div>
                  <p className="font-bold">{item.label}</p>
                </div>
              </a>
            );
          })}
        </div>

        {/* main content for buttons */}
        <div className="pb-20">
          {/* this week */}
          <div id={smallButtonsWorkshops[0].link} className="mt-14">
            {/* header */}
            <div className="flex flex-row gap-3 mb-8 items-center">
              <span className="lg:text-5xl">{smallButtonsWorkshops[0].icon}</span>
              <h2 className="font-bold text-[#003902] text-2xl">
                {smallButtonsWorkshops[0].label}
              </h2>
            </div>
            {/* members (cards) */}
            <div className="flex flex-col flex-wrap gap-4">
              {
                workshops_ThisWeek_Members.map((thisweekEvent, eventId) => (
                  <div key={thisweekEvent.id} className="workshopCard flex flex-row p-4 rounded items-stretch">
                    {/* thumbnail and tags */}
                    <div className="flex flex-col min-w-[40%] max-w-[40%]">
                      {thisweekEvent.thumbnail}
                      <div className="mt-4 flex items-start">
                        <img src={skillsLogo} alt="" />
                        <div className="ms-2 flex flex-row flex-wrap">
                          {
                            thisweekEvent.tags.map((tag, tagId) => (
                              <p key={thisweekEvent.toString() + tagId} className="workshopEventTags py-1 px-2 bg-white rounded-3xl mx-2 mb-2">#{tag}</p>
                            ))
                          }
                        </div>
                      </div>
                    </div>

                    {/* event details */}
                    <div className="ms-5">
                      {/* title */}
                      <h2 className="text-2xl font-bold">
                        {thisweekEvent.title}
                      </h2>
                      {/* date-time */}
                      <p className="mt-2">
                        <span>{thisweekEvent.date}</span>{thisweekEvent.time == "" ? "" : " | "}<span>{thisweekEvent.time}</span>
                      </p>
                      {/* domain */}
                      <div className="flex flex-row items-center mt-4">
                        <img src={iLogo} className="saturate-0 me-4" alt="" />
                        <p className="bg-[#B5B5B5] text-white font-bold py-1 px-2 rounded-2xl">{thisweekEvent.domain}</p>
                      </div>
                      {/* price and buy button */}
                      <div className="flex flex-row items-center mt-4">
                        <img src={coins} className="me-4" alt="" />
                        <p className="text-2xl font-bold text-[#146B1E] me-10">{thisweekEvent.price}</p>
                        <button className="flex gap-3 items-center bg-green-500 rounded-lg p-2 px-4 font-semibold text-white">
                          Buy Now <AiFillRightCircle className="fill-white" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ServiceListingTypes;
