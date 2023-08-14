import { useState, useEffect } from "react";

// React Icons Imports
import { HiEnvelope } from "react-icons/hi2";
import { AiFillLock } from "react-icons/ai";

// React Third party Packages
import { Link, useNavigate } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";
import { ThreeDots } from "react-loader-spinner";

// React Redux Imports
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, loadUser, userLogin } from "../../actions/userActions";

// CSS
import "./style/Login.css";

// eslint-disable-next-line react/prop-types
const Login = ({ theme }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { error, isLoading, isLoggedIn, isAuthenticated, user } = useSelector(
    (state) => state.user
  );

  const [validID, setvalidID] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(true);
  const [loginLoading, setLoginLoading] = useState(false);

  const rememberHistory = localStorage.getItem("remember");
  useEffect(() => {
    if (rememberHistory === 'true') {
      setRemember(rememberHistory === 'true');
    }
  }, [rememberHistory]);

  const loginSubmit = (e) => {
    e.preventDefault();

    dispatch(userLogin(validID, password, setLoginLoading, remember));
  };

  useEffect(() => {
    if (error && error !== null) {
      toast.error(error);
      dispatch(clearErrors());
    }
  }, [error]);

  const authToken = localStorage.getItem("auth_token");
  useEffect(() => {
    if ((isLoggedIn || rememberHistory === 'true') && authToken !== '') {
      dispatch(loadUser());
    }
  }, [authToken]);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/main");
    }
  }, [isAuthenticated]);

  return (
    <>
      <form
        onSubmit={loginSubmit}
        className="mt-8 w-[100%] md:w-[50%] lg:w-[100%] px-4 md:px-0"
        style={{}}
      >
        <div className="  flex flex-row  border-2 rounded-[10px] border-[#b9e3b8] border-solid">
          <HiEnvelope className="text-2xl m-1 text-[#1b5624] rounded-lg bg-[#b9e3b840] box-content py-[5px] px-2" />
          <input
            type="text"
            placeholder="Email / Phone Number / Username"
            className="w-[100%] text-base text-[#2c2f2c] rounded-[10px] placeholder:text-[#8C8787] px-5 focus:outline-none"
            value={validID}
            autoComplete="validID"
            onChange={(e) => setvalidID(e.target.value)}
          />
        </div>

        <div className=" my-5 flex flex-row border-2 border-[#b9e3b8] rounded-[10px]">
          <AiFillLock className="text-2xl m-1 text-[#18481f] rounded-lg bg-[#b9e3b840] box-content py-[5px] px-2" />
          <input
            type="password"
            placeholder="Password"
            className="w-[100%] text-base text-[#2c2f2c] rounded-[10px] placeholder:text-[#8C8787] px-5 focus:outline-none"
            value={password}
            autoComplete="new-password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="flex justify-between">
          <div className="w-full flex gap-2">
            <input
              id="remember"
              type="checkbox"
              className="cursor-pointer scale-125"
              checked={remember}
              value={remember}
              onChange={() => setRemember(prev => !prev)}
            />
            <label htmlFor="remember" className="text-md font-semibold text-[#297c35] cursor-pointer">
              Remember me
            </label>
          </div>
          <div className={`w-[100%] text-end mt-0 ${!theme ? "text-[#252424]" : "text-[#d0d1d0]"}`}>
            <Link
              to={"/forgotpassword"}
              className="text-end text-md font-semibold hover:underline no-underline text-[#297c35]"
            >
              Forgot password?&nbsp;
            </Link>
          </div>
        </div>

        <button
          className="w-[100%] text-xl font-medium py-2 bg-green-500 hover:bg-[#32AF53] text-white rounded mt-4"
          type="submit"
        >
          {loginLoading || isLoading ? (
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
      </form>
    </>
  );
};

export default Login;
