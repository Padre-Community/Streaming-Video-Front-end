interface InputProp {
  type: string;
  placeholder: string;
}

export function Input({ type, placeholder }: InputProp) {
  return <input type={type} placeholder={placeholder} />;
}
