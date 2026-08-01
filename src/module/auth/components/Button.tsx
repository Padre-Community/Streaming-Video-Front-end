export default function Button({ text }: { text: string }) {
  return (
    <button className="bg-red-600 text-center p-8 border text-white border-2xl rounded-2xl px-4">
      {text}
    </button>
  );
}
