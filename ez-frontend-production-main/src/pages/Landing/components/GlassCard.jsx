
import BelieveUs from "./BelieveUs";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import img from "../../../assets/test_img.svg";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Testimonials.css";
SwiperCore.use([Navigation, Pagination]);

function Card() {
    
  return (
    <div className="bg-white rounded-lg shadow-lg flex flex-col w-full md:flex-row">
      <div className="flex w-full flex-col md:p-5  md:w-1/2">
        <div className=" flex justify-center">
          <img src={img} alt="Person 1" className="w-[80%] p-5" />
        </div>
        <div>
          <div className="flex justify-center gap-3">
            <span className="text-lg font-bold">Founder & CEO</span>
            <span className="text-gray-600 font-bold flex justify-center items-center">
              @ 10X VC
            </span>
          </div>
          <span className="text-green-600 font-semibold flex justify-center">
            Sanjay Malhotra
          </span>
        </div>
      </div>
      <div className="flex w-full rounded-lg md:w-2/3 p-9">
        <p className=" flex justify-center w-full items-center text-green-600 bg-gray-200  p-8  font-semibold md:w-[30rem]">
          "The level of professionalism and attention to detail that ez-"The One
          App" displayed throughout the entire process was remarkable. I am
          extremely impressed with their service."
        </p>
      </div>
    </div>
  );
}

function GlassCard() {
  return (
    <>
      <div>
        <BelieveUs />
        <div className="flex items-center justify-center">
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            navigation
            autoplay={{
              delay: 3000,
            }}
            loop={true}
            pagination={{ clickable: false }}
            className="w-full md:w-10/12  p-4"
          >
            <SwiperSlide>
              <Card />
            </SwiperSlide>
            <SwiperSlide>
              <Card />
            </SwiperSlide>
            <SwiperSlide>
              <Card />
            </SwiperSlide>
            <SwiperSlide>
              <Card />
            </SwiperSlide>
            <SwiperSlide>
              <Card />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default GlassCard;
