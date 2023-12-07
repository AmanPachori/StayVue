"use client";
import React from "react";
import PresentationButton from "../../atoms/InfoButton/PresentationButton";
import { motion } from "framer-motion";
import Image from "next/image";
const HomePage = () => {
  return (
    <div className="grid grid-cols-2 h-full  ">
      <div className="flex flex-col items-center justify-center col-span-2 sm:col-span-1 px-2  ">
        <PresentationButton />
        <motion.p
          initial={{ y: "10px", opacity: 0.75 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 3.5, type: "spring" }}
          className="font-bold text-[24px]  lg:text-[48px]  m-2 leading-6 lg:leading-10 text-start w-full"
        >
          {" "}
          Discover Most Suitable Property
        </motion.p>
        <motion.p
          initial={{ y: "10px", opacity: 0.75 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 3.5, type: "spring" }}
          className="font-lighter text-[14px] lg:text-[20px] leading-4 mt-1 lg:leading-6"
        >
          {" "}
          Find a variety of properties that suit you very easilty Forget all
          difficulties in finding a residence for you
        </motion.p>
      </div>
      <div className="flex flex-col items-center justify-center col-span-2 sm:col-span-1 px-5 sm:p-5   ">
        <motion.div
          initial={{ x: "30px" }}
          animate={{ x: "0px" }}
          transition={{ duration: 3.5, type: "spring" }}
        >
          <Image
            src={"https://real-estate-web.pages.dev/r2.png"}
            width={380}
            height={500}
            alt={""}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default HomePage;
