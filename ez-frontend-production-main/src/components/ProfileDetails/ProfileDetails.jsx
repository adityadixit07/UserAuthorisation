import { useState, useRef } from "react";

// react icons imports
import { HiOutlineUsers } from "react-icons/hi";
import {
  BiBook,
  BiUser,
  BiCog,
  BiCheckShield,
  BiGitPullRequest,
  BiWrench,
  BiWorld,
  BiDonateHeart,
} from "react-icons/bi";
import { CiMenuKebab } from "react-icons/ci";

// import custom profile css
import "./profileDetails.css";
import ProfileTabContent from "./ProfileTabContent";

const ProfileDetails = () => {
  const profileBtn = useRef(null);

  const [activeTab, setActiveTab] = useState(0);

  // storing profile data as array of objects
  const profileBtnData = [
    {
      Icon: <BiUser />,
      Text: "Bio",
    },
    {
      Icon: <BiBook />,
      Text: "Education",
    },
    {
      Icon: <BiCog />,
      Text: "Experience",
    },
    {
      Icon: <BiCheckShield />,
      Text: "Certifications",
    },
    {
      Icon: <BiGitPullRequest />,
      Text: "Skills",
    },
    {
      Icon: <BiWrench />,
      Text: "TopTools",
    },
    {
      Icon: <BiDonateHeart />,
      Text: "Endorsements",
    },
    {
      Icon: <BiWorld />,
      Text: "Languages",
    },
    {
      Icon: <HiOutlineUsers />,
      Text: "Communities",
    },
  ];

  const showProfileBtn = (e) => {
    e.preventDefault();
    profileBtn.current.classList.toggle("hidden");
  };

  return (
    <div className="profile-bg">
      <div className="main-container flex justify-center items-center">
        <div
          className="mobile-profile-btn py-3 px-1"
          onClick={(e) => showProfileBtn(e)}
        >
          <CiMenuKebab />
        </div>
        <div className="profile-container mt-24 mb-24 md:p-4 p-3 md:flex">
          <div
            className="profile-btn-container w-full lg:w-1/5 md:w-3/12 p-2 hidden md:block"
            ref={profileBtn}
          >
            {profileBtnData.map((item, index) => (
              <div
                className="profile-btn flex items-center px-3 py-2 my-3"
                onClick={() => {
                  setActiveTab(index);
                }}
                key={item.Text}
              >
                <span className="flex">{item.Icon}</span>
                &nbsp;
                <span>{item.Text}</span>
              </div>
            ))}
          </div>
          <div className="profile-modal-container w-full lg:w-4/5 md:w-9/12 flex justify-end">
            <div className="profile-modal p-3">
              {/* If you want to add new tab to the modal then just open ProfileTabContent component add an object with 
                          (id & content property) in TabContent array */}
              <ProfileTabContent activeTab={activeTab} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetails;
