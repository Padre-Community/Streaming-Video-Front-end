type InputProps = {
  id: string;
  placeholder?: string;
  type?: "text" | "email" | "password" | "number";
  required?: boolean;
  disabled?: boolean;
};
export function Input({
  id,
  placeholder,
  type = "text",
  required = false,
  disabled = false,
}: InputProps) {
  return (
    <div className=" flex flex-col gap-2 m-2">
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        className="  p-3 rounded-xl bg-white hover:text-black hover:bg-gray-50  outline-1 outline-red-600 text-xl "
      />
    </div>
  );
}
export default Input;
