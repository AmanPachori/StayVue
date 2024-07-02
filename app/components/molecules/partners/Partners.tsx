"use client";
import React from "react";
import air from "../../../assets/air.svg";
import book from "../../../assets/book.svg";
import ex from "../../../assets/ex.svg";
import ritz from "../../../assets/ritz.svg";
import trap from "../../../assets/trap.svg";
import Image from "next/image";

const Partners = () => {
  return (
    <div className="flex justify-between items-center">
      <Image src={trap} width={160} height={160} alt={""} />
      <Image src={ex} width={160} height={160} alt={""} />
      <Image src={air} width={160} height={160} alt={""} />
      <Image src={book} width={160} height={160} alt={""} />
      <Image src={ritz} width={160} height={160} alt={""} />
    </div>
  );
};

export default Partners;
