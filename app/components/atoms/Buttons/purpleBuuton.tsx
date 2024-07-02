"use client";

import { IconType } from "react-icons";

interface ButtonProps {
  label: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const PurpleButton: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`
      bg-[#5D50C6] p-3 rounded-3xl text-white mx-1 
      `}
    >
      {label}
    </button>
  );
};

export default PurpleButton;
