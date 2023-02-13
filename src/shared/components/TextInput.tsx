import { HTMLInputTypeAttribute } from "react";

interface IProps {
  name: string;
  type: HTMLInputTypeAttribute;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
}

function TextInput({ name, type, value, onChange, label }: IProps) {
  return (
    <div className="flex flex-col">
      <label htmlFor={name}>{label}</label>
      <input
        className="bg-primary-gray p-3 rounded-sm"
        id={name}
        name={name}
        type={type}
        onChange={onChange}
        value={value}
      />
    </div>
  );
}

export default TextInput;
