import React from 'react';

import {BiGitPullRequest} from "react-icons/bi";


const SkillDetails = () => {
  return (
    <>
       <div className="bio-top-header flex items-center">
            <div className="bio-top-header-icon">
                <BiGitPullRequest/>
            </div>
            <h1>SKILLS</h1>
        </div>
        <div className="w-full mt-4 flex flex-wrap gap-3">
          <div className="skill-box p-2">
              <span className='block text-white'>Github</span>
              <span className='block text-gray-50'>Level: Advanced</span>
          </div>
          <div className="skill-box p-2">
              <span className='block text-white'>PHP</span>
              <span className='block text-gray-50'>Level: Advanced</span>
          </div>
          <div className="skill-box p-2">
              <span className='block text-white'>ReactJS</span>
              <span className='block text-gray-50'>Level: Advanced</span>
          </div>
          <div className="skill-box p-2">
              <span className='block text-white'>NodeJS</span>
              <span className='block text-gray-50'>Level: Advanced</span>
          </div>
          <div className="skill-box p-2">
              <span className='block text-white'>ExpressJS</span>
              <span className='block text-gray-50'>Level: Advanced</span>
          </div>
          <div className="skill-box p-2">
              <span className='block text-white'>MongoDB</span>
              <span className='block text-gray-50'>Level: Advanced</span>
          </div>
          <div className="skill-box p-2">
              <span className='block text-white'>HTML</span>
              <span className='block text-gray-50'>Level: Advanced</span>
          </div>
          <div className="skill-box p-2">
              <span className='block text-white'>CSS</span>
              <span className='block text-gray-50'>Level: Advanced</span>
          </div>
        </div>
    </>
  )
}

export default SkillDetails