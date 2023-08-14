import React, { useRef } from 'react';
import { toast } from 'react-hot-toast';
import { MdCheck } from 'react-icons/md';
import ButtonLoading from '../../static/ButtonLoading';
import { useOutsideClick } from '../../hooks/clickOutside';
import PhoneInput from 'react-phone-input-2';
import "react-phone-input-2/lib/style.css";
import "../../pages/User/style/phoneinput.css";

const UserDetail = ({ handleProceedToBuy, name, setName, email, setEmail, phone, phoneHandler, price, loading, openDetail, setOpenDetail }) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        if (!name || !email || !phone) {
            return toast.error("Fill in all the fields to proceed!");
        }
        handleProceedToBuy();
    };

    const detailRef = useRef(null);
    useOutsideClick(() => {
        if (openDetail) {
            setOpenDetail(false);
        }
    }, detailRef);

    return (
        <div className="fixed inset-0 flex items-center justify-center z-10">
            <div className="flex items-center justify-center fixed inset-0 z-40 w-full h-screen bg-gray-100 opacity-70"></div>
            <div className="payment-form w-full max-w-md p-4 bg-white z-50 rounded-md shadow-md" ref={detailRef}>
                <h1 className="text-xl font-bold mb-4 text-center">Payment Details</h1>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="form-group">
                        <label htmlFor="name" className="block text-gray-700 font-semibold">Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={name}
                            onChange={e => setName(e.target.value)}
                            className="form-input w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email" className="block text-gray-700 font-semibold">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            className="form-input w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="phone" className="block text-gray-700 font-semibold">Phone Number:</label>
                        <PhoneInput
                            country={"in"}
                            value={phone}
                            inputProps={{
                                autoComplete: "rawphone",
                            }}
                            onChange={phoneHandler}
                            placeholder="Enter your phone number"
                            className="w-[100%] text-base text-[#2c2f2c] rounded-[10px] placeholder:text-[#8C8787] border overflow-hidden border-gray-200 focus:border-blue-300"
                        />
                    </div>

                    <p className="flex items-center text-gray-600">
                        <MdCheck className="mr-1" />
                        Receive booking details on phone
                    </p>

                    <div className="flex justify-between items-center">
                        <div>
                            <div className="text-center text-gray-600">
                                <p>Price: {price}</p>
                            </div>
                        </div>
                        <div>
                            <button type="submit" disabled={loading} className="bg-black text-white font-semibol rounded-md hover:bg-gray-900 focus:outline-none focus:ring focus:ring-gray-300">
                                {loading ? (
                                    <div className='w-[150px] flex items-center justify-center h-[55px]'><ButtonLoading /></div>
                                ) : <div className="w-[150px] flex items-center justify-center h-[55px]">Confirm & Pay</div>}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default UserDetail