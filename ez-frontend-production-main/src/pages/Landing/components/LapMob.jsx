import React, { useState, useEffect } from "react";
import Laptop from "../../../assets/laptop.png";
import Mobile from "../../../assets/ezmobile.png";
import "./LapMob.css";

const imagesLaptop = [
  {
    id: 1,
    src: "https://plus.unsplash.com/premium_photo-1683553623182-7d42aad30ee0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEyfENEd3V3WEpBYkV3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 2,
    src: "https://plus.unsplash.com/premium_photo-1683198950873-02c8e20c2742?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE3fENEd3V3WEpBYkV3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
];
const imagesMobile = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1677274338105-71377ce4195a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fEltYWdlcyUyMGZvciUyMG1vYmlsZSUyMHZpZXd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1627334509322-2f81380cdbbd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fEltYWdlcyUyMGZvciUyMG1vYmlsZSUyMHZpZXd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
  },
];
const LapMob = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Set up the interval for automatic sliding
    const interval = setInterval(() => {
      // Increment the current index to move to the next slide
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imagesLaptop.length);
    }, 2000); // 2 second interval

    return () => {
      clearInterval(interval);
    };
  }, [imagesLaptop.length]);

  return (

    <div className="LapMob shadow-xl shadow-green-200 border-t-4 border-green-200 rounded-lg md:m-[5rem] space-y-6">
      <div className='imboxtextcont'> 
      <div className='imbox'> 
      <div className="images-container">
        <div className="laptop-container flex flex-col md:flex-row">
          <img src={Laptop} alt="Laptop"  className='lapIam w-full md:w-1/2 h-1/2' />
          <div
            className="w-full md:w-1/2 p-[1rem] md:p-[5rem] space-y-3"
          >
           <h1 className="text-3xl md:text-4xl xl:text-6xl py-4 font-bold text-green-600 text-center"> Build a Pick My eZ profile</h1>
          
          <p className="text-lg md:text-xl text-green text-center">
            Let the world know they can now formally book and pay for your time,
            knowledge, experience, ideas, wisdom, energy, passions, and unique
            offers
          </p>
          <div className="flex flex-col items-center enter">
            <button className="bg-green-500 hover:bg-green-600 text-white font-bold px-6 py-3 rounded">
              START A PROFILE
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
    </div>
  );
          }
export default LapMob;
