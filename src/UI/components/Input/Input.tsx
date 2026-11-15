import type { InputHTMLAttributes, ReactNode } from "react";
interface InputProp extends InputHTMLAttributes<HTMLInputElement> {
  labelText?: string;
  labelIcon?: ReactNode;
}

export const Input = ({
  labelText,
  labelIcon,
  id,
  className,
  ...rest
}: InputProp) => {
  return (
    <div className="flex flex-col gap-1 w-full">
      {labelText && (
        <label htmlFor={id} className="flex items-center gap-2 text-zinc-300">
          {labelIcon} {labelText}
        </label>
      )}

      <input
        id={id}
        className={`bg-surface p-2 w-ful rounded-[0.4rem] ${className || ""}`}
        {...rest}
      />
    </div>
  );
};
