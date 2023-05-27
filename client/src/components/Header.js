import React from "react";
import { cartImg, logoDark } from "../assets/index.js";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";

const Header = () => {
  const productData = useSelector((state) => state.chanel.productData);
  const userInfo = useSelector((state) => state.chanel.userInfo);
  console.log(userInfo);
  return (
    <div className="w-full h-20 bg-white border-b-[1px] border-b-gray-800 font-titleFont sticky top-0 z-50">
      <div
        className="max-w-screen-xl h-full mx-auto flex items-center justify-between"
        style={{ padding: "0 2.8rem" }}
      >
        <Link to="/">
          <div>
            <img className="w-24" src={logoDark} alt="logoDark" />
          </div>
        </Link>

        <div className="flex items-center gap-8">
          <ul className="flex items-center gap-8">
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Home
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Pages
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Shop
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Element
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Blog
            </li>
          </ul>
          <Link to="/cart">
            <div className="relative">
              <img className="w-10" src={cartImg} alt="cartImg" />
              <span className="absolute w-6 top-3 left-2 text-sm flex items-center justify-center font-semibold">
                {productData.length}
              </span>
            </div>
          </Link>

          <Link to="/login">
            <img
              className="w-8 h-8 rounded-full"
              src={
                userInfo
                  ? userInfo.image
                  : "https://th.bing.com/th/id/R.c4325f82ed058e22a2d7c78529b8169e?rik=VkzUvR4GzOUzxg&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_136006.png&ehk=6cIFKsoPCue9nG3umJhJhUemGHCuuVGIoCBzux4pcZw%3d&risl=&pid=ImgRaw&r=0"
              }
              alt="userLogo"
            />{" "}
          </Link>
          {userInfo && (
            <p className="text-base font-titleFont font-semibold underline underline-offset-2">
              {userInfo.name}
            </p>
          )}
        </div>
      </div>
      <ToastContainer
        position="top-left"
        autoClose={200}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default Header;
