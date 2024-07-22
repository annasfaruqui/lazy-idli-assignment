import { cloneElement, createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import { FaXmark } from "react-icons/fa6";
import styles from "./Popup.module.css";

import { useOutsideClick } from "../../hooks/useOutsideClick";

const PopupContext = createContext();

function Popup({ children }) {
  const [openName, setOpenName] = useState("");

  const close = () => setOpenName("");
  const open = setOpenName;

  return (
    <PopupContext.Provider value={{ openName, close, open }}>
      {children}
    </PopupContext.Provider>
  );
}

function Open({ children, opens: opensWindowName }) {
  const { open } = useContext(PopupContext);

  return cloneElement(children, { onClick: () => open(opensWindowName) });
}

function Window({ children, name, heading }) {
  const { openName, close } = useContext(PopupContext);
  const ref = useOutsideClick(close);

  if (name !== openName) return null;

  return createPortal(
    <div className={styles.overlay}>
      <div className={styles.popup} ref={ref}>
        <header className={styles.popupHeading}>
          <h3>{heading}</h3>
          <button onClick={close} className={styles.closeButton}>
            <FaXmark />
          </button>
        </header>
        <div className={styles.popupMain}>
          {cloneElement(children, { onClosePopup: close })}
        </div>
      </div>
    </div>,
    document.body
  );
}

Popup.Open = Open;
Popup.Window = Window;

export default Popup;
