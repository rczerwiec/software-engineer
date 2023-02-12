import { Link } from "react-router-dom";
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
    name: "Photos",
    to: "/photos",
  },
  {
    name: "Posts",
    to: "/posts",
  },
];

function Navbar({isOpen,toggleNavbar}:IProps) {
  
  const container = classNames("fixed bg-primary-white w-14", {"rounded-r-md ":!isOpen, "w-full h-full": isOpen});

  const renderedLinks = navigation.map((_) => {
    return (
      <Link key={_.name} to={`${_.to}`}>
        <div className="text-2xl text-center m-6">{_.name}</div>
      </Link>
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
