import { useEffect, useState } from "react";

import OTPInput, { ResendOTP } from "otp-input-react";
import { Toaster, toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import PhoneVerifyCSS from "./style/Registration.module.css";

const PhoneVerification = () => {
  const [OTP, setOTP] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const userData = JSON.parse(localStorage.getItem("userTempData"));

  const onOTPVerify = () => {
    setLoading(true);

    window.confirmationResult
      .confirm(OTP)
      .then(async (result) => {
        setLoading(false);

        setTimeout(() => {
          toast.success("Phone Number is verified successfully");
        }, 2000);

        navigate("/user/setpassword");
      })
      .catch((error) => {
        setLoading(false);
        toast.error("Phone Number cannot be verified");
      });
  };

  return (
    userData && (
      <div className="w-full flex flex-col items-center justify-center h-[100vh]">
        <Toaster toastOptions={{ duration: 3000 }} />
        <img
          src="https://res.cloudinary.com/ds6spmr71/image/upload/v1682998352/ezcircle_nmn6bt.png"
          alt="logo"
          className=" w-[60px] mt-10"
        />
        <h3 className="text-2xl text-[#000] text-start font-bold my-6">
          Verify Your Mobile Number
        </h3>

        <p className="w-full text-center my-3">
          An OTP has been sent to your phone number (+
          {`${userData.countryCode}-${userData.phone}`}) through sms.
        </p>

        <div className="w-full flex justify-center  my-4">
          <OTPInput
            value={OTP}
            className={`${PhoneVerifyCSS.ez_otp}`}
            onChange={setOTP}
            autoFocus
            OTPLength={6}
            otpType="number"
            disbaled={false}
          />
        </div>
        <div className="w-full mt-6">
          <ResendOTP
            onResendClick={() => console.log("Resend clicked")}
            className={`${PhoneVerifyCSS.resendotp}`}
          />
        </div>

        <button
          className="w-[100%] text-lg py-2 bg-[#18d872] text-[#fff] rounded-lg  mt-5 font-semibold"
          onClick={onOTPVerify}
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
            "Verify"
          )}
        </button>

        <p className=" my-3  w-[100%] text-[#000] text-center text-sm font-semibold ">
          By joining, you agree to Ezage’s{" "}
          <Link to="/terms" className="text-[#054E10] underline">
            Terms of Service
          </Link>
        </p>
      </div>
    )
  );
};

export default PhoneVerification;
