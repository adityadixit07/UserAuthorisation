import React from "react";
import { BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import { FaRegCopyright } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="-mb-1 md:px-10 mt-2 md:mt-0 bg-black text-white flex flex-col md:flex-row justify-between items-center">
      <div className="md:w-1/2 flex flex-col justify-center pb-8 md:pb-16">
        <div className="flex justify-center gap-2">
          <img
            src="/assets/ez-logo/Logo.png"
            className="w-[20rem] md:h-[20rem] object-contain md:object-cover"
            alt="Logo"
          />
          <div className="w-[10px] h-[10px] mt-60 rounded-full bg-white" />
        </div>
        <div className="flex flex-col md:flex-row md:gap-4 items-start justify-center -mt-8">
          <div className="flex items-center text-center gap-1">
            <FaRegCopyright color="white" size={18} />
            <span className="text-[18px]">{new Date().getFullYear()}</span>
          </div>
          <div>
            <span className="text-[18px]">Ezage Technologies Pvt Ltd</span><br />
            <span className="text-[18px]">ISO 9001:2015</span>
          </div>
        </div>
      </div>
      <div className="md:w-1/2 flex flex-col md:items-center gap-10 pb-16 md:pb-0">
        <div className="flex flex-col gap-5 text-[18px] items-center md:items-start">
          <Link to="/" className="hover:text-green-500">About</Link>
          <Link to="/" className="hover:text-green-500">Contact Us</Link>
          <Link to="/" className="hover:text-green-500">Terms of Services</Link>
          <Link to="/" className="hover:text-green-500">Privacy</Link>
        </div>
        <div className="flex gap-8">
          <a href="https://www.linkedin.com/company/ez-the-one-app" target="_blank">
            <BsLinkedin size={30} />
          </a>
          <Link>
            <BsTwitter size={30} />
          </Link>
          <Link>
            <BsInstagram size={30} />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
