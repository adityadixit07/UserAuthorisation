import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


// react icons
import { MdDarkMode, MdLightMode } from "react-icons/md";
// import { useSelector } from "react-redux";

import ezLogo from "../../assets/final logoHeader.png";
import { HiEnvelope, HiPhone } from "react-icons/hi2";
import { ThreeDots } from "react-loader-spinner";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, forgotPassword } from "../../actions/userActions.js";
import { Toaster, toast } from "react-hot-toast";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./style/phoneinput.css";


const ForgotPassword = () => {
  const [ezDarkTheme, setezDarkTheme] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { error, isLoading } = useSelector(state => state.user);

  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [rawPhone, setRawPhone] = useState("");
  const [countryCode, setCountryCode] = useState("");

  const phoneHandler = (phone, country) => {
    if (email !== "") setEmail("");

    setPhone(phone);
    setCountryCode(country.dialCode);

    const rawPh = phone.replace(country.dialCode, "");
    setRawPhone(rawPh);
  };

  const forgotPasswordSubmit = (e) => {
    e.preventDefault();

    if (email !== "") return dispatch(forgotPassword(email));
    else if (rawPhone !== "") return dispatch(forgotPassword(rawPhone, countryCode));
    else return toast.error("Enter valid email or phone to proceed!");
  };

  useEffect(() => {
    if (error && error !== null) {
      //console.log(error);
      toast.error(error);
      dispatch(clearErrors());
    }
  }, [error, navigate, dispatch]);

  return (
    <>
      <Toaster toastOptions={{ duration: 5000 }} />
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
                className={`text-3xl ${!ezDarkTheme ? "text-[#000]" : "text-[#f2efef]"
                  } font-extrabold mt-8`}
              >
                Welcome to eZ !
              </h3>

              <p
                className={`w-[90%] sm:w-[75%] md:w-[100%] text-center mt-5 ${!ezDarkTheme ? "text-[#787575]" : "text-[#b8b1b1]"
                  } text-[14px] sm:text-[16px] font-normal`}
              >
                Please enter your email address or phone number and we will send you a link to reset your password.
              </p>



              <div className="mt-8 w-[100%] flex flex-row gap-2 justify-around px-4 md:px-0">
                <form
                  onSubmit={forgotPasswordSubmit}
                  className="mt-8 w-[100%] md:w-[50%] lg:w-[100%] px-4 md:px-0"
                  style={{ height: "90vh" }}
                >

                  <div className="  flex flex-row  border-2 rounded-[10px] border-[#b9e3b8] border-solid">
                    <HiEnvelope className="text-2xl m-1 text-[#1b5624] rounded-lg bg-[#b9e3b840] box-content py-[5px] px-2" />
                    <input
                      type="text"
                      placeholder="Enter your Email address"
                      className="w-[100%] text-base text-[#2c2f2c] rounded-[3px] border border-l-[#cacaca] placeholder:text-[#8C8787] px-5 focus:outline-none"
                      value={email}
                      onChange={(e) => {
                        if (phone !== "") {
                          setPhone("");
                        }
                        setEmail(e.target.value);
                      }}
                    />
                  </div>

                  <div className="flex items-center justify-between gap-5 w-[100%] h-[80px]">
                    <div className="bg-slate-300 w-full h-[1px]" />
                    <h1 className="text-xl font-extrabold">or</h1>
                    <div className="bg-slate-300 w-full h-[1px]" />
                  </div>

                  <div className=" flex flex-row  border-2 rounded-[10px] border-[#b9e3b8] border-solid">
                    <HiPhone className="text-2xl m-1 text-[#1b5624] rounded-lg bg-[#b9e3b840] box-content py-[5px] px-2" />
                    <PhoneInput
                      country={"in"}
                      value={phone}
                      inputProps={{
                        autoComplete: "rawphone",
                      }}
                      onChange={phoneHandler}
                      placeholder="Enter your Phone number"
                      className="w-[100%] text-base text-[#2c2f2c] rounded-[10px] placeholder:text-[#8C8787] focus:outline-none"
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
    </>
  );
};

export default ForgotPassword;