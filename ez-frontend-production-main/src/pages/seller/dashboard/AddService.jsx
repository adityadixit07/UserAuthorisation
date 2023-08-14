import { useState } from "react";
import "../seller.css";

import { FaAngleRight } from "react-icons/fa";
import { BsFillBagCheckFill, BsFillCheckCircleFill } from "react-icons/bs";
import { AiTwotoneCheckCircle } from "react-icons/ai";
import "react-quill/dist/quill.snow.css";
import ServiceistingTabContent from "../ServiceistingTabContent";
// import CurrencyList from "./CurrencyList.json";
import { Toaster } from "react-hot-toast";

function AddService({ user, setOpenComingSoon }) {
    const [serviceTab, setServiceTab] = useState(null);


    function getRandomColor() {
        // Get a random number between 0 and 255 for each of the red, green, and blue components.
        const red = Math.floor(Math.random() * 255);
        const green = Math.floor(Math.random() * 255);
        const blue = Math.floor(Math.random() * 255);

        // Return the color as an RGB string.
        return `rgba(${red}, ${green}, ${blue},0.2)`;
    }

    return (
        <>
            <Toaster toastOptions={{ duration: 5000 }} />
            <section className="w-full">
                <div>
                    <div className="py-5">
                        <h1 className="md:text-4xl text-3xl font-semibold">
                            Add a New Service
                        </h1>
                        <p className="text-base font-normal text-slate-600">
                            &ldquo;Expand your offerings, unleash your potential!&rdquo;
                        </p>
                    </div>

                    <div className="py-10  ">
                        <h1 className="flex gap-3 text-xl font-semibold">
                            What are you selling ?{" "}
                            <FaAngleRight
                                className=" rounded-full bg-slate-200 rotate-90 md:rotate-0 fill-green-400"
                                size={35}
                            />
                        </h1>
                        <div className="flex flex-col md:flex-row items-center pb-7 gap-6 md:gap-0 whitespace-nowrap md:whitespace-normal justify-around pt-7" >
                            {[
                                "Consultation ",
                                "Service Package",
                                "Digital Product ",
                                "Workshop & Training",
                                "Influencer Connect ",
                            ].map((data, i) => {
                                const color = getRandomColor();
                                return (
                                    <div
                                        key={i}
                                        className={`relative min-w-[160px] md:w-40 h-40 cursor-pointer ${serviceTab === i ? "shadow-md md:shadow-xl" : ""
                                            } flex flex-col rounded-xl items-center transition justify-evenly `}
                                        style={{ background: color }}
                                        onClick={() => setServiceTab(i)}
                                    >
                                        <BsFillBagCheckFill size={40} />
                                        <h4 className="text-xs font-bold">{data}</h4>
                                        <p className="text-[10px] font-normal text-slate-600 whitespace-normal text-center">
                                            Exchange Knowledge, Clear doubts, etc
                                        </p>
                                        <BsFillCheckCircleFill className={`absolute ${serviceTab === i ? " " : "hidden"}  -top-1 -right-1 fill-green-600`} size={35} />
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <div>
                        <ServiceistingTabContent
                            serviceTab={serviceTab}
                            user={user}
                            setOpenComingSoon={setOpenComingSoon}
                        />
                    </div>
                </div>
            </section>
        </>
    );
}

export default AddService;
