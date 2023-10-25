"use client";
import React, { useCallback, useState } from "react";
import { FaRegUser } from "react-icons/fa";
import MenuItem from "./MenuItem";
import useRegisterModal from "@/app/hooks/useRegisterModal";

const User = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);
  const registerModal = useRegisterModal();

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div
          onClick={() => {
            toggleOpen();
          }}
          className="hidden md:block text-sm font-semibold transition cursor-pointer"
        >
          <div className="h-auto py-2.5 px-4 border border-neutral-300 rounded-[10px] transition-all duration-300 m-0 hover:bg-gray-50">
            <FaRegUser className="w-4 h-4 text-neutral-400" />
          </div>
        </div>
      </div>
      {isOpen && (
        <div
          className="absolute 
        rounded-[10px]
        shadow-md
        w-[10vw]
        bg-white 
        overflow-hidden 
        right-0 
        top-12 
        text-sm"
        >
          <div
            className="flex flex-col cursor-pointer w-full         border-neutral-300
"
          >
            <>
              <MenuItem onClick={() => {}} label="Login" />
              <MenuItem onClick={registerModal.onOpen} label="Signup" />
            </>
          </div>
        </div>
      )}
    </div>
  );
};

export default User;
