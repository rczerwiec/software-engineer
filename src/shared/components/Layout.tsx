import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";

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
      <ToastContainer />
      {isOpen && <Navbar isOpen={isOpen} toggleNavbar={toggleNavbar} />}
      <Header toggleNavbar={toggleNavbar} />

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.6,
          delay: 0.1,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="bg-primary-white mt-4 p-4 rounded-xl h-[calc(100vh-5rem)] xl:mx-40 xl:h-[calc(100vh-9rem)]"
 
      >
        {children}
      </motion.div>
      <Footer />
    </div>
  );
}

export default Layout;
