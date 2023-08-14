import React from 'react';

import { HiOutlineUsers } from "react-icons/hi";


const CommunityDetails = () => {
  return (
    <>
      <div className="bio-top-header flex items-center">
        <div className="bio-top-header-icon">
          <HiOutlineUsers />
        </div>
        <h1>COMMUNITIES</h1>
      </div>
      <div className="w-full mt-4 flex flex-wrap gap-3">
        <div className="community-btn-box p-2">
          <span className='block text-white'>Startup</span>
          <span className='block text-gray-50'>Lorem ipsum dolor</span>
        </div>
        <div className="community-btn-box p-2">
          <span className='block text-white'>Startup</span>
          <span className='block text-gray-50'>Lorem ipsum dolor</span>
        </div>
        <div className="community-btn-box p-2">
          <span className='block text-white'>Startup</span>
          <span className='block text-gray-50'>Lorem ipsum dolor</span>
        </div>
        <div className="community-btn-box p-2">
          <span className='block text-white'>Startup</span>
          <span className='block text-gray-50'>Lorem ipsum dolor</span>
        </div>
        <div className="community-btn-box p-2">
          <span className='block text-white'>Startup</span>
          <span className='block text-gray-50'>Lorem ipsum dolor</span>
        </div>
      </div>
    </>
  )
}

export default CommunityDetails