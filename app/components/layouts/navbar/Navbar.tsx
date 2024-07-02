import React from "react";
import Container from "../../Container";
import Logo from "./Logo";
import Users from "./User";

import { User } from "@prisma/client";
import Link from "next/link";
import Categories from "./Categories";

interface NavbarProps {
  currentUser?: User | null;
}

const Navbar: React.FC<NavbarProps> = ({ currentUser }) => {
  return (
    <div className=" absolute w-full bg-transparent z-10 ">
      <div
        className="
          py-4 
          
        "
      >
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
            <Logo />
            <Users currentUser={currentUser} />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
