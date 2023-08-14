import React from "react";
import Navbar from '../../components/Navbar/Navbar';
import ProgressBar from "@ramonak/react-progress-bar";
import './seller.css';
import { AiFillLinkedin } from 'react-icons/ai';
import { CiTimer } from 'react-icons/ci';
import { BiSkipNextCircle } from 'react-icons/bi';
import { TbSquareRoundedNumber1Filled, TbSquareRoundedNumber2Filled, TbSquareRoundedNumber3Filled } from 'react-icons/tb';


function Complete() {
    return <ProgressBar
        completed={15}
        maxCompleted={100}
        className="pbar"
    />
}


function Top() {
    return (
        <>
            <div className="flex justify-normal overflow-x-auto md:justify-around">
                <h1 className='flex flex-row gap-2 text-green-400'><TbSquareRoundedNumber1Filled size={48} />
                    Personal Info </h1>
                <h1 className='flex flex-row gap-2'><TbSquareRoundedNumber2Filled className="fill-black" size={48} />
                    Service Offerring </h1>
                <h1 className='flex flex-row gap-2'><TbSquareRoundedNumber3Filled className="fill-black" size={48} />
                    Transaction</h1>
                <h1 className='flex flex-row gap-2'><TbSquareRoundedNumber3Filled className="fill-black" size={48} />
                    Tax info</h1>
                <h1 className='flex flex-row gap-2'><TbSquareRoundedNumber3Filled className="fill-black" size={48} />
                    Payement Details</h1>
                <h1 className='flex flex-row gap-2'><TbSquareRoundedNumber3Filled className="fill-black" size={48} />
                    Agreement </h1>
            </div>
        </>
    )
}

function RegisterAsSeller() {
    return (
        <>
            <Navbar />
            <Top />
            <div className="flex flex-col gap-4">
                <div className="flex m-5 justify-around flex-col-reverse md:flex-row">
                    <div className="flex flex-col gap-[1rem]">
                        <h1 className="font-700 text-3xl font-bold md:text-5xl">Let's Begin your jouney with eZ!</h1>
                        <p className="font-300">We'd like to start by asking you a few questions to help guide you on your journey of eZ selling</p>
                    </div>
                    <Complete className="m-5" />
                </div>
                <div className="flex flex-col m-9">
                    <h1 className="text-2xl font-bold md:text-4xl">How would you describe yourself and your professional background ?</h1>
                    <p className="font-300"> Let your personality shine through as you paint a vivid picture of who you are as a professional.
                        Update your Work Experience, Educational Details etc. You can always edit later </p>
                </div>
                <div className="flex flex-col gap-2 justify-around md:flex-row gap-0">
                    <div className="flex flex-row shadow-xl gap-5 shadow-green-400 items-center justify-center border-t-8 border-green-600 rounded-xl md:w-[400px] h-[200px]">
                        <CiTimer size={96} className="fill-green-600" />
                        <div className="flex flex-col">
                            <h1 className="text-2xl text-green-600 font-bold">Fill Manually</h1>
                            <p className="text-xl">[ Typically takes 5 mins] </p>
                        </div>
                    </div>
                    <div className="flex flex-row shadow-xl gap-5 shadow-green-400 items-center justify-center  border-t-8 border-green-600 rounded-xl md:w-[400px] h-[200px]">
                        <AiFillLinkedin size={96} className="fill-blue-800" />
                        <div className="flex flex-col">
                            <h1 className="text-2xl text-green-600 font-bold">Import from LinkedIn</h1>
                            <p className="text-xl">Comming Soon.. </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid justify-items-end m-5">
                <button href="/" className="flex flex-row shadow-lg shadow-green-800 font-bold items-center justify-around bg-green-500 rounded-xl text-white w-[200px] h-[50px]">
                    <BiSkipNextCircle size={48} className="fill-white-300" />
                    Next</button>
            </div>
        </>
    )
}
export default RegisterAsSeller;