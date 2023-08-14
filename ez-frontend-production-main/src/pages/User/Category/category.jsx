import React, { useEffect } from 'react';
// import EZ from '../../../../public/android-chrome-192x192.png';
// import TextLine from '../../../Assets/the_one_app.png';
import { CiDark } from 'react-icons/ci';
import { GoSearch } from "react-icons/go"
import catData from "./categDemo.json"
// import './category.css';
// import TextField from "@mui/material/TextField";
import ezpic from "../../../../public/Meta-Assets/apple-touch-icon.png"
import { CgProfile } from 'react-icons/cg';
import catepic from "../../../../public/Meta-Assets/Group.png"
import Bar from './bar';
import Topic from './topic';
import { useState } from 'react';


const profilecat = ["Profile Headline", "Most Appropriate", "Suited"]

function Category() {

    // const [storedata, setstoredata] = useState([]);
    // useEffect(() => {
    //     const localData = async () => {
    //         const cateData = await JSON.parse(localStorage.getItem("categorydata"));
    //         return setstoredata(cateData.category);
    //     };

    //     if (storedata.find!==" ") {
            
    //         setTimeout(() => {
    //             localData();
                
    //         }, 1000);
    //     }
    // }, []);

    // const localDataname={...storedata}
    // console.log(storedata);




    return (
        <>
            <div className='grid grid-cols-2'>
                <div className='border-r-2 m-3'>
                    <div className="flex flex-row justify-between ">
                        <div className="flex flex-col items-center">
                            <img src={ezpic} alt="Logo" className='w-[50px] h-[50px]' />
                            <h1 className='text-2xl font-bold'><span className='text-[#FF671F]'>&quot;The</span> <span className='text-[#FFFFFF] drop-shadow'>ONE&quot;</span> <span className='text-[#046A38]'>APP.</span></h1>
                        </div>
                        <CiDark size={20} />
                    </div>


                    <div className='w-full flex flex-col gap-6 h-1/2'>
                        <div className='flex flex-col ml-[1rem]'>
                            <h6 className='text-xl md:text-2xl font-bold eyeOpenInverse'>Please help us understand you better  :</h6>
                            <p className='text-base eyeOpenInverse'>This will help us suggest you communities and topics aligned to your interests.</p>
                        </div>
                        <div className="w-full flex flex-col gap-3">
                            <h6 className='text-2xl font-bold'>Choose the Profile Categories which describes you the best :</h6>
                            {
                                profilecat.map((data, i) => {
                                    return <Bar text={data} key={i} userchoose={data} />
                                })
                            }

                        </div>
                    </div>
                </div>


                <div>
                    <div className='flex flex-col gap-4 m-8 justify-center '>
                        <div className='relative'>
                            <input type="text" name="" value="" placeholder='Search' className='w-full p-2 rounded-full border-2 pl-20' />
                            <GoSearch className='absolute top-[35%] left-10' size={20} />
                        </div>
                        <div className="flex flex-row gap-2">
                            <div className='bg-black min-w-[120px] h-[120px] grid justify-items-center rounded-[15px]'>
                                <img src={catepic} alt="" className='bg-cover w-full h-full p-2' />
                            </div>
                            <div className="">
                                <ol className='flex flex-wrap gap-2'>

                                    {
                                        catData.map((data, i) => {
                                            return <Topic categorydata={data.category} key={data.category} />
                                        })
                                    }
                                </ol>
                            </div>
                        </div>
                        <div className='flex items-center justify-center'>
                            <button className='bg-[#70E0AB] px-5 py-2 text-3xl font-semibold rounded-lg '>Continue</button>

                        </div>
                    </div>


                </div>

            </div>
            <div className="resp overflow-y-scroll md:overflow-y-none">
            </div>
        </>
    )
}

export default Category