import React, { useState } from 'react';
import { CgProfile } from 'react-icons/cg';
import { AiFillCaretDown } from 'react-icons/ai';
import catepic from "../../../../public/Meta-Assets/Group.png"
import cateData from "./categDemo.json"
import Topic from './topic';

function Bar({ text, value, userchoose }) {

    const [hashtags, setHashtags] = useState([]);
    const [userSelect, setUserSelect] = useState(null);

    const handleChange = (index, e) => {
        const newHashtags = [...hashtags];
        newHashtags[index] = e.target.value;
        setHashtags(newHashtags);
        setUserSelect(index);
    };


    return (
        <>
            <div className="flex justify-start gap-2 md:gap-10">
                <div className='bg-black w-20 h-full grid justify-items-center rounded-lg'>
                    <img src={catepic} alt="" className='bg-cover w-full h-full p-3' />
                </div>
                <div className="flex flex-col p-1 gap-3">
                    <div className='w-full h-9 border-dashed  border-4 border-[#11CF96] rounded-[30px] text-white bg-[#2D2D2D]'>
                        <h2 className='bg-transparent text-center'>{userchoose}</h2>
                    </div>
                    <div className='w-full flex justify-between items-center gap-2'>
                        <p>Tag:</p>
                        <select className={`bg-green-400 `} value={hashtags} onChange={handleChange}>
                            <option value="Founder">Founder </option>
                            <option value="Sales">Sales</option>
                            <option value="Marketing">Marketing</option>
                        </select>
                        <h4 className='px-5 py-1 bg-slate-800 text-white font-semibold rounded-lg'>{hashtags}</h4>
                        <select className={`bg-green-400 ${userSelect ? "hidden" : ""}`} value={hashtags} onChange={handleChange}>
                            <option value="Founder">Founder </option>
                            <option value="Sales">Sales</option>
                            <option value="Marketing">Marketing</option>
                        </select>
                        <h4 className='px-5 py-1 bg-slate-800 text-white font-semibold rounded-lg'>{hashtags}</h4>
                        <select className={`bg-green-400 rounded-[6px] p-1 ${userSelect ? "hidden" : ""}`} value={hashtags} onChange={handleChange}>
                            <option value="Founder">Founder </option>
                            <option value="Sales">Sales</option>
                            <option value="Marketing">Marketing</option>
                        </select>
                        <h4 className='px-5 py-1 bg-slate-800 text-white  font-semibold rounded-lg'>{hashtags}</h4>


                        {/* {[0, 1, 2].map((index) => (
                            <>
                                <select
                                    key={index}
                                    className={`bg-green-400 ${userSelect===index ? "hidden" : ""
                                        }`}
                                    value={hashtags[index]}
                                    onChange={(e) => handleChange(index, e)}
                                >
                                    <option value="">Select tag</option>
                                    <option value="Founder">Founder</option>
                                    <option value="Sales">Sales</option>
                                    <option value="Marketing">Marketing</option>
                                </select>
                                <h4 className={`px-5 py-1 bg-slate-800 text-white font-semibold rouded-[10px] ${hashtags[index] == " "?"hidden":"block" }`}>
                                    {hashtags[index]}
                                </h4>
                            </>
                        ))} */}

                    </div>
                </div>
                <div className='p-2 flex flex-col gap-4'>
                    <button className='text-[11px] flex bg-slate-200 px-5 py-1 gap-1 rounded-[10px] items-center '>{text}
                        <AiFillCaretDown size={10} className='fill-black-500' />
                    </button>
                    <p className='text-xs'>Choose the most suted in order</p>

                </div>
            </div>
        </>
    )
}

export default Bar;