import React from "react";
import { logoLight, paymentLogo, githubLogo } from "../assets";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaHome,
} from "react-icons/fa";
import { BsPaypal, BsPersonFill } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";

const Footer = () => {
  return (
    <div className="bg-black text-[#949494] py-20 font-titleFont">
      <div className="max-w-screen-lg mx-auto grid grid-cols-4">
        <div className="flex flex-col gap-7">
          <img className="w-28" src={logoLight} alt="logoLight" />
          <p className="text-white text-sm tracking-wide">©️ channel.com</p>
          <img className="w-48" src={paymentLogo} alt="paymentLogo" />
          <div className="flex gap-5 text-lg text-gray-400">
            <img
              className="w-7 rounded-full duration-300 cursor-pointer"
              style={{ transform: "translateY(-12%)" }}
              src={githubLogo}
              alt="githubLogo"
            />
            <FaYoutube className=" hover:text-white duration-300 cursor-pointer" />
            <FaFacebookF className=" hover:text-white duration-300 cursor-pointer" />
            <FaTwitter className=" hover:text-white duration-300 cursor-pointer" />
            <FaInstagram className=" hover:text-white duration-300 cursor-pointer" />
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-white mt-4 mb-4">
            locate us
          </h2>
          <div className="text-base flex flex-col gap-3">
            <p>MBD, New Delhi, India</p>
            <p>Mobile: +9198884802</p>
            <p>Phone: 00968 24797401</p>
            <p>e-mail: channel@gmail.com</p>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-white mt-4 mb-4">
            profile
          </h2>
          <div className="text-base flex flex-col gap-3">
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span>
                <BsPersonFill />
              </span>{" "}
              my account
            </p>
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span className="text-lg">
                <BsPaypal />
              </span>{" "}
              checkout
            </p>
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span className="text-lg">
                <FaHome />
              </span>{" "}
              order tracking
            </p>
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span className="text-lg">
                <MdLocationOn />
              </span>{" "}
              help & support
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <input type="text" className="bg-transparent border px-4 py-2 text-sm" placeholder="e-mail" />
          <button className="text-sm border text-white border-t-0 hover:bg-gray-900 active:bg-white active:text-black">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
