import { BsCaretRightSquareFill } from "react-icons/bs";
import { TbTableOptions } from "react-icons/tb";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

function StartupType() {
  return (
    <>
      <div className="flex justify-between">
        {[
          {
            type: "ASSURED SERVICE",
            color: "bg-black",
            icon: "https://res.cloudinary.com/ds6spmr71/image/upload/v1682998364/service_awrlrf.png",
            link: "/ezassured",
          },
          {
            type: "COMMUNITY",
            color: "bg-green-100",
            icon: "https://res.cloudinary.com/ds6spmr71/image/upload/v1685442159/assured_hpthcl.png",
            link: "/ezassured",
          },
          {
            type: "EZ SELLER",
            color: "bg-green-100",
            icon: "https://res.cloudinary.com/ds6spmr71/image/upload/v1685442179/assured_1_tdzqhy.png",
            link: "/ezassured",
          },
        ].map((data) => (
          <div
            key={data.type}
            className={`flex md:min-w-[200px] items-center rounded-full`}
          >
            <Link to={data.link}>
              <img
                src={data.icon}
                alt="Icon"
                className="h-6 md:h-14 hover:opacity-75"
              />
            </Link>
          </div>
        ))}
      </div>

      <div className="flex w-full flex-wrap md:flex-nowrap justify-between gap-5 py-5">
        {[
          {
            name: "You Demand, We Supply ",
            button: "eZ Karo !!!",
            link: "/main/ezkaroform",
            article:
              "Book now and experience the convenience of eZ Karo with our reliable and verified providers. Your satisfaction and work quality is our priority",
            img: "https://res.cloudinary.com/ds6spmr71/image/upload/v1685441528/Group_231_cwioy6.png",
          },
          {
            name: "Startup Community",
            button: "Join Now ",
            link: "/main/startupcommunity",
            article:
              "Join our vibrant community of like-minded individuals and innovators today and unlock endless opportunities for collaboration!",
            img: "https://res.cloudinary.com/ds6spmr71/image/upload/v1682998366/startup_zlgwwx.svg",
          },
          {
            name: "Start Selling  on eZ",
            button: "Become an eZer ",
            link: "/seller",
            article:
              "Join our vibrant community of like-minded individuals and innovators today and unlock endless opportunities for collaboration!",
            img: "https://res.cloudinary.com/ds6spmr71/image/upload/v1685441688/marketplace1_1_ocymvu.svg",
          },
        ].map((data) => {
          return (
            <div
              className="flex flex-col min-w-[300px] rounded-xl overflow-hidden bg-slate-50 hover:bg-green-100"
              key={data.name}
            >
              <div className="h-28 bg-slate-200 flex items-center p-3">
                <img
                  src={data.img}
                  alt="ez Karo
                  "
                  className="w-24"
                />
              </div>
              <div className="w-full p-2">
                <h1 className="font-bold text-xl text-green-500 underline p-2">
                  {data.name}
                </h1>
                <Link
                  to={data.link}
                  className="w-fit px-3 p-1 flex items-center m-1 bg-green-400 hover:bg-green-600 gap-2 text-base font-bold text-white rounded-xl"
                >
                  <BsCaretRightSquareFill />
                  {data.button}
                </Link>
                <p className="m-1 text-sm py-3 text-justify">{data.article}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="my-5 border-t">
        <h2 className="text-4xl font-semibold py-3 mt-3">Discover eZers </h2>
        <div className="flex gap-5 items-center mt-5 ">
          <span className="bg-gray-200 p-2 rounded-full hidden md:flex">
            <TbTableOptions size={40} />
          </span>
          <span className="bg-gray-200 p-2 rounded-full flex md:hidden items-center">
            <TbTableOptions size={24} />
          </span>
          <div>
            <h3 className="text-lg md:text-3xl font-semibold">
              BROWSE BY CATEGORY{" "}
            </h3>
            <p className="hidden md:block">
              Find anything you are looking for from mentors to industry
              professionals to founders and investors{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-between flex-wrap md:flex-nowrap px-5 md:px-10">
        {["Developers ", "Designers", "Data Scientists "].map((data, index) => {
          return (
            <div
              className=" h-52 w-full md:w-52 relative overflow-hidden rounded-lg mt-5 md:mt-0"
              key={index}
            >
              <h3 className="absolute flex justify-evenly  items-center z-10 top-5 text-white font-bold text-center w-full">
                {data}
                <FaArrowAltCircleRight className="fill-green-200" size={30} />
              </h3>
              <img
                className="w-full h-full absolute bg-cover z-0 inset-0 rounded-lg"
                src={
                  "https://res.cloudinary.com/db97icmxn/image/upload/v1685463659/DEVPIC_kedacb.jpg"
                }
                alt="Demo Icon"
              />
            </div>
          );
        })}
      </div>
      <div className="my-10">
        <h2 className="text-3xl font-semibold  py-3 underline underline-offset-3">
          Popular Professional eZers{" "}
        </h2>
      </div>
    </>
  );
}

export default StartupType;
