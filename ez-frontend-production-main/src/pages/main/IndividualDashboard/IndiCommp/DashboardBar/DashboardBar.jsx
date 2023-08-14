import React, { useState } from "react";
import "./DashboardBar.css";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import { RiAdvertisementFill, RiAdvertisementLine } from "react-icons/ri";
import { TbSettings } from "react-icons/tb";
import { MdOutlineHelp, MdPlaylistAddCheck, MdOutlineAutoGraph } from "react-icons/md";
import { TbMessageCircle2 } from "react-icons/tb";
import { BsPersonFillExclamation, BsFacebook, BsTwitter, BsWhatsapp, BsLinkedin } from "react-icons/bs";
import { BiMailSend } from "react-icons/bi";
import { LuLayoutDashboard } from "react-icons/lu";
import { SiSellfy } from "react-icons/si";
import { Link } from "react-router-dom";
import { HiOutlineCircleStack } from "react-icons/hi2";

const userPic = "../../../assets/ezFINALlogo.png";

const DashboardBar = ({ user, profileRoute, setOpenComingSoon }) => {
  const [first, setFirst] = useState(false);
  const [open, setopen] = useState(false)
  const handleOpen = () => {
    setopen(!open);
  };

  return (
    <div className="dashboard-wrapper w-full rounded-[10px] bg-[#FFFFFF] relative">
      <div className="w-full flex flex-col px-2 md:px-0 items-center justify-between">
        <div className="w-full relative overflow-hidden mb-5 rounded-[20px] backdrop-blur-md bg-white dashshad">
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
            <Link to={profileRoute}>
              <div className="text-xs font-bold text-slate-400">
                {user?.username ? <h5 className=" lowercase">@{user.username}</h5> : "Create your Username"}
              </div>
            </Link>
          </div>
        </div>

        {/* <div className="dashboard-buttons gap-5 w-full md:w-[260px]"> */}
        <div className="w-full gap-6 hidden md:flex flex-col">
          <button className={`dashboard-button justify-between w-full !p-3 ${location.pathname === "/main" && "!bg-gray-200 !text-gray-600"}`} onClick={() => setFirst(prev => !prev)}>
            <img
              className="w-[40px] h-[40px] mr-[10px] rounded-full object-cover"
              src={user?.avatar?.url ? user?.avatar?.url : userPic}
              alt="User profile"
            />
            <h2 className="-translate-x-1">
              Dashboard
            </h2>
            {first ? <FaCaretUp size={20} /> : <FaCaretDown size={20} />}
          </button>
          {first && (
            <>
              {/* <div className={`dashboard-button !cursor-default justify-start -mt-6 p-4 gap-8 w-full ${location.pathname === "/main" && "!bg-[#1DBF73] !text-white"}`}>
                <div className="flex items-center gap-8">
                  <BiUserCircle size={27} />
                  <span className="pt-[2px]">Dashboard</span>
                </div>
              </div> */}

              {/* <button className=" justify-start !p-4 -mt-6 gap-8 w-full rounded-lg">
                <div className="flex items-center justify-start gap-8 text-base font-bold">
                  {user.role !== "seller" ? (
                    <Link to="/sellerhomepage" className="flex items-center gap-8">
                      <SiSellfy size={25} />
                      <span className="pt-[2px]">Become a Seller</span>
                    </Link>
                  ) : (
                    <Link to="/seller" className="flex items-center gap-8">
                      <LuLayoutDashboard size={25} />
                      <span className="pt-[2px]">Seller Dashboard</span>
                    </Link>
                  )}
                </div>
              </button> */}

              {user?.role !== "seller" ? (
                <Link to="/main" className={`shadow-md hover:bg-[#1DBF73] hover:text-white p-4 -mt-4 rounded-lg flex gap-5 flex-col`}>
                  <div className="flex items-center justify-start gap-8 text-base font-bold">
                    <SiSellfy size={30} />
                    Become a Seller
                  </div>
                </Link>
              ) : (
                <Link to="/seller" className={`shadow-md hover:bg-[#1DBF73] hover:text-white p-4 -mt-4 rounded-lg flex gap-5 flex-col`}>
                  <div className="flex items-center justify-start gap-8 text-base font-bold">
                    <LuLayoutDashboard size={30} />
                    Seller Dashboard
                  </div>
                </Link>
              )}
            </>
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
                  <span>Profile </span>
                  <strong>{user?.profileViews}</strong>
                </div>
              </div>
            </div>
          </div>

          <Link to="/main" className={`dashboard-button justify-start !p-4 gap-8 w-full ${location.pathname === "/main" && "!bg-[#1DBF73] !text-white"}`}>
            <HiOutlineCircleStack size={25} />
            Overview
          </Link>

          <Link to={profileRoute} className="dashboard-button justify-start !p-4 gap-8 w-full">
            <BsPersonFillExclamation size={25} />
            Edit Profile
          </Link>
          <Link to="orders" className="dashboard-button justify-start !p-4 gap-8 w-full"> <MdPlaylistAddCheck size={25} />
            Orders
          </Link>
          <button className="dashboard-button justify-start !p-4 gap-8 w-full" onClick={() => setOpenComingSoon(true)}>
            <TbMessageCircle2 size={25} />Queries
          </button>
          <button className="dashboard-button justify-start !p-4 gap-8 w-full" onClick={() => setOpenComingSoon(true)}>
            <MdOutlineAutoGraph size={25} />Analytics
          </button>
          <Link to="/settings" className="dashboard-button justify-start !p-4 gap-8 w-full">
            <TbSettings size={25} />Settings
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
              <div className={`bg-slate-200 hover:bg-[#1DBF73] hover:text-white p-4 -mt-4 rounded-t-lg flex gap-5 flex-col cursor-pointer`}>
                <div className="flex items-center justify-start gap-8 text-base font-bold" onClick={() => setOpenComingSoon(true)}>
                  {/* <FcAdvertising size={30} /> */}
                  <RiAdvertisementLine size={30} />
                  Advertise
                </div>
              </div>
              {/* <a href="#invite" className={`bg-slate-200 hover:bg-[#1DBF73] hover:text-white p-4 -mt-4 rounded-b-lg flex gap-5 flex-col`}> */}
              <div className={`bg-slate-200 hover:bg-[#1DBF73] hover:text-white p-4 -mt-4 rounded-b-lg flex gap-5 flex-col cursor-pointer`}>
                <div className="flex items-center justify-start gap-8 text-base font-bold" onClick={() => setOpenComingSoon(true)}>
                  {/* <TbMailOpened size={30} /> */}
                  <BiMailSend size={30} />
                  Invite your Friends
                </div>
              </div>
            </div>
          )}
          {/* <button className="dashboard-button justify-between !p-4 w-full" onClick={handleOpen}>
            <RiAdvertisementFill size={25} />
            Grow Audience {open ? <FaCaretUp size={20} /> : <FaCaretDown size={20} />}
          </button>
          <div className={`${open ? "" : "hidden"} bg-slate-200 p-4 -mt-4 rounded-lg flex gap-5 flex-col`}>
            <button className="flex items-center justify-start gap-8 text-base font-bold"><FcAdvertising size={30} />Advertise</button>
            <div className="bg-white w-full h-[2px]" />
            <a href="#invite" className="flex items-center justify-start gap-8 text-base font-bold"><TbMailOpened size={30} />Invite your Friends</a>
          </div> */}

          <div className="flex gap-5 flex-col pt-5 pb-5 mb-3 border-b-2 border-slate-50">
            <h1 className="font-bold text-lg">Follow Us</h1>
            <div className="flex w-full justify-between gap-4 items-center">
              {/* <AiFillTwitterCircle fill='blue' size={50} /><BsFacebook fill='blue' size={45} /><IoLogoWhatsapp fill='green' size={45} /><AiFillLinkedin fill='blue' size={45} /> */}
              <BsTwitter fill="#00acee" size={45} />
              <BsFacebook fill="#3b5998" size={45} />
              <BsWhatsapp fill="#075e54" size={45} />
              <BsLinkedin fill="#0072b1" size={45} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardBar;