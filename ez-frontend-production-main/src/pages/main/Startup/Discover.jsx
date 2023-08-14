import React ,{useState} from 'react'

//componentss
import DisMidNav from '../../components/Discover/MidNav';
import LowerMain from '../../components/Discover/LowerMain';
import Streak from '../../components/Discover/Streak';
import SideBar from '../../components/Discover/SideBar';
import SideLeft from '../../components/Discover/SideLeft';


// CSS File
import Style from "./Discover.module.css";

// Top NavBar 
import Navbar from "../../components/Navbar/Navbar";

//icons
import Startup from "../../Assets/startup.svg"
import EventBag from "../../Assets/EventsBg.jpg"
import log from "../../Assets/log.svg"
import {MdSearch, MdFilterAlt} from "react-icons/md";
import {BsFillPlusSquareFill,  BsRocketFill} from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io"



function Discover(){
  const [qaSearchTerm, setQaSearchTerm] = useState("");

    return (
        <div>
             <Navbar />
             <div className="max-w-full max-h-full flex">
                <div
                    className="bg-IoCaretDowncover  flex flex-row bg-center w-[100%] h-[20rem] m-[2rem]"
                    style={{ backgroundImage: `url(${EventBag})` }}
                >
                    <div className="flex justify-between">
                        <div>
                            <img src={Startup} alt="Rocket" className="py-[5rem] px-4" />
                        </div>

                        <div className="flex flex-col">
                            <h1 className="flex text-[#C8F0C9] font-bold text-3xl py-3">
                                WELCOME TO STARTUP COMMUNITY
                            </h1>
                            <p className=" text-[#C8F0C9]">
                                Connect with the community of fellow Founders , Potential Investors,
                                <br /> Talent Pool , Ecosystem Enablers.
                            </p>
                        </div>
                        <img src={log} className="w-[100px] lg:w-[200px] absolute right-10 " alt="" />
                    </div>
                </div>
            </div>


            <div className='mb-[30px] h-[10px] bg-[#D9D9D9] '>
               </div>

            <DisMidNav/>

            <div className={`${Style.lower_area} flex p-2 flex-wrap md:flex-nowrap mb-20`}>
                  <div className="w-full md:w-9/12 xl:w-10/12 pl-5 pr-5 md:pr-7 mt-3 p">
                    <div className="w-full flex justify-between flex-wrap">              
                      <div className={`${Style.lower_search_box} lg:w-[300px]`}>
                        <span className='absolute left-2 top-0'><MdSearch/></span>
                        <input className='pl-[20px]' type="text" onChange={(e)=>setQaSearchTerm(e.target.value)} placeholder='Search for a Company' value={qaSearchTerm}/>
                        <span className='absolute right-0 top-0'><MdFilterAlt/></span>
                      </div>
                      <div className='flex justify-evenly items-center rounded-[10px] gap-2 px-3 shadowing mt-[10px] md:mt-0 lg:mt-0'>
                    <BsRocketFill className='fill-yellow-300 stroke-black ' />
                    <button className='p-1 text-[15px] font-bold flex' >Startup <span className='hidden md:block'>&nbsp; Community</span> </button>
                    <IoMdArrowDropdown />
                </div>
                      <button className='rounded-md p-1 px-2 flex items-center  bg-[#1BB76E] text-[white] mt-[10px] lg:mt-0'>
                        <BsFillPlusSquareFill/> &nbsp;
                        <span className='hidden md:block '>List Your Startup</span>
                      </button>
                      </div>
                    
                    
                    <div className={`w-full mt-9 ${Style.question_day}`}>
                      
                      <LowerMain/>
                    
                    </div>
                    </div>

                <div className="w-full md:w-3/12 xl:w-2/12 px-2 md:pl-4 md:border-l-2 relative ">
                    
                    <Streak/>

                    <div className='max-[767px]:flex max-[450px]:flex-col mt-[20px]'>
                      
                    <SideBar/>
                    
                    <SideLeft/>
                    </div>
                </div>
            </div>



            
            </div>
        
    )
}
export default Discover