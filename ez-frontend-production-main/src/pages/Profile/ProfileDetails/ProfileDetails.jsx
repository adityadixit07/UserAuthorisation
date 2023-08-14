import React, { useState, useRef } from 'react';

// react icons imports
import { HiOutlineUsers } from "react-icons/hi";
import { BiBook, BiUser, BiCog, BiCheckShield, BiGitPullRequest, BiWrench, BiWorld, BiDonateHeart } from "react-icons/bi";
import { CiMenuKebab } from "react-icons/ci";

// import custom profile css
import './profileDetails.css';
import ProfileTabContent from './ProfileTabContent';


const ProfileDetails = () => {

    const profileBtn = useRef(null);

    const [activeTab, setActiveTab] = useState(0);

    // storing profile data as array of objects
    const profileBtnData = [
        {
            Icon: <BiUser />,
            Text: 'Bio',
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
            Icon: <BiCheckShield />,
            Text: 'Certifications',
        },
        {
            Icon: <BiGitPullRequest />,
            Text: 'Skills',
        },
        {
            Icon: <BiWrench />,
            Text: 'TopTools',
        },
        {
            Icon: <BiDonateHeart />,
            Text: 'Endorsements',
        },
        {
            Icon: <BiWorld />,
            Text: 'Languages',
        },
        {
            Icon: <HiOutlineUsers />,
            Text: 'Communities',
        },
    ];

    const optionSelected = () => {
        var e = document.getElementById("mobile-select");
        var value = e.value;
        var index = e.selectedIndex;

        // console.log(value);
        // console.log(index);

        setActiveTab(index);
    }

    return (
        <div className='profile-bg m-2 lg:m-0 w-[100%]'>
            <div className="mobile-dropdown lg:hidden flex flex-row justify-center">
                <select className='w-[50%] mt-4 mb-0' id="mobile-select" onChange={optionSelected}>
                    {
                        profileBtnData.map((item, index) => (
                            <option value={item.Text} key={index}>{item.Text}</option>
                        ))
                    }
                </select>
            </div>
            <div className="main-container flex justify-center items-center p-0">
                <div className="profile-container mt-5 p-0 md:p-4 lg:p-3 md:flex m-0 min-w-[100%]">
                    <div className='profile-btn-container w-full lg:w-1/5 md:w-3/12 p-2 hidden lg:block'>
                        {
                            profileBtnData.map((item, index) => (
                                <div className={`profile-btn flex items-center px-3 py-2 my-3 ${activeTab == index ? "profile-btn-selected" : ""}`} onClick={() => { setActiveTab(index) }} key={item.Text}>
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
                    <div className='profile-modal-container w-full lg:w-4/5 md:w-9/12 flex justify-end'>
                        <div className="profile-modal p-3">
                            {/* If you want to add new tab to the modal then just open ProfileTabContent component add an object with 
                          (id & content property) in TabContent array */}
                            <ProfileTabContent activeTab={activeTab} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileDetails