import { useNavigate } from "react-router-dom";
import SearchMenu from "../SearchMenu";
import styles from "./style.module.css";
import { CornerDownLeft, Menu } from "lucide-react";
import { useModal } from "../../_hooks/use-modal";

export default function Navbar() {
  const navigate = useNavigate();
  const { toggleOpen } = useModal();
  const isRoot = () => window.location.href.includes("plate") || window.location.href.includes("about");

  return (
    <header className={styles.navbarHeader}>
      <h1 className={styles.navbarTitle}>Eating Sky</h1>
      <nav className={styles.navbarNav}>
        {isRoot() ? (
          <CornerDownLeft
            className={styles.icon}
            onClick={() => navigate("/")}
          />
        ) : (
          <></>
        )}
        <a href="/">Início</a>
        <a href="/plates">Pratos</a>
        <a href="/about">Sobre</a>
        <a href="#" onClick={toggleOpen}>Contato</a>
        <SearchMenu />
        <Menu
          className={styles.icon}  
          onClick={toggleOpen}
        />
      </nav>
    </header>
  );
}
