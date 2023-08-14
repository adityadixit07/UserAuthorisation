import { React, useState } from "react";

import p1 from '../../../src/assets/ProfilePortfolio/p1.png';
import p2 from '../../../src/assets/ProfilePortfolio/p2.png';
import p3 from '../../../src/assets/ProfilePortfolio/p3.png';
// import Pop from "../../Profile/Portfolio/CardPop/Pop";
// import  {useState}  from 'react';
import { AiFillEye, AiFillCaretDown } from 'react-icons/ai';
function Projects() {

    // const[pop,setPop]=useState(false);

    // const closePop = () => setPop(false);

    // const showPop = () =>{
    //     setPop(true)
    // }
    return (
        <>
            <div className="flex flex-col gap-3 md:flex-row">
                <img src={p1} alt='p1' className='w-full border-2 border-black rounded-[5px]  md:w-[24%]' />
                <img src={p2} alt='p2' className='w-full border-2 border-black rounded-[5px] md:w-[24%]' />
                <img src={p3} alt='p3' className='w-full border-2 border-black rounded-[5px] md:w-[24%]' />
                {/* {    pop &&  <Pop/> } */}
            </div>
        </>
    )
}

export default function Portfolio() {
    const [activeButton, setActiveButton] = useState(1);
    const handleButtonClick = (index) => {
        setActiveButton(index);
    };
    return (

        <div className="flex flex-col m-2 ">
            <div className="flex flex-row gap-4 overflow-x-auto justify-normal md:justify-around">
                <a href="#" className={`border-2 text-xl cursor-pointer whitespace-nowrap md:text-md xl:text-xl border-green-400 w-1/2 md:w-1/3 px-5 py-2 ${activeButton === 1 ? "bg-green-300 text-white" : "bg-white"
                    }`} onClick={() => handleButtonClick(1)}>Work</a>
                <a href="#" className={`border-2 cursor-pointer whitespace-nowrap md:text-md xl:text-xl border-green-400 w-1/2 md:w-1/3 px-5 py-2 ${activeButton === 2 ? "bg-green-300 text-white" : "bg-white"
                    }`} onClick={() => handleButtonClick(2)}>Projects</a>
                <a href="#" className='text-xl'>Apprecataions</a>
                <div className='flex flex-row gap-2'>
                    <a href="#" className='flex flex-row gap-[1px] text-xl'>Creative Field <AiFillCaretDown size={18} /></a>
                    <AiFillEye size={24} />
                    <p>117k views</p>
                </div>
            </div>
            {
                activeButton == 2 && (<div className="flex flex-col gap-2">
                    <Projects />
                    <Projects />
                    <Projects />
                    <Projects />
                </div>)
            }

        </div>
    )
}