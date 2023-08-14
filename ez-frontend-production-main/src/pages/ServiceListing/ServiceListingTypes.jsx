import React from "react";
import {
  FaChalkboardTeacher,
  FaHandPointRight,
  FaIndustry,
} from "react-icons/fa";
import { GiTeacher } from "react-icons/gi";
import { BiPhoneCall } from "react-icons/bi";
import { MdDesignServices, MdOutlineDraw } from "react-icons/md";
import { RxSketchLogo } from "react-icons/rx";
import { BsFilePdf, BsJournalBookmark } from "react-icons/bs";

import digitalProductThumbnail1 from "../../assets/digitalProductThumbnail.png"
import digitalProductThumbnail2 from "../../assets/digitalProductThumbnail.png"
import digitalProductThumbnail3 from "../../assets/digitalProductThumbnail.png"
import workshopsEventThumbnail from "../../assets/workshopsEventThumbnail.png"

import ShortCallList from "./Components/ShortCallList";
import MentorCallList from "./Components/MentorCallList";
import ServiceList from "./Components/ServiceList";
import DigitalList from "./Components/DigitalList";
import WorkshopList from "./Components/WorkshopList";

function ServiceListingTypes({ componentToShow, isFetchingCatalog, catalogs }) {
  return (
    <div>
      <div className={`${componentToShow == 1 ? "block" : "hidden"} px-2 md:px-0`}>
        <div className="flex flex-row gap-10 justify-between overflow-x-auto">
          {smallButtonsConsultation.map((item, index) => {
            return (
              <a href={`#${item.link}`} key={index}>
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
        <div className="pb-20">
          <div id={smallButtonsConsultation[0].link} className="mt-14">
            <div className="flex flex-row gap-3 mb-8 items-center">
              <span className="lg:text-5xl">{smallButtonsConsultation[0].icon}</span>
              <h2 className="font-bold text-[#003902] text-2xl">
                {smallButtonsConsultation[0].label}
              </h2>
            </div>
            {!isFetchingCatalog && <ShortCallList catalogs={catalogs} />}
          </div>
          <div id={smallButtonsConsultation[1].link} className="mt-14">
            <div className="flex flex-row gap-3 mb-8 items-center">
              <span className="lg:text-5xl">{smallButtonsConsultation[1].icon}</span>
              <h2 className="font-bold text-[#003902] text-2xl">
                {smallButtonsConsultation[1].label}
              </h2>
            </div>
            {!isFetchingCatalog && <MentorCallList catalogs={catalogs} />}
          </div>
        </div>
      </div>

      <div className={`${componentToShow == 2 ? "block" : "hidden"} px-2 md:px-0`}>
        <div className="flex flex-row gap-10 justify-between overflow-x-auto">
          {smallButtonsService.map((item, index) => {
            return (
              <a href={`#${item.link}`} className="" key={index}>
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
        <div className="pb-20">
          <div id={smallButtonsService[0].link} className="mt-14">
            {/* <div className="flex flex-row gap-3 mb-8 items-center">
              <span className="lg:text-5xl">{smallButtonsService[0].icon}</span>
              <h2 className="font-bold text-[#003902] text-2xl">
                {smallButtonsService[0].label}
              </h2>
            </div> */}
            {!isFetchingCatalog && <ServiceList catalogs={catalogs} />}
          </div>
        </div>
      </div>

      <div className={`${componentToShow == 3 ? "block" : "hidden"} px-2 md:px-0`}>
        <div className="flex flex-row gap-10 justify-between overflow-x-auto">
          {smallButtonsDigitalProduct.map((item, index) => {
            return (
              <a href={`#${item.link}`} className="" key={index}>
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
        <div className="pb-20">
          <div id={smallButtonsDigitalProduct[0].link} className="mt-14">
            {/* <div className="flex flex-row gap-3 mb-8 items-center">
              <span className="lg:text-5xl">{smallButtonsDigitalProduct[0].icon}</span>
              <h2 className="font-bold text-[#003902] text-2xl">
                {smallButtonsDigitalProduct[0].label}
              </h2>
            </div> */}
            {!isFetchingCatalog && <DigitalList catalogs={catalogs} />}
          </div>
        </div>
      </div>

      <div className={`${componentToShow == 4 ? "block" : "hidden"} px-2 md:px-0`}>
        <div className="flex flex-row gap-10 justify-between overflow-x-auto">
          {smallButtonsWorkshops.map((item, index) => {
            return (
              <a href={`#${item.link}`} className="" key={index}>
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
        <div className="pb-20">
          <div id={smallButtonsWorkshops[0].link} className="mt-14">
            {/* <div className="flex flex-row gap-3 mb-8 items-center">
              <span className="lg:text-5xl">{smallButtonsWorkshops[0].icon}</span>
              <h2 className="font-bold text-[#003902] text-2xl">
                {smallButtonsWorkshops[0].label}
              </h2>
            </div> */}
            {!isFetchingCatalog && <WorkshopList catalogs={catalogs} />}
          </div>
        </div>
      </div>
    </div>
  );
};

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
];

export default ServiceListingTypes