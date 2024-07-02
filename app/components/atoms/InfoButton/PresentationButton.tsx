"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaGift } from "react-icons/fa";

const PresentationButton = () => {
  const transition = { type: "spring", duration: 2.5 };
  return (
    <div className="w-full">
      <div className="bg-white shadow-sm border-2 rounded-3xl  inline-flex items-center py-1 pl-1 pr-2 cursor-pointer focus:ring-1 focus:outline-none focus:ring-indigo-200 focus:scale-95 active:scale-95 mb-5">
        <div className=" px-5 py-1 text-[#F85E9F] font-semibold flex justify-between items-center">
          <div>Explore the world!</div>
          <div className="ml-3 mb-1">
            <FaGift />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PresentationButton;
