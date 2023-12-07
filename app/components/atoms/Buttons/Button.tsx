"use client";

import { IconType } from "react-icons";

interface ButtonProps {
  label: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  outline?: boolean;
  small?: boolean;
  icon?: IconType;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled,
  outline,
  small,
  icon: Icon,
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`
        relative
        disabled:opacity-70
        disabled:cursor-not-allowed
        rounded-lg
        hover:scale-105
        transition
        w-full
        ${outline ? "bg-white" : "bg-[#EEEEFF]"}
        ${outline ? "hover:bg-white" : "hover:bg-[#4066ff]"}
        ${outline ? "border-black" : "border-[#EEEEFF]"}
        ${outline ? "text-black" : "text-[#4066ff]"}
        ${outline ? "hover:text-black" : "hover:text-[#fff]"}
        ${small ? "text-md" : "text-md"}
        ${small ? "py-1" : "py-3"}
        ${small ? "font-semibold" : "font-semibold"}
        ${small ? "border-[1px]" : "border-2"}
      `}
    >
      {Icon && (
        <Icon
          size={24}
          className="
            absolute
            left-4
            top-3
          "
        />
      )}
      {label}
    </button>
  );
};

export default Button;
