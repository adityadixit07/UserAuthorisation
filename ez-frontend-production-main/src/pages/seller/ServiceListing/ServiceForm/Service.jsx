import React, { useRef, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "../sellerr.css";
import EmojiPicker from "emoji-picker-react";

import { MdOutlinePriceChange } from "react-icons/md";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { FaMailBulk } from "react-icons/fa";
import { AiOutlineMinus, AiOutlineUpload } from "react-icons/ai";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { BiTimeFive } from "react-icons/bi";
import { GiRibbonMedal } from "react-icons/gi";
import { IoMdAdd, IoMdClose } from "react-icons/io";

import Questions from "./NewForm/Questions";
// import Parity from "./NewForm/Parity";
import { useDispatch } from "react-redux";
import { createSellerCatalogWithImage } from "../../../../actions/sellerActions";
import { toast } from "react-hot-toast";
import Tags from "./NewForm/Tags";
import { showMissingInput } from "../../../../hooks/showMissingInput";
import { Box, Container } from "@mui/material";
import mainLogoEz from "../../../../assets/ez-logo/mainlogo-ex.png";

// const icon = ["👍", "❤️", "👌", "👍", "✌️"];

function Service({ user, setOpenComingSoon }) {
  const dispatch = useDispatch();

  const fileThumbnailRef = useRef();
  const [thumbnailImage, setThumbnailImage] = useState("");
  const [thumbnailImageFile, setThumbnailImageFile] = useState(null);
  const handleThumbnailFileChange = (e) => {
    setThumbnailImage(URL.createObjectURL(e.target.files[0]));
    setThumbnailImageFile(e.target.files[0]);
    e.target.value = "";
  };

  const fileCoverRef = useRef();
  const [coverImage, setCoverImage] = useState("");
  const [coverImageFile, setCoverImageFile] = useState(null);
  const handleCoverFileChange = (e) => {
    setCoverImage(URL.createObjectURL(e.target.files[0]));
    setCoverImageFile(e.target.files[0]);
    e.target.value = "";
  };

  const [itemTitle, setItemTitle] = useState("");
  const [subHeading, setSubHeading] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [tag, setTag] = useState("");
  const [savedTags, setSavedTags] = useState([]);
  const [paymentType, setPaymentType] = useState("");
  const [price, setPrice] = useState("");
  const [currency, setCurrency] = useState("₹");
  // const [parity, setParity] = useState(false);
  const [offeringName1, setOfferingName1] = useState("");
  const [offeringName2, setOfferingName2] = useState("");
  const [offeringDesc1, setOfferingDesc1] = useState("");
  const [offeringDesc2, setOfferingDesc2] = useState("");
  const [deliveryTime, setDeliveryTime] = useState("");
  const [sellerType, setSellerType] = useState("");
  const [check, setcheck] = useState(null);
  const [sellercheck, setsellercheck] = useState(null);
  const [question, setQuestion] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [savedQuestions, setSavedQuestions] = useState([]);
  const [emoji1, setEmoji1] = useState(null);
  const [emoji2, setEmoji2] = useState(null);
  const [offeringClick, setOfferingClick] = useState(false);
  const [showEmoji1, setShowEmoji1] = useState(false);
  const [showEmoji2, setShowEmoji2] = useState(false);

  function htmlToPlainText(html) {
    const div = document.createElement("div");
    div.innerHTML = html;
    return div.textContent || div.innerText || "";
  }
  function handleEditorChange(htmlContent) {
    const plainText = htmlToPlainText(htmlContent);
    setDescription(plainText);
  }
  const handleChangeTag = () => {
    if (tag === "") {
      return toast.error("Tag cannot be empty!");
    }
    setSavedTags([...savedTags, tag]);
    setTag("");
  };
  const handleRemoveTag = (index) => {
    setSavedTags(savedTags.filter((_, i) => i !== index));
  };
  function handleOfferingDesc1(htmlContent) {
    const plainText = htmlToPlainText(htmlContent);
    setOfferingDesc1(plainText);
  }
  function handleOfferingDesc2(htmlContent) {
    const plainText = htmlToPlainText(htmlContent);
    setOfferingDesc2(plainText);
  }

  const handleSaveQuestion = () => {
    if (question !== "") {
      setSavedQuestions([...savedQuestions, question.trim()]);
      setQuestion("");
    }
  };

  const handleEmojiSelect1 = (emojiObject) => {
    setEmoji1(emojiObject.native);
  };
  const handleEmojiSelect2 = (emojiObject) => {
    setEmoji2(emojiObject.native);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!itemTitle) {
      return showMissingInput({ type: "text", missing: "item title!" });
    } else if (!description) {
      return showMissingInput({ type: "text", missing: "item description!" });
    } else if (!paymentType) {
      return showMissingInput({ type: "option", missing: "type of payment!" });
    } else if (!currency) {
      return showMissingInput({ type: "option", missing: "type of currency!" });
    } else if (!price) {
      return showMissingInput({ type: "text", missing: "item price!" });
    } else if (!deliveryTime) {
      return showMissingInput({ type: "option", missing: "delivery period!" });
    } else if (!sellerType) {
      return toast.error("Please specify seller type!");
    } else if (!thumbnailImageFile) {
      return toast.error("Upload thumbnail image!");
    } else if (!coverImageFile) {
      return toast.error("Upload cover image!");
    } else if (!user.username) {
      return toast.error("You need to create your Username to proceed!");
    }

    const trimmedOfferingName1 = offeringName1.trim();
    const trimmedOfferingDesc1 = offeringDesc1.trim();
    if (!trimmedOfferingName1) {
      const missingField = !trimmedOfferingName1 && "what are you offering #1";
      return toast.error(`Please provide ${missingField}!`);
    }
    if (offeringClick) {
      const trimmedOfferingName2 = offeringName2.trim();
      if (!trimmedOfferingName2) {
        const missingField =
          !trimmedOfferingName2 && "what are you offering #2";
        return toast.error(`Please provide ${missingField}!`);
      }
    }

    const offering1 = {
      name: trimmedOfferingName1,
    };
    if (trimmedOfferingDesc1) {
      offering1.description = trimmedOfferingDesc1;
    }

    const catalogData = {
      serviceType: "Service Package",
      itemTitle: itemTitle.trim(),
      subHeading,
      category: category,
      tags: savedTags.map((item) => {
        return { tag: item };
      }),
      description: description.trim(),
      price: {
        typeOfPayment: paymentType,
        currencyCode: currency,
        amount: price,
      },
      // purchasingParity: parity,
      deliverables: [
        offering1,
        ...(offeringClick
          ? [
            {
              name: offeringName2.trim(),
              description: offeringDesc2.trim(),
            },
          ]
          : []),
      ],
      delivery: {
        deliveryTime: deliveryTime,
      },
      sellerType: sellerType,
      ...(name !== "" &&
        email !== "" && {
        guest: {
          name: name.trim(),
          email: email.trim(),
        },
      }),
      ...(savedQuestions.length !== 0 && {
        questionForAttendee: {
          question: savedQuestions,
        },
      }),
      seller_avatar: user?.avatar?.url || "",
      username: user.username,
    };

    dispatch(createSellerCatalogWithImage({
      thumbnail: thumbnailImageFile,
      cover: coverImageFile,
      catalogData: catalogData
    }));
  };

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      [{ color: [] }],
      [{ align: [] }],
      // ['link', 'image', "video"],
    ],
  };

  return (
    <>
      <Container sx={{ boxShadow: "rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset", mt: '3rem', mb: '3rem' }}>
        <Box display='flex' justifyContent="space-between" alignItems='center'>
          <img
            src={mainLogoEz}
            alt="main-log"
            style={{ marginTop: "-45px", marginLeft: "40%", height: "60%" }}
          />
        </Box>
        <form onSubmit={handleSubmit} className=" py-14">
          <div className="flex flex-col gap-20">
            <div className="flex flex-col pb-5 border-b">
              {/* gap-4 pb-10 */}
              <div className="flex flex-row justify-between">
                <div className="w-full flex flex-col gap-3 pb-10">
                  <label
                    htmlFor="title"
                    className=" mb-2 text-sm font-semibold text-gray-900"
                  >
                    <h2 className="py-1.5 w-fit px-10 shadow-md rounded-[10px] bg-slate-100 flex gap-5 items-center">
                      <HiOutlinePencilSquare className="" size={35} />
                      Title
                    </h2>
                  </label>
                  <input
                    type="text"
                    value={itemTitle}
                    onChange={(e) => setItemTitle(e.target.value)}
                    id="title"
                    aria-describedby="helper-text-explanation"
                    className="w-full md:w-1/2 bg-gray-50 border border-gray-300 text-slate-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5   dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Best One Liner to describe what you are offering ! "
                  />
                  <input
                    type="text"
                    value={subHeading}
                    onChange={(e) => setSubHeading(e.target.value)}
                    id="title"
                    aria-describedby="helper-text-explanation"
                    className="w-full md:w-1/4 bg-gray-50 border border-gray-300 text-slate-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5   dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Add Subheadline"
                  />
                </div>
                {/* <div className="flex flex-col gap-3">
                  <div>
                    <span style={{ color: "green" }}>View Engaging Expemplers</span>
                  </div>
                  <div className="imagebox flex flex-col" style={{ border: '3px dotted green', borderRadius: "5px", padding: "3rem 0", width: '75%' }}>
                    <input type="file" multiple accept="image/*" placeholder="Choose Photo Product" />
                    <span>Link you profile</span>
                  </div>
                  <div className="description">
                    <span>Please add your photo to enhace your profile</span>
                  </div>
                </div> */}
              </div>

              <div className="flex flex-col gap-4 pb-10">
                <label
                  htmlFor="description"
                  className=" mb-2 text-sm font-semibold text-gray-900"
                >
                  <h2 className="py-1.5 w-fit px-10 shadow-md rounded-[10px] bg-slate-100 flex gap-5 items-center">
                    <FaMailBulk className="fill-green-500" size={35} />
                    Description
                  </h2>
                </label>
                <ReactQuill
                  theme="snow"
                  onChange={handleEditorChange}
                  modules={modules}
                  className="md:w-[70%] w-full  customeditor"
                />
                {/* <div className="md:w-[70%] w-full "><div dangerouslySetInnerHTML={{ __html: quil }} className="w-full"></ div></div> */}
              </div>

              <div className="flex flex-col gap-4 pb-10">
                <label
                  htmlFor="title"
                  className="text-sm font-semibold text-gray-900"
                >
                  <h2 className="py-1.5 w-fit px-10 rounded-[10px] bg-slate-100 flex gap-5 items-center">
                    <HiOutlinePencilSquare size={35} />
                    Category
                  </h2>
                </label>
                <input
                  type="text"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  id="title"
                  aria-describedby="helper-text-explanation"
                  className="w-full md:w-[40%] bg-gray-50 border border-gray-300 text-slate-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5   dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="One word service category"
                />
              </div>

              <Tags
                tag={tag}
                setTag={setTag}
                handleChangeTag={handleChangeTag}
                savedTags={savedTags}
                handleRemoveTag={handleRemoveTag}
              />

              <div className="flex flex-col gap-4 pb-10">
                <label
                  htmlFor="Pricing"
                  className="text-sm font-semibold text-gray-900"
                >
                  <h2 className="py-1.5 w-fit shadow-md px-10 rounded-[10px] bg-slate-100 flex gap-5 items-center">
                    <MdOutlinePriceChange size={35} />
                    Pricing
                  </h2>
                </label>
                <h2 className="font-bold">Choose Type of Payment</h2>
                <ul className="p-3 md:w-[50%]  w-full rounded-[10px] shadow-lg">
                  <div className="flex w-full pb-3 justify-between">
                    {[
                      "Hourly Rate",
                      "Prefixed Service Fee",
                      "Need custom Quote",
                    ].map((option, i) => (
                      <div key={i}>
                        <div className="flex w-full flex-col gap-3 items-center">
                          <li
                            key={option}
                            className="cursor-pointer w-28 relative h-28 rounded-[10px] bg-slate-200"
                            onClick={() => setPaymentType(option)}
                          >
                            <div
                              className={`w-5 h-5 ${paymentType === option ? "bg-green-500" : " "
                                }  absolute rounded-full -top-1 -right-1`}
                            ></div>
                          </li>
                          <h3 className="text-sm font-medium">{option}</h3>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col gap-4">
                    <input
                      type="text"
                      value={paymentType}
                      disabled
                      id="title"
                      aria-describedby="helper-text-explanation"
                      className="w-full md:w-[50%] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Show how seller is charging"
                    />
                  </div>

                  <h3 className="py-4 font-bold px-2">Offer Price</h3>
                  <div className=" w-full relative">
                    <input
                      type="number"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                      placeholder="Enter price"
                      className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block pl-24 py-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                    <select
                      value={currency}
                      onChange={(e) => setCurrency(e.target.value)}
                      className="w-[15%] absolute left-0 top-0 bg-gray-500 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-1 py-2.5 md:p-2.5 md:pl-4  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option value="₹">₹</option>
                      <option value="$">$</option>
                    </select>
                    {/* <FaRupeeSign className="absolute top-[25%] left-0 fill-green-400" size={25} /> */}
                  </div>
                </ul>
              </div>

              {/* <Parity parity={parity} setParity={setParity} tab={3} /> */}
            </div>

            <div className="flex flex-col gap-10 ">
              <h1 className="text-base font-bold">Deliverables</h1>
              <div className="flex flex-col gap-4">
                <label
                  htmlFor="Offerings"
                  className=" mb-2 text-sm font-semibold text-gray-900"
                >
                  <h2 className="py-1.5 w-fit shadow-md px-10 rounded-[10px] bg-slate-100 flex gap-5 items-center">
                    <FaMailBulk size={35} />
                    Offering #1
                  </h2>
                </label>
                <label
                  htmlFor="Offerings"
                  className=" mb-2 text-sm font-semibold text-gray-900"
                >
                  <h2 className="py-1.5 w-fit shadow-md px-10 rounded-[10px] bg-slate-100 flex gap-5 items-center">
                    Offering name
                  </h2>
                </label>
                <input
                  type="text"
                  value={offeringName1}
                  onChange={(e) => setOfferingName1(e.target.value)}
                  id="title"
                  aria-describedby="helper-text-explanation"
                  className="w-full md:w-[40%] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Give Some Heading Name ! "
                />
                <ReactQuill
                  theme="snow"
                  onChange={handleOfferingDesc1}
                  modules={modules}
                  className="md:w-[70%] w-full  customeditor"
                />
                <div className="flex items-center gap-8 cursor-pointer">
                  <h3 className="py-3 text-base font-semibold">
                    Choose Icon to Display
                  </h3>
                  <h5
                    className="flex items-center justify-center text-base font-normal w-[30px] h-[30px] bg-green-500 rounded-full"
                    onClick={() => setOpenComingSoon(true)}
                  // onClick={() => setShowEmoji1((prev) => !prev)}
                  >
                    {showEmoji1 ? (
                      <IoMdClose color="white" size={25} />
                    ) : (
                      <IoMdAdd color="white" size={25} />
                    )}
                  </h5>
                </div>
                {showEmoji1 && (
                  <EmojiPicker
                    lazyLoadEmojis={true}
                    autoFocusSearch={false}
                    onSelect={handleEmojiSelect1}
                  />
                )}
              </div>

              {offeringClick && (
                <div className="flex flex-col gap-4">
                  <label
                    htmlFor="Offerings"
                    className=" mb-2 text-sm font-semibold text-gray-900"
                  >
                    <h2 className="py-1.5 w-fit px-10 rounded-[10px] bg-slate-100 flex gap-5 items-center">
                      <FaMailBulk size={35} />
                      Offering #2
                    </h2>
                  </label>
                  <label
                    htmlFor="title"
                    className=" mb-2 text-sm font-semibold text-gray-900"
                  >
                    <h2 className="py-1.5 w-fit px-10 shadow-md rounded-[10px] bg-slate-100 flex gap-5 items-center">
                      Offering Name
                    </h2>
                  </label>
                  <input
                    type="text"
                    value={offeringName2}
                    onChange={(e) => setOfferingName2(e.target.value)}
                    id="title"
                    aria-describedby="helper-text-explanation"
                    className="w-full md:w-[40%] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Give some Heading Name "
                  />
                  <ReactQuill
                    theme="snow"
                    onChange={handleOfferingDesc2}
                    modules={modules}
                    className="md:w-[70%] w-full  customeditor"
                  />
                  <div className="flex items-center gap-8 cursor-pointer">
                    <h3 className="py-3 text-base font-semibold">
                      Choose Icon to Display
                    </h3>
                    <h5
                      className="flex items-center justify-center text-base font-normal w-[30px] h-[30px] bg-green-500 rounded-full"
                      onClick={() => setShowEmoji2((prev) => !prev)}
                    >
                      {showEmoji2 ? (
                        <IoMdClose color="white" size={25} />
                      ) : (
                        <IoMdAdd color="white" size={25} />
                      )}
                    </h5>
                  </div>
                  {showEmoji2 && (
                    <EmojiPicker
                      lazyLoadEmojis={true}
                      autoFocusSearch={false}
                      onSelect={handleEmojiSelect2}
                    />
                  )}
                </div>
              )}

              <div>
                <button
                  type="button"
                  className="p-2.5 rounded-lg text-base font-bold bg-slate-100 flex items-center gap-3"
                >
                  {offeringClick ? (
                    <div
                      className="flex items-center gap-2"
                      onClick={() => {
                        setOfferingName2("");
                        setOfferingDesc2("");
                        setOfferingClick(false);
                      }}
                    >
                      <span>Remove Offering #2</span>
                      <AiOutlineMinus className="fill-green-700" size={20} />
                    </div>
                  ) : (
                    <div
                      className="flex items-center gap-2"
                      onClick={() => setOfferingClick(true)}
                    >
                      <span>Add More</span>
                      <BsFillPlusCircleFill
                        className="fill-green-700"
                        size={20}
                      />
                    </div>
                  )}
                </button>
              </div>

              <div className="flex flex-col gap-4">
                <label
                  htmlFor="Delivery Time"
                  className=" mb-2 text-sm font-semibold text-gray-900"
                >
                  <h2 className="py-1.5 w-fit shadow-md px-10 rounded-[10px] bg-slate-100 flex gap-5 items-center">
                    <BiTimeFive size={35} />
                    Delivery Time
                  </h2>
                </label>
                <ul className="p-3 md:w-[30%] w-full  rounded-[10px] shadow-lg">
                  {["Express 24H", "Upto 3 days", "Upto 7 days", "Anytime"].map(
                    (option, i) => (
                      <li key={i}>
                        <div className="checkbox-ui">
                          <label className="flex gap-2 items-center">
                            <input
                              type="checkbox"
                              name={option}
                              value={option}
                              onChange={(e) => setDeliveryTime(e.target.value)}
                              onClick={() => setcheck(i)}
                            />
                            <div
                              className={`w-5 h-5 ${check === i ? "bg-blue-600" : " "
                                } rounded-full border `}
                            ></div>
                            <span>{option}</span>
                          </label>
                        </div>
                      </li>
                    )
                  )}
                </ul>
              </div>

              <div className="flex flex-col gap-4">
                <label
                  htmlFor="SellerType"
                  className=" mb-2 text-sm font-semibold text-gray-900"
                >
                  <h2 className="py-1.5 w-fit px-10 shadow-md rounded-[10px] bg-slate-100 flex gap-5 items-center">
                    <GiRibbonMedal size={35} />
                    Seller Type
                  </h2>
                </label>
                <ul className="p-3 md:w-[30%] w-full  rounded-[10px] shadow-lg">
                  {["Online Seller", "Local Seller ", "Pro Seller "].map(
                    (option, i) => (
                      <li key={i}>
                        <div className="checkbox-ui">
                          <label className="flex gap-2 items-center">
                            <input
                              type="checkbox"
                              name={option}
                              value={option}
                              onChange={(e) => setSellerType(e.target.value)}
                              onClick={() => setsellercheck(i)}
                            />
                            <div
                              className={`w-5 h-5 ${sellercheck === i ? "bg-blue-600" : " "
                                } rounded-full border `}
                            ></div>
                            <span>{option}</span>
                          </label>
                        </div>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-2 justify-center w-full">
                <label htmlFor="Picture" className=" mb-2 text-lg font-bold text-gray-900"><h2 className="py-1.5 w-fit px-10 rounded-[10px] bg-slate-100 flex gap-5 items-center">Attach file&#40;s&#41;</h2></label>
                <>
                  <h3 className='text-sm font-medium'>Thumbnail Photo</h3>
                  <label onClick={() => fileThumbnailRef.current.click()} htmlFor="dropzone-file" className="flex md:w-[70%] flex-col p-1.5 items-center justify-center w-full border-2 border-gray-300  rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-100 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 ">
                    <div className="flex items-center gap-2 justify-center ">
                      < AiOutlineUpload className='mb-1' size={20} />
                      <p className=" text-sm text-gray-500 dark:text-gray-400">Upload</p>
                    </div>
                  </label>
                  <input
                    type="file"
                    multiple={false}
                    className="hidden"
                    accept="image/*"
                    onChange={handleThumbnailFileChange}
                    ref={fileThumbnailRef}
                  />
                  {thumbnailImage && (
                    <div className="overflow-hidden w-full md:w-[400px] h-[200px]">
                      <label onClick={() => fileThumbnailRef.current.click()}
                        className="text-green-600  text-center flex justify-center items-center h-full "
                      >
                        <img
                          src={thumbnailImage}
                          alt="User"
                          className="bg-cover w-full h-full object-cover"
                        />
                      </label>
                    </div>
                  )}
                </>
                <>
                  <h3 className='text-sm font-medium'>Cover Photo</h3>
                  <label onClick={() => fileCoverRef.current.click()} htmlFor="dropzone-file" className="flex md:w-[70%] flex-col p-1.5 items-center justify-center w-full border-2 border-gray-300  rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-100 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 ">
                    <div className="flex items-center gap-2 justify-center ">
                      < AiOutlineUpload className='mb-1' size={20} />
                      <p className=" text-sm text-gray-500 dark:text-gray-400">Upload</p>
                    </div>
                  </label>
                  <input
                    type="file"
                    multiple={false}
                    className="hidden"
                    accept="image/*"
                    onChange={handleCoverFileChange}
                    ref={fileCoverRef}
                  />
                  {coverImage && (
                    <div className="overflow-hidden w-auto h-auto">
                      <label onClick={() => fileCoverRef.current.click()}
                        className="text-green-600  text-center flex justify-center items-center h-full "
                      >
                        <img
                          src={coverImage}
                          alt="User"
                          className="bg-cover w-full h-full object-cover"
                        />
                      </label>
                    </div>
                  )}
                </>
              </div>
            </div>
          </div>

          <div className="pt-16">
            <h1 className="font-bold">Questions for Customer</h1>
            <Questions
              name={name}
              setName={setName}
              email={email}
              setEmail={setEmail}
              question={question}
              setQuestion={setQuestion}
              savedQuestions={savedQuestions}
              handleSaveQuestion={handleSaveQuestion}
              tab={3}
            />
          </div>

          <button
            type="submit"
            className="px-3 mx-4 my-5 py-1 bg-blue-400 text-center rounded-[10px]"
          >
            Submit
          </button>
        </form>
      </Container>
    </>
  );
}

export default Service;