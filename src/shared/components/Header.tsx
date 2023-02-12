import { Link } from "react-router-dom";
import { FcMenu } from "react-icons/fc";

interface IProps {
    toggleNavbar: () => void;
}

function Header({toggleNavbar}: IProps) {

  return (
    <div className="flex w-screen bg-primary-white justify-between">
      <div className="flex items-center justify-center w-14 h-14 " onClick={toggleNavbar}>
        <FcMenu className="w-6 h-6"/>
      </div>
      <div className="flex justify-start items-center">Users</div>
      <Link className="flex items-center justify-end mx-4" to={`/userProfile`}>
        <div className="m-4">Tomasz Polak</div>
        <div className="bg-red-500 rounded-full w-12 h-12"></div>
      </Link>
    </div>
  );
}


export default Header;
