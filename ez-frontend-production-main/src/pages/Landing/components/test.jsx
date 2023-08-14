import React from "react";
import img from "../../../assets/test_img.svg";

function test() {
  return (
    <>
      <div className="bg-gray-100 py-24">
        <div className="px-[3.1%] ">
          <h1
            className="text-center text-green-600 hover:text-green-800 justify-center font-bold mb-16 text-3xl md:text-4xl xl:text-6xl " >
            Founders and marketers are using mentorship to skip the trial and
            error, when will you?
          </h1>
        </div>

        <div className="caards flex flex-col gap-7 pl-[5%] pr-[5%] md:flex-row">
          <div className="w-full bg-white rounded-lg shadow-lg md:w-1/4">
            <div className="flex justify-center ">
              <img src={img} alt="" />
            </div>
            <div className="flex flex-col justify-start p-[2rem]">
              <p className="flex text-slate-800 text-sm	mb-5">
                Lorem ipsum dolor Maiores minus nesciunt delectus! Eum,
                suscipit! Est exercitationem?
              </p>
              <h3 className="font-bold mb-1 text-lg">Parth Sharma</h3>
              <h4 className="mb-2 text-sm">Data Consultant</h4>
              <p className="text-[14px]">17th May | 01:15 PM</p>
            </div>
          </div>
          <div className="w-full bg-white rounded-lg shadow-lg md:w-1/4">
            <div className="flex justify-center ">
              <img src={img} alt="" />
            </div>
            <div className="flex flex-col justify-start p-[2rem]">
              <p className="flex text-slate-800 text-sm	mb-5">
                Lorem ipsum dolor Maiores minus nesciunt delectus! Eum,
                suscipit! Est exercitationem?
              </p>
              <h3 className="font-bold mb-1 text-lg">Parth Sharma</h3>
              <h4 className="mb-2 text-sm">Data Consultant</h4>
              <p className="text-[14px]">17th May | 01:15 PM</p>
            </div>
          </div>
          <div className="w-full bg-white rounded-lg shadow-lg md:w-1/4">
            <div className="flex justify-center ">
              <img src={img} alt="" />
            </div>
            <div className="flex flex-col justify-start p-[2rem]">
              <p className="flex text-slate-800 text-sm	mb-5">
                Lorem ipsum dolor Maiores minus nesciunt delectus! Eum,
                suscipit! Est exercitationem?
              </p>
              <h3 className="font-bold mb-1 text-lg">Parth Sharma</h3>
              <h4 className="mb-2 text-sm">Data Consultant</h4>
              <p className="text-[14px]">17th May | 01:15 PM</p>
            </div>
          </div>
          <div className="w-full bg-white rounded-lg shadow-lg md:w-1/4">
            <div className="flex justify-center ">
              <img src={img} alt="" />
            </div>
            <div className="flex flex-col justify-start p-[2rem]">
              <p className="flex text-slate-800 text-sm	mb-5">
                Lorem ipsum dolor Maiores minus nesciunt delectus! Eum,
                suscipit! Est exercitationem?
              </p>
              <h3 className="font-bold mb-1 text-lg">Parth Sharma</h3>
              <h4 className="mb-2 text-sm">Data Consultant</h4>
              <p className="text-[14px]">17th May | 01:15 PM</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default test;
