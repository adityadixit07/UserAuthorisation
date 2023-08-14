import React, { useState } from "react";
import { AiTwotoneCheckCircle } from "react-icons/ai";
import "./seller.css";
const SellerData = [
  "Professional Info ",
  "Service Offering ",
  "Transaction  ",
  "Tax Info",
  "Payment Details",
  "Agreement ",
  "ID Verification",
];
import LandingNavbar from "../Landing/components/LandingNavbar.jsx";
import { Link } from "react-router-dom";
import MultiStepForm from "./MultiStepForm";

function SellerDetails() {
  const [check, setcheck] = useState(null);
  const [checkW, setcheckW] = useState(null);
  const [head, sethead] = useState([]);

  const handlehead = (index) => {
    const headData = [...head];
    headData.push(index);
    sethead(headData);
  };

  const serviceType = JSON.parse(localStorage.getItem("sellerDetails"));

  const handleSellerExp = () => {
    // console.log(serviceType);
  };

  // const completion=head.reduce((previous,current)=>{
  //     return previous+current
  // },0)
  const completion = (2 / 7) * 100;

  // console.log(head);
  return (
    <>
      <div className="w-full z-50 sticky top-0 shadow">
        <LandingNavbar />
      </div>
      <header className="border-y-2 mt-6 py-2 min flex scrollbar1 justify-around snap-center snap-mandatory my-3 overflow-x-auto snap-x whitespace-nowrap ">
        <MultiStepForm />
      </header>
      <section className="my-8 mx-2 md:mx-28">
        <div className="flex w-full justify-between">
          <div className="flex flex-col gap-5">
            <h2 className="text-5xl font-semibold md:text-start text-center">
              {" "}
              Let's begin your journey with eZ!
            </h2>
            <h5 className="text-base text-center md:text-right font-bold text-slate-500">
              We'd like to start by asking you a few questions to help guide you
              on your journey of eZ selling.
            </h5>
          </div>

          <div className="w-[20%] hidden md:block py-5">
            <div className="w-full bg-black h-3 rounded-full ">
              <div
                className={` bg-green-800 h-3 rounded-full `}
                style={{ width: `${Math.trunc(Number(completion))}%` }}
              ></div>
            </div>
            <p className={` text-xs font-semibold text-slate-600`}>
              completion{" "}
              {Math.trunc(Number(completion)) > 0
                ? Math.trunc(Number(completion))
                : 0}
              %
            </p>
          </div>
        </div>

        <h1 className="text-2xl md:text-4xl font-semibold mt-10 mb-4">
          How would you rate your level of expertise in your field?
        </h1>
        <div className="flex md:flex-row flex-col items-center px-5 md:px-0 gap-4 justify-between">
          {[
            "Beginner ",
            "Intermediate",
            "Advanced",
            "Expert/PRO",
            "No Exp",
          ].map((data, i) => {
            return (
              <div
                key={i}
                className={`w-full md:w-[200px] relative h-52 ${
                  check === i ? "shadow-xl" : ""
                } cursor-pointer rounded-[10px] bg-slate-100 flex justify-center items-end "bg-red-500":"bg-slate-200"}`}
                onClick={() => setcheck(i)}
              >
                <h4 className="text-base font-bold py-5">{data}</h4>

                <AiTwotoneCheckCircle
                  className={`absolute ${
                    check === i ? "" : "hidden"
                  } -top-1 -right-1 fill-green-600`}
                  size={35}
                />
              </div>
            );
          })}
        </div>
        <div className="py-14">
          <h1 className="text-2xl md:text-3xl font-semibold py-5">
            How would you like to Work?{" "}
          </h1>
          <p className="text-sm md:text-base font-semibold text-slate-500 pb-5">
            To help you get started, we have three selling styles that you can
            choose from. Decide which one suits your goals and preferences.
          </p>
          <div className="flex md:flex-row flex-col px-4 md:p-0 gap-4 justify-between">
            {["Self-Marketer", " eZ Advertiser", " eZ Assured "].map(
              (data, index) => {
                return (
                  <div
                    key={index}
                    className={`min-w-[220px] h-[300px] ${
                      checkW === index ? "shadow-2xl" : ""
                    } bg-slate-200 cursor-pointer  rounded-[10px]`}
                  >
                    <div
                      className="w-full relative h-2/3 bg-slate-300 rounded-[10px] flex justify-center items-end"
                      onClick={() => setcheckW(index)}
                    >
                      <h4 className="text-base font-semibold py-5">{data}</h4>
                      <AiTwotoneCheckCircle
                        className={`absolute ${
                          checkW === index ? "" : "hidden"
                        } -top-1 -right-1 fill-green-600`}
                        size={35}
                      />
                    </div>
                    <p className="text-sm p-2">
                      If you prefer to find clients on your own
                    </p>
                  </div>
                );
              }
            )}
          </div>
          <div className="w-full flex justify-end mt-8">
            <Link
              to={"/seller"}
              className="bg-blue-500 text-white py-2 px-4 rounded-md"
              onClick={handleSellerExp}
            >
              Become an Ezer
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default SellerDetails;
