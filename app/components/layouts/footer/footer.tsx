import React from "react";
import Container from "../../Container";
import Logo from "../navbar/Logo";

const footer = () => {
  return (
    <div className=" h-[8vh] py-2  w-full  flex justify-center border-t-2 ">
      <Container>
        <div
          className="
    flex 
    flex-row 
    items-center 
    justify-between
    gap-3
    md:gap-0
  "
        >
          <div className="w-full  flex flex-col items-center justify-center">
            <Logo color="primary" />
            <p className="text-sm fond-semibold italic">All Rights Reserved</p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default footer;
