import React from 'react';
import "../IndividualDashboard.css";
import { FaRegEye, FaChevronCircleRight } from "react-icons/fa";
import ezer from "../../../../assets/indiDashboard/mastercard.png";
import mastercard from "../../../../assets/indiDashboard/mastercard.png";
import { Link } from 'react-router-dom';

function PopularEzer() {
  return (
    <>
      <h1 className="pt-10 md:text-5xl text-4xl font-semibold">Popular Professional eZers</h1>

      <div className="flex popularEzer items-center overflow-x-auto md:p-3 p-2 gap-5">
        {[
          { name: "Pathikrit Pal", profession: "Data Scientist" },
          { name: "Kashish Malhotra", profession: "Business Consultant" },
          { name: "Md Faizan Arbani", profession: "Career Coach" },
        ].map((data, index) => (
          <div
            key={index}
            className="min-w-[250px] md:min-w-[300px] flex flex-col items-center rounded-xl p-4 backdrop-blur border"
          >
            <div className="w-full shadower rounded-[10px] overflow-hidden">
              {/* ezer */}
              <img
                src={ezer}
                className="aspect-square w-full bg-cover bg-center"
                alt=""
              />
            </div>
            <div className="w-[50%] p-4">
              <img
                src={mastercard}
                className="w-full h-full bg-center aspect-auto"
                alt=""
              />
            </div>
            <div className="flex flex-col items-center p-3">
              <h3 className="text-xl md:text-2xl font-bold">
                {data.name}
              </h3>
              <h2 className="md:text-2xl font-normal">
                {data.profession}
              </h2>
            </div>
            <button className="p-2.5 flex gap-2 items-center bg-green-700 rounded-[10px] text-white">
              <FaRegEye />
              View Profile
            </button>
          </div>
        ))}
      </div>
    </>
  )
}

export default PopularEzer
