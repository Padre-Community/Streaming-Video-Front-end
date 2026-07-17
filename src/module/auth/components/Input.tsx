export function Input({ text }: { text: string }) {
  return (
    <input className="text-gray-400 text-5xl" type="text" placeholder={text} />
  );
}

export default Input;
