import "./Brands.css";
// import mcK from "../../../assets/McK.svg";
// import bain from "../../../assets/bain.svg";
// import ac from "../../../assets/Accenture.svg";
// import del from "../../../assets/Deloitte-Logo.wine.svg";
// import tata from "../../../assets/tcs.svg";
// import paytm from "../../../assets/Paytm-Logo.wine.svg";
// import flipkart from "../../../assets/Flipkart-Logo.wine.svg";
// import kpmg from "../../../assets/KPMG_logo.svg";
// import ey from "../../../assets/Ernst_&_Young_logo.svg";
// import uber from "../../../assets/uber-15.svg";
// import gs from "../../../assets/goldman-sachs-1.svg";
// import adobe from "../../../assets/adobe-44195.svg";
// import discord from "../../../assets/discord.svg";
// import byjus from "../../../assets/byju.svg";
// import cred from "../../../assets/Cred-Club.svg";
// import swiggy from "../../../assets/Swiggy_logo.svg";
import { useState } from "react";

function InifiniteLoop() {
  const [isAnimating, setIsAnimating] = useState(true);

  const toggleAnimation = () => {
    setIsAnimating(!isAnimating);
  };

  return (
    <>
      <div className="mt-6 mb-10 md:my-10">
        <h1
          className="font-400 flex justify-center items-center  text-3xl md:text-4xl xl:text-6xl
  font-bold text-green-600 px-7 py-3"
        >
          Connect with proffesionals
        </h1>
        <style></style>

        <div className="slider " onClick={toggleAnimation}>
          <div
            className="slide-track"
            style={{
              animation: isAnimating
                ? "scroll var(--animationSpeed) linear infinite"
                : "none",
            }}
          >
            <div className="slide">
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png"
                height="100"
                width="250"
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png"
                height="100"
                width="250"
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png"
                height="100"
                width="250"
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png"
                height="100"
                width="250"
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png"
                height="100"
                width="250"
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png"
                height="100"
                width="250"
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png"
                height="100"
                width="250"
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png"
                height="100"
                width="250"
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png"
                height="100"
                width="250"
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png"
                height="100"
                width="250"
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png"
                height="100"
                width="250"
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png"
                height="100"
                width="250"
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png"
                height="100"
                width="250"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default InifiniteLoop;
// 𝗨𝗯𝗲𝗿 India, 𝗔𝗺𝗮𝘇𝗼𝗻 London, 𝗚𝗼𝗹𝗱𝗺𝗮𝗻 𝗦𝗮𝗰𝗵𝘀 Poland, 𝗧𝗵𝗲 𝗗. 𝗘. 𝗦𝗵𝗮𝘄 𝗚𝗿𝗼𝘂𝗽 Luxembourg, 𝗔𝗱𝗼𝗯𝗲, 𝗔𝗺𝗲𝗿𝗶𝗰𝗮𝗻 𝗘𝘅𝗽𝗿𝗲𝘀𝘀, 𝗗𝗶𝘀𝗰𝗼𝗿𝗱, 𝗝𝗶𝗼, 𝗟𝗧𝗜𝗠𝗶𝗻𝗱𝘁𝗿𝗲𝗲, 𝗖𝗼𝗴𝗻𝗶𝘇𝗮𝗻𝘁
