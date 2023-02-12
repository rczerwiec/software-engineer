import { Link } from "react-router-dom";

function Header(){
    return(
        <div><Link to={`/userProfile`}>User</Link></div>
    )
}

export default Header;