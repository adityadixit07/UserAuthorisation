// import React from "react";
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

import MentorCallList from "./Components/MentorCallList";
import ShortCallList from "./Components/ShortCallList";
import ServiceList from "./Components/ServiceList";
import DigitalList from "./Components/DigitalList";
import WorkshopList from "./Components/WorkshopList";

function ManageListingsTypes({ componentToShow, catalogs }) {
    return (
        <div className="px-2 md:px-0">
            <div id="consultations">
                <div className="pb-20">
                    <div id={smallButtonsConsultation[0].link} className="mt-14">
                        <div className="flex flex-row gap-3 mb-8 items-center">
                            <span className="lg:text-5xl">{smallButtonsConsultation[0].icon}</span>
                            <h2 className="font-bold text-[#003902] text-2xl">
                                {smallButtonsConsultation[0].label}
                            </h2>
                        </div>

                        <ShortCallList
                            catalogs={catalogs}
                        />
                    </div>

                    {/* Mentoring Calls */}
                    <div id={smallButtonsConsultation[1].link} className="mt-14">
                        <div className="flex flex-row gap-3 mb-8 items-center">
                            <span className="lg:text-5xl">{smallButtonsConsultation[1].icon}</span>
                            <h2 className="font-bold text-[#003902] text-2xl">
                                {smallButtonsConsultation[1].label}
                            </h2>
                        </div>

                        <MentorCallList
                            catalogs={catalogs}
                        />
                    </div>
                </div>
            </div>

            <div id="services" className="pt-20">
                <div className="pb-20">
                    <div id={smallButtonsService[0].link} className="mt-14">
                        <div className="flex flex-row gap-3 mb-8 items-center">
                            <span className="lg:text-5xl">{smallButtonsService[0].icon}</span>
                            <h2 className="font-bold text-[#003902] text-2xl">
                                {smallButtonsService[0].label}
                            </h2>
                        </div>

                        <ServiceList
                            catalogs={catalogs}
                        />
                    </div>
                </div>
            </div>

            <div id="digitalproducts" className="pt-20">
                <div className="pb-20">
                    <div id={smallButtonsDigitalProduct[0].link} className="mt-14">
                        <div className="flex flex-row gap-3 mb-8 items-center">
                            <span className="lg:text-5xl">{smallButtonsDigitalProduct[0].icon}</span>
                            <h2 className="font-bold text-[#003902] text-2xl">
                                {smallButtonsDigitalProduct[0].label}
                            </h2>
                        </div>

                        <DigitalList
                            catalogs={catalogs}
                        />
                    </div>
                </div>
            </div>

            <div id="workshops" className="pt-20">
                <div className="pb-20">
                    <div id={smallButtonsWorkshops[0].link} className="mt-14">
                        <div className="flex flex-row gap-3 mb-8 items-center">
                            <span className="lg:text-5xl">{smallButtonsWorkshops[0].icon}</span>
                            <h2 className="font-bold text-[#003902] text-2xl">
                                Workshop
                            </h2>
                        </div>

                        <WorkshopList
                            catalogs={catalogs}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

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

export default ManageListingsTypes;