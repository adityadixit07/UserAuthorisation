import mentor from "../../../assets/t1.png";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function Component1(props) {
  return (
    <div className="px-4 md:px-20 lg:px-40">
      <div className="w-full justify-around h-[700px] md:h-auto flex flex-wrap overflow-x-auto bg-white mt-5 mb-24 md:mb-0 p-8  md:flex-nowrap rounded-2xl">
        <div className="md:hidden">
          <img
            src={props.img}
            alt=""
            className="w-72 md:h-72 md:max-h-80"
          />
        </div>

        {/* <div className="w-full md:w-7/12"> */}
        <div className="w-full">
          <h2 className="text-xl md:text-3xl font-bold">{props.text}</h2>
          {props.para && <p className="mt-3 text-gray-600 text-xl">{props.para}</p>}
          <div className="flex mt-5 justify-between md:justify-start gap-2 md:gap-7">
            <div>
              <div className="h-[84px] md:h-auto">
                <h2 className="text-xl font-bold">25,000+</h2>
                <h4 className="mb-2 text-gray-800">Mentors & Mentees</h4>
              </div>
              <button className="h-[68px] md:h-auto border-2 border-green-600 rounded px-4 py-2 text-green-400 font-semibold flex items-center hover:bg-green-400 hover:text-white">
                {props.button1} <MdKeyboardArrowRight />
              </button>
            </div>
            <div>
              <div className="h-[84px] md:h-auto">
                <h2 className="text-xl font-bold">25,000+</h2>
                <h4 className="mb-2 text-gray-600">Connections made</h4>
              </div>
              <button className="h-[68px] md:h-auto border-2 border-green-600 rounded py-2 px-4 md:px-6 text-green-500 font-semibold flex items-center hover:bg-green-400 hover:text-white">
                {props.button2} <MdKeyboardArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* <div className="w-full md:w-1/4 flex justify-center"> */}
        <div className="hidden md:block">
          <img
            src={props.img}
            alt=""
            className="w-72 md:h-72 max-h-80"
          />
        </div>
      </div>
    </div>
  );
}
