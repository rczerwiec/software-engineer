import classNames from "classnames";

interface IProps {
  red?: boolean;
  green?: boolean;
  gray?: boolean;
  type: "submit" | "button" | "reset";
  textColor: "text-white" | "text-black" | "text-primary-gray";
  noStyle: boolean;
  rounded: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}

function Button({
  red,
  green,
  gray,
  type,
  textColor,
  noStyle,
  rounded,
  onClick,
  children,
}: IProps) {
  let classes;
  if (!noStyle) {
    classes = classNames(`p-4 px-8 font-bold ${textColor} `, {
      "bg-red-400 hover:bg-red-700": red,
      "bg-green-400 hover:bg-green-600": green,
      "bg-gray-primary hover:bg-gray-secondary": gray,
      rounded: rounded,
    });
  }

  return (
    <button className={classes} type={type} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
