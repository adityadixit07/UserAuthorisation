import React from 'react';

// assets import
import SchoolLogo from "../../../Assets/profile-img/school-logo.webp";

import {FaUserGraduate, FaCircleNotch} from "react-icons/fa";
import {BiBriefcase, BiTimeFive} from "react-icons/bi";
import {MdLocationPin} from "react-icons/md";

const ExperienceDetails = () => {
  return (
    <>        
    <div className="bio-top-header flex items-center">
            <div className="bio-top-header-icon">
                <BiBriefcase/>
            </div>
            <h1>EXPERIENCE</h1>
    </div>

        <div className="bio-second-header flex items-center mt-4">
            <div className="bio-second-header-icon ml-6">
                <FaUserGraduate/>
            </div>
            <div className='introduction p-1 px-2 ml-5'>1st</div>
        </div>
        <div className="school-box-wrapper mt-3 flex items-center p-2 px-3 flex-wrap">
            <div className="lg:w-2/12 sm:w-3/12 w-full">
              <div className="school-logo company-logo">
                <img src={SchoolLogo} alt="School Logo" />
              </div>
            </div>
            <div className="lg:w-10/12 sm:w-9/12 w-full px-2 lg:px-0">
                <div className="w-full flex lg:justify-between flex-wrap text-white">
                  <span className='w-full lg:w-max'>Senior Business Development Associate </span>
                  <span className='w-full lg:w-max'>3 years 5 months</span>
                </div>
                <div className="w-full flex lg:justify-between text-white mt-2 flex-wrap">
                  <span className='flex items-center w-full lg:w-max'>
                    <FaCircleNotch/> &nbsp;
                    BYJU’S
                  </span>
                  <span className='flex items-center exp-duration-box w-full lg:w-max'>
                    <span className='mr-2'>Part Time</span>
                    <BiTimeFive/>
                    <span className='bg-white exp-duration-txt ml-1 p-1 px-2 text-xs rounded-md'>Jun 2019-Nov 2022</span>
                  </span>
                </div>
                <div className="w-full flex lg:justify-between text-white mt-2 flex-wrap">
                  <span className='flex items-center w-full lg:w-max'>
                    <MdLocationPin/> &nbsp;
                    Kolkata, India
                  </span>
                  <span className='gap-1 flex w-full lg:w-max'>
                    <span className='bg-slate-600 p-1 px-2 rounded-md text-xs'>Education</span>
                    <span className='bg-slate-600 p-1 px-2 rounded-md text-xs'>Education</span>
                    <span className='bg-slate-600 p-1 px-2 rounded-md text-xs'>Education</span>
                  </span>
                </div>
            </div>
        </div>
        
        <div className="bio-second-header flex items-center mt-4">
            <div className="bio-second-header-icon ml-6">
                <FaUserGraduate/>
            </div>
            <div className='introduction p-1 px-2 ml-5'>1st</div>
        </div>
        <div className="school-box-wrapper mt-3 flex items-center p-2 px-3 flex-wrap">
            <div className="lg:w-2/12 sm:w-3/12 w-full">
              <div className="school-logo company-logo">
                <img src={SchoolLogo} alt="School Logo" />
              </div>
            </div>
            <div className="lg:w-10/12 sm:w-9/12 w-full px-2 lg:px-0">
                <div className="w-full flex lg:justify-between flex-wrap text-white">
                  <span className='w-full lg:w-max'>Senior Business Development Associate </span>
                  <span className='w-full lg:w-max'>3 years 5 months</span>
                </div>
                <div className="w-full flex lg:justify-between text-white mt-2 flex-wrap">
                  <span className='flex items-center w-full lg:w-max'>
                    <FaCircleNotch/> &nbsp;
                    BYJU’S
                  </span>
                  <span className='flex items-center exp-duration-box w-full lg:w-max'>
                    <span className='mr-2'>Part Time</span>
                    <BiTimeFive/>
                    <span className='bg-white exp-duration-txt ml-1 p-1 px-2 text-xs rounded-md'>Jun 2019-Nov 2022</span>
                  </span>
                </div>
                <div className="w-full flex lg:justify-between text-white mt-2 flex-wrap">
                  <span className='flex items-center w-full lg:w-max'>
                    <MdLocationPin/> &nbsp;
                    Kolkata, India
                  </span>
                  <span className='gap-1 flex w-full lg:w-max flex-wrap'>
                    <span className='bg-slate-600 p-1 px-2 rounded-md text-xs'>Education</span>
                    <span className='bg-slate-600 p-1 px-2 rounded-md text-xs'>Education</span>
                    <span className='bg-slate-600 p-1 px-2 rounded-md text-xs'>Education</span>
                  </span>
                </div>
            </div>
        </div>
        {/* <div className="school-box-wrapper mt-3 flex p-2 px-3">            
              <div className="school-name w-full">
                <div className="college-name">ABC Pvt. Ltd</div>
                <div className="text-neutral-400">Junior Software Developer</div>
                <div className="text-neutral-400">1 year</div>
              </div>
        </div>
        <div className="school-box-wrapper mt-3 flex p-2 px-3">            
              <div className="school-name w-full">
                <div className="college-name">ABC Pvt. Ltd</div>
                <div className="text-neutral-400">Junior Software Developer</div>
                <div className="text-neutral-400">1 year</div>
              </div>
        </div>
        <div className="school-box-wrapper mt-3 flex p-2 px-3">            
              <div className="school-name w-full">
                <div className="college-name">ABC Pvt. Ltd</div>
                <div className="text-neutral-400">Junior Software Developer</div>
                <div className="text-neutral-400">1 year</div>
              </div>
        </div>
        <div className="school-box-wrapper mt-3 flex p-2 px-3">            
              <div className="school-name w-full">
                <div className="college-name">ABC Pvt. Ltd</div>
                <div className="text-neutral-400">Junior Software Developer</div>
                <div className="text-neutral-400">1 year</div>
              </div>
        </div> */}
        
</>
  )
}

export default ExperienceDetails