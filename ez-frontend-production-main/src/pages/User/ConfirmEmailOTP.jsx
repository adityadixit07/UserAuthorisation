import { useSelector } from "react-redux";
import { useState } from "react";

// third party packages
import OTPInput, { ResendOTP } from "otp-input-react";
import { Toaster, toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";

// Firebase imports
// import { auth } from "./utils/firebase.config";
// import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

// Custom CSS
import PhoneVerifyCSS from "./style/Registration.module.css";
import { useDispatch } from "react-redux";
import { confirmEmail } from "../../actions/userActions";
import { useEffect } from "react";
import Loading from "../../components/Loader/Loader";

const ConfirmOTP = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoading, isUpdated, error } = useSelector((state) => state.user);
  // set OTP
  const [OTP, setOTP] = useState("");
  const [loading, setLoading] = useState(false);

  const email = localStorage.getItem("email");

  const onOTPVerify = () => {
    // console.log(email, OTP);
    setLoading(true);
    dispatch(confirmEmail(OTP, email));
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      setLoading(false);
    }

    if (isUpdated) {
      toast.success("Email Verified Successfully");

      setTimeout(() => {
        navigate("/main/profile");
      }, 2000);
    }
  }, [error, isUpdated, navigate]);

  return (
    <div className="w-full flex flex-col items-center justify-center h-[100vh]">
      <Toaster toastOptions={{ duration: 3000 }} />
      <img
        src="https://res.cloudinary.com/ds6spmr71/image/upload/v1682998352/ezcircle_nmn6bt.png"
        alt="logo"
        className=" w-[60px] mt-10"
      />
      <h3 className="text-2xl text-[#000] text-start font-bold my-6">
        Verify Your Email Address
      </h3>

      {isLoading ? (
        <Loading />
      ) : (
        <>
          <p className="w-full text-center my-3">
            An OTP has been sent to your Email Address
          </p>

          <div className="w-full flex justify-center  my-4">
            <OTPInput
              value={OTP}
              className={`${PhoneVerifyCSS.ez_otp}`}
              onChange={setOTP}
              autoFocus
              OTPLength={4}
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
        </>
      )}
    </div>
  );
};

export default ConfirmOTP;
