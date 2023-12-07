"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

interface IlogoProps {
  color?: string | "primary";
}
const Logo: React.FC<IlogoProps> = ({ color }) => {
  const router = useRouter();
  return (
    <p
      className={`font-bold text-2xl italic logo cursor-pointer text-${color}`}
      onClick={() => router.push("/")}
    >
      StayVue
    </p>
  );
};

export default Logo;
