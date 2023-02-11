import Footer from "./Footer";
import Navbar from "./Navbar";

interface IProps {
    children: React.ReactNode;
}

function Layout({ children }: IProps) {
    return (
        <div>
            <Navbar/>
                {children}
            <Footer/>
        </div>
    )
}

export default Layout;