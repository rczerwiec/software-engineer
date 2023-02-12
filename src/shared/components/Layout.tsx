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

  const fixedContainer = classnames("flex bg-primary-gray");

  return (
    <div>
      {isOpen && (
        <Navbar
          isOpen={isOpen}
          toggleNavbar={toggleNavbar}
        />
      )}
      <Header
        toggleNavbar={toggleNavbar}
      />

      <div className="bg-primary-white mt-4">
        {children}
        </div>

      <Footer />
    </div>
  );
}

export default Layout;
