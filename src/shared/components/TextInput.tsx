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
    <div>
      <label htmlFor={name}>{label}</label>
      <input
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
