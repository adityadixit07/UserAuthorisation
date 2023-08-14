import React from 'react'
import { AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai'
import { BsFacebook } from 'react-icons/bs'
import { IoLogoWhatsapp } from 'react-icons/io'

const InviteCard = ({ link, copyText, copied }) => {
    const name = "Muqtadir Sir Ez ";
    const whatsappMessage = `Hello ${name}, please join me in this event www.ezage.in`;
    const websiteLink = "https://www.ezage.in";
    const facebookMessage = "Check out this website: " + websiteLink;
    const linkedInMessage = "Check out this website: " + websiteLink;
    const twitterMessage = "Check out this website: " + websiteLink;

    return (
        <>
        <div className="p-2 md:p-0">
            <div className="bg-[#f3f1f1] w-full border border-slate-400 shadower rounded-[10px] my-4 shadow-slate-200 flex flex-col gap-5 py-5 px-5 md:px-10">
                <h1 className="md:text-5xl text-4xl font-semibold">
                    Share your Link on Social Media
                </h1>
                <p className="text-base font-normal md:text-ellipsis text-justify w-full md:w-[80%]">
                    Broadcast Your Talents: Share your proof of work on Twitter, LinkedIn,
                    and more to broadcast your skills and attract meaningful
                    opportunities.
                </p>
                <div className="flex items-center gap-8">
                    <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(twitterMessage)}`} target="_blank" rel="noopener noreferrer">
                        <AiFillTwitterCircle className="md:scale-100 scale-75" fill="#00acee" size={55} />
                    </a>
                    {" "}
                    <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(websiteLink)}`} target="_blank" rel="noopener noreferrer">
                        <BsFacebook className="md:scale-100 scale-75" fill="#1877F2" size={50} />
                    </a>
                    {" "}
                    <a href={`https://wa.me/?text=${encodeURIComponent(whatsappMessage)}`} target="_blank" rel="noopener noreferrer">
                        <IoLogoWhatsapp className="md:scale-100 scale-75" fill="#25d366" size={50} />
                    </a>


                    <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(websiteLink)}&title=&summary=&source=`} target="_blank" rel="noopener noreferrer">
                        <AiFillLinkedin className="md:scale-100 scale-75" fill="#0072b1" size={50} />
                    </a>
                </div>

                {/* <div className="w-full md:w-[60%] flex flex-col gap-5 py-10"> */}
                
            </div>
        </div>

        <div className="w-full md:w-[60%] flex flex-col gap-1">
                    <h2 className="text-base font-medium text-slate-700">
                        <strong>Share your link</strong>
                    </h2>

                    <div className="relative w-full">
                        <input
                            id="referralLink"
                            type="text"
                            value={link}
                            onChange={() => { }}
                            className="rounded-xl border border-slate-300 text-base p-2.5 w-full text-slate-500"
                            placeholder="ezage.in/refer/mmr"
                            disabled
                        />
                        <button
                            className="absolute top-[25%] right-5 px-2 rounded-[6px] bg-slate-100 text-slate-700"
                            onClick={copyText}
                        >
                            {copied ? "Copied" : "Copy"}
                        </button>
                    </div>
                </div>
        </>
    )
}

export default InviteCard