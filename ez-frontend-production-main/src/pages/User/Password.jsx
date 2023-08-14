import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";
import { ThreeDots } from "react-loader-spinner";
import Loading from "../../components/Loader/Loader.jsx";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

// React Redux
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, userRegister } from "../../actions/userActions";

// Custom CSS
import PasswordCSS from "./style/password.module.css";

// eslint-disable-next-line react/prop-types
const Password = ({ theme }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { error, isAuthenticated, isLoading } = useSelector(
    (state) => state.user
  );

  const [loading, setLoading] = useState(false);
  const [isPError, setIsPError] = useState(false);
  const [customError, setCustomError] = useState("");
  const [isCError, setIsCError] = useState(false);
  const [cError, setCError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showCPassword, setShowCPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");

  const PASSWORD_REGEX =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;

  const passwordChange = (e) => {
    setPassword(e.target.value);

    if (e.target.value.length === 0) {
      setIsPError(false);
      setCustomError("");
    }
    else if (e.target.value.length < 8) {
      setIsPError(true);
      setCustomError("Password should be at least 8 characters long");
    }
    else if (!PASSWORD_REGEX.test(e.target.value)) {
      setIsPError(true);
      setCustomError("Password doesn't match the required format");
    }
    else {
      setIsPError(false);
      setCustomError("Strong Password");
    }
  };

  const confirmPassword = (e) => {
    const newValue = e.target.value;
    setCPassword(newValue);

    if (newValue.length === 0) {
      setIsCError(false);
      setCError("");
    }
    else if (newValue !== password) {
      setIsCError(true);
      setCError("Password does not match!");
    }
    else if (newValue === password) {
      setIsCError(false);
      setCError("Password matched");
    }
  };

  const userData = JSON.parse(localStorage.getItem("userTempData"));
  const passwordHandler = (e) => {
    e.preventDefault();

    if (password !== cPassword) {
      return toast.error("Password does not match!");
    }

    setLoading(true);
    userData["password"] = password;
    userData["isVerified"] = true;

    dispatch(userRegister(userData));
  };

  useEffect(() => {
    if (error) {
      dispatch(clearErrors());
    }
  }, [error]);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/user/welcometoez");
    }
  }, [isAuthenticated]);

  return (
    userData && (
      <>
        <Toaster toastOptions={{ duration: 3000 }} />

        <div
          className={`w-full flex flex-col items-center justify-center h-[100vh] px-4 ${!theme ? "text-black" : "text-white"
            }`}
        >
          <p className="text-[35px] leading-[36px] text-center  mt-[20px] ">
            Set your Password
          </p>
          <p className=" mt-[34px] text-center px-[10px]  ">
            We recommend opting for a password that’s at least 8 characters
            long comprising of capital & small letters with special characters. eg:{" "}
            <strong className="text-[#3abb7d] underline">AbXYZc@1234</strong>
          </p>

          <form
            onSubmit={passwordHandler}
            className={`mt-8 ${PasswordCSS.password_form}`}
          >
            <div className="w-full">
              <div className="relative">
                <input
                  required
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={passwordChange}
                  className="w-full"
                />
                <div className="cursor-pointer absolute top-0 right-3 h-full flex items-center" onClick={() => setShowPassword(prev => !prev)}>
                  {showPassword
                    ? <AiFillEyeInvisible size={25} className="text-green-600" />
                    : <AiFillEye size={25} className="text-green-600" />
                  }
                </div>
              </div>
              <p
                className={`mt-1 text-end  text-xs ${isPError ? "text-red-600" : "text-green-600"
                  }`}
              >
                {customError}
              </p>
            </div>
            <div className="w-full mt-5">
              <div className="relative">
                <input
                  required
                  type={showCPassword ? "text" : "password"}
                  name="c_password"
                  placeholder="Confirm password"
                  value={cPassword}
                  onChange={confirmPassword}
                  className="w-full"
                />
                <div className="cursor-pointer absolute top-0 right-3 h-full flex items-center" onClick={() => setShowCPassword(prev => !prev)}>
                  {showCPassword
                    ? <AiFillEyeInvisible size={25} className="text-green-600" />
                    : <AiFillEye size={25} className="text-green-600" />
                  }
                </div>
              </div>
              <p
                className={`mt-1 text-end text-xs ${isCError ? "text-red-600" : "text-green-600"
                  }`}
              >
                {cError}
              </p>
            </div>
            <div className="w-full mt-10">
              <button
                type="submit"
                className="bg-[#3abb7d] w-full p-2 rounded border-0 text-white hover:bg-[#1a9d5e]"
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
            </div>
          </form>
        </div>
      </>
    )
  );
};

export default Password;
