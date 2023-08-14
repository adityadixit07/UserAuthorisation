import { useSelector } from "react-redux";
import AnalyticMain from "./AnalyticMain";
import RevenueMain from "./Extras/RevenueMain";
import uniqueViewEye from "../../../../assets/ez-logo/uniqueViewEye.svg";
import pageViewEye from "../../../../assets/ez-logo/pageViewEye.svg";
import buynoweye from "../../../../assets/ez-logo/buynoweye.svg";
import { BiUpArrow } from "react-icons/bi";
import "../Overviewpage.css";

const Analytics = ({ profileViews, uniqueViews }) => {
  const { isFetchingBookings, bookings } = useSelector((state) => state.seller);
  const boxstyle = {
    boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.4)",
    background: "#F9FBFC",
    height: "160px",
    width: "210px",
    borderRadius: "14px",
  };
  return (
    <div
      className="rounded pt-8 ml-3 pb-8 page-overview-section mt-8"
      style={{
        width: "95%",
        boxShadow: "rgba(0, 0, 0, 0.12) 0px 5px 15px",
        borderRadius: "20px",
      }}
    >
     <div className="ml-3">
     <h1 className="text-3xl font-bold" style={{ color: "#424242" }}>
        Page Overview{" "}
      </h1>
      <h1 className="optionbutton pr-3 py-4">
        <select className="border py-2 px-1 border-black rounded-xl">
          <option value="option1">Last 7 days </option>
          <option value="option2">Last 2 days </option>
          <option value="option3">Last 3 days </option>
        </select>
      </h1>

      <div className="flex justify-evenly analytic-section" style={{ marginTop: "-50px" }}>
        <AnalyticMain
          viewsName={"Page Views"}
          viewsCount={profileViews}
          imageSrc={pageViewEye}
        />
        <AnalyticMain
          viewsName={"Unique Visitors"}
          viewsCount={uniqueViews}
          imageSrc={uniqueViewEye}
        />

        {!isFetchingBookings && (
          <>
            <div
              className="flex flex-col justfiy-between items-center buynow-box"
              style={boxstyle}
            >
              <div className="ml-3 pt-2">
                <h1 className="text-xl text-center buynow-text" style={{ fontWeight: 500 }}>
                  Buy Now Clicks
                </h1>
                <div className="flex flex-row justify-evenly mt-4 items-center">
                  <h1 className="text-2xl font-medium">{uniqueViews}</h1>
                  <span>
                    <img src={buynoweye} alt="" />
                  </span>
                </div>
                <div className="flex flex-row items-center gap-2 mt-4">
                  <BiUpArrow />
                  <h3
                    className="text-xl font-medium"
                    style={{ color: "#63B981" }}
                  >
                    171.22%
                  </h3>
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      {/* earning portion start  */}

      <h1 className="text-3xl font-bold mt-4" style={{ color: "#424242" }}>
        Your Earnings
      </h1>

      <div className="flex items-center justify-evenly mt-4 revenue-section">
        <RevenueMain
          viewsName={"Revenue"}
          data={1214}
          imageSrc={uniqueViewEye}
        />
        <RevenueMain
          viewsName={"Transaction"}
          data={322342}
          imageSrc={uniqueViewEye}
        />
      </div>
     </div>
    </div>
  );
};

export default Analytics;
