import React from 'react'
import videoCam from "../../../assets/serviceListingCamera.svg";
import timer from "../../../assets/serviceListingTimer.svg";
import coins from "../../../assets/coins.svg";
import { AiFillRightCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const ShortCallList = ({ catalogs }) => {
    const shortCallsData = catalogs?.filter(catalog =>
        catalog?.serviceType === "Consultation" && (catalog?.duration <= 15 || catalog?.customDuration <= 15)
    ).slice().reverse();

    return (
        <div className="flex flex-wrap gap-2">
            {shortCallsData.length === 0 && (
                <div>
                    No Short Consultation added yet
                </div>
            )}
            {shortCallsData && shortCallsData.length > 0 && shortCallsData?.map((call, index) => (
                <div key={index} className="border border-[rgb(192,197,197)] w-full md:w-[347.8px] h-[350px] border-t-[12px] border-t-green-400 rounded-xl flex flex-col items-start justify-between py-4 px-4">
                    <h3 className="font-bold text-[#003902] text-xl">{call?.itemTitle}</h3>
                    <div className="flex flex-row gap-3 items-center">
                        <img src={videoCam} />
                        <div className="px-4 py-1 rounded-full font-bold text-[#14176B] bg-[#E9F2FF]">1:1 Call</div>
                        <img src={timer} />
                        <div className="px-4 rounded-full font-bold text-[#14176B] bg-[#FFF1DB]">
                            {call?.duration !== "Custom" ? call?.duration : call?.customDuration} mins
                        </div>
                    </div>
                    <div className="flex flex-row gap-3 items-center">
                        <img src={coins} />
                        <div className=" text-xl px-6 py-1 rounded text-[#146B1E] bg-[#ECFFF1] font-bold">
                            {call?.price?.currencyCode} {call?.price?.amount}
                        </div>
                    </div>
                    {call?.tags?.length > 0 && (
                        <div className="flex items-start">
                            <div className="flex flex-row flex-wrap gap-2">
                                {call?.tags?.map((tags, index) => (
                                    <p key={index} className="workshopEventTags border border-[#FFBA03] py-1 px-2 bg-white rounded-3xl">
                                        #{tags?.tag}
                                    </p>
                                ))}
                            </div>
                        </div>
                    )}
                    <div className="border -ml-4 w-[calc(100%+32px)] h-[1px]" />
                    <div className="w-full flex justify-between items-center">
                        <Link to={`availability/${call?._id}`} className="flex gap-3 items-center bg-green-500 rounded-lg p-2 font-semibold text-white">
                            Book Session <AiFillRightCircle className="fill-white" />
                        </Link>
                        <div className="cursor-pointer flex gap-3 items-center border border-blue-500 rounded-2xl py-1 px-6 font-light text-blue-500">
                            Share
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ShortCallList