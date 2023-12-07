"use client";
import React from "react";
interface MenuItemProps {
  onClick: () => void;
  label: string;
  rounded?: string;
}
const MenuItem: React.FC<MenuItemProps> = ({ onClick, label, rounded }) => {
  return (
    <div
      onClick={onClick}
      className={`px-4 py-3 w-full hover:bg-neutral-200 transition font-normal ${rounded}`}
    >
      {label}
    </div>
  );
};

export default MenuItem;
