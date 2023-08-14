import Style from "./style.module.css";
import { MdOutlineNavigateNext } from "react-icons/md";
import Part from "./components/Particles.jsx";

export default function Header() {
  return (
    <>
      <div className="overflow-hidden">
        {/* <Part /> */}
      </div>
      <div className="w-full flex flex-wrap-reverse items-center px-4 lg:px-16 h-[83vh] md:h-screen">
        <div className="w-full md:w-7/12 flex flex-col">
          <h1 className="text-4xl md:text-5xl xl:text-6xl text-left md:text-left md:!leading-[70px]">
            <span className="font-light">Intoducing World's{" "}</span>
            <span className="font-bold">First Service Marketplace{" "}</span>
            <span className="font-light">with{" "}</span>
            <span className={`${Style.heading} font-bold text-4xl underline  underline-offset-0	 hover:underline-offset-4 md:text-5xl xl:text-6xl`}>
              AI-Powered Matchmaking.
            </span>
          </h1>
          <div className="flex items-start md:items-center gap-0 mt-7 md:gap-2 flex-wrap mb-9 flex-col-reverse md:flex-row">
            <div className="flex flex-col gap-[2rem] justify-center items-center md:items-start">
              <p className="xl:text-2xl leading-5 md:leading-[1rem] text-center md:text-left">
                "One Application" to get you the best service provider you want!
              </p>
            </div>
          </div>
          <a
            href="https://tally.so/r/3EqpoA"
            className={`bg-black rounded-[6px] h-[60px] w-full  font-700 flex border-4 p-2 xl:px-4 text-white items-center justify-center text-xl md:w-1/2 ${Style.ez_karoButton}`}
          >
            <span>eZ Karo!!!</span> <MdOutlineNavigateNext size={24} />{" "}
          </a>
        </div>
        <div className="hidden md:w-5/12 md:flex items-center justify-center">
          <img
            src="/assets/jinn.png"
            // src={`https://res.cloudinary.com/ds6spmr71/image/upload/v1682998359/loginjinn_cykqge.svg`}
            alt="Jinn"
            className={`w-[350px] md:w-[300px] lg:w-[600px] select-none`}
          />
        </div>
      </div>
    </>
  );
}

{/* <div className="w-full flex flex-wrap-reverse items-center px-4 lg:px-16 h-[83vh] md:h-screen">
  <div className="w-full md:w-7/12 flex flex-col">
    <h1 className="text-4xl md:text-5xl xl:text-7xl font-bold text-left md:text-left">
      Intoducing to{" "}
      <span
        className={`${Style.heading} text-4xl underline  underline-offset-0	 hover:underline-offset-4 md:text-5xl xl:text-6xl`}
      >
        eZ’s AI-Powered Matchmaking !!!
      </span>
      !!!
    </h1>
    <div className="flex items-start md:items-center gap-0 mt-7 md:gap-2 flex-wrap mb-9 flex-col-reverse md:flex-row">
      <div className="flex flex-col gap-[2rem] justify-center items-center md:items-start">
        <p className="xl:text-xl leading-5 md:leading-[1rem] text-center md:text-left">
          Get Any Service you Need “ One Application ” to get it all what
          you want !!! It's simple - <br />
          <span className="text-xl md:text-3xl font-bold ">
            You Demand, We Supply
          </span>
        </p>
      </div>
    </div>
    <a
      href="https://tally.so/r/3EqpoA"
      className={`bg-black rounded-[6px] h-[60px] w-full  font-700 flex border-4 p-2 xl:px-4 text-white items-center justify-center text-xl md:w-1/2 ${Style.ez_karoButton}`}
    >
      <span>eZ Karo!!!</span> <MdOutlineNavigateNext size={24} />{" "}
    </a>
  </div>
  <div className="hidden md:w-5/12 md:flex items-center justify-center">
    <img
      src={`https://res.cloudinary.com/ds6spmr71/image/upload/v1682998359/loginjinn_cykqge.svg`}
      alt="Jinn"
      className={`w-[350px] md:w-[300px] lg:w-[600px]`}
    />
  </div>
</div> */}