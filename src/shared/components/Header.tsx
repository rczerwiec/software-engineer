import { Link } from "react-router-dom";
import { FcMenu } from "react-icons/fc";
import {FaUserCircle} from "react-icons/fa";
import { useSelector } from "react-redux";
import { RootState } from "../store";


interface IProps {
    toggleNavbar: () => void;
}

function Header({toggleNavbar}: IProps) {
  const userProfile = useSelector((state: RootState) => state.userProfile);



  return (
    <div className="flex w-full bg-primary-white justify-between">
      <div className="flex items-center justify-center w-14 h-14 border-white border-r-primary-gray border-2" onClick={toggleNavbar}>
        <FcMenu className="w-6 h-6"/>
      </div>
      <Link className="flex items-center justify-end mx-4" to={`/userProfile`}>
        <div className="m-4">{userProfile.name}</div>
        <FaUserCircle className="w-10 h-10"></FaUserCircle>
      </Link>
    </div>
  );
}


export default Header;
