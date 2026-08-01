import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  onClick?: () => void;
}
export const UIbutton = ({
  children,
  variant = "primary",
  className = "",
  onClick,
}: ButtonProps) => {
  const base =
    "px-4 py-2 font-semibold flex items-center justify-center gap-2 transition-all";
  const variants = {
    primary: "bg-red-600 hover:bg-red-700 text-white",
    secondary: "bg-gray-500/40 hover:bg-gray-500/30 text-white backdrop-blur",
  };
  return (
    <button
      onClick={onClick}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};
