import { React, useEffect, useRef, useState } from "react";

import ezbanner from "../../assets/ezbannerback.png";
import ez from "../../assets/eZ.svg";
import "./PublicProfile.css";
import job1 from "../../assets/profile-img/job1.svg";
import i from "../../assets/profile-img/i-logo.svg";
import diamond from "../../assets/explore-icons/diamond-svgrepo-com.svg";
import bookingIcon from "../../assets/profile-img/booking-icon.png"
import assuredIcon from "../../assets/profile-img/assured-icon.png"
import googleMapIcon from "../../assets/profile-img/googleMapIcon.png"

import { AiFillPlusCircle } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import { AiFillWechat, AiFillInfoCircle } from "react-icons/ai";
import { BsFillBagCheckFill, BsTwitter, BsGithub, BsFillPencilFill } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { FaShoppingBag } from "react-icons/fa";
import { FcLink } from "react-icons/fc";
import { Link } from "react-router-dom";

import ProfileDetails from "./ProfileComponents/ProfileDetails";
import MetaData from "../../components/MetaDeta/MetaDeta";
import { useOutsideClick } from "../../hooks/clickOutside";
import ComingSoon from "../../components/Modal/ComingSoon";
import { useDispatch, useSelector } from "react-redux";
import StarRating from "../ServiceListing/Components/Extras/StarRating";
import { clearProfileUpdate } from "../../actions/userActions";
import EditProfile from "../Profile/EditProfile";

const PublicProfile = () => {
    const dispatch = useDispatch();
    const [activeButton, setActiveButton] = useState(0);
    const { profile, isAuthenticated, user, isProfileUpdated, isProfileUpdating } = useSelector(state => state.user);

    const editTopHalf = () => {
        if (isAuthenticated && user?._id === profile?._id) {
            document.getElementById("editProfilePopUpParent").classList.add("popUpOpened");
        }
    };

    const [openComingSoon, setOpenComingSoon] = useState(false);
    const comingSoonRef = useRef(null);
    useOutsideClick(() => {
        if (openComingSoon) {
            setOpenComingSoon(false);
        }
    }, comingSoonRef);

    useEffect(() => {
        if (isProfileUpdated) window.location.reload();
    }, [isProfileUpdated]);

    useEffect(() => {
        dispatch(clearProfileUpdate());
    }, []);

    return (
        <>
            <MetaData title={`${profile?.firstName} ${profile?.lastName} | eZ - The One App`} />

            {openComingSoon && <ComingSoon setOpenComingSoon={setOpenComingSoon} comingSoonRef={comingSoonRef} />}

            <div id="editProfilePopUpParent" className="editProfilePopUpParent p-0 pb-[12%] lg:p-0 lg:m-0 popUpClosed w-full !z-[10]">
                <EditProfile
                    user={user}
                    isProfileUpdating={isProfileUpdating}
                />
            </div>

            <div className="flex flex-col items-center overflow-x-hidden">
                <div className="mx-auto w-full lg:w-[1000px]">
                    <div className="ezBanner w-full text-center bg-black absolute lg:static z-[1] flex flex-row justify-center">
                        <img
                            className="h-[11.7vh] w-auto lg:h-[20vh] m-0 p-0 object-contain"
                            src={profile?.cover?.url ? profile.cover.url : ezbanner}
                            alt="cover"
                        />
                    </div>

                    {isAuthenticated && user?._id === profile?._id && (
                        <div className="w-[100%] hidden md:flex flex-row justify-end items-center m-0 p-0 mt-1">
                            <button onClick={editTopHalf} className="editBtn flex flex-row items-center">
                                <div className="bg-black p-2 w-[50px] h-[50px] flex justify-center items-center group hover:bg-white duration-150">
                                    <BsFillPencilFill className="text-white group-hover:text-black" size={22} />
                                </div>
                            </button>
                        </div>
                    )}
                    {isAuthenticated && user?._id === profile?._id && (
                        <div className="absolute top-[187px] right-0 flex md:hidden flex-row justify-end items-center m-0 p-0 pe-2 mt-1">
                            <button onClick={editTopHalf} className="editBtn flex flex-row items-center">
                                <div className="bg-black p-2 w-[40px] h-[40px] flex justify-center items-center group hover:bg-white duration-150">
                                    <BsFillPencilFill className="text-white group-hover:text-black" size={15} />
                                </div>
                            </button>
                        </div>
                    )}

                    <div className="max-w-[100vw] lg:w-auto lg:pt-0 px-2 lg:px-0 flex flex-col-reverse lg:flex-row justify-between items-center lg:items-start mb-4 mt-[12vh] lg:mt-1">
                        <div className="lg:mt-0 w-full lg:w-[60%]">
                            <div className={`name my-2 mb-1 ${isAuthenticated && user?._id === profile?._id && "lg:-mt-[6vh]"}`}>
                                <div className="flex flex-col md:flex-row items-center md:gap-8 mb-4 md:mt-5">
                                    <h2 className="text-center lg:text-left md:mb-0 font-bold text-3xl lg:text-[40px] leading-[40px]">
                                        {`${profile.firstName ? profile?.firstName : ""} ${profile?.lastName ? profile.lastName : ""}`}
                                    </h2>
                                    <h2 className="text-xl font-semibold text-gray-700">
                                        {profile?.pronoun}
                                    </h2>
                                </div>
                                {profile.followers > 0 && (
                                    <div className="text-green-600 rounded-2xl text-xl text-center flex flex-row justify-center items-center font-bold lg:hidden">
                                        <h2>
                                            {profile.followers} {profile.followers === 1 ? "Follower" : "Followers"}
                                        </h2>
                                    </div>
                                )}
                                <p className="text-justify flex flex-wrap my-3 font-bold text-gray-500">
                                    {profile?.headline && profile.headline}
                                </p>
                                <div className="flex flex-row flex-wrap items-center gap-4 lg:hidden">
                                    <div className="flex items-center w-[100%] lg:w-[80%] gap-4 overflow-x-auto">
                                        {profile?._id !== user?._id && (
                                            <>
                                                <button onClick={() => setOpenComingSoon(true)}
                                                    className="actionBtn actionBtnFollow flex gap-1 justify-between items-center bg-[#E9830C] px-4 py-2 rounded-xl"
                                                >
                                                    <span className="text-sm text-white">
                                                        Follo
                                                    </span>
                                                    <AiFillPlusCircle className="fill-[white] text-2xl" />
                                                </button>
                                                <button onClick={() => setOpenComingSoon(true)}
                                                    className="actionBtn flex gap-1 justify-between items-center bg-[#EFEFEF] px-4 py-2 rounded-xl"
                                                >
                                                    <span className="fill-[#3DF554] text-sm text-[#454545]">
                                                        Chat
                                                    </span>
                                                    <AiFillWechat className="fill-[#3DF554] text-2xl" />
                                                </button>
                                            </>
                                        )}

                                        {isAuthenticated ? (
                                            profile?.role === "seller" && (
                                                user?._id !== profile?._id ? (
                                                    <Link to="service" className="actionBtn flex md:hidden gap-1 justify-between items-center bg-[#1DBF73] px-4 py-2 rounded-xl min-w-fit">
                                                        <span className="text-sm text-white">
                                                            Buy Services
                                                        </span>
                                                        <FaShoppingBag className="fill-[#FFFFFF] text-xl" />
                                                    </Link>
                                                ) : (
                                                    user?.role === "seller" && (
                                                        <Link to="seller/managelistings" className="actionBtn flex md:hidden gap-1 justify-between items-center bg-[#1DBF73] px-4 py-2 rounded-xl min-w-fit">
                                                            <span className="text-sm text-white">
                                                                My Services
                                                            </span>
                                                            <FaShoppingBag className="fill-[#FFFFFF] text-xl" />
                                                        </Link>
                                                    )
                                                )
                                            )
                                        ) : profile?.role === "seller" && (
                                            <Link to="service" className="flex md:hidden gap-1 actionBtn flex-row justify-between items-center bg-[#1DBF73] px-4 py-2 rounded-xl min-w-fit">
                                                <span className="text-sm text-white">
                                                    Buy Services
                                                </span>
                                                <FaShoppingBag className="fill-[#FFFFFF] text-xl " />
                                            </Link>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className="mb-0">
                                <div className="flex md:gap-5 md:flex-row justify-start items-stretch font-bold mb-6 mt-5">
                                    {profile?.profileCategory?.jobRoles[0] && (
                                        <div className="w-fit flex items-center">
                                            <div className="userIcon mr-3 flex flex-col justify-center">
                                                <img src={job1} alt="" className="w-12" />
                                            </div>
                                            <div className="p-2 md:p-5 profileLocationButton lg:mt-0 rounded-2xl lg:text-xl text-center px-4 lg:px-0 lg:ps-5 lg:pe-5 flex flex-row justify-between items-center">
                                                <h2>
                                                    {profile.profileCategory.jobRoles[0]}
                                                </h2>
                                            </div>
                                        </div>
                                    )}

                                    {profile.role === "seller" && profile?.bookingsDone > 0 && (
                                        <div className="hidden lg:flex bookingInfo mt-5 lg:mt-0 rounded-2xl p-2 ms-0 flex-row items-between">
                                            <img src={bookingIcon} alt="" className=" me-2 h-12" />
                                            <div className="w-full flex flex-col items-center justify-center">
                                                <p className="text-left">{profile.bookingsDone} {profile.bookingsDone > 1 ? "bookings" : "booking"}</p>
                                                <p className="text-left text-xs text-[#5D5D5D]">
                                                    Top <span className="font-bold text-[#000000]">{profile?.percentileRank}%</span> on eZ
                                                </p>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {profile?.location?.city && profile?.location?.country && (
                                    <div className="flex justify-start items-center lg:hidden">
                                        <img src={googleMapIcon} className="w-12 h-8 object-contain mr-3" />
                                        <button className="profileLocationButton bg-[white] font-bold text-[black] rounded-2xl p-2">
                                            <h2>{profile.location.city}, {profile.location.country}</h2>
                                        </button>
                                    </div>
                                )}

                                {profile.role === "seller" && profile?.bookingsDone > 0 && (
                                    <div className="flex w-fit pe-16 mt-6 md:mt-0 lg:hidden bookingInfo rounded-2xl p-2 ms-0 lg:ms-5 flex-row items-between">
                                        <img src={bookingIcon} alt="" className=" me-2 h-12" />
                                        <div className="w-full flex flex-col items-center justify-center">
                                            <p className="text-left">
                                                {profile.bookingsDone} {profile.bookingsDone > 1 ? "bookings" : "booking"}
                                            </p>
                                            <p className="text-left text-xs text-[#5D5D5D]">
                                                Top <span className="font-bold text-[#000000]">{profile?.percentileRank}%</span> on eZ
                                            </p>
                                        </div>
                                    </div>
                                )}

                                {profile?.profileCategory?.domain.length > 0 && (
                                    <div className="flex items-center justify-start w-[100%] mt-6 md:mt-0 mb-3">
                                        <div className="mr-2">
                                            <img src={i} alt="" className="w-11 h-7 md:h-8" />
                                        </div>
                                        <div className="flex flex-wrap gap-y-3 gap-x-1 w-[80%] lg:w-[80%] h-[fit-content]">
                                            {profile.profileCategory.domain.map((item, i) => (
                                                <div className="m-0 bg-[#1DBF73] px-3 py-1 h-[fit-content] rounded-2xl text-white" key={i}>
                                                    <p className="p-0 m-0">{item}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {profile?.profileCategory?.skills.length > 0 && (
                                    <div className="flex items-center justify-start w-[100%] mb-6">
                                        <div className="mr-2">
                                            <img src={diamond} alt="" className="w-12 rounded-3xl" />
                                        </div>
                                        <div className="flex w-[100%] lg:w-[100%] h-[fit-content] flex-wrap gap-y-2 gap-x-1">
                                            {profile.profileCategory.skills.slice(0, 7).map((skill, i) => (
                                                <div className="m-0 bg-gray-400 px-3 py-1 h-[fit-content] rounded-2xl text-white" key={i}>
                                                    <p className="font-light p-0 m-0">{skill}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>

                            {profile.followers > 0 && (
                                <div className="followers w-fit mt-5 lg:mt-0 rounded-2xl text-xl text-center px-5 py-5 hidden lg:flex flex-row justify-between items-center font-bold">
                                    <h2>
                                        {profile.followers} {profile.followers === 1 ? "Follower" : "Followers"}
                                    </h2>
                                </div>
                            )}

                            <div className="hidden lg:flex flex-row justify-between items-center mt-10 gap-4">
                                <div className="flex items-center w-[100%] lg:w-[80%] gap-4 ">
                                    {profile?._id !== user?._id && (
                                        <>
                                            <button onClick={() => setOpenComingSoon(true)}
                                                className="actionBtn actionBtnFollow flex gap-1 justify-between items-center bg-[#E9830C] px-4 py-2 rounded-xl"
                                            >
                                                <span className="text-[17px] text-white font-bold">
                                                    Follow
                                                </span>
                                                <AiFillPlusCircle className="fill-[white] text-2xl" />
                                            </button>
                                            <button onClick={() => setOpenComingSoon(true)}
                                                className="actionBtn flex gap-1 justify-between items-center bg-[#EFEFEF] px-4 py-2 rounded-xl"
                                            >
                                                <span className="fill-[#3DF554] text-[17px] text-[#454545] font-bold">
                                                    Chat
                                                </span>
                                                <AiFillWechat className="fill-[#3DF554] text-2xl" />
                                            </button>
                                        </>
                                    )}
                                    {isAuthenticated ? (
                                        profile?.role === "seller" && (
                                            user?._id !== profile?._id ? (
                                                <Link to="service" className="hidden lg:flex gap-1 actionBtn flex-row justify-between items-center bg-[#1DBF73] px-4 py-2 rounded-xl min-w-fit">
                                                    <span className="text-[17px] text-white font-bold">
                                                        Buy Services
                                                    </span>
                                                    <FaShoppingBag className="fill-[#FFFFFF] text-2xl " />
                                                </Link>
                                            ) : (
                                                user?.role === "seller" && (
                                                    <Link to="/seller/managelistings" className="hidden lg:flex gap-1 actionBtn flex-row justify-between items-center bg-[#1DBF73] px-4 py-2 rounded-xl min-w-fit">
                                                        <span className="text-[17px] text-white font-bold">
                                                            My Services
                                                        </span>
                                                        <FaShoppingBag className="fill-[#FFFFFF] text-2xl " />
                                                    </Link>
                                                )
                                            )
                                        )
                                    ) : profile?.role === "seller" && (
                                        <Link to="service" className="hidden lg:flex gap-1 actionBtn flex-row justify-between items-center bg-[#1DBF73] px-4 py-2 rounded-xl min-w-fit">
                                            <span className="text-[17px] text-white font-bold">
                                                Buy Services
                                            </span>
                                            <FaShoppingBag className="fill-[#FFFFFF] text-2xl " />
                                        </Link>
                                    )}
                                </div>
                            </div>
                        </div>

                        {profile?.role === "seller" && (
                            <div className="hidden w-[10%] lg:flex flex-col justify-start items-center">
                                <img src={assuredIcon} />
                            </div>
                        )}

                        <div className="flex flex-col items-center m-0 p-0">
                            <div className="px-0 lg:w-full relative flex flex-row lg:flex-col items-center lg:items-center justify-between">
                                <img
                                    src={profile?.avatar ? profile?.avatar?.url : "/icon.png"}
                                    alt="User Image"
                                    className="w-[150px] h-[150px] lg:w-[250px] lg:h-[250px] border-4 rounded-full overflow-hidden"
                                />
                            </div>

                            <div className="md:hidden w-full flex items-center justify-center">
                                <div className="flex justify-center items-center">
                                    <span className="text-sm text-gray-600 font-bold">{profile?.username && `@${profile.username}`}</span>
                                </div>
                            </div>

                            <div className="hidden lg:flex flex-col justify-between items-center p-0 m-0 w-full">
                                <div className="flex mt-3 justify-center items-center gap-2">
                                    <img src={ez} className="flex" alt="" />
                                    <span className="text-sm text-gray-600 font-bold">{`@${profile?.username}`}</span>
                                </div>

                                <div className="flex flex-col justify-center">
                                    <div className="mt-3 flex justify-center items-center gap-2">
                                        <AiFillStar className="text-[#3DF554] text-3xl" />
                                        <button className="profileLocationButton bg-[white] text-[black] rounded-2xl p-2 font-bold flex items-center gap-1">
                                            {profile?.ratings?.average ? profile.ratings.average : 0}
                                            <StarRating ratings={profile?.ratings?.average ? profile.ratings.average : 0} />
                                        </button>
                                    </div>

                                    {profile?.location?.city && profile?.location?.country && (
                                        <div className="mt-5 flex justify-center items-center gap-2">
                                            <img src={googleMapIcon} className="h-8" />
                                            <button className="profileLocationButton bg-[white] text-[black] rounded-2xl p-2">
                                                {profile.location.city}, {profile.location.country}
                                            </button>
                                        </div>
                                    )}

                                    {profile?.website && (
                                        <a href={profile.website} target="_blank" className="mt-5 flex justify-center items-center gap-2">
                                            <FcLink className="text-3xl" />
                                            <button className="profileLocationButton  w-[100px] bg-[white] text-[black] rounded-2xl p-2">
                                                <span className="text-blue-800">Website</span>
                                            </button>
                                        </a>
                                    )}
                                </div>

                                <div className="flex justify-between items-center mt-5">
                                    <div className="flex gap-5">
                                        {profile?.socialLinks?.map((link, index) => {
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

                    <div className="w-full flex flex-col items-center mt-10">
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
                                onClick={() => setOpenComingSoon(true)}
                            >
                                <BsFillBagCheckFill size={30} className="fill-[#3DF554]" />
                                #Portfolio
                            </button>
                            <button
                                className={`${activeButton === 2 && "upperBtnActive"} hover:shadow-profileGreen upperBtns px-[1.4rem] py-[0.4rem] rounded-[10px] text-[17px] bg-[#FFFFFF] text-[#003902] flex flex-row items-center gap-3`}
                                onClick={() => setOpenComingSoon(true)}
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
                            {/* <button
                                className={`${activeButton === 5 && "upperBtnActive"} hover:shadow-profileGreen upperBtns py-[0.8rem] px-[1.14rem] rounded-[10px] text-[17px] bg-[#FFFFFF] text-[#003902] flex flex-row items-center gap-3`}
                                onClick={() => setOpenComingSoon(true)}
                            >
                                <BsFillBagCheckFill size={30} className="fill-[#3DF554]" />
                                #Complaints
                            </button> */}
                        </div>

                        {activeButton == 0 && <ProfileDetails />}
                    </div>
                </div>
            </div>
        </>
    );
};

export default PublicProfile
