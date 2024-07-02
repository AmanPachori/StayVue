"use client";
import React from "react";
interface MenuItemProps {
  onClick: () => void;
  label: string;
  rounded?: string;
  bold?: string;
}
const MenuItem: React.FC<MenuItemProps> = ({
  onClick,
  label,
  rounded,
  bold,
}) => {
  return (
    <div
      onClick={onClick}
      className={`px-4 py-3 w-full  transition cursor-pointer font-${bold} ${rounded}`}
    >
      {label}
    </div>
  );
};

export default MenuItem;
