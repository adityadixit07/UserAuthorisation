import { useEffect, useRef } from "react";
import "./UseSliding.css";
import { CgProfile } from "react-icons/cg";
import { IoPeopleOutline, IoRocketOutline } from "react-icons/io5";
import { BsBoxSeam } from "react-icons/bs";
import { LuStars } from "react-icons/lu";
import { AiOutlineBulb } from "react-icons/ai";
// import TrendingData from "./trending.json";
import jinpic from "../../../assets/ez circle.png";
import Typed from "typed.js";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function UserSliding() {
  const { isUsersFetched, users } = useSelector(state => state.user);

  return (
    <>
      {/* <div className="w-screen relative bg-gray-100"> */}
      <div className="w-screen relative">
        <div className="grid grid-cols-1 md:grid-cols-2 ">
          {/* <div className="md:h-[75vh] md:px-16 md:py-20 flex flex-col md:items-start items-center md:gap-5"> */}
          <div className="md:h-[100vh] md:px-16 md:py-20 flex flex-col md:items-start items-center justify-center md:gap-5">
            <TypingEffect />
            <div className="hidden md:flex flex-col gap-3 px-5 md:px-0 pb-5">
              <div className="flex flex-row gap-5">
                <div className="flex flex-col space-y-4">
                  <p className="flex gap-2 items-center text-lg text-slate-500">
                    <span>
                      <CgProfile />
                    </span>
                    <span>Your Own Customised Profile</span>
                  </p>
                  <p className="flex gap-2 items-center text-lg text-slate-500">
                    <span>
                      <IoRocketOutline />
                    </span>
                    <span>Create Service Listings in a Flash</span>
                  </p>
                  <p className="flex gap-2 items-center text-lg text-slate-500">
                    <span>
                      {" "}
                      <IoPeopleOutline />
                    </span>
                    <span>Conduct 1:1 Consultations</span>
                  </p>
                </div>
                <div className="flex flex-col space-y-4">
                  <p className="flex gap-2 items-center text-lg text-slate-500">
                    <span>
                      <BsBoxSeam />
                    </span>
                    <span>Conduct Workshops / Courses</span>{" "}
                  </p>
                  <p className="flex gap-2 items-center text-lg text-slate-500">
                    <span>
                      <LuStars />
                    </span>
                    <span>Monetize Your Influencing Power</span>
                  </p>
                  <p className="flex gap-2 items-center text-lg text-slate-500">
                    <span>
                      <AiOutlineBulb />
                    </span>
                    <span>0% Commission</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="md:h-[75vh] max-w-full md:py-2 md:px-2 flex md:grid md:grid-cols-2 xl:grid-cols-3 md:gap-10 overflow-hidden"> */}
          {isUsersFetched && (
            <div className="md:h-[100vh] md:px-16 md:py-2 flex md:grid md:grid-cols-2 xl:grid-cols-3 md:gap-10 overflow-hidden">
              <TheSideEffect data={users.slice(0, 5)} />
              <TheSideEffect data={users.slice(5, 10)} />
              <TheSideEffect data={users.slice(10, 15)} />
              <TheSideEffect data={users.slice(0, 5)} />
              <TheSideEffect data={users.slice(5, 10)} />
              <TheSideEffect data={users.slice(10, 15)} />
              <TheSideEffect data={users.slice(0, 5)} />
              <TheSideEffect data={users.slice(5, 10)} />
              <TheSideEffect data={users.slice(10, 15)} />
              <TheSideEffect data={users.slice(0, 5)} />
              <TheSideEffect data={users.slice(5, 10)} />
              <TheSideEffect data={users.slice(10, 15)} />
              <TheSideEffect data={users.slice(0, 5)} />
              <TheSideEffect data={users.slice(5, 10)} />
              <TheSideEffect data={users.slice(10, 15)} />
              <TheSideEffect data={users.slice(0, 5)} />
              <TheSideEffect data={users.slice(5, 10)} />
              <TheSideEffect data={users.slice(10, 15)} />
              <TheSideEffect data={users.slice(0, 5)} />
              <TheSideEffect data={users.slice(5, 10)} />
              <TheSideEffect data={users.slice(10, 15)} />
              <TheSideEffect data={users.slice(0, 5)} />
              <TheSideEffect data={users.slice(5, 10)} />
              <TheSideEffect data={users.slice(10, 15)} />
              <TheSideEffect data={users.slice(0, 5)} />
              <TheSideEffect data={users.slice(5, 10)} />
              <TheSideEffect data={users.slice(10, 15)} />
              <TheSideEffect data={users.slice(0, 5)} />
              <TheSideEffect data={users.slice(5, 10)} />
              <TheSideEffect data={users.slice(10, 15)} />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

function TypingEffect() {
  return (
    <>
      <div className="font-bold m-5 leading-2 text-3xl md:text-4xl xl:text-5xl h-[8vh] md:h-[12vh]">
        <span>Share your Knowledge on{" "}</span>
        <span className="md:hidden"><MyTypedComponent className="text-3xl" /></span>
        <div className="w-full hidden md:flex md:justify-center">
          <MyTypedComponent className="text-3xl md:text-4xl xl:text-6xl" />
        </div>
      </div>
      <p className="text-gray-700 text-xl text-bold px-5 pb-5 md:p-0">
        Whether you are a seasoned professional, a creative <br />
        genius, freelancer or an influencer with a unique voice, <br />
        eZ provides the perfect platform to showcase your <br />
        expertise and offerings.
      </p>
    </>
  );
}

function MyTypedComponent() {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "Entrepreneurship",
        "Growth",
        "Marketing",
        "Branding",
        "Strategy",
        "Product ",
        "Engineering ",
        "Data Analytics ",
        "Development",
        "UI / UX",
        "AI / ML",
        "Market",
        "Research",
      ],
      typeSpeed: 250,
      loop: true,
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return <span className="text-green-500" ref={typedRef} />;
}

function TheSideEffect({ data }) {
  return (
    <>
      <div className="flex h-[20rem] m-2 md:m-0 md:h-auto flex-row md:flex-col z-10 gap-12">
        {data.map((item, i) => {
          return (
            <Link
              to={item?.username ? `/${item?.username}` : "/"}
              key={i}
              className={`${item?.username ? "cursor-pointer" : "cursor-default"} shadowing cardslider hover:bg-white min-w-[230px] rounded-md px-5 py-4 flex flex-col justify-center items-center gap-2`}
            >
              <div className="w-20 h-20 rounded-full">
                <img src={item.avatar?.url ? item.avatar.url : jinpic} alt="" className="bg-cover rounded-full w-full h-full " />
              </div>
              <h1 className="text-center text-base font-semibold w-full overflow-hidden whitespace-nowrap overflow-ellipsis">
                {item.firstName} {item.lastName}
              </h1>
              <h3 className="text-sm text-center text-slate-600">
                {item.username}
              </h3>
              <span className="text-sm text-center text-slate-600">
                {item.profileCategory.jobRoles[0]}
              </span>
            </Link>
          );
        })}
      </div>
    </>
  );
}

export default UserSliding;