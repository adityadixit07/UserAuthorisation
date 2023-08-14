import { AiFillShop } from "react-icons/ai";
import fb from "../../../assets/fb.svg";
import { BiSkipNextCircle } from "react-icons/bi";

function BuildFunnel() {
  return (
    <>
      <div className="flex flex-col shadow-xl shadow-green-400  items-center p-[0rem] py-[2rem] space-y-10  md:p-[5rem]">
        <h2 className="text-3xl md:text-4xl xl:text-6xl m-[1rem] md:mx-[0rem] leading-tight font-bold">
          Build Funnel,Convert Leads,Monetize-
          <span className="text-green-600 rounded-xl ">
            All with eZ
          </span>
        </h2>
        <div className="flex flex-col-reverse justify-around gap-3 p-0 rounded-xl md:flex-row md:gap-0 ">
          <div className="w-full md:w-1/2 flex  flex-col gap-5 p-3 ">
            <button className="flex flex-row justify-around border-2 w-[200px] border-black bg-green-300 rounded-[3rem] px-4 py-5 font-semibold text-xl">
              <AiFillShop size={24} />
              Marketing
            </button>
            <h1 className="text-2xl md:text-3xl xl:text-5xl font-bold">
              Launch your Landing Page
            </h1>
            <p className="text-md leading-8 md:text-[22px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              dolor optio earum illo voluptas sint repellendus beatae nobis
              laboriosam magni voluptates delectus cum unde a, quasi quidem. Ea,
              optio commodi? Lorem ipsum dolor sit amet consectetur, adipisicing
              elit. Blanditiis obcaecati libero iusto maiores illum vel tenetur
              delectus sapiente? Quas asperiores soluta maxime libero tempore
              dolores. Deserunt sequi maxime quo necessitatibus.
            </p>
            <a
              href="/"
              className="bg-[#00b6a4] flex p-[10px] mt-[6px] w-2/3 md:w-1/2  rounded-[2rem]"
            >
              <div className="flex flex-row gap-[1rem] justify-around items-center text-white">
                <BiSkipNextCircle size={48} />
                <p className="text-2xl">Book a Demo</p>
              </div>
            </a>
          </div>
          <img
            src="https://res.cloudinary.com/db97icmxn/image/upload/v1685288718/IMG-20230528-WA0015_pu6ixa.jpg"
            alt="fbPic"
            className="w-full md:w-1/2"
          />
        </div>
        <div className="flex flex-col justify-around gap-3 p-0 rounded-xl md:flex-row md:gap-0 md:p-8">
          <img
            src="https://res.cloudinary.com/db97icmxn/image/upload/v1685288718/IMG-20230528-WA0015_pu6ixa.jpg"
            alt="fbPic"
            className="w-full md:w-1/2"
          />
          <div className="w-full md:w-1/2 px-[2rem] flex flex-col gap-5 p-3 md:p-8">
            <p className="flex flex-row justify-around border-2 w-[200px] border-black bg-green-300 rounded-[3rem] p-2 py-5">
              <AiFillShop size={24} />
              No commission
            </p>
            <h1 className="text-2xl md:text-3xl xl:text-5xl font-bold">
              Sell at 0% commision
            </h1>
            <p className="text-md leading-8 md:text-[22px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              dolor optio earum illo voluptas sint repellendus beatae nobis
              laboriosam magni voluptates delectus cum unde a, quasi quidem. Ea,
              optio commodi? Lorem ipsum dolor sit amet consectetur, adipisicing
              elit. Blanditiis obcaecati libero iusto maiores illum vel tenetur
              delectus sapiente? Quas asperiores soluta maxime libero tempore
              dolores. Deserunt sequi maxime quo necessitatibus.
            </p>
            <a
              href="/"
              className="bg-[#00b6a4] flex p-[10px] mt-[6px] w-2/3 md:w-1/2  rounded-[2rem]"
            >
              <div className="flex flex-row gap-[1rem] justify-around items-center text-white">
                <BiSkipNextCircle size={48} />
                <p className="text-2xl">Book a Demo</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default BuildFunnel;
