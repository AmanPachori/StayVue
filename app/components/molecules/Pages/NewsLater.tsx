import React from "react";
import Image from "next/image";
import svg from "../../../assets/Graphic.svg";

const NewsLater = () => {
  return (
    <div className="h-[60vh] bg-[#face4924] relative rounded-3xl flex justify-center items-center flex-col p-5">
      <div className="absolute -top-12 -left-12">
        <Image src={svg} width={150} height={400} alt={""} />
      </div>
      <div className="w-3/5">
        <p className="text-center tracking-widest font-normal text-primary text-3xl uppercase mb-5 ">
          subscribe to our newsletter
        </p>
        <p className="text-center text-black text-[45px] font-bold px-5">
          Prepare yourself & let’s explore the beauty of the world
        </p>
        <div className="my-5 grid grid-cols-5 gap-5">
          <input
            type="text"
            className="border-none w-full font-bold  rounded-xl text-black text-base p-3 col-span-4 mr-1 h-[7vh]"
            placeholder="YOUR EMAIL"
          />
          <button className="w-full p-3 bg-[#5D50C6] text-white rounded-xl text-base font-bold col-span-1">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsLater;
