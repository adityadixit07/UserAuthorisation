import { useState } from "react";
import { AiOutlineEdit, AiOutlineCloudUpload, AiFillSecurityScan, AiFillUnlock, AiFillGoogleCircle, AiFillDribbbleCircle, AiFillTwitterCircle } from 'react-icons/ai';
import { BsSave2Fill, BsFacebook, BsDiscord, BsFillCreditCardFill } from 'react-icons/bs';
import { TbCurrencySolana } from 'react-icons/tb';
// import {BiLogoZoom} from 'react-icons/bi';
import Footer from "./pages/Landing/components/footer";
import Paytm from '../src/assets/Paytm-Logo.wine.svg';
import PhonePay from '../src/assets/phonepe-seeklogo.com.svg'
function FirstPage() {
  return (
    <>
      <div className="flex flex-col py-3 md:p-6">
        <h2 className="text-green-500 font-bold p-5 text-2xl md:text-3xl xl:text-4xl">Your Profile</h2>
        <p className="text-xl text-green-600 py-4 px-2">Choose how you are displayed as a host or guest</p>
        <div className="flex flex-col-reverse md:flex-row gap-5 justify-between px-[1rem]">
          <div className="flex flex-col gap-4 px-4">
            <label className="text-green-500 text-xl">Name</label>
            <input className="px-2 rounded-xl border border-black py-4 text-green-500" type="text" placeholder="Name" />
            <label className="text-green-500 text-xl">Profile URL</label>
            <div className="flex flex-row justify-start rounded-xl border-2 border-black">
              <p className="bg-gray-300 p-4 text-green-500">ez/</p>
              <input className="px-4 text-green-400 w-full" type="text" placeholder="Profile URL" />
            </div>
            <a className="flex flex-row justify-around w-3/4 px-4 py-2 text-white text-md rounded-lg  bg-green-500 border-2 border-green-600 hover:bg-black hover:text-white hover:border-black" href="/"><BsSave2Fill size={24} className="fill-white" />Save Changes</a>
          </div>
          <div className="w-full mt-0 mb-6 flex flex-col items-center justify-center">
            <label className="text-green-400 text-2xl p-4">Profile Picture</label>
            <input
              type="file"
              name="image"
              id="image"
              className="hidden"
              accept="image/*"
            // onChange={handleFileChange}
            />
            <span className="flex items-center justify-center border-2 border-green-700 rounded-full p-1 relative ">
              <span className="overflow-hidden rounded-full h-40 w-40 ">
                <label
                  htmlFor="image"
                  className="text-green-600  text-center flex justify-center items-center h-full "
                >
                  <AiOutlineCloudUpload size={40} />
                  Upload Profile Picture
                  {/* {image ? (
                    <img
                      src={image}
                      alt="User New Profile Image"
                      className="bg-cover"
                    />
                  ) : (
                    <img
                      src={
                        "https://img.icons8.com/fluency/96/gender-neutral-user.png"
                      }
                      alt="Placeholder User"
                    />
                  )} */}
                </label>
              </span>

              <label htmlFor="image">
                <span className="bg-green-700 rounded-full md:p-2 absolute right-0 bottom-4 cursor-pointer text-white">
                  <AiOutlineEdit size={18} />
                </span>
              </label>
            </span>
          </div>
        </div>
        <br />
        <div className="flex flex-col space-y-5 px-[0rem] md:px-[1rem] ">
          <h2 className="text-green-500 font-bold p-5 text-2xl md:text-3xl xl:text-4xl">Email and Phone</h2>
          <p className="text-xl text-green-600 py-5 px-2">Manage the email and phone you use to sign into eZ and recive notifications</p>
          <div className="flex flex-col md:flex-row justify-around  max-w-[60%] md:max-w-[70%]">
            <div className="flex h-1/2 flex-wrap">
              <div className="flex flex-col px-5 space-y-2">
                <label className="text-green-500 text-xl mt-2">Email</label>
                <input className="px-2 rounded-xl border border-black py-4 text-green-500" type="email" placeholder="Email" />
              </div>
              <button className="bg-green-600  mx-[1rem] my-[0.5rem] md:my-[3.5rem] px-4 md:px-6 py-3 hover:bg-black  mt-6 rounded-full text-white hover:text-green-600">Update</button>
            </div>
            <div className="flex h-1/2 flex-wrap">
              <div className="flex px-5 flex-col space-y-2">
                <label className="text-green-500 text-xl mt-2">Phone Number</label>
                <input className="px-2 rounded-xl border border-black py-4 text-green-500" type="number" placeholder="Phone number" />
              </div>
              <button className="bg-green-600  mx-[1rem] my-[0.5rem] md:my-[3.5rem] px-4 md:px-6 py-3 hover:bg-black  mt-6 rounded-full text-white hover:text-green-600">Update</button>
            </div>
          </div>
          <p className="text-green-500 px-5 py-6 text-md md:text-xl">For Security we will send you a code to verify any change to your email and phone number</p>
        </div>
        <div className="flex flex-col px-5 space-y-2">
          <h2 className="text-green-500 font-bold  text-2xl md:text-3xl xl:text-4xl">Password And Security</h2>
          <p className="text-xl text-green-600 py-4 px-2">Secure your account with password</p>
          <div className="flex flex-wrap flex-row justify-around py-5 px-3 bg-green-300/50 rounded-xl border-2 border-gray-400">
            <AiFillUnlock size={24} className="fill-green-800 my-6" />
            <div className="flex flex-col space-y-2">
              <h3 className="text-green-600 text-2xl px-3">Account Password</h3>
              <p className="px-3">Please follow the instructions in the email to finish setting your password</p>
            </div>
            <a className="rounded-xl text-white bg-green-400 hover:bg-black flex justify-center items-center px-5 py-4 my-3 " href="/user/setpassword">Set Password</a>
          </div>
          <div className="flex flex-wrap flex-row justify-around py-5 px-3 bg-green-300/50 rounded-xl border-2 border-gray-400">
            <AiFillSecurityScan size={24} className="fill-green-800 my-6" />
            <div className="flex flex-col space-y-2 max-w-[70%]">
              <h3 className="text-green-600 text-2xl px-3">Two-factor Authecation</h3>
              <p className="px-3">Pease Set a password before enabling two-factor authecation</p>
            </div>
            <a className="rounded-xl text-white bg-green-400 hover:bg-black flex justify-center items-center px-5 py-4 my-3 ">Enable 2FA</a>
          </div>
        </div>
        <div className="flex flex-col px-5 space-y-2">
          <h2 className="text-green-500 font-bold p-5 text-2xl md:text-3xl xl:text-4xl">Third Party Accounts</h2>
          <p className="text-green-400 text-xl px-3">Link your accounts to sign into eZ and automate workflows</p>
          <div className="flex flex-col gap-3">
            <div className="flex flex-col md:flex-row gap-4">
              {/* Card */}
              <div className="rounded-xl w-full md:w-1/3 border shadow-xl shadow-green-200 border-black p-3">
                <div className="flex flex-row gap-3 justify-between">
                  <AiFillGoogleCircle className="fill-green-300" size={40} />
                  <div className="flex flex-col">
                    <h1 className="text-xl font-bold text-green-500">Google</h1>
                    <p className="text-sm md:text-lg text-green-400">eZ name</p>
                  </div>
                  <a className="px-7 text-black hover:bg-black hover:text-green-400 cursor-pointer flex items-center rounded-xl py-3 bg-green-300">Unlink</a>
                </div>
              </div>
              <div className="rounded-xl w-full md:w-1/3 border shadow-xl shadow-green-200 border-black p-3">
                <div className="flex flex-row gap-3 justify-between">
                  <TbCurrencySolana className="fill-green-600" size={40} />
                  <div className="flex flex-col">
                    <h1 className="text-xl font-bold text-green-500">Solana</h1>
                    <p className="text-sm md:text-lg text-green-400">Not Linked</p>
                  </div>
                  <a className="px-7 text-black hover:bg-black hover:text-green-400 cursor-pointer flex items-center rounded-xl py-3 bg-green-300">Link</a>
                </div>
              </div>
              <div className="rounded-xl w-full md:w-1/3 border shadow-xl shadow-green-200 border-black p-3">
                <div className="flex flex-row gap-3 justify-between">
                  <AiFillTwitterCircle className="fill-blue-400" size={40} />
                  <div className="flex flex-col">
                    <h1 className="text-xl font-bold text-green-500">Twitter</h1>
                    <p className="text-sm md:text-lg text-green-400">eZ name</p>
                  </div>
                  <a className="px-7 text-black hover:bg-black hover:text-green-400 cursor-pointer flex items-center rounded-xl py-3 bg-green-300">Unlink</a>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4">
              {/* Card */}
              <div className="rounded-xl w-full md:w-1/3 border shadow-xl shadow-green-200 border-black p-3">
                <div className="flex flex-row gap-3 justify-between">
                  <AiFillDribbbleCircle className="fill-pink-700" size={40} />
                  <div className="flex flex-col">
                    <h1 className="text-xl font-bold text-green-500">Dribble</h1>
                    <p className="text-sm md:text-lg text-green-400">eZ name</p>
                  </div>
                  <a className="px-7 text-black hover:bg-black hover:text-green-400 cursor-pointer flex items-center rounded-xl py-3 bg-green-300">Unlink</a>
                </div>
              </div>
              <div className="rounded-xl w-full md:w-1/3 border shadow-xl shadow-green-200 border-black p-3">
                <div className="flex flex-row gap-3 justify-between">
                  <BsFacebook size={40} className="fill-blue-400" />
                  <div className="flex flex-col">
                    <h1 className="text-xl font-bold text-green-500">Facebook</h1>
                    <p className="text-lg text-green-400">Not Linked</p>
                  </div>
                  <a className="px-7 text-black hover:bg-black hover:text-green-400 cursor-pointer flex items-center rounded-xl py-3 bg-green-300">Link</a>
                </div>
              </div>
              <div className="rounded-xl w-full md:w-1/3 border shadow-xl shadow-green-200 border-black p-3">
                <div className="flex flex-row gap-3 justify-between">
                  <BsDiscord className="fill-purple-800" size={40} />
                  <div className="flex flex-col">
                    <h1 className="text-xl font-bold text-green-500">Discord</h1>
                    <p className="text-lg text-green-400">Not Linked</p>
                  </div>
                  <a className="px-7 text-black hover:bg-black hover:text-green-400 cursor-pointer flex items-center rounded-xl py-3 bg-green-300">Link</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

function Payment() {
  return (
    <>
      <h1 className="px-5 text-3xl font-bold text-green-500 md:text-4xl m-3">Payement Methods</h1>
      <div className="flex flex-col bg-green-200 m-5 rounded-xl border border-green-400 max-w-[100%] md:max-w-[80%]">
        <div className="flex px-5 flex-wrap flex-row justify-between m-3">
          <div className="flex flex-col gap-3">
            <h3 className="text-2xl  font-bold text-green-600">Set Your Default Payment Method</h3>
            <p className="text-xl text-green-800">Method Selected</p>
          </div>
          <h3 className="text-bold text-lg flex flex-row gap-2 m-3"><BsFillCreditCardFill className="fill-green-600" size={30} />Credit Card</h3>
          <button className="w-[40%] md:w-[10%] text-xl hover:bg-green-300 text-black hover:text-white bg-white">Edit</button>
        </div>
      </div>
      <h1 className=" text-2xl px-5 font-bold text-green-500 md:text-3xl m-3">Add or Update Credit card or Debit Card</h1>
      <input type="number" placeholder="Your Credit Card Number" className="mx-5 p-3  w-[90%] md:w-[30%] text-black border-green-400 border-4 rounded-xl" />
      <div className="flex flex-row gap-4 m-5 w-[100%] md:w-[30%]">
        <input type="number" placeholder="CVV" className="p-3 w-[40%] text-black border-green-400 border-4 rounded-xl" />
        <input type="date" placeholder="Expiry Date" className="text-green-500 border-green-400 border-4 rounded-xl" />
      </div>
      <input type="String" placeholder="Credit Card Holder Name" className="m-3 p-3 mx-5 w-[60%] md:w-[30%] text-black border-green-400 border-4 rounded-xl" />
      <a className="px-8 cursor-pointer py-4 bg-green-600 hover:bg-black text-white hover:text-green-500 rounded-full">Update</a>
      <h1 className=" text-2xl font-bold text-green-500 md:text-3xl px-5 m-3">Your Upi Id</h1>
      <input type="text" placeholder="upid@id" className="mx-5 p-3 w-[50%] text-black border-green-400 border-4 rounded-xl" />
      <a className="px-8 cursor-pointer py-4 bg-green-600 hover:bg-black text-white hover:text-green-500 rounded-full">Verify</a>
      <h4 className=" text-3xl font-bold text-green-500 md:text-4xl px-5 m-3">Connected Wallets</h4>
      <div className="flex flex-col md:flex-row justify-around p-3 gap-3 px-5 w-[100%] md:w-[70%]">
        <div className="rounded-xl w-full md:w-1/3 border shadow-xl shadow-green-200 border-black p-3">
          <div className="flex flex-wrap flex-row gap-3 justify-between ">
            <img src={Paytm} className="w-[20%]" />
            <div className="flex flex-col">
              <h1 className="text-xl font-bold text-green-500">Paytm</h1>
              <p className="text-sm md:text-lg text-green-400">Paytm ID</p>
            </div>
            <a className="px-7 text-black hover:bg-black hover:text-green-400 cursor-pointer flex items-center rounded-xl py-3 bg-green-300">Link</a>
          </div>
        </div>
        <div className="rounded-xl w-full md:w-1/3 border shadow-xl shadow-green-200 border-black p-3 px-5">
          <div className="flex flex-wrap flex-row gap-3 justify-between">
            <img src={PhonePay} className="w-[20%]" />
            <div className="flex flex-col">
              <h1 className="text-xl font-bold text-green-500">PhonePay</h1>
              <p className="text-sm md:text-lg text-green-400">PhonePayId</p>
            </div>
            <a className="px-7 text-black hover:bg-black hover:text-green-400 cursor-pointer flex items-center rounded-xl py-3 bg-green-300">Link</a>
          </div>
        </div> </div>
    </>
  )
}
function Prefrences() {
  return (
    <>
      <h1 className=" text-3xl font-bold text-green-500 md:text-4xl m-3 px-5">Language and Region Settings</h1>
      <div className="flex flex-col bg-green-200 m-5 rounded-xl border border-green-400 max-w-[100%] md:max-w-[80%]">
        <div className="flex flex-wrap px-5 flex-row justify-between m-3">
          <div className="flex flex-col gap-3">
            <h3 className="text-2xl  font-bold text-green-600">eZ Languange</h3>
            <p className="text-xl text-green-800">Languange Selected on eZ.com</p>
          </div>
          <h3 className="text-bold text-xl m-3">English(UK)</h3>
          <button className="w-[40%] md:w-[10%] text-xl hover:bg-green-300 text-black hover:text-white bg-white">Edit</button>
        </div>
      </div>
      <div className="flex flex-col bg-green-200 m-5 rounded-xl border border-green-400 max-w-[100%] md:max-w-[80%]">
        <div className="flex flex-wrap flex-row justify-between m-3">
          <div className="flex flex-col gap-3">
            <h3 className="text-2xl  font-bold text-green-600">Region Format</h3>
            <p className="text-xl text-green-800">Formats for Date,time and numbers</p>
          </div>
          <button className="w-[50%] md:w-[10%] text-xl px-3 py-4 hover:bg-green-300 text-black hover:text-white bg-white">Edit</button>
        </div>
      </div>
    </>
  )
}
function Settings() {
  const [activeButton, setActiveButton] = useState(1);

  const handleButtonClick = (buttonNumber) => {
    setActiveButton(buttonNumber);
  };

  return (
    <>
      <h1 className="text-6xl  p-5 bg-green-500/50 text-green-800">SETTINGS</h1>
      <div className="flex flex-row gap-6 px-6 py-3">
        <button
          onClick={() => handleButtonClick(1)}
          className={`cursor-pointer md:text-md xl:text-xl  px-5 py-2 ${activeButton === 1 ? "bg-green-500/80 text-white" : "bg-white"
            } ${activeButton === 1 ? "border-b-6 border-green-400" : "border-b-2 border-black"
            }`}
        >
          About
        </button>
        <button
          onClick={() => handleButtonClick(2)}
          className={`cursor-pointer md:text-md xl:text-xl  px-5 py-2 ${activeButton === 2 ? "bg-green-500/80 text-white" : "bg-white"
            } ${activeButton === 2 ? "border-b-6 border-green-200" : "border-b-2 border-black"
            }`}
        >
          Preferences
        </button>
        <button
          onClick={() => handleButtonClick(3)}
          className={`cursor-pointer md:text-md xl:text-xl  px-5 py-2 ${activeButton === 3 ? "bg-green-500/80 text-white" : "bg-white"
            } ${activeButton === 3 ? "border-b-6 border-green-400" : "border-b-2 border-black"
            }`}
        >
          Payment
        </button>
      </div>
      {
        activeButton === 1 && (
          <FirstPage />
        )
      }
      {
        activeButton === 2 && (<Prefrences />)
      }
      {
        activeButton === 3 && (<Payment />)
      }
      <Footer />
    </>
  );
}


export default Settings;