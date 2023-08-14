import React from 'react';
import { AiFillRightCircle } from "react-icons/ai";

import workshopsEventThumbnail from "../../../assets/workshopsEventThumbnail.png";
import coins from "../../../assets/coins.svg";
import iLogo from "../../../assets/profile-img/i-logo.svg";
import tagsLogo from "../../../assets/profile-img/skills-logo.svg"
import { Link } from 'react-router-dom';

const WorkshopList = ({ catalogs }) => {
    const workshopData = catalogs?.filter(catalog => catalog?.serviceType === "Workshop & Training").slice().reverse();

    return (
        <div className="flex flex-col flex-wrap gap-4">
            {workshopData.length === 0 && (
                <div>
                    No Workshop added yet
                </div>
            )}
            {workshopData?.map((workshop, index) => (
                <div key={index} className="flex flex-col md:flex-row items-stretch p-4 border border-[rgb(192,197,197)] border-t-[12px] border-t-green-400 rounded-xl">
                    <div className="flex flex-col w-full md:min-w-[40%] md:max-w-[40%]">
                        <img
                            className="rounded h-[200px] object-cover"
                            src={workshop?.thumbnail[0]?.url ? workshop?.thumbnail[0]?.url : workshopsEventThumbnail}
                        />
                        {workshop?.tags?.length > 0 && (
                            <div className="mt-4 flex items-start">
                                <img src={tagsLogo} alt="" />
                                <div className="ms-2 flex flex-row flex-wrap">
                                    {workshop?.tags?.map((tags, index) => (
                                        <p key={index} className="workshopEventTags py-1 px-2 bg-white rounded-3xl mx-2 mb-2">
                                            #{tags?.tag}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="md:ms-5 w-full">
                        <h2 className="text-2xl font-bold">
                            {workshop?.itemTitle}
                        </h2>
                        <p className="mt-2">
                            <span>
                                {workshop?.workShopDetails?.date} | {workshop?.workShopDetails?.time} | {workshop?.duration !== "Custom" ? workshop?.duration : workshop?.customDuration}mins
                            </span>
                        </p>
                        {workshop?.category && (
                            <div className="flex flex-row items-center mt-4">
                                <img src={iLogo} className="saturate-0 h-6" alt="" />
                                <p className="bg-[#B5B5B5] text-white font-bold py-1 px-2 mr-1 rounded-2xl">
                                    {workshop?.category}
                                </p>
                            </div>
                        )}
                        <div className="flex flex-col md:flex-row md:items-center justify-between mt-4 w-full">
                            <div className='flex items-center'>
                                <img src={coins} className="me-4" alt="" />
                                <p className="text-2xl font-bold text-[#146B1E] me-10">
                                    {workshop?.price?.currencyCode} {workshop?.price?.amount}
                                </p>
                            </div>
                        </div>

                        <div className="border -ml-4 w-[calc(100%+32px)] h-[1px] my-4 md:hidden"/>

                        <div className="w-full flex justify-between items-center md:my-4">
                            <Link to={`checkout/${workshop._id}`} className="flex gap-3 items-center bg-green-500 rounded-lg p-2 px-4 font-semibold text-white">
                                Book Now <AiFillRightCircle className="fill-white" />
                            </Link>
                            <div className="cursor-pointer flex gap-3 items-center border border-blue-500 rounded-2xl py-1 px-6 font-light text-blue-500">
                                Share
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default WorkshopList