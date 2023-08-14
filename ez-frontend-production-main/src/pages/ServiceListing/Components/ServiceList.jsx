import React from 'react';
import { AiFillRightCircle, AiFillStar } from 'react-icons/ai';
import { MdVerified } from 'react-icons/md';
import StarRating from './Extras/StarRating';

import iLogo from "../../../assets/profile-img/i-logo.svg";
import tagsLogo from "../../../assets/profile-img/skills-logo.svg";
import coins from "../../../assets/coins.svg";
import img from "../../../assets/cardImg.svg";
import { Link } from 'react-router-dom';

const ServiceList = ({ catalogs }) => {
    const servicesData = catalogs?.filter(catalog => catalog?.serviceType === "Service Package").slice().reverse();

    return (
        <div className="flex flex-wrap gap-2">
            {servicesData.length === 0 && (
                <div>
                    No Service Package added yet
                </div>
            )}
            {servicesData && servicesData?.map((service, index) => (
                // <div className="resourcesCard w-full lg:w-[400px] shadow-xl rounded-lg p-3">
                < div key={index} className="border border-[rgb(192,197,197)] w-full md:w-[347.8px] border-t-[12px] border-t-green-400 rounded-xl flex flex-col items-start justify-between p-3" >
                    <div className="shadow-lg mb-3 flex flex-col items-center p-2 w-full">
                        <img
                            src={service?.thumbnail[0]?.url ? service?.thumbnail[0]?.url : img} alt="Card Img"
                            className="w-full h-[200px] object-cover"
                        />
                        <div className="w-full pt-3">
                            <p className="font-bold">
                                {service?.itemTitle}
                            </p>
                        </div>
                        <div className="w-full pb-3">
                            <p className="font-semibold text-gray-600" key={index}>
                                {service?.subHeading}
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center mb-3">
                        <img src={iLogo} className="saturate-0 me-4 w-8 h-6" alt="" />
                        <p className="bg-[#B5B5B5] text-white font-bold py-1 px-2 rounded-2xl">
                            {service?.category}
                        </p>
                    </div>
                    {service?.tags?.length > 0 && (
                        <div className="flex flex-row items-center gap-3 mb-3">
                            <img src={tagsLogo} className="h-[25px]" alt="" />
                            <div>
                                {service?.tags?.map((tags, index) => (
                                    <button key={index} className="servicesTags px-4 py-1 bg-white rounded-3xl mb-2 mx-1">
                                        #{tags.tag}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                    <div className="mt-4 flex items-center gap-2 mb-8">
                        <AiFillStar className="text-[#3DF554] text-3xl" />
                        <div className="profileLocationButton bg-[white] text-[black] rounded-2xl p-2 font-bold flex">
                            <span className="me-1">
                                {service?.ratings}
                            </span>
                            <StarRating
                                ratings={service?.ratings}
                            />
                        </div>
                        <p>({service?.reviews?.length})</p>
                    </div>
                    <div className="flex items-end justify-between flex-wrap">
                        <div className="flex flex-col p-0">
                            <div className='flex items-center'>
                                <img src={coins} alt="" />
                                <span className="font-bold text-green-700 text-xl">
                                    {service?.price?.currencyCode} {service?.price?.amount}
                                </span>
                            </div>
                            <span className="pl-2 text-gray-700">
                                {service?.price?.typeOfPayment}
                            </span>
                        </div>
                        {service?.isEzAssured && (
                            <div className=" flex flex-col items-center text-gray-600 font-semibold">
                                <MdVerified className="fill-[green]" />
                                eZ Assured
                            </div>
                        )}
                    </div>
                    <div className="border -ml-3 w-[calc(100%+25px)] h-[1px] mt-2 mb-4" />
                    <div className="w-full flex justify-between items-center">
                        <Link to={`buymyservice/${service?._id}`} className="flex gap-3 items-center bg-green-500 rounded-lg p-2 font-semibold text-white">
                            Buy Service <AiFillRightCircle className="fill-white" />
                        </Link>
                        <div className="cursor-pointer flex gap-3 items-center border border-blue-500 rounded-2xl py-1 px-6 font-light text-blue-500">
                            Share
                        </div>
                    </div>
                </div>
            ))
            }
        </div >
    )
}

export default ServiceList