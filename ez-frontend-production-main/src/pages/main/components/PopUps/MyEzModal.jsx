import React, { useState, useRef } from "react";
import ezKaroLogo from "../../../../Assets/ezKaro.svg";
import jinn from "../../../../Assets/loginjinn.svg";
import buy from "../../../../Assets/buynow.svg";
import search from "../../../../Assets/search left.svg";
import BuyServicesModal from "./BuyServicesModal";
import LookingForModal from "./LookingForModal";


function MyEzModal({closeEz}) {
  const [isBuyServiceClicked, setIsBuyServiceClicked] = useState(false);
  const [isLookingForClicked, setIsLookingForClicked] = useState(false);

  const modalRef = useRef(null);

  const handleBuyServiceClick = () => {
    
   setIsBuyServiceClicked(true);
  };

  const handleLookingForClick = () => {
    setIsLookingForClicked(true);
    
    setIsBuyServiceClicked(false); // set isBuyServiceClicked to false
  };

  const handleCloseModal = () => {
    modalRef.current.style.display = "none";
    closeEz(false);
    
  };
     
  return (
    <>
      {isBuyServiceClicked ? (
        <BuyServicesModal closeEz={closeEz} />
      ) : (
        <div className="transform -translate-y-1/2 w-100 h-50 ">
        
        <div className="max-w-2xl mx-auto bg-black " ref={modalRef}>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <div className="p-4">
              <button
                className="absolute top-14 right-4 text-white"
                onClick={handleCloseModal}
              >
                X
              </button>
              <label htmlFor="table-search" className="sr-only">
                Search
              </label>
              <div className="relative mt-1 flex justify-center">
                {/* ... */}
              </div>
              <p className="font-bold font-poppins text-green-400 text-base mt-4">
                How can we make your life “eZ” today?
              </p>
              <div className="mt-6 flex justify-center">
                <div className="mx-auto">
                  <img src={ezKaroLogo} alt="eZ Karo" />
                </div>
              </div>
              <div className="mt-6 flex justify-center" style={{ gap: "1rem" }}>
                <div className="flex flex-col justify-end items-center">
                  <a href="#" onClick={handleBuyServiceClick}>
                    <div
                      className="w-56 h-56 rounded-lg"
                      style={{ backgroundColor: "rgba(217, 217, 217, 0.2)" }}
                    >
                      <span className="text-white font-bold pt-12">
                        Buy Service
                      </span>
                      <div className="mx-auto mt-4">
                        <img src={buy} alt="buy services" />
                      </div>
                    </div>
                  </a>
                </div>
                {isLookingForClicked ? (
                  <LookingForModal />
                ) : (
                  <div className="flex flex-col justify-end items-center">
                    <a href="#" onClick={handleLookingForClick}>
                      <div
                        className="w-56 h-56 rounded-lg"
                        style={{ backgroundColor: "rgba(217, 217, 217, 0.2)" }}
                      >
                        <span className="text-white font-bold">
                          Looking For
                        </span>
                        <div className="mx-auto mt-4">
                          <img src={search} alt="looking for" />
                        </div>
                      </div>
                    </a>
                  </div>
                )}
              </div>
              <div className="mt-6 flex justify-center">
                <div className="mx-auto">
                  <img src={jinn} alt="jinn" />
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      )}
    </>
  );
}

export default MyEzModal;
