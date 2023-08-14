import React from "react";
import "./CommunityMapping.css";
import backglobe from "../../Assets/backglobe.png";
import ezlog from "../../Assets/ez-logo/ez_logo.svg";
import { FaPlusCircle } from "react-icons/fa";
// import ez from "../../Assets/ez circle.png";

function CommunityMapping() {
  return (
    <div className="commap">
      <div className="flex flex-col gap-4">
        <p className="comtext">You don't have any Community Mapping yet.</p>
        <div className="comsubtext-container">
          <p className="comsubtext">
            Discover fresh discussions, reviews, jobs on eZ through the
            communities and your network. Find your community.
          </p>
        </div>
      </div>
      <div className="hidden md:block globe-img relative">
        <img src={backglobe} alt="backglobe" className="w-full" />
        <img
          src={ezlog}
          alt=""
          className="absolute top-[15%] left-[15%] invert"
        />
        <FaPlusCircle
          className=" absolute bottom-[30%] right-[20%] fill-[#38E89E] "
          size={20}
        />
      </div>
      {/* <img src={ez} alt="ez" className="ez-img" /> */}
    </div>
  );
}

export default CommunityMapping;
