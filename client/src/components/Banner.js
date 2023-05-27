import React, { useState } from "react";
import { HiArrowRight, HiArrowLeft } from "react-icons/hi";

const Banner = () => {
  const data = [
    "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=772&q=80",
    "https://images.pexels.com/photos/3119180/pexels-photo-3119180.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/336372/pexels-photo-336372.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
  ];
  const [curSlide, setCurSlide] = useState(0);
  const prevSlide = () => {
    setCurSlide(curSlide === 0 ? 3 : (prev) => prev - 1);
  };
  const nextSlide = () => {
    setCurSlide(curSlide === 3 ? 0 : (prev) => prev + 1);
  };
  return (
    <div className="w-full h-auto overflow-x-hidden">
      <div className="w-screen relative">
        <div
          className="w-[400vw] h-full flex transition-transform duration-1000"
          style={{ transform: `translateX(-${curSlide * 100}vw)` }}
        >
          <img
            className="w-screen"
            src={data[0]}
            alt="ImgOne"
            loading="priority"
            style={{
              width: "1200px",
              height: "540px",
              objectFit: "fill",
              margin: "auto",
            }}
          />
          <img
            className="w-screen"
            src={data[1]}
            alt="ImgTwo"
            loading="priority"
            style={{
              width: "1200px",
              height: "540px",
              objectFit: "fill",
              margin: "auto",
            }}
          />
          <img
            className="w-screen"
            src={data[2]}
            alt="ImgThree"
            loading="priority"
            style={{
              width: "1200px",
              height: "540px",
              objectFit: "fill",
              margin: "auto",
            }}
          />
          <img
            className="w-screen"
            src={data[3]}
            alt="ImgFour"
            loading="priority"
            style={{
              width: "1200px",
              height: "540px",
              objectFit: "fill",
              margin: "auto",
            }}
          />
        </div>
        <div className="absolute w-fit left-0 right-0 mx-auto flex gap-8 bottom-24">
          <div
            onClick={prevSlide}
            className="w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300"
          >
            <HiArrowLeft />
          </div>
          <div
            onClick={nextSlide}
            className="w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300"
          >
            <HiArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
