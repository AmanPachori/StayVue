import React from "react";
import Container from "../../Container";
import Logo from "./Logo";
import Links from "./Links";
import User from "./User";

const Navbar = () => {
  return (
    <div className="fixed w-full bg-white z-10">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex justify-between">
            <Logo />
            <Links />
            <User />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
