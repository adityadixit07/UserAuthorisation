import React, { useState } from "react";
import Navbar from "../../../../components/Navbar/Navbar";
import "./buyservice.css";
import pict from "../../../../assets/profile-img/Rectangle 5601.png"
import { FaShareAlt, FaArrowAltCircleUp, FaQuoteLeft } from "react-icons/fa";
import { BsFillBagCheckFill, BsCheckLg } from "react-icons/bs";
import { GiTrophyCup } from "react-icons/gi";
import { MdOutlineWatchLater } from "react-icons/md";
import { BiRefresh } from "react-icons/bi";
import { HiOutlineArrowSmRight } from "react-icons/hi";
import { AiOutlineRight, AiFillStar, AiFillWechat } from "react-icons/ai";
import consultpic from "../../../../assets/Gender img/Online consulting-rafiki.png";
import meetingpic from "../../../../assets/Gender img/Remote meeting-bro.png";
import some from "../../../../assets/Gender img/Advantages-bro.png";
import meetigpic from "../../../../assets/Gender img/Events-cuate.png";
import ServiceProvider from "./ServiceComp/serviceProvider";
import { Collapse } from "antd";
import "antd";
import classNames from "classnames";


const { Panel } = Collapse;


const text1 = ` Anyone with a skill, knowledge, or service to offer can become an eZ seller. Whether you are a professional freelancer or an individual looking to share your expertise, eZ provides a platform to reach a global audience.
`;

const text2 = `You can sell any legal service or skill that you possess, as long as it complies with our terms and conditions. Some examples include graphic design, web development, content writing, legal services, and more.
`
const text3 = `eZ provides a secure payment system for both buyers and sellers. When a buyer purchases your service, the payment is held in escrow until the service is completed. Once the service is delivered, you can request to withdraw the funds to your preferred payment method.
`

const text4 = <ol>
  <li>3 Consultation sessions to discuss the business plan and address any questions or concerns.</li>
  <li>Offering ongoing support and guidance throughout the optimization process.</li>
</ol>

const options = [
  "Overview",
  "#Complaint",
  "Reviews",
  "Add-ons",
  "About the Seller",
  "What you get?",
];
const sscard = [
  "packages",
  "logo",
  "UIUX",
  "Illustration",
  "Reviews",
  "Add-ons",
];

function UIUXdesign() {
  const [bg, setbg] = useState(null);
  const [showques, setshowques] = useState(false);
  return (
    <>
      <Navbar />
      {/* <ServiceProvider /> */}
      <ServiceProvider />
      <div className="p-1 my-10 md:mx-28 md:my-10">
        <section className="flex flex-col md:flex-row justify-between md:gap-36">
          <h1 className="text-2xl md:text-4xl font-bold">
            I will design responsive website UI UX design in figma
          </h1>
          <div className="flex flex-row gap-0 md:gap-8 ">
            <div className="flex flex-row gap-5 py-4 md:p-3">
              <AiFillStar className="fill-green-600" size={30} />
              <span className="flex flex-row shadow-xl gap-3 text-bold text-xl rounded-full h-[40%]">4.0
                <div className="flex flex-row gap-2">
                  <AiFillStar className="fill-green-600" size={20} />
                  <AiFillStar className="fill-green-600" size={20} />
                  <AiFillStar className="fill-green-600" size={20} />
                  <AiFillStar className="fill-green-600" size={20} />
                  <AiFillStar className="fill-gray-400" size={20} />
                </div></span>
            </div>
            <span className="p-2 bg-slate-300 rounded-full scale-50 md:-translate-y-1">
              <FaShareAlt className="md:-translate-x-0.5" size={50} />
            </span>
            <div className="flex flex-col md:items-center justify-center text-xs text-green-600 gap-1">
              <FaArrowAltCircleUp className="fill-green-500" size={35} />
              <span className="md:block hidden"> 54</span>
            </div>
          </div>
        </section>
        {/* <div className='absolute  w-48 h-10 rounded-xl'>

                </div> */}
        <section className="slidcontainer justify-between">
          {options.map((item, index) => {
            return (
              <div key={index} className="inline-block  relative transition-all after:w-0 after:h-1 after:block hover:after:w-[90%] hover:after:bg-green-700 after:translate-x-[6%]">
                <button
                  className={`flex gap-1 text-base font-medium p-2 m-1 rounded-[10px] item-center innershadow2 bg-[#221B1B] ${bg === index
                    ? "bg-transparent font-semibold text-black"
                    : "text-white font-medium "
                    }`}
                  onClick={() => setbg(index)}
                  key={index}
                  type="button"
                >
                  <BsFillBagCheckFill className="fill-[#07c11c]" size={20} />
                  {item}
                </button>
              </div>
            );
          })}
        </section>
        <div className="flex md:gap-0 gap-2 items-center md:items-baseline md:mt-10 pb-3">
          <GiTrophyCup
            className="fill-[#FFAC4B] scale-150 md:scale-0"
            size={30}
          />
          <p className="text-base font-bold">
            People keep coming back! Eddie has an exceptional number of repeat
            buyers.
          </p>
        </div>
        <section className="w-full flex flex-col md:flex-row gap-2">
          {/* left side */}
          <div className="w-full md:w-2/3 ">
            <div className="w-full md:p-0 p-1 overflow-hidden ">
              <img className="w-full bg-cover" src={pict} alt="" />
            </div>
            <h1 className="text-2xl font-bold md:text-5xl shadow-lg shadow-gray-300 w-1/2 p-3 text-bolder rounded-lg m-5">Overview :</h1>
            <div className="bg-gray-200 p-5 rounded-lg leading-7 shadow-xl">
              <p>Best for founders with challenges related to branding, design, marketing or naming.

                Level up your business plan! I will help you optimize your existing plan, providing strategic recommendations and market insights. From financial analysis to goal setting, we'll fine-tune your plan for success. Gain a competitive edge and attract investors with a professionally tailored business plan.

                Ready to achieve your goals? Optimize your business plan today!</p>
            </div>
            <section className="p-2 w-full flex flex-col md:gap-8 mt-5 md:mt-14 md:p-4">
              <div className="shadow-xl shadow-green-400/80">
                <h1 className="text-3xl md:text-5xl rounded-xl shadow-xl p-5 shadow-gray-300 md:text-2xl font-bold">
                  What you get with this package?
                </h1>
                <Collapse accordion ActiveKey={["1", "2", "3", "4", "5", "6"]} ghost>
                  <Panel
                    header={<h1 className="flex justify-center flex-row"><img src={'https://res.cloudinary.com/db97icmxn/image/upload/v1685909943/EZ_KARO_3_ml6yii.png'} className="w-[15%]" />Business Plan Review:</h1>}
                    key="1"
                    className="shadow-xl font-bold rounded-xlborder border-gray-300  text-xl md:text-2xl"
                  >
                    <h1 className="text-gray-600 text-xl md:text-2xl text-bold">{text1}</h1>
                  </Panel>
                  <Panel
                    header={<h1 className="flex justify-center flex-row"><img src={'https://res.cloudinary.com/db97icmxn/image/upload/v1685909943/EZ_KARO_3_ml6yii.png'} className="w-[15%]" />Stragic Recomendations?</h1>}
                    key="2"
                    className="shadow-xl font-bold rounded-xl border border-gray-300 text-xl md:text-2xl"
                  >
                    <h1 className="text-gray-600 text-xl md:text-2xl">{text2}</h1>
                  </Panel>
                  <Panel
                    header={<h1 className="flex justify-center flex-row"><img src={'https://res.cloudinary.com/db97icmxn/image/upload/v1685909943/EZ_KARO_3_ml6yii.png'} className="w-[15%]" />Goal Setting and Objective Alignment:</h1>}
                    key="3"
                    className="shadow-xl font-bold rounded-xl border border-gray-300 text-xl md:text-2xl"
                  >
                    <h1 className="text-green-800  text-xl md:text-2xl text-bold">{text3}</h1>
                  </Panel>
                  <Panel
                    header={<h1 className="flex justify-center flex-row"><img src={'https://res.cloudinary.com/db97icmxn/image/upload/v1685909943/EZ_KARO_3_ml6yii.png'} className="w-[15%]" />Devise GTM strategy and  Branding strategy</h1>}
                    key="4"
                    className="shadow-xl font-bold text-xl border border-gray-300 md:text-2xl"
                  >
                    <h1 className="text-green-800  text-xl  md:text-2xl text-bold">{text4}</h1>
                  </Panel>
                  <Panel
                    header={<h1 className="flex justify-center flex-row"><img src={'https://res.cloudinary.com/db97icmxn/image/upload/v1685909943/EZ_KARO_3_ml6yii.png'} className="w-[15%]" />Consultations & Strategy</h1>}
                    key="5"
                    className="shadow-xl font-bold border border-gray-300 text-xl md:text-2xl"
                  >
                    <h1 className="text-green-800  text-xl md:text-2xl text-bold">{text4}</h1>
                  </Panel>
                </Collapse>
              </div>
              <h1 className="font-bold m-3 p-4 text-2xl md:text-4xl flex justify-center rounded-xl shadow-xl shadow-gray-400">
                Portfolio:
              </h1>
              {/* <div classaNme="w-full flex gap-8">
                <div className="md:flex hidden md:justify-center md:items-center">
                  <div className=" bg-slate-200 rounded-[10px] md:w-28 md:h-28"></div>
                </div>
                <div className="w-full p-1 md:p-0 flex flex-col text-base font-normal">
                  <p className="w-full">About this gig</p>
                  <p className="text-justify">
                    I deliver design with perfection
                  </p>
                  <p className="my-5">
                    {" "}
                    Hi, I am Ruchi Bhut. I believe in clean & quality work. I
                    deliver creative, strategic, and innovative solutions to
                    help brands with new challenges while managing every
                    touch-point.
                  </p>
                </div>
              </div>
              <div className="flex flex-col">
              </div>
              <div className="flex gap-8">
                <div className="md:flex hidden justify-center items-center">
                  <div className="bg-slate-200 rounded-[10px] w-[100px] h-[100px]"></div>
                </div>
                <div className="flex flex-col text-base font-normal">
                  <h3 className="text-base font-bold mb-6">
                    Why You should choose us?
                  </h3>
                  <ul className="list-disc translate-x-5">
                    <li>
                      High-quality Website UI/UX design that makes you stand out
                      from your competitor.
                    </li>
                    <li>
                      24x7 available to help and just a click away from support
                      after completing the order also.
                    </li>
                    <li>
                      Unlimited Revision until you satisfied, Your satisfaction
                      is our priority.
                    </li>
                    <li>8+ years of experience in the design industry.</li>
                    <li>All the Source files delivered at the end.</li>
                    <li>
                      Will ready to consult about anything if you are confused.
                    </li>
                  </ul>
                  <h4 className="my-5 text-base font-bold">
                    Types of the Website style we offer :
                  </h4>
                  <p>
                    Website design in Figma, UI UX design, NFT website and
                    blockchain design, Figma prototype
                  </p>
                </div>
              </div>
              <div className="flex gap-8">
                <div className="md:flex hidden justify-center items-center">
                  <div className="bg-slate-200 rounded-[10px] w-[100px] h-[100px]"></div>
                </div>
                <div className="flex flex-col text-base font-normal">
                  <h3 className="text-base font-bold my-5">Charges:</h3>
                  <p className="text-justify">
                    $150/Page &#40;depends on the design&#41; and we provide a
                    complete PSD,XD or FIGMA file. If you want HTML also you
                    have to buy gig extras for that.
                  </p>
                </div>
              </div> */}
            </section>
          </div>

          {/* right side */}
          <div className="w-full md:w-1/3">
            {/* price Card */}
            <section className="p-8 border-2 shadow-xl rounded-lg">
              <h2 className="text-xl font-bold flex text-green-600 flex-row"> <img src={'https://res.cloudinary.com/db97icmxn/image/upload/v1685909943/EZ_KARO_3_ml6yii.png'} className="w-[40%]" />  Rs 43,212</h2>
              <h3 className=" text-base font-medium text-slate-600">
                Save up to 15% with{" "}
                <span className="text-green-700">Subscribe to Save</span>
              </h3>
              <h4 className="text-sm text-slate-500 font-semibold py-4">
                <span className=" text-slate-700">
                  Unique Homepage or Landing Page &nbsp;
                </span>
                Unique Custome Homepage or Landing Page Design From
                Scratch-&#40;Figma or XD&#41;
              </h4>
              <div className="flex justify-between items-center pb-3 text-sm text-slate-700 font-semibold">
                <div className="flex  gap-1">
                  <MdOutlineWatchLater size={20} /> 5 Days Delivery
                </div>
                <div className="flex gap-1">
                  <BiRefresh size={20} /> Unlimited Revisions
                </div>
              </div>
              <div className="flex flex-col text-[13px] font-semibold text-slate-400">
                <div className="flex items-center gap-4">
                  <BsCheckLg className="fill-green-500" size={20} />1
                  page/screen
                </div>
                <div className="flex items-center gap-4">
                  <BsCheckLg className="fill-green-500" size={20} />
                  Prototype
                </div>
                <div className="flex items-center gap-4">
                  <BsCheckLg className="fill-green-500" size={20} />
                  Source file
                </div>
              </div>
              <button
                className="relative flex justify-center items-center p-2 w-full bg-green-600 mt-4 text-sm font-semibold rounded-[8px] text-white"
                type="button"
              >
                Buy Services{" "}
                <span className="absolute right-5">
                  <HiOutlineArrowSmRight size={22} />
                </span>
              </button>
              <button
                className="relative flex justify-center items-center p-2 w-full bg-black mt-4 text-sm font-semibold rounded-[8px] border hover:border-2 border-black hover:border-green-300 text-white hover:text-green-400"
                type="button"
              >
                Send Enquiry {" "}
                <span className="absolute right-5">
                  <HiOutlineArrowSmRight size={22} />
                </span>
              </button>
            </section>

            {/* contact me */}
            <section className="p-8">
              <button
                className="flex justify-center items-center p-2 w-full bg-transparent border-2 border-slate-400 text-slate-500 mt-4 text-sm font-semibold rounded-[8px]"
                type="button"
                onClick={() => setshowques(true)}
              >
                Contact me{" "}
                <span className="pl-1">
                  <AiOutlineRight className="rotate-90" size={18} />
                </span>
              </button>
              <div
                className={`${showques ? "flex" : "hidden"
                  } flex-col gap-4 my-2 md:mx-3 p-4 border-2 text-xs font-semibold text-slate-400`}
              >
                <h3>How can I Help?</h3>
                <div className="flex justify-between p-2 border-b-2">
                  <h3>Get a quate</h3>
                  <HiOutlineArrowSmRight />
                </div>
                <div className="flex justify-between p-2">
                  <h3>Ask A question</h3>
                  <HiOutlineArrowSmRight />
                </div>
              </div>
              <div className={`md:mx-3 ${showques ? "block" : "hidden"}`}>
                <button
                  className="flex justify-center items-center p-2 w-full  bg-transparent border-2 border-blue-600 text-slate-500 mt-4 text-sm font-semibold rounded-[8px]"
                  type="button"
                >
                  Contact me{" "}
                  <span className="pl-1">
                    <AiOutlineRight className="-rotate-90" size={18} />
                  </span>
                </button>
              </div>
            </section>
          </div>
        </section>

        <section className="my-10 flex flex-col gap-4">
          <h1 className="text-3xl font-medium">What to expect</h1>
          <div className="flex items-center">
            <div className="w-28 h-28">
              <img className="w-44" src={meetigpic} alt="" />
            </div>
            <div className="flex flex-col gap-3 text-base">
              <h3 className=" font-medium">Schedule the consultation</h3>
              <h5 className="font-normal text-slate-600">
                Choose from Freelancer&apos; s available days and times
              </h5>
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-28 h-28">
              <img className="w-44" src={some} alt="" />
            </div>
            <div className="flex flex-col gap-3 text-base">
              <h3 className=" font-medium">Schedule the consultation</h3>
              <h5 className="font-normal text-slate-600">
                Choose from Freelancer&apos; s available days and times
              </h5>
            </div>
          </div>

          <div className="flex items-center">
            <div className="w-28 h-28">
              <img className="w-44" src={consultpic} alt="" />
            </div>
            <div className="flex flex-col gap-3 text-base">
              <h3 className=" font-medium">Schedule the consultation</h3>
              <h5 className="font-normal text-slate-600">
                Choose from Freelancer&apos; s available days and times
              </h5>
            </div>
          </div>

          <div className="flex items-center">
            <div className="w-28 h-28">
              <img className="w-44" src={meetingpic} alt="" />
            </div>
            <div className="flex flex-col gap-3 text-base">
              <h3 className=" font-medium">Schedule the consultation</h3>
              <h5 className="font-normal text-slate-600">
                Choose from Freelancer&apos; s available days and times
              </h5>
            </div>
          </div>
        </section>

        <section className="mt-10">
          <h1 className="m-1 md:m-3 text-[20px] md:text-2xl font-bold">
            What people loved about the seller{" "}
          </h1>
          <div className="m-0 bg-[#4F4F4F] relative p-3 md:p-6">
            <div className="py-4 px-2 md:px-9 bg-white z-0 overflow-hidden rounded-[10px]">
              <div className="slidcontainer gap-3">
                {sscard.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="min-w-[270px] flex flex-col overflow-hidden border shadow1 rounded-lg"
                    >
                      <div className="overflow-hidden w-full">
                        <img src={pict} alt="" className="" />
                      </div>
                      <div className="flex flex-col gap-3 p-3">
                        <div>
                          <div className="p-1 -translate-y-6 w-8 bg-green-500  rounded-full">
                            <FaQuoteLeft className="fill-white" size={25} />
                          </div>
                        </div>

                        <p className="text-xs font-normal">
                          High-quality App UI/UX that makes you stand out from
                          your competitor.
                        </p>
                        <div>
                          <h5 className="text-base font-bold">
                            Pathikrit Pal{" "}
                          </h5>
                          <p className="text-[10px] font-normal">
                            Data Consultant{" "}
                          </p>
                        </div>
                        <span className="text-xs font-normal">
                          17th April | 01:14 PM
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <AiOutlineRight
              className="right-0 fill-white bg-[#b0aaaa] rounded-full p-2 top-[50%] z-50 absolute"
              size={40}
            />
            <AiOutlineRight
              className="left-0 rotate-180 fill-white bg-[#d3cfcf] rounded-full p-2 top-[50%] absolute"
              size={40}
            />
          </div>
        </section>
        <section className="w-full my-10 font-bold">
          <h1 className="text-[21px] md:text-2xl">
            Get more done with Offer Add-ons
          </h1>
          <h3 className="p-4 font-bold text-lg">Frequently Added Together </h3>
          {/* <table className="w-full border-[5px] md:border-[10px]">
            <tr className="flex p-2 md:p-5 gap-3 md:justify-around border-b-2">
              <input type="checkbox" className="w-5" name="" value="" />
              <div className="flex flex-col gap-2">
                <h2 className="text-sm md:text-base font-semibold text-slate-400 ">
                  I can create 1 Interactive/Animated prototype for presentation
                </h2>
                <h4 className="text-xs font-medium text-slate-300">
                  Additional 1 working day
                </h4>
              </div>
              <h5 className=" md:text-4xl font-bold text-slate-300">+$10</h5>
            </tr>
            <tr className="flex p-2 md:p-5 gap-3 md:justify-around border-b-2">
              <input type="checkbox" className="w-5" name="" value="" />
              <div className="flex flex-col gap-2">
                <h2 className="text-sm md:text-base font-semibold text-slate-400 ">
                  I can create 1 Interactive/Animated prototype for presentation
                </h2>
                <h4 className="text-xs font-medium text-slate-300">
                  Additional 1 working day
                </h4>
              </div>
              <h5 className=" md:text-4xl font-bold text-slate-300">+$10</h5>
            </tr>
            <tr className="flex p-2 md:p-5 gap-3 md:justify-around border-b-2">
              <input type="checkbox" className="w-5" name="" value="" />
              <div className="flex flex-col gap-2">
                <h2 className="text-sm md:text-base font-semibold text-slate-400 ">
                  I can create 1 Interactive/Animated prototype for presentation
                </h2>
                <h4 className="text-xs font-medium text-slate-300">
                  Additional 1 working day
                </h4>
              </div>
              <h5 className=" md:text-4xl font-bold text-slate-300">+$10</h5>
            </tr>
            <tr className="flex p-2 md:p-5 gap-3 md:justify-around border-b-2">
              <input type="checkbox" className="w-5" name="" value="" />
              <div className="flex flex-col gap-2">
                <h2 className="text-sm md:text-base font-semibold text-slate-400 ">
                  I can create 1 Interactive/Animated prototype for presentation
                </h2>
                <h4 className="text-xs font-medium text-slate-300">
                  Additional 1 working day
                </h4>
              </div>
              <h5 className=" md:text-4xl font-bold text-slate-300">+$10</h5>
            </tr>
            <tr className="flex p-2 md:p-5 gap-3 md:justify-around border-b-2">
              <input type="checkbox" className="w-5" name="" value="" />
              <div className="flex flex-col gap-2">
                <h2 className="text-sm md:text-base font-semibold text-slate-400 ">
                  I can create 1 Interactive/Animated prototype for presentation
                </h2>
                <h4 className="text-xs font-medium text-slate-300">
                  Additional 1 working day
                </h4>
              </div>
              <h5 className=" md:text-4xl font-bold text-slate-300">+$10</h5>
            </tr>
          </table> */}
          <div className="m-0 relative">
            <div className="py-4 px-2 md:px-9 bg-white z-0 overflow-hidden rounded-[10px]">
              <div className="slidcontainer gap-3">
                {sscard.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="min-w-[270px] flex flex-col overflow-hidden border shadow1 rounded-lg"
                    >
                      <div className="overflow-hidden w-full">
                        <img src={pict} alt="" className="" />
                      </div>
                      <div className="flex bg-gray-200 cursor-pointer flex-col space-y-6 p-3 justify-center items-center">
                        <h1 className="text-xl font-bold">Short Call</h1>
                        <h3 className="text-xl font-bold">$20</h3>
                        <a className="flex text-green-500 text-lg hover:text-white justify-center bg-white hover:bg-green-500 shadow-xl border border-black shadow-gray-300 px-6 py-2 rounded-xl">
                          Add
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <AiOutlineRight
              className="right-0 cursor-pointer fill-white bg-green-600 rounded-full p-2 top-[50%] z-50 absolute"
              size={40}
            />
            <AiOutlineRight
              className="left-0 rotate-180 cursor-pointer fill-white bg-green-600 rounded-full p-2 top-[50%] absolute"
              size={40}
            />
          </div>
        </section>
        <section className="w-full md:w-2/3 my-10 font-bold">
        </section>
      </div>
    </>
  );
}

export default UIUXdesign;
