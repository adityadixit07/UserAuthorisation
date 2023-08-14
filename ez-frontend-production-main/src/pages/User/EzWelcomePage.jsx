import { useEffect } from "react";

import { Link } from "react-router-dom";
import { MdArrowForward } from "react-icons/md";

import { useDispatch, useSelector } from "react-redux";
import { setNewUser } from "../../actions/userActions";
import { Toaster, toast } from "react-hot-toast";
import Loading from "../../components/Loader/Loader.jsx";

const EzWelcome = () => {
  const dispatch = useDispatch();
  const { error, user, isAuthenticated, isLoading } = useSelector(
    (state) => state.user
  );

  useEffect(() => {
    if (isAuthenticated) {
      toast.success("Account created successfully!");
    }
  }, [isAuthenticated]);

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  return (
    <>
      <Toaster toastOptions={{ duration: 4000 }} />

      {isLoading ? <Loading /> : isAuthenticated && (
        <div className="flex flex-col items-center justify-center w-full px-2 h-[100vh] text-black">
          <h1 className=" text-3xl">
            👋Hello, {user?.firstName}
          </h1>
          <p className="text-[38px] leading-[36px] text-center  mt-8 ">
            Welcome to eZ
          </p>
          <p className=" mt-[40px] text-center px-[10px]  text-lg">
            Before moving futher we would like to know more about you, to
            provide you a personalized experince.
          </p>

          <Link
            to={"/user/whyhere"}
            className="p-2 bg-green-400 text-white font-semibold mt-6 rounded px-4 flex justify-center items-center"
            onClick={() => dispatch(setNewUser())}
          >
            Continue &nbsp; <MdArrowForward />
          </Link>
          {/* <Link
            to={"/main"}
            className="text-blue-500 underline mt-3 leading-loose underline-offset-4"
          >
            Skip, proceed to dashboard
          </Link> */}
        </div>
      )}
    </>
  );
};

export default EzWelcome;
