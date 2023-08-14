import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ButtonLoading from '../../static/ButtonLoading';
import { checkEmailAndUpdate, confirmPhone, updateUserDetails, verifyPhone } from '../../actions/userActions';
import OTPInput, { ResendOTP } from "otp-input-react";
import PhoneVerifyCSS from "../../pages/User/style/Registration.module.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "../../pages/User/style/phoneinput.css";

const AddEmailPhone = ({ missing }) => {
    const dispatch = useDispatch();
    const { isEmailVerifying, isEmailVerified, isPhoneVerifying, isPhoneVerified, isOTPVerifying, isOTPVerified } = useSelector(state => state.user);

    const [rawPhone, setRawPhone] = useState("");
    const [openOTP, setOpenOTP] = useState(false);

    useEffect(() => {
        if (!isEmailVerifying && isEmailVerified) window.location.reload();
    }, [isEmailVerifying, isEmailVerified]);

    useEffect(() => {
        if (!isOTPVerifying && isOTPVerified) window.location.reload();
    }, [isOTPVerifying, isOTPVerified]);

    return (
        <>
            <div className="fixed inset-0 flex items-center justify-center z-[60] md:z-60">
                <div className="bg-gray-100 opacity-70 fixed inset-0 z-40"></div>

                <div className="bg-white w-[96%] md:w-[400px] absolute rounded-lg md:rounded-t-none md:rounded-b-lg shadow-xl shadow-green-300 overflow-hidden z-50">
                    {!openOTP ? (
                        <EmailPhone
                            dispatch={dispatch}
                            missing={missing}
                            isEmailVerifying={isEmailVerifying}
                            isPhoneVerifying={isPhoneVerifying}
                            rawPhone={rawPhone}
                            setRawPhone={setRawPhone}
                            setOpenOTP={setOpenOTP}
                        />
                    ) : (
                        <OTPVerify
                            dispatch={dispatch}
                            rawPhone={rawPhone}
                            isOTPVerifying={isOTPVerifying}
                        />
                    )}
                </div>
            </div>
        </>
    )
}

const EmailPhone = ({ dispatch, missing, isEmailVerifying, isPhoneVerifying, rawPhone, setRawPhone, setOpenOTP }) => {
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [countryCode, setCountryCode] = useState("");

    const updateEmailSubmit = (e) => {
        e.preventDefault();

        dispatch(checkEmailAndUpdate(email));
    }

    const phoneHandler = (phone, country) => {
        if (email !== "") setEmail("");

        setPhone(phone);
        setCountryCode(country.dialCode);

        const rawPh = phone.replace(country.dialCode, "");
        setRawPhone(rawPh);
    };

    const verifyPhoneSubmit = (e) => {
        e.preventDefault();

        dispatch(verifyPhone(countryCode, rawPhone, setOpenOTP));
    };

    return (
        <>
            <div className="w-full sm:flex sm:items-center px-6 pt-4">
                <div className="w-full text-center sm:text-left">
                    <h2 className="text-xl font-extrabold mb-3">
                        {missing} required!
                    </h2>


                    {missing === "Email" ? (
                        <input
                            type="email"
                            placeholder={`Enter your ${missing}`}
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            className="w-full p-2 rounded-md border-2 border-green-300 outline-green-500"
                        />
                    ) : (
                        <div className=" flex flex-row  border-2 rounded-[10px]">
                            <PhoneInput
                                country={"in"}
                                value={phone}
                                inputProps={{
                                    autoComplete: "rawphone",
                                }}
                                onChange={phoneHandler}
                                placeholder={`Enter your ${missing}`}
                                className="w-[100%] text-base text-[#2c2f2c] rounded-[10px] placeholder:text-[#8C8787] focus:outline-none"
                            />
                        </div>
                    )}

                </div>
            </div>
            <div className="px-6 pt-2 pb-4">
                <div className="flex justify-end">

                    {missing === "Email" ? (
                        isEmailVerifying ? <ButtonLoading /> : (
                            <button disabled={isEmailVerifying} onClick={updateEmailSubmit} className="rounded px-4 bg-green-500 text-white hover:bg-green-600 focus:outline-none">
                                <div className="py-2">Update</div>
                            </button>
                        )
                    ) : missing === "Phone" && (
                        isPhoneVerifying ? <ButtonLoading /> : (
                            <button disabled={isPhoneVerifying} onClick={verifyPhoneSubmit} className="rounded px-4 bg-green-500 text-white hover:bg-green-600 focus:outline-none">
                                <div className="py-2">Send OTP</div>
                            </button>
                        )
                    )}
                </div>
            </div>
        </>
    )
};

const OTPVerify = ({ dispatch, rawPhone, isOTPVerifying }) => {
    const [phoneOTP, setPhoneOTP] = useState("");

    const handleOTPSubmit = (e) => {
        e.preventDefault();

        dispatch(confirmPhone(phoneOTP, rawPhone));
    };

    return (
        <>
            <div className="w-full sm:flex sm:items-center px-6 py-4">
                <div className="w-full text-center sm:text-left">
                    <h2 className="text-xl font-extrabold mb-3">
                        Enter OTP
                    </h2>

                    <div className="w-full flex justify-center">
                        <OTPInput
                            value={phoneOTP}
                            className={`${PhoneVerifyCSS.ez_otp}`}
                            onChange={setPhoneOTP}
                            autoFocus
                            OTPLength={4}
                            otpType="number"
                            disbaled={isOTPVerifying}
                        />
                    </div>
                </div>
            </div>

            <div className="px-6 pt-2 pb-4">
                <div className="flex justify-end">
                    {isOTPVerifying ? <ButtonLoading /> : (
                        <button disabled={isOTPVerifying} onClick={handleOTPSubmit} className="rounded px-4 bg-green-500 text-white hover:bg-green-600 focus:outline-none">
                            <div className="py-2">Verify</div>
                        </button>
                    )}
                </div>
            </div>
        </>
    )
};

export default AddEmailPhone