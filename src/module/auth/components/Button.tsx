type ButtonProps = {
  text: string;
  type?: "button" | "submit" | "reset";
  className: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export default function Button({
  text,
  type = "button",
  className,
  onClick,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`h-[48px] bg-brand text-center text-text-on-brand font-body font-semibold text-sm rounded-md cursor-pointer ${className}`}
    >
      {text}
    </button>
  );
}
