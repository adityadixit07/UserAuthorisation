import { useState } from "react";
import OneToOneCarosel from "../carousel/OnetoOneCarosel";
import Typewriter from "typewriter-effect";

const MarketStrategy = () => {
  const [activeButton, setActiveButton] = useState(0);
  const buttonStyle = {
    borderRadius: "2rem",
    backgroundColor: "rgb(225, 221, 221)",
    padding: "5px 19px",
    fontSize: "20px",
    fontWeight: "500",
    color: "black",
  };
  const activeButtonStyle = {
    ...buttonStyle,
    backgroundColor: "rgb(0, 155, 43)",
    color: "white",
  };
  const buttons = [
    "1:1 consultations",
    "Services",
    "Influencer Connect",
    "Digital Product",
  ];
  const categories = [
    "New",
    "Chatgpt+ GEN-A.I.",
    "Data Science and ML",
    "Management",
    "Marketing",
    "Technology",
    "Career Planning",
    "Law",
  ];
  const textArray = [
    "Need a Market Approach?",
    "Stuck on Market Entry?",
    "Entry Plan Uncertainty?",
    "Seeking Market Path?",
    "Pondering Market Debut?",
    "Market Entry Roadblock?",
    "Entry Tactics Struggle?",
  ];

  return (
    <div className="flex flex-col">
      <div className="flex flex-col">
        <h1 className="font-bold text-4xl ">
          Struggle Regarding
          <span style={{ color: "blue" }} >
            <Typewriter
              options={{
                strings: textArray.map((item) => item),
                autoStart: true,
                loop: true,
                delay: 100,
              }}
            />
          </span>
          <br />A growth mentor can help with that.
        </h1>
      </div>
      <div className="flex flex-row gap-3 justify-center ">
        {buttons.map((label, index) => (
          <button
            key={index}
            style={index === activeButton ? activeButtonStyle : buttonStyle}
            onClick={() => setActiveButton(index)}
            className="text-white"
          >
            {label}
          </button>
        ))}
      </div>
      <div className="gap-5 flex flex-row justify-center items-center mt-8 py-1 md:flex-wrap">
        {categories.map((category, id) => (
          <button
            key={id}
            className="font-medium bg-gray-100 p-3 rounded-lg hover:bg-gray-300 hover:transition-all hover:ease-in-out"
          >
            {category}
          </button>
        ))}
      </div>
      <div>
        <OneToOneCarosel />
      </div>
    </div>
  );
};

export default MarketStrategy;
