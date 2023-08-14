import { React, useState } from "react";
import googleMapIcon from "../../assets/profile-img/googleMapIcon.png";
import { AiFillStar } from "react-icons/ai";

import i from "../../assets/profile-img/i-logo.svg";
import diamond from "../../assets/explore-icons/diamond-svgrepo-com.svg";
import bookingCheck from "../../assets/check.svg"

import './ServiceListing.css'
import ServiceListingTypes from "./ServiceListingTypes";
import StarRating from "./Components/Extras/StarRating";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { BsFillPeopleFill } from "react-icons/bs";

function ServiceListing() {
    const { profile } = useSelector(state => state.user);
    const { isFetchingCatalog, catalogs } = useSelector(state => state.seller);

    const [activeTopButton, setactiveTopButton] = useState(1);

    const chooseServiceType = (index) => {
        setactiveTopButton(index);
    };

    return (
        <>
            <div className="flex w-full lg:w-[1100px] mx-auto my-5">
                <div className="px-5 w-[380px] sticky top-[calc(10vh+20px)] h-fit hidden lg:block rounded-[10px]" style={{ boxShadow: "0 0 10px 0px rgb(192, 190, 190)", }}>
                    <div className="flex flex-row lg:flex-col items-center m-0 p-0 md:py-8">
                        <div className="border-4 rounded-full overflow-hidden w-[50%]">
                            <img
                                src={profile?.avatar?.url ? profile.avatar.url : "/icon.png"}
                                alt="User Image"
                                className=""
                            />
                        </div>

                        <div>
                            <div className="mt-3 text-center">
                                <h2 className="font-black text-2xl text-center">
                                    {profile.firstName} {profile.lastName}
                                </h2>
                            </div>
                            {profile?.username && (
                                <Link to={`/${profile.username}`} className="text-center">
                                    <h2 className="text-gray-400 font-bold text-md text-center">
                                        @{profile.username}
                                    </h2>
                                </Link>
                            )}
                            <div className="mt-2 flex justify-center items-center gap-2">
                                <p className="text-justify my-3">
                                    {profile.bio || "No bio yet."}
                                </p>
                            </div>
                        </div>

                        <div className="w-full flex flex-col gap-5">
                            {profile?.profileCategory?.domain?.length > 0 && (
                                <div className="flex items-center justify-start">
                                    <div className="hidden lg:block mr-3">
                                        <img src={i} alt="" className="w-8 h-6" />
                                    </div>
                                    {/* <div className="flex h-[fit-content] w-full overflow-x-auto gap-2"> */}
                                    <div className="flex h-[fit-content] flex-wrap gap-2">
                                        {profile?.profileCategory?.domain?.map((item, i) => (
                                            <div className="m-0 me-0 bg-[#3DF554] px-3 py-1 h-[fit-content] rounded-3xl text-white" key={i}>
                                                <p className="p-0 m-0">{item}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {profile?.profileCategory?.skills?.length > 0 && (
                                <div className="flex items-center justify-start">
                                    <div className="hidden lg:block i mr-3">
                                        <img src={diamond} alt="" className="w-[68px] rounded-3xl" />
                                    </div>
                                    {/* <div className="flex h-[fit-content] w-full overflow-x-auto gap-2"> */}
                                    <div className="flex h-[fit-content] flex-wrap gap-2">
                                        {profile?.profileCategory?.skills?.slice(0, 7)?.map((item, i) => (
                                            <div className="m-0 me-0 bg-gray-400 px-3 py-1 h-[fit-content] rounded-3xl text-white" key={i}>
                                                <p className="font-light p-0 m-0">{item}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            <div className="flex justify-start items-center">
                                <div className="hidden lg:block i mr-[9px]">
                                    <AiFillStar className="text-[#3DF554] w-8 h-8" />
                                </div>
                                <button className="profileLocationButton bg-[white] text-[black] rounded-2xl p-2 font-bold flex items-center gap-1">
                                    {profile?.ratings?.average ? profile.ratings.average : 0}
                                    <StarRating ratings={profile?.ratings?.average ? profile.ratings.average : 0} />
                                </button>
                            </div>

                            {profile?.location && (
                                <div className="flex justify-start items-center">
                                    <div className="hidden lg:block i mr-[9px]">
                                        <img src={googleMapIcon} className="w-8 h-8 object-contain" />
                                    </div>
                                    <button className="profileLocationButton bg-[white] text-[black] rounded-2xl p-2">
                                        {profile?.location?.city}, {profile?.location?.country}
                                    </button>
                                </div>
                            )}

                            {profile?.bookingsDone > 0 && (
                                <div className="flex justify-start items-center">
                                    <div className="hidden lg:block i mr-[9px]">
                                        <img src={bookingCheck} className="w-8 h-8 object-contain" />
                                    </div>
                                    <div className="bookings w-fit mt-5 lg:mt-0 rounded-2xl text-lg text-center px-5 py-2 flex flex-row justify-between items-center font-bold">
                                        <h2 className="">{profile?.bookingsDone} Bookings</h2>
                                    </div>
                                </div>
                            )}

                            <div className="w-full flex justify-start">
                                <Link to={`/${profile?.username}`} className="hidden lg:flex gap-1 actionBtn flex-row justify-between items-center bg-[#1DBF73] px-4 py-2 rounded-xl min-w-fit">
                                    <span className="text-[17px] text-white font-bold">
                                        View Profile
                                    </span>
                                    <BsFillPeopleFill className="fill-[#FFFFFF] text-xl " />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full lg:w-[70%] lg:px-4">
                    <div className="w-full sticky top-[calc(10vh+20px)] z-[5]">
                        <div className="overflow-x-auto gap-2 md:gap-0 flex justify-between w-full bg-white rounded-[10px] px-2 md:px-0">
                            <button onClick={() => chooseServiceType(1)} href="#consultations" className={`upperBtns ${activeTopButton == 1 ? "upperBtnActive font-bold" : ""} w-[170px] py-[0.8rem] px-[1.0rem] rounded-[10px] text-[17px] bg-[#FFFFFF] text-[#003902] flex flex-row items-center justify-center gap-3`}>
                                1:1 Consultation
                            </button>
                            <button onClick={() => chooseServiceType(2)} href="#services" className={`upperBtns ${activeTopButton == 2 ? "upperBtnActive font-bold" : ""} w-[160px] py-[0.8rem] px-[1.0rem] rounded-[10px] text-[17px] bg-[#FFFFFF] text-[#003902] flex flex-row items-center justify-center gap-3`}>
                                Services
                            </button>
                            <button onClick={() => chooseServiceType(3)} href="#digitalproducts" className={`upperBtns ${activeTopButton == 3 ? "upperBtnActive font-bold" : ""} w-[170px] py-[0.8rem] px-[1.0rem] rounded-[10px] text-[17px] bg-[#FFFFFF] text-[#003902] flex flex-row items-center justify-center gap-3`}>
                                Digital Products
                            </button>
                            <button onClick={() => chooseServiceType(4)} href="#additionalinfo" className={`upperBtns ${activeTopButton == 4 ? "upperBtnActive font-bold" : ""} w-[160px] py-[0.8rem] px-[1.0rem] rounded-[10px] text-[17px] bg-[#FFFFFF] text-[#003902] flex flex-row items-center justify-center gap-3`}>
                                Workshops
                            </button>
                        </div>
                    </div>

                    <div className="my-5">
                        <ServiceListingTypes
                            componentToShow={activeTopButton}
                            isFetchingCatalog={isFetchingCatalog}
                            catalogs={catalogs}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ServiceListing