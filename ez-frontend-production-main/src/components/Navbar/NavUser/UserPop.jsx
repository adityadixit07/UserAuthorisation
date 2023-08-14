import React from 'react'
import { IoMdLogOut } from "react-icons/io"
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const userPic = "../../../assets/ezFINALlogo.png";

function UserPop({ setUserPop, onLogout, fetchCode, profileRoute }) {
    const { user } = useSelector((state) => state.user);

    return (
        <>
            <div className={`w-[350px]  bg-slate-50 p-3 rounded-[12px] shadow-lg block`}>
                {fetchCode && (
                    <div className='shadow-custom rounded-xl p-1 pb-2'>
                        <Link to={profileRoute} onClick={() => setUserPop(false)} className="flex gap-2 w-full cursor-pointer items-center border-[2px] border-blue-600 text-base font-bold p-2 rounded-[10px] justify-start ">
                            <img
                                className="w-[45px] h-[45px] rounded-full object-cover"
                                src={user?.avatar?.url ? user?.avatar?.url : userPic}
                                alt="User profile"
                            />
                            <h2 className="">
                                {user.firstName} {user.lastName}
                            </h2>
                            {/* <div className='w-12 rotate-12 h-12'>
                                <img src={""} className='w-full h-full' alt="" />
                            </div> */}
                        </Link>
                        <div className='flex justify-between p-3 items-center'>
                            <Link to={profileRoute} onClick={() => setUserPop(false)} className='text-blue-600 font-semibold'>
                                Edit profile
                            </Link>
                            {/* <p className='font-bold px-2 py-1 bg-red-600 text-white rounded-full '>{"11"}</p>  */}  {/* Notification count */}
                        </div>
                    </div>
                )}
                <div className='flex w-full flex-col gap-5 py-5'>
                    {/* <button className='flex w-full text-slate-700 justify-between items-center'>
                        <div className='flex items-center font-semibold gap-10'>
                            <RiSettings3Fill className="p-1 rounded-full bg-slate-200" size={35}/>Setting & privacy
                        </div>
                        <AiOutlineRight size={25}/>
                    </button>
                    <button className='flex text-slate-700 justify-between items-center'>
                        <div className='flex items-center font-semibold gap-10'>
                            <MdOutlineHelp className="p-1 rounded-full bg-slate-200" size={35}/>Help & support
                        </div>
                        <AiOutlineRight size={25}/>
                    </button>
                    <button className='flex text-slate-700 justify-between items-center'>
                        <div className='flex items-center font-semibold gap-10'>
                            <MdDarkMode className="p-1 rounded-full bg-slate-200" size={35}/>Display & accesibility
                        </div>
                        <AiOutlineRight size={25}/>
                    </button>
                    <button className='flex text-slate-700 justify-between items-center'>
                        <div className='flex items-center font-semibold gap-10'>
                            <MdFeedback className="p-1 rounded-full bg-slate-200" size={35}/>Give feedback
                        </div>
                    </button>  */}
                    {/* <button className={`flex text-slate-700 justify-between items-center `} onClick={()=>setjadu(true)}> */}
                    <button className={`flex text-slate-700 justify-between items-center `} onClick={onLogout}>
                        <div className='flex items-center font-semibold gap-10'>
                            <IoMdLogOut className="p-1 rounded-full bg-slate-200" size={35} />Log Out
                        </div>
                    </button>
                </div>
            </div>
        </>
    )
}

export default UserPop
