import { useEffect, useState } from "react";
import {  useNavigate, useParams} from "react-router-dom";


// react icons
import { MdDarkMode, MdLightMode } from "react-icons/md";
// import { useSelector } from "react-redux";

import ezLogo from "../../assets/final logoHeader.png";
import { HiEnvelope } from "react-icons/hi2";
import { ThreeDots } from "react-loader-spinner";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, resetPassword } from "../../actions/userActions.js";
import { toast } from "react-hot-toast";


const ResetPassword = () => {
  const [ezDarkTheme, setezDarkTheme] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();

  const { error, isLoading } = useSelector(
    (state) => state.user
  );

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");


  // console.log(email);

  const resetPasswordSubmit = (e) => {
    e.preventDefault();

    dispatch(resetPassword(password ,confirmPassword, params.token));
    toast.success("Password reset successfully");
    navigate("/user/login");
  };

  useEffect(() => {
    if (error && error !== null) {
      // console.log(error);
      toast.error(error);
      dispatch(clearErrors());
    }
  }, [error, navigate, dispatch]);

  return (
    <div
      className={` ${!ezDarkTheme ? "bg-white" : "bg-[#020a06]"}`}
      style={{ height: "100vh" }}
    >
      <div className="w-full  flex flex-col lg:flex-row justify-start p-0 lg:py-2 h-[100vh] overflow-auto">
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
        <div className="w-[100%] lg:w-[50%] px-4 lg:px-14 xl:px-32  flex flex-col items-center lg:border-l-2 border-gray-300 overflow-y-auto">
            <>
              <img src={ezLogo} alt="logo" className="h-24 mt-14 " />

              <h3
                className={`text-3xl ${
                  !ezDarkTheme ? "text-[#000]" : "text-[#f2efef]"
                } font-extrabold mt-8`}
              >
                Welcome to eZ !
              </h3>

              <p
                className={`w-[90%] sm:w-[75%] md:w-[100%] text-center mt-5 ${
                  !ezDarkTheme ? "text-[#787575]" : "text-[#b8b1b1]"
                } text-[14px] sm:text-[16px] font-normal`}
              >
                 Please enter new password for password reset.
              </p>



              <div className="mt-8 w-[100%] flex flex-row gap-2 justify-around px-4 md:px-0">
              <form
        onSubmit={resetPasswordSubmit}
        className="mt-8 w-[100%] md:w-[50%] lg:w-[100%] px-4 md:px-0"
        style={{ height: "90vh" }}
      >
        <div className="  flex flex-row  border-2 rounded-[10px] border-[#b9e3b8] border-solid">
          <HiEnvelope className="text-2xl m-1 text-[#1b5624] rounded-lg bg-[#b9e3b840] box-content py-[5px] px-2" />
          <input
            type="text"
            placeholder="New Password "
            className="w-[100%] text-base text-[#2c2f2c] rounded-[10px] placeholder:text-[#8C8787] px-5 focus:outline-none"
            value={password}
            autoComplete="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <br />
        <div className="  flex flex-row  border-2 rounded-[10px] border-[#b9e3b8] border-solid">
          <HiEnvelope className="text-2xl m-1 text-[#1b5624] rounded-lg bg-[#b9e3b840] box-content py-[5px] px-2" />
          <input
            type="text"
            placeholder="Confirm Password "
            className="w-[100%] text-base text-[#2c2f2c] rounded-[10px] placeholder:text-[#8C8787] px-5 focus:outline-none"
            value={confirmPassword}
            autoComplete="ConfirmPassword"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        <button
          className="w-[100%] text-xl font-medium py-2 bg-green-500 hover:bg-[#32AF53] text-white rounded mt-6 "
          type="submit"
        >
          {isLoading ? (
            <ThreeDots
              height="30"
              width="30"
              radius="9"
              color="#fff"
              wrapperClassName="loginLoader"
              wrapperStyle={{ justifyContent: "center" }}
              ariaLabel="three-dots-loading"
              visible={true}
            />
          ) : (
            "Reset Password"
          )}
        </button>
      </form>
              </div>
            </>

        </div>
      </div>
    </div>
  );
};

export default ResetPassword;