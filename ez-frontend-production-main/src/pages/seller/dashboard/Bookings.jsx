import React from 'react'
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import bookingTypeFilterLogo from "../../../assets/bookingTypeFilterLogo.svg"
import bookingTypeFilterArrow from "../../../assets/bookingTypeFilterArrow.svg"
import statusFilterLogo from "../../../assets/statusFilterLogo.svg"
import statusMonthFilterArrow from "../../../assets/statusMonthFilterArrow.svg"
import monthFilterLogo from "../../../assets/monthFilterLogo.svg"
import bookingsSearchLogo from "../../../assets/bookingsSearchLogo.svg"
import coins from "../../../assets/coins.svg"

import Loading from '../../../components/Loader/Loader';
import { formattedBookingsDate } from '../../../hooks/formatDateTime';

function Bookings({ user }) {
    const { isFetchingBookings, bookings } = useSelector((state) => state.seller);

    const [activeTopButton, setActiveTopButton] = useState(1);
    const subHeadings = [
        "All bookings",
        "Completed",
        "Upcoming",
        // "Ongoing",
        // "Cancelled",
    ];

    const getStatus = (bookedDate) => {
        var today = new Date();
        today.setHours(0, 0, 0, 0);

        var dateOfBooking = new Date(bookedDate);
        dateOfBooking.setHours(0, 0, 0, 0);

        if (dateOfBooking > today) {
            return "Upcoming";
        } else {
            return "Completed";
        }
    };

    const bookingsData = bookings?.slice()?.reverse()?.map((booking, index) => {
        return {
            id: index,
            date: formattedBookingsDate(booking.createdAt),
            title: booking.seller_itemTitle,
            ...booking.buyer_photo ? {
                buyerPic: booking.buyer_photo
            } : {
                buyerPic: "/icon.png"
            },
            buyerName: booking.buyer_name,
            ...booking.buyer_username ? {
                buyerUsername: booking.buyer_username
            } : {
                buyerUsername: ""
            },
            status: getStatus(booking.bookedDate),
            revenue: `${booking.price.currencyCode} ${booking.price.amount}`,
        }
    });

    const topButtonClicked = (index) => {
        setActiveTopButton(index);
    }

    const [activeFilter, setActiveFilter] = useState("All bookings");

    const filterSelected = (e) => {
        setActiveFilter(e.target.value);
    }

    if (isFetchingBookings) {
        return <Loading />
    }
    else {
        return (
            <div className='flex'>
                <div className='w-full'>
                    <h2 className='text-3xl font-bold'>Bookings</h2>
                    <hr className='my-2' />
                    {/* top buttons */}
                    <div className='flex flex-row items-center gap-4 mt-6'>
                        <button onClick={() => topButtonClicked(1)} className={`${activeTopButton == 1 ? "border-b-2 border-green-400" : ""}`}>All bookings</button>
                        <button onClick={() => topButtonClicked(2)} className={`${activeTopButton == 2 ? "border-b-2 border-green-400" : ""}`}>Completed</button>
                        <button onClick={() => topButtonClicked(3)} className={`${activeTopButton == 3 ? "border-b-2 border-green-400" : ""}`}>Upcoming</button>
                        {/* <button onClick={() => topButtonClicked(4)} className={`${activeTopButton == 4 ? "border-b-8 border-green-800" : ""}`}>Ongoing</button>
                        <button onClick={() => topButtonClicked(5)} className={`${activeTopButton == 5 ? "border-b-8 border-green-800" : ""}`}>Cancelled</button> */}
                    </div>

                    <hr />

                    {/* component-1 All bookings */}
                    <div className={`${activeTopButton != 1 ? "hidden" : ""} px-2 pe-4`}>
                        {/* component heading */}
                        <div className='mt-6'>
                            <h3 className='text-2xl font-bold'>{subHeadings[activeTopButton - 1]}</h3>
                        </div>

                        {/* search and filters */}
                        <div className='flex justify-between items-center lg:pe-10 mt-6 overflow-x-auto gap-4'>
                            {/* search bar */}
                            <div className='flex flex-row p-2 rounded-2xl border-black border-2'>
                                <img src={bookingsSearchLogo} alt="" />
                                <input placeholder={`Order ID / Name`} type="text" className='ms-2 overflow-hidden' />
                            </div>
                            {/* filters */}
                            <div className='flex flex-row gap-4'>
                                <div className='border border-black rounded-2xl flex flex-row gap-2 p-2'>
                                    <img src={bookingTypeFilterLogo} alt="" />
                                    <p>Booking </p>
                                    <img src={bookingTypeFilterArrow} alt="" />
                                </div>
                                <div className='border border-black rounded-2xl flex flex-row gap-2 p-2'>
                                    <img src={statusFilterLogo} alt="" />
                                    {/* <p>Status</p> */}
                                    <select name="" id="" className='max-w-fit' value={activeFilter} onChange={(event) => filterSelected(event)}>
                                        <option disabled hidden>Status</option>
                                        {subHeadings.map((data, index) => (
                                            <option value={data} key={index}>{data}</option>
                                        ))}
                                    </select>
                                    {/* <img src={statusMonthFilterArrow} alt="" /> */}
                                </div>
                                <div className='border border-black rounded-2xl flex flex-row gap-2 p-2'>
                                    <img src={monthFilterLogo} alt="" />
                                    <p>Month</p>
                                    <img src={statusMonthFilterArrow} alt="" />
                                </div>
                            </div>
                        </div>

                        <hr className='my-4' />

                        <div className='grid grid-cols-8 gap-y-2'>
                            <div className='col-span-1 text-center py-2'>Date</div>
                            <div className='col-span-2 text-center py-2'>Title</div>
                            <div className='col-span-2 text-center py-2'>Name</div>
                            <div className='col-span-1 text-center py-2'>Status</div>
                            <div className='col-span-2 text-center py-2'>Revenue</div>

                            {bookingsData.map((booking, index) => (
                                <>
                                    <div key={index + 1} className={`${((activeFilter == booking.status) || (activeFilter == "All bookings")) ? "block" : "hidden"} col-span-1 text-center`}>
                                        {booking.date}
                                    </div>
                                    <div key={index + 2} className={`${((activeFilter == booking.status) || (activeFilter == "All bookings")) ? "block" : "hidden"} col-span-2`}>
                                        <div className='flex flex-row'>
                                            <p className='lg:ms-2 font-bold'>{booking.title}</p>
                                        </div>
                                    </div>
                                    <Link to={booking.buyerUsername && `/${booking.buyerUsername}`} key={index + 3} className={`${((activeFilter == booking.status) || (activeFilter == "All bookings")) ? "block" : "hidden"} ${booking.buyerUsername ? "cursor-pointer" : "cursor-default"} flex flex-row items-center col-span-2`}>
                                        <div className='w-[40px] h-[40px] lg:me-2'>
                                            <img src={booking.buyerPic} alt="" className='rounded-full' />
                                        </div>
                                        <div className='flex flex-col items-center'>
                                            <p className='font-bold'>{booking.buyerName}</p>
                                            <p className='text-[rgb(190,190,190)] text-[0.8em]'>{booking.buyerUsername}</p>
                                        </div>
                                    </Link>
                                    <div key={index + 4} className={`${((activeFilter == booking.status) || (activeFilter == "All bookings")) ? "block" : "hidden"} col-span-1 flex flex-col justify-center items-center`}>
                                        <div className={`
                                ${booking.status == "Upcoming" ? "bg-blue-200" : booking.status == "Ongoing" ? "bg-purple-400" : booking.status == "Cancelled" ? "bg-orange-200" : "bg-green-400"}
                                py-2 px-4 rounded-full`}>
                                            {booking.status}
                                        </div>
                                    </div>
                                    <div key={index + 5} className={`${((activeFilter == booking.status) || (activeFilter == "All bookings")) ? "block" : "hidden"} col-span-2 flex flex-row items-center justify-center`}>
                                        <img src={coins} alt="" />
                                        <p className="text-2xl font-bold text-[#146B1E]">{booking.revenue}</p>
                                    </div>
                                </>
                            ))}
                        </div>

                        {bookings.length === 0 && (
                            <div className="mt-10 w-full flex items-center justify-center">
                                <p className="font-extrabold text-2xl">
                                    No Bookings yet
                                </p>
                            </div>
                        )}
                    </div>


                    {/* component-2 Completed bookings */}
                    <div className={`${activeTopButton != 2 ? "hidden" : ""} px-2 pe-4`}>
                        {/* component heading */}
                        <div className='mt-6'>
                            <h3 className='text-2xl font-bold'>{subHeadings[activeTopButton - 1]}</h3>
                        </div>

                        {/* search and filters */}
                        <div className='flex justify-between items-center lg:pe-10 mt-6 overflow-x-auto gap-4'>
                            {/* search bar */}
                            <div className='flex flex-row p-2 rounded-2xl border-black border-2'>
                                <img src={bookingsSearchLogo} alt="" />
                                <input placeholder={`Order ID / Name`} type="text" className='ms-2 overflow-hidden' />
                            </div>
                            {/* filters */}
                            <div className='flex flex-row gap-4'>
                                <div className='border border-black rounded-2xl flex flex-row gap-2 p-2'>
                                    <img src={bookingTypeFilterLogo} alt="" />
                                    <p>Booking Type</p>
                                    <img src={bookingTypeFilterArrow} alt="" />
                                </div>
                                <div className='border border-black rounded-2xl flex flex-row gap-2 p-2'>
                                    <img src={statusFilterLogo} alt="" />
                                    <p>Status</p>
                                    <img src={statusMonthFilterArrow} alt="" />
                                </div>
                                <div className='border border-black rounded-2xl flex flex-row gap-2 p-2'>
                                    <img src={monthFilterLogo} alt="" />
                                    <p>Month</p>
                                    <img src={statusMonthFilterArrow} alt="" />
                                </div>
                            </div>
                        </div>

                        <hr className='my-4' />

                        <div className='grid grid-cols-8 gap-y-2'>
                            <div className='col-span-1 text-center py-2'>Date</div>
                            <div className='col-span-2 text-center py-2'>Title</div>
                            <div className='col-span-2 text-center py-2'>Name</div>
                            <div className='col-span-1 text-center py-2'>Status</div>
                            <div className='col-span-2 text-center py-2'>Revenue</div>

                            {bookingsData.map((booking, index) => (
                                <>
                                    <div key={index + 1} className={`${booking.status != "Completed" ? "hidden" : ""} col-span-1 text-center`}>
                                        {booking.date}
                                    </div>
                                    <div key={index + 2} className={`${booking.status != "Completed" ? "hidden" : ""} col-span-2`}>
                                        <div className='flex flex-row'>
                                            <p className='lg:ms-2 font-bold'>{booking.title}</p>
                                        </div>
                                    </div>
                                    <Link to={booking.buyerUsername && `/${booking.buyerUsername}`} key={index + 3} className={`${booking.status != "Completed" ? "hidden" : ""} ${booking.buyerUsername ? "cursor-pointer" : "cursor-default"} flex flex-row items-center col-span-2`}>
                                        <div className='w-[40px] h-[40px] lg:me-2'>
                                            <img src={booking.buyerPic} alt="" className='rounded-full' />
                                        </div>
                                        <div className='flex flex-col items-center'>
                                            <p className='font-bold'>{booking.buyerName}</p>
                                            <p className='text-[rgb(190,190,190)] text-[0.8em]'>{booking.buyerUsername}</p>
                                        </div>
                                    </Link>
                                    <div key={index + 4} className={`${booking.status != "Completed" ? "hidden" : ""} col-span-1 flex flex-col justify-center items-center`}>
                                        <div className={`
                                ${booking.status == "Upcoming" ? "bg-blue-200" : booking.status == "Ongoing" ? "bg-purple-400" : booking.status == "Cancelled" ? "bg-orange-200" : "bg-green-400"}
                                py-2 px-4 rounded-full`}>
                                            {booking.status}
                                        </div>
                                    </div>
                                    <div key={index + 5} className={`${booking.status != "Completed" ? "hidden" : ""} col-span-2 flex flex-row items-center justify-center`}>
                                        <img src={coins} alt="" />
                                        <p className="text-2xl font-bold text-[#146B1E]">{booking.revenue}</p>
                                    </div>
                                </>
                            ))}
                        </div>

                        {bookingsData.filter(data => data.status === "Completed").length === 0 && (
                            <div className="mt-10 w-full flex items-center justify-center">
                                <p className="font-extrabold text-2xl">
                                    No completed bookings yet
                                </p>
                            </div>
                        )}
                    </div>


                    {/* component-3 Upcoming bookings */}
                    <div className={`${activeTopButton != 3 ? "hidden" : ""} px-2 pe-4`}>
                        {/* component heading */}
                        <div className='mt-6'>
                            <h3 className='text-2xl font-bold'>{subHeadings[activeTopButton - 1]}</h3>
                        </div>

                        {/* search and filters */}
                        <div className='flex justify-between items-center lg:pe-10 mt-6 overflow-x-auto gap-4'>
                            {/* search bar */}
                            <div className='flex flex-row p-2 rounded-2xl border-black border-2'>
                                <img src={bookingsSearchLogo} alt="" />
                                <input placeholder={`Order ID / Name`} type="text" className='ms-2 overflow-hidden' />
                            </div>
                            {/* filters */}
                            <div className='flex flex-row gap-4'>
                                <div className='border border-black rounded-2xl flex flex-row gap-2 p-2'>
                                    <img src={bookingTypeFilterLogo} alt="" />
                                    <p>Booking Type</p>
                                    <img src={bookingTypeFilterArrow} alt="" />
                                </div>
                                <div className='border border-black rounded-2xl flex flex-row gap-2 p-2'>
                                    <img src={statusFilterLogo} alt="" />
                                    <p>Status</p>
                                    <img src={statusMonthFilterArrow} alt="" />
                                </div>
                                <div className='border border-black rounded-2xl flex flex-row gap-2 p-2'>
                                    <img src={monthFilterLogo} alt="" />
                                    <p>Month</p>
                                    <img src={statusMonthFilterArrow} alt="" />
                                </div>
                            </div>
                        </div>

                        <hr className='my-4' />

                        <div className='grid grid-cols-8 gap-y-2'>
                            <div className='col-span-1 text-center py-2'>Date</div>
                            <div className='col-span-2 text-center py-2'>Title</div>
                            <div className='col-span-2 text-center py-2'>Name</div>
                            <div className='col-span-1 text-center py-2'>Status</div>
                            <div className='col-span-2 text-center py-2'>Revenue</div>

                            {bookingsData.map((booking, index) => (
                                <>
                                    <div key={index + 1} className={`${booking.status != "Upcoming" ? "hidden" : ""} col-span-1 text-center`}>
                                        {booking.date}
                                    </div>
                                    <div key={index + 2} className={`${booking.status != "Upcoming" ? "hidden" : ""} col-span-2`}>
                                        <div className='flex flex-row'>
                                            <p className='lg:ms-2 font-bold'>{booking.title}</p>
                                        </div>
                                    </div>
                                    <Link to={booking.buyerUsername && `/${booking.buyerUsername}`} key={index + 3} className={`${booking.status != "Upcoming" ? "hidden" : ""} ${booking.buyerUsername ? "cursor-pointer" : "cursor-default"} flex flex-row items-center col-span-2`}>
                                        <div className='w-[40px] h-[40px] lg:me-2'>
                                            <img src={booking.buyerPic} alt="" className='rounded-full' />
                                        </div>
                                        <div className='flex flex-col items-center'>
                                            <p className='font-bold'>{booking.buyerName}</p>
                                            <p className='text-[rgb(190,190,190)] text-[0.8em]'>{booking.buyerUsername}</p>
                                        </div>
                                    </Link>
                                    <div key={index + 4} className={`${booking.status != "Upcoming" ? "hidden" : ""} col-span-1 flex flex-col justify-center items-center`}>
                                        <div className={`
                                ${booking.status == "Upcoming" ? "bg-blue-200" : booking.status == "Ongoing" ? "bg-purple-400" : booking.status == "Cancelled" ? "bg-orange-200" : "bg-green-400"}
                                py-2 px-4 rounded-full`}>
                                            {booking.status}
                                        </div>
                                    </div>
                                    <div key={index + 5} className={`${booking.status != "Upcoming" ? "hidden" : ""} col-span-2 flex flex-row items-center justify-center`}>
                                        <img src={coins} alt="" />
                                        <p className="text-2xl font-bold text-[#146B1E]">{booking.revenue}</p>
                                    </div>
                                </>
                            ))}
                        </div>

                        {bookingsData.filter(data => data.status === "Upcoming").length === 0 && (
                            <div className="mt-10 w-full flex items-center justify-center">
                                <p className="font-extrabold text-2xl">
                                    No upcoming bookings yet
                                </p>
                            </div>
                        )}
                    </div>

                    {/* <>
                        <div className={`${activeTopButton != 4 ? "hidden" : ""} px-2 pe-4`}>
                            <div className='mt-6'>
                                <h3 className='text-2xl font-bold'>{subHeadings[activeTopButton - 1]}</h3>
                            </div>

                            <div className='flex justify-between items-center lg:pe-10 mt-6'>
                                <div className='flex flex-row p-2 rounded-2xl border-black border-2'>
                                    <img src={bookingsSearchLogo} alt="" />
                                    <input placeholder={`Order ID / Name`} type="text" className='ms-2' />
                                </div>
                                <div className='flex flex-row lg:gap-4'>
                                    <div className='border border-black rounded-2xl flex flex-row gap-2 p-2'>
                                        <img src={bookingTypeFilterLogo} alt="" />
                                        <p>Booking Type</p>
                                        <img src={bookingTypeFilterArrow} alt="" />
                                    </div>
                                    <div className='border border-black rounded-2xl flex flex-row gap-2 p-2'>
                                        <img src={statusFilterLogo} alt="" />
                                        <p>Status</p>
                                        <img src={statusMonthFilterArrow} alt="" />
                                    </div>
                                    <div className='border border-black rounded-2xl flex flex-row gap-2 p-2'>
                                        <img src={monthFilterLogo} alt="" />
                                        <p>Month</p>
                                        <img src={statusMonthFilterArrow} alt="" />
                                    </div>
                                </div>
                            </div>

                            <hr className='my-4' />

                            <div className='grid grid-cols-8 gap-y-2'>
                                <div className='col-span-1 text-center py-2'>Date</div>
                                <div className='col-span-2 text-center py-2'>Title</div>
                                <div className='col-span-2 text-center py-2'>Name</div>
                                <div className='col-span-1 text-center py-2'>Status</div>
                                <div className='col-span-2 text-center py-2'>Revenue</div>

                                {bookingsData.map((booking, index) => (
                                    <>
                                        <div key={index + 1} className={`${booking.status != "Ongoing" ? "hidden" : ""} col-span-1 text-center`}>
                                            {booking.date}
                                        </div>
                                        <div key={index + 2} className={`${booking.status != "Ongoing" ? "hidden" : ""} col-span-2`}>
                                            <div className='flex flex-row'>
                                                <p className='lg:ms-2 font-bold'>{booking.title}</p>
                                            </div>
                                        </div>
                                        <Link to={booking.buyerUsername && `/${booking.buyerUsername}`} key={index + 3} className={`${((activeFilter == booking.status) || (activeFilter == "All bookings")) ? "block" : "hidden"} ${booking.buyerUsername ? "cursor-pointer" : "cursor-default"} flex flex-row items-center col-span-2`}>
                                            <div className='w-[40px] h-[40px] lg:me-2'>
                                                <img src={booking.buyerPic} alt="" className='rounded-full' />
                                            </div>
                                            <div className='flex flex-col items-center'>
                                                <p className='font-bold'>{booking.buyerName}</p>
                                                <p className='text-[rgb(190,190,190)] text-[0.8em]'>{booking.buyerUsername}</p>
                                            </div>
                                        </Link>
                                        <div key={index + 4} className={`${booking.status != "Ongoing" ? "hidden" : ""} col-span-1 flex flex-col justify-center items-center`}>
                                            <div className={`
                                ${booking.status == "Upcoming" ? "bg-blue-200" : booking.status == "Ongoing" ? "bg-purple-400" : booking.status == "Cancelled" ? "bg-orange-200" : "bg-green-400"}
                                py-2 px-4 rounded-full`}>
                                                {booking.status}
                                            </div>
                                        </div>
                                        <div key={index + 5} className={`${booking.status != "Ongoing" ? "hidden" : ""} col-span-2 flex flex-row items-center justify-center`}>
                                            <img src={coins} alt="" />
                                            <p className="text-2xl font-bold text-[#146B1E]">{booking.revenue}</p>
                                        </div>
                                    </>
                                ))}
                            </div>
                        </div>


                        <div className={`${activeTopButton != 5 ? "hidden" : ""} px-2 pe-4`}>
                            <div className='mt-6'>
                                <h3 className='text-2xl font-bold'>{subHeadings[activeTopButton - 1]}</h3>
                            </div>

                            <div className='flex justify-between items-center lg:pe-10 mt-6'>
                                <div className='flex flex-row p-2 rounded-2xl border-black border-2'>
                                    <img src={bookingsSearchLogo} alt="" />
                                    <input placeholder={`Order ID / Name`} type="text" className='ms-2' />
                                </div>
                                <div className='flex flex-row lg:gap-4'>
                                    <div className='border border-black rounded-2xl flex flex-row gap-2 p-2'>
                                        <img src={bookingTypeFilterLogo} alt="" />
                                        <p>Booking Type</p>
                                        <img src={bookingTypeFilterArrow} alt="" />
                                    </div>
                                    <div className='border border-black rounded-2xl flex flex-row gap-2 p-2'>
                                        <img src={statusFilterLogo} alt="" />
                                        <p>Status</p>
                                        <img src={statusMonthFilterArrow} alt="" />
                                    </div>
                                    <div className='border border-black rounded-2xl flex flex-row gap-2 p-2'>
                                        <img src={monthFilterLogo} alt="" />
                                        <p>Month</p>
                                        <img src={statusMonthFilterArrow} alt="" />
                                    </div>
                                </div>
                            </div>

                            <hr className='my-4' />

                            <div className='grid grid-cols-8 gap-y-2'>
                                <div className='col-span-1 text-center py-2'>Date</div>
                                <div className='col-span-2 text-center py-2'>Title</div>
                                <div className='col-span-2 text-center py-2'>Name</div>
                                <div className='col-span-1 text-center py-2'>Status</div>
                                <div className='col-span-2 text-center py-2'>Revenue</div>

                                {bookingsData.map((booking, index) => (
                                    <>
                                        <div key={index + 1} className={`${booking.status != "Cancelled" ? "hidden" : ""} col-span-1 text-center`}>
                                            {booking.date}
                                        </div>
                                        <div key={index + 2} className={`${booking.status != "Cancelled" ? "hidden" : ""} col-span-2`}>
                                            <div className='flex flex-row'>
                                                <p className='lg:ms-2 font-bold'>{booking.title}</p>
                                            </div>
                                        </div>
                                        <Link to={booking.buyerUsername && `/${booking.buyerUsername}`} key={index + 3} className={`${((activeFilter == booking.status) || (activeFilter == "All bookings")) ? "block" : "hidden"} ${booking.buyerUsername ? "cursor-pointer" : "cursor-default"} flex flex-row items-center col-span-2`}>
                                            <div className='w-[40px] h-[40px] lg:me-2'>
                                                <img src={booking.buyerPic} alt="" className='rounded-full' />
                                            </div>
                                            <div className='flex flex-col items-center'>
                                                <p className='font-bold'>{booking.buyerName}</p>
                                                <p className='text-[rgb(190,190,190)] text-[0.8em]'>{booking.buyerUsername}</p>
                                            </div>
                                        </Link>
                                        <div key={index + 4} className={`${booking.status != "Cancelled" ? "hidden" : ""} col-span-1 flex flex-col justify-center items-center`}>
                                            <div className={`
                                ${booking.status == "Upcoming" ? "bg-blue-200" : booking.status == "Ongoing" ? "bg-purple-400" : booking.status == "Cancelled" ? "bg-orange-200" : "bg-green-400"}
                                py-2 px-4 rounded-full`}>
                                                {booking.status}
                                            </div>
                                        </div>
                                        <div key={index + 5} className={`${booking.status != "Cancelled" ? "hidden" : ""} col-span-2 flex flex-row items-center justify-center`}>
                                            <img src={coins} alt="" />
                                            <p className="text-2xl font-bold text-[#146B1E]">{booking.revenue}</p>
                                        </div>
                                    </>
                                ))}
                            </div>
                        </div>
                    </> */}
                </div>
            </div>
        )
    }
}

export default Bookings

// import LandingNavbar from "../../Landing/components/LandingNavbar";
// import sellerpic from "../../../assets/profile-img/usericon.jpg";
// import { IoMdArrowDropdown } from "react-icons/io";
// import {
//     MdWatchLater,
//     MdPayments,
//     MdOutlineMiscellaneousServices,
//     // MdOutlinePriceChange,
//     MdEventAvailable,
//     MdRocketLaunch,
//     MdOutlineHomeRepairService,
// } from "react-icons/md";
// import {
//     FaDatabase,
//     FaBuysellads,
//     // FaAngleRight,
//     // FaSwatchbook,
//     // FaRupeeSign,
//     // FaMailBulk,
// } from "react-icons/fa";
// import { IoMdNotificationsOutline } from "react-icons/io";
// import { RiQuestionnaireLine } from "react-icons/ri";
// import { SiGoogleanalytics } from "react-icons/si";
// import { GoMegaphone, GoMailRead } from "react-icons/go";
// import { TfiList } from "react-icons/tfi";
// import { TbPhoneCall } from "react-icons/tb";
// import workshopsEventThumbnail1 from "../../../assets/workshopsEventThumbnail.png"