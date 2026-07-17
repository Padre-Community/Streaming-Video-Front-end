export function Input({ text }: { text: string }) {
  return (
    
    <input
      className=" max-sm p-3 m-2 gap-x-2 rounded-xl bg-white hover:text-black hover:bg-gray-50  outline-1 outline-indigo-500 text-xl flex-col "
      type="text"
      placeholder={text}
    />
  );
}

export default Input;
