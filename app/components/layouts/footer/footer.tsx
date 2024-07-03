import React from "react";
import Container from "../../Container";
import Logo from "../navbar/Logo";

const footer = () => {
  return (
    <div className=" py-5  w-full  flex justify-center  -t-2 ">
      <Container>
        <div className="grid grid-cols-4 gap-4 justify-between items-center">
          <div className="h-full flex flex-col justify-start items-start  ">
            <div className="mb-2 h-[3vh]">
              <Logo color="primary" />
            </div>
            <div className="text-gray-500 text-base">
              {" "}
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Quibusdam dolores cum corporis vero recusandae nobi.
            </div>
          </div>
          <div className="h-full flex flex-col justify-start items-start  ">
            <div className="mb-2 heading font-bold  text-lg h-[3vh]">
              Company
            </div>
            <div className="flex flex-col items-start justify-center ">
              <p className="text-gray-500 py-1">Carrer</p>
              <p className="text-gray-500 py-1">About</p>
              <p className="text-gray-500 py-1">Explore</p>
            </div>
          </div>
          <div className="h-full flex flex-col justify-start items-start  ">
            <div className="mb-2 heading font-bold  text-lg h-[3vh]">
              Contact
            </div>
            <div className="flex flex-col items-start justify-center ">
              <p className="text-gray-500 py-1">Why Us?</p>
              <p className="text-gray-500 py-1">FAQ</p>
              <p className="text-gray-500 py-1">Blog</p>
              <p className="text-gray-500 py-1">Partner with us</p>
            </div>
          </div>
          <div className="h-full flex flex-col justify-start items-start  ">
            <div className="mb-2 heading font-bold  text-lg h-[3vh]">
              Meet Us
            </div>
            <div className="flex flex-col items-start justify-center ">
              <p className="text-gray-500 py-1">+91 9000 00009</p>
              <p className="text-gray-500 py-1">info@stayvue.com</p>
              <p className="text-gray-500 py-1">202 R Street New York</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default footer;
