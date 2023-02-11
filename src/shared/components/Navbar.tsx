import { Link } from "react-router-dom";

const navigation = [
    {
        name: "Photos",
        to: "/photos"
    },
    {
        name: "Posts",
        to: "/posts"
    },
    {
        name: "Users",
        to: "/users"
    }
]

function Navbar() {

    const renderedLinks = navigation.map((_) => {
        return <Link key={_.name} to={`${_.to}`}>{_.name}</Link>
    })

    return (
        <div>
            {renderedLinks}
        </div>
    )
}

export default Navbar;