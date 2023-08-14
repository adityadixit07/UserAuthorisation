import React from 'react';

import {BiWorld} from "react-icons/bi";


const LanguagesDetails = () => {
  return (
    <>
       <div className="bio-top-header flex items-center">
            <div className="bio-top-header-icon">
                <BiWorld/>
            </div>
            <h1>LANGUAGES</h1>
        </div>
        <div className="w-full mt-4 flex flex-wrap gap-3">
          <div className="skill-box p-2">
              <span className='block text-white'>Hindi</span>
              <span className='block text-gray-50'>Level: Native</span>
          </div>
          <div className="skill-box p-2">
              <span className='block text-white'>English</span>
              <span className='block text-gray-50'>Level: Professional</span>
          </div>
          <div className="skill-box p-2">
              <span className='block text-white'>Hindi</span>
              <span className='block text-gray-50'>Level: Native</span>
          </div>
          <div className="skill-box p-2">
              <span className='block text-white'>English</span>
              <span className='block text-gray-50'>Level: Professional</span>
          </div>
        </div>
    </>
  )
}

export default LanguagesDetails