import { useContext } from "react";
import { MenuContext } from "../_providers/Modal";

export const useModal = () => useContext(MenuContext)