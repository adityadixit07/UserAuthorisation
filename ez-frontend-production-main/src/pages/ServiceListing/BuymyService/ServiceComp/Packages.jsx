import React from 'react'
import { AiFillStar } from "react-icons/ai"
import { BsFillPatchCheckFill } from "react-icons/bs"
import pic1 from "../../../Assets/profile-img/Rectangle 514.png"
import pic2 from "../../../Assets/profile-img/Rectangle 515.png"
import pic3 from "../../../Assets/profile-img/Rectangle 516.png"
const cards = [
  {
    id: 0,
    pic: pic1,
    header: "I will design responsive website UI UX design in figma",
    rating: "5.0",
    price: "8576",
    hashtag: "logo",
  },
  {
    id: 1,
    pic: pic2,
    header: "I will design responsive website UI UX design in figma",
    rating: "4.0 ",
    price: "8576",
    hashtag: "Illustration"
  },
  {
    id: 2,
    pic: pic3,
    header: "I will design responsive website UI UX design in figma",
    rating: "5.0",
    price: "8576",
    hashtag: "UI/UX"

  },
]
function Packages() {
  return (
    <>
      <div id='packages' className='w-full mt-3'>
        <div className='flex p-5 gap-5 items-center'>
          <AiFillStar className='fill-green-500' size={30} /><h3 className='text-2xl font-bold'>Packages</h3>
        </div>
      </div>
      <div className='w-full grid grid-cols-1 pb-8 md:flex gap-3 border-b-8'>
        {/* cards */}

        {
          cards.map((data, index) => {
            return <div className='w-full md:w-1/3 rounded-[10px] bg-[#002404]' key={index}>
              <div className='w-full overflow-hidden p-1'>
                <img src={data.pic} className='bg-cover w-full' alt="" />
              </div>
              <h1 className='p-1 text-xs bg-slate-100 my-2 mx-3 font-semibold rounded-lg'>{data.header}</h1>
              <div className='hashtag flex justify-around items-center gap-2 p-3'>
                {
                  cards.map((data, index) => (
                    <h3 className='bg-slate-50 px-2 py-1 text-xs font-semibold  rounded-[10px]' key={index}>#{data.hashtag}</h3>
                  ))
                }
              </div>
              <div className='flex justify-between p-3 text-[70%]'>
                <div className='flex justify-center gap-1'>
                  <AiFillStar className='fill-[#B9FFCD]' size={25} />
                  <div >
                    <h2 className='text-[#0F4E20] text-xs font-bold bg-slate-100 inline-block p-1 rounded-[10px]'>{data.rating} <span className='text-[#1C849A]'>(95 Ratings)</span></h2>
                  </div>
                </div>
                <div className='flex flex-col gap-1 items-center '>
                  <BsFillPatchCheckFill className='fill-green-500 drop-shadow-2xl shadow-red-800' size={30} />
                  <h2 className='text-sm font-semibold text-slate-600'>ez verified Seller </h2>
                </div>
              </div>
              <div className='flex justify-evenly items-center bg-slate-50 p-2 m-1 rounded-[10px]'>
                <button type="button" className='p-2 text-xs font-bold text-white bg-[#1BB76E] rounded-[10px]'>Add to Cart</button>
                <div className='text-xs font-bold text-slate-600 flex flex-col'>
                  <h5>STARTING</h5>
                  <h5>AT Rs{data.price}</h5>
                </div>
              </div>

            </div>
          })
        }

      </div>
    </>
  )
}

export default Packages
