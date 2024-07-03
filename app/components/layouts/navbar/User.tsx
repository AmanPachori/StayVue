"use client";
import React, { useCallback, useState } from "react";
import { FaRegUser } from "react-icons/fa";
import MenuItem from "./MenuItem";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import useLoginModal from "@/app/hooks/useLoginModal";
import { User } from "@prisma/client";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import useRentModal from "@/app/hooks/useRentModal";
import PurpleButton from "../../atoms/Buttons/purpleBuuton";

interface UsersProps {
  currentUser?: User | null;
}

const Users: React.FC<UsersProps> = ({ currentUser }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);
  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();
  const rentModal = useRentModal();

  const router = useRouter();

  const onRent = useCallback(() => {
    if (!currentUser) {
      return loginModal.onOpen();
    }
    rentModal.onOpen();
  }, [currentUser, loginModal, rentModal]);

  return (
    <div className="w-3/4 ">
      {currentUser ? (
        <div className="flex justify-between items-center">
          <div className="flex justify-between items-center  w-3/4  ">
            <MenuItem
              label="Home"
              bold="bold"
              onClick={() => router.push("/")}
            />
            <MenuItem
              label="Discover"
              bold="normal"
              onClick={() => router.push("/")}
            />
            <MenuItem label="Rent" onClick={() => onRent()} />
            <MenuItem
              label="Favourites"
              onClick={() => router.push("/favorites")}
            />
            <MenuItem
              label="Reservations"
              onClick={() => router.push("/reservations")}
            />
            <MenuItem label="My Trips" onClick={() => router.push("/trips")} />
          </div>
          <div className="flex justify-around items-center ">
            <div className="font-bold mr-5 border px-5 py-3 rounded-3xl ">
              {currentUser?.name}
            </div>
            <PurpleButton label="Logout" onClick={() => signOut()} />
          </div>
        </div>
      ) : (
        <div className="flex justify-between items-center">
          <div className="flex justify-between items-center  w-1/2">
            <MenuItem
              label="Home"
              bold="bold"
              onClick={() => router.push("/")}
            />
            <MenuItem
              label="Discover"
              bold="normal"
              onClick={() => router.push("/")}
            />
            <MenuItem
              label="Contact"
              bold="normal"
              onClick={() => router.push("/")}
            />
          </div>
          <div className="flex justify-around items-center ">
            <div
              onClick={() => loginModal.onOpen()}
              className="font-bold mr-5 "
            >
              Login
            </div>
            <PurpleButton
              label="Register"
              onClick={() => registerModal.onOpen()}
            />
          </div>
        </div>
      )}
    </div>
  );

  //   return (
  //     <div className="relative">
  //       <div className="flex flex-row items-center gap-3">
  //         <div
  //           onClick={() => {
  //             toggleOpen();
  //           }}
  //           className="block text-sm font-semibold transition cursor-pointer"
  //         >
  //           <div className="h-auto py-2.5 px-4 border border-neutral-300 rounded-[10px] transition-all duration-300 m-0 hover:bg-gray-50">
  //             {currentUser ? (
  //               <>
  //                 <h6 className="font-bold text-gray-800">{currentUser.name}</h6>
  //               </>
  //             ) : (
  //               <>
  //                 <FaRegUser className="w-4 h-4 text-neutral-400" />
  //               </>
  //             )}
  //           </div>
  //         </div>
  //       </div>
  //       {isOpen && (
  //         <div
  //           className="absolute
  //         rounded-[10px]
  //         shadow-md
  //         w-[240px]
  //         bg-white
  //         overflow-hidden
  //         right-0
  //         top-12
  //         text-sm"
  //         >
  //           <div
  //             className="flex flex-col cursor-pointer w-full         border-neutral-300
  // "
  //           >
  //             {currentUser ? (
  //
  //             ) : (
  //               <>
  //                 <MenuItem label="Login" onClick={loginModal.onOpen} />
  //                 <MenuItem label="Sign up" onClick={registerModal.onOpen} />
  //               </>
  //             )}
  //           </div>
  //         </div>
  //       )}
  //     </div>
  //   );
};

export default Users;
