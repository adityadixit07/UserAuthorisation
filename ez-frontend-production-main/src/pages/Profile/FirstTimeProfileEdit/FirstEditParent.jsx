import React, { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

import { HiOutlineUsers } from "react-icons/hi";
import { BiBook, BiUser, BiCog, BiCheckShield, BiGitPullRequest, BiWrench, BiWorld, BiDonateHeart, BiBookBookmark, BiBriefcase } from "react-icons/bi";
import { AiFillSafetyCertificate } from 'react-icons/ai'

import fillManuallyLogo from "../../../assets/profile-img/fillManuallyLogo.svg"
import linkedInSquare from "../../../assets/profile-img/linkedInSquare.svg"
import addIcon from "../../../assets/profile-img/editstartIndividualBtnAdd.svg"

import './firstEditParent.css';
import FirstEditOverview from "./FirstEditOverview";
import FirstEditEducation from "./FirstEditEducation";
import FirstEditExperience from "./FirstEditExperience";
import FirstEditCertifications from "./FirstEditCertifications";
import FirstEditVolunteering from "./FirstEditVolunteering";
import FirstEditSkill from "./FirstEditSkill";
import FirstEditBio from './FirstEditBio';

function FirstEditParent({ user, isProfileUpdating }) {
    // const profileBtn = useRef(null);
    const [activeTab, setActiveTab] = useState(0);

    const TabContent = [
        {
            id: 1,
            content: <FirstEditOverview
                user={user}
                isProfileUpdating={isProfileUpdating}
            />
        },
        {
            id: 2,
            content: <FirstEditBio
                user={user}
                isProfileUpdating={isProfileUpdating}
            />
        },
        {
            id: 3,
            content: <FirstEditEducation
                user={user}
                isProfileUpdating={isProfileUpdating}
            />
        },
        {
            id: 4,
            content: <FirstEditExperience
                user={user}
                isProfileUpdating={isProfileUpdating}
            />
        },
        {
            id: 5,
            content: <FirstEditSkill
                user={user}
                isProfileUpdating={isProfileUpdating}
            />
        },
        {
            id: 6,
            content: <FirstEditCertifications
                user={user}
                isProfileUpdating={isProfileUpdating}
            />
        },
        {
            id: 7,
            content: <FirstEditVolunteering
                user={user}
                isProfileUpdating={isProfileUpdating}
            />
        },
    ];

    const optionSelected = () => {
        var e = document.getElementById("mobile-select");
        var index = e.selectedIndex;
        setActiveTab(index + 1);
    };

    return (
        <>
            <Toaster toastOptions={{ duration: 5000 }} />
            <div className='profile-bg m-2 lg:m-0 w-[100%]'>
                {/* dropdown from MOBILE ONLY */}
                <div className="mobile-dropdown lg:hidden flex flex-row justify-center items-center p-0">
                    <select className={`w-[100%] mt-4 mb-0 ${activeTab === 0 ? "block" : "block"} rounded-xl px-4 py-2 border border-[rgba(197,197,197,1.0)]`} id="mobile-select" onChange={optionSelected}>
                        {
                            profileBtnData.map((item, index) => (
                                <option value={item.Text} key={index}>{item.Text}</option>
                            ))
                        }
                    </select>
                </div>

                {/* parent for light grey container */}
                <div className="main-container flex justify-center items-center w-full lg:w-auto p-0 mt-5 mb-[50px]">
                    {/* light grey container */}
                    <div className="profile-container p-0 md:p-4 lg:p-3 md:flex min-w-[100%]">
                        {/* left side buttons */}
                        <div className={`profile-btn-container w-full md:w-3/12 lg:w-1/5 p-2 hidden ${activeTab === 0 ? "lg:hidden" : "lg:block"}`}>
                            {
                                profileBtnData.map((item, index) => (
                                    <div className={`profile-btn flex items-center px-3 py-2 my-3 ${activeTab === index + 1 ? "profile-btn-selected" : ""}`} onClick={() => { setActiveTab(index + 1) }} key={item.Text}>
                                        {/* <span className='flex'> */}
                                        {item.Icon}
                                        {/* </span> */}
                                        &nbsp;
                                        {/* <span> */}
                                        {item.Text}
                                        {/* </span> */}
                                    </div>
                                ))
                            }
                        </div>

                        {/* right side view */}
                        <div className={`profile-modal-container flex justify-end w-full md:w-9/12 ${activeTab === 0 ? "lg:w-full" : "lg:w-4/5"}`}>
                            {/* dark grey part */}
                            <div className={`profile-modal p-3 w-full ${activeTab === 0 ? "lg:min-w-[100%]" : "lg:min-w-auto"}`}>

                                {/* firstEditStart shows only when activeTab is zero */}
                                <div className={`${activeTab != 0 ? "hidden" : "block"}`}>
                                    {/* options */}
                                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-x-4 gap-y-6 w-full mb-20'>
                                        <button onClick={() => { setActiveTab(1) }}>
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
                                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-x-4 gap-y-6 w-full mb-20'>
                                        {/* experience */}
                                        <button onClick={() => { setActiveTab(4) }}>
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
                                        <button onClick={() => { setActiveTab(3) }}>
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
                                        <button onClick={() => { setActiveTab(6) }}>
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

                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    {TabContent.map((data) => (
                                        <div key={data.id} className='text-white'>
                                            {activeTab === data.id ? data.content : ""}
                                        </div>
                                    ))}
                                </LocalizationProvider>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const profileBtnData = [
    {
        Icon: <BiUser />,
        Text: 'Basic Details',
    },
    {
        Icon: <BiBook />,
        Text: 'Overview',
    },
    {
        Icon: <BiBook />,
        Text: 'Education',
    },
    {
        Icon: <BiCog />,
        Text: 'Experience',
    },
    {
        Icon: <BiGitPullRequest />,
        Text: 'Skills/TopTools',
    },
    {
        Icon: <BiCheckShield />,
        Text: 'Certifications',
    },
    // {
    //     Icon: <BiWrench />,
    //     Text: 'TopTools',
    // },
    {
        Icon: <HiOutlineUsers />,
        Text: 'Volunteering',
    },
    // {
    //     Icon: <BiDonateHeart />,
    //     Text: 'Endorsements',
    // },
    // {
    //     Icon: <BiWorld />,
    //     Text: 'Languages',
    // },
    // {
    //     Icon: <HiOutlineUsers />,
    //     Text: 'Communities',
    // },
];

export default FirstEditParent