import { useEffect, useState } from "react";

// react router imports
import { Link, useNavigate } from "react-router-dom";

// Firebase imports
import { auth } from "./utils/firebase.config.js";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

// Third party library
import { Toaster, toast } from "react-hot-toast";
import { ThreeDots } from "react-loader-spinner";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useDispatch, useSelector } from "react-redux";
import { clearUserExist, userAlreadyExist } from "../../actions/userActions";

import "./style/phoneinput.css";

// eslint-disable-next-line react/prop-types
const Registration = ({ theme }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isExist, error } = useSelector((state) => state.user);

  const [loading, setLoading] = useState(false);

  const [phone, setPhone] = useState("");
  const [rawPhone, setRawPhone] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [countryCode, setCountryCode] = useState("");

  const formData = {};

  // phone input handler
  const phoneHandler = (phone, country) => {
    setPhone(phone);
    setCountryCode(country.dialCode);

    const rawPh = phone.replace(country.dialCode, "");

    setRawPhone(rawPh);
  };

  // console.log(phone, rawPhone);
  // 447933845284

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const onCaptchaVerify = () => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        "recaptcha-container",
        {
          size: "invisible",
          // eslint-disable-next-line no-unused-vars
          callback: (response) => {
            formSubmitHandler();
          },
          "expired-callback": () => {},
        },
        auth
      );
    }
  };

  // Form Submit Handler
  const formSubmitHandler = (e) => {
    e.preventDefault();

    dispatch(userAlreadyExist(rawPhone));

    // console.log(phone, rawPhone);

    setLoading(true);
  };

  useEffect(() => {
    let notRenderOnce = false;

    if (error && error !== null) {
      setLoading(false);
      toast.error(error);
      dispatch(clearUserExist());
    }

    if (isExist === false && notRenderOnce === false) {
      onCaptchaVerify();
      const appVerifier = window.recaptchaVerifier;

      signInWithPhoneNumber(auth, `+${phone}`, appVerifier)
        .then((confirmationResult) => {
          setLoading(false);
          window.confirmationResult = confirmationResult;

          // storing temporary data
          formData["firstName"] = firstName;
          formData["lastName"] = lastName;
          formData["phone"] = rawPhone;
          formData["countryCode"] = countryCode;

          localStorage.setItem("userTempData", JSON.stringify(formData));
          localStorage.setItem("remember", 'true');

          navigate(`/user/phoneverify`);
        })
        .catch((error) => {
          // console.log(error);
          setLoading(false);
          toast.error("Something went wrong!");
        });
    }

    return () => {
      notRenderOnce = true;
    };
    // console.log(isExist);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, isExist, navigate, error, onCaptchaVerify]);
  return (
    <>
      <Toaster toastOptions={{ duration: 1000 }} />
      <div id="recaptcha-container"></div>
      <form
        className="lg:my-0 w-[90%] md:w-[50%] lg:w-[100%]"
        onSubmit={formSubmitHandler}
        encType="multipart/form-data"
      >
        <div className="w-[100%] flex flex-row justify-between  my-3 mt-8">
          <div className="w-full md:w-6/12 pr-1 md:pr-1">
            <input
              required
              type="text"
              placeholder="First Name"
              name="firstName"
              autoComplete="fname"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full text-sm text-[#8C8787] placeholder:text-[#8C8787] rounded-[10px] focus:border-[#2587e3] outline-none border-2 border-gray-400 border-solid  px-5 py-3 "
            />
          </div>
          <div className="w-full md:w-6/12 pl-1 md:pl-1">
            <input
              required
              type="text"
              placeholder="Last Name"
              name="lastName"
              autoComplete="lname"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full text-sm text-[#8C8787] placeholder:text-[#8C8787] focus:border-[#2587e3] outline-none border-2 border-gray-400 border-solid rounded-[10px] px-5 py-3 "
            />
          </div>
        </div>

        <div className="w-[100%] flex flex-col justify-start  my-3 mt-5">
          {/* <input
            required
            type="number"
            placeholder="Mobile Number"
            name="phone"
            value={formdata.phone}
            onChange={onInputChangeHandler}
            className="w-[100%] text-sm text-[#8C8787] placeholder:text-[#8C8787] focus:border-[#2587e3] outline-none border-2 border-gray-400 border-solid rounded px-3 py-3 "
          /> */}
          <PhoneInput
            country={"in"}
            value={phone}
            inputProps={{
              autoComplete: "rawphone",
            }}
            onChange={phoneHandler}
            placeholder="Phone Number"
            className="w-[100%] text-sm text-[#8C8787] placeholder:text-[#8C8787] rounded focus:border-[#2587e3] outline-none border-2 border-gray-400 border-solid "
          />
        </div>

        <button
          className="w-[100%] text-xl py-2  bg-green-500 hover:bg-[#32AF53] text-[#fff] rounded  my-3 mt-4"
          type="submit"
        >
          {loading ? (
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
            "Continue"
          )}
        </button>

        <p
          className={`my-3  w-[100%] ${
            !theme ? "text-black" : "text-white"
          } text-center text-sm font-semibold`}
        >
          By joining, you agree to Ezage’s{" "}
          <Link
            to="/terms"
            className={`${
              !theme ? "text-[#054E10]" : "text-[#3db34f]"
            } underline`}
          >
            Terms of Service{" "}
          </Link>
        </p>
      </form>
    </>
  );
};

export default Registration;
