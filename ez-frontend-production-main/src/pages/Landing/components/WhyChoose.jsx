import React from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
// import { BiXCircle } from "react-icons/bi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import "./WhyChose.css";

function WhyChoose() {
  return (
    <>
      <div className="mt-[5rem]  w-full mb-[5%] bg-white md:p-[3rem]">
        <div>
          <div
            className="font-extrabold flex px-[2rem] justify-center gap-2 ttext-3xl md:text-4xl xl:text-6xl
"
          >
            <span>Why choose </span>
            <span className="text-green-600 p-1 rounded">eZ?</span>
          </div>
          <p className="flex text-lg font-bold justify-center p-3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam
            dolorem omnis inventore at aut doloribus ipsa veritatis quasi.
          </p>
        </div>
        <div className="w-full flex flex-col md:flex-row justify-around px-[2rem] gap-[1rem] py-[4rem] md:px-[10rem] mt-[5%]">
          <div className="box_shadow  w-full flex  flex-col border-4 border-dotted border-green-400 rounded-[2rem]">
            <h4 className="font-bold text-green-600 text-2xl text-center md:text-4xl">
              Ezage
            </h4>
            <div className="flex flex-col shadow-lg  p-5 space-y-2 md:space-y-4">
              <h4 className="mb-5  font-semibold ">Features included :</h4>
              <p className="flex gap-3 items-center text-md md:text-xl">
                <AiOutlineCheckCircle className="fill-[blue]" size={24} /> No
                charges hidden
              </p>
              <p className="flex gap-3 items-center text-md md:text-xl">
                <AiOutlineCheckCircle className="fill-[blue]" size={24} /> No
                charges hidden
              </p>
              <p className="flex gap-3 items-center text-md md:text-xl">
                <AiOutlineCheckCircle className="fill-[blue]" size={24} /> No
                charges hidden
              </p>
              <p className="flex gap-3 items-center text-md md:text-xl">
                <AiOutlineCheckCircle className="fill-[blue]" size={24} /> No
                charges hidden
              </p>
              <p className="flex gap-3 items-center text-md md:text-xl">
                <AiOutlineCheckCircle className="fill-[blue]" size={24} /> No
                charges hidden
              </p>
              <p className="flex gap-3 items-center text-md md:text-xl">
                <AiOutlineCheckCircle className="fill-[blue]" size={24} /> No
                charges hidden
              </p>
              <p className="flex gap-3 items-center text-md md:text-xl">
                <AiOutlineCheckCircle className="fill-[blue]" size={24} /> No
                charges hidden
              </p>
              <p className="flex gap-3 items-center text-md md:text-xl">
                <AiOutlineCheckCircle className="fill-[blue]" size={24} /> No
                charges hidden
              </p>
            </div>
          </div>
          <div className="h-[15%] flex justify-center relative z-10">
            <h1 className="rounded-[100%] text-white items-center sticky md:absolute md:top-[150px] justify-center bg-violet-700 text-bold text-4xl p-2">
              VS
            </h1>
          </div>
          <div className="cont-1 w-full flex  flex-col 	box_shadow1 border-4 border-green-400 border-dotted rounded-[2rem]">
            <h4 className="font-bold text-2xl text-center md:text-4xl">
              Other Softwares
            </h4>
            <div className="flex flex-col  p-5 space-y-2 md:space-y-4">
              <h4 className="mb-5 font-semibold ">Features included :</h4>
              <p className="flex gap-3 items-center text-md md:text-xl">
                <AiOutlineCloseCircle className="fill-[red]" size={24} /> No
                charges hidden
              </p>
              <p className="flex gap-3 items-center text-md md:text-xl">
                <AiOutlineCloseCircle className="fill-[red]" size={24} /> No
                charges hidden
              </p>
              <p className="flex gap-3 items-center text-md md:text-xl">
                <AiOutlineCloseCircle className="fill-[red]" size={24} /> No
                charges hidden
              </p>
              <p className="flex gap-3 items-center text-md md:text-xl">
                <AiOutlineCloseCircle className="fill-[red]" size={24} /> No
                charges hidden
              </p>
              <p className="flex gap-3 items-center text-md md:text-xl">
                <AiOutlineCloseCircle className="fill-[red]" size={24} /> No
                charges hidden
              </p>
              <p className="flex gap-3 items-center text-md md:text-xl">
                <AiOutlineCloseCircle className="fill-[red]" size={24} /> No
                charges hidden
              </p>
              <p className="flex gap-3 items-center text-md md:text-xl">
                <AiOutlineCloseCircle className="fill-[red]" size={24} /> No
                charges hidden
              </p>
              <p className="flex gap-3 items-center text-md md:text-xl">
                <AiOutlineCloseCircle className="fill-[red]" size={24} /> No
                charges hidden
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WhyChoose;
