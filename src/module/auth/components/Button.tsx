type ButtonProps = {
  text: string;
  type?: "button" | "submit" | "reset";
  className: string;
};

export default function Button({
  text,
  type = "button",
  className,
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`h-[48px] bg-brand text-center text-text-on-brand font-body font-semibold text-sm rounded-md cursor-pointer ${className}`}
    >
      {text}
    </button>
  );
}
