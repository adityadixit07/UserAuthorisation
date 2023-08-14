import { useState } from "react";
import { useSelector } from "react-redux";
import "./UpdateDetails.css";
import "antd";
import AccordianMain from "../../main/IndividualDashboard/AccordianMain";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function UpdateDetails({ percentage, profileRoute }) {
  const { user } = useSelector((state) => state.user);
  const [first, setFirst] = useState(true);
  const [second, setSecond] = useState(true);
  const [third, setThird] = useState(false);
  const [fourth, setFourth] = useState(false);

  return (
    <>
      <div
        className="ml-4 pt-5"
        style={{
          width: "95%",
          display: "flex",
          flexDirection: "column",
          marginTop: "2rem",
          boxShadow: "rgba(0, 0, 0, 0.12) 0px 5px 15px",
          borderRadius: "20px",
        }}
      >
        <div className="px-10 pt-2 rounded-lg">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-3xl font-bold">Get Started With</h2>
              <span className="text-xl">
                Use this personalized guide to get your page up and running.
              </span>
            </div>
            <div style={{ width: 100, height: 100 }}>
              <CircularProgressbar value={percentage} text={`${percentage}%`} />
            </div>
            {/* progress bar */}
            {/* <div className="profile-completion-bar w-full">
              <div style={{ width: `${percentage}%` }}>
                <div
                  className="profile-completion-circle"
                  style={{ left: `${percentage}%` }}
                >
                  <div className="profile-completion-pointer"></div>
                  <span className="text-[15px]">{percentage}%</span>
                </div>
              </div>
            </div> */}
          </div>

          <div>
            <AccordianMain profileRoute={profileRoute} />
          </div>
        </div>
      </div>
    </>
  );
}

export default UpdateDetails;
