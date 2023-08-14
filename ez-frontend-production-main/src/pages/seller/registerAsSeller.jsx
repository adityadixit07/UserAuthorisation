import "./seller.css";
import { AiFillLinkedin } from "react-icons/ai";
import { CiTimer } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom";
import MultiStepForm from "./MultiStepForm";
import { useEffect } from "react";
import Loader from "../../components/Loader/Loader.jsx";
import Navbar from "../../components/Navbar/Newnav/NewNav";

function RegisterAsSeller({ isLoading, isAuthenticated, user }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      navigate("/user/login");
    }
    if (!isLoading && isAuthenticated && user?.role === "seller") {
      navigate("/seller");
    }
  }, [isLoading, isAuthenticated, user?.role]);

  return (
    <>
      <div className="w-full sticky top-0 z-50 shadow h-[10vh] bg-white">
        <Navbar />
      </div>
      {isLoading && <Loader />}
      <div className="w-full -z-50 mt-8 overflow-x-auto">
        <MultiStepForm active={0} />
      </div>
      <div className="w-full -z-50 flex flex-col p-8 px-2 md:px-24">
        <div className="w-full flex mt-4 flex-col-reverse md:flex-row">
          <div className="flex flex-col gap-[1rem]">
            <h1 className="font-700 text-3xl font-bold md:text-5xl">
              Let&apos;s Begin your jouney with eZ!
            </h1>
            <p className="font-300">
              We&apos;d like to start by asking you a few questions to help
              guide you on your journey of eZ selling
            </p>
          </div>
        </div>
        <div className="w-full flex flex-col mt-6">
          <h1 className="text-2xl font-bold md:text-4xl">
            How would you describe yourself and your professional background ?
          </h1>
          <p className="font-300 mt-2">
            {" "}
            Let your personality shine through as you paint a vivid picture of
            who you are as a professional. Update your Work Experience,
            Educational Details etc. You can always edit later{" "}
          </p>
        </div>
        <div className="w-full flex flex-col mt-10 gap-12 md:flex-row">
          <div className="flex flex-row shadow-xl gap-5 shadow-green-200 items-center justify-center border-t-8 border-green-600 rounded-xl md:w-[400px] h-[200px]">
            <CiTimer size={96} className="fill-green-600" />
            <div className="flex flex-col">
              <Link
                to="/sellerdetails2"
                className="text-2xl text-green-600 font-bold"
              >
                Fill Manually
              </Link>
              <p className="text-xl">[ Typically takes 5 mins] </p>
            </div>
          </div>
          <div className="flex flex-row shadow-xl gap-5 shadow-green-200 items-center justify-center  border-t-8 border-green-600 rounded-xl md:w-[400px] h-[200px]">
            <AiFillLinkedin size={96} className="fill-blue-800" />
            <div className="flex flex-col">
              <h1 className="text-2xl text-green-600 font-bold">
                Import from LinkedIn
              </h1>
              <p className="text-xl text-red-500">Comming Soon.. </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default RegisterAsSeller;
