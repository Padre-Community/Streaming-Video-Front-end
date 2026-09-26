import type { ChangeEventHandler, ReactNode } from "react";

type InputProps = {
  id: string;
  placeholder?: string;
  type?: "text" | "email" | "password" | "number";
  required?: boolean;
  disabled?: boolean;
  icon?: ReactNode;
  autoFocus?: boolean;
  value?: string | number | readonly string[];
  onChange?: ChangeEventHandler<HTMLInputElement>;
};
export function Input({
  id,
  placeholder,
  type = "text",
  required = false,
  disabled = false,
  icon,
  autoFocus,
  onChange,
  value,
}: InputProps) {
  return (
    <div className=" flex items-center px-[16px] gap-[10px] text-text-secondary">
      {icon}
      <input
        id={id}
        type={type}
        value={value}
        autoFocus={autoFocus}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        className="w-full h-[45px] text-text-secondary font-body font-medium text-sm focus:outline-none cursor-pointer"
      />
    </div>
  );
}
export default Input;
