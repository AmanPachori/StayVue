"use client";

import Slider from "react-slick";
import React, { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const SlickArrowLeft = ({ ...props }) => (
  <div
    {...props}
    className="bg-gray-100 border border-white shadow-xl absolute z-60 top-1/2 transform -translate-y-1/2 -left-4 sm:-left-6 rounded-full p-0 w-6 h-6 flex items-center justify-center cursor-pointer"
  >
    <FaAngleLeft className="text-neutral-500" />
  </div>
);
const SlickArrowRight = ({ ...props }) => (
  <div
    {...props}
    className="bg-gray-100 shadow-xl absolute z-60 top-1/2 transform -translate-y-1/2 -right-4 sm:-right-6 rounded-full p-0 w-6 h-6 flex items-center justify-center cursor-pointer"
  >
    <FaAngleRight className="text-neutral-500" />
  </div>
);

const Coursel = ({
  children,
  showArrows = false,
  slidesToShow = 4,
  autoPlayDelay = 3500,
  autoPlay = false,
  slideSpeed = 600,
  infinite = true,
  mobilecenterMode = true,
  LeftArrow = () => <div />,
  RightArrow = () => <div />,
  CustomArrows = false,
  variableWidth = false,
  showCustomPaging = null,
  fade = false,
  showDots = false,
  centerMode = false,
  centerPadding = "20px",
  vertical = false,
  dotsWidth = "w-10 md:w-20",
  dotsClass = "",
}) => {
  const SliderSettings = {
    focusOnSelect: true,
    speed: slideSpeed,
    autoplay: autoPlay,
    autoplaySpeed: autoPlayDelay,
    pauseOnHover: true,
    prevArrow: CustomArrows ? <LeftArrow /> : <SlickArrowLeft />,
    nextArrow: CustomArrows ? <RightArrow /> : <SlickArrowRight />,
    slidesToShow,
    infinite,
    arrows: showArrows || CustomArrows,
    variableWidth,
    customPaging: showCustomPaging || (() => <div className={dotsWidth} />),
    // eslint-disable-next-line react/no-unstable-nested-components
    appendDots: (dots) => (
      <div>
        <ul>{dots}</ul>
      </div>
    ),
    dotsClass,
    fade,
    dots: showDots,
    centerMode,
    centerPadding,
    vertical,
    responsive: [
      {
        breakpoint: 608,
        settings: {
          slidesToShow: 1,
          arrows: CustomArrows,
          centerPadding: centerPadding || "15px",
          centerMode: mobilecenterMode,
          autoplay: autoPlay,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          arrows: CustomArrows,
          centerPadding: centerPadding || "15px",
          centerMode: mobilecenterMode,
          autoplay: autoPlay,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          arrows: CustomArrows,
          centerPadding: centerPadding || "15px",
          centerMode: mobilecenterMode,
          autoplay: autoPlay,
        },
      },
    ],
  };

  const sliderRef = useRef();

  return (
    <div className="w-full snappy-slider h-full relative">
      <Slider
        ref={sliderRef}
        {...SliderSettings}
        className="h-full flex justify-center"
      >
        {children}
      </Slider>
    </div>
  );
};

export default Coursel;
