import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const RecentOrders = () => {
    const { isFetchingBookings, bookings } = useSelector((state) => state.seller);

    return (
        <div className="border border-[#ccc] p-[10px] rounded-[5px] mb-[20px] bg-[#f2f2f2] w-full">
            <h2 className="text-3xl font-bold p-4">Recent Orders</h2>

            <div className="w-full flex flex-col gap-4 md:gap-6">
                {!isFetchingBookings && bookings?.slice(0, 5)?.reverse()?.map((item, i) => (
                    <div className="w-full flex justify-between" key={i}>
                        <Link to={item?.buyer_username && `/${item.buyer_username}`} className={`${!item?.buyer_username && "cursor-default"} w-1/4 flex items-center justify-center`}>
                            <img
                                src={item?.buyer_photo ? item.buyer_photo : "/icon.png"}
                                className='w-[50px] h-[50px] rounded-full'
                                alt="buyer"
                            />
                        </Link>
                        <div className="w-1/4 flex items-center justify-center">
                            <h1 className="text-[18px] md:text-2xl">{item.buyer_name}</h1>
                        </div>
                        <div className="w-1/4 flex items-center justify-center">
                            <button className="px-6 md:px-12 rounded-full py-2 md:py-4 bg-green-300  text-green-800">Paid</button>
                        </div>

                        <div className="w-1/4 p-3 flex items-center justify-center">
                            <h1 className="font-bold">
                                {item.price.currencyCode} ${item.price.amount}
                            </h1>
                        </div>
                    </div>
                ))}
            </div>
        </div >
    )
}

export default RecentOrders

{/* <div>
    <div className="invoice-details">
        <div> </div>
        <div className="">
            <img src={pfimage} alt="My Image" />
        </div>
        <div className="">
            <h1 className="text-2xl">Rohit Prajapati </h1>
            <p> JQ Holdings</p>
        </div>
        <div className="">
            <button className="px-12 rounded-full py-4 bg-green-300  text-green-800">Paid</button>
        </div>

        <div className=" p-3">
            <h1 className="font-bold">₹1200.87</h1>
        </div>
    </div>
    <div className="invoice-details">
        <div className="">
            <img src={pfimage} alt="My Image" />
        </div>
        <div className="">
            <h1 className="text-2xl">Rohit Prajapati </h1>
            <p> JQ Holdings</p>
        </div>
        <div className="">
            <button className="px-12 py-4 bg-red-300 rounded-full text-red-800">Late</button>
        </div>

        <div className=" p-3">
            <h1 className="font-bold">₹1200.87</h1>
        </div>
    </div>
</div> */}