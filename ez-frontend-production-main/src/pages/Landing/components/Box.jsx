
// Custom CSS
import "./Box.css";

export default function Box() {
  return (
    <div className="w-full">
      <div className=" flex flex-col px-5 md:flex-row justify-around  bg-gradient-to-r from-green-200 via-green-400 to-green-500">
        <div className="flex flex-col">
          <p className="font-bold text-[25px]">Stand out among recruiters</p>
          <p className="font-bold text-[25px]">with a video profile</p>
          <p className="font-bold text-[25px]">
            Available for both Android and iOS apps
          </p>
          <div className="relative">
            <input
              type="number"
              className="w-full h-[40px] pr-12 rounded-full placeholder-style-1"
              placeholder="Enter mobile number... "
            />
            <button className="absolute w-[130px] h-[30px] top-1 text-white right-3 text-[20px]  px-4 rounded-full bg-green-400 hover:bg-[#0d53bc]">
              Get Link
            </button>
          </div>
          <div className="flex mt-[-50px]">
            <img
              src={`https://res.cloudinary.com/ds6spmr71/image/upload/v1683874112/LandingPage/playstore_ougze2.svg`}
              alt="banner1"
              className="w-[200px] h-[190px]"
            />
          </div>
        </div>
        <div className="items-center flex justify-center mt-[-50px] md:mt-[0px] lg:ml-[10px] ">
          <img
            src={`https://res.cloudinary.com/ds6spmr71/image/upload/v1683874112/LandingPage/qr1_hn4eae.svg`}
            alt="qrscan"
            className="w-[200px] h-[190px] lg:w-[100px] lg:h-[100px]"
          />
        </div>
        <div className="hidden w-[60%] lg:flex justify-center ">
          <div className="relative">
            <img
              src={`https://res.cloudinary.com/ds6spmr71/image/upload/v1683874111/LandingPage/layout_kadeqf.png`}
              alt=""
              className=""
            />
            <img
              src={`https://res.cloudinary.com/ds6spmr71/image/upload/v1683874113/LandingPage/man_oktqwk.png`}
              className="w-[100px] h-[200px] absolute left-[50%] -translate-x-[50%] -translate-y-[100%] "
            />
          </div>
        </div>
      </div>
    </div>
  );
}
