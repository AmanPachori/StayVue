"use client";

import React from "react";
import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";
import { motion } from "framer-motion";

const PresentationButton = () => {
  const transition = { type: "spring", duration: 2.5 };
  return (
    <div className="w-full">
      <div className="bg-black rounded-3xl  inline-flex items-center py-1 pl-1 pr-2 cursor-pointer focus:ring-1 focus:outline-none focus:ring-indigo-200 focus:scale-95 active:scale-95">
        <motion.div
          initial={{ x: "173px" }}
          animate={{ x: "0px" }}
          transition={transition}
          className="rounded-full bg-white px-3 mr-2 "
        >
          <Image
            alt="thunder neon"
            src="https://www.propreturns.com/assets/img/common/svgs/thunder-success.svg"
            width={24}
            height={24}
          />
        </motion.div>
        <div className="px-1">
          <motion.p
            initial={{ y: "10px", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 3.5, type: "spring" }}
            className="text-md  leading-3 text-white font-semibold"
          >
            Experience Home
          </motion.p>
        </div>

        <div className="flex-none mt-0.5 mx-1.5">
          <BsArrowRight className="text-white font-semibold" />
        </div>
      </div>
    </div>
  );
};

export default PresentationButton;
