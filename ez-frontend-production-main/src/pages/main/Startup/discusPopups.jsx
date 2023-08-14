import React from "react";
import "./discussion.css";
import {
    FaEye,
    FaPenFancy,
    FaPeopleArrows,
    FaArrowAltCircleUp,FaTelegramPlane
} from "react-icons/fa";
import { TbHandFinger } from "react-icons/tb";
import { TbBellRingingFilled } from "react-icons/tb";
import { BiShare } from "react-icons/bi";
import {
    AiOutlinePlusSquare,
    AiFillTwitterCircle,
    AiFillLinkedin,
} from "react-icons/ai";
import { RiWhatsappFill } from "react-icons/ri";
import { ImFacebook2 } from "react-icons/im";
import { IoMdArrowDropup } from "react-icons/io";


function DiscusPopups() {
    return (
        <div className="m-auto flex p-2 md:p-4 gap-4">
            {/* left side section */}
            <div className="w-full sm:w-[830px] flex flex-col z-50 ">
                <div className="w-full flex flex-col p-2 md:p-7 downturn z-50">
                    <h1 className="font-bold text-xl md:text-[28px] pt-2">
                        Is it wise to start a startup in the times of an economic downturn?
                    </h1>
                    <div className=" flex flex-col md:flex-row w-full items-center p-2 gap-2 md:gap-10">
                        <div className="w-full md:w-1/2 flex justify-around">
                            <h1 className="flex justify-evenly">
                                <TbHandFinger className="rotate-90" />
                                Sandip Kundu
                            </h1>
                            <p>12h ago</p>
                        </div>
                        <div className="w-full flex md:w-1/2 justify-between items-center">
                            <div className="flex gap-2 justify-between md:ml-12">
                                <div className="w-[50px] h-[50px] rounded-[999px] flex flex-col items-center justify-center overflow-hidden p-1">
                                    <FaEye className="" size={25} /> 9866
                                </div>
                                <div className="w-[50px] h-[50px] rounded-[999px] flex items-center justify-center flex-col overflow-hidden p-1">
                                    <FaPenFancy size={25} />
                                    9754
                                </div>
                                <div className="w-[50px] h-[50px] rounded-[999px] flex items-center justify-center flex-col overflow-hidden p-1">
                                    <FaPeopleArrows size={25} />
                                    9785
                                </div>
                                <div className="w-[50px] h-[50px] bg-[#8FF8C7] flex flex-col justify-center gap-2 z-40 items-center rounded-xl font-bold text-white">
                                    <FaArrowAltCircleUp className="fill-white" size={30} />
                                    5467
                                </div>
                                <div className="w-[50px] h-[50px] bg-transparent flex flex-col items-center justify-center p-1">
                                    <TbBellRingingFilled className="" size={25} /> Follow
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full py-5 md:p-6 border-b-2 border-slate-400">
                    <p className="items-center text-center text-base font-normal text-[#06501A]">
                        {`“Bad times are always coming in a startup.” If you are interested in starting a startup, were entering a counterintuitively good time to do it. It won’t be easy, but if you get through the early days, you’ll be better prepared than most. And if the challenge excites you, you probably have the right personality for it.Whats your thoughts on this ?`}{" "}
                    </p>
                </div>
                <div className="w-full pt-6 px-6 flex flex-col">
                    <div className="flex md:pl-6 gap-3 md:gap-4 items-center">
                        <div className="w-14 h-14 overflow-hidden rounded-[9999px]  relative">
                            <img
                                src={
                                    "https://images.unsplash.com/photo-1581382575275-97901c2635b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                                }
                                className="w-28"
                                alt=""
                            />
                        </div>
                        <h4 className="font-semibold">Reply to Sandip kundu</h4>
                    </div>
                </div>
                <div className="w-full flex justify-between items-center border-b-2 border-slate-400 pb-4">
                    <BiShare className="translate-x-24 md:translate-x-28" size={30} />
                    <button
                        className="hidden w-[155px] h-12 bg-[#1BB76E] rounded-xl md:flex items-center justify-around"
                        type=""
                    >
                        <FaPenFancy
                            size={25}
                            className="relative left-3 fill-white pt-[5px]"
                        />
                        <div className="text-[17px] text-white font-bold">Contribute </div>
                    </button>
                    <div className="w-14 h-10 md:hidden -translate-x-14 bg-red-500 rounded-xl">
                        
                    <FaTelegramPlane className="fill-white relative top-1 left-3 " size={30}/>
                    </div>
                </div>

                {/*User Replies */}

                <div className="p-2 md:p-4 flex flex-col gap-1 md:gap-3">
                    <h2 className="font-semibold text-lg">Replies</h2>
                    <div className="flex flex-col mt-4">
                        <div className="flex items-center gap-2">
                            <div className="hidden md:block w-14 h-14 overflow-hidden rounded-[9999px]  relative">
                                <img
                                    src={
                                        "https://images.unsplash.com/photo-1581382575275-97901c2635b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                                    }
                                    className="w-28"
                                    alt=""
                                />
                            </div>
                            <h1 className="font-medium">Anil Matcha</h1>
                            <span>@match_anil</span>
                        </div>
                        <div className="flex flex-col gap-2 pl-2 md:pl-16">
                            <p>My goal is to reach 1000 DAU on SamurAI</p>
                            <div className="flex items-center gap-3 text-xs font-semibold">
                                <span>{`Upvote(2)`}</span>
                                <span>Reply</span>
                                <span>Share</span>
                                <span>Report</span>
                                <span>Apr 5</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col mt-4">
                        <div className="flex items-center gap-2">
                            <div className="hidden md:block w-14 h-14 overflow-hidden rounded-[9999px]  relative">
                                <img
                                    src={
                                        "https://images.unsplash.com/photo-1581382575275-97901c2635b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                                    }
                                    className="w-28"
                                    alt=""
                                />
                            </div>
                            <h1 className="font-medium">Anil Matcha</h1>
                            <span>@match_anil</span>
                        </div>
                        <div className="flex flex-col gap-3 pl-2 md:pl-16">
                            <p>My goal is to reach 1000 DAU on SamurAI</p>
                            <div className="flex items-center gap-3 text-xs font-semibold">
                                <span>{`Upvote(2)`}</span>
                                <span>Reply</span>
                                <span>Share</span>
                                <span>Report</span>
                                <span>Apr 5</span>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3 pl-10 md:pl-16">
                            <div className="flex flex-col mt-4">
                                <div className="flex items-center gap-2">
                                    <div className=" hidden md:block w-14 h-14 overflow-hidden rounded-[9999px]  relative">
                                        <img
                                            src={
                                                "https://images.unsplash.com/photo-1581382575275-97901c2635b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                                            }
                                            className="w-28"
                                            alt=""
                                        />
                                    </div>
                                    <h1 className="font-medium">Anil Matcha</h1>
                                    <span>@match_anil</span>
                                </div>
                                <div className="flex flex-col gap-2 pl-2 md:pl-16">
                                    <p>My goal is to reach 1000 DAU on SamurAI</p>
                                    <div className="flex items-center gap-3 text-xs font-semibold">
                                        <span>{`Upvote(2)`}</span>
                                        <span>Reply</span>
                                        <span>Share</span>
                                        <span>Report</span>
                                        <span>Apr 5</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3 pl-10 md:pl-16">
                            <div className="flex flex-col mt-4">
                                <div className="flex items-center gap-2">
                                    <div className=" hidden md:block w-14 h-14 overflow-hidden rounded-[9999px]  relative">
                                        <img
                                            src={
                                                "https://images.unsplash.com/photo-1581382575275-97901c2635b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                                            }
                                            className="w-28"
                                            alt=""
                                        />
                                    </div>
                                    <h1 className="font-semibold text-blue-600">Anil Matcha</h1>
                                    <span>@match_anil</span>
                                </div>
                                <div className="flex flex-col gap-2  pl-2 md:pl-16">
                                    <p>My goal is to reach 1000 DAU on SamurAI</p>
                                    <div className="flex items-center gap-3 text-xs font-semibold">
                                        <span>{`Upvote(2)`}</span>
                                        <span>Reply</span>
                                        <span>Share</span>
                                        <span>Report</span>
                                        <span>Apr 5</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3 pl-10 md:pl-16">
                            <div className="flex flex-col mt-4">
                                <div className="flex items-center gap-2">
                                    <div className="  hidden md:block w-14 h-14 overflow-hidden rounded-[9999px]  relative">
                                        <img
                                            src={
                                                "https://images.unsplash.com/photo-1581382575275-97901c2635b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                                            }
                                            className="w-28"
                                            alt=""
                                        />
                                    </div>
                                    <h1 className="font-medium">Anil Matcha</h1>
                                    <span>@match_anil</span>
                                </div>
                                <div className="flex flex-col gap-2 pl-2 md:pl-16">
                                    <p>My goal is to reach 1000 DAU on SamurAI</p>
                                    <div className="flex items-center gap-3 text-xs font-semibold">
                                        <span>{`Upvote(2)`}</span>
                                        <span>Reply</span>
                                        <span>Share</span>
                                        <span>Report</span>
                                        <span>Apr 5</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* right side section */}
            <div className="hidden sm:flex flex-col z-50 w-[300px] h-[300px]">
                <div className="flex flex-col px-[10px] gap-2 py-3 bg-[#575757] w-full rounded-[10px]">
                    <div className="flex items-center justify-center gap-3 mb-2">
                        <div className="w-20 h-20 overflow-hidden rounded-[20px]  relative">
                            <img
                                src={
                                    "https://images.unsplash.com/photo-1581382575275-97901c2635b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                                }
                                className="w-28"
                                alt=""
                            />
                        </div>
                        <div className="flex flex-col items-center justify-center gap-2">
                            <h1 className="text-[17px] font-bold">Sandip Kundu </h1>
                            <div className="flex justify-center items-center gap-3">
                                <div className="w-10 h-10 overflow-hidden rounded-[9999px]  relative">
                                    <img
                                        src={
                                            "https://images.unsplash.com/photo-1581382575275-97901c2635b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                                        }
                                        className="w-28"
                                        alt=""
                                    />
                                </div>
                                <h2 className="font-normal text-sm">@s_kundu </h2>
                            </div>
                            <button
                                className="px-7 rounded-3xl bg-slate-600 flex justify-start items-center font-bold text-lg"
                                type=""
                            >
                                Follow
                                <AiOutlinePlusSquare />
                            </button>
                        </div>
                    </div>
                    <p className="text-[11px] fonr-normal w-full text-justify text-[#C5C4C4]">
                        Sandip is a seasoned investment banker with 18+ years of experience
                        in Investment banking & Corporate Advisory. He has in-depth
                        knowledge about private equity, turn around stories, M&A, scaling up
                        businesses etc.
                    </p>
                    <div className="flex w-full items-center gap-2 translate-x-2">
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
                    </div>
                </div>

                {/* share Links */}

                <div className="sm:hidden mt-12 md:flex flex-col gap-3">
                    <h1 className="text-[17px] font-medium">Share this Discussion: </h1>
                    <div className="flex items-center gap-3">
                        <RiWhatsappFill className="fill-green-500" size={30} />
                        <AiFillTwitterCircle className="fill-[#1D9BF0]" size={30} />
                        <ImFacebook2 className="fill-[#15A2FA]" size={25} />
                        <AiFillLinkedin className="fill-[#1D9BF0]" size={30} />
                    </div>
                </div>

                {/* Question Answer */}

                <div className="flex flex-col gap-8 mt-[120px]  pb-10  border-b-2 border-slate-400">
                    <div className="flex flex-col justify-center">
                        <p className="text-sm font-semibold">
                            What is Better place to build in public?
                        </p>
                        <div className="flex items-center gap-3">
                            <span className="flex items-center text-xs font-medium">
                                <IoMdArrowDropup size={30} />8
                            </span>
                            <span className="text-xs font-medium">12 Comment</span>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center">
                        <p className="text-sm font-semibold">
                            What is Better place to build in public?
                        </p>
                        <div className="flex items-center gap-3">
                            <span className="flex items-center text-xs font-medium">
                                <IoMdArrowDropup size={30} />2
                            </span>
                            <span className="text-xs font-medium">56 Comment</span>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center">
                        <p className="text-sm font-semibold">
                            What is Better place to build in public?
                        </p>
                        <div className="flex items-center gap-3 text-xs font-medium">
                            <span className="flex items-center text-xs font-medium">
                                <IoMdArrowDropup size={30} />
                                12
                            </span>
                            <span className="text-xs font-medium">9 Comment</span>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center">
                        <p className="text-sm font-semibold">
                            What is Better place to build in public?
                        </p>
                        <div className="flex items-center gap-3">
                            <span className="flex items-center text-xs font-medium">
                                <IoMdArrowDropup size={30} />5
                            </span>
                            <span className="text-xs font-medium">10 Comment</span>
                        </div>
                    </div>
                </div>
                <h1 className="my-10">MORE IN GROWTH</h1>
                <div>
                    <div className="flex flex-col justify-center">
                        <p className="text-sm font-semibold">
                            What is Better place to build in public?
                        </p>
                        <div className="flex items-center gap-3">
                            <span className="flex items-center text-xs font-medium">
                                <IoMdArrowDropup size={30} />2
                            </span>
                            <span className="text-xs font-medium">56 Comment</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute inset-0 bg-white opacity-90"></div>
        </div>
    );
}

export default DiscusPopups;
