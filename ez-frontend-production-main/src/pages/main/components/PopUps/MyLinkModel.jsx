import { useEffect } from "react";
import "./myModal.css";
import {  AiFillCloseCircle } from "react-icons/ai";
import { Settings } from "@mui/icons-material";

const MyLinkModal = ({ closeModal }) => {
  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, []);

  // return (
  //   <>
      {/* <form id="link-form">
  <label for="link-input">Enter a link:</label>
  <input type="text" id="link-input"/>
  <button type="submit">Save</button>
</form>

<ul id="link-list"/> */}
      {/* <div
        id="linkContainer"
        className="w-[25vw] h-[15vw] modal-container border border-white "
      >
        <div className=" flex flex-col">
          <div className="flex flex-row bg-[#3C3C3C] items-center ">
            <h2 className="flex flex-start justify-start  ">randosd</h2>
            <div className="setting ">
              <Settings />
            </div>
          </div>
          <textarea
            className="h-12 bg-[#3C3C3C] text-white"
            placeholder="Type or paste link "
            rows={8}
            cols={80}
          />
        </div>

        <textarea
          id="tags"
          type="text"
          className=" h-12 bg-[black] text-white"
          placeholder="#add tags "
          rows={8}
          cols={60}
        />
      </div>
      <div className="buttons">
        <div className="closeBtn bg-[#3C3C3C]" onClick={closeModal}>
          <button>Close</button>
        </div>
        <div className="forWhom ">
          <button>For Everyone</button>
        </div>
        <div className="postNow bg-[blue]">
          <button onClick={closeModal}>Post now</button>
        </div>
      </div> */}
    // </>
      useEffect(() => {
        document.body.style.overflowY = "hidden";
        return () => {
          document.body.style.overflowY = "scroll";
        };
      }, []);
      return (
        <>
          <div className=" modal-wrapper  bg-[#3C3C3C]" onClick={closeModal}></div>
          <div className="linkPopup border border-white bg-[#3C3C3C] absolute">
            <div className="flex flex-col bg-[#3C3C3C]">
              <div className="flex flex-row gap-[24rem] bg-[#3C3C3C]">
                <input
                  className="bg-[#3C3C3C] h-[2rem] ml-[1rem]"
                  type="text"
                  placeholder=""
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
                  placeholder="Type or paste link  "
                  rows={18}
                  cols={20}
                />
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
export default MyLinkModal;
