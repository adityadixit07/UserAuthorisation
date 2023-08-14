import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { FaLayerGroup, FaCaretDown, FaCaretUp } from "react-icons/fa";
import { IoHome, IoBag, IoNotificationsSharp } from "react-icons/io5";
import { MdExplore, MdOutlineAutoGraph, MdOutlineHelp, MdOutlineConnectWithoutContact, MdOutlineEventAvailable, MdDesignServices, MdOutlinePayments } from "react-icons/md";
import { BsListTask, BsPersonFillExclamation, BsRocketTakeoff } from "react-icons/bs";
import { RiAdvertisementFill, RiNotification2Fill } from "react-icons/ri";
import { FcAdvertising } from "react-icons/fc";
import { TbMailOpened, TbMessageCircle2, TbSettings } from "react-icons/tb";
import { LuLayoutDashboard } from "react-icons/lu";
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
import communityicon1 from '../../assets/ez-logo/communityicon1.svg'

import { userLogout } from "../../actions/userActions";
import { useOutsideClick } from "../../hooks/clickOutside";
import PeopleIcon from '@mui/icons-material/People';

import ExploreDropDown from "../../components/Exploredropdown/ExploreDropDown";
import MetaData from "../../components/MetaDeta/MetaDeta";
import UserPop from "./Popup/UserPop";
import Notifications from "./Popup/Notifications";


import Style from "./style.module.css";

import socket from "../../services/socket";
import { FiPhoneCall } from "react-icons/fi";

const SellerNavbar = ({ fetchCode, profileRoute, isAuthenticated, user, setOpenComingSoon }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [showSidebar, setShowSidebar] = useState(false);

    const onLogout = (e) => {
        e.preventDefault();
        localStorage.removeItem("seller-notifications");
        dispatch(userLogout());
        navigate("/");
    };

    const [notification, setNotification] = useState([]);
    useEffect(() => {
        if (isAuthenticated) {
            if (user && socket.connected) {
                const roomId = 'seller-' + user._id;
                socket.emit("seller-join", { roomId });

                const handleNewNotification = (newNotification) => {
                    handleSaveNotification(newNotification);
                };

                socket.on("seller-notification", handleNewNotification);

                return () => {
                    socket.off("seller-notification", () => setNotification([]));
                    socket.emit("seller-leave", { roomId });
                };
            }
        }
    }, [isAuthenticated, socket.connected, user]);

    const handleSaveNotification = (newNotification) => {
        if (newNotification._id) {
            let existingNotifications = JSON.parse(localStorage.getItem("seller-notifications")) || [];
            let notificationExists = existingNotifications.some(
                notification => notification._id === newNotification._id
            );

            if (!notificationExists) {
                existingNotifications.push(newNotification);
                localStorage.setItem("seller-notifications", JSON.stringify(existingNotifications));
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
            className={`relative flex flex-row h-full justify-around items-center md:py-2  md:justify-normal px-2 md:px-24 bg-white`}
        >
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
                    // src="../../../assets/ezFINALlogo.png"
                    alt="pic"
                    className="w-[120px] h-16 md:h-20 object-contain"
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
                    to="/seller"
                    className={`text-black ${Style.navlink} font-medium hover:text-green-400`}
                >
                    <div className={`flex ${Style.box} w-40 rounded-lg  flex-col items-center ${path === "/" && activeTabStyle}`}>
                        <span><IoHome className={` ${Style.navicon}`} color={`${path === "/" && "green"}`} size={18} /></span>
                        <span className={`${Style.navtext}`}>Home</span>
                    </div>
                </NavLink>
                <NavLink
                    to="/seller/marketplace"
                    className={`text-black ${Style.navlink} font-medium hover:text-green-400`}                    >
                    <div className={`flex ${Style.box} w-40 rounded-lg  flex-col items-center ${path === "/about" && activeTabStyle}`}>
                        <span><IoBag className={` ${Style.navicon}`} color={`${path === "/about" && "green"}`} size={18} /></span>
                        <span className={`${Style.navtext}`}>Marketplace</span>
                    </div>
                </NavLink>
                <div className="relative">
                    <NavLink to="/seller/startupcommunity" className={`text-black ${Style.navlink} flex items-center  font-medium hover:text-green-400`}>
                        <div className={`flex ${Style.box} w-40 rounded-lg ${path === "/community" && activeTabStyle}`}>
                            <div className="flex items-center justify-center w-full">
                                <div className="flex flex-col items-center">

                                    {/* <span><PeopleIcon className={` ${Style.navicon}`} color={`${path === "/community" && "green"}`} style={{fontSize:"1rem"}} /></span> */}
                                    <img src={communityicon1} alt="" className={` ${Style.navicon}`} color={`${path === "/community" && "green"}`} style={{maxWidth:"12.43px",paddingTop:'3px'}} />
                                    <span className={`${Style.navtext}`}>Community</span>
                                </div>
                            </div>
                        </div>
                    </NavLink>
                </div>

                <div className="relative" ref={explorerRef}>
                    <div className={`text-black cursor-pointer ${Style.navlink} font-medium hover:text-green-400`}
                        onClick={() => setShowExplore(prev => !prev)}
                    >
                        <div className={`flex ${Style.box} w-40 rounded-lg  flex-col items-center ${path === "/contact" && activeTabStyle}`}>
                            <span><MdExplore className={` ${Style.navicon}`} color={`${path === "/contact" && "green"}`} size={18} /></span>
                            <span className={`${Style.navtext}`}>Explore</span>
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
                    <div className={`group text-black cursor-pointer ${Style.navlink} flex items-center  font-medium hover:text-green-400`} onClick={() => setShowNotification(prev => !prev)}>
                        <div className={`flex ${Style.box} w-40 rounded-lg ${path === "/community" && activeTabStyle}`}>
                            <div className="flex items-center justify-center w-full">
                                <div className="relative flex flex-col items-center">
                                    <span><IoNotificationsSharp className={` ${Style.navicon}`} color={`${path === "/community" && "green"}`} size={18} /></span>
                                    <span className={`${Style.navtext}`}>Notifications</span>
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
                {user?.role === "seller" && (
                    <NavLink
                        to={location.pathname === "/seller" ? "/main" : "/seller"}
                        className="text-green-500 bg-white hover:text-white hover:bg-green-500 rounded-lg shadow-green-500 p-4 shadow-md font-medium flex items-center h-10"
                    >
                        <HiOutlineCheckBadge /> &nbsp; {location.pathname === "/seller" ? "Dashboard" : "eZer Dashboard"}
                    </NavLink>
                )}

                {!isAuthenticated ? (
                    <>
                        <NavLink
                            to="/user/login"
                            className={` px-[1.5rem] py-1 text-black ${Style.login_btn} flex items-center bg-slate-100 h-9 border-2 border-blue-500 my-3`}
                        >
                            Login
                        </NavLink>
                        <NavLink
                            to="/user/register"
                            className={`px-[1.5rem] h-9 text-white flex items-center rounded bg-slate-800 hover:bg-slate-700 font-medium my-3`}
                        >
                            Sign up
                        </NavLink>
                    </>
                ) : (
                    user?.role !== "seller" && (
                        <NavLink
                            to="/main"
                            className="text-green-500 bg-white hover:text-white hover:bg-green-500 rounded-lg shadow-green-500 p-4 shadow-md font-medium flex items-center h-10"
                        >
                            <HiOutlineCheckBadge /> &nbsp; Dashboard
                        </NavLink>
                    )
                )}
            </div>
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
        </nav>
    );
}

const MobileFooter = () => {
    return (
        <>
            <div className="fixed w-full bottom-0 h-[60px] bg-[#176a1a] flex items-center justify-center p-[10px] md:hidden">
                <ul className="flex w-full m-0 p-0 justify-between text-white">
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
                                            <div className="md:hidden absolute top-[-19px] left-1/2 transform -translate-x-1/2 w-[125%] h-0.5 bg-white"></div>
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
    const [openServices, setOpenServices] = useState(false);

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
                        <div className="dashboard-button justify-start -mt-3 p-3 gap-8 w-full">
                            <Link to="/main" className="flex items-center gap-8" onClick={() => setShowSidebar(false)}>
                                <BiUserCircle size={27} />
                                <span className="pt-[2px]">Dashboard</span>
                            </Link>
                        </div>
                        <div className={`dashboard-button justify-start -mt-3 p-3 gap-8 w-full ${location.pathname === "/seller" && "!bg-[#1DBF73] !text-white"}`}>
                            <div className="flex items-center justify-between gap-8 text-base font-bold">
                                <Link to="/seller" className="flex items-center gap-4" onClick={() => setShowSidebar(false)}>
                                    <LuLayoutDashboard size={25} />
                                    <span className="pt-[2px]">Seller Dashboard</span>
                                </Link>
                            </div>
                        </div>
                    </>
                )}

                <button className="dashboard-button justify-start p-3 gap-8 w-full" onClick={() => setOpenServices(prev => !prev)}>
                    <MdOutlineEventAvailable size={25} />
                    <div className="w-full flex justify-between">
                        <span>Services</span>
                        {openServices ? <FaCaretUp size={20} /> : <FaCaretDown size={20} />}
                    </div>
                </button>
                {openServices && (
                    <>
                        <div className={`dashboard-button justify-start -mt-3 p-3 gap-8 w-full ${location.pathname === "/seller/addservice" && "!bg-[#1DBF73] !text-white"}`}>
                            <Link to="/seller/addservice" className="flex items-center justify-start gap-8 text-base font-bold" onClick={() => setShowSidebar(false)}>
                                <MdDesignServices size={30} />
                                Add a Service
                            </Link>
                        </div>
                        <div className={`dashboard-button justify-start -mt-3 p-3 gap-8 w-full ${location.pathname === "/seller/managelistings" && "!bg-[#1DBF73] !text-white"}`}>
                            <Link to="/seller/managelistings" className="flex items-center justify-start gap-8 text-base font-bold" onClick={() => setShowSidebar(false)}>
                                <BsListTask size={30} />
                                Manage Listing
                            </Link>
                        </div>
                        <div className={`dashboard-button justify-start -mt-3 p-3 gap-8 w-full`}>
                            <div className="flex items-center justify-start gap-8 text-base font-bold cursor-pointer" onClick={() => setOpenComingSoon(true)}>
                                <BsRocketTakeoff size={30} />
                                Boost Listings
                            </div>
                        </div>
                        <div className={`dashboard-button justify-start -mt-3 p-3 gap-8 w-full ${location.pathname === "/seller/availability" && "!bg-[#1DBF73] !text-white"}`}>
                            <Link to="/seller/availability" className="flex items-center justify-start gap-8 text-base font-bold" onClick={() => setShowSidebar(false)}>
                                <MdOutlineEventAvailable size={30} />
                                Availability
                            </Link>
                        </div>
                        <div className={`dashboard-button justify-start -mt-3 p-3 gap-8 w-full ${location.pathname === "/seller/bookings" && "!bg-[#1DBF73] !text-white"}`}>
                            <Link to="/seller/bookings" className="flex items-center justify-start gap-8 text-base font-bold" onClick={() => setShowSidebar(false)}>
                                <FiPhoneCall size={30} />
                                Bookings
                            </Link>
                        </div>
                        <div className={`dashboard-button justify-start -mt-3 p-3 gap-8 w-full `}>
                            <div className="flex items-center justify-start gap-8 text-base font-bold cursor-pointer" onClick={() => setOpenComingSoon(true)}>
                                <MdOutlinePayments size={30} />
                                Payments
                            </div>
                        </div>
                    </>
                )}

                {fetchCode && (
                    <Link to={profileRoute} className="dashboard-button justify-start p-3 gap-8 w-full">
                        <BsPersonFillExclamation size={25} />Edit Profile
                    </Link>
                )}
                <button className="dashboard-button justify-start p-3 gap-8 w-full" onClick={() => setOpenComingSoon(true)}>
                    <TbMessageCircle2 size={25} />Queries
                </button>
                <button className="dashboard-button justify-start p-3 gap-8 w-full" onClick={() => setOpenComingSoon(true)}>
                    <MdOutlineAutoGraph size={25} />Analytics
                </button>
                <Link to="/settings" className="dashboard-button justify-start p-3 gap-8 w-full">
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
        link: "/seller",
    },
    {
        id: 2,
        icon: <IoBag size={22} />,
        text: "MarketPlace",
        link: "/seller/marketplace",
    },
    {
        id: 3,
        icon: <FaLayerGroup size={22} />,
        text: "Community",
        link: "/seller/startupcommunity",
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

export default SellerNavbar;