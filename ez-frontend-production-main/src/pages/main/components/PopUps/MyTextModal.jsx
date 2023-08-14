import { useEffect } from "react";
import "./myModal.css";
import { ImImages } from "react-icons/im";
import { AiOutlineGif, AiFillCloseCircle } from "react-icons/ai";
import { BiLink, BiHeadphone } from "react-icons/bi";
import { BsCameraVideoFill } from "react-icons/bs";
import { FcTodoList } from "react-icons/fc";

const MyTextModal = ({ closeModal }) => {
  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "scroll";
      document.body.style.display="hidden"
    };
  }, []);
  return (
    <>
      <div className="modal-wrapper  bg-[#3C3C3C]" onClick={closeModal}></div>
      <div className="border border-white hero bg-[#3C3C3C] ">
        <div className="flex flex-col bg-[#3C3C3C]">
          <div className="flex flex-row gap-[24rem] bg-[#3C3C3C]">
            <input
              className="bg-[#3C3C3C] h-[2rem] ml-[1rem]"
              type="text"
              placeholder="Title"
              aria-label="default input example"
            ></input>
            <AiFillCloseCircle
              className="fill-red-500"
              size={24}
              onClick={closeModal}
            />
          </div>
          <div className="flex flex-row bg-[#3C3C3C]">
            <textarea
              className="bg-[#3C3C3C] text-white"
              placeholder="Put your thoughts in.. "
              rows={18}
              cols={70}
            />
            <div className="flex flex-row gap-3">
              <ImImages className="fill-red-500" size={24} />
              <AiOutlineGif className="fill-yellow-500" size={24} />
              <BiLink className="fill-green-500" size={24} />
              <BiHeadphone className="fill-purple-500" size={24} />
              <BsCameraVideoFill className="fill-pink-500" size={24} />
              <FcTodoList className="fill-blue-500" size={24} />
            </div>
          </div>
          <input
            className="bg-[#3C3C3C] h-[2rem] ml-[1rem]"
            type="text"
            placeholder="#add tags"
          ></input>
        </div>
        <div className="flex flex-row gap-[19rem] mt-10 bg-[#3C3C3C]">
          <button
            className="justify-start rounded-[1.3rem] bg-black px-3 py-2"
            onClick={closeModal}
          >
            Submit
          </button>
          <div className=" flex flex-row gap-[1rem] bg-[#3C3C3C]">
            <button className="rounded-[1rem] bg-black px-3 py-2 text-white">
              For Everyone
            </button>
            <button className="rounded-[1rem] bg-black px-3 py-2">Post</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default MyTextModal;
