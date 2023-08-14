import { BsCaretRightSquareFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import Ez from "../../../../assets/profile-img/VectorEZ.svg"
import community from "../../../../assets/profile-img/VectorComm.svg"
import chirag from "../../../../assets/profile-img/Vectorchirag.svg"
import { useEffect, useState } from "react";
import BuyServicesModal from "../../components/PopUps/BuyServicesModal";
import FormSubmittedPage from "../../components/FormSubmitted";
import { useSelector } from "react-redux";
import { toast } from "react-hot-toast";

function StartupType({ isSeller }) {
    const { loading, formSubmittedMessage, formSubmittedError } = useSelector(
        (state) => state.ezKaro
    );
    const [ezKaroForm, setEzKaroForm] = useState(false);
    const [formSubmit, setFormSubmit] = useState(false);

    useEffect(() => {
        if (formSubmittedMessage === "Form Submitted Successfully" && !loading) {
            toast.success("Form Submitted Successfully!");
            setEzKaroForm(false);
            setFormSubmit(true);
        }
    }, [formSubmittedMessage, loading]);

    return (
        <>
            {ezKaroForm && (
                <BuyServicesModal
                    ezKaroForm={ezKaroForm}
                    setEzKaroForm={setEzKaroForm}
                />
            )}
            {formSubmit && (
                <FormSubmittedPage
                    formSubmit={formSubmit}
                    setFormSubmit={setFormSubmit}
                />
            )}

            <div className="p-2 my-5 md:p-0">
                <div className="flex w-full flex-wrap  md:flex-nowrap justify-between gap-5 py-5">
                    {[
                        {
                            type: "ASSURED SERVICE",
                            name: "You Demand, We Supply ",
                            button: "eZ Karo !!!",
                            // link: "/main/ezkaroform",
                            icon: Ez,
                            article:
                                "Book now and experience the convenience of eZ Karo with our reliable and verified providers. Your satisfaction and work quality is our priority",
                            img: "https://res.cloudinary.com/ds6spmr71/image/upload/v1685441528/Group_231_cwioy6.png",
                        },
                        {
                            type: "COMMUNITY",
                            name: "Startup Community",
                            button: "Join Now ",
                            link: "/main/startupcommunity",
                            icon: community,
                            article:
                                "Join our vibrant community of like-minded individuals and innovators today and unlock endless opportunities for collaboration!",
                            img: "https://res.cloudinary.com/ds6spmr71/image/upload/v1682998366/startup_zlgwwx.svg",
                        },
                        {
                            type: "EZ SELLER",
                            name: "Start Selling  on eZ",
                            button: "Become an eZer",
                            link: "/seller/sellerdashboard",
                            icon: chirag,
                            article:
                                "Join our vibrant community of like-minded individuals and innovators today and unlock endless opportunities for collaboration!",
                            img: "https://res.cloudinary.com/ds6spmr71/image/upload/v1685441688/marketplace1_1_ocymvu.svg",
                        },
                    ].filter(item => isSeller ? item.type !== "EZ SELLER" : item).map((data, index) => {
                        return (
                            <div key={index}>
                                <div className="flex flex-col items-center">
                                    <div className={`flex justify-around items-center my-8 ${data.button === "eZ Karo !!!" ? "bg-black shadow-green-200" : "bg-green-200"} shadow-lg  p-2 gap-3 w-fit md:min-w-[200px] items-center ${data.bgcolor} rounded-full`}>
                                        <div className="w-[30px] h-[30px]">
                                            {/* {data.icon} */}
                                            <img src={data.icon} alt="" className="w-full h-full" />
                                        </div>
                                        <div>
                                            <h1 className={`text-green-900 bg-white rounded-xl px-2 py-1  font-semibold text-sm ${data.button === "eZ Karo !!!" ? "px-2" : "px-6"}`}>{data.type}</h1>
                                        </div>
                                    </div>
                                    <div
                                        className="flex flex-col min-w-[300px] rounded-xl overflow-hidden bg-slate-50 hover:bg-green-100"
                                        key={data.name}
                                    >
                                        <div className="h-28 bg-slate-200 flex items-center p-3">
                                            <img
                                                src={data.img}
                                                alt="ez Karo"
                                                className="w-24"
                                            />
                                        </div>
                                        <div className="w-full p-2">
                                            <h1 className="font-bold text-xl text-green-500 underline p-2">
                                                {data.name}
                                            </h1>
                                            {data.type !== "ASSURED SERVICE" ? (
                                                <Link
                                                    to={data.link}
                                                    className="w-fit px-3 p-1 flex items-center m-1 bg-green-400 hover:bg-green-600 gap-2 text-base font-bold text-white rounded-xl"
                                                >
                                                    <BsCaretRightSquareFill />
                                                    {data.button}
                                                </Link>
                                            ) : (
                                                <div
                                                    className="cursor-pointer w-fit px-3 p-1 flex items-center m-1 bg-green-400 hover:bg-green-600 gap-2 text-base font-bold text-white rounded-xl"
                                                    onClick={() => setEzKaroForm(prev => !prev)}
                                                >
                                                    <BsCaretRightSquareFill />
                                                    {data.button}
                                                </div>
                                            )}
                                            <p className="m-1 text-sm py-3 text-justify">{data.article}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
}

export default StartupType

{/* <div className="flex justify-between">
                {[
                    {
                        type: "ASSURED SERVICE",
                        color: "bg-black",
                        icon: "https://res.cloudinary.com/ds6spmr71/image/upload/v1682998364/service_awrlrf.png",
                        link: "/ezassured",
                    },
                    {
                        type: "COMMUNITY",
                        color: "bg-green-100",
                        icon: "https://res.cloudinary.com/ds6spmr71/image/upload/v1685442159/assured_hpthcl.png",
                        link: "/ezassured",
                    },
                    {
                        type: "EZ SELLER",
                        color: "bg-green-100",
                        icon: "https://res.cloudinary.com/ds6spmr71/image/upload/v1685442179/assured_1_tdzqhy.png",
                        link: "/ezassured",
                    },
                ].map((data) => (
                    <div
                        key={data.type}
                        className={`flex md:min-w-[200px] items-center rounded-full`}
                    >
                        <Link to={data.link}>
                            <img
                                src={data.icon}
                                alt="Icon"
                                className="h-6 md:h-14 hover:opacity-75"
                            />
                        </Link>
                    </div>
                ))}
            </div> */}

{/* <div className="my-5 border-t">
                <h2 className="text-4xl font-semibold py-3 mt-3">Discover eZers </h2>
                <div className="flex gap-5 items-center mt-5 ">
                    <span className="bg-gray-200 p-2 rounded-full hidden md:flex">
                        <TbTableOptions size={40} />
                    </span>
                    <span className="bg-gray-200 p-2 rounded-full flex md:hidden items-center">
                        <TbTableOptions size={24} />
                    </span>
                    <div>
                        <h3 className="text-lg md:text-3xl font-semibold">
                            BROWSE BY CATEGORY{" "}
                        </h3>
                        <p className="hidden md:block">
                            Find anything you are looking for from mentors to industry
                            professionals to founders and investors{" "}
                        </p>
                    </div>
                </div>
            </div> */}
{/* <div className="flex justify-between flex-wrap md:flex-nowrap px-5 md:px-0">
                {["Developers", "Designers", "Data Scientists"].map((data) => {
                    return (
                        <div
                            className=" h-52 w-full md:w-52 relative overflow-hidden rounded-lg mt-5 md:mt-0"
                            key={data}
                        >
                            <h3 className="absolute flex justify-evenly  items-center z-10 top-5 text-white font-bold text-center w-full">
                                {data}
                                <FaArrowAltCircleRight className="fill-green-200" size={30} />
                            </h3>
                            <img
                                className="w-full h-full absolute bg-cover z-0 inset-0 rounded-lg"
                                src={
                                    "https://res.cloudinary.com/db97icmxn/image/upload/v1685463659/DEVPIC_kedacb.jpg"
                                }
                                alt="Demo Icon"
                            />
                        </div>
                    );
                })}
            </div> */}

// return (
//     <>
//         <div className='flex gap-2 justify-between md:p-10'>
//             {[{ "type": "ASSURED SERVICE", "color": "bg-black", "icon": <RiCommunityFill className='fill-white' size={30} /> }, { "type": "COMMUNITY", "color": "bg-green-100", "icon": <RiCommunityFill size={30} /> }, { "type": "EZ SELLER", "color": "bg-green-100", "icon": <GiMagicLamp size={30} /> }].map((data, index) => {
//                 return (
//                     <div key={index} className={`flex gap-3 md:gap-0 justify-between md:justify-around p-2 md:min-w-[200px] items-center ${data.color} rounded-full`}>
//                         {data.icon}
//                         <div>
//                             <h1 className='text-green-800 font-semibold text-sm'>{data.type}</h1>
//                         </div>
//                     </div>
//                 )
//             })}
//         </div>

//         <div className='flex flex-col justify-between gap-5 py-5'>
//             {
//                 [{ "name": "You Demand, We Supply ", "button": "eZ Karo !!!", "article": "Book now and experience the convenience of eZ Karo with our reliable and verified providers. Your satisfaction and work quality is our priority" },
//                 { "name": "Startup Community", "button": "Join Now ", "article": "Join our vibrant community of like-minded individuals and innovators today and unlock endless opportunities for collaboration!" },
//                 {
//                     "name": "Start Selling  on eZ", "button": "Become an eZer ", "article": "Join our vibrant community of like-minded individuals and innovators today and unlock endless opportunities for collaboration!"
//                 }
//                 ].map((data, index) => {
//                     return (
//                         <div key={index} className='flex flex-col min-w-[300px] rounded-xl overflow-hidden' >
//                             <div className='h-28 bg-slate-400'>
//                                 <img
//                                     className="h-28 w-full object-cover"
//                                     src="../../../../../assets/banner1.png"
//                                     alt="ezbannerback"
//                                 />
//                             </div>
//                             <h1 className='font-bold text-xl text-green-500 underline p-2'>{data.name}</h1>
//                             <button className='w-fit p-2 flex items-center m-1 bg-green-400 gap-2 text-base font-bold text-white rounded-xl'><BsCaretRightSquareFill />{data.button}</button>
//                             <p className='m-1 text-sm py-3'>{data.article}</p>
//                         </div>
//                     )
//                 })
//             }
//         </div >
//     </>
// )