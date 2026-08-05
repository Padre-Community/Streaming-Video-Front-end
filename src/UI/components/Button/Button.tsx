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
    primary: "bg-brand-primary hover:opacity-70 text-white",
    secondary:
      "bg-surface hover:opacity-80 border border-border-main text-white backdrop-blur",
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
