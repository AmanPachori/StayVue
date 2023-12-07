/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import PresentationButton from "../../atoms/InfoButton/PresentationButton";
import { motion } from "framer-motion";
import Image from "next/image";
import Quess from "../../atoms/accordion/Questions";
const FaqPage = () => {
  return (
    <div className="grid grid-cols-2 h-full  ">
      <div className="flex flex-col items-center justify-center col-span-2 sm:col-span-1 px-5 sm:p-5   ">
        <div className="relative shadow-2xl shadow-fourth">
          <img
            src="https://real-estate-web.pages.dev/r2.png"
            className="h-auto max-w-full rounded-[32px] shadow-lg  shadow-primary transition hover:scale-105"
          />
        </div>
      </div>
      <div className="flex flex-col items-start justify-center col-span-2 sm:col-span-1 w-full ">
        <Quess />
      </div>
    </div>
  );
};

export default FaqPage;
