import React from 'react'
import { FaRupeeSign,FaMoneyBill } from 'react-icons/fa'
// import { MdOutlinePriceChange } from 'react-icons/md'

const Pricing = ({ priceType, setPriceType, price, setPrice, currency, setCurrency }) => {
    return (
        <div className="flex flex-col gap-4">
            <label htmlFor="Pricing" className=" mb-2 text-sm font-semibold text-gray-900"><h2 className="py-1.5 w-fit px-10 shadow-md rounded-[10px] bg-slate-100 flex gap-5 items-center"><FaMoneyBill className='fill-green-500' size={35} />Pricing</h2></label>
            <select value={priceType} onChange={(e) => setPriceType(e.target.value)} className="md:w-[40%] w-full bg-gray-50 border border-gray-300 text-slate-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5   dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option value="" disabled defaultValue={"Payment"} >Type of Payment</option>
                {["One-time", "Value-based", "Competition-based", "Cost-plus", "Dynamic pricing"].map((data, i) => {
                    return <option key={i} value={data}>{data}</option>
                })}
            </select>
            <ul className="p-3 md:w-[30%] w-full rounded-[10px] shadow-lg">
                <h3 className="py-4 font-bold px-2">Offer Price</h3>
                <div className=" w-full relative">
                    <input type="number" placeholder="Enter Price" value={price} onChange={(e) => setPrice(e.target.value)} className="w-full bg-gray-50 border border-gray-300 text-slate-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block pl-20 pr-2 py-2.5   dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    <select value={currency} onChange={(e) => setCurrency(e.target.value)} className=" absolute left-0 top-0 bg-gray-500 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option value="₹">₹</option>
                        <option value="$">$</option>
                    </select>
                    {/* <FaRupeeSign className="absolute top-[25%] left-0 fill-green-400" size={25} /> */}
                </div>
            </ul>
        </div>
    )
}

export default Pricing