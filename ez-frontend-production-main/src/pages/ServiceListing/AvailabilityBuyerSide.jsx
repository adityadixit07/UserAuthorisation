import React, { useEffect, useState } from 'react'
import "./sellerr.css"
import TimezoneSelect from "react-timezone-select";

import dayjs from 'dayjs';
import { BsFillCheckCircleFill, BsCameraVideoFill, BsFillFlagFill } from "react-icons/bs"
import { FaChevronCircleRight } from "react-icons/fa"
import { GiCoins } from "react-icons/gi"
import coin from "../../assets/profile-img/3436369_516073-PIKHVC-396-removebg-preview 1.svg"
import hourglass from "../../assets/profile-img/5143410-removebg-preview 1.png"
import message from "../../assets/profile-img/Vectormessage.svg"
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getSellerCatalogByID } from '../../actions/sellerActions';
import Loading from "../../components/Loader/Loader";
import StarRating from './Components/Extras/StarRating';
import { getFormattedDateTime } from '../../hooks/formatDateTime';
import { toast } from 'react-hot-toast';
import { bookSession, clearSession } from '../../actions/calendarActions';
import { addMinutes } from '../../hooks/addTime';
import DateTimeSlot from '../../components/Availability/DateTimeSlot';
import PurchasedModal from './Components/Extras/PurchasedModal';
import UserDetail from '../../components/Modal/UserDetail';

function Availability() {
    const { catalogID } = useParams();
    const dispatch = useDispatch();
    const { isAuthenticated, user, profile } = useSelector(state => state.user);
    const { isFetchingCatalog, catalog } = useSelector(state => state.seller);
    const { isBooking, isBooked } = useSelector(state => state.session);

    const [date, setDate] = useState(dayjs());
    const [isDateSelected, setIsDateSelected] = useState(false);
    const [selectedTime, setSelectedTime] = useState(null);
    const [timezone, setTimezone] = useState("Asia/Kolkata");

    const [openDetail, setOpenDetail] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [countryCode, setCountryCode] = useState("");
    const [phone, setPhone] = useState("");
    const [rawPhone, setRawPhone] = useState("");

    const phoneHandler = (phone, country) => {
        setPhone(phone);
        setCountryCode(country.dialCode);

        const rawPh = phone.replace(country.dialCode, "");
        setRawPhone(rawPh);
    };

    useEffect(() => {
        if (isAuthenticated) {
            setName(`${user.firstName ? user.firstName : ""} ${user.lastName ? user.lastName : ""}`);
            setEmail(`${user.email ? user.email : ""}`);
        }
    }, [isAuthenticated]);

    useEffect(() => {
        if (catalogID) {
            dispatch(getSellerCatalogByID({ catalogID: catalogID }));
        }
    }, [catalogID]);

    const handleBookSession = () => {
        if (!selectedTime) return toast.error("Choose a time to book appointment!");
        const formattedDate = date.format('DD MMM YYYY');
        const dateTimeObj = {
            timezone: timezone,
            time: selectedTime,
            formattedDate: formattedDate
        };
        const duration = catalog?.duration === "Custom" ? catalog?.customDuration : catalog.duration
        const startTime = getFormattedDateTime(dateTimeObj);
        const endTime = addMinutes(startTime, duration);

        const sessionData = {
            isAuthenticated: isAuthenticated,
            seller_id: catalog?.seller_user?._id,
            seller_username: catalog?.username,
            seller_name: `${catalog?.seller_user?.firstName} ${catalog?.seller_user?.lastName}`,
            seller_email: catalog?.seller_user?.email,
            seller_phone: catalog?.seller_user?.phone,
            seller_itemID: catalog?._id,
            seller_itemTitle: catalog?.itemTitle,
            seller_photo: catalog?.seller_avatar,
            ...isAuthenticated && {
                buyer_id: user._id,
                buyer_username: user?.username,
                buyer_photo: user?.avatar?.url,
            },
            buyer_name: name,
            buyer_email: email,
            buyer_countryCode: countryCode,
            buyer_phone: rawPhone,
            startTime: startTime,
            endTime: endTime,
            price: catalog.price,
            duration: duration,
            timezone: timezone,
            service_type: catalog.serviceType,
            ...profile.meetingLink && {
                meetingLink: profile.meetingLink,
            },
            createdAt: new Date(),
        };

        dispatch(bookSession(sessionData));
    };

    useEffect(() => {
        dispatch(clearSession());
    }, []);

    return (
        isFetchingCatalog ? <Loading /> : catalog && (
            <>
                {isBooked && (
                    <PurchasedModal
                        type="Consultation"
                        username={catalog?.username}
                        isAuthenticated={isAuthenticated}
                    />
                )}
                {openDetail && (
                    <UserDetail
                        handleProceedToBuy={handleBookSession}
                        name={name}
                        setName={setName}
                        email={email}
                        setEmail={setEmail}
                        phone={phone}
                        phoneHandler={phoneHandler}
                        price={`${catalog?.price?.currencyCode} ${catalog?.price?.amount}`}
                        loading={isBooking}
                        openDetail={openDetail}
                        setOpenDetail={setOpenDetail}
                    />
                )}
                <div className='lg:w-[1200px] mx-2 md:mx-auto md:gap-10 flex md:flex-row flex-col'>
                    <div className="w-full md:w-[600px] flex flex-col gap-2 py-3 md:pb-10 h-fit md:sticky md:top-[calc(10vh)] rounded-[10px]">
                        <div className="flex flex-col md:flex-row items-center md:justify-start justify-around gap-3 mb-2">
                            <div className="relative">
                                <img
                                    src={catalog?.seller_avatar ? catalog.seller_avatar : "/icon.png"}
                                    className="w-[100px] md:w-[125px] h-[100px] md:h-[125px] rounded-full object-cover"
                                    alt=""
                                />
                            </div>
                            <div className="flex flex-col items-center justify-center gap-2">
                                <Link to={`/${catalog?.username}`} className="text-2xl md:text-3xl font-bold">
                                    {catalog.seller_user.firstName} {catalog.seller_user.lastName}
                                </Link>
                                <div className="flex justify-center items-center gap-3">
                                    <h2 className="text-lg md:text-xl p-2.5 shadow-md rounded-md text-green-700 font-bold">
                                        {catalog.itemTitle}
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center justify-between'>
                            <button
                                className="p-2.5 rounded-3xl bg-purple-300 flex gap-4 justify-start items-center font-bold text-sm"
                                type="button"
                            >
                                <BsFillCheckCircleFill fill='green' size={25} />
                                {catalog?.serviceType}
                            </button>
                            <div className='flex items-center md:flex-col gap-1'>
                                <div className='flex items-center gap-1 md:gap-5'>
                                    <div className="flex items-center gap-2 shadow-lg rounded-2xl px-2.5 py-2">
                                        <StarRating ratings={catalog.ratings} />
                                        ({catalog.reviews.length})
                                    </div>
                                </div>
                                {/* <div className='flex items-center gap-1 justify-end'>
                                    <span className='flex items-center text-green-500'>
                                        <BsFillFlagFill className='fill-green-500' />
                                        <p className='text-[8px]'>1198</p>
                                    </span>
                                    <span className='flex items-center text-red-500'>
                                        <BsFillFlagFill className='fill-red-600 ' />
                                        <p className='text-[8px]'>234</p>
                                    </span>
                                </div> */}
                            </div>
                        </div>

                        <div className='p-4 md:px-10 flex py-5 flex-col gap-5 shadow-lg rounded-xl'>
                            <div className='flex gap-3 justify-start'>
                                <div className='w-16 h-16 rounded-full overflow-hidden'>
                                    <img src={coin} className='w-full -rotate-12' />
                                </div>
                                <button className='text-xl text-green-600 font-semibold rounded-full '>
                                    {catalog?.price?.currencyCode} {catalog?.price?.amount}
                                </button>
                            </div>
                            <div className='flex justify-between'>
                                <div className='flex gap-5 items-center'>
                                    <BsCameraVideoFill className='fill-green-600' size={35} />
                                    <button className=' text-xs font-semibold rounded-full '>Online</button>
                                </div>
                                <div className='flex gap-5 items-center'>
                                    <BsCameraVideoFill className='fill-green-600' size={35} />
                                    <button className=' text-xs font-semibold rounded-full '>
                                        {catalog?.duration === "Custom" ? catalog?.customDuration : catalog.duration} mins
                                    </button>
                                </div>
                            </div>
                            <div className='flex flex-col gap-3'>
                                <div className='flex gap-5 items-center'>
                                    <BsFillCheckCircleFill className='fill-green-500' size={20} />
                                    <h3 className='text-xs'>Upto 10 Sessions per Month</h3>
                                </div>
                                <div className='flex gap-5 items-center'>
                                    <BsFillCheckCircleFill className='fill-green-500' size={20} />
                                    <h3 className='text-xs'>Unlimited Q&A via chat</h3>
                                </div>
                                <div className='flex gap-5 items-center'>
                                    <BsFillCheckCircleFill className='fill-green-500' size={20} />
                                    <h3 className='text-xs'>Flat fee, no hidden costs</h3>
                                </div>
                            </div>
                            <div
                                className='w-full md:w-[75%] mx-auto cursor-pointer p-2.5 bg-green-500 hover:bg-gray-500 flex gap-5 items-center justify-center relative font-bold text-white rounded-[10px]'
                                onClick={() => {
                                    const selectTimeDiv = document.getElementById('select-date');
                                    const selectTimeDivPosition = selectTimeDiv.offsetTop;
                                    window.scrollTo({ top: selectTimeDivPosition, behavior: 'smooth' });
                                    if (!date) {
                                        return toast.error("Choose a date to book appointment!");
                                    }
                                    if (!selectedTime) {
                                        return toast.error("Pick date/time to proceed!");
                                    }
                                    setOpenDetail(true);
                                }}
                            >
                                <button className='text-center font-bold text-white rounded-[10px]'>
                                    Book Session
                                </button>
                                <FaChevronCircleRight />
                            </div>
                        </div>

                        <div className='flex justify-start pt-5'>
                            <h1 className='px-10 text-xl rounded-[10px] font-bold py-2.5 shadow-md'>Overview:</h1>
                        </div>
                        <div className='flex flex-col gap-8 rounded-xl py-4 px-2.5 bg-slate-100'>

                            <p className="text-xs font-normal w-full text-justify">
                                {catalog?.description}
                            </p>
                        </div>
                        <div className='hidden md:flex flex-col gap-5 cursor-default'>
                            <div className='flex justify-around'>
                                <GiCoins size={50} className='fill-yellow-400' />
                                <div className='text-sm font-semibold rounded-full text-green-800 px-28 py-2.5 bg-green-300 flex items-center justify-center'>
                                    {catalog?.price?.currencyCode} {catalog?.price?.amount}
                                </div>
                            </div>
                            <div className='flex justify-around'>
                                <div className='w-12 h-12 rounded-full overflow-hidden'>
                                    <img src={hourglass} className='w-full -rotate-12' />
                                </div>
                                <div className='text-sm font-semibold rounded-full text-green-800 px-28  bg-blue-100 flex items-center justify-center'>
                                    {catalog?.duration === "Custom" ? catalog?.customDuration : catalog.duration} mins
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="select-date" className='w-full md:w-[600px] flex flex-col pt-3 pb-16'>
                        <DateTimeSlot
                            duration={catalog?.duration === "Custom" ? catalog?.customDuration : catalog.duration}
                            date={date}
                            setDate={setDate}
                            isDateSelected={isDateSelected}
                            setIsDateSelected={setIsDateSelected}
                            selectedTime={selectedTime}
                            setSelectedTime={setSelectedTime}
                        />

                        {isDateSelected && (
                            <div className='timezone pb-10'>
                                <h3 className='text-sm font-bold'>TIMEZONE</h3>
                                <div>
                                    <TimezoneSelect
                                        label="Select Timezone"
                                        value={timezone}
                                        onChange={(data) => setTimezone(data.value)}
                                    />
                                </div>
                            </div>
                        )}

                        {isDateSelected && (
                            <div className='flex justify-end w-full cursor-pointer'>
                                <button
                                    disabled={isBooking}
                                    onClick={() => {
                                        if (!date) {
                                            return toast.error("Choose a date to book appointment!");
                                        }
                                        if (!selectedTime) {
                                            return toast.error("Pick date/time to proceed!");
                                        }
                                        setOpenDetail(true);
                                    }}
                                    className='h-[40px] w-[150px] p-2.5 flex items-center justify-center gap-2 rounded-full bg-green-500 text-white'
                                >
                                    <div className='flex items-center justify-center gap-2'>
                                        <span>Book Session</span>
                                        <FaChevronCircleRight />
                                    </div>
                                </button>
                            </div>
                        )}
                    </div>
                </div >
            </>
        )
    )
};

export default Availability