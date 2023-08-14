import { useState } from "react";

// Package Imports
// import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";
import { RxRocket } from "react-icons/rx";
import { CiMenuBurger } from "react-icons/ci";
import { HiOutlineUserGroup, HiOutlineCheckBadge } from "react-icons/hi2";
import finalLogo from "../../../assets/final logoHeader.png";
import { Link, NavLink } from "react-router-dom";

// CSS File
import Style from "../style.module.css";
import { useSelector } from "react-redux";

function Navbar() {
  const [toggle, settoggle] = useState(false);
  const [toggleBar, settoggleBar] = useState(false);

  const { user, isAuthenticated } = useSelector((state) => state.user);

  return (
    <>
      <nav
        className={`flex flex-row justify-around items-center md:py-2 xl:py-3 md:justify-normal md:px-16`}
      >
        <div
          onClick={() => settoggleBar(!toggleBar)}
          className={`${
            toggleBar
              ? "absolute top-0 left-0 w-full h-screen bg-slate-900 opacity-20 z-0"
              : null
          }`}
        ></div>
        <div className="w-full md:w-2/12 flex justify-around md:justify-between items-center">
          <img src={finalLogo} alt="pic" className="w-[100px] h-[60px]  ml-4" />
          <NavLink
            to="/user/register"
            className={`px-[2rem] ml-[6rem] md:hidden h-9 text-white flex items-center rounded bg-slate-800 hover:bg-slate-700 font-medium my-3`}
          >
            Sign up
          </NavLink>
          <span
            className="flex md:hidden mr-4 z-50"
            onClick={() => settoggleBar(!toggleBar)}
          >
            <CiMenuBurger size={25} />
          </span>
        </div>
        <div className="w-5/12 hidden md:flex flex-row gap-6 justify-center">
          <NavLink
            to="/"
            className="text-black font-medium hover:text-green-400"
          >
            Home
          </NavLink>
          <NavLink
            to="/"
            className="text-black font-medium hover:text-green-400"
          >
            About us
          </NavLink>
          <NavLink
            to="/"
            className="text-black font-medium hover:text-green-400"
          >
            Contact us
          </NavLink>
          <NavLink className="text-black flex font-medium hover:text-green-400">
            Community
            {toggle ? (
              <MdArrowDropUp
                color="green"
                size={27}
                onClick={() => settoggle(false)}
              />
            ) : (
              <MdArrowDropDown
                color="green"
                size={27}
                onClick={() => settoggle(true)}
              />
            )}
            {toggle && (
              <div className="flex flex-col absolute  top-[4rem] rounded bg-white p-2">
                <div className="flex flex-row border-2 border-solid bg-green-400 border-gray-200  rounded-md justify-start p-2 px-4">
                  <RxRocket color="#fff" size={22} /> &nbsp;
                  <Link
                    to="https://tally.so/r/3EKgA2"
                    className="text-white font-bold hover:text-white"
                  >
                    StartUp Community
                  </Link>
                </div>
                <div className="flex flex-row border-2 border-solid bg-green-400 border-gray-200  rounded-md justify-start p-2 px-4">
                  <HiOutlineUserGroup color="#fff" size={22} /> &nbsp;
                  <Link
                    to="https://tally.so/r/3EKgA2"
                    className="text-white font-bold hover:text-white"
                  >
                    Bangalorean Community
                  </Link>
                </div>
                <div className="flex flex-row border-2 border-solid bg-green-400 border-gray-200  rounded-md justify-start p-2 px-4">
                  <HiOutlineUserGroup color="#fff" size={22} /> &nbsp;
                  <Link
                    to="https://tally.so/r/3EKgA2"
                    className="text-white font-bold hover:text-white"
                  >
                    Bangalorean Community
                  </Link>
                </div>
              </div>
            )}
          </NavLink>
        </div>
        <div className="w-5/12 hidden md:flex flex-row gap-4 justify-end items-center">
          {user?.role === "seller" ? (
            <NavLink
              to={isAuthenticated ? "/seller" : "/user/login"}
              className="text-white bg-purple-500 hover:bg-purple-600 p-1 xl:px-3 rounded font-medium flex items-center h-9"
            >
              <HiOutlineCheckBadge /> &nbsp; Seller Dashboard
            </NavLink>
          ) : (
            <NavLink
              to={isAuthenticated ? "/sellerhomepage" : "/user/login"}
              className="text-white bg-green-500 hover:bg-green-600 p-1 xl:px-3 rounded font-medium flex items-center h-9"
            >
              <HiOutlineCheckBadge /> &nbsp; Become a Seller
            </NavLink>
          )}

          {!isAuthenticated ? (
            <>
              <NavLink
                to="/user/login"
                className={` px-[1.5rem] py-1 text-black ${Style.login_btn} flex items-center bg-slate-100 h-9 border-2 border-blue-500 my-3`}
              >
                Login
              </NavLink>
              <NavLink
                to="/user/register"
                className={`px-[1.5rem] h-9 text-white flex items-center rounded bg-slate-800 hover:bg-slate-700 font-medium my-3`}
              >
                Sign up
              </NavLink>
            </>
          ) : (
            <Link
              to={"/main"}
              className="bg-purple-600 h-9 flex items-center px-3 text-white rounded"
            >
              Dashboard
            </Link>
            // <span>Hello, {user?.firstName}</span>
          )}
        </div>
        <div
          className={`md:hidden p-3 ${
            toggleBar ? "flex" : "hidden"
          } flex-col justify-between flex-wrap w-[50%] fixed z-[99] top-0 left-0 h-screen bg-[#eefff7] transition-all duration-[1000ms] ease-in-out`}
        >
          <div className="w-full flex flex-col">
            <NavLink
              to="/"
              className="text-black font-medium hover:text-green-400 my-2"
            >
              Home
            </NavLink>
            <NavLink
              to="/"
              className="text-black font-medium hover:text-green-400 my-2"
            >
              About us
            </NavLink>
            <NavLink
              to="/"
              className="text-black font-medium hover:text-green-400 my-2"
            >
              Contact us
            </NavLink>
            <NavLink
              className="text-black flex font-medium hover:text-green-400 my-2 relative"
              onClick={() => settoggle(!toggle)}
            >
              Community
              {toggle ? (
                <MdArrowDropUp color="green" size={27} />
              ) : (
                <MdArrowDropDown color="green" size={27} />
              )}
              {toggle && (
                <div className="flex flex-col w-full absolute top-[100%] left-0">
                  <div className="flex flex-row border-2 border-solid bg-green-400 my-1 border-green-400  rounded-md justify-start p-2">
                    <RxRocket color="#fff" size={22} /> &nbsp;
                    <Link
                      to="https://tally.so/r/3EKgA2"
                      className="text-white font-bold hover:text-white"
                    >
                      StartUp Community
                    </Link>
                  </div>
                  <div className="flex flex-row border-2 border-solid bg-green-400 my-1 border-green-400  rounded-md justify-start p-2">
                    <HiOutlineUserGroup color="#fff" size={22} /> &nbsp;
                    <Link
                      to="https://tally.so/r/3EKgA2"
                      className="text-white font-bold hover:text-white"
                    >
                      Bangalorean Community
                    </Link>
                  </div>
                  <div className="flex flex-row border-2 border-solid bg-green-400 my-1 border-green-400  rounded-md justify-start p-2">
                    <HiOutlineUserGroup color="#fff" size={22} /> &nbsp;
                    <Link
                      to="https://tally.so/r/3EKgA2"
                      className="text-white font-bold hover:text-white"
                    >
                      Bangalorean Community
                    </Link>
                  </div>
                </div>
              )}
            </NavLink>
          </div>
          <div className="w-full">
            <NavLink
              to={isAuthenticated ? "/sellerhomepage" : "/user/login"}
              className="text-white bg-green-500 hover:bg-green-600 p-1 px-3 rounded font-medium flex items-center h-9 my-3"
            >
              <HiOutlineCheckBadge /> &nbsp; Become a Seller
            </NavLink>
            {!isAuthenticated ? (
              <>
                <NavLink
                  to="/user/login"
                  className={` px-[1.5rem] py-1 text-black ${Style.login_btn} flex items-center bg-slate-100 h-9 border-2 border-blue-500 my-3`}
                >
                  Login
                </NavLink>
                <NavLink
                  to="/user/register"
                  className={`px-[1.5rem] h-9 text-white flex items-center rounded bg-slate-800 hover:bg-slate-700 font-medium my-3`}
                >
                  Sign up
                </NavLink>
              </>
            ) : (
              <Link
                to={"/main"}
                className="bg-purple-700 h-9 flex items-center px-3 text-white rounded"
              >
                Dashboard
              </Link>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
