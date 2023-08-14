import React from 'react'

import {BiDonateHeart} from "react-icons/bi";

import UserIcon from "../../../Assets/profile-img/user-img.png";


const TopToolDetails = () => {
  return (
    <>
      <div className="bio-top-header flex items-center">
            <div className="bio-top-header-icon">
                <BiDonateHeart/>
            </div>
            <h1>ENDORSEMENT</h1>
      </div>
      <div className="w-full mt-4 flex flex-wrap gap-3">
          <div className="endorse-box w-full p-3">
              <div className="w-full flex items-center">
                <div className="endorse-user-icon sm:h-8 h-full sm:w-8 w-12">
                  <img src={UserIcon} alt="User Icon" className='w-full h-full'/>
                </div>
                <div className="w-full sm:flex">
                  <span className='block text-white ml-3 text-sm md:text-base'>Suraj Aswal</span>
                  <span className='block text-white ml-3 bg-teal-700 p-1 px-2 rounded-md text-xs sm:text-sm fit-role-box'>Full Stack Developer</span>
                </div>
              </div>
              <div className="w-full mt-2">
                 <p className='text-white text-sm sm:text-base text-justify sm:h-12 h-10 endorse-txt'>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                 Maxime laudantium ipsam repellat. 
                 Ullam quas ducimus necessitatibus fuga molestiae nisi. Maxime laudantium ipsam repellat. 
                 Ullam quas ducimus necessitatibus fuga molestiae nisi. Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                 Maxime laudantium ipsam repellat. 
                 Ullam quas ducimus necessitatibus fuga molestiae nisi. Maxime laudantium ipsam repellat. 
                 Ullam quas ducimus necessitatibus fuga molestiae nisi.</p>
              </div>
          </div>
          <div className="endorse-box w-full p-3">
              <div className="w-full flex items-center">
                <div className="endorse-user-icon sm:h-8 h-full sm:w-8 w-12">
                  <img src={UserIcon} alt="User Icon" className='w-full h-full'/>
                </div>
                <div className="w-full sm:flex">
                  <span className='block text-white ml-3 text-sm md:text-base'>Suraj Aswal</span>
                  <span className='block text-white ml-3 bg-teal-700 p-1 px-2 rounded-md text-xs sm:text-sm fit-role-box'>Full Stack Developer</span>
                </div>
              </div>
              <div className="w-full mt-2">
                 <p className='text-white text-sm sm:text-base text-justify sm:h-12 h-10 endorse-txt'>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                 Maxime laudantium ipsam repellat. 
                 Ullam quas ducimus necessitatibus fuga molestiae nisi. Maxime laudantium ipsam repellat. 
                 Ullam quas ducimus necessitatibus fuga molestiae nisi. Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                 Maxime laudantium ipsam repellat. 
                 Ullam quas ducimus necessitatibus fuga molestiae nisi. Maxime laudantium ipsam repellat. 
                 Ullam quas ducimus necessitatibus fuga molestiae nisi.</p>
              </div>
          </div>
        </div>
    </>
  )
}

export default TopToolDetails