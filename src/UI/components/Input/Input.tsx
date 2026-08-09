interface InputProp {
  type: string;
  placeholder: string;
  label: string;
  labelText: string;
  labelIcon?: React.ReactNode;
}

export function Input({
  type,
  placeholder,
  label,
  labelText,
  labelIcon,
}: InputProp) {
  return (
    <>
      <label htmlFor={label} className="flex gap-2 text-zinc-300">
        {labelIcon} {labelText}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="bg-zinc-800 p-2 w-full text-zinc-100 rounded-[0.4rem]"
        id={label}
      />
    </>
  );
}
