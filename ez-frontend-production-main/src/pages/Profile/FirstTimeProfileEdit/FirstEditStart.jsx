import React from 'react'

import fillManuallyLogo from "../../../assets/profile-img/fillManuallyLogo.svg"
import linkedInSquare from "../../../assets/profile-img/linkedInSquare.svg"
import { BiBookBookmark, BiBriefcase, BiCertification } from 'react-icons/bi'
import addIcon from "../../../assets/profile-img/editstartIndividualBtnAdd.svg"
import { GrDocumentVerified } from 'react-icons/gr'
import { AiFillSafetyCertificate } from 'react-icons/ai'

function FirstEditStart() {
    return (
        <div>
            {/* options */}
            <div className='flex flex-row gap-4 w-full mb-20'>
                <button>
                    <div className='p-4 pe-6 flex flex-row items-center gap-4 bg-white text-black rounded-xl'>
                        <img src={fillManuallyLogo} alt="" width="50px" />
                        <div className='flex flex-col items-center'>
                            <p className='text-[#146B1E] text-xl font-bold'>Fill manually</p>
                            <p>&#91;Typically takes 5 mins&#93;</p>
                        </div>
                    </div>
                </button>
                <button>
                    <div className='p-4 pe-6 flex flex-row items-center gap-4 bg-white text-black rounded-xl'>
                        <img src={linkedInSquare} alt="" width="50px" />
                        <div className='flex flex-col items-center'>
                            <p className='text-[#146B1E] text-xl font-bold'>Import from LinkedIn</p>
                            <p>&#91;Quickest to import details&#93;</p>
                        </div>
                    </div>
                </button>
            </div>

            {/* individual buttons */}
            <div className='flex flex-row flex-wrap gap-4 w-full'>
                {/* experience */}
                <button className='w-5/12'>
                    <div /* style={{"boxShadow":"0 5px 10px 0px rgb(192, 190, 190)"}} */ className='flex flex-row justify-between items-center bg-white text-black py-2 px-4 border border-[rgb(197,197,197)] rounded-xl gap-2'>
                        <BiBriefcase />
                        <div className='flex flex-col items-start'>
                            <p className='font-bold text-left'>Experience</p>
                            <p className='text-left text-[10px] text-[rgb(150,150,150)]'>Add your work experience</p>
                        </div>
                        <img src={addIcon} alt="" height="" />
                    </div>
                </button>
                {/* education */}
                <button className='w-5/12'>
                    <div /* style={{"boxShadow":"0 5px 10px 0px rgb(192, 190, 190)"}} */ className='flex flex-row justify-between items-center bg-white text-black py-2 px-4 border border-[rgb(197,197,197)] rounded-xl gap-2'>
                        <BiBookBookmark />
                        <div className='flex flex-col items-start'>
                            <p className='font-bold text-left'>Education</p>
                            <p className='text-left text-[10px] text-[rgb(150,150,150)]'>Add your education</p>
                        </div>
                        <img src={addIcon} alt="" height="" />
                    </div>
                </button>
                {/* Certification */}
                <button className='w-5/12'>
                    <div /* style={{"boxShadow":"0 5px 10px 0px rgb(192, 190, 190)"}} */ className='flex flex-row justify-between items-center bg-white text-black py-2 px-4 border border-[rgb(197,197,197)] rounded-xl gap-2'>
                        <AiFillSafetyCertificate className='text-white fill-white' />
                        <div className='flex flex-col items-start'>
                            <p className='font-bold text-left'>Certification</p>
                            <p className='text-left text-[10px] text-[rgb(150,150,150)]'>Add your certifications</p>
                        </div>
                        <img src={addIcon} alt="" height="" />
                    </div>
                </button>
            </div>
        </div>
    )
}

export default FirstEditStart