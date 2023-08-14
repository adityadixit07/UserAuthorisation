import React from "react";

function Solid() {
  return (
    <>
      <div className="flex flex-wrap w-full md:flex-nowrap md:p-8">
        <div className="w-full md:w-1/2 m-5 mt-10 ">
          <h3 className="m-5 text-zinc-700">
            eZ is the best option for you!
          </h3>
          <div className="font-bold m-5 text-3xl md:text-4xl xl:text-6xl">
            <h1 className="mb-3">Lorem ipsum dolor sit!</h1>
            <h1>Lorem ipsum dolor sit!</h1>
          </div>
          <p className="m-5 text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur
            libero eos repudiandae quasi consectetur quia!
          </p>
          <div>
            <input
              type="text"
              name="email"
              placeholder="Enter your email address"
              className="border border-black m-5 focus:outline-none focus:border-2 py-5 px-2 rounded-full"
            ></input>
            <button className="text-white bg-gray-600 p-3 rounded-3xl m-4">
              Get Started
            </button>
            <p className="m-5 text-zinc-700">
              Try for free no credit card required
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex gap-2 p-5 mt-10">
          <div className=" w-1/3 bg-slate-800"> </div>
          <div className=" w-2/3">
            <div className="flex gap-2">
              <div className="w-1/2 h-[10rem] bg-slate-500 "></div>
              <div className="w-1/2  bg-sky-300"></div>
            </div>
            <div className="mt-2 bg-indigo-400 h-[20rem]"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Solid;
