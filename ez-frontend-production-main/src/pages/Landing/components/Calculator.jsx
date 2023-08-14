import React, { useState, useRef } from "react";
import { BsFillPeopleFill } from "react-icons/bs";

function Content(props) {
  const [data, setData] = useState(1);
  return (
    <div className="flex flex-col gap-10 m-5 p-3 rounded-xl justify-center items-center md:flex-row ">
      <div className="flex flex-col space-y-2">
        <h1 className="font-500 text-bold mb-5 text-green-400 leading-2 text-2xl md:text-3xl">
          {props.text}
        </h1>
        <input
          type="range"
          min={1}
          max={100}
          step={1}
          value={data}
          onChange={(e) => setData(e.target.value)}
          className="appearance-none w-full h-3 bg-green-300 rounded-md outline-none cursor-pointer transition-colors duration-150 ease-in-out"
          style={{
            background:
              "linear-gradient(to right, #10B981 0%, #10B981 " +
              ((data - 1) / (100 - 1)) * 100 +
              "%, #D1D5DB " +
              ((data - 1) / (100 - 1)) * 100 +
              "%, #D1D5DB 100%)",
          }}
        />

        <p className="text-green-500 text-2xl text-bold mb-4 ">
          No. of sessions: {data}
        </p>
      </div>
      <div className="rounded-xl flex flex-col items-center justify-center shadow-xl shadow-green-600 w-[300px] border-t-4 border-black md:w-[400px] h-[250px]">
        <h1 className="text-2xl">Earn up to</h1>
        <h3 className="text-green-800 text-4xl  text-center mt-4 font-semibold">
          INR {1000 * 12 * data} /year
        </h3>
      </div>
    </div>
  );
}

function Content1(props) {
  const [data, setData] = useState(1);
  return (
    <div className="flex flex-col gap-10  m-5 p-3 rounded-xl justify-center   md:flex-row ">
      <div className="flex flex-col space-y-2">
        <h1 className="font-500 mb-5 text-green-600  leading-2 text-3xl">
          {props.text}
        </h1>
        <input
          type="range"
          min={1}
          max={100}
          step={1}
          value={data}
          onChange={(e) => setData(e.target.value)}
          className="appearance-none w-full h-3 bg-green-300 rounded-md outline-none cursor-pointer transition-colors duration-150 ease-in-out"
          style={{
            background:
              "linear-gradient(to right, #10B981 0%, #10B981 " +
              ((data - 1) / (100 - 1)) * 100 +
              "%, #D1D5DB " +
              ((data - 1) / (100 - 1)) * 100 +
              "%, #D1D5DB 100%)",
          }}
        />

        <p className="text-green-500 text-2xl text-bold mb-4 ">
          No. of followers: {data}
        </p>
      </div>
      <div className="rounded-xl flex flex-col items-center justify-center shadow-xl shadow-green-600 w-[300px] border-t-4 border-black md:w-[400px] h-[250px]">
        <h1 className="text-2xl">Earn up to</h1>
        <h3 className="text-green-800 text-4xl text-center mt-4 font-semibold">
          INR {1000 * 12 * data} /year
        </h3>
      </div>
    </div>
  );
}

function Content2(props) {
  const [data, setData] = useState(1);
  return (
    <div className="flex flex-col gap-10  m-5 p-3 rounded-xl justify-center items-center md:flex-row ">
      <div className="flex flex-col space-y-2">
        <h1 className="font-500  mb-5 text-green-600  leading-2 text-3xl">
          {props.text}
        </h1>
        <input
          type="range"
          min={1}
          max={100}
          step={1}
          value={data}
          onChange={(e) => setData(e.target.value)}
          className="appearance-none w-full h-3 bg-green-300 rounded-md outline-none cursor-pointer transition-colors duration-150 ease-in-out"
          style={{
            background:
              "linear-gradient(to right, #10B981 0%, #10B981 " +
              ((data - 1) / (100 - 1)) * 100 +
              "%, #D1D5DB " +
              ((data - 1) / (100 - 1)) * 100 +
              "%, #D1D5DB 100%)",
          }}
        />

        <p className="text-green-500 text-2xl text-bold mb-4 ">
          No. of Workshops: {data}
        </p>
      </div>
      <div className="rounded-xl flex flex-col items-center justify-center shadow-xl shadow-green-600 w-[300px] border-t-4 border-black md:w-[400px] h-[250px]">
        <h1 className="text-2xl">Earn up to</h1>
        <h3 className="text-green-800 text-4xl text-center mt-4 font-semibold">
          INR {1000 * 12 * data} /year
        </h3>
      </div>
    </div>
  );
}

function InputRange() {
  const [activeButton, setActiveButton] = useState(1);

  const handleButtonClick = (buttonNumber) => {
    setActiveButton(buttonNumber);
  };
  return (
    <>
      <div className="flex flex-col gap-10 w-full justify-center  md:items-center p-[2.5rem]">
        <h1 className="text-center  font-bold leading-7 py-[2rem] text-3xl md:text-4xl xl:text-6xl md:px-[14rem] text-black hover:text-green-300">
          So how much{" "}
          <span className="text-green-600 hover:text-green-800">
            you can make?
          </span>
        </h1>
        {activeButton == 1 && (
          <Content text="How many consultation to conduct weekly" />
        )}
        {activeButton == 2 && (
          <Content1 text="How much will you a Influners will make from eZ?" />
        )}
        {activeButton == 3 && (
          <Content2 text="How much will Workshops on  eZ can make?" />
        )}
        <h1 className="text-xl md:text-3xl xl:text-5xl text-center text-bold text-green-600 font-400 mt-12">
          Choose how to monetize
        </h1>
        <div className="flex flex-row justify-center border-b-4  border-green-400 border-justify-between p-3 items-center gap-2 md:gap-12 flex-wrap md:flex-nonwrap">
          <button
            onClick={() => handleButtonClick(1)}
            className="border-2 px-12 py-2 gap-2 border-black flex flex-row justify-center items-center rounded-full"
            style={{
              backgroundColor: activeButton === 1 ? "#50C878" : "transparent",
              color: activeButton === 1 ? "white" : "black",
              borderWidth: activeButton === 2 ? "4px" : "2px",
            }}
          >
            <BsFillPeopleFill size={24} />
            1:1 Consulting{" "}
          </button>
          <button
            onClick={() => handleButtonClick(2)}
            className="border-2 px-12 py-2 gap-2 border-black flex flex-row justify-center items-center rounded-full"
            style={{
              backgroundColor: activeButton === 2 ? "#50C878" : "transparent",
              color: activeButton === 2 ? "white" : "black",
              borderWidth: activeButton === 2 ? "4px" : "2px",
            }}
          >
            <BsFillPeopleFill size={24} />
            Influencer
          </button>
          <button
            onClick={() => handleButtonClick(3)}
            className="border-2 px-12 py-2 gap-2 border-black flex flex-row justify-center items-center rounded-full"
            style={{
              backgroundColor: activeButton === 3 ? "#50C878" : "transparent",
              color: activeButton === 3 ? "white" : "black",
              borderWidth: activeButton === 3 ? "4px" : "2px",
            }}
          >
            <BsFillPeopleFill size={24} />
            Workshops
          </button>
        </div>
      </div>
    </>
  );
}
export default InputRange;
