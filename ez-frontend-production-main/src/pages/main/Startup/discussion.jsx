import React, { useState } from "react";
import "./discussion.css"
import { AiOutlinePlusSquare, AiOutlineShareAlt } from "react-icons/ai";
import { FaEye, FaPenFancy, FaPeopleArrows, FaArrowAltCircleUp, FaArrowAltCircleRight } from "react-icons/fa"
import DiscusPopups from "./discusPopups";
import { ImCross } from "react-icons/im"


const data34 = ["economy", "recession", "funding", "funding", "marketing", "service"];

function Discussion() {
    const [showInfo, setshowInfo] = useState(false)

    return (
        <>
            <div className="md:m-10 flex justify-between w-full">
                <div className="Discussion p-0.5 popin w-full md:w-[950px] ">
                    <div className="flex justify-between items-center w-full mb-3">
                        <h1 className="font-bold text-[22px] md:text-[28px] md:pl-3 ">Discussion of the Day</h1>
                        <button className="relative w-[155px] h-12 bg-[#1BB76E] rounded-xl" type="" onClick={() => setshowInfo(true)}><AiOutlinePlusSquare className="absolute top-2 fill-white pt-[5px]" size={26} /><div className="text-[17px] text-white font-bold">New Post</div></button>
                    </div>
                    <div className="w-full flex justify-between items-center p-1.5 md:pt-[16px] md:p-6 discusbg relative">
                        <div className="w-full md:w-10/12 flex flex-col">
                            <h1 className="font-semibold text-xl md:text-3xl pt-2 text-[#ffffff]">Is it wise to start a startup in the times of an economic downturn?</h1>
                            <div className=" flex flex-col gap-1 w-full">
                                <div className="flex flex-wrap items-center md:py-2 md:gap-3 text-[#146B1E] text-sm font-normal">
                                    <span><AiOutlineShareAlt className="hidden md:block" size={30} /></span>  <div className="py-1 px-4 m-1 rounded-xl bg-[#ffff]  border border-[#B4B4B4]">#economy</div><div className="py-1 px-4 m-1 rounded-xl bg-[#ffff] border border-[#B4B4B4]">#recession</div><div className="py-1 px-4 m-1 rounded-xl bg-[#ffff] border border-[#B4B4B4]">#funding </div>
                                </div>
                                <div className="flex flex-col md:flex-row gap-2 md:gap-20 justify-between md:items-center">
                                    <div className="flex justify-between md:gap-4 mx-2 md:ml-12">
                                        <div className="w-[50px] h-[50px] rounded-[999px] bg-white flex flex-col items-center justify-center overflow-hidden p-1"><FaEye className="" size={25} /> 9866</div><div className="w-[50px] h-[50px] rounded-[999px] bg-white flex items-center justify-center flex-col overflow-hidden p-1"><FaPenFancy size={25} />9754</div><div className="w-[50px] h-[50px] rounded-[999px] bg-white flex items-center justify-center flex-col overflow-hidden p-1"><FaPeopleArrows size={25} />9785</div>
                                        <div className="w-12 h-12 md:w-10 md:h-10 md:hidden bg-black rounded-md">

                                            <AiOutlineShareAlt className="fill-white md:mb-5 relative top-2 left-2 md:left-1" size={30} />
                                        </div>
                                        <div className="w-[50px] h-[50px] md:hidden md:w-[90px] md:h-[100px] bg-[#8FF8C7] flex flex-col justify-center gap-2 items-center rounded-xl font-bold text-white">
                                            <FaArrowAltCircleUp className="fill-white" size={20} />
                                            5467
                                        </div>
                                    </div>
                                    <div className="flex">
                                        <div className="flex">
                                            <div className="w-14 h-14 overflow-hidden rounded-[9999px] relative">
                                                <img src={'https://images.unsplash.com/photo-1581382575275-97901c2635b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'} className="w-28" alt="" />
                                            </div>
                                            <div className="w-14 h-14 overflow-hidden rounded-[9999px] relative -left-4">
                                                <img src={'https://images.unsplash.com/photo-1581382575275-97901c2635b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'} className="w-28" alt="" />
                                            </div>
                                            <div className="w-14 h-14 overflow-hidden rounded-[9999px]  relative -left-8">
                                                <img src={'https://images.unsplash.com/photo-1581382575275-97901c2635b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'} className="w-28" alt="" />
                                            </div>
                                        </div>
                                        <div className="flex flex-col justify-center text-sm">
                                            <h1 className="font-normal">+1898 others contributed</h1>
                                            <h2 className="font-bold">Participate  Now !!! </h2>
                                        </div>
                                    </div>
                                    <div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="hidden md:flex flex-col items-center gap-8">
                            <div className="w-10 h-10 bg-black rounded-md">

                                <AiOutlineShareAlt className="fill-white mb-8 relative top-0.5 left-1" size={30} />
                            </div>
                            <div className="w-[90px] h-[100px] bg-[#8FF8C7] flex flex-col justify-center gap-2 items-center rounded-xl font-bold text-white">
                                <FaArrowAltCircleUp className="fill-white" size={45} />
                                5467
                            </div>
                        </div>
                    </div>
                    <div className="Explore flex flex-col justify-center  w-full">
                        <div className="flex justify-between md:items-center w-full mt-12 md:mt-20">
                            <h1 className="font-bold text-2xl md:text-[28px] md:pl-3 ">Explore Topics</h1>
                            <button className="flex justify-center items-center gap-1 w-[155px] p-2 bg-[#575757] rounded-xl" type="">
                                <div className="text-[17px] text-white font-bold">Show More </div>
                                <FaArrowAltCircleRight className=" fill-[#68D679]" size={26} />
                            </button>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 mt-4 mb-24 md:mb-0 justify-center md:translate-x-2">
                            {data34.map((item, count) => {
                                return (
                                    <div key={count} className="w-[150px] h-[150px] bg-[#D9D9D9] rounded-[10px] flex flex-col justify-end items-center text-base font-bold text-[#007521]">
                                        <p className="items-baseline py-0.5 my-3 rounded-[50px] bg-[#ffffff] px-2 drop-shadow-md">#{item}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${showInfo ? "absolute left-5 right-5 top-80 md:left-40 md:right-40 z-20" : "hidden"}`}>
                <DiscusPopups />
            </div>
            <div className={`${showInfo ? "fixed inset-0 bg-black opacity-75 z-10" : "hidden"}`}>
            </div>
            <ImCross className={`${showInfo ? "absolute top-80 right-6 md:right-[162px] z-50 fill-red-600 cursor-pointer" : "hidden"}`} size={15} onClick={() => setshowInfo(false)} />
        </>
    )
}

export default Discussion
