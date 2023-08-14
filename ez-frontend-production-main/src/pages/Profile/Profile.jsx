/* eslint-disable react/prop-types */
import {
  RiShareForwardFill,
  RiUserFollowLine,
  RiChat3Line,
  RiShoppingBag3Line,
  RiCheckboxBlankCircleFill,
} from "react-icons/ri";
import { BiEdit } from "react-icons/bi";

import { useSelector } from "react-redux";
// import { userLogout } from "../../actions/userActions";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../Landing/components/footer";

// Profile Components
import UserBio from "./components/BioDetails.jsx";
import EducationDetails from "./components/EducationDetails.jsx";
import ExperienceDetails from "./components/ExperienceDetails";
import CertificationsDetails from "./components/CertificationsDetails";
import EndorsementDetails from "./components/EndorsementDetails";
import SkillDetails from "./components/SkillDetails";
import LanguageDetails from "./components/LanguagesDetails";

// CSS
import "./Profile.css";

// eslint-disable-next-line react/prop-types
const Profile = () => {
  const { user } = useSelector((state) => state.user);
  return (
    <>
      {user && (
        <>
          <div className="profileContainer w-full  bg-slate-100 ">
            <div className="w-full flex flex-wrap md:flex-nowrap px-4 md:px-10 lg:px-20 xl:px-32 gap-6 py-10">
              <div className="w-full md:w-8/12">
                <div className="w-full border rounded-md bg-white overflow-hidden shadow">
                  <div className="w-full h-32 md:h-52 relative">
                    <img
                      src="https://res.cloudinary.com/ds6spmr71/image/upload/v1682998352/ezbannerback_dqp08s.png"
                      alt="Cover Image"
                      className="h-full w-full"
                    />
                    <div className="w-32 h-32 md:w-40 md:h-40 border-4 rounded-full overflow-hidden absolute top-[96%] left-[25%] md:left-[12%] translate-x-[-50%] translate-y-[-50%]">
                      <img
                        src={
                          user?.avatar
                            ? user?.avatar?.url
                            : "https://res.cloudinary.com/ds6spmr71/image/upload/v1684065994/user-placeholder_rlwjt9.png"
                        }
                        alt="User Image"
                        className="w-full h-full"
                      />
                    </div>
                  </div>
                  <div className="mt-3 h-12 flex justify-end items-center px-6">
                    <Link
                      to={"/main/profile/edit"}
                      className="text-sm text-white font-semibold bg-green-500 p-2 rounded flex items-center gap-2"
                    >
                      <BiEdit size={20} />
                      Edit Profile
                    </Link>
                  </div>
                  <div className="w-full mt-2 py-2 px-9">
                    <span className="text-sm text-gray-600 font-semibold">
                      @{user.username}
                    </span>
                    <h2 className="font-semibold text-xl">{`${user.firstName} ${user.lastName}`}</h2>
                    <div className="w-full flex gap-2 md:gap-4 items-center flex-wrap md:flex-nowrap my-2 md:my-0">
                      <span className="text-gray-500 flex items-center gap-3 font-semibold text-sm md:my-2">
                        <img
                          src="https://catamphetamine.gitlab.io/country-flag-icons/3x2/IN.svg"
                          alt="India"
                          className="h-4 w-5"
                        />
                        Dehradun, India
                      </span>
                      <span className="text-gray-500">
                        <RiCheckboxBlankCircleFill size={8} />
                      </span>
                      <span className="text-gray-500 flex items-center gap-3 font-semibold text-sm md:my-2">
                        {user.bio}
                      </span>
                    </div>
                    <div className="w-full">
                      <h1>10,000 people follows you</h1>
                    </div>
                    {/* <p className="font-bold ">{user?.bio}</p> */}
                  </div>
                  <div className="w-full flex gap-4 py-2 px-9 mb-4 overflow-x-auto">
                    <button className="bg-slate-900 text-white p-2 px-3 rounded-md flex items-center gap-2 whitespace-nowrap">
                      <RiUserFollowLine />
                      <span className="hidden md:block">Follow</span>
                    </button>
                    <button className="bg-slate-900 text-white p-2 px-3 rounded-md flex items-center gap-2 whitespace-nowrap">
                      <RiChat3Line />
                      <span className="hidden md:block">Chat</span>
                    </button>

                    <button className="bg-slate-900 text-white p-2 px-3 rounded-md flex items-center gap-2 whitespace-nowrap">
                      <RiShoppingBag3Line />
                      <span className="hidden md:block">Buy Service</span>
                    </button>
                    <button className="bg-blue-500 text-white p-2 px-3 rounded-md flex items-center gap-2 whitespace-nowrap">
                      <RiShareForwardFill />
                      <span className="hidden md:block">Share Profile</span>
                    </button>
                  </div>
                </div>

                <div className="w-full flex gap-5 mt-4 flex-wrap">
                  <div className="w-full mt-5 bg-white p-4 rounded-lg shadow shadow-green-200 text-black">
                    <UserBio />
                  </div>
                  <div className="w-full bg-white p-4 mt-6 rounded-lg shadow shadow-green-200">
                    <EducationDetails />
                  </div>
                  <div className="w-full bg-white p-4 mt-6 rounded-lg shadow shadow-green-200">
                    <ExperienceDetails />
                  </div>
                  <div className="w-full bg-white p-4 mt-6 rounded-lg shadow shadow-green-200">
                    <CertificationsDetails />
                  </div>
                  <div className="w-full bg-white p-4 mt-6 rounded-lg shadow shadow-green-200">
                    <EndorsementDetails />
                  </div>
                </div>
              </div>
              <div className="w-full md:w-4/12 flex flex-col-reverse md:flex-col">
                <div className="w-full bg-white p-3 rounded mt-6 md:mt-0">
                  <h1 className="text-lg font-semibold">
                    People with similar interest
                  </h1>
                  <div className="w-full mt-3">
                    <ul>
                      <li>
                        <div className="w-full flex gap-3 mt-3 bg-slate-200 rounded p-3 items-center">
                          <div className="w-14 rounded-full overflow-hidden border border-gray-500">
                            <img
                              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
                              alt="User Icon"
                            />
                          </div>
                          <div className="w-full">
                            <h1 className="font-medium">John Doe</h1>
                            <span className="text-sm text-gray-500">
                              MERN Stack Developer
                            </span>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="w-full flex gap-3 mt-3 bg-slate-200 rounded p-3 items-center">
                          <div className="w-14 rounded-full overflow-hidden border border-gray-500">
                            <img
                              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
                              alt="User Icon"
                            />
                          </div>
                          <div className="w-full">
                            <h1 className="font-medium">John Doe</h1>
                            <span className="text-sm text-gray-500">
                              MERN Stack Developer
                            </span>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="w-full flex gap-3 mt-3 bg-slate-200 rounded p-3 items-center">
                          <div className="w-14 rounded-full overflow-hidden border border-gray-500">
                            <img
                              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
                              alt="User Icon"
                            />
                          </div>
                          <div className="w-full">
                            <h1 className="font-medium">John Doe</h1>
                            <span className="text-sm text-gray-500">
                              MERN Stack Developer
                            </span>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="w-full flex gap-3 mt-3 bg-slate-200 rounded p-3 items-center">
                          <div className="w-14 rounded-full overflow-hidden border border-gray-500">
                            <img
                              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
                              alt="User Icon"
                            />
                          </div>
                          <div className="w-full">
                            <h1 className="font-medium">John Doe</h1>
                            <span className="text-sm text-gray-500">
                              MERN Stack Developer
                            </span>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="w-full bg-white p-3 rounded mt-6">
                  <div className="w-full">
                    <SkillDetails />
                  </div>
                </div>
                <div className="w-full bg-white p-3 rounded mt-6">
                  <div className="w-full">
                    <LanguageDetails />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full bg-white mt-20">
              <Footer />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Profile;
