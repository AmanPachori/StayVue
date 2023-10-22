"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const appearance = "default";
const appearanceOptions = {
  default: {
    linksSelectedAppearance: "text-neutral-900 font-medium",
    linksUnselectedAppearance:
      "text-neutral-500 hover:text-neutral-900 hover:font-medium",
  },
};

const Links = () => {
  const pathname = usePathname();

  return (
    <div className="w-2/5 pl-[17px] xl:pl-[40px] my-auto ">
      <div className="flex items-center justify-between flex-1">
        <Link
          className={`pr-2 xl:pr-4 text-base cursor-pointer transition duration-300 w-full whitespace-nowrap flex items-center ${
            pathname === "/"
              ? appearanceOptions[`${appearance}`].linksSelectedAppearance
              : appearanceOptions[`${appearance}`].linksUnselectedAppearance
          } `}
          href={"#"}
        >
          Home
        </Link>
        <Link
          className={`pr-2 xl:pr-4 text-base cursor-pointer transition duration-300 w-full whitespace-nowrap flex items-center ${
            pathname === "/random"
              ? appearanceOptions[`${appearance}`].linksSelectedAppearance
              : appearanceOptions[`${appearance}`].linksUnselectedAppearance
          } `}
          href={"#"}
        >
          Random
        </Link>
        <Link
          className={`pr-2 xl:pr-4 text-base cursor-pointer transition duration-300 w-full whitespace-nowrap flex items-center ${
            pathname === "/explore"
              ? appearanceOptions[`${appearance}`].linksSelectedAppearance
              : appearanceOptions[`${appearance}`].linksUnselectedAppearance
          } `}
          href={"#"}
        >
          Explore
        </Link>
      </div>
    </div>
  );
};

export default Links;
