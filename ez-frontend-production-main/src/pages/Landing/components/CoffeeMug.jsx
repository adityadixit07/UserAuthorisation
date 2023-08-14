import { useState, useRef } from "react";
import eZ from "../../../assets/ez_karo-removebg-preview5.png";
import { Swiper, SwiperSlide } from "swiper/react";
import Component1 from "./CoffeeMugSub";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/swiper.min.css";
import "./customSwiperStyles.css";


function Ez_karo() {
  const [activeButton, setActiveButton] = useState(1);
  const swiperRef = useRef(null);

  const handleButtonClick = (index) => {
    setActiveButton(index);
    swiperRef.current.slideTo(index - 1);
  };

  return (
    <div className="w-full bg-gray-100 pt-20 md:pb-24">
      <div className="flex flex-col items-center p-2">
        <h1 className="font-bold text-3xl md:text-4xl xl:text-6xl pb-10">
          Unlock the power of
          <span className="text-green-600 rounded-lg">"eZ"</span>
        </h1>
        <div className="flex w-full overflow-x-auto rounded-lg scrolling-touch md:justify-center md:w-auto">
          <button
            onClick={() => handleButtonClick(1)}
            className={`rounded-l-lg border-2 cursor-pointer whitespace-nowrap md:text-md xl:text-xl border-green-400 w-1/2 md:w-1/3 px-5 py-2 ${activeButton === 1 ? "bg-green-300 text-white" : "bg-white"}`}
          >
            eZ karo
          </button>

          <button
            onClick={() => handleButtonClick(2)}
            className={`border-2 cursor-pointer whitespace-nowrap md:text-md xl:text-xl border-green-400 w-1/2 md:w-1/3 px-5 py-2 ${activeButton === 2 ? "bg-green-300 text-white" : "bg-white"}`}
          >
            1 : 1 Consultations
          </button>

          <button
            onClick={() => handleButtonClick(3)}
            className={`border-2 cursor-pointer whitespace-nowrap md:text-md xl:text-xl border-green-400 w-1/2 md:w-1/3 px-5 py-2 ${activeButton === 3 ? "bg-green-300 text-white" : "bg-white"}`}
          >
            Influencer Connect
          </button>

          <button
            onClick={() => handleButtonClick(4)}
            className={`border-2 cursor-pointer whitespace-nowrap md:text-md xl:text-xl border-green-400 w-1/2 md:w-1/3 px-5 py-2 ${activeButton === 4 ? "bg-green-300 text-white" : "bg-white"}`}
          >
            Workshops & Trainings
          </button>

          <button
            onClick={() => handleButtonClick(5)}
            className={`rounded-r-lg border-2 cursor-pointer whitespace-nowrap md:text-md xl:text-xl border-green-400 w-1/2 md:w-1/3 px-5 py-2 ${activeButton === 5 ? "bg-green-300 text-white" : "bg-white"}`}
          >
            Digital Products
          </button>
        </div>
        <div className="w-full overflow-hidden">
          <Swiper
            ref={swiperRef}
            slidesPerView={1}
            spaceBetween={20}
            navigation
            cssModule={{ navigationButtonNext: "custom-swiper-button-next", navigationButtonPrev: "custom-swiper-button-prev" }}
            pagination={{ clickable: true }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
              setActiveButton(swiper.activeIndex + 1);
            }}
            onSlideChange={(swiper) => {
              setActiveButton(swiper.activeIndex + 1);
            }}
          >
            <SwiperSlide>
              <Component1
                text="One Application ” to get you any service you want its simple You Demand, We Supply"
                button1="eZ Karo"
                button2="Become a Seller"
                img={eZ}
                para="Services Across Industries"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Component1
                text="Meet 1-on-1 with top industry Professionals and get advice, support, and feedback that’s 100% tailored to you."
                para=""
                img={
                  "https://res.cloudinary.com/db97icmxn/image/upload/v1685909930/hand_shake_b6hdhr.png"
                }
                button1="Get 1:1 Consultation"
                button2="Become an eZer"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Component1
                text="Connect with Creators Directly for your campaign"
                para="List your campaign on a unique marketplace and watch high-quality influencers apply to be part of it"
                button1="Create a Campaign"
                img={
                  "https://res.cloudinary.com/db97icmxn/image/upload/v1685909948/EZ_KARO_A_rvdlwq.png"
                }
                button2="Apply as an Influencer"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Component1
                text="Learn, Grow & Upskill Test"
                para="Participate in interactive workshops and training sessions conducted by industry experts"
                button1="Explore a Program"
                img={
                  "https://res.cloudinary.com/db97icmxn/image/upload/v1685909933/EZ_KARO_4_dkrcm9.png"
                }
                button2="Create a Program"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Component1
                text="Access Exclusive Digital Resources"
                para="Unlock a world of digital products and resources curated by top professionals"
                button1="Explore Digital Program"
                img={
                  "https://res.cloudinary.com/db97icmxn/image/upload/v1685909943/EZ_KARO_3_ml6yii.png"
                }
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Ez_karo;
