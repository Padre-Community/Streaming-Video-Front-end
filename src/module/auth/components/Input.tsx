export function Input({
  placeholder,
  label,
}: {
  label: string;
  placeholder: string;
}) {
  return (
    <div className=" flex flex-col gap-x-2 p-3 m-2">
      <label className=" flex justify-">{label}</label>
      <input
        className="  p-3 rounded-xl bg-white hover:text-black hover:bg-gray-50  outline-1 outline-red-600 text-xl "
        type="text"
        placeholder={placeholder}
      />
    </div>
  );
}

export default Input;
