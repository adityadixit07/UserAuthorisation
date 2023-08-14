import { useEffect, useState, Suspense, lazy } from "react";
import { useSelector } from "react-redux";

import { Routes, Route, Link, useLocation, useNavigate } from "react-router-dom";
const Login = lazy(() => import("./Login.jsx"));
const Register = lazy(() => import("./Registration.jsx"));
const PhoneVerification = lazy(() => import("./PhoneVerification.jsx"));
const Password = lazy(() => import("./Password.jsx"));
const EzWelcome = lazy(() => import("./EzWelcomePage.jsx"));
// const SetEmail = lazy(() => import("./SetEmail.jsx"));
const ConfirmEmailOTP = lazy(() => import("./ConfirmEmailOTP.jsx"));
const WhyHere = lazy(() => import("./WhyHere.jsx"));
const ProfileCategory = lazy(() => import("./ProfileCategory.jsx"));
const Birthday = lazy(() => import("./Birthday.jsx"));
const Gender = lazy(() => import("./Gender.jsx"));
const ProfileDetails = lazy(() => import("./ProfileDetails.jsx"));

import Loader from "../../components/Loader/Loader.jsx";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { AiFillLinkedin } from "react-icons/ai";
import ezLogo from "../../assets/final logoHeader.png";
import { useDispatch } from "react-redux";
import { clearErrors, loadUser } from "../../actions/userActions.js";
import { AUTH_URI } from "../../services/helper.js";
import { Toaster } from "react-hot-toast";

const User = () => {
  const navigate = useNavigate();
  const { isLoading, isAuthenticated, error } = useSelector(state => state.user);
  const [ezDarkTheme, setezDarkTheme] = useState(false);

  const location = useLocation();
  const { pathname } = location;

  const [isClickLogin, setIsClickLogin] = useState(true);
  const [isClickRegister, setIsClickRegister] = useState(false);

  const handleGoogleAuth = () => {
    localStorage.setItem("remember", 'true');
    const authUrl = `${AUTH_URI}/google`;
    window.location.href = authUrl;
  };

  const handleLinkedInAuth = () => {
    localStorage.setItem("remember", 'true');
    const authUrl = `${AUTH_URI}/linkedin`;
    window.location.href = authUrl;
  };

  const dispatch = useDispatch();
  const urlParams = new URLSearchParams(window.location.search);
  const authType = urlParams.get('type');
  const userToken = urlParams.get('response');
  const [authToken, setAuthToken] = useState("");
  useEffect(() => {
    if (userToken) {
      setAuthToken(JSON.stringify(userToken));
      localStorage.setItem("auth_token", JSON.stringify(userToken));
    }
  }, [userToken]);
  useEffect(() => {
    if (authType) {
      if (authToken !== '') {
        dispatch(loadUser());
      }
      if (authType === "login") {
        window.location.href = "/main";
      }
      else if (authType === "register") {
        window.location.href = "welcometoez";
      }
    }
  }, [authToken, isAuthenticated, authType]);

  useEffect(() => {
    if (pathname === "/user/login") {
      setIsClickLogin(true);
      setIsClickRegister(false);
      navigate("/user/login");
    }
    else if (pathname === "/user/register") {
      setIsClickLogin(false);
      setIsClickRegister(true);
      navigate("/user/register");
    }
  }, [pathname]);

  useEffect(() => {
    if (error) {
      dispatch(clearErrors());
    }
  }, [error]);

  return (
    <>
      <Toaster toastOptions={{ duration: 5000 }} />
      <div
        className={` ${!ezDarkTheme ? "bg-white" : "bg-[#020a06]"}`}
        style={{ height: "100vh" }}
      >
        <div className="w-full  flex flex-col lg:flex-row justify-start p-0 lg:py-2 h-[100vh] overflow-y-auto">
          <div className="w-[100%] lg:w-[50%] lg:px-14 xl:px-24  flex justify-center items-center ">
            <span
              onClick={() => setezDarkTheme(!ezDarkTheme)}
              className="absolute top-[10px] right-[10px] cursor-pointer h-10 w-10 bg-slate-800 flex items-center justify-center rounded text-white text-[20px] font-bold"
            >
              {!ezDarkTheme ? <MdDarkMode /> : <MdLightMode color="yellow" />}
            </span>
            <img
              src="https://res.cloudinary.com/ds6spmr71/image/upload/v1682998359/loginjinn_cykqge.svg"
              alt="jinn"
              className="hidden md:block w-[300px] lg:w-[500px]"
            />
          </div>
          <div className="w-[100%] lg:w-[50%] px-4 lg:px-14 xl:px-32 mt-14   lg:border-l-2 border-gray-300 overflow-y-auto">
            <div className={`rounded-xl   ${!ezDarkTheme ? "shadow-lg" : "shadow shadow-slate-800 border-t-2 border-slate-800"} flex flex-col items-center p-1 md:p-4`}>

              {pathname === "/user/login" || pathname === "/user/register" ? (
                <>

                  <img src={ezLogo} alt="logo" className="h-24  " />

                  <h3
                    className={`text-3xl ${!ezDarkTheme ? "text-[#000]" : "text-[#f2efef]"
                      } font-extrabold mt-8`}
                  >
                    Welcome to eZ !
                  </h3>

                  <p
                    className={`w-[90%] sm:w-[75%] md:w-[100%] text-center mt-5 ${!ezDarkTheme ? "text-[#787575]" : "text-[#b8b1b1]"
                      } text-[14px] sm:text-[16px] font-normal`}
                  >
                    Join India&apos;s largest growing Networking Community and 1st
                    Service Marketplace.
                  </p>

                  {/* Login & Register Nav Links */}

                  <div className="mt-8 w-[100%] flex flex-row gap-2 justify-around px-4 md:px-0">
                    <Link
                      to="/user/login"
                      className={`no-underline w-full text-lg  py-2 rounded-[10px] text-center font-bold ${isClickLogin
                        ? "text-[#fff] bg-[#32AF53] hover:bg-[#289739]"
                        : "text-[#054E10] bg-[#ebe8e8] hover:bg-[#c4c7c5]"
                        } border-2 border-transparent border-solid duration-300`}
                      onClick={() => {
                        setIsClickLogin(true);
                        setIsClickRegister(false);
                      }}
                    >
                      Log In
                    </Link>
                    <Link
                      to="/user/register"
                      className={`no-underline w-full text-lg  py-2 rounded-[10px] text-center font-bold ${isClickRegister
                        ? "text-[#fff] bg-[#32AF53] hover:bg-[#32AF53]"
                        : "text-[#054E10] bg-[#ebe8e8] hover:bg-[#c4c7c5]"
                        } border-2 border-transparent border-solid duration-300`}
                      onClick={() => {
                        setIsClickLogin(false);
                        setIsClickRegister(true);
                      }}
                    >
                      Sign Up
                    </Link>
                  </div>
                </>
              ) : null}

              <Routes>
                <Route
                  exact
                  path="/login"
                  element={
                    <Suspense fallback={<Loader />}>
                      <Login theme={ezDarkTheme} />
                    </Suspense>
                  }
                />
                <Route
                  path="/register"
                  element={
                    <Suspense fallback={<Loader />}>
                      <Register theme={ezDarkTheme} />
                    </Suspense>
                  }
                />

                <Route
                  path="/phoneverify"
                  element={
                    <Suspense fallback={<Loader />}>
                      <PhoneVerification theme={ezDarkTheme} />
                    </Suspense>
                  }
                />
                <Route
                  path="/confirmOtp"
                  element={
                    <Suspense fallback={<Loader />}>
                      <ConfirmEmailOTP theme={ezDarkTheme} />
                    </Suspense>
                  }
                />
                <Route
                  path="/setpassword"
                  element={
                    <Suspense fallback={<Loader />}>
                      <Password theme={ezDarkTheme} />
                    </Suspense>
                  }
                />
                <Route
                  path="/welcometoez"
                  element={
                    <Suspense fallback={<Loader />}>
                      <EzWelcome theme={ezDarkTheme} />
                    </Suspense>
                  }
                />
                {/* <Route
                  path="/setyouremail"
                  element={
                    <Suspense fallback={<Loader />}>
                      <SetEmail theme={ezDarkTheme} />
                    </Suspense>
                  }
                /> */}
                <Route
                  path="/whyhere"
                  element={
                    <Suspense fallback={<Loader />}>
                      <WhyHere theme={ezDarkTheme} />
                    </Suspense>
                  }
                />
                <Route
                  path="/profilecategory"
                  element={
                    <Suspense fallback={<Loader />}>
                      <ProfileCategory theme={ezDarkTheme} />
                    </Suspense>
                  }
                />
                <Route
                  path="/birthday"
                  element={
                    <Suspense fallback={<Loader />}>
                      <Birthday theme={ezDarkTheme} />
                    </Suspense>
                  }
                />
                <Route
                  path="/gender"
                  element={
                    <Suspense fallback={<Loader />}>
                      <Gender theme={ezDarkTheme} />
                    </Suspense>
                  }
                />
                <Route
                  path="/profiledetails"
                  element={
                    <Suspense fallback={<Loader />}>
                      <ProfileDetails theme={ezDarkTheme} />
                    </Suspense>
                  }
                />

              </Routes>

              {/* social login */}
              {pathname === "/user/login" || pathname === "/user/register" ? (
                // <div className=" my-2 lg:my-0 w-[100%] md:w-[50%]  lg:w-[100%] flex flex-wrap items-center justify-center pt-5 border-solid border-gray-300 px-4 md:px-0 mb-6">
                <div className="my-2 lg:my-0 flex flex-wrap items-center justify-center flex-col pt-5 border-solid border-gray-300 px-4 md:px-0 mb-6">
                  <div className="grid grid-cols-3 gap-4 items-center justify-center">
                    <div className="h-[2px] bg-slate-400"></div>
                    <p
                      className={`w-full text-lg  text-center ${!ezDarkTheme ? "text-[#8d8b8b]" : "text-[#c7c4c4]"
                        } font-semibold `}
                    >
                      or continue with
                    </p>
                    <div className="h-[2px]  bg-slate-400"></div>
                  </div>
                  <div className="flex items-center gap-4 mt-2 justify-center">
                    <FcGoogle size={33} onClick={handleGoogleAuth} className="cursor-pointer" />
                    <AiFillLinkedin size={33} fill="blue" onClick={handleLinkedInAuth} className="cursor-pointer" />
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default User;

{/* or&nbsp;continue&nbsp;with */ }
{/* <Link to={"/loginfacebook"} className="flex w-50 items-center justify-center p-2 text-white" >
      <FaFacebook className={`text-3xl cursor-pointer fill-blue-700 ${!ezDarkTheme ? "text-[#020a06]" : "text-white"}`}/>
</Link> */}
