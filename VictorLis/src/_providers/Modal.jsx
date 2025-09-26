import { createContext, useEffect, useState } from "react";
import ModalComponent from "../components/ModalComponent";

export const MenuContext = createContext({});

export default function MenuProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () =>
    setIsOpen(!isOpen)

  return (
    <MenuContext.Provider value={{ isOpen, toggleOpen }}>
      {isOpen && <ModalComponent />}
      {children}
    </MenuContext.Provider>
  );
}
