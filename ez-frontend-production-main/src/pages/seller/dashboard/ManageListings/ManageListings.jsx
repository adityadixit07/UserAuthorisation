import { React, useEffect, useState } from "react";

import boostIcon from "../../../../assets/ManageListingsBoost.svg"
import addIcon from "../../../../assets/ManageListingsAdd.svg"

import './ManageListings.css'
import ManageListingTypes from "./ManageListingsTypes";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSellerCatalog } from "../../../../actions/sellerActions";

function ManageListings({ user, isAuthenticated, profileRoute }) {
    const dispatch = useDispatch();
    const { isFetchingCatalog, catalogs } = useSelector(state => state.seller);

    const [activeTopButton, setactiveTopButton] = useState(1);

    const [catalogFetched, setCatalogFetched] = useState(false);
    useEffect(() => {
        if (isAuthenticated && user?.username) {
            dispatch(getSellerCatalog({ username: user.username }));
            setCatalogFetched(true);
        }
    }, [user.username]);

    return (
        <>
            <div className="flex mt-6">
                {/* main content */}
                <div className="relative w-full">
                    <div className="px-2 md:px-0">
                        <h2 className='text-3xl font-bold'>Manage Listings</h2>
                        <p>"Expand your offerings, unleash your potential!"</p>
                    </div>
                    <div className="flex justify-between py-4 px-2 md:px-0">
                        <h3 className="text-2xl font-bold">Your Services</h3>
                        <div className="flex gap-4">
                            <button className="flex gap-2 items-center justify-between p-2 px-4 bg-[#2EDBA7] rounded text-white font-bold"><img src={boostIcon} />Boost Listings</button>
                            <Link to="/seller/addservice" className="flex gap-2 items-center justify-between p-2 px-4 bg-[#2EDBA7] rounded text-white font-bold">
                                Add Service
                                <img src={addIcon} alt="" />
                            </Link>
                        </div>
                    </div>
                    {/* 4 buttons top */}
                    <div className="overflow-x-auto gap-2 md:gap-0 flex justify-between w-full md:w-[80%] sticky top-0 z-40 bg-white rounded-[10px] px-2 md:px-0">
                        <a onClick={() => setactiveTopButton(1)} href="#consultations" className={`upperBtns ${activeTopButton == 1 ? "upperBtnActive font-bold" : ""} w-[200px] py-[0.8rem] px-[1.14rem] rounded-[10px] text-[17px] bg-[#FFFFFF] text-[#003902] flex flex-row items-center justify-center gap-3`}>
                            1:1 Consultation
                        </a>
                        <a onClick={() => setactiveTopButton(2)} href="#services" className={`upperBtns ${activeTopButton == 2 ? "upperBtnActive font-bold" : ""} w-[200px] py-[0.8rem] px-[1.14rem] rounded-[10px] text-[17px] bg-[#FFFFFF] text-[#003902] flex flex-row items-center justify-center gap-3`}>
                            Services
                        </a>
                        <a onClick={() => setactiveTopButton(3)} href="#digitalproducts" className={`upperBtns ${activeTopButton == 3 ? "upperBtnActive font-bold" : ""} w-[200px] py-[0.8rem] px-[1.14rem] rounded-[10px] text-[17px] bg-[#FFFFFF] text-[#003902] flex flex-row items-center justify-center gap-3`}>
                            Digital Products
                        </a>
                        <a onClick={() => setactiveTopButton(4)} href="#workshops" className={`upperBtns ${activeTopButton == 4 ? "upperBtnActive font-bold" : ""} w-[200px] py-[0.8rem] px-[1.14rem] rounded-[10px] text-[17px] bg-[#FFFFFF] text-[#003902] flex flex-row items-center justify-center gap-3`}>
                            Workshops
                        </a>
                    </div>

                    {/* display area */}
                    {catalogFetched && !isFetchingCatalog ? (
                        <ManageListingTypes
                            componentToShow={activeTopButton}
                            catalogs={catalogs}
                        />
                    ) : !isFetchingCatalog && catalogs?.length === 0 ? (
                        <div className="text-center text-2xl font-extrabold mt-5">
                            No items added yet!
                        </div>
                    ) : !user.username && (
                        <div className="text-center text-xl font-extrabold mt-5">
                            You haven't created your username yet! <br />
                            <p className="text-2xl">Create now <Link to={profileRoute} className="text-green-500">here</Link></p>
                        </div>
                    )}
                </div>
            </div >
        </>
    )
}

export default ManageListings

{/* <div className = "p-5 w-[30%]" style = {{ boxShadow: "0 5px 10px 0px rgb(192, 190, 190)" }}>
    <div className="flex flex-row lg:flex-col items-center m-0 p-0">
            <div className="border-4 rounded-full overflow-hidden w-[50%]">
                <img
                    src={
                        user?.avatar
                            ? user?.avatar?.url
                            : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv8lgDc1gGlVqn3UjDqKslOP6HrrUissH8xw&usqp=CAU"
                    }
                    alt="User Image"
                    className=""
                />
            </div>

            <div>
                <div className="mt-3 text-center">
                    <h2 className="font-black text-2xl text-center">
                        {`${user ? user.firstName : "Lorem"} ${user ? user.lastName : "Ipsum"}`}
                    </h2>
                </div>
                <div className="mt-3 flex justify-center items-center gap-2">
                    <p className="text-justify my-3">
                        {user ? user.bio : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pellentesque, sem et finibus venenatis, nisi magna scelerisque mi, eget laoreet enim nunc sit amet tellus. Pellentesque accumsan felis vel ex laoreet bibendum. Praesent a nibh lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
                    </p>
                </div>
            </div>

            <div className="">
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

                <div className=" mt-5 flex justify-center items-center">
                    <img src={googleMapIcon} className="h-8" />
                    <button className="profileLocationButton bg-[white] text-[black] rounded-2xl p-2">
                        Bengaluru,India
                    </button>
                </div>

                <div className="flex flex-row justify-center items-center gap-3 mt-6">
                    <img src={bookingCheck} className="h-8" />
                    <div className="bookings w-fit mt-5 lg:mt-0 rounded-2xl text-xl text-center px-5 py-5 flex flex-row justify-between items-center font-bold">
                        <h2 className="">1234 Bookings</h2>
                    </div>
                </div>
        </div>
    </div>
</div > */}