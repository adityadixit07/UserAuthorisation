import { RxArrowTopRight } from "react-icons/rx";
import image from "../../../assets/savehours.svg";

function SaveHours() {
  return (
    <>
      <div className="w-full flex flex-wrap m-[2rem] bg-white mx-[0rem] md:flex-nowrap">
        <div className=" w-full p-[5%] md:w-1/2">
          <div className="text-3xl md:text-[3rem] leading-tight	 font-extrabold ">
            <span
              className="text-green-600 text-3xl md:text-4xl xl:text-6xl
"
            >
              Save Hours
            </span>
            <span
              className="p-3 text-3xl md:text-4xl xl:text-6xl
"
            >
              spent on managing multiple tools
            </span>
          </div>
          <p className="p-2 text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
            nesciunt esse tempora .
          </p>
          <div className="mt-5 cursor-pointer flex">
            <p className="underline  underline-offset-4 italic text-xl font-bold   text-black hover:text-green-400">
              Get started for free
            </p>
            <RxArrowTopRight className="mt-1" />
          </div>
        </div>
        <div className="w-full md:w-1/2 ">
          <img src={image} alt="image" className="p-[5%] " />
        </div>
      </div>
    </>
  );
}

export default SaveHours;
