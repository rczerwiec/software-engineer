import { useEffect } from "react";
import ReactDOM from "react-dom";

interface IProps {
  onClose?: () => void;
  children: JSX.Element;
}

function Modal({ onClose, children }: IProps) {
  useEffect(() => {
    document.body.classList.add("overflow-hidden");

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  return ReactDOM.createPortal(
    <>
      <div onClick={onClose}></div>
      {children}
    </>,
    document.querySelector(".modal-container")!
  );
}

export default Modal;
