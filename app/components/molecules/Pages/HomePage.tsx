"use client";
import React from "react";
import PresentationButton from "../../atoms/InfoButton/PresentationButton";
import { motion } from "framer-motion";
import Image from "next/image";
import svg from "../../../assets/Group1.svg";
import PurpleButton from "../../atoms/Buttons/purpleBuuton";
const HomePage = () => {
  return (
    <div className="grid grid-cols-3 h-full  ">
      <div className="flex flex-col items-center justify-center col-span-3 sm:col-span-1 px-2  ">
        <PresentationButton />
        <div className="text-boldest leading-none lg:text-[60px] md:text-[36px] text-[24px] text-black">
          Travel <span className="text-[#F85E9F]">top destination</span> of the
          world
        </div>
        <div className="my-5 text-gray-500 ">
          We always make our customer happy by providing as many choices as
          possible
        </div>

        <div className=" w-full flex justify-start ">
          <PurpleButton
            label="Get Started"
            onClick={() => {
              console.log("hello");
            }}
          />
        </div>
      </div>
      <div className="flex-col items-center justify-center hidden sm:flex col-span-0 sm:col-span-2 px-5 sm:p-5   ">
        <motion.div
          initial={{ x: "30px" }}
          animate={{ x: "0px" }}
          transition={{ duration: 3.5, type: "spring" }}
        >
          <Image src={svg} width={600} height={550} alt={""} />
        </motion.div>
      </div>
    </div>
  );
};

export default HomePage;
