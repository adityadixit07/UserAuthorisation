import React, { useState } from 'react'
import "./sellerr.css"
import TimezoneSelect from "react-timezone-select";

import dayjs, { Dayjs } from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { BsFillCheckCircleFill, BsFillStarFill, BsFillFlagFill } from "react-icons/bs"
import { FaPenFancy } from "react-icons/fa"
import { FaChevronCircleRight } from "react-icons/fa"
import { GiCoins } from "react-icons/gi"
import hourglass from "../../Assets/ez-logo/hour-glass.png"
// import Navbar from '../LandingPage/navbar'
function Availability() {

    const [value, setValue] = useState(Dayjs);
    const [timezone, setTimezone] = useState("America/New_York");

    // console.log(timezone)
    return (
        <>

            <div className='md:mx-52 mx-2 my-auto flex gap-10 md:flex-row flex-col'>

                <div className="flex flex-col px-[10px] gap-2 py-3 md:w-1/2 w-full rounded-[10px]">
                    <div className="flex items-center md:justify-start justify-around gap-3 mb-2">
                        <div className="w-28 h-28 overflow-hidden rounded-full  relative">
                            <img
                                src={
                                    "https://images.unsplash.com/photo-1581382575275-97901c2635b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                                }
                                className="w-28"
                                alt=""
                            />
                        </div>
                        <div className="flex flex-col items-center justify-center gap-2">
                            <h1 className="text-[17px] font-bold">Sanjay Mehta </h1>
                            <div className="flex justify-center items-center gap-3">
                                {/* <div className="w-10 h-10 overflow-hidden rounded-[9999px]  relative">
                                    <img
                                        src={
                                            "https://images.unsplash.com/photo-1581382575275-97901c2635b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                                        }
                                        className="w-28"
                                        alt=""
                                    />
                                </div> */}
                                <h2 className=" text-sm font-bold">1:1 Consultation </h2>
                            </div>

                        </div>
                    </div>
                    <div className='flex items-center justify-between'>
                        <button
                            className="p-2.5 rounded-3xl bg-purple-300 flex gap-4 justify-start items-center font-bold text-xs"
                            type=""
                        >
                            <BsFillCheckCircleFill fill='green' size={25} />
                            1234+Booking
                        </button>
                        <div className='flex flex-col items-center gap-1 md:gap-5'>
                            <div className='flex items-center gap-1 md:gap-5'>

                                <BsFillStarFill fill='green' />
                                <h3 className='px-2.5 py-2 shadow-lg rounded-2xl text-xs font-semibold'>5.0/7.5k</h3>
                            </div>
                            <div className='flex items-center gap-1 md:gap-5'>

                                <span className='flex items-center text-green-500'>

                                    <BsFillFlagFill className='fill-green-500' /><p className='text-[12px]'>1198</p>
                                </span>
                                <span className='flex items-center text-red-500'>

                                    <BsFillFlagFill className='fill-red-600 ' /><p className='text-[12px]'>234</p>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-8 py-10'>

                        <p className="text-[11px] fonr-normal w-full text-justify">
                            Sandip is a seasoned investment banker with 18+ years of experience
                            in Investment banking & Corporate Advisory. He has in-depth
                            knowledge about private equity, turn around stories, M&A, scaling up
                            businesses etc.
                        </p>
                        <p className="text-[11px] fonr-normal w-full text-justify">
                            Sandip is a seasoned investment banker with 18+ years of experience
                            in Investment banking & Corporate Advisory.
                        </p> <p className="text-[11px] fonr-normal w-full text-justify">
                            Sandip is a seasoned investment banker with 18+ years of experience
                            in Investment banking & Corporate Advisory. He has in-depth
                            knowledge about private equity, turn around stories, M&A, scaling up
                            businesses etc.Sandip is a seasoned investment banker with 18+ years of experience
                            in Investment banking & Corporate Advisory.
                        </p>
                    </div>
                    <div className='flex flex-col gap-5'>

                        <div className='flex justify-around'>
                            <GiCoins size={50} className='fill-yellow-400' /> <button className='text-sm font-semibold rounded-full text-green-800 px-28 py-2.5 bg-green-300'>Rs 10,000</button>
                        </div>
                        <div className='flex justify-around'>
                            <div className='w-12 h-12 rounded-full overflow-hidden'>
                                <img src={hourglass} className='w-full -rotate-12' alt="" />
                            </div> <button className='text-sm font-semibold rounded-full text-green-800 px-28  bg-blue-100'>30 mins</button>
                        </div>
                    </div>
                    {/* <div className="flex w-full items-center gap-2 translate-x-2">
                        <div className="w-5 h-5 overflow-hidden rounded-[9999px]  relative">
                            <img
                                src={
                                    "https://images.unsplash.com/photo-1581382575275-97901c2635b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                                }
                                className="w-28"
                                alt=""
                            />
                        </div>
                        <h2>Startup India Mentor</h2>
                    </div>
                    <div className="flex w-full gap-2 translate-x-2">
                        <FaPenFancy size={25} className="relative fill-white pt-[5px]" />
                        <div className="flex flex-wrap gap-1">
                            <span className="px-2 bg-[#ffffff] rounded">#venture</span>{" "}
                            <span className="px-2 bg-[#ffffff] rounded">#PEfunding</span>
                            <span className="px-2 bg-[#ffffff] rounded">#investors</span>
                        </div>
                    </div> */}
                </div>



                <div className='w-full md:w-1/2 flex flex-col px-4 py-10 md:py-4'>

                    <div className=' prent flex flex-col items-center justify-center'>
                        <h1 className='font-semibold'>Select Date & Time</h1>
                        <LocalizationProvider className="child" dateAdapter={AdapterDayjs}>
                            <DemoContainer components={['DateCalendar']}>
                                {/* <DemoItem label="Uncontrolled calendar">
                                    <DateCalendar defaultValue={dayjs('2022-04-17')} />
                                </DemoItem> */}
                                <DemoItem label=" ">
                                    <DateCalendar value={value} onChange={(newValue) => setValue(newValue)} />
                                </DemoItem>
                            </DemoContainer>
                        </LocalizationProvider>
                    </div>
                    <div className='flex flex-col gap-8 py-10'>
                        <div className='flex gap-10 items-center'>
                            <h1 className='text-sm font-semibold'>Pick a Time</h1><h3 className='text-xs bg-slate-50 p-2.5 rounded-3xl '>Times you're avilable</h3>
                        </div>
                        <div className='flex md:flex-row flex-col gap-4 md:gap-8 md:items-center justify-between'>
                            <h1 className='text-sm font-bold'>Morning</h1>
                            <div className="flex items-center gap-3 text-xs">
                                <button className='px-5 md:px-10 py-2 border hover:bg-blue-100 border-blue-500 flex items-center justify-center focus:bg-blue-400 focus:text-white '>7:00pm</button>
                                <button className='px-5 md:px-10 py-2 border hover:bg-blue-100 border-blue-500 flex items-center justify-center focus:bg-blue-400 focus:text-white '>8:00pm</button>
                                <button className='px-5 md:px-10 py-2 border hover:bg-blue-100 border-blue-500 flex items-center justify-center focus:bg-blue-400 focus:text-white '>10:00pm</button>
                            </div>
                        </div>
                        <div className='flex md:flex-row flex-col gap-4 md:gap-8 md:items-center justify-between '>
                            <h1 className='text-sm font-bold'>Afternoon</h1>
                            <div className="flex items-center gap-3 text-xs">
                                <button className='px-5 md:px-10 py-2 border hover:bg-blue-100 border-blue-500 flex items-center justify-center focus:bg-blue-400 focus:text-white'>7:00pm</button>
                                <button className='px-5 md:px-10 py-2 border hover:bg-blue-100 border-blue-500 flex items-center justify-center focus:bg-blue-400 focus:text-white'>8:00pm</button>
                                <button className='px-5 md:px-10 py-2 border hover:bg-blue-100 border-blue-500 flex items-center justify-center focus:bg-blue-400 focus:text-white'>10:00pm</button>
                            </div>
                        </div>
                        <div className='flex md:flex-row flex-col gap-4 md:gap-8 md:items-center justify-between'>
                            <h1 className='text-sm font-bold'>Evening</h1>
                            <div className="flex items-center gap-3 text-xs">
                                <button className='px-5 md:px-10 py-2 border hover:bg-blue-100 border-blue-500 flex items-center justify-center focus:bg-blue-400 focus:text-white'>7:00pm</button>
                                <button className='px-5 md:px-10 py-2 border hover:bg-blue-100 border-blue-500 flex items-center justify-center focus:bg-blue-400 focus:text-white'>8:00pm</button>
                                <button className='px-5 md:px-10 py-2 border hover:bg-blue-100 border-blue-500 flex items-center justify-center focus:bg-blue-400 focus:text-white'>10:00pm</button>
                            </div>
                        </div>
                        <div className='timezone'>
                            <h3 className='text-xs font-medium'>TIMEZONE</h3>
                            <div>
                                <TimezoneSelect
                                    label="Select Timezone"
                                    value={timezone}
                                    onChange={setTimezone}
                                />
                                {/* <h1>The time in {timezone} is {new Date().toLocaleString(timezone)}</h1> */}
                            </div>
                        </div>
                    </div>

                    <div className='flex justify-end '>

                        <button type="" className='p-2.5 flex items-center rounded-full bg-green-600 text-white'><FaChevronCircleRight />Book Session</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Availability
