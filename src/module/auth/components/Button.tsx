type ButtonProps = {
  text: string;
  type?: "button" | "submit" | "reset";
};

export default function Button({ text, type = "button" }: ButtonProps) {
  return (
    <button
      type={type}
      className="h-[48px] bg-brand text-center text-text-on-brand font-body font-semibold text-sm rounded-md px-[16px]"
    >
      {text}
    </button>
  );
}
