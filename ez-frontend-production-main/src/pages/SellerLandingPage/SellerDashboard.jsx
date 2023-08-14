import React, { useEffect, useReducer, useMemo, useState } from "react";
import ReactQuill from 'react-quill';
// import Trix from "trix";
import "./seller.css"
import sellerpic from "../../../src/Assets/profile-img/usericon.jpg"
import { IoMdArrowDropdown } from "react-icons/io"
import { MdWatchLater,MdPayments,MdOutlineMiscellaneousServices,MdOutlinePriceChange,MdEventAvailable,MdRocketLaunch, MdOutlineHomeRepairService } from "react-icons/md"
import { FaDatabase,FaBuysellads, FaAngleRight,FaSwatchbook, FaRupeeSign,FaMailBulk } from "react-icons/fa"
import { IoMdNotificationsOutline } from "react-icons/io"
import { RiQuestionnaireLine } from "react-icons/ri"
import { SiGoogleanalytics } from "react-icons/si"
import { BsFillBagCheckFill } from "react-icons/bs"
import { HiOutlinePencilSquare } from "react-icons/hi2"
import { AiTwotoneCheckCircle } from "react-icons/ai"
import {BiCategory,BiTimeFive} from "react-icons/bi"
import {GiRibbonMedal,GiDeliveryDrone} from "react-icons/gi"
import {GrServices} from "react-icons/gr"
import {GoMegaphone,GoMailRead} from "react-icons/go"
import {TfiList} from "react-icons/tfi"
import {TbPhoneCall} from "react-icons/tb"
import 'react-quill/dist/quill.snow.css';


const initialState = {
  title: "",
  Category: "",
  description: "",
  tags: "",
  priceType: "",
  price: "",
  currency: "",
  deliverytype: "",
  // file: null,
};
const Reducer = (state, action) => {
  switch (action.type) {
    case "changeTitle":
      return {
        ...state,
        title: action.payload,
      };
    // case "changeDescription":
    //   return {
    //     ...state,
    //     description: action.payload,
    //   };
    case "changeCategory":
      return {
        ...state,
        Category: action.payload,
      };
    case "changeTags":
      return {
        ...state,
        tags: action.payload,
      };
    // case "changeFile":
    //   return {
    //     ...state,
    //     file: action.payload,
    //   };
    case "changePricetype":
      return {
        ...state,
        priceType: action.payload,
      };
    case "changePrice":
      return {
        ...state,
        price: action.payload,
      };
    case "changeCurrency":
      return {
        ...state,
        currency: action.payload,
      };
    case "changeDeliverytype":
      return {
        ...state,
        deliveryprice: action.payload,
      };
    default:
      return state;
  }
};

function SellerDashboard() {
  const [state, dispatch] = useReducer(Reducer, initialState);
  const [deliveryTime, setdeliveryTime] = useState([]);
  const [Sellertype, setSellertype] = useState([])
  const [Deliverymode, setDeliverymode] = useState([])
const [quil,setquil]=useState("")

  const [sell, setsell] = useState(null)
  const [check, setcheck] = useState(null)
  const [seller, setseller] = useState(null)
  const [deliver, setdeliver] = useState(null)


  const handleChangeTitle = (e) => {
    dispatch({
      type: "changeTitle",
      payload: e.target.value,
    });
  };

  const handleChangeCategory = (e) => {
    dispatch({
      type: "changeCategory",
      payload: e.target.value,
    });
  };

  const handleChangeTags = (e) => {
    dispatch({
      type: "changeTags",
      payload: e.target.value,
    });
  };
  const handleChangePricetype = (e) => {
    dispatch({
      type: "changePricetype",
      payload: e.target.value,
    });
  };
  const handleChangePrice = (e) => {
    dispatch({
      type: "changePrice",
      payload: e.target.value,
    });
  };
  const handleChangeCurrency = (e) => {
    dispatch({
      type: "changeCurrency",
      payload: e.target.value,
    });
  };
  const handleChangeDeliverytype = (e) => {
    dispatch({
      type: "changeDeliverytype",
      payload: e.target.value,
    });
  };
  // const handleChangeDescription = (e) => {
  //   dispatch({
  //     type: "changeDescription",
  //     payload: e.target.value,
  //   });
  // };

  // const handleChangeFile = (e) => {
  //   dispatch({
  //     type: "changeFile",
  //     payload: e.target.files[0],
  //   });
  // };


  // const editor = useMemo(() => new Trix("editor"), []);
  // useEffect(() => {
  //   editor.on("change", () => {
  //     dispatch({
  //       type: "changeDescription",
  //       payload: editor.root.innerHTML,
  //     });
  //   });
  // }, [editor]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(state);
  };

  function getRandomColor() {
    // Get a random number between 0 and 255 for each of the red, green, and blue components.
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);

    // Return the color as an RGB string.
    return `rgba(${red}, ${green}, ${blue},0.2)`;
  }



  const handleChangeDeliverytime = (event) => {
    const isSelected = event.target.checked;
    const optionValue = event.target.value;

    if (isSelected) {
      setdeliveryTime([...deliveryTime, optionValue]);
    } else {
      const newSelectedOptions = deliveryTime.filter(option => option !== optionValue);
      setdeliveryTime(newSelectedOptions);
    }
  };
  const handleChangeSellertype = (event) => {
    const isSelected = event.target.checked;
    const optionValue = event.target.value;

    if (isSelected) {
      setSellertype([...Sellertype, optionValue]);
    } else {
      const newSelectedOptions = Sellertype.filter(option => option !== optionValue);
      setSellertype(newSelectedOptions);
    }
  };

  const handleChangeDeliverymode = (event) => {
    const isSelected = event.target.checked;
    const optionValue = event.target.value;

    if (isSelected) {
      setDeliverymode([...Deliverymode, optionValue]);
    } else {
      const newSelectedOptions = Deliverymode.filter(option => option !== optionValue);
      setDeliverymode(newSelectedOptions);
    }
  };
  // console.log(deliveryTime)

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ list: 'ordered' }, { list: 'bullet' },{indent:"-1"},{indent:"+1"}],
      [{ color: [] }],[{ align: [] }],
      ['link', 'image',"video"],
    ],
  };


  return (
    <>
      <div className='px-2 md:px-6 py-4 md:py-8 '>
        <div className='flex md:flex-row flex-col'>


          <section className="w-1/4 my-2 mx-5 md:block hidden">
            <div className="flex flex-col gap-8">

              <div className="flex gap-5 px-10 rounded-[10px] items-center justify-between  bg-slate-100 shadow-lg p-1">
                <div className="w-10 h-10 rounded-full overflow-hidden">
                  <img src={sellerpic} alt="" className="w-full bg-cover" />
                </div>
                <h2 className="text-base font-bold text-slate-600">Seller Dashboard</h2>
                <IoMdArrowDropdown size={30} />
              </div>

              <div className="flex gap-5 px-11 rounded-[10px] items-center justify-between  bg-slate-100 shadow-lg p-1">
                <div className="w-10 h-10 rounded-full overflow-hidden">
                  <MdWatchLater size={30} />
                </div>
                <h2 className="text-base font-bold text-slate-600">Available</h2>
                <IoMdArrowDropdown size={30} />
              </div>

              <div className="flex gap-5 px-16 rounded-[10px] items-center justify-between bg-slate-100 shadow-lg p-1">
                <FaDatabase size={30} />
                <h2 className="text-base font-bold text-slate-600">Overview</h2>
              </div>

              <div className="flex gap-5 px-16 rounded-[10px] items-center justify-between bg-slate-100 shadow-lg p-1">
                <IoMdNotificationsOutline size={30} />
                <h2 className="text-base font-bold text-slate-600">Overview</h2>
              </div>

              <div className="flex gap-5 px-16 rounded-[10px] items-center justify-between bg-slate-100 shadow-lg p-1">
                <RiQuestionnaireLine size={30} />
                <h2 className="text-base font-bold text-slate-600">Queries</h2>
              </div>

              <div className="flex gap-5 px-16 rounded-[10px] items-center justify-between bg-slate-100 shadow-lg p-1">
                <SiGoogleanalytics size={30} />
                <h2 className="text-base font-bold text-slate-600">Analytics</h2>
              </div>

              <div className="flex gap-5  px-10 rounded-[10px] items-center justify-between  bg-green-300 p-1">
                <MdOutlineHomeRepairService className="fill-white" size={30} />
                <h2 className="text-base font-bold text-white">Seller Dashboard</h2>
                <IoMdArrowDropdown className="fill-white" size={30} />
              </div>

              <div className="flex gap-5 px-16 text-green-700 rounded-[10px] items-center justify-between p-1">
                <MdOutlineMiscellaneousServices className="fill-green-600" size={30} />
                <h2 className="text-base font-bold ">Add a Service </h2>
              </div>
              <div className="flex gap-5 px-16 text-green-700 rounded-[10px] items-center justify-between p-1">
                <TfiList size={30} />
                <h2 className="text-base font-bold ">Manage Listings</h2>
              </div>
              <div className="flex gap-5 px-16 text-green-700 rounded-[10px] items-center justify-between p-1">
                <MdRocketLaunch size={30} />
                <h2 className="text-base font-bold">Boosted Listings </h2>
              </div>
               <div className="flex gap-5 px-16 text-green-700 items-center justify-between p-1 pb-8 border-b">
                <MdEventAvailable size={30} />
                <h2 className="text-base font-bold ">Availability </h2>
              </div>

              <div className="flex gap-5 px-16 text-green-700 rounded-[10px] items-center justify-between p-1">
                <TbPhoneCall size={30} />
                <h2 className="text-base font-bold">Bookings</h2>
              </div>
               <div className="flex gap-5 px-16 text-green-700 rounded-[10px] items-center justify-between p-1">
                <MdPayments size={30} />
                <h2 className="text-base font-bold">Payments</h2>
              </div>

              <div className="flex gap-5  px-10 rounded-[10px] items-center bg-slate-100 shadow-lg justify-between  p-1">
                <FaBuysellads className="" size={30} />
                <h2 className="text-base font-bold">Grow Audience</h2>
                <IoMdArrowDropdown className="" size={30} />
              </div>
              <div className="flex gap-5 px-16 text-green-700 rounded-[10px] items-center justify-between p-1">
                <GoMegaphone size={30} />
                <h2 className="text-base font-bold">Advertise</h2>
              </div>
              <div className="flex gap-5 px-16 text-green-700 rounded-[10px] items-center justify-between p-1">
                <GoMailRead size={30} />
                <h2 className="text-base font-bold">Invite your Friends </h2>
              </div>
            </div>
          </section>


          {/* Right Section//////////////////////////////////////////////////////////////////////////////////////////////////////Right section */}
          <section className='w-full md:w-3/4 py-2 px-1 md:px-5'>
            <div>
              <div className="py-5 border-b">
                <h1 className="md:text-4xl text-3xl font-semibold">Add a New Service</h1>
                <p className="text-base font-normal text-slate-600">"Expand your offerings, unleash your potential!"</p>
              </div>

              {/* SeLLing Type///////////////////////// */}
              <div className="py-10 border-b">
                <h1 className="flex gap-3 text-xl font-semibold">What are you selling ? <FaAngleRight className=" rounded-full bg-slate-200 rotate-90 md:rotate-0 fill-green-400" size={35} /></h1>
                <div className="flex overflow-x-auto md:overscroll-x-none items-center pb-3 gap-6 md:gap-0 whitespace-nowrap md:whitespace-normal justify-between pt-7">
                  {
                    [" Consultation ", "Digital Product ", "Service Package", "Workshop & Training", "Career Counselling "].map((data, i) => {

                      const color = getRandomColor()
                      return <div key={i} className={`relative min-w-[160px] md:w-40 h-40 cursor-pointer ${sell === i ? "shadow-md md:shadow-xl" : ""} flex flex-col rounded-xl items-center transition justify-evenly `} style={{ background: color }} onClick={() => setsell(i)}>
                        <BsFillBagCheckFill size={40} />
                        <h4 className="text-xs font-bold">{data}</h4>
                        <p className="text-[10px] font-normal text-slate-600 whitespace-normal text-center">Exchange Knowledge, Clear doubts, etc</p>
                        <AiTwotoneCheckCircle className={`absolute ${sell === i ? " " : "hidden"} z-10 -top-1 -right-1 fill-green-600`} size={35} />
                      </div>
                    })
                  }
                </div>
              </div>



              {/* Form//////////////////////////////////////////////////////////////////////////////////////////////// Form */}
              <form onSubmit={handleSubmit} className=" py-14">
                <div className="flex flex-col gap-20">

                  <div className="flex flex-col gap-10">
                    {/* Title/////////////////////////////////////////////////////////////Title */}
                    <div className="flex flex-col gap-4">
                      <label htmlFor="title" className=" mb-2 text-sm font-semibold text-gray-900"><h2 className="py-1.5 w-fit px-10 rounded-[10px] bg-slate-100 flex gap-5 items-center"><HiOutlinePencilSquare size={35} /> Title</h2></label>
                      <input type="text" value={state.title} onChange={handleChangeTitle} id="title" aria-describedby="helper-text-explanation" className="w-full md:w-[40%] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Best One Liner to describe what you are offering ! " />
                    </div>

                    <div className="flex flex-col gap-4">
                      <label htmlFor="Category" className=" mb-2 text-sm font-semibold text-gray-900"><h2 className="py-1.5 w-fit px-10 rounded-[10px] bg-slate-100 flex gap-5 items-center"><BiCategory size={35} />category</h2></label>
                      <select value={state.Category} onChange={handleChangeCategory} className="md:w-[40%] w-full  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option value="" disabled defaultValue={"category"} >Category...</option>
                        {
                          ["Sole Proprietorships", "Corporations", "Partnerships", "Limited Liability Companies", "S Corporations."].map((data, i) => {
                            return <option key={i} value={data}>{data}</option>
                          })
                        }
                      </select>
                    </div>

                    <div className="flex flex-col gap-4">
                      <label htmlFor="description" className=" mb-2 text-sm font-semibold text-gray-900"><h2 className="py-1.5 w-fit px-10 rounded-[10px] bg-slate-100 flex gap-5 items-center"><FaMailBulk size={35} /> Description</h2></label>
                     
                     
                      <ReactQuill theme="snow" value={quil} onChange={setquil} modules={modules} className="md:w-[70%] w-full  customeditor"/>
                     <div className="md:w-[70%] w-full ">
                      
                     <div dangerouslySetInnerHTML={{__html:quil}} className="w-full"></ div>
                     </div>
                      {/* <input type="text" value={state.title} onChange={handleChangeTitle} id="title" aria-describedby="helper-text-explanation" className="w-[50%] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Best One Liner to describe what you are offering ! " /> */}

                      <select value={state.tags} onChange={handleChangeTags} className="md:w-[70%] w-full  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option value="" disabled defaultValue={"tags"}>Add some relevant tags so that people find you easily ...</option>
                        {
                          ["Sole Proprietorships", "Corporations", "Partnerships", "Limited Liability Companies", "S Corporations."].map((data, i) => {
                            return <option key={i} value={data}>{data}</option>
                          })
                        }
                      </select>
                    </div>
                  </div>

                  {/* Pricing////////////////////////////////////////////////////////////// Pricing */}
                  <div className="flex flex-col gap-12">
                    <div className="flex flex-col gap-4">
                      <label htmlFor="Pricing" className=" mb-2 text-sm font-semibold text-gray-900"><h2 className="py-1.5 w-fit px-10 rounded-[10px] bg-slate-100 flex gap-5 items-center"><MdOutlinePriceChange size={35} />Pricing</h2></label>
                      <select value={state.priceType} onChange={handleChangePricetype} className="md:w-[40%] w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option value="" disabled defaultValue={"Payment"} >Type of Payment</option>
                        {
                          ["Value-based", "Competition-based", "Cost-plus", "dynamic pricing"].map((data, i) => {
                            return <option key={i} value={data}>{data}</option>
                          })
                        }
                      </select>
                      <div className="md:w-[40%] w-full relative">
                        <select value={state.price} onChange={handleChangePrice} className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-20 py-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                          <option value="" disabled defaultValue={"Price"} >Currency & Price</option>
                          {
                            ["50", "600", "3889", "3843"].map((data, i) => {
                              return <option key={i} value={data}>{data}</option>
                            })
                          }
                        </select>
                        <select value={state.currency} onChange={handleChangeCurrency} className="w-[10%] absolute left-0 top-0 bg-gray-500 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                          <option value="" disabled defaultValue={""} ></option>
                          {
                            ["Rs", "$"].map((data, i) => {
                              return <option key={i} value={data}>{data}</option>
                            })
                          }
                        </select>
                        <FaRupeeSign className="absolute top-[25%] left-0 fill-green-400" size={25} />
                      </div>
                      <div className="flex flex-col gap-4">
                        <h4 className="text-base font-bold">Purchasing Power Parity </h4>
                        <p className="md:w-[40%] w-full text-xs">Charge customers different amounts  depending on the cost of living in their country. <span className="border-b font-semibold text-black border-black">Learn more</span></p>
                        <div className="flex gap-3 items-center">
                          <div className="box">
                            <input id="checkbox" className="hidden" type="checkbox" />
                            <label htmlFor="checkbox" className="checking block w-4 h-4 rounded-full cursor-pointer transition-all absolute top-0 left-0 bg-[#333333]"></label>
                          </div>
                          <h3 className="text-xs font-semibold">Enable location wise dynamic pricing</h3>
                        </div>
                      </div>
                    </div>
                  </div>



                  {/* Delivery//////////////////////////////////////////////////Delivery */}
                  <div className="flex flex-col gap-10">

                    <div className="flex flex-col gap-4">
                      <label htmlFor="Dlivery Time" className=" mb-2 text-sm font-semibold text-gray-900"><h2 className="py-1.5 w-fit px-10 rounded-[10px] bg-slate-100 flex gap-5 items-center"><BiTimeFive size={35} />Delivery Time</h2></label>
                      <ul className="p-3 md:w-[30%] w-full  rounded-[10px] shadow-lg">
                        {["Express 24H", "Upto 3 days", "Upto 7 days", "Anytime"].map((option, i) => (
                          <li key={option}>
                            <div className="checkbox-ui">
                              <label className="flex gap-2 items-center">
                                <input type="checkbox" name={option} value={option} onChange={(e) => handleChangeDeliverytime(e)} onClick={() => setcheck(i)} />
                                <div className={`w-5 h-5 ${check === i ? "bg-blue-600" : " "} rounded-full border `}>
                                </div>
                                <span>{option}</span>
                              </label>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-col gap-4">
                      <label htmlFor="Delivery Time" className=" mb-2 text-sm font-semibold text-gray-900"><h2 className="py-1.5 w-fit px-10 rounded-[10px] bg-slate-100 flex gap-5 items-center"><GiRibbonMedal size={35} />Seller Type</h2></label>
                      <ul className="p-3 md:w-[30%] w-full  rounded-[10px] shadow-lg">
                        {["Online Seller", "Local Seller ", "Pro Seller "].map((option, i) => (
                          <li key={option}>
                            <div className="checkbox-ui">
                              <label className="flex gap-2 items-center">
                                <input type="checkbox" name={option} value={option} onChange={(e) => handleChangeSellertype(e)} onClick={() => setseller(i)} />
                                <div className={`w-5 h-5 ${seller === i ? "bg-blue-600" : " "} rounded-full border `}>
                                </div>
                                <span>{option}</span>
                              </label>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-col gap-4">
                      <label htmlFor="Dlivery Time" className=" mb-2 text-sm font-semibold text-gray-900"><h2 className="py-1.5 w-fit px-10 rounded-[10px] bg-slate-100 flex gap-5 items-center"><GiDeliveryDrone size={35} />Delivery Mode</h2></label>
                      <ul className="p-3 md:w-[30%] w-full rounded-[10px] shadow-lg">
                        {["Video Meet", "Audi Call ", "Chat  "].map((option, i) => (
                          <li key={option}>
                            <div className="checkbox-ui">
                              <label className="flex gap-2 items-center">
                                <input type="checkbox" name={option} value={option} onChange={(e) => handleChangeDeliverymode(e)} onClick={() => setdeliver(i)} />
                                <div className={`w-5 h-5 ${deliver === i ? "bg-blue-600" : " "} rounded-full border `}>
                                </div>
                                <span>{option}</span>
                              </label>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                </div>



                {/* <input
                  type="file"
                  placeholder="Photo"
                  onChange={handleChangeFile}
                /> */}
                <button type="submit" className="px-3 py-1 bg-blue-400 text-center rounded-[10px]">Submit</button>
              </form>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

export default SellerDashboard
