import React from 'react'
import { MdOutlineAccessTimeFilled } from "react-icons/md"

const Duration = ({ setDuration, durationBg, setdurationBg, customDuration, setCustomDuration }) => {
    return (
        <div className={` flex flex-col gap-4`}>
            <label htmlFor="Delivery Time" className=" mb-2 text-sm font-semibold text-gray-900">
                <h2 className="py-1.5 w-fit shadow-md px-10 rounded-[10px] bg-slate-100 flex gap-5 items-center">
                    <MdOutlineAccessTimeFilled className='fill-yellow-700' size={35} />Duration (in mins)
                </h2>
            </label>
            <ul className="p-3 md:w-[30%] w-full rounded-[10px] shadow-lg">
                {["15", "30", "45", "60", "Custom"].map((option, i) => (
                    <li key={i}>
                        <div className="checkbox-ui">
                            <label className="flex gap-2 items-center">
                                <input type="checkbox" value={option} onChange={(e) => setDuration(e.target.value)} onClick={() => setdurationBg(i)} />
                                <div className={`w-5 h-5 ${durationBg === i ? "bg-blue-600" : " "} rounded-full border `}>
                                </div>
                                <span>{option}</span>
                            </label>
                        </div>
                    </li>
                ))}
                {durationBg === 4 && (
                    <div className="w-full flex items-center gap-1">
                        <input type="number" value={customDuration} onChange={(e) => setCustomDuration(e.target.value)} id="title" aria-describedby="helper-text-explanation" className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="How Long? " />
                        <span>mins</span>
                    </div>
                )}
            </ul>
        </div>
    )
}

export default Duration