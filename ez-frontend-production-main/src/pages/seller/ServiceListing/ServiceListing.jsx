import { React, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { userLogout } from "../../actions/userActions";
import { Link, useNavigate } from "react-router-dom";

import ez from "../../../assets/eZ.svg";
import googleMapIcon from "../../../assets/profile-img/googleMapIcon.png"

import { BsLinkedin } from "react-icons/bs";
import { ImWhatsapp } from "react-icons/im";
import { AiFillStar } from "react-icons/ai";
import {
    AiFillGithub,
    AiFillTwitterCircle,
} from "react-icons/ai";

import i from "../../../assets/profile-img/i-logo.svg";
import skillsLogo from "../../../assets/profile-img/skills-logo.svg"
import bookingCheck from "../../../assets/check.svg"

import LandingNavbar from "../../Landing/components/LandingNavbar";
import './ServiceListing.css'
import ServiceListingTypes from "./ServiceListingTypes";
import ServiceListingBanner from "./serviceListingBanner";

function ServiceListing() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { isAuthenticated, error, user } = useSelector((state) => state.user);

    const [activeTopButton, setactiveTopButton] = useState(1);

    const chooseServiceType = (index) => {
        setactiveTopButton(index);
    }

    // useEffect(() => {
    //     if (error) {
    //         console.log(error);
    //     }

    //         console.log(isAuthenticated);

    //     if (isAuthenticated === false) {
    //         navigate("/");
    //     }
    // }, [dispatch, error, isAuthenticated]);
    return (
        <>
            <LandingNavbar />

            <div className="topBanner">
                <ServiceListingBanner />
            </div>

            <div className="flex mt-6">
                {/* left pane */}
                <div className="p-5 w-[30%]" style={{
                    boxShadow: "0 5px 10px 0px rgb(192, 190, 190)",
                }}>
                    <div className="flex flex-row lg:flex-col items-center m-0 p-0">
                        {/* profile pic */}
                        <div className="border-4 rounded-full overflow-hidden w-[50%]">
                            <img
                                src={
                                    user?.avatar
                                        ? user?.avatar?.url
                                        // : "https://res.cloudinary.com/ds6spmr71/image/upload/v1684065994/user-placeholder_rlwjt9.png"
                                        : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv8lgDc1gGlVqn3UjDqKslOP6HrrUissH8xw&usqp=CAU"
                                }
                                alt="User Image"
                                className=""
                            />
                        </div>

                        <div>
                            {/* name */}
                            <div className="mt-3 text-center">
                                <h2 className="font-black text-2xl text-center">
                                    {`${user ? user.firstName : "Lorem"} ${user ? user.lastName : "Ipsum"}`}
                                </h2>
                            </div>
                            {/* bio */}
                            <div className="mt-3 flex justify-center items-center gap-2">
                                <p className="text-justify my-3">
                                    {user ? user.bio : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pellentesque, sem et finibus venenatis, nisi magna scelerisque mi, eget laoreet enim nunc sit amet tellus. Pellentesque accumsan felis vel ex laoreet bibendum. Praesent a nibh lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
                                </p>
                            </div>
                        </div>

                        <div className="">
                            {/* job roles */}
                            <div className="flex items-center justify-start w-[100%]">
                                <div className="hidden lg:block mr-3">
                                    <img src={i} alt="" className="w-8" />
                                </div>
                                <div className="flex w-[100%] lg:w-[80%] h-[fit-content] flex-wrap">
                                    <div className="m-0 mt-4 me-2 lg:me-4 bg-[#3DF554] p-1 px-5 h-[fit-content] rounded-3xl text-white">
                                        <p className="font-bold p-0 m-0">Engineering</p>
                                    </div>
                                    <div className="m-0 mt-4 me-2 lg:me-4 bg-[#3DF554] p-1 px-5 h-[fit-content] rounded-3xl text-white">
                                        <p className="font-bold p-0 m-0">Technology</p>
                                    </div>
                                    <div className="m-0 mt-4 me-0 lg:me-4 bg-[#3DF554] p-1 px-5 h-[fit-content] rounded-3xl text-white">
                                        <p className="font-bold p-0 m-0">Sales</p>
                                    </div>
                                </div>
                            </div>

                            {/* skills */}
                            <div className="flex items-center justify-start w-[100%] mb-6">
                                <div className="hidden lg:block i mr-3">
                                    <img src={skillsLogo} alt="" className="w-8" />
                                </div>
                                <div className="flex w-[100%] lg:w-[80%] h-[fit-content]">
                                    <div className="m-0 mt-4 me-2 lg:me-4 bg-gray-400 p-1 px-5 h-[fit-content] rounded-3xl text-white">
                                        <p className="font-bold p-0 m-0">Closing</p>
                                    </div>
                                    <div className="m-0 mt-4 me-2 lg:me-4 bg-gray-400 p-1 px-5 h-[fit-content] rounded-3xl text-white">
                                        <p className="font-bold p-0 m-0">UI/UX</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex-col justify-between items-center p-0 m-0 w-full">

                            {/* Rating */}
                            <div className="mt-3 flex justify-center items-center gap-2">
                                <AiFillStar className="text-[#3DF554] text-3xl" />
                                <button className="profileLocationButton bg-[white] text-[black] rounded-2xl p-2 font-bold flex">
                                    4.0
                                    <AiFillStar className="text-[#3DF554] text-2xl" />
                                    <AiFillStar className="text-[#3DF554] text-2xl" />
                                    <AiFillStar className="text-[#3DF554] text-2xl" />
                                    <AiFillStar className="text-[#3DF554] text-2xl" />
                                    <AiFillStar className="text-[#A7A7A7] text-2xl" />
                                </button>
                            </div>

                            {/* Location */}
                            <div className=" mt-5 flex justify-center items-center">
                                <img src={googleMapIcon} className="h-8" />
                                <button className="profileLocationButton bg-[white] text-[black] rounded-2xl p-2">
                                    Bengaluru,India
                                </button>
                            </div>

                            {/* social media */}
                            {/* <div className="flex justify-center items-center mt-5 gap-2">
                                <AiFillTwitterCircle className="text-4xl text-[#4bc5f7]" />
                                <BsLinkedin className="text-4xl text-[#0A66C2] rounded-2xl" />
                                <ImWhatsapp className="text-4xl fill-[green]" />
                                <AiFillGithub className="text-4xl text-[black]" />
                            </div> */}

                            {/* bookings */}
                            <div className="flex flex-row justify-center items-center gap-3 mt-6">
                                <img src={bookingCheck} className="h-8" />
                                <div className="bookings w-fit mt-5 lg:mt-0 rounded-2xl text-xl text-center px-5 py-5 flex flex-row justify-between items-center font-bold">
                                    {/* <h2 className="">{user.bookings ? user.bookings : "1234"} Bookings</h2> */}
                                    <h2 className="">1234 Bookings</h2>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* main content */}
                <div className="w-[73%] px-10">
                    {/* 4 buttons top */}
                    <div className="flex justify-between w-full">
                        <button onClick={() => chooseServiceType(1)} href="#consultations" className={`upperBtns ${activeTopButton == 1 ? "upperBtnActive font-bold" : ""} py-[0.8rem] px-[1.14rem] rounded-[10px] text-[17px] bg-[#FFFFFF] text-[#003902] flex flex-row items-center gap-3`}>
                            1:1 Consultation
                        </button>
                        <button onClick={() => chooseServiceType(2)} href="#services" className={`upperBtns ${activeTopButton == 2 ? "upperBtnActive font-bold" : ""} py-[0.8rem] px-[1.14rem] rounded-[10px] text-[17px] bg-[#FFFFFF] text-[#003902] flex flex-row items-center gap-3`}>
                            Services
                        </button>
                        <button onClick={() => chooseServiceType(3)} href="#digitalproducts" className={`upperBtns ${activeTopButton == 3 ? "upperBtnActive font-bold" : ""} py-[0.8rem] px-[1.14rem] rounded-[10px] text-[17px] bg-[#FFFFFF] text-[#003902] flex flex-row items-center gap-3`}>
                            Digital Products
                        </button>
                        <button onClick={() => chooseServiceType(4)} href="#additionalinfo" className={`upperBtns ${activeTopButton == 4 ? "upperBtnActive font-bold" : ""} py-[0.8rem] px-[1.14rem] rounded-[10px] text-[17px] bg-[#FFFFFF] text-[#003902] flex flex-row items-center gap-3`}>
                            Workshops
                        </button>
                    </div>

                    {/* display area */}
                    <div className="mt-5">
                        <ServiceListingTypes componentToShow={activeTopButton} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ServiceListing