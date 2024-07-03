"use clients";
import React from "react";
import svg from "../../../assets/Rectangle.svg";
import amp from "../../../assets/map.png";
import bck from "../../../assets/background.svg";
import { FaLocationPin } from "react-icons/fa6";
import Image from "next/image";
import { BsCalendarDateFill } from "react-icons/bs";
import { MdBrowserUpdated } from "react-icons/md";

const Key = () => {
  return (
    <div className="grid grid-cols-2 justify-between items-center">
      <div className=" h-full">
        <p className="text-gray-500 font-light text-lg tracking-wider">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature
        </p>
        <div className="mt-10">
          <div className="layer p-5 border rounded-xl  grid grid-cols-8 my-10">
            <div className="col-span-1 bg-secondary rounded-2xl p-3">
              <div className="text-white text-2xl flex justify-center items-center">
                <FaLocationPin />
              </div>
            </div>
            <div className="col-span-7 px-5">
              <div className="font-bold text-lg">Schedule your trip</div>
              <div className="font-normal text-base text-gray-500">
                It has roots in a piece of classical
              </div>
            </div>
          </div>
          <div className="layer p-5 border rounded-xl grid grid-cols-8 my-10">
            <div className="col-span-1 bg-third rounded-2xl p-3">
              <div className="text-white text-2xl flex justify-center items-center">
                <BsCalendarDateFill />
              </div>
            </div>
            <div className="col-span-7 px-5">
              <div className="font-bold text-lg">Get discounted coupons</div>
              <div className="font-normal text-base text-gray-500">
                Lorem Ipsum is not simply random text
              </div>
            </div>
          </div>
          <div className="layer p-5 border rounded-xl grid grid-cols-8 my-10">
            <div className="col-span-1 bg-primary rounded-2xl p-3">
              <div className="text-white text-2xl flex justify-center items-center">
                <MdBrowserUpdated />
              </div>
            </div>
            <div className="col-span-7 px-5">
              <div className="font-bold text-lg">We offer best services</div>
              <div className="font-normal text-base text-gray-500">
                Lorem Ipsum is not simply random text
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center relative">
        <Image src={svg} width={325} height={300} alt={""} />
        <div className="absolute top-20 right-24 bg-white text-black rounded-3xl text-lg font-bold py-2 px-5 flex justify-between">
          <Image src={amp} className="mr-2" width={24} height={12} alt={" "} />
          <span>Paradise on Earth</span>
        </div>
        <div className="absolute top-3 -right-[50px] -z-20">
          <Image src={bck} className="mr-2" width={347} height={12} alt={" "} />
        </div>
      </div>
    </div>
  );
};

export default Key;
