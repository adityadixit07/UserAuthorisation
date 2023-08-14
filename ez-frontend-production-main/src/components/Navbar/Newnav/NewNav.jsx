import { useState } from "react";
import { MdArrowDropDown, MdExplore, MdArrowDropUp } from "react-icons/md";
import { RxRocket } from "react-icons/rx";
import { CiMenuBurger } from "react-icons/ci";
import { HiOutlineUserGroup, HiOutlineCheckBadge } from "react-icons/hi2";
import { FaLayerGroup } from "react-icons/fa";
import { IoHome, IoBagOutline } from "react-icons/io5";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AiFillBank, AiOutlineClose } from "react-icons/ai";
import { AiFillExclamationCircle } from "react-icons/ai";
import { AiFillMail } from "react-icons/ai";
import { AiOutlineUsergroupAdd } from "react-icons/ai";

// CSS File
import Style from "../../../pages/Landing/style.module.css";
import { useDispatch, useSelector } from "react-redux";
import UserPop from "../NavUser/UserPop";
import { useRef } from "react";
import { userLogout } from "../../../actions/userActions";
import { useOutsideClick } from "../../../hooks/clickOutside";
import { signInWithPhoneNumber } from "firebase/auth";
import { Typography } from "@mui/material";
import { BiCloset } from "react-icons/bi";

function Navbar({ showBackground }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [toggle, settoggle] = useState(false);
  const [toggleBar, settoggleBar] = useState(false);
  const path = location.pathname;
  const { user, isAuthenticated } = useSelector((state) => state.user);
  const activeTabStyle = "border-solid border-b-[2px] border-[green]";

  const [userPop, setUserPop] = useState(false);
  const userRef = useRef(null);
  useOutsideClick(() => {
    if (userPop) {
      setUserPop(false);
    }
  }, userRef);

  const onLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("user-notifications");
    localStorage.removeItem("seller-notifications");
    dispatch(userLogout());
    navigate("/");
  };

  const fetchCode = true;
  const profileRoute = `/main/profile/${user?.username || user?.firstName}`;

 
  return (
    <>
      <nav className="flex flex-row h-full justify-around items-center md:py-2  md:justify-normal px-2 md:px-24">
        <div className="w-full md:w-3/12 flex items-center justify-between md:mx-0">
          <img
            src="/NavLogo.png"
            alt="pic"
            className="w-[120px] h-16 md:h-20 object-contain"
          />
          <div className="">
            {!isAuthenticated && (
              <NavLink
                to="/user/register"
                className="px-4 ml-[6rem] md:hidden h-9 flex items-center text-white bg-slate-800 hover:bg-slate-700 my-3 rounded"
              >
                Sign up
              </NavLink>
            )}
          </div>
          <span
            className="flex md:hidden mr-1 z-50 ease-in-out"
            onClick={() => settoggleBar(!toggleBar)}
          >
           { toggleBar?<AiOutlineClose size={30}/>:<CiMenuBurger size={30} />}
          </span>
        </div>
        <div className="w-6/12 h-fit hidden md:flex flex-row gap-1  justify-center">
          <NavLink
            to={isAuthenticated ? "/main" : "/"}
            className={`text-black ${Style.navlink} font-medium `}
          >
            <div
              className={`flex ${
                Style.box
              } w-40 rounded-lg  flex-col items-center ${
                path === "/" && activeTabStyle
              }`}
            >
              <span>
                <IoHome
                  className={` ${Style.navicon}`}
                  color={`${path === "/" && "green"}`}
                  size={18}
                />
              </span>
              <span className={`${Style.navtext}`}>Home</span>
            </div>
          </NavLink>
          <NavLink
            to="/"
            className={`text-black ${Style.navlink} font-medium`}
          >
            <div
              className={`flex ${
                Style.box
              } w-40 rounded-lg  flex-col items-center ${
                path === "/about" && activeTabStyle
              }`}
            >
              <span>
                <IoBagOutline
                  className={` ${Style.navicon}`}
                  color={`${path === "/about" && "green"}`}
                  size={18}
                />
              </span>
              <span className={`${Style.navtext}`}>About us</span>
            </div>
          </NavLink>
          <NavLink
            to="/"
            className={`text-black ${Style.navlink} font-medium`}
          >
            <div
              className={`flex ${
                Style.box
              } w-40 rounded-lg  flex-col items-center ${
                path === "/contact" && activeTabStyle
              }`}
            >
              <span>
                <MdExplore
                  className={` ${Style.navicon}`}
                  color={`${path === "/contact" && "green"}`}
                  size={18}
                />
              </span>
              <span className={`${Style.navtext}`}>Contact us</span>
            </div>
          </NavLink>
          <div className="relative">
            <NavLink
              className={`text-black ${Style.navlink} flex items-center  font-medium `}
              onClick={() => settoggle((prev) => !prev)}
            >
              <div
                className={`flex ${Style.box} w-40 rounded-lg ${
                  path === "/community" && activeTabStyle
                }`}
              >
                <div className="flex items-center justify-center w-full">
                  <div className="flex flex-col items-center">
                    <span>
                      <FaLayerGroup
                        className={` ${Style.navicon}`}
                        color={`${path === "/community" && "green"}`}
                        size={18}
                      />
                    </span>
                    <span className={`${Style.navtext} `}>Community</span>
                  </div>

                  {toggle ? (
                    <MdArrowDropUp
                      color="green"
                      size={27}
                      // onClick={() => settoggle(false)}
                    />
                  ) : (
                    <MdArrowDropDown
                      color="green"
                      size={27}
                      // onClick={() => settoggle(true)}
                    />
                  )}
                </div>
              </div>
            </NavLink>
            {toggle && (
              <div className={`flex flex-col absolute top-[4rem] rounded`}>
                <div
                  className={`cursor-pointer flex items-center gap-1 flex-row border-2 border-solid bg-green-400 border-gray-200  rounded-md justify-start ${
                    !showBackground && "hover:bg-transparent group"
                  }`}
                >
                  <RxRocket
                    className="pl-1 text-[#fff] group-hover:text-green-400"
                    size={30}
                  />{" "}
                  &nbsp;
                  <Link
                    to="https://tally.so/r/3EKgA2"
                    className="text-white font-bold group-hover:text-green-400"
                  >
                    StartUp Community
                  </Link>
                </div>
                <div
                  className={`cursor-pointer flex items-center gap-1 flex-row border-2 border-solid bg-green-400 border-gray-200  rounded-md justify-start ${
                    !showBackground && "hover:bg-transparent group"
                  }`}
                >
                  <HiOutlineUserGroup
                    className="pl-1 text-[#fff] group-hover:text-green-400"
                    size={30}
                  />{" "}
                  &nbsp;
                  <Link
                    to="https://tally.so/r/3EKgA2"
                    className="text-white font-bold group-hover:text-green-400"
                  >
                    Bangalorean Community
                  </Link>
                </div>
               
              </div>
            )}
          </div>
        </div>
        {isAuthenticated && (
          <div ref={userRef}>
            <div
              className="md:ml-5 w-[50px] h-[50px] rounded-full flex md:hidden justify-center items-center cursor-pointer"
              onClick={() => setUserPop((prev) => !prev)}
            >
              <img
                className="w-full h-full rounded-full object-cover"
                src={user?.avatar ? user?.avatar?.url : "/icon.png"}
                alt="User profile"
              />
            </div>
            {userPop && (
              <div className="absolute top-[10.5vh] right-0 z-50">
                <UserPop
                  setUserPop={setUserPop}
                  onLogout={onLogout}
                  fetchCode={fetchCode}
                  profileRoute={profileRoute}
                />
              </div>
            )}
          </div>
        )}
        <div className="w-3/12 hidden md:flex flex-row justify-end items-center">
          {user?.role === "seller" ? (
            <NavLink
              to={isAuthenticated ? "/main" : "/user/login"}
              className="text-green-500 bg-white hover:text-white hover:bg-green-500 rounded-lg shadow-green-500 p-4 shadow-md font-medium flex items-center h-10"
              // className="text-white bg-purple-500 hover:bg-purple-600 p-1 xl:px-3 rounded font-medium flex items-center h-9"
            >
              <HiOutlineCheckBadge /> &nbsp; Dashboard
            </NavLink>
          ) : (
            <NavLink
              to="/sellerhomepage"
              className="text-green-500 bg-white hover:text-white hover:bg-green-500 rounded-lg shadow-green-500 xl:px-3 shadow-md font-medium flex items-center h-9"
              // className="text-white bg-green-500 hover:bg-green-600 p-1 xl:px-3 rounded font-medium flex items-center h-9"
            >
              <HiOutlineCheckBadge /> &nbsp; Become a Seller
            </NavLink>
          )}

          {!isAuthenticated && (
            <div className="ml-4 flex items-center gap-4">
              <NavLink
                to="/user/login"
                className={`px-[1.5rem] py-1 text-black ${Style.login_btn} flex items-center bg-slate-100 h-9 border-2 border-blue-500 my-3`}
              >
                Login
              </NavLink>
              <NavLink
                to="/user/register"
                className="px-[1.5rem] h-9 flex items-center text-white bg-slate-800 hover:bg-slate-700 my-3 rounded"
                // className={`h-9 text-white flex items-center rounded bg-slate-800 hover:bg-slate-700 font-medium my-3`}
              >
                Sign up
              </NavLink>
            </div>
          )}
        </div>
        {isAuthenticated && (
          <div ref={userRef}>
            <div
              className="md:ml-5 w-[50px] h-[50px] rounded-full hidden md:flex justify-center items-center cursor-pointer"
              onClick={() => setUserPop((prev) => !prev)}
            >
              <img
                className="w-full h-full rounded-full object-cover"
                src={user?.avatar ? user?.avatar?.url : "/icon.png"}
                alt="User profile"
              />
            </div>
            {userPop && (
              <div className="absolute top-[10.5vh] right-0 z-50">
                <UserPop
                  setUserPop={setUserPop}
                  onLogout={onLogout}
                  fetchCode={fetchCode}
                  profileRoute={profileRoute}
                />
              </div>
            )}
          </div>
        )}
        <div
          className={`md:hidden p-3 ${
            toggleBar ? "flex" : "hidden"
          } flex-col justify-between flex-wrap w-[97%] fixed z-[99] top-24  h-md bg-[#f2fbf0] transition-all duration-[1000ms] ease-in-out rounded-md rounded-tr-3xl rounded-tl-3xl rounded-bl-3xl rounded-br-3xl`} 
        >
          <div className="w-full flex flex-col">
            <NavLink
              to={isAuthenticated ? "/main" : "/"}
              className="text-black font-medium hover:text-green-400 my-2 flex gap-1"
            >
              <AiFillBank size={20} /> Home
            </NavLink>
            <NavLink
              to="/"
              className="text-black font-large  hover:text-green-400 my-2 flex gap-1"
            >
              {" "}
              <AiFillExclamationCircle size={20} />
              About
            </NavLink>
            <NavLink
              to="/"
              className="text-black font-medium hover:text-green-400 my-2 flex gap-1"
            >
              <AiFillMail size={20} />
              Contact us
            </NavLink>
            <div
              className="text-black flex font-medium hover:text-green-400 my-2 relative gap-1"
              onClick={() => settoggle(!toggle)}
            >
              {" "}
              <AiOutlineUsergroupAdd size={20} />
              Community
              {toggle ? (
                <MdArrowDropUp color="green" size={27} />
              ) : (
                <MdArrowDropDown color="green" size={27} />
              )}
              {toggle && (
                <div className="flex flex-col w-full absolute top-[100%] left-0">
                  <div className="flex items-center gap-[2px] flex-row border-2 border-solid bg-green-400 border-gray-200  rounded-md justify-start hover:bg-transparent group">
                    <RxRocket
                      className="pl- text-[#fff] group-hover:text-green-400"
                      size={30}
                    />{" "}
                    &nbsp;
                    <Link
                      to="https://tally.so/r/3EKgA2"
                      className="text-white font-bold hover:text-green-400"
                    >
                      StartUp Community
                    </Link>
                  </div>
                  <div className="flex items-center gap-[2px] flex-row border-2 border-solid bg-green-400 border-gray-200  rounded-md justify-start hover:bg-transparent group">
                    <HiOutlineUserGroup
                      className="pl-1 text-[#fff] group-hover:text-green-400"
                      size={30}
                    />{" "}
                    &nbsp;
                    <Link
                      to="https://tally.so/r/3EKgA2"
                      className="text-white font-bold hover:text-green-400"
                    >
                      Bangalorean Community
                    </Link>
                  </div>
                  <div className="flex items-center gap-[2px] flex-row border-2 border-solid bg-green-400 border-gray-200  rounded-md justify-start hover:bg-transparent group">
                    <HiOutlineUserGroup
                      className="pl-1 text-[#fff] group-hover:text-green-400"
                      size={30}
                    />{" "}
                    &nbsp;
                    <Link
                      to="https://tally.so/r/3EKgA2"
                      className="text-white font-bold hover:text-green-400"
                    >
                      Bangalorean Community
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="w-full">
            {user?.role !== "seller" && (
              <NavLink
                to="/sellerhomepage"
                className="text-green-500 bg-white hover:text-white hover:bg-green-500 rounded-lg shadow-green-500 xl:px-3 shadow-md font-medium flex items-center h-9 gap-2"
              >
                <HiOutlineCheckBadge className="pl-1" />
                Become a Seller
              </NavLink>
            )}
            {!isAuthenticated && (
              <>
                <NavLink
                  to="/user/login"
                  className={`px-[1.5rem] text-black ${Style.login_btn} flex items-center bg-slate-100 h-9 border-2 border-blue-500 my-3`}
                >
                  Login
                </NavLink>
                <NavLink
                  to="/user/register"
                  className={`px-[1.5rem] h-9 text-white flex items-center rounded bg-slate-800 hover:bg-slate-700 my-3`}
                >
                  Sign up
                </NavLink>
              </>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
