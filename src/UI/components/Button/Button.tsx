import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "third";
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
    "px-4 py-2 font-body font-semibold flex items-center justify-center gap-2 transition-all";
  const variants = {
    primary: "bg-brand hover:bg-brand-hover text-text-on-brand cursor-pointer",
    secondary:
      "bg-surface hover:opacity-80 border border-border backdrop-blur cursor-pointer",
    third: "bg-background hover:opacity-80 cursor-pointer",
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
