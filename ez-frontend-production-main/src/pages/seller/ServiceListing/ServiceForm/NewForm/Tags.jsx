import React from 'react'
import { AiOutlinePlus } from "react-icons/ai"
import { FaTags } from 'react-icons/fa'

const Tags = ({ tag, setTag, handleChangeTag, savedTags, handleRemoveTag }) => {
    return (
        <div className="flex flex-col gap-4 md:w-[70%]">
            <div className='flex flex-col gap-4 w-full'>
                <label htmlFor="description" className=" mb-2 text-sm font-semibold text-gray-900"><h2 className="py-1.5 w-fit px-10 shadow-md rounded-[10px] bg-slate-100 flex gap-5 items-center"><FaTags className='fill-green-400' size={35} />Tags</h2></label>
                <div className="flex md:flex-row flex-col items-end md:items-center gap-5 w-full">
                    <input type='text' value={tag} onChange={(e) => setTag(e.target.value)} className="w-full  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    <button type="button" className='p-2.5 bg-blue-300 rounded-lg' onClick={handleChangeTag}>Add&nbsp;tag</button>
                </div>
            </div>

            <div className='flex overflow-x-auto gap-1 w-full'>
                {savedTags.map((data, index) => {
                    return (
                        <div key={index} className='h-[40px] w-auto px-2 py-0.5 flex gap-0.5 items-center bg-slate-200 font-medium text-slate-600 rounded-md'>
                            <AiOutlinePlus className='rotate-45 cursor-pointer' onClick={() => handleRemoveTag(index)} size={25} />
                            <span className='text-[15px]'>{data}</span>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Tags