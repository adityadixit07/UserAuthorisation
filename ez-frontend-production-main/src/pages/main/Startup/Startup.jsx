import "./Startup.css";
// import Navbar from "../../../components/Navbar/Navbar";
import Discussion from "./discussion";
// import ImageSlider from "../../../components/ImageSlider/ImageSlider";
import LowerNavbar from "../../../components/Navbar/LowerNavbar";
// import I from "../../../assets/";
import { FaGlobeAmericas } from "react-icons/fa";
import { MdPeopleAlt } from "react-icons/md";
import { AiOutlineDownCircle, AiFillCompass } from "react-icons/ai";
import { IoIosAddCircle } from "react-icons/io";
// import { BsThreeDots } from "react-icons/bs";
// import Popups from "./popUps";
import "react-multi-carousel/lib/styles.css";
// import Discussion from "./discussion";
import BlogsArticle from "./Blogs&Article";
import { Link } from "react-router-dom";

const Startup = () => {
  return (
    <div>
      <div className="flex flex-wrap md:flex-nowrap py-6 md:py-12 justify-between px-2 md:px-5 lg:px-28">
        <div className="w-full md:w-8/12 p-3">
          <div className="w-full">
            <h1 className="text-[#18481a] flex flex-row leading-10 font-[500] md:font-[900] text-[24px] md:text-[50px] mb-0">
              Welcome to,
            </h1>
            <h1 className="text-[#18481a] mt-0 flex items-center flex-row font-[500] md:font-[900] text-[28px] md:text-[55px]  gap-3">
              <img
                src="https://res.cloudinary.com/ds6spmr71/image/upload/v1682998352/ezcircle_nmn6bt.png"
                alt="ez icon"
                className="h-8 w-8 md:h-10 md:w-10"
              />
              Startup Community
            </h1>
          </div>
          <div className="w-full my-2 md:my-3">
            <p className="flex justify-center md:desc w-full md:w-8/12  md:text-[16px] leading-[21px]">
              Connect with the community of fellow Founders, Potential Investors
              Talent Pool, Ecosystem Enablers.
            </p>
          </div>
          <div className="flex flex-col gap-3 mt-3 md:mt-0">
            <h5 className="flex gap-2 md:gap-4 ">
              <FaGlobeAmericas
                className="fill-[#054E10] max-[412px]:h-[19px] w-[19px]"
                size={24}
              />{" "}
              Public
            </h5>
            <h5 className="flex gap-2 md:gap-4">
              <MdPeopleAlt className="fill-[#054E10]" size={24} />
              504.2k Members{" "}
            </h5>
          </div>
          <div className="mb-2 gap-3 flex flex-row mt-5 overflow-auto">
            <Link
              to={"/ezstartup"}
              className="bg-green-600 hover:bg-green-500 p-2 px-3 text-white font-semibold rounded flex items-center gap-2 text-sm md:text-base"
            >
              Joined
              <AiOutlineDownCircle size={20} />
            </Link>
            <Link
              to={"/ezstartup"}
              className="bg-green-600 hover:bg-green-500 p-2 px-3 text-white font-semibold rounded flex items-center gap-2 text-sm md:text-base"
            >
              Invite
              <IoIosAddCircle size={20} />
            </Link>
            <Link
              to={"/ezstartup"}
              className="bg-green-600 hover:bg-green-500 p-2 px-3 text-white font-semibold rounded flex items-center gap-2 text-sm md:text-base"
            >
              Discover
              <AiFillCompass size={20} />
            </Link>
          </div>
        </div>
        <div className="w-full lg:flex lg:w-4/12 ">
          <img
            src={`https://res.cloudinary.com/ds6spmr71/image/upload/v1685652751/605b24fa4b51ba076ed6580e_54337-startup_vru8ef.gif`}
            alt="EZ One App"
            className="w-full h-64 md:h-auto"
          />
        </div>
      </div>

      <LowerNavbar />

      <div className="w-full lg:px-16">
        <BlogsArticle />
        <Discussion />
      </div>
    </div>
  );
};

export default Startup;
