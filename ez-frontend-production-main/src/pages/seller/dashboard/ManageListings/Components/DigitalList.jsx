import React from 'react';
import iLogo from "../../../../../assets/profile-img/i-logo.svg";
import { AiFillRightCircle, AiFillStar } from 'react-icons/ai';
import digitalProductThumbnail from "../../../../../assets/digitalProductThumbnail.png"
import serviceListingCheck from "../../../../../assets/serviceListingCheck.svg"
import coins from "../../../../../assets/coins.svg";
import StarRating from './Extras/StarRating';

const DigitalList = ({ catalogs }) => {
    const digitalData = catalogs.filter(catalog => catalog.serviceType === "Digital Product").slice().reverse();

    return (
        <div className="flex flex-wrap gap-5">
            {digitalData.length === 0 && (
                <div>
                    No Digital Product added yet
                </div>
            )}
            {digitalData && digitalData?.map((product, index) => (
                <div key={index} className="border border-[rgb(192,197,197)] w-full md:w-[400px] border-t-[12px] border-t-green-400 rounded-xl flex flex-col items-start justify-between p-3" >
                    <img
                        className='w-full h-[200px] object-cover'
                        src={product?.thumbnail[0]?.url ? product?.thumbnail[0]?.url : digitalProductThumbnail}
                    />

                    <div className="py-4 px-2 mt-1 border rounded border-[rgb(247,247,247)]">
                        <h2 className="font-bold text-2xl">{product?.itemTitle}</h2>
                    </div>

                    {product?.tags?.length > 0 && (
                        <div className="mt-4 flex flex-row gap-2 items-center">
                            <img src={iLogo} className="saturate-0 h-6" />
                            {product?.tags?.map((tags, index) => (
                                <p key={index} className="bg-[#B5B5B5] text-white font-bold py-1 px-2 mr-1 rounded-2xl">
                                    {tags.tag}
                                </p>
                            ))}
                        </div>
                    )}
                    <div className="mt-4 flex items-center gap-2 mb-8">
                        <AiFillStar className="text-[#3DF554] text-3xl" />
                        <div className="profileLocationButton bg-[white] text-[black] rounded-2xl p-2 font-bold flex">
                            <span className="me-1">
                                {product?.ratings}
                            </span>
                            <StarRating
                                ratings={product?.ratings}
                            />
                        </div>
                        <p>({product?.reviews?.length})</p>
                    </div>

                    {product?.topics?.topic?.length > 0 && (
                        <div className="mt-4 px-2">
                            {product?.topics?.topic?.map((topic, index) => (
                                <div key={index} className="flex flex-row items-center">
                                    <img src={serviceListingCheck} className="h-6 me-1" />
                                    <ul className="p-0 m-0">
                                        <li className="m-0 p-0 my-2">
                                            {topic}
                                        </li>
                                    </ul>
                                </div>
                            ))}
                        </div>
                    )}

                    <div className="flex flex-row mt-4 px-2">
                        <img src={coins} className="me-4" />
                        <p className="text-2xl font-bold text-[#146B1E]">
                            {product?.price?.currencyCode} {product?.price?.amount}
                        </p>
                    </div>

                    <div className="border -ml-3 w-[calc(100%+25px)] h-[1px] mt-2 mb-4" />

                    <div className="w-full flex justify-between items-center">
                        <button className="flex gap-3 items-center bg-green-500 rounded-lg p-2 font-semibold text-white">
                            Edit Product <AiFillRightCircle className="fill-white" />
                        </button>
                        <div className="cursor-pointer flex gap-3 items-center border border-blue-500 rounded-2xl py-1 px-6 font-light text-blue-500">
                            Share
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default DigitalList