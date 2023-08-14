import React from "react";
import { FaWpforms } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { TbBrandTelegram } from "react-icons/tb";
import { HiOutlineDocumentText } from "react-icons/hi";
import { AiOutlineClockCircle } from "react-icons/ai";
import { BsCalendarCheck } from "react-icons/bs";

function Everyneed() {
  return (
    <>
      <div className="w-full mt-[5%]">
        <h2 className="font-extrabold text-4xl text-center w-full ">
          Everything you need now in one place
        </h2>
        <div className="flex m-5 flex-col  md:flex-row">
          <div className="w-full  md:w-1/3 p-4">
            <h3 className="font-bold  p-2">Manage clients</h3>
            <div className="flex items-center gap-3 p-2">
              <FaWpforms className="fill-[green]" />
              <p>Forms</p>
            </div>

            <div className="flex items-center gap-3 p-2">
              <SlCalender className="fill-[green]" />
              <p>Scheduling</p>
            </div>

            <div className="flex items-center gap-3 p-2">
              <TbBrandTelegram className="fill-[green]" />
              <p>Contracts and Quotes</p>
            </div>

            <div className="flex items-center gap-3 p-2">
              <HiOutlineDocumentText className="fill-[green]" />
              <p>Sales Pipelines</p>
            </div>
          </div>
          <div className=" w-full md:w-1/3 p-4">
            <h3 className="font-bold  p-2">Manage projects</h3>
            <div className="flex items-center gap-3 p-2">
              <AiOutlineClockCircle className="fill-[green]" />
              <p>Time tracking</p>
            </div>
            <div className="flex items-center gap-3 p-2">
              <HiOutlineDocumentText className="fill-[green]" />
              <p>Project management</p>
            </div>
            <div className="flex items-center gap-3 p-2">
              <HiOutlineDocumentText className="fill-[green]" />
              <p> Invoicing</p>
            </div>
            <div className="flex items-center gap-3 p-2">
              <HiOutlineDocumentText className="fill-[green]" />
              <p>Client management</p>
            </div>
          </div>
          <div className="w-full md:w-1/3 p-4">
            <h3 className="font-bold items-center  p-2 ">Manage finances</h3>
            <div className="flex items-center gap-3 p-2">
              <BsCalendarCheck className="fill-[green]" />
              <p>payments</p>
            </div>
            <div className="flex items-center gap-3 p-2">
              <BsCalendarCheck className="fill-[green]" />
              <p>Expense Tracking</p>
            </div>
            <div className="flex items-center gap-3 p-2">
              <BsCalendarCheck className="fill-[green]" />
              <p>Text Helper</p>
            </div>
            <div className="flex items-center gap-3 p-2">
              <BsCalendarCheck className="fill-[green]" />
              <p>Banking</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Everyneed;
