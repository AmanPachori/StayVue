"use client";
import React from "react";
import { FiChevronDown } from "react-icons/fi";
import { MdOutlineSecurity } from "react-icons/md";

interface acc {
  Selected: boolean;
  setSelected: () => void;
  className: string;
  title: string;
  children: any;
}
const Accordion: React.FC<acc> = ({
  Selected,
  setSelected,
  title,
  className,
  children,
}) => (
  <div role="presentation" className={className} onClick={setSelected}>
    <div className=" accordion-section border-primary shadow-xl shadow-fourth p-5 m-3 rounded">
      <div className="flex justify-between items-center">
        <div
          className={`transform bg-fourth text-secondary p-2 rounded-md transition ease duration-500 `}
        >
          <MdOutlineSecurity />
        </div>
        <span className="cursor-pointer font-semibold text-primary text-sm md:text-lg px-2 ">
          {title}
        </span>
        <div
          className={`transform bg-fourth text-secondary p-2 rounded-md transition ease duration-500 ${
            Selected && "rotate-180"
          }`}
        >
          <FiChevronDown />
        </div>
      </div>
      <div
        className={`${
          Selected ? "max-h-screen mt-4" : "h-0"
        } bg-white overflow-hidden ease-in-out duration-500 text-neutral-600 px-2 text-sm`}
      >
        {children}
      </div>
    </div>
  </div>
);

export default Accordion;
