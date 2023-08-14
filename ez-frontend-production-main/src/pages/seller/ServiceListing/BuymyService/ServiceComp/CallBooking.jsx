import React ,{useState} from 'react'
import {BiPhoneCall} from "react-icons/bi"


function CallBooking() {
    const [call,setcall]=useState(false)


    return (
        <>
            <div className='w-full flex flex-col py-5 px-6  md:py-10 md:px-12 bg-slate-50'>
                <h1 className='text-xl font-semibold py-2'>Book a call with us</h1>
                <p className='text-justify text-slate-700 font-medium'>Speak to our expert to understand how you can make the best of your fueler profile</p>
                <button type="button" className='w-full p-2 my-2 text-base font-semibold outline-transparent border-2 rounded-[10px] border-[#18FBFF] bg-[#F2FFFE] flex justify-center items-center gap-1' onClick={() => setcall(true)}><BiPhoneCall className={`fill-[#006BFF] ${call ? "animate-pulse " : " "} `} /> Pick a time slot</button>
            </div>
        </>
    )
}

export default CallBooking
