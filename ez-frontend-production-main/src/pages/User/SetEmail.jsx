import { useState, useEffect } from "react";

import PasswordCSS from "./style/password.module.css";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loadUser, verifyEmail } from "../../actions/userActions";
import { Toaster, toast } from "react-hot-toast";
import Loader from "../../components/Loader/Loader.jsx";
import { ThreeDots } from "react-loader-spinner";

// eslint-disable-next-line react/prop-types
const SetEmail = ({ theme }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error, user, isOTPSent, isLoading } = useSelector(
    (state) => state.user
  );

  // const {error, isAuthenticated} = useSelector((state)=>state.user);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const emailSubmitHandler = (e) => {
    setLoading(true);
    e.preventDefault();

    if (!(user.email === email)) {
      dispatch(verifyEmail({ email }));
      localStorage.setItem("email", email);
    } else {
      setLoading(false);
      toast.error("Your email address is already verified");
    }
  };

  useEffect(() => {
    dispatch(loadUser());

    if (error) {
      setLoading(false);
      toast.error("Error Ocurred!");
    }

    if (isOTPSent) {
      navigate("/user/confirmOtp");
    }

    // if (isAuthenticated === false) {
    //   navigate("/user/login");
    // }
    // if (user.isEmailVerified) {
    //   setLoading(false);
    //   navigate("/birthday");
    // }
  }, [dispatch, error, isOTPSent, navigate]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Toaster toastOptions={{ duration: 3000 }} />

          <div
            className={`w-full px-4 flex flex-col items-center justify-center ${
              !theme ? "text-black" : "text-white"
            } h-[100vh]`}
          >
            <p className="text-[35px] leading-[36px] text-center  mt-[20px] ">
              Set Your Email Address
            </p>
            <p className=" mt-[34px] text-center px-[8px]  ">
              Please provide us your email address to provide you personalized
              content and recommendations & Communication and updates
            </p>

            <form
              onSubmit={emailSubmitHandler}
              className={`mt-8 ${PasswordCSS.password_form}`}
            >
              <div className="w-full">
                <input
                  required
                  type="email"
                  name="email"
                  value={email}
                  placeholder="example@abc.com"
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full"
                />
                {/* <p className={`mt-1 text-end  text-xs ${isError?"text-red-600":"text-green-600"}`}>{customError}</p> */}
              </div>
              <div className="w-full mt-8">
                <button
                  type="submit"
                  className="bg-[#3abb7d] w-full p-2 rounded border-0  hover:bg-[#1a9d5e] text-white"
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
              </div>
              <p className=" mt-[34px] text-center px-[4px]  ">
                Note: If you do not see email in you inbox, then check the spam
                folder
              </p>
            </form>
          </div>
        </>
      )}
    </>
  );
};

export default SetEmail;
