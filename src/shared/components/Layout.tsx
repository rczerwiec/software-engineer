import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar";
import classnames from "classnames";

interface IProps {
  children: React.ReactNode;
}

function Layout({ children }: IProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-primary-gray">
      {isOpen && (
        <Navbar
          isOpen={isOpen}
          toggleNavbar={toggleNavbar}
        />
      )}
      <Header
        toggleNavbar={toggleNavbar}
      />

      <div className="bg-primary-white mt-4 p-4 rounded-xl h-[calc(100vh-5rem)]">
        {children}
      </div>
      <Footer />

      
    </div>
  );
}

export default Layout;
