import React from 'react'

import {BiWrench} from "react-icons/bi";


const TopToolDetails = () => {
  return (
    <>
      <div className="bio-top-header flex items-center">
            <div className="bio-top-header-icon">
                <BiWrench/>
            </div>
            <h1>TOP TOOL</h1>
      </div>
      <div className="w-full mt-4 flex flex-wrap gap-3">
          <div className="top-tool-box p-2">
              <span className='block text-white'>Docker</span>
          </div>
          <div className="top-tool-box p-2">
              <span className='block text-white'>Docker</span>
          </div>
          <div className="top-tool-box p-2">
              <span className='block text-white'>Docker</span>
          </div>
          <div className="top-tool-box p-2">
              <span className='block text-white'>Docker</span>
          </div>
          <div className="top-tool-box p-2">
              <span className='block text-white'>Docker</span>
          </div>
          <div className="top-tool-box p-2">
              <span className='block text-white'>Docker</span>
          </div>
          <div className="top-tool-box p-2">
              <span className='block text-white'>Docker</span>
          </div>
          <div className="top-tool-box p-2">
              <span className='block text-white'>Docker</span>
          </div>
          <div className="top-tool-box p-2">
              <span className='block text-white'>Docker</span>
          </div>
        </div>
    </>
  )
}

export default TopToolDetails