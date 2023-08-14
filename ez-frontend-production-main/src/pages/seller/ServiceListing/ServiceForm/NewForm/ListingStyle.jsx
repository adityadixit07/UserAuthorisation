// import React from 'react'
import { BsFillCheckCircleFill } from 'react-icons/bs'

const ListingStyle = ({ checkStyle, setCheckStyle }) => {
    return (
        <div className='my-5'>
            <div className='pb-5'>
                <h3 className='my-2 text-xl font-bold'>How would you like to list your Service ?</h3>
                <p className='font-semibold text-slate-600'>We have three selling styles that you can choose from. Decide which one suits your goals and preferences.</p>
            </div>
            <div className='flex gap-3 additinal items-center   flex-col md:flex-row justify-around'>
                {["Self-Marketer", "eZ-Advertise", "eZ-Assured", "Advertise"].map((data, i) => {
                    return <div className='relative h-[250px] w-[200px] rounded-xl bg-slate-100' key={i} onClick={() => setCheckStyle(i)}>
                        <div className='w-full h-[180px] bg-slate-200 rounded-lg flex flex-col justify-end items-center text-base font-bold '>
                            <h3 className='text-base items-baseline'>{data}</h3>
                        </div>
                        <BsFillCheckCircleFill className={`absolute ${checkStyle === i ? " " : "hidden"}  -top-1 -right-1 fill-green-600`} size={35} />
                    </div>
                })}
            </div>
        </div>
    )
}

export default ListingStyle