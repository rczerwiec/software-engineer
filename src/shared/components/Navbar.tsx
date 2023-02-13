import { NavLink } from "react-router-dom";
import { FcMenu } from "react-icons/fc";
import { MdOutlineArrowBackIos } from "react-icons/md";
import classNames from "classnames";

interface IProps {
    isOpen: boolean;
    toggleNavbar: () => void;
}

const navigation = [
  {
    name: "Users",
    to: "/users",
  },
  {
    name: "My Photos",
    to: "/photos",
  },
  {
    name: "My Posts",
    to: "/posts",
  },
];

function Navbar({isOpen,toggleNavbar}:IProps) {
  
  const container = classNames("fixed z-10 bg-primary-white w-14", {"rounded-r-md ":!isOpen, "lg:w-1/4 lg:border-r-2 w-full h-full": isOpen});

  const renderedLinks = navigation.map((_) => {
    return (
      <NavLink key={_.name} to={`${_.to}`} className={({ isActive }) =>
      isActive ? "text-2xl text-center m-6 font-bold text-center" : "text-2xl text-center m-6 text-center"
            }>
        {_.name}
      </NavLink>

    );
  });

  return (
    <div className={container}>
      <div
        className="flex items-center justify-center w-14 h-14"
        onClick={() => {
            toggleNavbar();
        }}
      >
        {isOpen ? (
          <MdOutlineArrowBackIos className="w-6 h-6" />
        ) : (
          <FcMenu className="w-6 h-6" />
        )}
      </div>
      {isOpen && (
        <div className="flex flex-col justify-center">{renderedLinks}</div>
      )}
    </div>
  );
}
//<div>{renderedLinks}</div>
export default Navbar;
