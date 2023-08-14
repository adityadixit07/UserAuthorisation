import { useEffect, useState } from "react";
import "./myModal.css";
import "./MyPhotoModal.css";
import { ImImages } from "react-icons/im";
import { AiOutlineGif, AiFillCloseCircle } from "react-icons/ai";
import { BiLink, BiHeadphone } from "react-icons/bi";
import { BsCameraVideoFill } from "react-icons/bs";
import { FcTodoList } from "react-icons/fc";
import photo from "../../../../Assets/photo.svg";

const MyPhotoModal = ({ closeModal }) => {
  const [showModal, setShowModal] = useState(false);

  function handleModalOpen() {
    setShowModal(true);
  }

  function handleModalClose() {
    setShowModal(false);
  }

  function handlePhotoUpload(event) {
    // handle photo upload logic here
    // console.log(event.target.files[0]);
  }
  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, []);
  return (
    <>
      <div className="modal-wrapper2  bg-[#3C3C3C]" onClick={closeModal}></div>
      <div className="border border-white w-[775px] h-[60px] bg-[#3C3C3C] absolute">
        <div className="flex flex-col bg-[#3C3C3C]">
          <div className="flex flex-row gap-[24rem] bg-[#3C3C3C]">
            <div className="photoUploader">
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <button onClick={handleModalOpen}>
                  <img
                    src={photo}
                    alt=""
                    style={{
                      width: "99%",
                      height: "99%",
                      filter: "grayscale(100%)",
                    }}
                  />
                </button>
              </div>

              {showModal && (
                <div className="modal">
                  <div className="modal-content">
                    {/* <h2>Upload Photo</h2> */}
                    <form>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handlePhotoUpload}
                      />
                      <button type="submit">Upload</button>
                    </form>
                    <button onClick={handleModalClose}>Close</button>
                  </div>
                </div>
              )}
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <button onClick={handleModalOpen}>
                  <img
                    src={photo}
                    alt=""
                    style={{
                      width: "50%",
                      height: "50%",
                      marginLeft: "100px",
                      filter: "grayscale(100%)",
                    }}
                  />
                </button>
              </div>

              {showModal && (
                <div className="modal">
                  <div className="modal-content">
                    {/* <h2>Upload Photo</h2> */}
                    <form>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handlePhotoUpload}
                      />
                      <button type="submit">Upload</button>
                    </form>
                    <button onClick={handleModalClose}>Close</button>
                  </div>
                </div>
              )}
            </div>
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
              rows={8}
              cols={90}
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
        <div className="flex flex-row gap-[19rem] bg-[#3C3C3C]">
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
export default MyPhotoModal;
