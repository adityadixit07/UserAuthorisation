import React from 'react'
import { FaChevronCircleRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const BecomeSeller = () => {
    return (
        <div className="p-2 md:p-0">
            <div className='bg-[#c8c8c859] w-full border border-slate-400 shadower rounded-[10px] mt-4 shadow-slate-200 flex flex-col gap-5 py-14 px-5 md:px-20'>
                <h1 className=' text-4xl md:text-5xl font-semibold'>Create your Seller Profile </h1>
                <div className='flex md:flex-row flex-col items-start md:items-center gap-8'>
                    <p className='text-base font-normal 2-full md:w-[60%] text-slate-500'>Monetize your time and expertise by connecting directly with people who are in need of your skills.</p>
                    <Link to="/sellerhomepage" className='p-2.5 rounded-full flex items-center gap-3 bg-green-600 text-white text-xl font-semibold'><FaChevronCircleRight />Become an eZer!</Link>
                </div>
            </div>
        </div>
    )
}

export default BecomeSeller