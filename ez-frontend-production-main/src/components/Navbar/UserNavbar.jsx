import { useEffect, useRef, useState } from "react";
import { Link, useNavigate, NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";

import { FaLayerGroup, FaCaretDown, FaCaretUp } from "react-icons/fa";
import { IoHome, IoBag, IoNotificationsSharp } from "react-icons/io5";
import { MdExplore, MdPlaylistAddCheck, MdOutlineAutoGraph, MdOutlineHelp, MdOutlineConnectWithoutContact } from "react-icons/md";
import { BsPersonFillExclamation } from "react-icons/bs";
import { RiAdvertisementFill, RiNotification2Fill } from "react-icons/ri";
import { FcAdvertising } from "react-icons/fc";
import { TbMailOpened, TbMessageCircle2, TbSettings } from "react-icons/tb";
import { LuLayoutDashboard } from "react-icons/lu";
import { SiSellfy } from "react-icons/si";
import { CiMenuBurger } from "react-icons/ci";
import { HiOutlineCheckBadge } from "react-icons/hi2";
import { BiUserCircle } from "react-icons/bi";

import Community from "../../assets/explore-icons/community-communities-icon.svg";
import FavFile from "../../assets/explore-icons/file-favorite-icon.svg";
import ProfMan from "../../assets/explore-icons/find-professional-man-icon.svg";
import GroupDiscussion from "../../assets/explore-icons/group-discussion-icon.svg";
import QuesThink from "../../assets/explore-icons/question-thinking-icon.svg";
import ServicesIcon from "../../assets/explore-icons/services-icon.svg";
import ServicesPlumber from "../../assets/explore-icons/services-plumber-icon.svg";
import TrueInfo from "../../assets/explore-icons/true-information-icon.svg";
const userPic = "../../../assets/ezFINALlogo.png";
import communityicon from '../../assets/ez-logo/communityicon.jpg'
import { userLogout } from "../../actions/userActions";
import { useOutsideClick } from "../../hooks/clickOutside";

import ExploreDropDown from "../Exploredropdown/ExploreDropDown";
import MetaData from "../MetaDeta/MetaDeta.jsx";
import UserPop from "./NavUser/UserPop";
import Notifications from "./Notifications";

import Style from "./style.module.css";

import socket from "../../services/socket";

const UserNavbar = ({ fetchCode, profileRoute, isAuthenticated, user, setOpenComingSoon }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showSidebar, setShowSidebar] = useState(false);

  const onLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("user-notifications");
    dispatch(userLogout());
    navigate("/");
  };

  const [notification, setNotification] = useState([]);
  useEffect(() => {
    if (isAuthenticated) {
      if (user && socket.connected) {
        const roomId = 'user-' + user._id;
        socket.emit("user-join", { roomId });

        const handleNewNotification = (newNotification) => {
          handleSaveNotification(newNotification);
        };

        socket.on("user-notification", handleNewNotification);

        return () => {
          socket.off("user-notification", () => setNotification([]));
          socket.emit("user-leave", { roomId });
        };
      }
    }
  }, [isAuthenticated, socket.connected, user]);

  const handleSaveNotification = (newNotification) => {
    if (newNotification._id) {
      let existingNotifications = JSON.parse(localStorage.getItem("user-notifications")) || [];
      let notificationExists = existingNotifications.some(
        notification => notification._id === newNotification._id
      );

      if (!notificationExists) {
        existingNotifications.push(newNotification);
        localStorage.setItem("user-notifications", JSON.stringify(existingNotifications));
        setNotification((prevNotifications) => [...prevNotifications, newNotification]);
      }
    }
  };

  return (
    <>
      <MetaData />

      {isAuthenticated && (
        <DesktopNavbar
          user={user}
          isAuthenticated={isAuthenticated}
          setShowSidebar={setShowSidebar}
          onLogout={onLogout}
          fetchCode={fetchCode}
          profileRoute={profileRoute}
          notification={notification}
        />
      )}

      {user && <MobileFooter />}

      {showSidebar && user && (
        <MobileSidebar
          user={user}
          fetchCode={fetchCode}
          profileRoute={profileRoute}
          setShowSidebar={setShowSidebar}
          setOpenComingSoon={setOpenComingSoon}
        />
      )}
    </>
  );
};

const DesktopNavbar = ({ user, isAuthenticated, setShowSidebar, onLogout, fetchCode, profileRoute, notification }) => {
  const [toggleBar, settoggleBar] = useState(false);
  const path = location.pathname;
  const activeTabStyle = "border-solid border-b-[2px] border-[green]";
  const [showExplore, setShowExplore] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [userPop, setUserPop] = useState(false);

  const explorerRef = useRef("null");
  useOutsideClick(() => {
    if (showExplore) {
      setShowExplore(false);
    }
  }, explorerRef);

  const notificationRef = useRef("null");
  useOutsideClick(() => {
    if (showNotification) {
      setShowNotification(false);
    }
  }, notificationRef);

  const userRef = useRef("null");
  useOutsideClick(() => {
    if (userPop) {
      setUserPop(false);
    }
  }, userRef);

  return (
    <nav
      className="relative flex flex-row h-full justify-around items-center md:py-2  md:justify-normal px-2 md:px-24 bg-white">
      <div
        onClick={() => settoggleBar(!toggleBar)}
        className={`${toggleBar
          ? "absolute top-0 left-0 w-full h-screen bg-slate-900 opacity-20 z-0"
          : null
          }`}
      ></div>
      <div className="w-full md:w-3/12 flex justify-between md:justify-between items-center">
        <img
          src="/NavLogo.png"
          alt="pic"
          className="w-[100px] h-16 md:h-20 object-contain"
        // className="h-8 lg:h-10"
        />
        <span
          className="flex md:hidden mr-1 z-50"
          onClick={() => setShowSidebar(prev => !prev)}
        >
          <CiMenuBurger size={25} />
        </span>
      </div>
      <div className="w-6/12 h-fit hidden md:flex flex-row gap-1  justify-center">
        <NavLink
          to="/main"
          className={`text-black ${Style.navlink} font-medium `}
        >
          <div className={`flex ${Style.box} w-40 rounded-lg  flex-col items-center ${path === "/" && activeTabStyle}`}>
            <span><IoHome className={` ${Style.navicon}`} color={`${path === "/" && "green"}`} size={18} /></span>
            <span className={`${Style.navtext} translate-y-11`}>Home</span>
          </div>
        </NavLink>
        <NavLink
          to="/main/marketplace"
          className={`text-black ${Style.navlink} font-medium `}                    >
          <div className={`flex ${Style.box} w-40 rounded-lg  flex-col items-center ${path === "/about" && activeTabStyle}`}>
            <span><IoBag className={` ${Style.navicon}`} color={`${path === "/about" && "green"}`} size={18} /></span>
            <span className={`${Style.navtext} translate-y-11`}>Marketplace</span>
          </div>
        </NavLink>
        <div className="relative">
          <NavLink to="/main/startupcommunity" className={`text-black ${Style.navlink} flex items-center  font-medium `}>
            <div className={`flex ${Style.box} w-40 rounded-lg ${path === "/community" && activeTabStyle}`}>
              <div className="flex items-center justify-center w-full">
                <div className="flex flex-col items-center">
                  <span>
                    <img src={communityicon} alt="community" className={` ${Style.navicon}`} color={`${path === "/community" && "green"}`} style={{maxWidth:'15px',maxHeight:'15px',objectFit:'contain',marginTop:'2px'}} />
                    {/* <MdOutlineConnectWithoutContact className={` ${Style.navicon}`} color={`${path === "/community" && "green"}`} size={18} /> */}
                    </span>
                  <span className={`${Style.navtext} translate-y-11`}>Community</span>
                </div>
              </div>
            </div>
          </NavLink>
        </div>

        <div className="relative" ref={explorerRef}>
          <div className={`text-black cursor-pointer ${Style.navlink} font-medium `}
            onClick={() => setShowExplore(prev => !prev)}
          >
            <div className={`flex ${Style.box} w-40 rounded-lg  flex-col items-center ${path === "/contact" && activeTabStyle}`}>
              <span><MdExplore className={` ${Style.navicon}`} color={`${path === "/contact" && "green"}`} size={18} /></span>
              <span className={`${Style.navtext} translate-y-11`}>Explore</span>
            </div>
          </div>
          {showExplore && (
            <div className="absolute top-[8.5vh]">
              <ExploreDropDown
                dropdowndata={ExploreDropdownList}
              />
            </div>
          )}
        </div>

        <div className="relative" ref={notificationRef}>
          <div className={`group text-black cursor-pointer ${Style.navlink} flex items-center  font-medium `} onClick={() => setShowNotification(prev => !prev)}>
            <div className={`flex ${Style.box} w-40 rounded-lg ${path === "/community" && activeTabStyle}`}>
              <div className="flex items-center justify-center w-full">
                <div className="relative flex flex-col items-center">
                  <span><IoNotificationsSharp className={` ${Style.navicon}`} color={`${path === "/community" && "green"}`} size={18} /></span>
                  <span className={`${Style.navtext} translate-y-11`}>Notifications</span>
                  {notification.length > 0 && (
                    <div className="absolute group-hover:hidden bottom-1 right-7 w-[15px] h-[15px] bg-green-500 rounded-full" />
                  )}
                </div>
              </div>
            </div>
          </div>
          {showNotification && (
            <div className="absolute top-[8.5vh]">
              <Notifications
                setShowNotification={setShowNotification}
                notificationRef={notificationRef}
              />
            </div>
          )}
        </div>
      </div>

      <div className="w-3/12 hidden md:flex flex-row gap-4 justify-end items-center">
        {user.role === "buyer" ? (
          location.pathname !== "/sellerhomepage" ? (
            <Link
              to="/sellerhomepage"
              className="text-green-500 bg-white hover:text-white hover:bg-green-500 rounded-lg shadow-green-500 p-4 shadow-md font-medium flex items-center h-10"
            >
              Become a Seller
            </Link>
          ) : (
            <Link
              to="/main"
              className="text-green-500 bg-white hover:text-white hover:bg-green-500 rounded-lg shadow-green-500 p-4 shadow-md font-medium flex items-center h-10"
            >
              Dashboard
            </Link>
          )
        ) : (
          <Link
            to="/seller"
            className="text-green-500 bg-white hover:text-white hover:bg-green-500 rounded-lg shadow-green-500 p-4 shadow-md font-medium flex items-center h-10"
          >
            <HiOutlineCheckBadge /> &nbsp; eZer Dashboard
          </Link>
        )}
      </div >
      {isAuthenticated && (
        <div ref={userRef}>
          <div className="md:ml-5 w-[50px] h-[50px] rounded-full flex justify-center items-center cursor-pointer" onClick={() => setUserPop(prev => !prev)}>
            <img
              className="w-full h-full rounded-full object-cover"
              src={user?.avatar?.url ? user?.avatar?.url : userPic}
              alt="User profile"
            />
          </div>
          {userPop && (
            <div className="absolute top-[10.5vh] right-0 z-50">
              <UserPop
                setUserPop={setUserPop}
                onLogout={onLogout}
                fetchCode={fetchCode}
                profileRoute={profileRoute}
              />
            </div>
          )}
        </div>
      )}
    </nav >
  );
}

const MobileFooter = () => {
  return (
    <>
      <div className="fixed w-full bottom-0 h-[60px] bg-[#D3D3D3] flex items-center justify-center p-[10px] md:hidden">
        <ul className="flex w-full m-0 p-0 justify-between text-[#006400]">
          {menuItems.map((item) =>
            item.text === "Explore" || item.text === "Notification"
              ? (
                <li className="px-3" key={item.id}>
                  <span className="flex items-center gap-2">
                    <span>{item.icon}</span>
                  </span>
                </li>
              )
              : (
                <li
                  className={`px-3 ${item.link === location.pathname ? "relative" : ""}`}
                  key={item.id}
                >
                  <span className="flex flex-col items-center">
                    <Link to={item.link}>
                      <span>{item.icon}</span>
                    </Link>
                    {item.link === location.pathname && (
                      <div className="md:hidden absolute top-[-19px] left-1/2 transform -translate-x-1/2 w-[125%] h-0.5 bg-[#008000]"></div>
                    )}
                  </span>
                </li>
              )
          )}
        </ul>
      </div>
    </>
  );
}

const MobileSidebar = ({ user, fetchCode, profileRoute, setShowSidebar, setOpenComingSoon }) => {
  const [open, setOpen] = useState(false);
  const [first, setFirst] = useState(false);

  const handleOpen = () => {
    setOpen(!open)
  };

  return (
    <div className="absolute left-0 top-[9.9vh] w-[70%] h-[90vh] bg-white shadow-xl md:hidden">
      <div className="flex flex-col gap-3 w-full h-full p-2 overflow-y-scroll">
        <button className={`dashboard-button justify-between w-full p-2`} onClick={() => setFirst(prev => !prev)}>
          <img
            className="user-image object-cover"
            src={user?.avatar?.url ? user?.avatar?.url : userPic}
            alt="User profile"
          />
          <h2 className="-translate-x-1">
            {user.firstName}
          </h2>
          {first ? <FaCaretUp size={20} /> : <FaCaretDown size={20} />}
        </button>
        {first && (
          <>
            <div className={`dashboard-button justify-start -mt-3 p-3 gap-8 w-full ${location.pathname === "/main" && "!bg-[#1DBF73] !text-white"}`}>
              <Link to="/main" className="flex items-center gap-8" onClick={() => setShowSidebar(false)}>
                <BiUserCircle size={27} />
                <span className="pt-[2px]">Dashboard</span>
              </Link>
            </div>
            <div className="dashboard-button justify-start -mt-3 p-3 gap-8 w-full">
              <div className="flex items-center justify-between gap-8 text-base font-bold">
                {user.role !== "seller" ? (
                  <Link to="/sellerhomepage" className={`flex items-center gap-8`} onClick={() => setShowSidebar(false)}>
                    <SiSellfy size={25} />
                    <span className="pt-[2px]">Become a Seller</span>
                  </Link>
                ) : (
                  <Link to="/seller" className="flex items-center gap-8" onClick={() => setShowSidebar(false)}>
                    <LuLayoutDashboard size={25} />
                    <span className="pt-[2px]">Seller Dashboard</span>
                  </Link>
                )}
              </div>
            </div>
          </>
        )}
        {fetchCode && (
          <Link to={profileRoute} className="dashboard-button justify-start p-3 gap-8 w-full" onClick={() => setShowSidebar(false)}>
            <BsPersonFillExclamation size={25} />Edit Profile
          </Link>
        )}
        <Link to="orders" className="dashboard-button justify-start p-3 gap-8 w-full" onClick={() => setShowSidebar(false)}>
          <MdPlaylistAddCheck size={25} />Orders
        </Link>
        <button className="dashboard-button justify-start p-3 gap-8 w-full" onClick={() => setOpenComingSoon(true)}>
          <TbMessageCircle2 size={25} />Queries
        </button>
        <button className="dashboard-button justify-start p-3 gap-8 w-full" onClick={() => setOpenComingSoon(true)}>
          <MdOutlineAutoGraph size={25} />Analytics
        </button>
        <Link to="/settings" className="dashboard-button justify-start p-3 gap-8 w-full" onClick={() => setShowSidebar(false)}>
          <TbSettings size={25} />Settings
        </Link>
        <button className="dashboard-button justify-start p-3 gap-8 w-full border-b-2" onClick={() => setOpenComingSoon(true)}>
          <MdOutlineHelp size={25} />Help Center
        </button>
        <button className="dashboard-button justify-between p-3 w-full" onClick={handleOpen}>
          <RiAdvertisementFill size={25} />
          Grow Audience {open ? <FaCaretUp size={20} /> : <FaCaretDown size={20} />}
        </button>
        <div className={`${open ? "" : "hidden"} flex gap-5 pl-3 flex-col mb-6`}>
          <button className="flex items-center justify-start gap-8 text-base font-bold text-[#65816D]" onClick={() => setOpenComingSoon(true)}>
            <FcAdvertising size={30} />Advertise
          </button>
          <button className="flex items-center justify-start gap-8 text-base font-bold text-[#65816D]" onClick={() => setOpenComingSoon(true)}>
            <TbMailOpened size={30} />Invite your Friends
          </button>
          {/* <a href="#invite" className="flex items-center justify-start gap-8 text-base font-bold text-[#65816D]"><TbMailOpened size={30} />Invite your Friends</a> */}
        </div>
      </div>
    </div>
  )
}

const menuItems = [
  {
    id: 1,
    icon: <IoHome size={22} />,
    text: "Home",
    link: "/main",
  },
  {
    id: 2,
    icon: <IoBag size={22} />,
    text: "MarketPlace",
    link: "/main/marketplace",
  },
  {
    id: 3,
    icon: <FaLayerGroup size={22} />,
    text: "Community",
    link: "/main/startupcommunity",
  },
  {
    id: 4,
    icon: <MdExplore size={22} />,
    text: "Explore",
  },
  {
    id: 5,
    icon: <RiNotification2Fill size={22} />,
    text: "Notification",
  },
];

const ExploreDropdownList = [
  {
    id: 1,
    icon: ServicesIcon,
    link: "/",
    text: "Services",
    desc: "Find categorized services with pre-fixed pricing ",
  },
  {
    id: 2,
    icon: Community,
    link: "/",
    text: "Communities",
    desc: "Find categorized services with pre-fixed pricing ",
  },
  {
    id: 3,
    icon: ProfMan,
    link: "/",
    text: "Services",
    desc: "Find categorized services with pre-fixed pricing ",
  },
  {
    id: 4,
    icon: GroupDiscussion,
    link: "/",
    text: "Discussions",
    desc: "Find categorized services with pre-fixed pricing ",
  },
  {
    id: 5,
    icon: QuesThink,
    link: "/qa",
    text: "Questions",
    desc: "Find categorized services with pre-fixed pricing ",
  },
  {
    id: 6,
    icon: TrueInfo,
    link: "/",
    text: "Reviews",
    desc: "Find categorized services with pre-fixed pricing ",
  },
  {
    id: 7,
    icon: FavFile,
    link: "/",
    text: "Resources",
    desc: "Find categorized services with pre-fixed pricing ",
  },
  {
    id: 8,
    icon: ServicesPlumber,
    link: "/",
    text: "Open Gigs",
    desc: "Find categorized services with pre-fixed pricing ",
  },
];

export default UserNavbar;


// <nav className="mx-auto flex flex-row items-center justify-between py-2 px-1 xl:px-10 bg-[#eef7f2] h-[10vh]">

//   <div>
//     Left
//   </div>

//   <div className="hidden md:flex">
//     Middle
//   </div>

//   <div>
//     Right
//   </div>

// </nav>