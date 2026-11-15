type ButtonProps = {
  text: string;
  type?: "button" | "submit" | "reset";
  className: string;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export default function Button({
  text,
  type = "button",
  className,
  onClick,
  disabled,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`h-12 bg-brand text-center text-text-on-brand font-body font-semibold text-sm rounded-md cursor-pointer ${className}`}
      disabled={disabled}
    >
      {text}
    </button>
  );
}
