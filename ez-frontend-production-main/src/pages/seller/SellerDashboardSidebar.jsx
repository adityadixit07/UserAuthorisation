import React, { useState } from "react";
import "./SellerDashboardSidebar.css";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { RiAdvertisementFill, RiAdvertisementLine, } from "react-icons/ri";
import { TbSettings } from "react-icons/tb";
import { MdOutlineHelp, MdOutlineAutoGraph, MdOutlineEventAvailable, MdDesignServices, MdOutlinePayments } from "react-icons/md";
import { TbMessageCircle2 } from "react-icons/tb";
import { BsPersonFillExclamation, BsFacebook, BsTwitter, BsWhatsapp, BsLinkedin, BsListTask, BsRocketTakeoff } from "react-icons/bs";
import { LuLayoutDashboard } from "react-icons/lu";
import { CgUnavailable } from "react-icons/cg";
import { HiOutlineCircleStack } from "react-icons/hi2";

import { Link } from "react-router-dom";
import { BiMailSend } from "react-icons/bi";

const userPic = "../../../assets/ezFINALlogo.png";

const SellerDashboardSidebar = ({ user, profileRoute, setOpenComingSoon }) => {
    const [first, setFirst] = useState(false);
    const [second, setSecond] = useState(false);
    const [third, setThird] = useState(true);

    const [open, setopen] = useState(false)
    const handleOpen = () => {
        setopen(!open);
    };

    return (
        <div className="dashboard-wrapper w-full rounded-[10px] bg-[#FFFFFF] relative">
            <div className="w-full flex flex-col px-2 md:px-0 items-center justify-between">
                <div className="relative w-full overflow-hidden mb-5 rounded-[20px] backdrop-blur-md bg-white dashshad">
                    {user?.cover?.url ? (
                        <div className="absolute top-0 w-full h-[100px] flex items-center justify-center bg-black">
                            <img
                                className="object-cover h-[100px]"
                                src={user.cover.url}
                                alt="ezbannerback"
                            />
                        </div>
                    ) : (
                        <img
                            className="absolute top-0 object-cover"
                            src="../../../../../assets/banner1.png"
                            alt="ezbannerback"
                        />
                    )}
                    <div className="translate-y-7 flex flex-col items-center justify-center gap-5 py-12 md:px-10">
                        <div className="w-[100px] dashshad h-[100px] rounded-full overflow-hidden z-50">
                            <img src={user?.avatar?.url ? user?.avatar?.url : userPic} className="w-[100px] h-[100px] object-cover" alt="" />
                        </div>
                        <Link to={profileRoute}><h2 className="text-base font-normal text-slate-500 underline">{user.firstName} {user.lastName}</h2></Link>
                        <Link to={profileRoute}><h5 className="text-xs font-bold text-slate-400 lowercase">@{user.username}</h5></Link>
                    </div>
                </div>

                <div className="gap-6 w-full hidden md:flex md:flex-col">
                    <button className={`dashboard-button justify-between w-full !p-3 ${location.pathname === "/seller" && "!bg-gray-200 !text-gray-600"}`} onClick={() => setFirst(prev => !prev)}>
                        <img
                            className="w-[40px] h-[40px] mr-[10px] rounded-full object-cover"
                            src={user?.avatar?.url ? user?.avatar?.url : userPic}
                            alt="User profile"
                        />
                        <h2 className="-translate-x-1">
                            Seller Dashboard
                        </h2>
                        {first ? <FaCaretUp size={20} /> : <FaCaretDown size={20} />}
                    </button>
                    {/* {first && (
                        <>
                            <button className="dashboard-button justify-start !p-4 -mt-6 gap-8 w-full rounded-lg">
                                <div className="flex items-center justify-start gap-8 text-base font-bold">
                                    <Link to="/main" className="flex items-center gap-5">
                                        <LuLayoutDashboard size={25} />
                                        <span className="pt-[2px]">Dashboard</span>
                                    </Link>
                                </div>
                            </button>
                            <button className={`dashboard-button !cursor-default justify-start !p-4 -mt-6 gap-8 w-full rounded-lg ${location.pathname === "/seller" && "!bg-[#1DBF73] !text-white"}`}>
                                <div className="flex items-center justify-start gap-8 text-base font-bold">
                                    <div className="flex items-center gap-8">
                                        <LuLayoutDashboard size={25} />
                                        <span className="pt-[2px]">Seller Dashboard</span>
                                    </div>
                                </div>
                            </button>
                        </>
                    )} */}

                    {first && (
                        <Link to="/main" className={`shadow-md hover:bg-[#1DBF73] hover:text-white p-4 -mt-4 rounded-lg flex gap-5 flex-col`}>
                            <div className="flex items-center justify-start gap-8 text-base font-bold">
                                <LuLayoutDashboard size={30} />
                                Dashboard
                            </div>
                        </Link>
                    )}

                    <div className="w-full flex justify-center">
                        <div className="bg-green-200 w-[170px] h-[170px] hidden md:block rounded-lg">
                            <div className="flex flex-col py-2">
                                <div className="flex justify-center">
                                    <img
                                        src="/assets/profile-view.png"
                                        className="w-[150px] h-[100px] object-cover"
                                        alt="chart"
                                    />
                                </div>
                                <div className="px-[30px] flex flex-col">
                                    <span>Profile Views</span>
                                    <strong>{user?.profileViews}</strong>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Link to="/seller" className={`dashboard-button justify-start !p-4 gap-8 w-full ${location.pathname === "/seller" && "!bg-[#1DBF73] !text-white"}`}>
                        <HiOutlineCircleStack size={25} />
                        Overview
                    </Link>

                    <div className="w-full hidden md:flex flex-col">
                        <button className={`dashboard-button !p-4 !w-full`} onClick={() => setSecond(prev => !prev)}>
                            <div className="flex w-full gap-8">
                                <MdOutlineEventAvailable size={25} />
                                <h2>Available</h2>
                            </div>
                            {second ? <FaCaretUp size={20} /> : <FaCaretDown size={20} />}
                        </button>
                        {second && (
                            <div className="mt-6 flex flex-col gap-5">
                                <div className={`bg-slate-200 hover:bg-[#1DBF73] hover:text-white p-4 -mt-4 rounded-lg flex gap-5 flex-col`} onClick={() => setOpenComingSoon(true)}>
                                    <Link to="/seller" className="flex items-center justify-start gap-8 text-base font-bold">
                                        <CgUnavailable size={30} />
                                        Set Unavailable
                                    </Link>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="w-full hidden md:flex flex-col">
                        <button className={`dashboard-button !p-4 !w-full`} onClick={() => setThird(prev => !prev)}>
                            <div className="flex w-full gap-8">
                                <MdOutlineEventAvailable size={25} />
                                <h2>Services</h2>
                            </div>
                            {third ? <FaCaretUp size={20} /> : <FaCaretDown size={20} />}
                        </button>
                        {third && (
                            <div className="mt-6 flex flex-col gap-5">
                                <div className={`bg-slate-200 hover:bg-[#1DBF73] hover:text-white p-4 -mt-4 rounded-t-lg flex gap-5 flex-col ${location.pathname === "/seller/addservice" && "!bg-[#1DBF73] !text-white"}`}>
                                    <Link to="/seller/addservice" className="flex items-center justify-start gap-8 text-base font-bold">
                                        <MdDesignServices size={30} />
                                        Add a Service
                                    </Link>
                                </div>
                                {/* <div className="bg-white w-full h-[2px]" /> */}
                                <div className={`bg-slate-200 hover:bg-[#1DBF73] hover:text-white p-4 -mt-4 flex gap-5 flex-col ${location.pathname === "/seller/managelistings" && "!bg-[#1DBF73] !text-white"}`}>
                                    <Link to="/seller/managelistings" className="flex items-center justify-start gap-8 text-base font-bold">
                                        <BsListTask size={30} />
                                        Manage Listing
                                    </Link>
                                </div>
                                {/* <div className="bg-white w-full h-[2px]" /> */}
                                <div className={`bg-slate-200 hover:bg-[#1DBF73] hover:text-white p-4 -mt-4 flex gap-5 flex-col`}>
                                    <div className="flex items-center justify-start gap-8 text-base font-bold cursor-pointer" onClick={() => setOpenComingSoon(true)}>
                                        <BsRocketTakeoff size={30} />
                                        Boost Listings
                                    </div>
                                </div>
                                {/* <div className="bg-white w-full h-[2px]" /> */}
                                <div className={`bg-slate-200 hover:bg-[#1DBF73] hover:text-white p-4 -mt-4 flex gap-5 flex-col ${location.pathname === "/seller/availability" && "!bg-[#1DBF73] !text-white"}`}>
                                    <Link to="/seller/availability" className="flex items-center justify-start gap-8 text-base font-bold">
                                        <MdOutlineEventAvailable size={30} />
                                        Availability
                                    </Link>
                                </div>
                                {/* <div className="bg-white w-full h-[2px]" /> */}
                                <div className={`bg-slate-200 hover:bg-[#1DBF73] hover:text-white p-4 -mt-4 flex gap-5 flex-col ${location.pathname === "/seller/bookings" && "!bg-[#1DBF73] !text-white"}`}>
                                    <Link to="/seller/bookings" className="flex items-center justify-start gap-8 text-base font-bold">
                                        <FiPhoneCall size={30} />
                                        Bookings
                                    </Link>
                                </div>
                                {/* <div className="bg-white w-full h-[2px]" /> */}
                                <div className={`bg-slate-200 hover:bg-[#1DBF73] hover:text-white p-4 -mt-4 rounded-b-lg flex gap-5 flex-col`}>
                                    <div className="flex items-center justify-start gap-8 text-base font-bold cursor-pointer" onClick={() => setOpenComingSoon(true)}>
                                        <MdOutlinePayments size={30} />
                                        Payments
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    <Link to={profileRoute} className="dashboard-button justify-start !p-4 gap-8 w-full">
                        <BsPersonFillExclamation size={25} />
                        Edit Profile
                    </Link>
                    <button className="dashboard-button justify-start !p-4 gap-8 w-full" onClick={() => setOpenComingSoon(true)}>
                        <TbMessageCircle2 size={25} />Queries
                    </button>
                    <button className="dashboard-button justify-start !p-4 gap-8 w-full" onClick={() => setOpenComingSoon(true)}>
                        <MdOutlineAutoGraph size={25} />Analytics
                    </button>

                    {/* <button className="dashboard-button justify-between w-full !p-4" onClick={() => setThird(prev => !prev)}>
                        <RiAdvertisementFill size={25} />
                        Services {open ? <FaCaretUp size={20} /> : <FaCaretDown size={20} />}
                    </button>
                    {third && (
                        <div className={`bg-slate-200 p-4 -mt-4 rounded-lg flex gap-5 flex-col`}>
                            <button className="flex items-center justify-start gap-8 text-base font-bold"><FcAdvertising size={30} />Add Services</button>
                            <div className="bg-white w-full h-[2px]" />
                            <a href="#invite" className="flex items-center justify-start gap-8 text-base font-bold"><TbMailOpened size={30} />My Services</a>
                        </div>
                    )} */}

                    <Link to="/settings" className="dashboard-button justify-start !p-4 gap-8 w-full">
                        <TbSettings size={25} />
                        Settings
                    </Link>
                    <button className="dashboard-button justify-start !p-4 gap-8 w-full border-b-2" onClick={() => setOpenComingSoon(true)}>
                        <MdOutlineHelp size={25} />Help Center
                    </button>
                    {/* <button className="dashboard-button justify-between w-full !p-4" onClick={handleOpen}>
                        <RiAdvertisementFill size={25} />
                        Grow Audience {open ? <FaCaretUp size={20} /> : <FaCaretDown size={20} />}
                    </button> */}
                    <button className={`dashboard-button !p-4 !w-full`} onClick={handleOpen}>
                        <div className="flex w-full gap-8">
                            <RiAdvertisementFill size={25} />
                            <h2>Grow Audience</h2>
                        </div>
                        {open ? <FaCaretUp size={20} /> : <FaCaretDown size={20} />}
                    </button>
                    {open && (
                        <div className="flex flex-col gap-5">
                            <div className={`bg-slate-200 hover:bg-[#1DBF73] hover:text-white p-4 -mt-4 rounded-t-lg flex gap-5 flex-col cursor-pointer`} onClick={() => setOpenComingSoon(true)}>
                                <div className="flex items-center justify-start gap-8 text-base font-bold">
                                    {/* <FcAdvertising size={30} /> */}
                                    <RiAdvertisementLine size={30} />
                                    Advertise
                                </div>
                            </div>
                            <div className={`bg-slate-200 hover:bg-[#1DBF73] hover:text-white p-4 -mt-4 rounded-b-lg flex gap-5 flex-col cursor-pointer`} onClick={() => setOpenComingSoon(true)}>
                                <div className="flex items-center justify-start gap-8 text-base font-bold">
                                    {/* <TbMailOpened size={30} /> */}
                                    <BiMailSend size={30} />
                                    Invite your Friends
                                </div>
                            </div>
                        </div>
                    )}
                    {/* <div className={`${open ? "" : "hidden"} bg-slate-200 p-4 -mt-4 rounded-lg flex gap-5 flex-col`}>
                        <button className="flex items-center justify-start gap-8 text-base font-bold"><FcAdvertising size={30} />Advertise</button>
                        <div className="bg-white w-full h-[2px]" />
                        <a href="#invite" className="flex items-center justify-start gap-8 text-base font-bold"><TbMailOpened size={30} />Invite your Friends</a>
                    </div> */}

                    <div className="flex gap-5 flex-col pt-5 pb-5 mb-3 border-b-2 border-slate-50">
                        <h1 className="font-bold text-lg">Follow Us</h1>
                        <div className="flex w-full justify-between gap-4 items-center">
                            <BsTwitter fill="#00acee" size={45} />
                            <BsFacebook fill="#3b5998" size={45} />
                            <BsWhatsapp fill="#075e54" size={45} />
                            <BsLinkedin fill="#0072b1" size={45} />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default SellerDashboardSidebar