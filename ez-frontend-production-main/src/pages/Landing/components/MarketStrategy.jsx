import { useState } from "react";
import OneToOneCarosel from "../carousel/OnetoOneCarosel";

const MarketStrategy = () => {
    const [activeButton,setActiveButton]=useState(0);
  const buttonStyle = {
    borderRadius: "2rem",
    backgroundColor: "rgb(225, 221, 221)",
    padding: "5px 19px",
    fontSize:"20px",
    fontWeight:"500",
    color:"black"
  };
  const activeButtonStyle = {
    ...buttonStyle,
    backgroundColor: 'rgb(0, 155, 43)',
    color:"white"
  };
  const buttons = [
    "1:1 consultations",
    "Services",
    "Influencer Connect",
    "Digital Product",
  ];
  const categories=[
    'Graphic Design',
    'Programming & Tech',
    'Digital Marketing',
    'Videos & Animation',
    'Writing & Translation',
    'Music & Audio',
    'Business',
    'Data',
    'Photography',
    'All Services'
  ]


  return (
    <div className="flex flex-col">
      <div className="flex flex-col">
        <h1 className="font-bold text-4xl">
          Struggling with{" "}
          <span style={{ color: "blue" }}>go to Market Strategy?</span>
          <br />A growth mentor can help with that.
        </h1>
      </div>
      <div className="flex flex-row gap-3 justify-center">
        {
            buttons.map((label,index)=>(
                <button
                key={index}
                style={index===activeButton?activeButtonStyle:buttonStyle}
                onClick={()=>setActiveButton(index)} className="text-white"
                >{label}</button>
            ))
        }
      </div>
      <div className="border-2 flex flex-row justify-around mt-8 py-1">
        {
            categories.map((category)=>(
                <button className="font-normal">{category}</button>
            ))
        }
       
      </div>
      <div>
        <OneToOneCarosel />
      </div>
    </div>
  );
};

export default MarketStrategy;



