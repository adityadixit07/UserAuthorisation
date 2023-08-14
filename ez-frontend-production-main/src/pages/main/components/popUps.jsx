import { useState } from "react";
import userPic from "../../../assets/pfp.svg";
import logo from "../../../Assets/logo.svg";
import text from "../../../Assets/text.svg";
import photo from "../../../Assets/photo.svg";
import link from "../../../Assets/link.svg";
import poll from "../../../Assets/poll.svg";
import question from "../../../Assets/question.svg";
import resources from "../../../Assets/resources.svg";
import MyTextModal from "./PopUps/MyTextModal";
import MyPhotoModal from "./PopUps/MyPhotoModel";
import MyPollModal from "./PopUps/MyPoll";
import MyEzModal from "./PopUps/MyEzModal";
// import LookingForModal from "./PopUps/LookingForModal";
import BuyServicesModal from "./PopUps/BuyServicesModal";
import MyLinkModal from "./PopUps/MyLinkModel";
import SearchIcon from "@mui/icons-material/Search";
import { AiOutlineSearch } from "react-icons/ai";
import "../css/Startup.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import EzKaroForm from "../EzKaroForm";

export default function Popups() {
  const [showEz, setshowEz] = useState(false);
  const [showText, setshowText] = useState(false);
  const [showPhoto, setshowPhoto] = useState(false);
  const [showLink, setshowLink] = useState(false);
  const [showPoll, setshowPoll] = useState(false);
  const closeEz = () => setshowEz(false);
  const closeText = () => setshowText(false);
  const closePhoto = () => setshowPhoto(false);
  const closelink = () => setshowLink(false);
  const closePoll = () => setshowPoll(false);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
      slidesToSlide: 6, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 5,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <>
      {/* ------ code for laptop starts--------*/}
      <div className="eyeOpenI nverse flex flex-col gap-[1rem] mt-5 md:flex-row ">
        <div className="profilepicture flex">
          <img src={userPic} alt="userPic" />
        </div>
        <div className="baritems flex flex-row gap-[1rem] bg-[#3C3C3C] p-2 rounded-[1rem]">
          <div>
            <img
              className="h-[2rem]"
              src={logo}
              onClick={() => setshowEz(true) }
              alt=""
            />
            <p>eZ karo</p>
            <div
              className={`${
                showEz
                  ? "absolute left-5 right-5 top-[550px] md:left-48 md:right-[600px] z-20"
                  : "hidden"
              }`}
            >
              {showEz && <MyEzModal closeEz={closeEz} />}
              {/* MyEzModal will be here  */}
            </div>
          </div>
          <div className="flex flex-col gap-[0.5rem]">
            <img
              className="h-[2rem]"
              src={text}
              onClick={() => setshowText(true)}
              alt=""
            />
            <p>text</p>
            <div
              className={`${
                showText
                  ? "absolute left-5 right-5 top-[550px] md:left-48 md:right-[600px] z-20"
                  : "hidden"
              }`}
            >
              {showText && <MyTextModal closeModal={closeText} />}
            </div>
          </div>
          <div className="flex flex-col gap-[0.5rem]">
            <img
              className="h-[2rem]"
              src={photo}
              onClick={() => {
                setshowPhoto(true);
              }}
              alt=""
            />
            <p>photo</p>
            <div
              className={`${
                showPhoto
                  ? "absolute left-5 right-5 top-[550px] md:left-48 md:right-[600px] z-20"
                  : "hidden"
              }`}
            >
              {showPhoto && <MyPhotoModal closeModal={closePhoto} />}
            </div>
          </div>
          <div className="flex flex-col gap-[0.5rem]">
            <AiOutlineSearch className="fill-orange-400" size={40} />
            <p className="flex flex-row">Looking for</p>
          </div>
          <div className="flex flex-col gap-[0.5rem]">
            <img
              className="h-[2rem]"
              onClick={() => setshowLink(true)}
              src={link}
              alt=""
            />
            <p>link</p>
            <div
              className={`${
                showLink
                  ? "absolute left-5 right-5 top-[550px] md:left-48 md:right-[600px] z-20"
                  : "hidden"
              }`}
            >
              {showLink && <MyLinkModal closeModal={closelink} />}
            </div>
          </div>
          <div className="flex flex-col gap-[0.5rem] ">
            <img
              className="h-[2rem]"
              src={poll}
              alt=""
              onClick={() => {
                setshowPoll(true);
              }}
            />
            <p>poll</p>
            <div
              className={`${
                showPoll
                  ? "absolute left-5 right-5 top-[550px] md:left-48 md:right-[600px] z-20"
                  : "hidden"
              }`}
            >
              {showPoll && <MyPollModal closeModal={closePoll} />}
            </div>
          </div>
          <div className="flex flex-col gap-[0.5rem]">
            <img className="h-[2rem]" src={question} alt="" />
            <p>question</p>
          </div>
          <div className="flex flex-col gap-[0.5rem]">
            <img className="h-[2rem]" src={resources} alt="" />
            <p>resources</p>
          </div>
        </div>
        {/* <div className="search-bar h-[50px]  w-60">
          <SearchIcon className="search-icon" />
          <input type="text" placeholder="Search discusions" />
        </div> */}
      </div>
      {/* ------ code for laptop ends--------*/}

      {/* ------ code for mobile and tablets start--------*/}
      <div className="search-bar-1 h-[50px] mt-2 w-10/12 ">
        <SearchIcon />
        <input type="text" placeholder="Search discusions" />
      </div>
      <div className="bar-items-1 bg-[#3C3C3C] m-4px p-2 rounded lg:hidden">
        <Carousel
          responsive={responsive}
          swipeable={true}
          draggable={true}
          showDots={true}
          itemClass="custom-curousel"
        >
          <div className="logo gap-[0.5rem]">
            <img
              className="h-[2rem]"
              src={logo}
              onClick={() => setshowEz(true)}
              alt=""
            />
            <p className="flex flex-row text-center text-white">eZ karo</p>
            {showEz && <EzKaroForm closeModal={closeEz} />}
          </div>
         
          <div className="flex flex-col gap-[0.5rem]">
            <img
              className="h-[2rem]"
              src={text}
              onClick={() => setshowText(true)}
              alt=""
            />
            <p className="text-center text-white">text</p>
            {showText && <MyTextModal closeModal={closeText} />}
          </div>
          <div className="flex flex-col gap-[0.5rem]">
            <img
              className="h-[2rem]"
              src={photo}
              onClick={() => {
                setshowPhoto(true);
              }}
              alt=""
            />
            <p className="text-center text-white">photo</p>
            {showPhoto && <MyPhotoModal closeModal={closePhoto} />}
          </div>
          <div className="flex flex-col gap-[0.5rem]">
            <AiOutlineSearch className="fill-orange-400" size={40} />
            <p className="flex flex-row text-white">Looking for</p>
          </div>
          <div className="flex flex-col gap-[0.5rem]">
            <img
              className="h-[2rem]"
              onClick={() => setshowLink(true)}
              src={link}
              alt=""
            />
            <p className="text-center text-white">link</p>
            {showLink && <MyLinkModal closeModal={closelink} />}
          </div>
          <div className="flex flex-col gap-[0.5rem]">
            <img className="h-[2rem]" src={poll} alt="" />
            <p className="text-center text-white">poll</p>
            {showPoll && <MyPollModal closeModal={closePoll} />}
          </div>
          <div className="flex flex-col gap-[0.5rem]">
            <img className="h-[2rem]" src={question} alt="" />
            <p className="text-center text-white">question</p>
          </div>
          <div className="flex flex-col ">
            <img className="h-[2rem]" src={resources} alt="" />
            <p className="text-center text-white">resources</p>
          </div>
        </Carousel>
      </div>

      {/* ------ code for mobile and tablets end--------*/}
      <div
        className={`${
          showText || showLink || showPoll || showPhoto
            ? "fixed inset-0 bg-black opacity-75 z-10"
            : "hidden"
        }`}
      ></div>
    </>
  );
}
