import { useNavigate } from "react-router-dom";
/* eslint-disable react/prop-types */
// import React from "react";
import "./DashboardBar.css";
// import { FaCaretDown } from "react-icons/fa";
import { BsFillCircleFill } from "react-icons/bs";
import logo from "../../assets/ez circle.png";
import { Link } from "react-router-dom";
import { RiAccountCircleLine } from "react-icons/ri";
import { RxDashboard } from "react-icons/rx";
// import { AiOutlineFundView } from "react-icons/ai";
import { MdOutlineAnalytics, MdSaveAlt } from "react-icons/md";
import { CiLogout } from "react-icons/ci";
// import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { userLogout } from "../../actions/userActions";
import { useEffect } from "react";
import Loader from "../Loader/Loader";

// eslint-disable-next-line react/prop-types
const DashboardBar = ({ user, isDashboard }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoggedOut, isLoading } = useSelector((state) => state.user);

  const onLogout = (e) => {
    e.preventDefault();
    dispatch(userLogout());
  };

  useEffect(() => {
    if (isLoggedOut) {
      navigate("/user/login");
    }
  }, [isLoggedOut, navigate]);
  return (
    <div
      className={`dashboard-wrapper w-[320px] rounded-[10px] bg-[#FFFFFF] md:block ${
        isDashboard === true ? "block absolute left-0 top-10 z-30" : "hidden"
      }`}
    >
      <div className="dashboard-bar flex flex-col items-center justify-between bg-[#e9e6e6] p-5">
        {!isLoading ? (
          <div className="bg-[#211f1f] mb-5 rounded-[20px] relative w-full">
            <div className="flex flex-col gap-5 w-full">
              <div className="w-full rounded-tl-xl rounded-tr-xl overflow-hidden">
                <img
                  className="h-24 w-full "
                  src={
                    "https://www.euttaranchal.com/tourism/photos/pauri-garhwal-3122902.jpg"
                  }
                  alt="ezbannerback"
                />
              </div>
              <div className="w-20 h-[80px] border-2 rounded-[100%] overflow-hidden z-10 absolute translate-y-[60%] left-[50%] -translate-x-[50%]">
                <img
                  src={`${user?.avatar ? user?.avatar.url : null}`}
                  className="w-full"
                  alt=""
                />
              </div>
              <div className="w-full p-4">
                <h2 className="text-lg font-normal text-white">
                  {`${user?.firstName} ${user?.lastName}`}
                </h2>
                <h5 className="text-xs font-bold text-slate-300 mt-1">
                  @{`${user?.username}`}
                </h5>
              </div>
            </div>
          </div>
        ) : (
          <Loader />
        )}
        <div className="dashboard-buttons">
          <Link to={"/main/profile"} className="dashboard-button mb-10">
            <RiAccountCircleLine size={20} className="mr-2" />
            Account
          </Link>
          <button className="dashboard-button mb-9">
            <BsFillCircleFill color="green" className="mr-2" />
            Available
          </button>

          <button className="dashboard-button">
            <RxDashboard className="mr-2" />
            Dashboard
          </button>
          <Link to={"/main/myservices"} className="dashboard-button">
            <MdSaveAlt className="mr-2" />
            My Services
          </Link>
          <button className="dashboard-button">
            <MdOutlineAnalytics className="mr-2" />
            Analytics
          </button>
          <button className="dashboard-button" onClick={onLogout}>
            <CiLogout className="mr-2" />
            Logout
          </button>
        </div>
        <button className="w-full bg-green-600 p-2 rounded-md flex gap-3 justify-center items-center text-white">
          <span>Profile Views</span>
          <span className="text-white font-semibold">{user?.profileViews}</span>
        </button>
        <div className="community-box">
          <div className="community-title">My Communities</div>
          <div className="community-name mt-3">
            {/* <img
              className="user-image"
              src="https://via.placeholder.com/50x50"
              alt="User profile"
              // style={{ marginRight: '50px' }}
              style={{ display: "inline-block", marginRight: "10px" }}
            />
            Startup Community
            <div
              style={{
                display: "block",
                color: "#BCBCBC",
                fontSize: "13px",
                marginLeft: "50px",
              }}
            >
              94k members
            </div> */}
            <span className="font-medium text-base border border-dotted p-3 text-gray-700">
              No Communities Joined yet
            </span>
          </div>
          {/* <div className="community-name">
            <img
              className="user-image"
              src="https://via.placeholder.com/50x50"
              alt="User profile"
              // style={{ marginRight: '50px' }}
              style={{ display: "inline-block", marginRight: "10px" }}
            />
            Bangalorean Community
            <div
              style={{
                display: "block",
                color: "#BCBCBC",
                fontSize: "13px",
                marginLeft: "50px",
              }}
            >
              94k members
            </div>
          </div> */}
        </div>
        <div className="analytics-box">
          <div className="analytics-title">
            <img src={logo} className="logo" />
            <strong>eZ- &rdquo;The One&ldquo; App</strong>
            <br />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div style={{ fontFamily: "sans-serif" }}>Visitors</div>
              <div
                style={{ color: "black", fontSize: "13px", textAlign: "right" }}
              >
                17
              </div>
            </div>
          </div>
          <div className="analytics-button">See visitor Analytics</div>
        </div>
      </div>
    </div>
  );
};

export default DashboardBar;
