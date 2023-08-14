import { React, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom"
import EditProfile from "./EditProfile";
import ezbanner from "../../assets/ezbannerback.png";
import ez from "../../assets/eZ.svg";
import daimond from '../../assets/explore-icons/diamond-svgrepo-com.svg'
import "./ProfileNew.css";
import job1 from "../../assets/profile-img/job1.svg";
import i from "../../assets/profile-img/i-logo.svg";
import bookingIcon from "../../assets/profile-img/booking-icon.png"
import assuredIcon from "../../assets/profile-img/assured-icon.png"
import googleMapIcon from "../../assets/profile-img/googleMapIcon.png"
import { AiFillStar } from "react-icons/ai";
import { FcLink } from "react-icons/fc";
import { AiFillInfoCircle } from "react-icons/ai";
import { BsFillBagCheckFill, BsTwitter, BsGithub, BsFillPeopleFill, BsFillPencilFill } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { FaShoppingBag } from "react-icons/fa";
import { FiUpload } from "react-icons/fi";
import FirstEditParent from "./FirstTimeProfileEdit/FirstEditParent";
import PortfolioNew from "./PortfolioNew";
import { useOutsideClick } from "../../hooks/clickOutside";
import ComingSoon from "../../components/Modal/ComingSoon";
import MetaData from "../../components/MetaDeta/MetaDeta";
import { clearProfileUpdate, uploadProfileImage } from "../../actions/userActions";
import ButtonLoading from "../../static/ButtonLoading";
import StarRating from "../ServiceListing/Components/Extras/StarRating";


const ProfileNew = () => {
    const dispatch = useDispatch();
    const [activeButton, setActiveButton] = useState(0);
    const { user, isProfileUpdating, isProfileUpdated, isUploading, isUploaded } = useSelector((state) => state.user);

    const editTopHalf = () => {
        document.getElementById("editProfilePopUpParent").classList.add("popUpOpened");
    };

    const [openComingSoon, setOpenComingSoon] = useState(false);
    const comingSoonRef = useRef(null);
    useOutsideClick(() => {
        if (openComingSoon) {
            setOpenComingSoon(false);
        }
    }, comingSoonRef);

    const fileRef = useRef();
    const [cover, setCover] = useState("");
    const [coverFile, setCoverImage] = useState(null);

    const handleFileChange = (e) => {
        setCover(URL.createObjectURL(e.target.files[0]));
        setCoverImage(e.target.files[0]);
        e.target.value = "";
    };

    const handleCoverUpload = (e) => {
        e.preventDefault();

        dispatch(uploadProfileImage({
            userID: user?._id,
            type: "cover",
            imageFile: coverFile
        }));
    };

    useEffect(() => {
        if (isUploaded) window.location.reload();
    }, [isUploaded]);

    useEffect(() => {
        if (isProfileUpdated) window.location.reload();
    }, [isProfileUpdated]);

    useEffect(() => {
        dispatch(clearProfileUpdate());
    }, []);

    return (
        <>
            {user && (
                <div className="flex flex-col items-center overflow-x-hidden">

                    <MetaData title={`${user?.firstName} ${user?.lastName} | eZ - The One App`} />

                    {openComingSoon && <ComingSoon setOpenComingSoon={setOpenComingSoon} comingSoonRef={comingSoonRef} />}

                    <div id="editProfilePopUpParent" className="editProfilePopUpParent p-0 pb-[12%] lg:p-0 lg:m-0 popUpClosed w-full !z-[10]">
                        <EditProfile
                            user={user}
                            isProfileUpdating={isProfileUpdating}
                        />
                    </div>

                    {/* <div className="profileContainer w-[100vw]"> */}
                    <div className="mx-auto w-full lg:w-[1000px]">
                        {/* banner */}
                        <div className="relative">
                            {/* <button className="bg-green-500 text-white absolute mt-1 ml-1 z-[2] px-4 py-2 rounded-xl" */}
                            <button className="text-green-500 hover:text-white bg-white hover:bg-green-500 absolute mt-1 ml-1 z-[2] px-4 py-2 rounded-xl"
                                onClick={() => fileRef.current.click()}
                            >
                                <span className="hidden md:block">Change Cover</span>
                                <div className="w-full h-full py-1 md:py-0">
                                    <FiUpload className="md:hidden text-green-500 hover:text-white" />
                                </div>
                            </button>

                            {cover && (
                                <button className={`${isUploading ? "text-green-500 bg-white" : "bg-green-500 text-white"} absolute md:right-0 mt-1 ml-14 md:mr-1 z-[3] px-4 ${isUploading ? "py-0" : "py-2"} rounded-xl`}
                                    onClick={handleCoverUpload}
                                >
                                    {isUploading ? <ButtonLoading /> : "Upload"}
                                </button>
                            )}
                        </div>

                        <div className="ezBanner w-full text-center bg-black absolute lg:static z-[1] flex flex-row justify-center">
                            <input
                                type="file"
                                className="hidden"
                                accept="image/*"
                                disabled={isUploading}
                                onChange={handleFileChange}
                                ref={fileRef}
                            />
                            {cover ? (
                                <img
                                    className="h-[11.7vh] w-auto lg:h-[20vh] m-0 p-0 object-contain"
                                    src={cover}
                                    alt="cover"
                                />
                            ) : (
                                <img
                                    className="h-[11.7vh] w-auto lg:h-[20vh] m-0 p-0 object-contain"
                                    src={user?.cover?.url ? user.cover.url : ezbanner}
                                    alt="cover"
                                />
                            )}
                        </div>

                        {/* Edit button */}
                        <div className="w-[100%] hidden md:flex flex-row justify-end items-center m-0 p-0 mt-1">
                            <button onClick={editTopHalf} className="editBtn flex flex-row items-center">
                                <div className="bg-black p-2 w-[50px] h-[50px] flex justify-center items-center group hover:bg-white duration-150">
                                    <BsFillPencilFill className="text-white group-hover:text-black" size={22} />
                                </div>
                            </button>
                        </div>
                        <div className="absolute top-[187px] right-0 flex md:hidden flex-row justify-end items-center m-0 p-0 pe-2 mt-1">
                            <button onClick={editTopHalf} className="editBtn flex flex-row items-center">
                                <div className="bg-black p-2 w-[40px] h-[40px] flex justify-center items-center group hover:bg-white duration-150">
                                    <BsFillPencilFill className="text-white group-hover:text-black" size={15} />
                                </div>
                            </button>
                        </div>

                        {/* TOP PART */}
                        {/* <div className="max-w-[100vw] lg:w-auto pt-[15%] lg:pt-0 px-2 lg:px-0 flex flex-col-reverse lg:flex-row justify-between items-center lg:items-start mb-4 mt-1 lg:mx-24"> */}
                        {/* <div className="max-w-[100vw] lg:w-auto lg:pt-0 px-2 lg:px-0 flex flex-col-reverse lg:flex-row justify-between items-center lg:items-start mb-4 mt-1 lg:mx-24"> */}
                        <div className="max-w-[100vw] lg:w-auto lg:pt-0 px-2 lg:px-0 flex flex-col-reverse lg:flex-row justify-between items-center lg:items-start mb-4 mt-[12vh] lg:mt-1">
                            {/* LEFT PART */}
                            <div className="lg:mt-0 w-full lg:w-[60%]">
                                {/*? Name + about me */}
                                <div className="name my-2 mb-1 lg:-mt-[6vh]">
                                    <div className="flex flex-col md:flex-row items-center md:gap-8 mb-4 md:mt-5">
                                        <h2 className="text-center lg:text-left md:mb-0 font-bold text-3xl lg:text-[40px] leading-[40px]">
                                            {`${user.firstName ? user?.firstName : ""} ${user?.lastName ? user.lastName : ""}`}
                                        </h2>
                                        <h2 className="text-xl font-semibold text-gray-700">
                                            {user?.pronoun}
                                        </h2>
                                    </div>
                                    {/* followers MOBILE VIEW */}
                                    {user.followers > 0 ? (
                                        <div className="text-green-600 rounded-3xl text-xl text-center flex flex-row justify-center items-center font-bold lg:hidden">
                                            <h2 className="">{user.followers} {user.followers === 1 ? "Follower" : "Followers"}</h2>
                                        </div>
                                    ) : (
                                        <div className="text-green-600 rounded-2xl text-xl text-center flex flex-row justify-center items-center font-bold lg:hidden">
                                            <h2 className="">No followers yet</h2>
                                        </div>
                                    )}
                                    {/* bio */}
                                    {user?.headline && (
                                        <p className="text-justify flex flex-wrap my-3 font-bold text-gray-500">
                                            {user.headline}
                                        </p>
                                    )}
                                    {/* action buttons MOBILE VIEW */}
                                    <div className="flex flex-row flex-wrap overflow-x-auto justify-between items-center gap-4 lg:hidden">
                                        <div className="flex justify-start items-center w-[100%] lg:w-[80%] gap-4">
                                            {/* <button className="actionBtn actionBtnFollow flex gap-1 justify-between items-center bg-[#E9830C] px-4 py-2 rounded-xl">
                                                <span className="text-sm text-white">
                                                    Follow
                                                </span>
                                                <AiFillPlusCircle className="fill-[white] size={50} text-2xl" />
                                            </button>
                                            <button className="actionBtn flex gap-1 justify-between items-center bg-[#EFEFEF] px-4 py-2 rounded-xl">
                                                <span className="text-sm text-[#454545]">
                                                    Chat
                                                </span>
                                                <AiFillWechat className="fill-[#00D719] size={60} text-2xl" />
                                            </button> */}
                                            {/* <Link to={`/${user?.username}/service`} className="flex gap-1 actionBtn flex-row justify-between items-end bg-[#1DBF73] px-4 py-2 rounded-xl min-w-fit"> */}
                                            {user?.role === "seller" && (
                                                <Link to="/seller/managelistings" className="flex gap-1 actionBtn flex-row justify-between items-center bg-[#1DBF73] px-4 py-2 rounded-xl min-w-fit">
                                                    <span className="text-sm text-white">
                                                        My Services
                                                    </span>
                                                    <FaShoppingBag className="fill-[#FFFFFF]" />
                                                </Link>
                                            )}
                                            <a href={`/${user?.username}`} className="flex gap-1 actionBtn flex-row justify-between items-center bg-[#1DBF73] px-4 py-2 rounded-xl min-w-fit">
                                                <span className="text-sm text-white">
                                                    View Profile
                                                </span>
                                                <BsFillPeopleFill className="fill-[#FFFFFF]" />
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                {/* roles, booking, domain, skills */}
                                <div className="mb-0">
                                    {/* domain + booking */}
                                    <div className="flex md:gap-5 md:flex-row justify-start items-stretch font-bold mb-6 mt-5">
                                        {user?.profileCategory?.jobRoles[0] && (
                                            <div className="w-fit flex items-center">
                                                <div className="userIcon mr-3 flex flex-col justify-center">
                                                    <img src={job1} alt="" className="w-12" />
                                                </div>
                                                <div className="p-2 md:p-5 profileLocationButton lg:mt-0 rounded-2xl lg:text-xl text-center px-4 lg:px-0 lg:ps-5 lg:pe-5 flex flex-row justify-between items-center">
                                                    <h2>
                                                        {user.profileCategory.jobRoles[0]}
                                                    </h2>
                                                </div>
                                            </div>
                                        )}

                                        {user.role === "seller" && user?.bookingsDone > 0 && (
                                            <div className="hidden lg:flex bookingInfo mt-5 lg:mt-0 rounded-2xl p-2 ms-0 flex-row items-between">
                                                <img src={bookingIcon} alt="" className=" me-2 h-12" />
                                                <div className="w-full flex flex-col items-center justify-center">
                                                    <p className="text-left">{user.bookingsDone} {user.bookingsDone > 1 ? "bookings" : "booking"}</p>
                                                    <p className="text-left text-xs text-[#5D5D5D]">
                                                        Top <span className="font-bold text-[#000000]">{user?.percentileRank}%</span> on eZ
                                                    </p>
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    {user?.location?.city && user?.location?.country && (
                                        <div className="flex justify-start items-center lg:hidden">
                                            <img src={googleMapIcon} className="w-12 h-8 object-contain mr-3" />
                                            <button className="profileLocationButton bg-[white] font-bold text-[black] rounded-2xl p-2">
                                                <h2>{user.location.city}, {user.location.country}</h2>
                                            </button>
                                        </div>
                                    )}

                                    {/* booking MOBILE VIEW */}
                                    {user.role === "seller" && user?.bookingsDone > 0 && (
                                        <div className="flex w-fit pe-16 mt-6 md:mt-0 lg:hidden bookingInfo rounded-2xl p-2 ms-0 lg:ms-5 flex-row items-between">
                                            <img src={bookingIcon} alt="" className=" me-2 h-12" />
                                            <div className="w-full flex flex-col items-center justify-center">
                                                <p className="text-left">{user.bookingsDone} {user.bookingsDone > 1 ? "bookings" : "booking"}</p>
                                                <p className="text-left text-xs text-[#5D5D5D]">
                                                    Top <span className="font-bold text-[#000000]">{user?.percentileRank}%</span> on eZ
                                                </p>
                                            </div>
                                        </div>
                                    )}

                                    {/* job roles */}
                                    {user?.profileCategory?.domain.length > 0 && (
                                        <div className="flex items-center justify-start w-[100%] mt-2 md:mt-0 mb-3">
                                            <div className="mr-2">
                                                <img src={i} alt="" className="w-11 h-7 md:h-8" />
                                            </div>
                                            <div className="flex flex-wrap gap-y-3 gap-x-1 w-[80%] lg:w-[80%] h-[fit-content]">
                                                {user.profileCategory.domain.map((item, i) => (
                                                    <div className="m-0 bg-[#1DBF73] px-3 py-1 h-[fit-content] rounded-2xl text-white" key={i}>
                                                        <p className="p-0 m-0">{item}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {/* skills */}
                                    {user?.profileCategory?.skills.length > 0 && (
                                        <div className="flex items-center justify-start w-[100%] mb-6">
                                            <div className="mr-2">
                                                <img src={daimond} alt="" className="w-12 rounded-3xl" />
                                            </div>
                                            <div className="flex w-[100%] lg:w-[100%] h-[fit-content] flex-wrap gap-y-2 gap-x-1">
                                                {user.profileCategory.skills.slice(0, 7).map((skill, i) => (
                                                    <div className="m-0 bg-gray-400 px-3 py-1 h-[fit-content] rounded-2xl text-white" key={i}>
                                                        <p className="font-light p-0 m-0">{skill}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* followers */}
                                {user.followers > 0 ? (
                                    <div className="followers w-fit mt-5 lg:mt-0 rounded-2xl text-xl text-center px-5 py-5 hidden lg:flex flex-row justify-between items-center font-bold">
                                        <h2 className="">{user.followers}  {user.followers === 1 ? "Follower" : "Followers"}</h2>
                                    </div>
                                ) : (
                                    <div className="followers w-fit mt-3 lg:mt-0 rounded-2xl text-xl text-center px-3 py-3 hidden lg:flex flex-row justify-between items-center font-bold">
                                        No followers yet
                                    </div>
                                )}

                                {/* action buttons */}
                                <div className="hidden lg:flex flex-row justify-between items-center mt-8 gap-4">
                                    <div className="flex justify-start items-center w-[100%] lg:w-[80%] gap-4">
                                        {/* <button className="actionBtn actionBtnFollow flex gap-1 justify-between items-center bg-[#E9830C] px-4 py-2 rounded-xl">
                                            <span className="text-[15px] text-white font-bold">
                                                Follow
                                            </span>
                                            <AiFillPlusCircle className="fill-[white] size={50} text-2xl" />
                                        </button>
                                        <button className="actionBtn flex gap-1 justify-between items-center bg-[#EFEFEF] px-4 py-2 rounded-xl">
                                            <span className="text-[15px] text-[#454545] font-bold">
                                                Chat
                                            </span>
                                            <AiFillWechat className="fill-[#00D719] size={60} text-2xl" />
                                        </button> */}
                                        {user?.role === "seller" && (
                                            <Link to="/seller/managelistings" className="hidden lg:flex gap-1 actionBtn flex-row justify-between items-center bg-[#1DBF73] px-4 py-2 rounded-xl min-w-fit">
                                                <span className="text-[17px] text-white font-bold">
                                                    My Services
                                                </span>
                                                <FaShoppingBag className="fill-[#FFFFFF] text-xl " />
                                            </Link>
                                        )}
                                        <a href={`/${user?.username}`} className="hidden lg:flex gap-1 actionBtn flex-row justify-between items-center bg-[#1DBF73] px-4 py-2 rounded-xl min-w-fit">
                                            <span className="text-[17px] text-white font-bold">
                                                View Profile
                                            </span>
                                            <BsFillPeopleFill className="fill-[#FFFFFF] text-xl " />
                                        </a>
                                    </div>

                                    {/* <div className="m-0 p-0 hidden lg:block">
                                        <button className="m-0 bg-[#D9D9D9] w-[50px] rounded-xl p-1.5 flex flex-row justify-center items-center">
                                            <BsThreeDots className="" />
                                        </button>
                                    </div> */}
                                </div>
                            </div>

                            {/* CENTER STAMP */}
                            {user?.role === "seller" && (
                                <div className="hidden w-[10%] lg:flex flex-col justify-start items-center">
                                    <img src={assuredIcon} />
                                </div>
                            )}

                            {/* RIGHT PART */}
                            <div className="flex flex-col items-center m-0 p-0">
                                {/* profile pic parent */}
                                <div className="px-0 lg:w-full relative flex flex-row lg:flex-col items-center lg:items-center justify-between">
                                    <img
                                        src={user?.avatar ? user?.avatar?.url : "/icon.png"}
                                        alt="User Image"
                                        className="w-[150px] h-[150px] lg:w-[250px] lg:h-[250px] border-4 rounded-full overflow-hidden"
                                    />
                                    {/* social media MOBILE VIEW */}
                                    {/* <div className="flex justify-center items-center lg:hidden">
                                        <span className="text-sm text-gray-600 font-bold">Social links</span>
                                        <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown"
                                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                            type="button">Dropdown button
                                            <svg className="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7">
                                                </path>
                                            </svg>
                                        </button>
                                        <div id="dropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                                            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                                                <li>
                                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                                                </li>
                                                <li>
                                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                                                </li>
                                                <li>
                                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                                                </li>
                                                <li>
                                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div> */}
                                    {/* seller stamp */}
                                    <div className="hidden w-[50%] lg:w-36 absolute right-[0] lg:right-[-10%] top-[-5%]">
                                        <img src={assuredIcon} className="w-full" alt="" />
                                    </div>
                                </div>

                                {/* <div className="md:hidden w-full flex items-center justify-between"> */}
                                <div className="md:hidden w-full flex items-center justify-center">
                                    <div className="flex justify-center items-center">
                                        <span className="text-sm text-gray-600 font-bold">@{user ? user.username : "loremipsum"}</span>
                                    </div>
                                    {/* <div className="flex justify-center items-center">
                                        <span className="text-sm text-gray-600 font-bold">
                                            Social links
                                        </span>
                                    </div> */}
                                </div>

                                {/* <div className="w-36 h-36 absolute -left-32">
                                    <img src={assuredIcon} className="w-full" alt=""/>
                                </div> */}

                                <div className="hidden lg:flex flex-col justify-between items-center p-0 m-0 w-full">
                                    {/* username */}
                                    <div className="flex mt-3 justify-center items-center gap-2">
                                        <img src={ez} className="flex" alt="" />
                                        <span className="text-sm text-gray-600 font-bold">@{user ? user.username : "loremipsum"}</span>
                                    </div>

                                    <div className="flex flex-col justify-center">
                                        {/* Rating */}
                                        <div className="mt-3 flex justify-center items-center gap-2">
                                            <AiFillStar className="text-[#3DF554] text-3xl" />
                                            <button className="profileLocationButton bg-[white] text-[black] rounded-2xl p-2 font-bold flex items-center gap-1">
                                                {user?.ratings?.average ? user.ratings.average : 0}
                                                <StarRating ratings={user?.ratings?.average ? user.ratings.average : 0} />
                                            </button>
                                        </div>

                                        {/* Location */}
                                        {user?.location?.city && user?.location?.country && (
                                            <div className="mt-5 flex justify-center items-center gap-2">
                                                <img src={googleMapIcon} className="h-8" />
                                                <button className="profileLocationButton bg-[white] text-[black] rounded-2xl p-2">
                                                    {user.location.city}, {user.location.country}
                                                </button>
                                            </div>
                                        )}

                                        {user?.website && (
                                            <a href={user.website} target="_blank" className="mt-5 flex justify-center items-center gap-2">
                                                <FcLink className="text-3xl" />
                                                <button className="profileLocationButton  w-[100px] bg-[white] text-[black] rounded-2xl p-2">
                                                    <span className="text-blue-800">Website</span>
                                                </button>
                                            </a>
                                        )}
                                    </div>

                                    {/* social media */}
                                    <div className="flex justify-between items-center mt-5">
                                        <div className="flex gap-5">
                                            {user?.socialLinks?.map((link, index) => {
                                                if (link.platform === 'linkedin') {
                                                    return (
                                                        <Link to={`https://www.linkedin.com/in/${link.link}`} key={index}>
                                                            <BsLinkedin fill="#0072b1" size={40} />
                                                        </Link>
                                                    );
                                                }
                                                if (link.platform === 'twitter') {
                                                    return (
                                                        <Link to={`https://twitter.com/${link.link}`} key={index}>
                                                            <BsTwitter fill="#00acee" size={40} />
                                                        </Link>
                                                    );
                                                }
                                                if (link.platform === 'github') {
                                                    return (
                                                        <Link to={`https://github.com/${link.link}`} key={index}>
                                                            <BsGithub fill="#111" size={40} />
                                                        </Link>
                                                    );
                                                }
                                                if (link.platform === 'instagram') {
                                                    return (
                                                        <Link to={`https://instagram.com/${link.link}`} key={index}>
                                                            <img
                                                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png"
                                                                alt="instagram"
                                                                className="w-[40px] h-[40px] object-cover"
                                                            />
                                                        </Link>
                                                    );
                                                }
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* BOTTOM PART */}
                        <div className="w-full flex flex-col items-center mt-10">
                            {/* UPPER BUTTONS */}
                            <div className="px-2 lg:p-0 flex flex-row gap-2 lg:gap-[1rem] overflow-x-scroll md:overflow-x-auto justify-start lg:justify-between w-[100%] text-[white] items-center ">
                                <button
                                    className={`${activeButton === 0 && "upperBtnActive"} hover:shadow-profileGreen upperBtns px-[1.4rem] py-[0.4rem] rounded-[10px] text-[17px] bg-[#FFFFFF] text-[#003902] flex flex-row items-center gap-3`}
                                    onClick={() => setActiveButton(0)}
                                >
                                    <AiFillInfoCircle size={30} className="fill-[#3DF554]" />
                                    #About
                                </button>
                                <button
                                    className={`${activeButton === 1 && "upperBtnActive"} hover:shadow-profileGreen upperBtns px-[1.4rem] py-[0.4rem] rounded-[10px] text-[17px] bg-[#FFFFFF] text-[#003902] flex flex-row items-center gap-3`}
                                    onClick={() => setActiveButton(1)}
                                >
                                    <BsFillBagCheckFill size={30} className="fill-[#3DF554]" />
                                    #Portfolio
                                </button>
                                <button
                                    className={`${activeButton === 2 && "upperBtnActive"} hover:shadow-profileGreen upperBtns px-[1.4rem] py-[0.4rem] rounded-[10px] text-[17px] bg-[#FFFFFF] text-[#003902] flex flex-row items-center gap-3`}
                                    onClick={() => setOpenComingSoon(true)}
                                // onClick={() => setActiveButton(2)}
                                >
                                    <BsFillBagCheckFill size={30} className="fill-[#3DF554]" />
                                    #Posts
                                </button>
                                <button
                                    className={`${activeButton === 3 && "upperBtnActive"} hover:shadow-profileGreen upperBtns px-[1.4rem] py-[0.4rem] rounded-[10px] text-[17px] bg-[#FFFFFF] text-[#003902] flex flex-row items-center gap-3`}
                                    onClick={() => setOpenComingSoon(true)}
                                >
                                    <BsFillBagCheckFill size={30} className="fill-[#3DF554]" />
                                    #Reviews
                                </button>
                                <button
                                    className={`${activeButton === 4 && "upperBtnActive"} hover:shadow-profileGreen upperBtns px-[1.4rem] py-[0.4rem] rounded-[10px] text-[17px] bg-[#FFFFFF] text-[#003902] flex flex-row items-center gap-3`}
                                    onClick={() => setOpenComingSoon(true)}
                                >
                                    <BsFillBagCheckFill size={30} className="fill-[#3DF554]" />
                                    #Endorsements
                                </button>

                            </div>


                            {activeButton == 0 && (

                                <FirstEditParent
                                    user={user}
                                    isProfileUpdating={isProfileUpdating}
                                />
                            )}
                            {activeButton == 1 && (
                                <PortfolioNew />

                            )}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ProfileNew
