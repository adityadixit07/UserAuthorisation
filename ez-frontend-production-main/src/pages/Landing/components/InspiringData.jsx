import { FaAmazonPay } from "react-icons/fa";

const InspiringData = () => {
  return (
    <div style={{ background: "#030B22" }} className="mt-4">
      <div className=" flex items-center flex-col pb-4 ">
        <img
          src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt=""
          style={{ objectFit: "contain",height:"500px" }}
          className="rounded-xl border-2  border-white-400 "
        />
        <div className="-mt-16 flex items-center flex-col">
          <h3 className="-mt-3 text-white text-lg font-bold">Andrew</h3>
          <p className="text-blue-100 text-lg font-bold">UI/UX Designer</p>
          <button className="bg-white w-16 text-lg h-8 text-center flex items-center justify-center p-4">
            <FaAmazonPay />
          </button>
        </div>
      </div>

      <div className=" flex items-center justify-center">
        <button className="bg-green-600 m-4 pb-2 pt-2 pl-8 pr-8 rounded-lg text-xl">
          ez link
        </button>
      </div>
    </div>
  );
};

export default InspiringData;
