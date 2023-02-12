import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar";

interface IProps {
    children: React.ReactNode;
}

function Layout({ children }: IProps) {
    return (
        <div>
            <Navbar/>
            <Header/>
                {children}
            <Footer/>
        </div>
    )
}

export default Layout;