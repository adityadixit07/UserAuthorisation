import React from 'react';

import { BiWorld } from "react-icons/bi";
import { BiEdit } from 'react-icons/bi';
import EditLanguages from '../../EditLanguages';


const LanguagesDetails = () => {
  const editSectionLanguage = () => {
    // console.log(document.getElementById('editSectionLanguage').style.display);
    document.getElementById('editSectionLanguage').style.display == "flex" ?
      document.getElementById('editSectionLanguage').style.display = "none" :
      document.getElementById('editSectionLanguage').style.display = "flex";
  }
  return (
    <>
      <EditLanguages />
      <div className="bio-top-header flex items-center">
        <div className="bio-top-header-icon">
          <BiWorld />
        </div>
        <h1>LANGUAGES</h1>
        <button><BiEdit className='ms-5 text-white' onClick={editSectionLanguage} /></button>
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