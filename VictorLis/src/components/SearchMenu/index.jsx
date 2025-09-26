import styles from "./style.module.css";
import { SearchIcon } from "lucide-react";

export default function SearchMenu() {
  return (
    <div className={styles.searchMenu}>
      <input
        type="text"
        placeholder="Search..."
        className={styles.search}
      />
      <SearchIcon size={16} className={styles.searchButton} />
    </div>
  );
}
